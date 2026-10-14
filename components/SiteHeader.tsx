import { amber, gutter, display, ink, MAILTO, page, type Section } from "./tokens";

const NAV: { href: string; label: string; key: Section }[] = [
  { href: "/tuition", label: "Tuition", key: "tuition" },
  { href: "/ai", label: "AI", key: "ai" },
  { href: "/web", label: "Web" , key: "web" },
];

/** Dark bar with a pill nav; the current page's pill is filled amber. */
export default function SiteHeader({ active }: { active?: Section }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px 18px",
        padding: `10px ${gutter}`,
        background: ink,
        color: page,
        position: "relative",
        zIndex: 2,
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: display,
          fontWeight: 800,
          fontSize: "1.2rem",
          letterSpacing: "-0.02em",
          color: page,
          textDecoration: "none",
          marginRight: "auto",
          whiteSpace: "nowrap",
        }}
      >
        David <span style={{ color: amber }}>Haxton</span>
      </a>
      <nav
        aria-label="Main"
        style={{
          display: "flex",
          gap: 2,
          background: "rgba(255, 255, 255, 0.08)",
          padding: 3,
          borderRadius: 999,
        }}
      >
        {NAV.map((item) => {
          const current = active === item.key;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={current ? undefined : "nav-pill"}
              style={{
                background: current ? amber : undefined,
                color: current ? ink : page,
                textDecoration: "none",
                padding: "5px 14px",
                borderRadius: 999,
                fontWeight: 700,
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
      <a
        href={MAILTO}
        className="btn-amber"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "7px 18px",
          borderRadius: 999,
          background: amber,
          color: ink,
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        Say hello
      </a>
    </header>
  );
}
