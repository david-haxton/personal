import type { Metadata } from "next";
import CardGrid from "@/components/CardGrid";
import DetailCard from "@/components/DetailCard";
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
            Tell me what you’re trying to do and we’ll{" "}
            <span style={{ color: amber }}>start there.</span>
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
