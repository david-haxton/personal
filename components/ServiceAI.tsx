export default function ServiceAI() {
  return (
    <section
      id="ai"
      className="sec-pad"
      style={{ maxWidth: 1360, margin: "0 auto", padding: "60px 40px" }}
    >
      <div
        className="grid-2col"
        style={{
          border: "2px solid #152A23",
          background: "#FFFFFF",
          boxShadow: "8px 8px 0 #22C55E",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
        }}
      >
        <div
          className="card-inner-pad svc02-left"
          style={{
            padding: 48,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            borderRight: "2px solid #152A23",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 900,
                fontSize: 22,
                color: "#152A23",
              }}
            >
              02
            </div>
            <div style={{ height: 2, background: "#152A23", flex: 1 }} />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 26,
                color: "#10B981",
                marginBottom: 8,
              }}
            >
              wherever you&apos;re starting from
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 900,
                fontSize: "2rem",
                lineHeight: 1.05,
                textTransform: "uppercase",
              }}
            >
              AI Tuition for Adults
            </h3>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6 }}>
            Some people want proper prompting workflows built into their job.
            Others have heard everyone talking about AI and don&apos;t quite
            know where to begin —{" "}
            <span style={{ background: "#FDE047", padding: "2px 6px" }}>
              both are very welcome here.
            </span>
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4B5563" }}>
            I teach from wherever you&apos;re starting, whether that&apos;s
            your first ever prompt or a workflow you&apos;re trying to make
            more reliable.
          </p>
        </div>
        <div
          className="card-inner-pad"
          style={{
            padding: 48,
            background: "#F9FAFB",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="svc02-sticker"
            src="/stickers/char-2.png"
            alt=""
            style={{
              position: "absolute",
              top: -30,
              right: -20,
              width: 120,
              imageRendering: "pixelated",
              transform: "rotate(8deg)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              border: "2px solid #152A23",
              background: "#FFFFFF",
              padding: 20,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                color: "#10B981",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              → Beginners
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "#152A23" }}>
              The basics explained properly. No jargon, no daft questions.
            </p>
          </div>
          <div
            style={{
              border: "2px solid #152A23",
              background: "#FFFFFF",
              padding: 20,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                color: "#10B981",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              → Experienced users
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "#152A23" }}>
              What these models are good at (and where they fall over),
              managing context properly, and getting output you can rely on
              in the real world — not just in a demo.
            </p>
          </div>
          <div
            style={{
              border: "2px solid #152A23",
              background: "#22C55E",
              padding: 20,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                color: "#152A23",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              → Approach
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "#152A23" }}>
              Sessions built around you and your pace, not a generic course.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
