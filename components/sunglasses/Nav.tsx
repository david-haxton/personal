import { mono, oswald, sg } from "./tokens";

export default function Nav() {
  return (
    <nav
      className="sg-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "18px 40px",
        background: "rgba(245,243,239,0.92)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        borderBottom: `1px solid ${sg.rule}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span
          style={{
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: sg.ink,
          }}
        >
          Protected Specs
        </span>
        <span
          className="sg-nav-est"
          style={{
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: sg.tobacco,
          }}
        >
          Est. 1974
        </span>
      </div>
      <a
        href="#order"
        className="sg-btn-dark"
        style={{
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "12px 22px",
          whiteSpace: "nowrap",
          transition: "background 160ms ease-out, color 160ms ease-out",
        }}
      >
        Shop
      </a>
    </nav>
  );
}
