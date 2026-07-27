export default function Footer() {
  return (
    <footer style={{ background: "#152A23", color: "#FFFFFF" }}>
      <div
        style={{ maxWidth: 1360, margin: "0 auto", padding: "60px 40px 40px" }}
      >
        <div
          className="footer-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
            paddingBottom: 32,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                border: "2px solid #22C55E",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{ width: 10, height: 10, background: "#22C55E" }}
              />
            </div>
            DAVID HAXTON
          </div>
          <div
            className="footer-links"
            style={{
              display: "flex",
              gap: 32,
              fontFamily: "'Plus Jakarta Sans'",
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            <a href="#tuition" style={{ color: "#FFFFFF" }}>
              Tuition
            </a>
            <a href="#ai" style={{ color: "#FFFFFF" }}>
              AI
            </a>
            <a href="#web" style={{ color: "#FFFFFF" }}>
              Web
            </a>
            <a href="#teachers" style={{ color: "#FFFFFF" }}>
              Teachers
            </a>
            <a href="#contact" style={{ color: "#FFFFFF" }}>
              Contact
            </a>
          </div>
        </div>
        <div
          style={{
            paddingTop: 24,
            fontSize: 13,
            color: "#9CA3AF",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>© 2026 David Haxton. Serious computer science. Practical AI.</div>
          <div>Built end to end — right here.</div>
        </div>
      </div>
    </footer>
  );
}
