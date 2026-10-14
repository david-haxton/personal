import type { CSSProperties, ReactNode } from "react";
import { cream, display, ink } from "./tokens";

/**
 * Ticket-stub card: a coloured counterfoil, a dashed perforation, then the
 * body. The mask punches the two notches out of the rounded rectangle.
 */
const NOTCH =
  "radial-gradient(circle at calc(var(--stub) + 2px) 0, transparent 12px, #000 12.5px) center top / 100% 51% no-repeat, " +
  "radial-gradient(circle at calc(var(--stub) + 2px) 100%, transparent 12px, #000 12.5px) center bottom / 100% 51% no-repeat";

export default function StubCard({
  stub,
  stubNote,
  stubBackground,
  children,
}: {
  stub: string;
  stubNote: string;
  stubBackground: string;
  children: ReactNode;
}) {
  return (
    <div
      className="stub-card"
      style={{
        // The notch rides 2px past the counterfoil edge, so both follow --stub.
        ["--stub" as string]: "154px",
        position: "relative",
        display: "flex",
        background: cream,
        color: ink,
        borderRadius: 18,
        boxShadow: "0 12px 34px rgba(20, 16, 60, 0.22)",
        mask: NOTCH,
        WebkitMask: NOTCH,
      } as CSSProperties}
    >
      <div
        style={{
          flex: "0 0 auto",
          width: "var(--stub)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 10,
          background: stubBackground,
        }}
      >
        <b
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: "2.7rem",
            letterSpacing: "-0.035em",
            lineHeight: 1,
          }}
        >
          {stub}
        </b>
        <small
          style={{
            fontSize: "0.74rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginTop: 4,
          }}
        >
          {stubNote}
        </small>
      </div>
      <div
        style={{
          flex: "0 0 auto",
          width: 0,
          margin: "16px 0",
          borderLeft: "3px dashed rgba(28, 26, 58, 0.3)",
        }}
      />
      <div style={{ flex: "1 1 0", minWidth: 0, padding: "24px clamp(18px, 3vw, 34px)" }}>
        {children}
      </div>
    </div>
  );
}
