import type { Metadata } from "next";
import DetailCard from "@/components/DetailCard";
import EmailButton from "@/components/EmailButton";
import IntroBox from "@/components/IntroBox";
import PageHero from "@/components/PageHero";
import Sticker from "@/components/Sticker";
import {
  button,
  card,
  greenPale,
  highlight,
  highlightPale,
  MAILTO,
  section,
} from "@/components/tokens";

export const metadata: Metadata = {
  title: "AI tuition for adults",
  description:
    "One-to-one AI tuition for adults at any starting point — from your first ever prompt to workflows you can rely on at work.",
};

export default function Ai() {
  return (
    <main>
      <PageHero eyebrow="02 — Adults · Any starting point">
        AI, explained
        <br />
        <span style={highlight}>properly.</span>
        <Sticker src="/stickers/char-3.png" />
        <br />
        No daft questions.
      </PageHero>

      <section
        style={{
          ...section,
          padding: "16px 20px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 26,
        }}
      >
        <IntroBox maxWidth="64ch">
          Some people want{" "}
          <span style={highlightPale}>prompting workflows</span> built into
          their job. Others have heard everyone talking about AI and
          don&rsquo;t know where to begin. Both are very welcome.
        </IntroBox>
        <EmailButton />
      </section>

      <section
        style={{
          ...section,
          padding: "0 20px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
          gap: 24,
        }}
      >
        <DetailCard label="Beginners" title="Start at zero">
          The basics explained properly, from your first ever prompt. No jargon
          and nothing assumed.
        </DetailCard>
        <DetailCard label="Experienced" title="Make it reliable">
          What these models are good at and where they fall over, managing
          context properly, and output you can trust in the real world — not
          just in a demo.
        </DetailCard>
        <DetailCard label="Approach" title="Built round you">
          Sessions at your pace, aimed at what you actually do — not a generic
          course someone else wrote.
        </DetailCard>
      </section>

      <section style={{ ...section, padding: "24px 20px 96px" }}>
        <div
          style={{
            ...card(10),
            background: greenPale,
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4.4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              margin: "0 0 20px",
              textWrap: "pretty",
            }}
          >
            Tell me what you&rsquo;re trying to do and we&rsquo;ll start there.
          </p>
          <a
            href={MAILTO}
            className="btn btn-sm"
            style={{
              ...button(5),
              display: "inline-block",
              fontSize: 15,
              letterSpacing: "0.06em",
              padding: "15px 28px",
              // The address is one unbreakable token; let it wrap rather than
              // push the panel wider than a narrow phone.
              maxWidth: "100%",
              overflowWrap: "anywhere",
            }}
          >
            hello@davidhaxton.co.uk
          </a>
        </div>
      </section>
    </main>
  );
}
