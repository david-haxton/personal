import type { ReactNode } from "react";
import { bodyCopy, card, greenInk, greenPale, ink } from "./tokens";

/**
 * Full-width bordered panel carrying one aside — a short heading over a
 * paragraph. `highlight` fills it pale green and darkens the heading, which is
 * what the parents note on /tuition uses; `plain` leaves it white.
 */
export default function NotePanel({
  title,
  tone = "plain",
  children,
}: {
  title: string;
  tone?: "plain" | "highlight";
  children: ReactNode;
}) {
  const highlighted = tone === "highlight";

  return (
    <div
      style={{
        ...card(8),
        ...(highlighted ? { background: greenPale } : {}),
        padding: "36px 36px",
      }}
    >
      <h2
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.16em",
          color: highlighted ? ink : greenInk,
          margin: "0 0 16px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      <p style={{ ...bodyCopy(20), maxWidth: "64ch" }}>{children}</p>
    </div>
  );
}
