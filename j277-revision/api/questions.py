"""
Questions API Endpoint
Vercel serverless function: GET /api/questions?paper=2024&question=Q6a

Returns the text of a specific past paper question from the question bank markdown files.
Used by the Practice Mode UI to display question text on screen.
"""

import json
import os
import re
import sys
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

# Make sibling modules importable
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _security import set_cors_headers, allow_request  # noqa: E402


# ==================== CONFIG ====================

KB_BASE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'knowledge_base')

# Valid question IDs per paper — must match practice.py
VALID_QUESTIONS = {
    '2023': [
        'Q1', 'Q1b-i', 'Q1b-iii', 'Q1b-iv', 'Q1c-i', 'Q1c-ii',
        'Q2a-i', 'Q2a-ii', 'Q2b-i', 'Q2b-ii', 'Q2b-iii',
        'Q4a', 'Q4b',
        'Q5a-i', 'Q5a-ii', 'Q5b', 'Q5c-i', 'Q5c-ii', 'Q5d-i', 'Q5d-ii',
        'Q6', 'Q7',
    ],
    '2024': [
        'Q1b', 'Q1d',
        'Q2a-i', 'Q2a-ii', 'Q2b-i', 'Q2b-ii', 'Q2c-ii', 'Q2c-iii',
        'Q3a', 'Q3b',
        'Q4',
        'Q5a-i', 'Q5a-ii', 'Q5b-i', 'Q5b-ii', 'Q5b-iii', 'Q5b-iv',
        'Q6a', 'Q6b', 'Q6c',
        'Q7a', 'Q7b-i', 'Q7b-ii', 'Q7b-iii',
    ],
}

# Mark allocations per question — used by the UI to show the student how many marks are available
MARK_ALLOCATIONS = {
    '2023': {
        'Q1':      6,
        'Q1b-i':   1,
        'Q1b-iii': 1,
        'Q1b-iv':  2,
        'Q1c-i':   3,
        'Q1c-ii':  3,
        'Q2a-i':   4,
        'Q2a-ii':  2,
        'Q2b-i':   1,
        'Q2b-ii':  4,
        'Q2b-iii': 2,
        'Q4a':     4,
        'Q4b':     3,
        'Q5a-i':   2,
        'Q5a-ii':  2,
        'Q5b':     1,
        'Q5c-i':   3,
        'Q5c-ii':  3,
        'Q5d-i':   4,
        'Q5d-ii':  2,
        'Q6':      8,
        'Q7':      3,
    },
    '2024': {
        'Q1b':     4,
        'Q1d':     3,
        'Q2a-i':   2,
        'Q2a-ii':  2,
        'Q2b-i':   4,
        'Q2b-ii':  3,
        'Q2c-ii':  2,
        'Q2c-iii': 3,
        'Q3a':     4,
        'Q3b':     6,
        'Q4':      8,
        'Q5a-i':   1,
        'Q5a-ii':  2,
        'Q5b-i':   4,
        'Q5b-ii':  1,
        'Q5b-iii': 1,
        'Q5b-iv':  2,
        'Q6a':     2,
        'Q6b':     4,
        'Q6c':     3,
        'Q7a':     3,
        'Q7b-i':   2,
        'Q7b-ii':  3,
        'Q7b-iii': 2,
    },
}


def _read_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"[questions.py] File not found: {filepath}")
        return ''
    except Exception as e:
        print(f"[questions.py] Error reading {filepath}: {e}")
        return ''


def extract_question(paper, question_id):
    """
    Extract a single question block from the question bank markdown file.
    Questions are delimited by ## {question_id} headers.
    Returns the question text as a string, or empty string if not found.
    """
    filepath = os.path.join(KB_BASE, 'papers', f'j277_01_{paper}_questions.md')
    content = _read_file(filepath)
    if not content:
        return ''

    # Find the section starting with ## {question_id}
    # and ending at the next ## header or end of file
    pattern = rf'^## {re.escape(question_id)}\s*\n(.*?)(?=^## |\Z)'
    match = re.search(pattern, content, re.MULTILINE | re.DOTALL)

    if not match:
        print(f"[questions.py] Question {question_id} not found in {paper} question bank")
        return ''

    return match.group(1).strip()


