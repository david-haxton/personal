export default function Hero() {
  return (
    <section style={{ position: "relative", backgroundColor: "#FFFFFF" }}>
      <div
        className="hero-pad"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "100px 40px 120px",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.75rem, 7vw, 6rem)",
            lineHeight: 1.02,
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            color: "#152A23",
            margin: "40px 0 0",
            textAlign: "center",
          }}
        >
          <span
            style={{
              background: "#22C55E",
              padding: "0 18px",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
            }}
          >
            Serious
          </span>{" "}
          computer&nbsp;science.
          <br />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/stickers/char-1.png"
            alt=""
            style={{
              height: "1.15em",
              verticalAlign: "middle",
              margin: "0 12px",
              transform: "rotate(-6deg)",
              imageRendering: "pixelated",
            }}
          />
          Practical&nbsp;AI.
        </h1>

        <div
          className="hero-tag-row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginTop: 72,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/stickers/char-2.png"
            alt=""
            style={{
              width: 120,
              height: "auto",
              flexShrink: 0,
              imageRendering: "pixelated",
              transform: "rotate(-4deg)",
            }}
          />
          <div
            className="hero-tag-pill"
            style={{
              border: "2px solid #152A23",
              borderRadius: 999,
              padding: "20px 36px",
              background: "#FFFFFF",
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 700,
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "#152A23",
              boxShadow: "4px 4px 0 #152A23",
              textAlign: "center",
              maxWidth: 780,
            }}
          >
            One-to-one tuition for{" "}
            <span style={{ background: "#DCFCE7", padding: "2px 8px" }}>
              GCSE &amp; A-Level
            </span>
            , AI for adults at any level, and free tools for teachers — built
            and tested in a real classroom.
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/stickers/char-4.png"
            alt=""
            style={{
              width: 130,
              height: "auto",
              flexShrink: 0,
              imageRendering: "pixelated",
              transform: "rotate(4deg)",
            }}
          />
        </div>

        <div
          className="hero-cta-row"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 56,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#tuition"
            style={{
              background: "#152A23",
              color: "#FFFFFF",
              padding: "18px 30px",
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: 15,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              border: "2px solid #152A23",
              boxShadow: "6px 6px 0 #22C55E",
            }}
          >
            See the tuition
          </a>
          <a
            href="#contact"
            style={{
              background: "#FFFFFF",
              color: "#152A23",
              padding: "18px 30px",
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: 15,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              border: "2px solid #152A23",
              boxShadow: "6px 6px 0 #152A23",
            }}
          >
            Have a chat
          </a>
        </div>
      </div>
    </section>
  );
}
