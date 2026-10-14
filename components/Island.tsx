import { type Section } from "./tokens";

/**
 * The isometric park. `public/island.js` upgrades <dh-island>, paints the
 * canvas and injects the map pins itself, reading these attributes — so React
 * renders the element empty and leaves its children alone.
 */
export default function Island({ zoomTo }: { zoomTo?: Section }) {
  // Only the homepage park can be spun and zoomed. Every page frames the whole
  // park, so the map works as a navigator everywhere; zoomto just marks which
  // landmark is the current one.
  const interactive = zoomTo === undefined ? "" : undefined;

  /* Every pin on every page, always relative. Passing only the current
     section's href left the others falling back to the absolute production
     URLs baked into island.js, which sent people off the deployment. */
  const hrefs = { hrefhome: "/", hreftuition: "/tuition", hrefai: "/ai", hrefweb: "/web" };

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <dh-island
        time="sunrise"
        spot="island-spot"
        zoomto={zoomTo}
        interactive={interactive}
        {...hrefs}
        style={{ display: "block", position: "absolute", overflow: "hidden", inset: 0 }}
      />
    </div>
  );
}
