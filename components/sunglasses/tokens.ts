/** Design tokens for the Protected Specs landing page (route: /sunglasses). */

export const sg = {
  /** Page background — warm bone */
  bone: "#F5F3EF",
  /** Primary text on light */
  ink: "#111111",
  /** Dark section panels */
  panel: "#1C1C1C",
  /** Image wells inside dark panels */
  well: "#111111",
  /** Tobacco brown — rules, secondary labels */
  tobacco: "#7A5C43",
  /** Rust accent */
  accent: "#C85A17",
  /** Body copy on light */
  body: "#3A3733",
  /** Body copy on dark */
  onDark: "#DDD6CC",
  /** Secondary copy on dark */
  onDarkMuted: "#B09A86",
  /** Hairline rule on light */
  rule: "rgba(122,92,67,0.35)",
  /** Image wells on light */
  slot: "#E7E2DA",
} as const;

/* Families are loaded by the @import at the top of app/sunglasses/sunglasses.css. */
export const oswald = "Oswald, 'Arial Narrow', sans-serif";
export const mono = "'Roboto Mono', monospace";
export const sans = "Inter, system-ui, sans-serif";

/** Uppercase mono eyebrow/label treatment used throughout the design. */
export const label = {
  fontFamily: mono,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
} as const;
