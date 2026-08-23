import Link from "next/link";
import Sticker from "@/components/Sticker";
import {
  bodyCopy,
  button,
  card,
  displayTitle,
  eyebrow,
  highlight,
  mutedBody,
  section,
} from "@/components/tokens";

const DOORS = [
  {
    href: "/tuition",
    label: "01 — Tuition",
    title: "Student tuition",
    body: "GCSE & A-Level, one to one. Grade 9 and A* work, exam technique included.",
  },
  {
    href: "/ai",
    label: "02 — AI",
    title: "AI tuition for adults",
    body: "From your first ever prompt to workflows you can rely on. No daft questions.",
  },
  {
    href: "/web",
    label: "03 — Web",
    title: "Web design",
    body: "Two live builds, made end to end. Proof of craft, not a sales pitch.",
  },
];

export default function Home() {
  return (
    <main>
      <section
        style={{ ...section, padding: "56px 20px 44px", textAlign: "center" }}
      >
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6.6vw, 5rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            textTransform: "uppercase",
          }}
        >
          <span style={highlight}>Serious</span>
          <br />
          computer science.
          <br />
          <Sticker src="/stickers/char-1.png" />
          Practical AI.
        </h1>
        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.5,
            margin: "26px auto 0",
            color: mutedBody,
          }}
        >
          I teach computer science, and I build things.
          <br />
          Pick the door that fits you.
        </p>
      </section>

      <section
        style={{
          ...section,
          padding: "0 20px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(290px, 100%), 1fr))",
          gap: 22,
        }}
      >
        {DOORS.map((door) => (
          <Link
            key={door.href}
            href={door.href}
            className="card card-door"
            style={{
              ...card(8),
              padding: "26px 26px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span style={eyebrow}>{door.label}</span>
            <span style={displayTitle(30, 0.98)}>{door.title}</span>
            <span style={bodyCopy(16.5)}>{door.body}</span>
            <span
              style={{
                ...button(null),
                marginTop: "auto",
                alignSelf: "flex-start",
                fontSize: 14,
                letterSpacing: "0.06em",
                padding: "11px 18px",
              }}
            >
              Enter →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
