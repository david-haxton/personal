import { bodyCopy, button, card, displayTitle, greenInk, ink } from "./tokens";

/**
 * A live build. The image area is a striped placeholder until the client
 * supplies real screenshots — keep the 16:10 ratio and the bottom border.
 */
export default function ProjectCard({
  href,
  placeholder,
  label,
  title,
  body,
  cta,
}: {
  href: string;
  placeholder: string;
  label: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="card card-project"
      style={{
        ...card(10),
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          aspectRatio: "16 / 10",
          borderBottom: `3px solid ${ink}`,
          background:
            "repeating-linear-gradient(45deg, #EFF7EF 0 9px, #FFFFFF 9px 18px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: greenInk,
            textTransform: "uppercase",
          }}
        >
          [ {placeholder} screenshot ]
        </span>
      </span>
      <span
        style={{
          padding: "30px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          flex: 1,
        }}
      >
        <span
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: "0.16em",
            color: greenInk,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span style={displayTitle(34, 0.98)}>{title}</span>
        <span style={bodyCopy(17)}>{body}</span>
        <span
          style={{
            ...button(null),
            marginTop: "auto",
            alignSelf: "flex-start",
            fontSize: 14,
            letterSpacing: "0.04em",
            padding: "11px 18px",
          }}
        >
          {cta}
        </span>
      </span>
    </a>
  );
}
