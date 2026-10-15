import { display, ink, muted } from "./tokens";

export type FaqItem = { q: string; a: string };

/**
 * Native <details>/<summary>, so keyboard and screen-reader support come for
 * free and nothing needs JavaScript. Collapsed by default. The marker is
 * suppressed and replaced with the chevron in app/globals.css, which also
 * rotates it when the item is open.
 */
export default function Faq({
  heading,
  items,
  accent,
}: {
  heading: string;
  items: FaqItem[];
  accent: string;
}) {
  return (
    <section>
      <h2
        style={{
          fontFamily: display,
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          letterSpacing: "-0.02em",
          margin: "14px 0 18px",
        }}
      >
        {heading}
      </h2>
      <div style={{ display: "grid", gap: 10 }}>
        {items.map((item) => (
          <details
            key={item.q}
            className="faq"
            style={{
              background: "#FFFFFF",
              borderRadius: 14,
              borderLeft: `5px solid ${accent}`,
              boxShadow: "0 6px 20px rgba(20, 16, 60, 0.08)",
            }}
          >
            <summary
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "16px 20px",
                fontFamily: display,
                fontWeight: 800,
                fontSize: "1.03rem",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
                color: ink,
                textWrap: "pretty",
              }}
            >
              <span aria-hidden="true" className="faq-chevron">
                ›
              </span>
              {item.q}
            </summary>
            <p
              style={{
                margin: 0,
                padding: "0 20px 18px 44px",
                color: muted,
                textWrap: "pretty",
              }}
            >
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
