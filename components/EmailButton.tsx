import { button, MAILTO } from "./tokens";

export default function EmailButton() {
  return (
    <a
      href={MAILTO}
      className="btn btn-md"
      style={{
        ...button(6),
        fontSize: 15,
        letterSpacing: "0.06em",
        padding: "15px 30px",
      }}
    >
      Email me →
    </a>
  );
}
