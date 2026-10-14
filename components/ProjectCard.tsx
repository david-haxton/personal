import { cream, display, ink, muted, page } from "./tokens";

/** A live build: screenshot, coloured index bar, then the write-up. */
export default function ProjectCard({
  href,
  image,
  alt,
  index,
  barColor,
  title,
  body,
  cta,
}: {
  href: string;
  image: string;
  alt: string;
  index: string;
  barColor: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      style={{
        display: "flex",
        flexDirection: "column",
        background: cream,
        color: ink,
        textDecoration: "none",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 12px 34px rgba(20, 16, 60, 0.22)",
      }}
    >
      <div style={{ position: "relative", height: 240, background: ink }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          width={760}
          height={330}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left top",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 22px",
          background: barColor,
          fontWeight: 800,
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        <span style={{ fontFamily: display, fontSize: "0.9rem", letterSpacing: "-0.02em" }}>
          {index}
        </span>
        Live build
      </div>
      <div
        style={{
          flex: "1 1 0",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "22px 24px 24px",
          borderTop: "3px dashed rgba(28, 26, 58, 0.3)",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: "0 0 8px",
            }}
          >
            {title}
          </h2>
          <p style={{ margin: 0, color: muted, textWrap: "pretty" }}>{body}</p>
        </div>
        <span
          style={{
            marginTop: "auto",
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            padding: "9px 20px",
            borderRadius: 999,
            background: ink,
            color: page,
            fontWeight: 800,
          }}
        >
          {cta}
        </span>
      </div>
    </a>
  );
}
