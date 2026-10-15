import type { Metadata } from "next";
import CardGrid from "@/components/CardGrid";
import DetailCard from "@/components/DetailCard";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import ProjectCard from "@/components/ProjectCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { amber, coral, display, ink, MAILTO } from "@/components/tokens";

export const metadata: Metadata = {
  title: "Web design",
  description:
    "Two live builds made end to end: design, front end and logic.",
};

const CORAL_DEEP = "#9B2820";

const HOW = [
  {
    label: "Structure",
    title: "Use before look",
    body: "The best idea in the world doesn't matter if people can't work out how to use it. Structure first, styling after.",
  },
  {
    label: "Code",
    title: "Clean front end",
    body: "Responsive layout and readable markup that loads fast, holds together on a phone, and stays easy to change later.",
  },
  {
    label: "Testing",
    title: "Tested for real",
    body: "Both builds above went in front of real students in a real classroom. That's where you find out what actually works.",
  },
];

export default function Web() {
  return (
    <>
      <SiteHeader active="web" />
      <Hero
        number="03"
        eyebrow="Built end to end"
        accent={coral}
        zoomTo="web"
        lead="Two live builds you can open right now and use: design, front end and logic, all mine."
      >
        Things I’ve <span style={{ color: amber }}>actually</span> built.
      </Hero>

      <Main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: 20,
          }}
        >
          <ProjectCard
            href="https://art.davidhaxton.co.uk/"
            image="/screenshots/hidden-patterns.png"
            alt="Hidden Patterns home screen: three paintings to explore"
            index="01"
            barColor={coral}
            title="Hidden Patterns"
            body="Find the algorithm hiding inside three famous paintings. Watch the particles, guess the rule, then check yourself against the real one."
            cta="Open Hidden Patterns →"
          />
          <ProjectCard
            href="https://deep-patterns.davidhaxton.co.uk/"
            image="/screenshots/deep-patterns.png"
            alt="Deep Patterns home screen: Starry Night, Great Wave and The Scream"
            index="02"
            barColor={amber}
            title="Deep Patterns"
            body="The deeper follow-on. Build the algorithm yourself, work out why it scales the way it does, and find it operating in the real world, from weather models to zebrafish stripes."
            cta="Open Deep Patterns →"
          />
        </div>

        <h2
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            letterSpacing: "-0.02em",
            margin: "14px 0 0",
          }}
        >
          How I work
        </h2>
        <CardGrid>
          {HOW.map((h) => (
            <DetailCard
              key={h.label}
              label={h.label}
              title={h.title}
              accent={coral}
              labelColor={CORAL_DEEP}
            >
              {h.body}
            </DetailCard>
          ))}
        </CardGrid>

        <div
          style={{
            background: ink,
            color: "#FFFFFF",
            borderRadius: 18,
            padding: "34px clamp(22px, 4vw, 44px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "18px 28px",
            boxShadow: "0 10px 28px rgba(20, 16, 60, 0.18)",
          }}
        >
          <h2
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              margin: 0,
              flex: "1 1 320px",
              textWrap: "balance",
            }}
          >
            Need something like this{" "}
            <span style={{ color: amber }}>built?</span>
          </h2>
          <a
            href={MAILTO}
            className="btn-amber"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 26px",
              borderRadius: 999,
              background: amber,
              color: ink,
              fontWeight: 800,
              textDecoration: "none",
              marginLeft: "auto",
              maxWidth: "100%",
              overflowWrap: "anywhere",
            }}
          >
            hello@davidhaxton.co.uk
          </a>
        </div>
      </Main>
      <SiteFooter />
    </>
  );
}
