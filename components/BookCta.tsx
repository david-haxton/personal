import { amber, BOOKING_URL, ink, MAILTO, muted } from "./tokens";

/**
 * The site's primary action: book a call, with the email address kept
 * underneath for people who would rather write. Used in both subpage heroes
 * and both closing panels, so the booking link lives in exactly one place.
 */
export default function BookCta({
  onDark = false,
}: {
  /** Heroes and the ink closing panels put this on a dark ground, which the
      small print has to be legible against. */
  onDark?: boolean;
}) {
  return (
    <div>
      <a
        href={BOOKING_URL}
        className="btn-amber"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "11px 24px",
          borderRadius: 999,
          background: amber,
          color: ink,
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 8px 24px rgba(20, 16, 60, 0.3)",
          /* The label is long. Let it wrap on a narrow phone rather than
             pushing the hero wider than the viewport. */
          maxWidth: "100%",
          textWrap: "balance",
        }}
      >
        Book a free 15-minute call →
      </a>
      <p
        style={{
          margin: "12px 0 0",
          fontSize: "0.88rem",
          color: onDark ? "rgba(255, 255, 255, 0.82)" : muted,
          textShadow: onDark ? "0 2px 10px rgba(20, 16, 60, 0.6)" : undefined,
          overflowWrap: "anywhere",
        }}
      >
        or email me:{" "}
        <a
          href={MAILTO}
          style={{ color: onDark ? amber : "inherit", fontWeight: 700 }}
        >
          hello@davidhaxton.co.uk
        </a>
      </p>
    </div>
  );
}
