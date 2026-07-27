export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#FFFFFF",
        padding: "20px 24px 8px",
      }}
    >
      <nav
        className="nav-shell"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          border: "2px solid #152A23",
          background: "#FFFFFF",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          gap: 40,
          boxShadow: "6px 6px 0 #152A23",
        }}
      >
        <div
          className="nav-brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "'Plus Jakarta Sans'",
            fontWeight: 800,
            fontSize: 22,
            color: "#152A23",
            letterSpacing: "-0.02em",
          }}
        >
          DAVID&nbsp;HAXTON
        </div>
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: 44,
            fontFamily: "'Plus Jakarta Sans'",
            fontSize: 15,
            fontWeight: 800,
            color: "#152A23",
            marginLeft: 40,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          <a href="#tuition" style={{ color: "#152A23" }}>
            Tuition
          </a>
          <a href="#ai" style={{ color: "#152A23" }}>
            AI
          </a>
          <a href="#web" style={{ color: "#152A23" }}>
            Web
          </a>
          <a href="#teachers" style={{ color: "#152A23" }}>
            Teachers
          </a>
        </div>
        <a
          href="#contact"
          className="nav-cta"
          style={{
            marginLeft: "auto",
            background: "#22C55E",
            color: "#152A23",
            padding: "14px 24px",
            fontFamily: "'Plus Jakarta Sans'",
            fontSize: 15,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            border: "2px solid #152A23",
            boxShadow: "6px 6px 0 #152A23",
          }}
        >
          SAY HELLO
        </a>
      </nav>
    </header>
  );
}
