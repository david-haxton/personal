/** Palette and type stacks, lifted from the design studio build. */
export const ink = "#1C1A3A";
export const page = "#F4F3FB";
export const amber = "#FFB320";
export const amberDeep = "#8A5700";
export const teal = "#2BB5A8";
export const coral = "#F25C54";
export const cream = "#FFF6DC";
export const muted = "#54527A";
export const white = "#FFFFFF";

/** Dawn gradient behind every hero. */
export const sky = "linear-gradient(180deg, #3E4C8F 0%, #F3A27A 100%)";

export const display = '"Schibsted Grotesk", system-ui, sans-serif';

export const MAILTO = "mailto:hello@davidhaxton.co.uk";

/** Horizontal rhythm shared by the bars and every section. */
export const gutter = "clamp(16px, 4vw, 48px)";

export type Section = "tuition" | "ai" | "web";

/** Each page carries its own accent, used for eyebrows and card rules. */
export const accentFor: Record<Section, string> = {
  tuition: amber,
  ai: teal,
  web: coral,
};
