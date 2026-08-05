import ImageSlot from "./ImageSlot";
import { mono, oswald, sg } from "./tokens";

const SPECS = [
  {
    number: "01",
    title: "The Shell",
    shot: "Macro: leather grain",
    copy: "2.0mm vegetable-tanned cowhide that develops a natural patina over time.",
  },
  {
    number: "02",
    title: "The Protection",
    shot: "Macro: stitching",
    copy: "Heavyweight internal cellulose core to withstand compression.",
  },
  {
    number: "03",
    title: "The Details",
    shot: "Macro: brass hardware",
    copy: "Soft microfibre suede lining with anti-scratch brass hardware.",
  },
];

export default function SpecSheet() {
  return (
    <section style={{ background: sg.panel, color: sg.bone }}>
      <div
        className="sg-shell"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              fontFamily: oswald,
              fontWeight: 600,
              fontSize: "clamp(30px, 3.4vw, 46px)",
              lineHeight: 1,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Material &amp; craft
          </h2>
          <span
            style={{
              fontFamily: mono,
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: sg.onDarkMuted,
            }}
          >
            Spec sheet / Rev. 03
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            borderTop: `1px solid ${sg.tobacco}`,
            borderLeft: `1px solid ${sg.tobacco}`,
          }}
        >
          {SPECS.map((spec) => (
            <div
              key={spec.number}
              style={{
                borderRight: `1px solid ${sg.tobacco}`,
                borderBottom: `1px solid ${sg.tobacco}`,
              }}
            >
              <div style={{ height: 260, overflow: "hidden" }}>
                <ImageSlot label={spec.shot} tone="dark" />
              </div>
              <div style={{ padding: "28px 26px 34px" }}>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: sg.accent,
                  }}
                >
                  {spec.number} / {spec.title}
                </div>
                <p
                  style={{
                    margin: "14px 0 0",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: sg.onDark,
                    textWrap: "pretty",
                  }}
                >
                  {spec.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