def question_text_to_html(text):
    """
    Convert question markdown to clean HTML for display.
    Handles: bold, tables, bullet lists, paragraphs.
    Keeps it simple — no external dependencies.
    """
    lines = text.split('\n')
    html_parts = []
    in_table = False
    in_list = False
    buffer = []

    def flush_paragraph():
        if buffer:
            para = ' '.join(buffer).strip()
            if para:
                # Apply inline formatting
                para = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', para)
                para = re.sub(r'\*(.+?)\*', r'<em>\1</em>', para)
                html_parts.append(f'<p>{para}</p>')
            buffer.clear()

    def flush_list():
        nonlocal in_list
        if in_list:
            html_parts.append('</ul>')
            in_list = False

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip unit/paper metadata lines
        if stripped.startswith('**Unit:**') or stripped.startswith('**['):
            i += 1
            continue

        # Mark allocation line — render as a badge
        mark_match = re.match(r'\*\*\[(\d+)\s*marks?\]\*\*', stripped)
        if mark_match:
            flush_paragraph()
            flush_list()
            i += 1
            continue

        # Table row
        if stripped.startswith('|'):
            flush_paragraph()
            flush_list()
            if not in_table:
                html_parts.append('<table class="q-table">')
                in_table = True
            # Skip separator rows (|---|---|)
            if re.match(r'^\|[-| ]+\|$', stripped):
                i += 1
                continue
            cells = [c.strip() for c in stripped.split('|')[1:-1]]
            # First table row = header
            if in_table and html_parts[-1] == '<table class="q-table">':
                html_parts.append('<thead><tr>' +
                    ''.join(f'<th>{c}</th>' for c in cells) +
                    '</tr></thead><tbody>')
            else:
                html_parts.append('<tr>' +
                    ''.join(f'<td>{c}</td>' for c in cells) +
                    '</tr>')
            i += 1
            continue
        else:
            if in_table:
                html_parts.append('</tbody></table>')
                in_table = False

        # Bullet list item
        if stripped.startswith('- ') or stripped.startswith('* '):
            flush_paragraph()
            if not in_list:
                html_parts.append('<ul>')
                in_list = True
            item = stripped[2:].strip()
            item = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', item)
            html_parts.append(f'<li>{item}</li>')
            i += 1
            continue
        else:
            flush_list()

        # Blank line — flush paragraph
        if stripped == '':
            flush_paragraph()
            i += 1
            continue

        # Horizontal rule — skip
        if stripped == '---':
            flush_paragraph()
            i += 1
            continue

        # Regular text — accumulate into paragraph buffer
        buffer.append(stripped)
        i += 1

    # Flush anything remaining
    flush_paragraph()
    flush_list()
    if in_table:
        html_parts.append('</tbody></table>')

    return '\n'.join(html_parts)


# ==================== HANDLER ====================

class handler(BaseHTTPRequestHandler):
    """Vercel serverless function handler for Questions endpoint."""

    def do_GET(self):
        try:
            if not allow_request(self):
                self._send_error(429, "Too many requests. Please slow down.")
                return

            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)

            paper = params.get('paper', [None])[0]
            question = params.get('question', [None])[0]

            if not paper or not question:
                self._send_error(400, "Both 'paper' and 'question' parameters are required.")
                return

            if paper not in VALID_QUESTIONS:
                self._send_error(400, f"Invalid paper: {paper}.")
                return

            if question not in VALID_QUESTIONS[paper]:
                self._send_error(400, f"Question '{question}' not available for {paper}.")
                return

            # Extract question text
            raw_text = extract_question(paper, question)
            if not raw_text:
                self._send_error(404, f"Question text not found for {paper} {question}.")
                return

            # Convert to HTML
            html = question_text_to_html(raw_text)

            # Get mark allocation
            marks = MARK_ALLOCATIONS.get(paper, {}).get(question, 0)

            self._send_json(200, {
                "paper": paper,
                "question": question,
                "marks": marks,
                "html": html,
                "raw": raw_text,
            })

        except Exception as e:
            print(f"[questions.py] Error: {e}")
            self._send_error(500, "Something went wrong. Please try again.")

    def do_OPTIONS(self):
        self.send_response(200)
        self._set_cors_headers()
        self.end_headers()

    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self._set_cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def _send_error(self, status_code, message):
        self._send_json(status_code, {"error": message})

    def _set_cors_headers(self):
        set_cors_headers(self, methods='GET, OPTIONS')
