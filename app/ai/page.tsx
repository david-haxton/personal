import type { Metadata } from "next";
import BookCta from "@/components/BookCta";
import CardGrid from "@/components/CardGrid";
import DetailCard from "@/components/DetailCard";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StubCard from "@/components/StubCard";
import { amber, display, ink, MAILTO, muted, teal } from "@/components/tokens";

export const metadata: Metadata = {
  title: "AI for adults",
  description:
    "One-to-one AI tuition for adults at any starting point, plus free intro sessions for community hubs, libraries and local groups.",
};

const TEAL_DEEP = "#0F5C55";

const QUESTIONS = [
  {
    q: "What does it cost?",
    a: "£75 for an hour, or £110 for 90 minutes. Most people find 90 minutes works better: there’s time to actually build something rather than just talk about it.",
  },
  {
    q: "I’ve never used AI. Is this for me?",
    a: "Yes. We start from your first ever prompt. No jargon, nothing assumed.",
  },
  {
    q: "I already use it at work. Is this for me?",
    a: "Also yes. We’ll work on your real tasks: getting reliable output, managing context, and knowing when not to trust the answer.",
  },
  {
    q: "Where do sessions happen?",
    a: "Online, on Google Meet. Bring a laptop and something you’d like to get done.",
  },
  {
    q: "Do I need to share work documents?",
    a: "No. We can use made-up examples that mirror your real work, so nothing confidential leaves your hands.",
  },
  {
    q: "Do you do group sessions?",
    a: "For community hubs, libraries and local groups, I’ll run a free intro session. Just email me.",
  },
];

export default function Ai() {
  return (
    <>
      <SiteHeader active="ai" />
      <Hero
        number="02"
        eyebrow="Adults · Any starting point"
        accent={teal}
        zoomTo="ai"
        cta
        lead="Some people want prompting workflows built into their job. Others have heard everyone talking about AI and don’t know where to begin. Both are very welcome."
      >
        AI, explained <span style={{ color: amber }}>properly.</span> Ask
        anything.
      </Hero>

      <Main>
        <CardGrid>
          <DetailCard
            label="Beginners"
            title="Start at zero"
            accent={teal}
            labelColor={TEAL_DEEP}
          >
            The basics explained properly, from your first ever prompt. No
            jargon and nothing assumed.
          </DetailCard>
          <DetailCard
            label="Experienced"
            title="Make it reliable"
            accent={teal}
            labelColor={TEAL_DEEP}
          >
            What these models are good at and where they fall over, managing
            context properly, and output you can trust in the real world,
            not just in a demo.
          </DetailCard>
          <DetailCard
            label="Approach"
            title="Built round you"
            accent={teal}
            labelColor={TEAL_DEEP}
          >
            Sessions at your pace, aimed at what you actually do, not a
            generic course someone else wrote.
          </DetailCard>
        </CardGrid>

        <section
          style={{
            background: "#FFFFFF",
            borderRadius: 18,
            padding: "26px 28px",
            boxShadow: "0 6px 20px rgba(20, 16, 60, 0.08)",
          }}
        >
          <h2
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: "1.4rem",
              letterSpacing: "-0.02em",
              margin: "0 0 10px",
            }}
          >
            About
          </h2>
          <p style={{ margin: 0, color: muted, textWrap: "pretty" }}>
            I spent years as a developer and project manager at BT before
            moving into teaching. I use AI every day to build real tools, so
            I’ll show you what works in practice, not just in a demo.
          </p>
        </section>

        <Faq heading="Questions" items={QUESTIONS} accent={teal} />

        <StubCard stub="Free" stubNote="for community hubs" stubBackground={teal}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "14px 20px",
            }}
          >
            <div style={{ flex: "1 1 320px", minWidth: 0 }}>
              <h2
                style={{
                  fontFamily: display,
                  fontWeight: 800,
                  fontSize: "1.45rem",
                  letterSpacing: "-0.02em",
                  margin: "0 0 8px",
                }}
              >
                Community hubs
              </h2>
              <p style={{ margin: 0, textWrap: "pretty" }}>
                If you run a community hub, library, or local group and would
                like a session on AI for your members, I’ll come and run one for
                free. Start at zero, no jargon. Just email me.
              </p>
            </div>
            <a
              href={MAILTO}
              className="btn-amber"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 24px",
                borderRadius: 999,
                background: ink,
                color: "#FFFFFF",
                fontWeight: 800,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Email me →
            </a>
          </div>
        </StubCard>

        <div
          style={{
            background: ink,
            color: "#FFFFFF",
            borderRadius: 18,
            padding: "34px clamp(22px, 4vw, 44px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "22px 28px",
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
              minWidth: 0,
              textWrap: "balance",
            }}
          >
            Tell me what you’re trying to do and we’ll{" "}
            <span style={{ color: amber }}>start there.</span>
          </h2>
          <div style={{ flex: "0 1 auto", minWidth: 0 }}>
            <BookCta onDark />
          </div>
        </div>
      </Main>
      <SiteFooter />
    </>
  );
}
