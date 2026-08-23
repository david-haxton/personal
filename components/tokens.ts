import type { CSSProperties } from "react";

export const ink = "#16241C";
export const ground = "#FFFFFF";
export const green = "#6EC46E";
export const greenPale = "#DFF3DF";
export const greenInk = "#4FA855";
export const muted = "#5E6B62";
export const mutedBody = "#3D4B43";

export const border = `3px solid ${ink}`;

/** Hard offset shadows, never blurred. */
export const shadow = (n: number) => `${n}px ${n}px 0 ${ink}`;

export const section: CSSProperties = {
  maxWidth: 1240,
  margin: "0 auto",
};

/** Green marker-pen highlight sitting behind a word in a headline. */
export const highlight: CSSProperties = {
  background: green,
  padding: "0 0.12em",
  boxDecorationBreak: "clone",
  WebkitBoxDecorationBreak: "clone",
};

/** Pale-green highlight, the same trick in body copy. */
export const highlightPale: CSSProperties = {
  background: greenPale,
  padding: "0 0.25em",
};

export const eyebrow: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.14em",
  color: greenInk,
  textTransform: "uppercase",
};

/** Bordered card with a hard shadow. */
export const card = (shadowSize: number): CSSProperties => ({
  border,
  boxShadow: shadow(shadowSize),
  background: ground,
});

/** Green fill, 3px border, uppercase — the one button style on the site. */
export const button = (shadowSize: number | null): CSSProperties => ({
  background: green,
  color: ink,
  border,
  ...(shadowSize === null ? {} : { boxShadow: shadow(shadowSize) }),
  fontWeight: 700,
  textTransform: "uppercase",
});

export const displayTitle = (size: number, lineHeight: number): CSSProperties => ({
  fontWeight: 800,
  fontSize: size,
  lineHeight,
  letterSpacing: "-0.03em",
  textTransform: "uppercase",
});

export const bodyCopy = (size: number): CSSProperties => ({
  fontSize: size,
  fontWeight: 500,
  lineHeight: 1.5,
  textWrap: "pretty",
});

export const MAILTO = "mailto:hello@davidhaxton.co.uk";
