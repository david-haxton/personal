/**
 * Pixel-art character sitting inline in a headline. Decorative, so alt="".
 * It must stay in normal inline flow — wrapping it in an inline-flex box makes
 * the adjacent green highlight overflow and paint over the line below.
 */
export default function Sticker({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      style={{ height: "0.9em", verticalAlign: "-0.08em" }}
    />
  );
}
