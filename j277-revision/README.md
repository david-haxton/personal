# J277 Revision Tutor

AI-powered revision tutor for OCR J277 GCSE Computer Science (Papers 01 and 02), built for students preparing for the June 2026 exams. Every question, prompt, and piece of feedback is developed against the OCR specification, mark schemes, and examiner reports.

Live: <https://j277-revision.vercel.app>

## How it works

- **Frontend** — a single static page (`index.html` + `style.css` + `script.js`). No framework, no build step.
- **Backend** — Python serverless functions on Vercel under `api/`:
  - `POST /api/quiz` — Socratic quiz mode, unit- or subtopic-scoped. Streams responses as Server-Sent Events.
  - `POST /api/practice` — exam-paper marking with a two-attempt coaching-then-mark flow. Currently hidden on the landing page pending server-side attempt tracking.
  - `GET /api/questions?paper=&question=` — returns question text as HTML for the practice UI.
- **Knowledge base** — markdown files under `knowledge_base/`:
  - `teaching/` — per-subtopic notes (loaded into the Claude system prompt at request time)
  - `spec/` — the J277 specification
  - `papers/` — past paper questions (2023, 2024)
  - `mark_schemes/` — mark schemes for those papers
  - `examiner_reports/` — examiner reports flagging common student errors

## Running

Requires an `ANTHROPIC_API_KEY` environment variable. On Vercel this is a Project → Settings → Environment Variable set for Production and Preview.

No local dev flow beyond opening `index.html` in a browser after `vercel dev` from the repo root (needs Vercel CLI).

## Structure

```
api/                         # Serverless functions
  quiz.py                    # Quiz mode (streaming)
  practice.py                # Exam Practice marking
  questions.py               # Question text lookup
  quiz_mode_system_prompt.md # Reference copy of the quiz system prompt
  practice_mode_system_prompt.md
knowledge_base/              # All markdown content injected into prompts
public/papers/               # PDF copies of past papers
index.html                   # Single-page app
script.js                    # Frontend logic
style.css                    # Styles
vercel.json                  # Route + build config
```
