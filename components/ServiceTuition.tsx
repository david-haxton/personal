const statValue = "97.2";
const statUnit = "%";
const statHeadline = "of my students earned a grade 9-7";
const statFootnote = "3-year average, OCR J277 · every candidate passed";

export default function ServiceTuition() {
  return (
    <section
      className="sec-pad"
      style={{ maxWidth: 1360, margin: "0 auto", padding: "20px 40px 60px" }}
    >
      <div
        className="grid-2col"
        style={{
          border: "2px solid #152A23",
          background: "#FFFFFF",
          boxShadow: "8px 8px 0 #152A23",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
        }}
      >
        <div
          className="card-inner-pad svc-dark-panel"
          style={{
            background: "#152A23",
            color: "#FFFFFF",
            padding: 48,
            display: "flex",
            flexDirection: "column",
            gap: 32,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="svc-card-sticker"
            src="/stickers/char-1.png"
            alt=""
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              width: 140,
              imageRendering: "pixelated",
              opacity: 0.95,
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 900,
                fontSize: 22,
                color: "#22C55E",
              }}
            >
              01
            </div>
            <div style={{ height: 2, background: "#22C55E", flex: 1 }} />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 26,
                color: "#22C55E",
                marginBottom: 8,
              }}
            >
              getting the grade, properly
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 900,
                fontSize: "2rem",
                lineHeight: 1.05,
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              Computer Science Tuition — GCSE &amp; A-Level
            </h3>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#9CA3AF",
              marginTop: "auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            A top grade needs more than memorised definitions — it needs a
            real understanding of how the code works, and proper exam
            technique for when you&apos;re actually in the room.
          </p>
        </div>

        <div
          className="card-inner-pad"
          style={{
            padding: 48,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#152A23" }}>
            I run one-to-one online tuition, working towards a grade 9 at
            GCSE or an A* at A-Level, that takes the theory apart and builds
            it back up into something that holds up under exam conditions.{" "}
            <span
              style={{
                background: "#DCFCE7",
                padding: "2px 6px",
                fontWeight: 600,
              }}
            >
              You&apos;ve got this — it just takes the right kind of
              practice.
            </span>
          </p>

          <div
            style={{
              background: "#F9FAFB",
              border: "2px solid #152A23",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <div
                className="stat-num"
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 900,
                  fontSize: "4.5rem",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                }}
              >
                <span style={{ color: "#10B981" }}>
                  {statValue}
                  <span className="unit" style={{ fontSize: "2.5rem" }}>
                    {statUnit}
                  </span>
                </span>
              </div>
              <div
                className="stat-headline"
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  lineHeight: 1.15,
                  color: "#152A23",
                  maxWidth: "22ch",
                }}
              >
                {statHeadline}
              </div>
            </div>

            <div
              className="table-wrap"
              style={{ borderTop: "2px dashed #D1D5DB", paddingTop: 16 }}
            >
              <table
                className="table-mono"
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                }}
              >
                <thead>
                  <tr
                    style={{
                      color: "#4B5563",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    <th
                      style={{
                        textAlign: "left",
                        padding: "6px 8px",
                        borderBottom: "2px solid #152A23",
                        fontWeight: 700,
                      }}
                    >
                      Series
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "6px 8px",
                        borderBottom: "2px solid #152A23",
                        fontWeight: 700,
                      }}
                    >
                      This dept
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "6px 8px",
                        borderBottom: "2px solid #152A23",
                        fontWeight: 700,
                      }}
                    >
                      National
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    fontFamily: "'Plus Jakarta Sans'",
                    fontWeight: 700,
                    color: "#152A23",
                  }}
                >
                  <tr>
                    <td
                      style={{ padding: 8, borderBottom: "1px solid #E5E7EB" }}
                    >
                      2023
                    </td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        borderBottom: "1px solid #E5E7EB",
                        color: "#10B981",
                      }}
                    >
                      95.0%
                    </td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        borderBottom: "1px solid #E5E7EB",
                        color: "#4B5563",
                      }}
                    >
                      23.3%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ padding: 8, borderBottom: "1px solid #E5E7EB" }}
                    >
                      2024
                    </td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        borderBottom: "1px solid #E5E7EB",
                        color: "#10B981",
                      }}
                    >
                      100%
                    </td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        borderBottom: "1px solid #E5E7EB",
                        color: "#4B5563",
                      }}
                    >
                      27.4%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ padding: 8, borderBottom: "1px solid #E5E7EB" }}
                    >
                      2025
                    </td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        borderBottom: "1px solid #E5E7EB",
                        color: "#10B981",
                      }}
                    >
                      96.9%
                    </td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        borderBottom: "1px solid #E5E7EB",
                        color: "#4B5563",
                      }}
                    >
                      29.6%*
                    </td>
                  </tr>
                  <tr style={{ background: "#DCFCE7" }}>
                    <td style={{ padding: 8, fontWeight: 900 }}>3-yr avg</td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        fontWeight: 900,
                        color: "#10B981",
                      }}
                    >
                      97.2%
                    </td>
                    <td
                      style={{
                        padding: 8,
                        textAlign: "right",
                        color: "#4B5563",
                      }}
                    >
                      —
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#4B5563",
                  marginTop: 8,
                  lineHeight: 1.5,
                }}
              >
                * 2025 = all boards combined; OCR-specific figure unavailable.
                On 2023 &amp; 2024 (clean like-for-like), roughly 4× the
                national rate.
              </div>
            </div>

            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#4B5563",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {statFootnote}
            </div>
          </div>

          <div
            className="parents-note"
            style={{
              border: "2px solid #152A23",
              background: "#FDE047",
              padding: 20,
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 22,
                color: "#152A23",
                whiteSpace: "nowrap",
                paddingTop: 2,
              }}
            >
              a note for parents →
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: "#152A23",
                fontWeight: 500,
              }}
            >
              The gap between a grade 7 and a grade 9 is very often exam
              technique, not subject knowledge — reading the command word,
              structuring a longer answer, managing time under pressure.
              That&apos;s specifically what I work on, alongside the content
              itself.
            </p>
          </div>

          <div
            className="svc-tile-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            <div style={{ border: "2px solid #152A23", padding: 14 }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  textTransform: "uppercase",
                  color: "#4B5563",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                Boards
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                AQA · OCR · Edexcel
              </div>
            </div>
            <div style={{ border: "2px solid #152A23", padding: 14 }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  textTransform: "uppercase",
                  color: "#4B5563",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                Focus
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Algorithms, systems, NEA, exam craft
              </div>
            </div>
            <div
              style={{
                border: "2px solid #152A23",
                padding: 14,
                background: "#22C55E",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  textTransform: "uppercase",
                  color: "#152A23",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                Approach
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#152A23",
                }}
              >
                Straight feedback, no cut corners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
