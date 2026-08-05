import ImageSlot from "./ImageSlot";
import { mono, oswald, sg } from "./tokens";

const attribution = {
  marginTop: 18,
  fontFamily: mono,
  fontSize: 11,
  fontWeight: 400,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: sg.tobacco,
} as const;

export default function WearTest() {
  return (
    <section
      className="sg-shell"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontFamily: oswald,
            fontWeight: 600,
            fontSize: "clamp(30px, 3.4vw, 46px)",
            lineHeight: 1,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          The wear test
        </h2>
        <span style={{ flex: 1, height: 1, background: "rgba(122,92,67,0.4)" }} />
        <span
          className="sg-weartest-meta"
          style={{
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: sg.tobacco,
            whiteSpace: "nowrap",
          }}
        >
          18 months, unsponsored
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
          gap: 32,
          alignItems: "start",
        }}
      >
        <div style={{ display: "grid", gap: 32 }}>
          <div
            className="sg-wear-tall"
            style={{
              height: 420,
              overflow: "hidden",
              border: `1px solid ${sg.rule}`,
            }}
          >
            <ImageSlot label="On a car dashboard, warm desaturated film tone" />
          </div>
          <blockquote
            style={{
              margin: 0,
              fontFamily: oswald,
              fontWeight: 400,
              fontSize: "clamp(22px, 2.4vw, 32px)",
              lineHeight: 1.24,
              letterSpacing: "0.005em",
              textWrap: "pretty",
            }}
          >
            &ldquo;Lives in the glovebox. Two summers in and it looks better
            than the day it arrived.&rdquo;
            <footer style={attribution}>— D. Moreau, Whitstable</footer>
          </blockquote>
        </div>

        <div style={{ display: "grid", gap: 32 }}>
          <blockquote
            style={{
              margin: 0,
              padding: "28px 26px",
              border: `1px solid ${sg.rule}`,
              fontFamily: oswald,
              fontSize: 22,
              lineHeight: 1.3,
              textWrap: "pretty",
            }}
          >
            &ldquo;No rattle, no crush. It just closes with a sound you
            trust.&rdquo;
            <footer style={{ ...attribution, marginTop: 16 }}>— A. Vance</footer>
          </blockquote>
          <div
            className="sg-wear-mid"
            style={{
              height: 300,
              overflow: "hidden",
              border: `1px solid ${sg.rule}`,
            }}
          >
            <ImageSlot label="In a denim jacket pocket" />
          </div>
          <div
            className="sg-wear-short"
            style={{
              height: 220,
              overflow: "hidden",
              border: `1px solid ${sg.rule}`,
            }}
          >
            <ImageSlot label="On a worn wooden table" />
          </div>
        </div>
      </div>
    </section>
  );
}
