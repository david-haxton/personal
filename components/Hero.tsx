import type { ReactNode } from "react";
import BookCta from "./BookCta";
import Island from "./Island";
import IslandControls from "./IslandControls";
import { gutter, display, ink, sky, type Section } from "./tokens";

const shadow = (n: number) => `0 ${n}px ${n * 6}px rgba(20, 16, 60, 0.5)`;

/**
 * Dawn-gradient hero. The island sits behind at full bleed; #island-spot
 * reserves the column the script zooms the park into, so the art never lands
 * on top of the headline.
 */
export default function Hero({
  number,
  eyebrow,
  accent,
  zoomTo,
  lead,
  cta,
  children,
}: {
  number: string;
  eyebrow: string;
  accent: string;
  zoomTo?: Section;
  lead: ReactNode;
  cta?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: sky,
        color: "#FFFFFF",
      }}
    >
      <Island zoomTo={zoomTo} />
      {/*
        Legibility scrim: darkens the park behind the copy so the headline
        holds up over the busy art. No z-index, and it sits before the content
        in the DOM, so the text paints above it and the pins above that.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, rgba(28,26,58,0.58) 0%, rgba(28,26,58,0.42) 34%, rgba(28,26,58,0) 62%)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0 24px",
          padding: `clamp(36px, 7vh, 80px) ${gutter} clamp(80px, 12vh, 110px)`,
          pointerEvents: "none",
        }}
      >
        <div style={{ flex: "1 1 400px", minWidth: 0, pointerEvents: "auto" }}>
          <p
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "8px 10px",
              margin: "0 0 16px",
              fontWeight: 700,
              fontSize: "0.92rem",
              textShadow: "0 2px 14px rgba(20, 16, 60, 0.55)",
            }}
          >
            <span
              style={{
                fontFamily: display,
                fontWeight: 800,
                fontSize: "0.78rem",
                background: accent,
                color: ink,
                padding: "3px 11px",
                borderRadius: 999,
                textShadow: "none",
              }}
            >
              {number}
            </span>
            {eyebrow}
          </p>
          <h1
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              margin: "0 0 22px",
              maxWidth: "14ch",
              textWrap: "balance",
              textShadow: shadow(3),
            }}
          >
            {children}
          </h1>
          <p
            style={{
              margin: "0 0 26px",
              fontSize: "clamp(1.08rem, 1.5vw, 1.25rem)",
              maxWidth: "40ch",
              textShadow: "0 2px 14px rgba(20, 16, 60, 0.6)",
            }}
          >
            {lead}
          </p>
          {cta && <BookCta onDark />}
          {/* The park animates here too, so the pause control belongs here too —
              and it is what replays the viewer's stored motion choice. */}
          <IslandControls />
        </div>
        <div
          id="island-spot"
          style={{ flex: "1 1 420px", minWidth: 0, height: "clamp(300px, 46vh, 460px)" }}
        />
      </div>
    </section>
  );
}
