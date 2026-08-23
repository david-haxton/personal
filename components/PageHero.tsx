import type { CSSProperties, ReactNode } from "react";
import { greenInk, section } from "./tokens";

const heroEyebrow: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: "0.16em",
  color: greenInk,
  marginBottom: 26,
  textTransform: "uppercase",
};

/** Shared hero for the three subpages: eyebrow above a big uppercase H1. */
export default function PageHero({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{ ...section, padding: "76px 20px 40px", textAlign: "center" }}
    >
      <div style={heroEyebrow}>{eyebrow}</div>
      <h1
        style={{
          fontWeight: 800,
          fontSize: "clamp(2.7rem, 8vw, 6.4rem)",
          lineHeight: 0.92,
          letterSpacing: "-0.035em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </h1>
    </section>
  );
}
