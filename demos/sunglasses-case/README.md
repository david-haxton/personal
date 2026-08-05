# Protected Specs — proof of concept

A standalone landing page for a fictional leather sunglasses case, built from a
design handoff and a copy deck.

**Not part of the site.** It lives outside `app/`, so Next.js never picks it up
and it isn't published with davidhaxton.co.uk. `index.html` is one
self-contained file — no build step, no dependencies. Open it in a browser, or
drop it on any static host.

## Sections

Nav · Hero · 01 The Philosophy · 02 Material Specification · 03 Field Notes ·
04 First Edition Run · Footer

## Status

- **Photography is temporary.** The nine images are crops of two supplied
  product shots, embedded as base64 data URIs to keep this a single shareable
  file. The shot brief each one stands in for is kept in an HTML comment
  directly above it, so the list survives until real photography lands.
- Two of those briefs aren't met by the stand-ins: the Field Notes shots call
  for lifestyle settings (car dashboard, denim pocket, worn table) but show
  product-on-white instead.
- The hero frames a sliver of a second case that carries another company's
  logo — cropped as far out as the composition allows, but not gone.
- The navy case shown in Field Notes isn't one of the three launch colourways.
- The hide swatches work but are presentational — there's no basket behind
  "Pre-Order: £68", and the newsletter form is inert.
- Footer and nav links point at on-page anchors, since the pages they name
  don't exist yet.
- Colourway swatch hexes (Saddle Tan, Espresso Brown, Stealth Black) are
  approximations — match them to real hide samples before launch.
- Fonts (Oswald, Inter, Roboto Mono) load from Google Fonts, so the page needs a
  network connection to render in its intended typography.
