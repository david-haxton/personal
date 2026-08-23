import type { ReactNode } from "react";
import { bodyCopy, card, displayTitle, eyebrow } from "./tokens";

/**
 * The three-up card used on /ai and mirrored on /tuition — the client asked
 * for the two pages to match.
 */
export default function DetailCard({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div style={{ ...card(8), padding: "32px 28px" }}>
      <div style={{ ...eyebrow, marginBottom: 14 }}>→ {label}</div>
      <div style={{ ...displayTitle(28, 1), marginBottom: 14 }}>{title}</div>
      <p style={bodyCopy(17)}>{children}</p>
    </div>
  );
}
