/**
 * Two registers, one per job.
 *
 * The block is the real photograph, on the tuition About card, where someone
 * is deciding whether to trust me and a face has to be a face. Its 4:5 aspect
 * matches the frame exactly, so nothing is cropped.
 *
 * The circle is a drawn character, because the hero is flat vector on a
 * gradient and a photograph sat in it as a different kind of object. It uses
 * the island’s own palette, so it reads as one of the figures walking around
 * the park rather than a picture pasted over them.
 */
export const HAS_PHOTO: boolean = true;

const SRC = {
  block: "/images/david-haxton.jpg",
  circle: "/images/david-haxton-avatar.svg",
};
const ALT = "David Haxton";

export default function Portrait({
  size,
  shape = "circle",
  onDark = false,
  duotone = false,
  ring,
}: {
  size: number;
  shape?: "circle" | "block";
  /** Hero sits on the dawn gradient; the About card is white. */
  onDark?: boolean;
  /**
   * Flattens the photo into two palette colours. A photograph is continuous
   * tone and the rest of the hero is flat vector, so if the real picture
   * fights the gradient this pulls it back into the illustration.
   */
  duotone?: boolean;
  ring?: string;
}) {
  const height = shape === "circle" ? size : Math.round(size * 1.25);

  const frame: React.CSSProperties = {
    position: "relative",
    display: "block",
    flex: "0 0 auto",
    width: size,
    height,
    borderRadius: shape === "circle" ? "50%" : 14,
    overflow: "hidden",
    background: onDark ? "rgba(28, 26, 58, 0.55)" : "rgba(28, 26, 58, 0.10)",
    border: ring
      ? `3px solid ${ring}`
      : onDark
        ? "2px solid rgba(255, 255, 255, 0.28)"
        : "2px solid rgba(28, 26, 58, 0.10)",
    boxShadow: onDark
      ? "0 10px 26px rgba(20, 16, 60, 0.3)"
      : "0 6px 18px rgba(20, 16, 60, 0.12)",
  };

  /* Decorative while it is an empty box: there is no photo to describe yet,
     so announcing it would only add noise. */
  if (!HAS_PHOTO) return <span aria-hidden="true" style={frame} />;

  return (
    <span className={duotone ? "portrait-duotone" : undefined} style={frame}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SRC[shape]}
        alt={ALT}
        width={size}
        height={height}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </span>
  );
}
