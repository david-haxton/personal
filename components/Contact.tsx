export default function Contact() {
  return (
    <section id="contact" style={{ background: "#FFFFFF" }}>
      <div
        className="sec-pad"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 40px" }}
      >
        <div
          className="contact-card grid-2col"
          style={{
            border: "2px solid #152A23",
            background: "#22C55E",
            padding: 64,
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 60,
            boxShadow: "10px 10px 0 #152A23",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="contact-sticker"
            src="/stickers/char-5.png"
            alt=""
            style={{
              position: "absolute",
              top: -50,
              left: -40,
              width: 140,
              imageRendering: "pixelated",
              transform: "rotate(-8deg)",
              zIndex: 2,
            }}
          />
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#152A23",
                color: "#FFFFFF",
                padding: "4px 12px",
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 24,
              }}
            >
              Contact
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 900,
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                lineHeight: 1.0,
                textTransform: "uppercase",
                color: "#152A23",
              }}
            >
              Let&apos;s have a chat.
            </h2>
            <p
              style={{
                marginTop: 24,
                fontSize: 18,
                lineHeight: 1.6,
                color: "#152A23",
                maxWidth: "48ch",
              }}
            >
              Whether you&apos;re after a grade 9, an A* at A-Level, or just
              want to get started with AI without feeling silly for asking —
              get in touch.{" "}
              <span style={{ background: "#FDE047", padding: "2px 6px" }}>
                Have a chat, no pressure
              </span>
              , and we&apos;ll figure out where to start.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #152A23",
                padding: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#4B5563",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Email
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                hello@davidhaxton.co.uk
              </div>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #152A23",
                padding: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#4B5563",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Location
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                London, UK · online nationwide
              </div>
            </div>
            <a
              href="#"
              style={{
                background: "#152A23",
                color: "#FFFFFF",
                padding: "20px 24px",
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: 15,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                textAlign: "center",
                border: "2px solid #152A23",
              }}
            >
              Book an intro call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
