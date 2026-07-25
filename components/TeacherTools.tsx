export default function TeacherTools() {
  return (
    <section
      id="teachers"
      style={{ background: "#152A23", color: "#FFFFFF", marginTop: 60 }}
    >
      <div
        className="sec-pad"
        style={{ maxWidth: 1360, margin: "0 auto", padding: "100px 40px" }}
      >
        <div
          className="teachers-headline"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 60,
            alignItems: "end",
            marginBottom: 56,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="teachers-sticker"
            src="/stickers/char-4.png"
            alt=""
            style={{
              position: "absolute",
              top: -60,
              right: -20,
              width: 160,
              imageRendering: "pixelated",
              transform: "rotate(6deg)",
            }}
          />
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#22C55E",
                color: "#152A23",
                padding: "4px 12px",
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                border: "2px solid #22C55E",
                marginBottom: 20,
              }}
            >
              Free — for teachers
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.02,
                textTransform: "uppercase",
              }}
            >
              Built by someone who&apos;s actually marked the books.
            </h2>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 24,
                color: "#22C55E",
                marginTop: 16,
              }}
            >
              …at 11pm, more than once.
            </div>
          </div>
          <div
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#9CA3AF",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p style={{ color: "#FFFFFF" }}>
              Free, practical tools that cut the admin and hand you back your
              evenings.
            </p>
            <p>
              As a fellow teacher, I know exactly how much of the week gets
              eaten by lesson prep, resource-making, and marking. No one
              should have to pay for tools that just do the boring bits
              properly.
            </p>
          </div>
        </div>

        <div
          className="grid-2col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          <a
            href="https://tracker-david-haxtons-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "#1E3A31",
              border: "2px solid #22C55E",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#22C55E",
                  fontWeight: 700,
                }}
              >
                Tool 01
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  fontSize: 11,
                  padding: "4px 10px",
                  background: "#22C55E",
                  color: "#152A23",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Free
              </div>
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: "1.75rem",
                color: "#FFFFFF",
              }}
            >
              H446 Delivery Tracker
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#9CA3AF" }}>
              Log coverage against the OCR H446 A-Level Computer Science
              spec, by component, unit and teaching group. Export your data —
              no more spreadsheet juggling.
            </p>
            <div
              style={{
                marginTop: "auto",
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 700,
                fontSize: 13,
                color: "#22C55E",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Launch tracker →
            </div>
          </a>
          <a
            href="https://sam-sen-ai-i6nw.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#152A23",
              background: "#FFFFFF",
              border: "2px solid #22C55E",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#10B981",
                  fontWeight: 700,
                }}
              >
                Tool 02
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  fontSize: 11,
                  padding: "4px 10px",
                  background: "#FDE047",
                  color: "#152A23",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Early build
              </div>
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: "1.75rem",
              }}
            >
              Sam
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4B5563" }}>
              An AI assistant that adapts lesson materials for neurodivergent
              learners, producing separate autism-friendly and PDA-friendly
              versions. Still early — some parts are mid-build — but already
              useful.
            </p>
            <div
              style={{
                marginTop: "auto",
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 700,
                fontSize: 13,
                color: "#10B981",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Try Sam →
            </div>
          </a>
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <div
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 28,
              color: "#22C55E",
            }}
          >
            No paywalls. No hidden fees. Just tools that work.
          </div>
          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: 24,
              background: "#22C55E",
              color: "#152A23",
              padding: "18px 32px",
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: 15,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              border: "2px solid #22C55E",
              boxShadow: "6px 6px 0 #FFFFFF",
            }}
          >
            Launch the tools →
          </a>
        </div>
      </div>
    </section>
  );
}
