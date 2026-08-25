import { bodyCopy, button, card, displayTitle, greenInk, ink } from "./tokens";

/**
 * A live build. Pass `image` to show a real screenshot; without one the card
 * falls back to the striped placeholder. Either way the area keeps the 16:10
 * ratio and the 3px bottom border.
 */
export default function ProjectCard({
  href,
  image,
  placeholder,
  label,
  title,
  body,
  cta,
}: {
  href: string;
  image?: string;
  placeholder: string;
  label: string;
  title: string;
  body: string;
  cta: string;
}) {
  const frame = {
    aspectRatio: "16 / 10",
    borderBottom: `3px solid ${ink}`,
  } as const;

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
      {image ? (
        <span style={{ ...frame, display: "block", overflow: "hidden" }}>
          {/*
            alt="" because the card's own title and copy already name the
            build — describing it again would only pad the link's name.
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            width={1600}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </span>
      ) : (
        <span
          style={{
            ...frame,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "repeating-linear-gradient(45deg, #EFF7EF 0 9px, #FFFFFF 9px 18px)",
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
      )}
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
