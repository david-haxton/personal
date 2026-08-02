#!/usr/bin/env python3
"""
Mark eval harness for /api/practice.

Runs each case in cases.json through the practice endpoint in
attempt-2 mode (forcing a numeric mark) and compares the awarded mark
to the expected mark from the OCR mark scheme.

Purpose: catch regressions in the marker prompt or the underlying
model. A high exact-match rate is a green light; misses (delta of 2+
marks) are the interesting ones — inspect the marker's reply with
--verbose and decide whether the marker is wrong or the expected mark
in the case file is wrong.

Usage:
    python eval/mark_eval.py
    python eval/mark_eval.py --base-url http://localhost:3000
    python eval/mark_eval.py --cases eval/cases.json --verbose
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import time
import urllib.request
from urllib.error import HTTPError, URLError

DEFAULT_BASE_URL = os.environ.get('J277_BASE_URL', 'https://j277-revision.vercel.app')
DEFAULT_CASES_PATH = os.path.join(os.path.dirname(__file__), 'cases.json')
DELAY_BETWEEN_CALLS_SECONDS = 3  # stays clear of the 30/min IP rate limit


def call_practice(base_url: str, paper: str, question: str, answer: str):
    """POST to /api/practice with attemptNumber=2. Returns dict-like result."""
    url = base_url.rstrip('/') + '/api/practice'
    payload = json.dumps({
        'paper': paper,
        'question': question,
        'answer': answer,
        'attemptNumber': 2,
    }).encode('utf-8')
    req = urllib.request.Request(
        url,
        data=payload,
        method='POST',
        headers={'Content-Type': 'application/json'},
    )
    try:
        with urllib.request.urlopen(req, timeout=90) as resp:
            data = json.loads(resp.read().decode('utf-8'))
    except HTTPError as e:
        body = ''
        try:
            body = e.read().decode('utf-8', errors='replace')[:300]
        except Exception:
            pass
        return {'error': f'HTTP {e.code}: {body}'}
    except URLError as e:
        return {'error': f'Network error: {e.reason}'}
    except Exception as e:
        return {'error': f'Unexpected: {e}'}

    metadata = data.get('metadata') or {}
    awarded_raw = metadata.get('marks_awarded')
    available_raw = metadata.get('marks_available')

    def as_int(value):
        try:
            return int(value)
        except (TypeError, ValueError):
            return None

    return {
        'awarded': as_int(awarded_raw),
        'available': as_int(available_raw),
        'reply': data.get('reply', ''),
        'raw_metadata': metadata,
    }


def status_for(delta: int | None) -> str:
    if delta is None:
        return 'ERROR'
    if delta == 0:
        return 'MATCH'
    if abs(delta) <= 1:
        return 'CLOSE'
    return 'MISS'


def marker_for(status: str) -> str:
    return {'MATCH': '✓', 'CLOSE': '~', 'MISS': '✗', 'ERROR': '!'}[status]


def run(base_url: str, cases_path: str, verbose: bool) -> int:
    with open(cases_path, 'r', encoding='utf-8') as f:
        cases = json.load(f)

    if not cases:
        print('No cases loaded — nothing to run.')
        return 1

    print(f'Base URL: {base_url}')
    print(f'Cases:    {cases_path} ({len(cases)} cases)')
    print()

    results = []
    for i, case in enumerate(cases, start=1):
        label = case.get('label', f'{case["paper"]} {case["question"]}')
        expected = case['expected_marks']
        print(f'[{i}/{len(cases)}] {label}... ', end='', flush=True)

        result = call_practice(base_url, case['paper'], case['question'], case['answer'])

        if 'error' in result:
            status = 'ERROR'
            delta = None
            print(f'! {result["error"]}')
            results.append({
                **case, 'status': status, 'awarded': None, 'delta': None,
                'error': result['error'], 'reply': '',
            })
        elif result['awarded'] is None:
            status = 'ERROR'
            delta = None
            print('! no marks_awarded in metadata')
            results.append({
                **case, 'status': status, 'awarded': None, 'delta': None,
                'error': 'no marks in metadata', 'reply': result.get('reply', ''),
            })
        else:
            awarded = result['awarded']
            delta = awarded - expected
            status = status_for(delta)
            print(f'{marker_for(status)} expected {expected}, got {awarded} (delta {delta:+d})')
            results.append({
                **case, 'status': status, 'awarded': awarded, 'delta': delta,
                'error': None, 'reply': result.get('reply', ''),
            })

        if verbose and status in ('MISS', 'ERROR'):
            print('  --- marker reply ---')
            for line in (results[-1]['reply'] or '').split('\n'):
                print(f'  {line}')
            print()

        if i < len(cases):
            time.sleep(DELAY_BETWEEN_CALLS_SECONDS)

    print()
    print('=' * 60)
    print('Summary')
    print('=' * 60)
    total = len(results)
    errors = sum(1 for r in results if r['status'] == 'ERROR')
    scored = total - errors
    if scored == 0:
        print(f'All {total} cases errored — check the base URL and env config.')
        return 1

    matches = sum(1 for r in results if r['status'] == 'MATCH')
    within_one = sum(1 for r in results if r['delta'] is not None and abs(r['delta']) <= 1)
    mae = sum(abs(r['delta']) for r in results if r['delta'] is not None) / scored

    print(f'Total cases:       {total}')
    print(f'Scored:            {scored}   (errored: {errors})')
    print(f'Exact match:       {matches}/{scored} ({matches / scored * 100:.0f}%)')
    print(f'Within ±1 mark:    {within_one}/{scored} ({within_one / scored * 100:.0f}%)')
    print(f'Mean abs error:    {mae:.2f} marks')

    misses = [r for r in results if r['status'] == 'MISS']
    if misses:
        print()
        print(f'Misses ({len(misses)}) worth reviewing:')
        for r in misses:
            print(f'  - {r["label"]}: expected {r["expected_marks"]}, got {r["awarded"]} (delta {r["delta"]:+d})')

    return 0 if errors == 0 and matches == scored else 1


def main():
    parser = argparse.ArgumentParser(description='J277 practice-marker eval harness')
    parser.add_argument('--base-url', default=DEFAULT_BASE_URL,
                        help=f'Base URL of the deployed app (default: {DEFAULT_BASE_URL})')
    parser.add_argument('--cases', default=DEFAULT_CASES_PATH,
                        help=f'Path to cases JSON (default: {DEFAULT_CASES_PATH})')
    parser.add_argument('-v', '--verbose', action='store_true',
                        help="Print the marker's full reply for MISS and ERROR cases")
    args = parser.parse_args()

    try:
        sys.exit(run(args.base_url, args.cases, args.verbose))
    except KeyboardInterrupt:
        print('\nInterrupted.')
        sys.exit(130)


if __name__ == '__main__':
    main()
