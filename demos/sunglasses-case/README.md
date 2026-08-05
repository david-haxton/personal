# Protected Specs — proof of concept

A standalone landing page for a fictional leather sunglasses case, built from a
design handoff.

**Not part of the site.** It lives outside `app/`, so Next.js never picks it up
and it isn't published with davidhaxton.co.uk. `index.html` is one
self-contained file — no build step, no dependencies. Open it in a browser, or
drop it on any static host.

## Status

- All seven images are labelled placeholders; each label is the shot brief.
- The hide swatches work but are presentational — there's no basket behind
  "Add to bag", and the footer links all point at `#order`.
- Fonts (Oswald, Inter, Roboto Mono) load from Google Fonts, so the page needs a
  network connection to render in its intended typography.
