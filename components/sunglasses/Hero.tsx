import ImageSlot from "./ImageSlot";
import { mono, oswald, sg } from "./tokens";

const STATS = [
  { value: "2.0mm", label: "Hide gauge" },
  { value: "6 kg", label: "Crush tested" },
  { value: "Lifetime", label: "Repair policy" },
];

export default function Hero() {
  return (
    <section
      className="sg-shell"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "88px 40px 56px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <span style={{ width: 34, height: 1, background: sg.tobacco }} />
            <span
              style={{
                fontFamily: mono,
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: sg.tobacco,
              }}
            >
              Full-grain / Hand-stitched
            </span>
          </div>

          <h1
            style={{
              fontFamily: oswald,
              fontWeight: 700,
              fontSize: "clamp(42px, 5.2vw, 76px)",
              lineHeight: 0.94,
              letterSpacing: "-0.015em",
              textTransform: "uppercase",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Uncompromising protection for timeless frames.
          </h1>

          <p
            style={{
              maxWidth: "44ch",
              margin: "28px 0 0",
              fontSize: 17,
              lineHeight: 1.6,
              color: sg.body,
              textWrap: "pretty",
            }}
          >
            Hand-stitched full-grain leather. Built to survive gloveboxes,
            coastlines, and decades of use.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 20,
              marginTop: 40,
            }}
          >
            <a
              href="#order"
              className="sg-btn-dark"
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "18px 34px",
                transition: "background 160ms ease-out, color 160ms ease-out",
              }}
            >
              Shop the case
            </a>
            <span
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: sg.tobacco,
              }}
            >
              £88 · Free UK shipping
            </span>
          </div>

          <div
            className="sg-stats"
            style={{
              display: "flex",
              gap: 40,
              marginTop: 56,
              paddingTop: 24,
              borderTop: `1px solid ${sg.rule}`,
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: oswald,
                    fontSize: 26,
                    fontWeight: 600,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: sg.tobacco,
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="sg-hero-media"
          style={{
            position: "relative",
            height: 560,
            border: `1px solid ${sg.rule}`,
          }}
        >
          <ImageSlot label="Hero: acetate frames beside the open leather case, hard directional light" />
          <div
            style={{
              position: "absolute",
              top: -1,
              right: -1,
              background: sg.accent,
              color: sg.bone,
              fontFamily: mono,
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "8px 12px",
              pointerEvents: "none",
            }}
          >
            No. 04
          </div>
        </div>
      </div>
    </section>
  );
}
