# Mark eval harness

A small runner for spot-checking whether the practice-mode marker (`/api/practice`) is scoring student answers the way the OCR mark scheme would. Point it at a deployment, run through a JSON file of `(answer, expected_mark)` cases, and get back a match rate plus a list of anything that missed.

## What it's for

Regression detection, not certification. The marker is an LLM — its accuracy will drift when the model or the prompt changes. This harness turns that drift into a number you can watch.

Green light: exact-match rate stays high across runs. Something to look into: a case starts failing that used to pass, or the mean absolute error starts creeping up after a prompt change.

## Running it

```bash
# hit the live deployment
python eval/mark_eval.py

# hit a local dev server (from `vercel dev`)
python eval/mark_eval.py --base-url http://localhost:3000

# see the marker's full reply for anything that misses
python eval/mark_eval.py --verbose
```

Each call spaces out by 3s to stay under the 30 requests / minute rate limit.

Exit code is `0` when every case matches exactly, `1` otherwise — so a `cron` / CI check reduces to a red/green.

## Adding cases

Each entry in `cases.json` is:

```json
{
  "label": "short human tag for the case",
  "paper": "2023",
  "question": "Q1b-i",
  "answer": "the student answer to grade",
  "expected_marks": 1,
  "notes": "why this is the expected mark — cite the mark scheme"
}
```

`paper` and `question` must match a valid ID in `api/practice.py`'s `VALID_QUESTIONS`. `expected_marks` is the number of marks a strict examiner would award for that specific answer.

Good sources for new cases, in order of trust:

1. Answers you have seen from real students, marked by hand against the mark scheme.
2. Answers taken directly from the mark scheme's Accept list (should score full) and Do Not Accept list (should score zero).
3. Answers you construct that touch a single accepted point (should score that partial credit).

Cases you invent from your own head are the weakest — they mostly confirm that the marker agrees with you, which is easier than agreeing with OCR.

## What the output means

- **MATCH** — awarded mark equals expected.
- **CLOSE** — off by exactly 1. Usually not scary on its own, but a lot of CLOSE misses in one direction means the marker is systematically too generous or too strict.
- **MISS** — off by 2 or more marks. Worth reading the marker's reply (with `--verbose`) and deciding whether the marker is wrong, or the expected mark in `cases.json` is wrong.
- **ERROR** — the call failed or came back without a mark. Check the deployment / rate limit / network.

## Not evaluated here

- The quality of the tutor's feedback text — this only reads the numeric mark.
- Attempt-1 coaching behaviour — every call is forced to attempt 2 to get a mark out.
- The quiz mode — quiz is Socratic and open-ended, no mark to check against. A different eval would be needed there (probably human-in-the-loop, not automated).
