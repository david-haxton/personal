# David Haxton — davidhaxton.co.uk

Four static pages: a short chooser home page plus three focused pages (student
tuition, AI tuition for adults, web design). Built with
[Next.js](https://nextjs.org/) (App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site map

| Route | Page | Purpose |
|---|---|---|
| `/` | Home (chooser) | Name, headline, one line of context, three doors. Nothing else. |
| `/tuition` | Student tuition | GCSE & A-Level CS. Carries all the proof — the 97.2% stat, results table, note for parents. |
| `/ai` | AI tuition for adults | Deliberately shorter and softer; a side offer. |
| `/web` | Web design | Proof-of-craft portfolio. Two live builds plus how-I-work. |

Every call to action is a plain `mailto:hello@davidhaxton.co.uk` — no booking
tool, no form, nothing to validate.

## Project structure

- `app/layout.tsx` — root layout: the 14px page wrapper, Archivo webfont, shared header and footer, site-wide metadata
- `app/page.tsx`, `app/tuition/`, `app/ai/`, `app/web/` — one directory per route, each with its own `metadata`
- `app/globals.css` — colour tokens, base styles, hover and focus states
- `components/tokens.ts` — shared style values (borders, hard shadows, buttons, type scales) used by the inline styles
- `components/` — `SiteBar` (rendered as both `Header` and `Footer`), plus the shared `PageHero`, `IntroBox`, `EmailButton`, `DetailCard`, `ProjectCard`, `Sticker`
- `public/stickers/` — pixel-art characters, one per page hero (`char-5.png` is unused)

## Design notes

Neo-brutalist: white ground, near-black ink (`#16241C`), one green accent
(`#6EC46E`). 3px borders and hard, unblurred offset shadows on everything;
zero border-radius anywhere. Hovering a bordered card or button shrinks its
shadow — nothing moves and nothing fades.

Layout is fluid rather than breakpoint-driven: headline sizes use `clamp()`,
every multi-column area is `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))`, and
the header and footer wrap. There are no media queries. The `min()` in the grid
tracks is what keeps the tuition results panel inside its border on a ~380px
phone.

## Still to do before launch

- **Real screenshots** for the two `/web` project cards — they are striped
  placeholders until the files land. Drop them in `public/screenshots/` and
  pass them via `ProjectCard`'s `image` prop; see the README in that folder.
- **Self-host or subset Archivo.** It currently loads from Google Fonts via a
  `<link>` in `app/layout.tsx`.
