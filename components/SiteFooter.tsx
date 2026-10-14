import { amber, display, gutter, ink, MAILTO, page } from "./tokens";

export default function SiteFooter() {
  return (
    <footer
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "10px 22px",
        padding: `22px ${gutter}`,
        background: ink,
        color: page,
        fontSize: "0.92rem",
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: display,
          fontWeight: 800,
          marginRight: "auto",
          whiteSpace: "nowrap",
          flex: "0 0 auto",
          color: page,
          textDecoration: "none",
        }}
      >
        David <span style={{ color: amber }}>Haxton</span>
      </a>
      <nav aria-label="Footer" style={{ display: "flex", gap: 18 }}>
        <a href="/" style={{ color: page }}>Home</a>
        <a href="/tuition" style={{ color: page }}>Tuition</a>
        <a href="/ai" style={{ color: page }}>AI</a>
        <a href="/web" style={{ color: page }}>Web</a>
      </nav>
      <a href={MAILTO} style={{ color: amber, fontWeight: 700 }}>
        hello@davidhaxton.co.uk
      </a>
    </footer>
  );
}
