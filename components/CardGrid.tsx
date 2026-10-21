import type { ReactNode } from "react";

export default function CardGrid({
  min = 260,
  children,
}: {
  /** Narrowest a column may get before the grid drops one. Four cards want a
      wider minimum, so they go 2 × 2 rather than three and an orphan. */
  min?: number;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`,
        gap: 18,
      }}
    >
      {children}
    </div>
  );
}
