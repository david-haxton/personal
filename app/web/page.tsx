import type { Metadata } from "next";
import IntroBox from "@/components/IntroBox";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import Sticker from "@/components/Sticker";
import {
  bodyCopy,
  card,
  displayTitle,
  green,
  greenInk,
  highlight,
  highlightPale,
  MAILTO,
  section,
} from "@/components/tokens";

export const metadata: Metadata = {
  title: "Web design",
  description:
    "Two live builds made end to end — design, front end and logic. Proof of craft, not a sales pitch.",
};

const HOW_I_WORK = [
  {
    title: "Use before look",
    body: "The best idea in the world doesn't matter if people can't work out how to use it. Structure first, styling after.",
  },
  {
    title: "Clean front end",
    body: "Responsive layout and readable markup that loads fast, holds together on a phone, and stays easy to change later.",
  },
  {
    title: "Tested for real",
    body: "Both builds above went in front of real students in a real classroom. That's where you find out what actually works.",
  },
];

export default function Web() {
  return (
    <main>
      <PageHero eyebrow="03 — Built end to end">
        Things I&rsquo;ve
        <br />
        <Sticker src="/stickers/char-4.png" />
        <span style={highlight}>actually built.</span>
      </PageHero>

      <section
        style={{
          ...section,
          padding: "16px 20px 64px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IntroBox maxWidth="62ch">
          Not a portfolio of mockups. Two{" "}
          <span style={highlightPale}>live builds</span> you can open right now
          and use — design, front end and logic, all mine.
        </IntroBox>
      </section>

      <section
        style={{
          ...section,
          padding: "0 20px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
          gap: 26,
        }}
      >
        <ProjectCard
          href="https://art.davidhaxton.co.uk/"
          placeholder="Hidden Patterns"
          label="Live build 01"
          title="Hidden Patterns"
          body="Find the algorithm hiding inside three famous paintings. Watch the particles, guess the rule, then check yourself against the real one."
          cta="Hidden-Patterns →"
        />
        <ProjectCard
          href="https://deep-patterns.davidhaxton.co.uk/"
          placeholder="Deep Patterns"
          label="Live build 02"
          title="Deep Patterns"
          body="The deeper follow-on. Build the algorithm yourself, work out why it scales the way it does, and find it operating in the real world — from weather models to zebrafish stripes."
          cta="Deep-Patterns →"
        />
      </section>

      <section style={{ ...section, padding: "24px 20px 40px" }}>
        <h2
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.16em",
            color: greenInk,
            margin: "0 0 22px",
            textTransform: "uppercase",
          }}
        >
          How I work
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: 22,
          }}
        >
          {HOW_I_WORK.map((item) => (
            <div key={item.title} style={{ ...card(6), padding: "30px 26px" }}>
              <div style={{ ...displayTitle(24, 1.02), marginBottom: 14 }}>
                {item.title}
              </div>
              <p style={bodyCopy(17)}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          ...section,
          padding: "24px 20px 96px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            ...card(8),
            padding: "26px 34px",
            fontSize: 19,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Need something like this built?{" "}
          <a
            href={MAILTO}
            style={{ fontWeight: 700, background: green, padding: "2px 0.3em" }}
          >
            hello@davidhaxton.co.uk
          </a>
        </p>
      </section>
    </main>
  );
}
