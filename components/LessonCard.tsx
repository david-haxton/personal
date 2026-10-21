import { amber, amberDeep, display, ink, muted } from "./tokens";

/**
 * A free lesson. Same white card and coloured rule as DetailCard, but the
 * whole card is the link, and it opens in the same tab: the lessons carry
 * their own way back to /tuition.
 */
export default function LessonCard({
  href,
  label,
  title,
  children,
}: {
  href: string;
  label: string;
  title: string;
  children: string;
}) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        color: ink,
        textDecoration: "none",
        borderRadius: 18,
        padding: "22px 24px",
        borderTop: `5px solid ${amber}`,
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
          color: amberDeep,
        }}
      >
        {label}
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
      <p style={{ margin: "0 0 16px", color: muted, textWrap: "pretty" }}>
        {children}
      </p>
      {/* Pinned to the bottom so the three buttons line up across a row
          whatever the length of the copy above them. */}
      <span
        className="btn-amber"
        style={{
          alignSelf: "flex-start",
          marginTop: "auto",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 20px",
          borderRadius: 999,
          background: ink,
          color: "#FFFFFF",
          fontWeight: 800,
          whiteSpace: "nowrap",
        }}
      >
        Try it →
      </span>
    </a>
  );
}
