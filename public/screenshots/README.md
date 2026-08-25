# Project screenshots

Drop the two live-build captures here, then pass them to `ProjectCard` in
`app/web/page.tsx` via the `image` prop:

| File | Card | Site |
|---|---|---|
| `hidden-patterns.png` | Live build 01 | https://art.davidhaxton.co.uk/ |
| `deep-patterns.png` | Live build 02 | https://deep-patterns.davidhaxton.co.uk/ |

```tsx
<ProjectCard image="/screenshots/hidden-patterns.png" ... />
```

Capture at **16:10** — 1600×1000 is the right size (2× the largest the card is
ever displayed at). Anything else gets centre-cropped by `object-fit: cover`.
Without an `image` prop the card falls back to the striped placeholder.
