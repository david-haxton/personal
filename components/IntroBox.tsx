import type { ReactNode } from "react";
import { bodyCopy, card } from "./tokens";

/** Bordered, centred lead paragraph that opens each subpage. */
export default function IntroBox({
  maxWidth,
  children,
}: {
  maxWidth: string;
  children: ReactNode;
}) {
  return (
    <p
      style={{
        ...card(8),
        ...bodyCopy(19),
        padding: "26px 34px",
        maxWidth,
        textAlign: "center",
      }}
    >
      {children}
    </p>
  );
}
