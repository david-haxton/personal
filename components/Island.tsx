import { type Section } from "./tokens";

/**
 * The isometric park. `public/island.js` upgrades <dh-island>, paints the
 * canvas and injects the map pins itself, reading these attributes — so React
 * renders the element empty and leaves its children alone.
 */
export default function Island({ zoomTo }: { zoomTo?: Section }) {
  const hrefs =
    zoomTo === undefined
      ? { hreftuition: "/tuition", hrefai: "/ai", hrefweb: "/web" }
      : zoomTo === "tuition"
        ? { hreftuition: "/tuition" }
        : zoomTo === "ai"
          ? { hrefai: "/ai" }
          : { hrefweb: "/web" };

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <dh-island
        hrefhome="/"
        time="sunrise"
        spot="island-spot"
        zoomto={zoomTo}
        {...hrefs}
        style={{ display: "block", position: "absolute", overflow: "hidden", inset: 0 }}
      />
    </div>
  );
}
