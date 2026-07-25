# David Haxton — Landing Page

Marketing landing page for David Haxton: computer science tutor, AI tutor for adults, web layout consultant, and maker of free teacher tools.

Built with [Next.js](https://nextjs.org/) (App Router) and TypeScript. Single-page site with sticky nav, hero, mission statement, three service sections (GCSE/A-Level tuition, AI tuition, web consultation), a free teacher tools showcase, a contact card, and a footer.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/layout.tsx` — root layout, fonts (Google Fonts: Plus Jakarta Sans, Inter, Caveat, JetBrains Mono), page metadata
- `app/page.tsx` — assembles the page sections
- `app/globals.css` — design tokens, base styles, responsive overrides (tablet ≤960px, mobile ≤600px)
- `components/` — one component per section (Header, Hero, Mission, WhatIDoLead, ServiceTuition, ServiceAI, ServiceWeb, TeacherTools, Contact, Footer)
- `public/stickers/` — pixel-art character illustrations

## Notes

- The two web-showcase cards (Service 03) link to `art.davidhaxton.co.uk` and `deep-patterns.davidhaxton.co.uk` with placeholder screenshot boxes — swap in real screenshots before launch.
- "Book an intro call" currently links to `#` — wire up a real form or booking embed (e.g. Calendly) when ready.
- GCSE/A-Level results stats are hard-coded in `components/ServiceTuition.tsx`.
