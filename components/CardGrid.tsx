import type { ReactNode } from "react";

export default function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 18,
      }}
    >
      {children}
    </div>
  );
}
