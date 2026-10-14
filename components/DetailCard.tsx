import { amberDeep, display, muted } from "./tokens";

/** White card with a coloured rule along the top. */
export default function DetailCard({
  label,
  title,
  accent,
  labelColor = amberDeep,
  children,
}: {
  label: string;
  title: string;
  accent: string;
  labelColor?: string;
  children: string;
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 18,
        padding: "22px 24px",
        borderTop: `5px solid ${accent}`,
        boxShadow: "0 6px 20px rgba(20, 16, 60, 0.08)",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "0.8rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: labelColor,
        }}
      >
        → {label}
      </p>
      <h3
        style={{
          fontFamily: display,
          fontWeight: 800,
          fontSize: "1.25rem",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          margin: "0 0 8px",
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, color: muted, textWrap: "pretty" }}>{children}</p>
    </div>
  );
}
