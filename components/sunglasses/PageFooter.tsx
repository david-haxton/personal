import { mono, oswald, sg } from "./tokens";

const LINKS = ["Shipping", "Guarantee", "Contact"];

export default function PageFooter() {
  return (
    <div style={{ background: sg.panel, color: sg.bone }}>
      <footer
        className="sg-shell sg-footer"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "36px 40px 56px",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(122,92,67,0.4)",
        }}
      >
        <span
          style={{
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Protected Specs
        </span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {LINKS.map((link) => (
            <a key={link} href="#order" className="sg-footer-link">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
