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

### `/sunglasses` — Protected Specs

A second, self-contained landing page (product concept: a hand-stitched leather
sunglasses case), built from a design handoff. It shares nothing with the
homepage but the Next.js app itself.

- `app/sunglasses/page.tsx` — assembles the sections
- `app/sunglasses/layout.tsx` — route metadata
- `app/sunglasses/sunglasses.css` — fonts (Oswald, Inter, Roboto Mono), palette, responsive overrides (≤900px, ≤600px)
- `components/sunglasses/` — Nav, Hero, SpecSheet, WearTest, Order, PageFooter, plus `ImageSlot` and `tokens.ts`

Every rule in `sunglasses.css` is scoped under `.sg`, since `app/globals.css` is
loaded by the root layout and applies site-wide. Its fonts come in via `@import`
at the top of that stylesheet rather than a `<link>` in the route layout — a
`<link>` rendered from a nested layout lands in `<body>` on React 18, and
`next/font` would make `next build` depend on reaching Google Fonts. Next serves
the route stylesheet from `<head>` and only on `/sunglasses`, so the homepage
never downloads those three families.

## Notes

- The two web-showcase cards (Service 03) link to `art.davidhaxton.co.uk` and `deep-patterns.davidhaxton.co.uk` with placeholder screenshot boxes — swap in real screenshots before launch.
- "Book an intro call" currently links to `#` — wire up a real form or booking embed (e.g. Calendly) when ready.
- GCSE/A-Level results stats are hard-coded in `components/ServiceTuition.tsx`.
- On `/sunglasses`, all seven images are `ImageSlot` placeholders — the label on each one is the shot brief. Swap the component for real photography when it lands.
- `/sunglasses` "Add to bag" is a non-functional button and the footer links all point at `#order`; the hide swatches are real state but aren't wired to anything downstream.
