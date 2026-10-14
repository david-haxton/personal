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

Both bars carry **Home** as a nav item, and both wordmarks link to `/`, so
there are four routes back to the landing page from anywhere. The header pill
takes the amber fill for the page you are on, Home included.

**The map is navigation, so it shows every destination on every page.** All
three pins are always present and always relative links, and the park is framed
the same way everywhere. Zooming a section page into its own landmark used to
push the other two off screen, which left the map with a single pin pointing at
the page you were already on — a dead end. The current section is signalled by
the focus ring and its amber pin instead of by the framing.
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
| `zoomto` | Which landmark is the current page (`tuition` / `ai` / `web`); omitted on home. Marks it with the focus ring and an amber pin — it no longer changes the framing. |
| `interactive` | Present on the homepage only: drag to spin, arrow keys to step a quadrant |
| `hrefhome`, `hreftuition`, `hrefai`, `hrefweb` | Where each pin links |

React renders the element empty and never touches its children. `components/Island.tsx`
picks the right attributes per page; `types/global.d.ts` declares the element for TSX.

#### Driving the camera

The element listens on two window events, so nothing needs a ref to it:

- `dh-focus` — `detail` is a station id, which highlights that landmark.
- `dh-camera` — `detail` takes `{ spin: ±1 }` to turn a quarter, `{ zoom: ±1 }`
  to step the zoom, or `{ reset: true }` to return to the default view.
- `dh-motion` — `detail` takes `{ on: true | false }` to force the park moving
  or still, or `{}` to go back to following the system preference.

`components/IslandControls.tsx` is the only caller of both, and it deliberately
renders **only** a Pause/Animate button. Spinning and zooming are left
undocumented on the page so finding them is a small reward; motion that runs
indefinitely still needs a visible way to stop it, so that control stays.

Because the element registers its `dh-motion` listener only when `island.js`
upgrades it — after React's effects run — the control waits on
`customElements.whenDefined("dh-island")` before replaying a saved preference.
Without that the park stayed frozen while the button claimed to be playing.

With the buttons gone, the park stays keyboard-operable while focused: left and
right arrows turn it a quarter, `+` / `-` zoom, `0` resets.

The wheel zooms when the cursor is over the park, sharing one zoom state with
the buttons. It only swallows the event while the zoom is actually changing —
once pinned at either limit the wheel passes through and the page scrolls
normally, so nobody gets stuck at the top. Touch is unaffected; the canvas is
`touch-action: pan-y` so a vertical swipe still scrolls on a phone.

The park is drawn at a fixed 45° isometric, and `box()` only ever paints the
two walls of a building that face the camera. Rotation therefore snaps to the
four corner views: which two walls are drawn is chosen from the rotated normal,
and the original hand-tuned shade constants are assigned by screen orientation
rather than by axis, so the art is identical at every quadrant. Free 360°
rotation would mean rebuilding those primitives around a real lighting model.

Dragging works under `prefers-reduced-motion` — only the easing is suppressed,
so the view snaps between quadrants instead of gliding.

The motion preference is read **live**, not once at load. Chrome's Battery
Saver reports reduced motion while it is active, and a one-shot read left the
park frozen for the life of the page once that happened. The `dh-motion`
override lets a viewer start the park regardless of what the browser reports.

#### Who walks where

`newGroup(kind)` builds a different crowd per section — an adult with one or
two backpacked children for tuition, adults of mixed age with "?" bubbles for
AI, laptop-carrying makers (sometimes in pairs) for web. Each page weights the
spawn toward its own audience via the `MIX` table in `connectedCallback`.
Counts are weighted by **people, not groups**: a tuition group is 2–3 people
and a web group 1–2, so equal group counts would leave `/web` half as
populated. Every page lands near 30 figures with roughly 70% its own kind.

Groups walk door to door. `STOPS` lists the places a walk can start or end —
the three building doors, the park gate and the lakeside — and `nextStop()`
picks a new one on arrival, never where the group already is, favouring its own
section's building. They spawn standing at a door rather than mid-path, with
staggered waits so they don't all set off at once.

One walker is David himself — `newDavid()`, a single bald, dark-bearded figure
spawned on every page. He has no home building, so he visits all three evenly
rather than favouring one. `person()` grew a `beard` option for him: the mirror
of the existing hair cap, drawn across the lower half of the head. His skin
tone is `SKIN[0]`; change that one value in `newDavid()` to adjust it. He is
scenery only — no tag, nothing to click.

Pin sizes are cached on the elements (`__w`) by `measurePins()` and re-taken
only when the canvas resizes; reading `offsetWidth` inside the draw loop forced
a synchronous reflow between style writes.



Arriving at one of the three buildings, a group goes **inside** — `g.inside` is
set for the duration of the wait and `draw()` skips them — then comes back out
of the same door when the wait ends. The gate and the lakeside are open air, so
visitors just pause there. Between 16 and 25 of the ~30 figures are visible at
any moment, so the park never empties.

## Still to do before launch

- **Self-host or subset Schibsted Grotesk.** It currently loads from Google
  Fonts via a `<link>` in `app/layout.tsx`.
