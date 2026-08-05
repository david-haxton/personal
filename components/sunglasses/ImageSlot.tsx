import { mono, sg } from "./tokens";

/**
 * Placeholder for art that hasn't been shot yet. Fills its parent, so the
 * parent owns the crop box. Swap the whole component out for an <Image /> when
 * real photography lands — the labels below are the shot list.
 */
export default function ImageSlot({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 160,
        display: "grid",
        placeItems: "center",
        padding: 24,
        textAlign: "center",
        background: dark ? sg.well : sg.slot,
        backgroundImage: `repeating-linear-gradient(135deg, rgba(122,92,67,${
          dark ? 0.28 : 0.16
        }) 0 2px, transparent 2px 14px)`,
        fontFamily: mono,
        fontSize: 11,
        lineHeight: 1.7,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: dark ? sg.onDarkMuted : sg.tobacco,
      }}
    >
      [ {label} ]
    </div>
  );
}
