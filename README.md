# David Haxton — davidhaxton.co.uk

Four static pages: a short chooser home page plus three focused pages (student
tuition, AI for adults, web design). Built with
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
| `/` | Home (chooser) | Name, headline, three doors. Nothing else. |
| `/tuition` | Student tuition | GCSE & A-Level. Carries the results figure and the note for parents. |
| `/ai` | AI for adults | One-to-one sessions, plus free intro sessions for community hubs. |
| `/web` | Web design | Two live builds and how-I-work. |

Every call to action is a plain `mailto:hello@davidhaxton.co.uk` — no booking
tool, no form, nothing to validate.

## Project structure

- `app/layout.tsx` — root layout: fonts, site-wide metadata, and the script tag that upgrades `<dh-island>`
- `app/page.tsx`, `app/tuition/`, `app/ai/`, `app/web/` — one directory per route, each with its own `metadata`
- `app/globals.css` — colour tokens, base styles, hover and focus states, the one media query
- `components/tokens.ts` — palette, type stacks and the per-page accent map
- `components/` — `SiteHeader` / `SiteFooter`, `Hero`, `Island`, `Main`, `StubCard`, `DetailCard`, `CardGrid`, `ProjectCard`
- `public/island.js` — the isometric park, a self-contained custom element that paints a canvas and injects its own map pins
- `public/screenshots/` — the two live-build captures

## Design notes

Dark navy chrome (`#1C1A3A`) over a near-white page (`#F4F3FB`), with a dawn
gradient behind each hero and a per-page accent: amber for tuition, teal for
AI, coral for web. Rounded cards, soft shadows, Schibsted Grotesk for display
type over a system stack for body copy.

Layout is fluid rather than breakpoint-driven: headline sizes use `clamp()`,
card rows are `repeat(auto-fit, minmax(...))`, and the bars wrap. There is one
media query, which shrinks the ticket-stub counterfoil on phones so the body
text keeps a usable measure.

### The island

`<dh-island>` is a custom element in `public/island.js`. It paints the park to
a canvas and positions the map pins itself, reading its attributes:

| Attribute | Purpose |
|---|---|
| `time` | Lighting preset (`sunrise`) |
| `spot` | Id of the element to centre the park on — always `island-spot` |
| `zoomto` | Which landmark to zoom to (`tuition` / `ai` / `web`); omitted on home |
| `hrefhome`, `hreftuition`, `hrefai`, `hrefweb` | Where each pin links |

React renders the element empty and never touches its children. `components/Island.tsx`
picks the right attributes per page; `types/global.d.ts` declares the element for TSX.

## Still to do before launch

- **Self-host or subset Schibsted Grotesk.** It currently loads from Google
  Fonts via a `<link>` in `app/layout.tsx`.
