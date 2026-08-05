"use client";

import { useState } from "react";
import ImageSlot from "./ImageSlot";
import { mono, oswald, sg } from "./tokens";

const PALETTE = [
  { name: "Tobacco", hex: "#7A5C43" },
  { name: "Tarmac Black", hex: "#2A2A2A" },
  { name: "Sun-bleached Tan", hex: "#C39A6B" },
];

const GUARANTEES = [
  "Ships in 48 hours — UK & worldwide",
  "Lifetime stitching guarantee",
  "30-day returns, no questions",
];

export default function Order() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="order" style={{ background: sg.panel, color: sg.bone }}>
      <div
        className="sg-shell"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px 40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))",
            border: `1px solid ${sg.tobacco}`,
          }}
        >
          <div style={{ minHeight: 440, display: "grid" }}>
            <ImageSlot label="Product shot on tarmac / dark surface" tone="dark" />
          </div>

          <div
            className="sg-order-panel"
            style={{
              padding: "48px 44px",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: sg.accent,
                }}
              >
                Protected Specs No. 04
              </div>
              <h2
                style={{
                  fontFamily: oswald,
                  fontWeight: 700,
                  fontSize: 40,
                  lineHeight: 1,
                  textTransform: "uppercase",
                  margin: "14px 0 0",
                }}
              >
                The hard case
              </h2>
              <div
                style={{
                  fontFamily: oswald,
                  fontSize: 28,
                  marginTop: 12,
                  color: sg.onDark,
                }}
              >
                £88
              </div>
            </div>

            <div>
              <div
                id="sg-hide-label"
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: sg.onDarkMuted,
                  marginBottom: 14,
                }}
              >
                Hide — <span>{PALETTE[selected].name.toUpperCase()}</span>
              </div>
              <div
                role="radiogroup"
                aria-labelledby="sg-hide-label"
                style={{ display: "flex", gap: 14 }}
              >
                {PALETTE.map((colour, index) => (
                  <button
                    key={colour.name}
                    type="button"
                    role="radio"
                    aria-checked={index === selected}
                    aria-label={colour.name}
                    title={colour.name}
                    onClick={() => setSelected(index)}
                    style={{
                      width: 46,
                      height: 46,
                      padding: 4,
                      background: "transparent",
                      border: `1px solid ${
                        index === selected ? sg.accent : "rgba(122,92,67,0.5)"
                      }`,
                      cursor: "pointer",
                      transition: "border-color 160ms ease-out",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: colour.hex,
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="sg-btn-bone"
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textAlign: "center",
                padding: "20px 24px",
                border: "none",
                cursor: "pointer",
                transition: "background 160ms ease-out, color 160ms ease-out",
              }}
            >
              Add to bag
            </button>

            <div
              style={{
                display: "grid",
                gap: 10,
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: sg.onDarkMuted,
              }}
            >
              {GUARANTEES.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
