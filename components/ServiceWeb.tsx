export default function ServiceWeb() {
  return (
    <section
      id="web"
      className="sec-pad"
      style={{ maxWidth: 1360, margin: "0 auto", padding: "60px 40px 40px" }}
    >
      <div
        className="card-inner-pad"
        style={{
          border: "2px solid #152A23",
          background: "#FFFFFF",
          boxShadow: "8px 8px 0 #EC4899",
          padding: 48,
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="svc03-sticker"
          src="/stickers/char-3.png"
          alt=""
          style={{
            position: "absolute",
            top: -40,
            right: 40,
            width: 130,
            imageRendering: "pixelated",
            transform: "rotate(-6deg)",
            zIndex: 2,
          }}
        />
        <div
          className="grid-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 48,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 900,
                  fontSize: 22,
                }}
              >
                03
              </div>
              <div style={{ height: 2, background: "#152A23", flex: 1 }} />
            </div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 26,
                color: "#EC4899",
                marginBottom: 8,
              }}
            >
              clean code. smart layouts.
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
              Web Layout Consultation &amp; Showcase
            </h3>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, alignSelf: "end" }}>
            The best idea in the world doesn&apos;t matter if people
            can&apos;t work out how to use it. Have a browse through two of
            my own builds below —{" "}
            <span style={{ background: "#DCFCE7", padding: "2px 6px" }}>
              live, and built end to end
            </span>{" "}
            — and see how they actually work, not just how they look in a
            screenshot.
          </p>
        </div>

        <div
          className="grid-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <a
            href="https://art.davidhaxton.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "2px solid #152A23",
              background: "#F9FAFB",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                aspectRatio: "16/9",
                border: "2px dashed #D1D5DB",
                background: "#FFFFFF",
                display: "grid",
                placeItems: "center",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#4B5563",
                backgroundImage:
                  "repeating-linear-gradient(135deg, #E5E7EB 0 2px, transparent 2px 14px)",
              }}
            >
              [ Hidden Patterns screenshot ]
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#10B981",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                Live build 01
              </div>
              <h4
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  margin: "6px 0 10px",
                }}
              >
                Hidden Patterns
              </h4>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "#4B5563" }}>
                Find the algorithm hiding inside three famous paintings.
                Watch the particles, guess the rule, then check yourself
                against the real one.
              </p>
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 700,
                fontSize: 13,
                color: "#152A23",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              art.davidhaxton.co.uk →
            </div>
          </a>
          <a
            href="https://deep-patterns.davidhaxton.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              border: "2px solid #152A23",
              background: "#152A23",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                aspectRatio: "16/9",
                border: "2px dashed rgba(255,255,255,0.2)",
                background: "#1E3A31",
                display: "grid",
                placeItems: "center",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#9CA3AF",
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 14px)",
              }}
            >
              [ Deep Patterns screenshot ]
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#22C55E",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                Live build 02
              </div>
              <h4
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  margin: "6px 0 10px",
                  color: "#FFFFFF",
                }}
              >
                Deep Patterns
              </h4>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "#9CA3AF" }}>
                The deeper follow-on. Build the algorithm yourself, work out
                why it scales the way it does, and find it operating in the
                real world — from weather models to zebrafish stripes.
              </p>
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 700,
                fontSize: 13,
                color: "#22C55E",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              deep-patterns.davidhaxton.co.uk →
            </div>
          </a>
        </div>

        <div
          className="svc-tile-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          <div style={{ borderTop: "2px solid #152A23", paddingTop: 16 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#4B5563",
                marginBottom: 6,
              }}
            >
              Strategy
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5 }}>
              A straight, honest look at your project — what&apos;s working,
              what isn&apos;t, and why.
            </p>
          </div>
          <div style={{ borderTop: "2px solid #152A23", paddingTop: 16 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#4B5563",
                marginBottom: 6,
              }}
            >
              Focus
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5 }}>
              User experience, responsive layout, and clean front-end
              structure.
            </p>
          </div>
          <div style={{ borderTop: "2px solid #152A23", paddingTop: 16 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#4B5563",
                marginBottom: 6,
              }}
            >
              Approach
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5 }}>
              Direct feedback, explained clearly, on what to fix to make the
              site load faster, look sharper, and work better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
