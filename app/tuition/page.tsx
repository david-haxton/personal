import type { Metadata } from "next";
import CardGrid from "@/components/CardGrid";
import DetailCard from "@/components/DetailCard";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StubCard from "@/components/StubCard";
import { amber, amberDeep, display, ink, MAILTO, muted } from "@/components/tokens";

export const metadata: Metadata = {
  title: "Student tuition",
  description:
    "One-to-one GCSE & A-Level computer science tuition. Across three years of OCR GCSE Computer Science my students averaged 70 percentage points above the national grade 7–9 rate.",
};

export default function Tuition() {
  return (
    <>
      <SiteHeader active="tuition" />
      <Hero
        number="01"
        eyebrow="GCSE & A-Level · One to one · Online"
        accent={amber}
        zoomTo="tuition"
        cta
        lead="A top grade needs more than memorised definitions. I take the theory apart, build it back up, and drill the exam craft that separates a 7 from a 9."
      >
        Understand it <span style={{ color: amber }}>properly,</span> then walk
        in ready.
      </Hero>

      <Main>
        <StubCard stub="+70" stubNote="vs national" stubBackground={amber}>
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: amberDeep,
            }}
          >
            Results
          </p>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)",
              fontWeight: 600,
              maxWidth: "56ch",
              textWrap: "pretty",
            }}
          >
            Across three years of OCR GCSE Computer Science, my students were 70
            percentage points above the national average for grades 7–9. Every
            one of them passed.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "0.84rem",
              color: muted,
              maxWidth: "70ch",
              textWrap: "pretty",
            }}
          >
            Compared with the national grade 7–9 rate for each year. For 2025,
            only an all-boards national figure was published, so that is the one
            used.
          </p>
        </StubCard>

        <CardGrid>
          <DetailCard label="Boards" title="AQA · OCR · Edexcel" accent={amber}>
            Whichever spec your school runs, we work to that one.
          </DetailCard>
          <DetailCard label="Focus" title="Where marks go" accent={amber}>
            Algorithms, programming, systems and exam craft — the four places a
            grade 7 quietly turns into a grade 9.
          </DetailCard>
          <DetailCard label="Approach" title="Straight feedback" accent={amber}>
            No cut corners and no false praise. You’ll always know exactly
            what’s working and what needs another pass.
          </DetailCard>
        </CardGrid>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          <div
            style={{
              background: ink,
              color: "#FFFFFF",
              borderRadius: 18,
              padding: "26px 28px",
              boxShadow: "0 10px 28px rgba(20, 16, 60, 0.18)",
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
              On <span style={{ color: amber }}>price</span>
            </h2>
            <p style={{ margin: "0 0 16px", textWrap: "pretty" }}>
              Computer science teaching isn’t spread evenly. If your school
              hasn’t got a specialist and the standard rate is a stretch, email
              me and we’ll sort something out. It’s a conversation, not an
              application.
            </p>
            <a href={MAILTO} style={{ color: amber, fontWeight: 800 }}>
              hello@davidhaxton.co.uk
            </a>
          </div>

          <div
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
              A note for parents
            </h2>
            <p style={{ margin: 0, color: muted, textWrap: "pretty" }}>
              The gap between a grade 7 and a grade 9 is very often exam
              technique, not subject knowledge — reading the command word,
              structuring a longer answer, managing time under pressure. That’s
              specifically what I work on, alongside the content itself.
            </p>
          </div>
        </div>
      </Main>
      <SiteFooter />
    </>
  );
}
