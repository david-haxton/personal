import type { ReactNode } from "react";
import { gutter } from "./tokens";

/** Content column, pulled up so the first card overlaps the hero gradient. */
export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1100,
        margin: "-56px auto 0",
        padding: `0 ${gutter} 80px`,
        display: "grid",
        gap: 22,
      }}
    >
      {children}
    </main>
  );
}
