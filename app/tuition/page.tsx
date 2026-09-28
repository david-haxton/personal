import type { Metadata } from "next";
import DetailCard from "@/components/DetailCard";
import EmailButton from "@/components/EmailButton";
import IntroBox from "@/components/IntroBox";
import NotePanel from "@/components/NotePanel";
import PageHero from "@/components/PageHero";
import Sticker from "@/components/Sticker";
import {
  bodyCopy,
  card,
  green,
  greenInk,
  highlight,
  highlightPale,
  muted,
  section,
} from "@/components/tokens";

export const metadata: Metadata = {
  title: "Student tuition",
  description:
    "One-to-one GCSE & A-Level computer science tuition. My students average around 70 percentage points ahead of the national grade 9–7 rate on OCR J277.",
};

export default function Tuition() {
  return (
    <main>
      <PageHero eyebrow="01 — GCSE & A-Level · One to one · Online">
        Understand it
        <br />
        <Sticker src="/stickers/char-2.png" />
        <span style={highlight}>properly</span>
        <br />
        then walk in ready.
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
        <IntroBox maxWidth="62ch">
          A top grade needs more than{" "}
          <span style={highlightPale}>memorised definitions</span>. I take the
          theory apart, build it back up, and drill the exam craft that
          separates a 7 from a 9.
        </IntroBox>
        <EmailButton />
      </section>

      <section style={{ ...section, padding: "0 20px 40px" }}>
        <div
          style={{
            ...card(10),
            padding: "36px 34px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: greenInk,
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              The record
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "clamp(3.8rem, 10vw, 7rem)",
                lineHeight: 0.82,
                letterSpacing: "-0.05em",
                background: green,
                padding: "0 0.08em",
                display: "inline-block",
              }}
            >
              +70
            </div>
          </div>

          <div>
            <p style={{ ...bodyCopy(20), maxWidth: "40ch" }}>
              Percentage points ahead of the national average for grade 9–7,
              taken across three years of OCR J277. Every candidate passed.
            </p>
            <p
              style={{
                fontSize: 12.5,
                fontWeight: 500,
                lineHeight: 1.55,
                color: muted,
                margin: "20px 0 0",
                maxWidth: "46ch",
              }}
            >
              Measured against the national grade 9–7 rate for the same exam
              series. The 2025 national figure covers all boards combined, as
              an OCR-specific one wasn&rsquo;t published.
            </p>
          </div>
        </div>
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
        <DetailCard label="Boards" title="AQA · OCR · Edexcel">
          Whichever spec your school runs, we work to that one — including the
          OCR J277 and H446 papers I teach day to day.
        </DetailCard>
        <DetailCard label="Focus" title="Where marks go">
          Algorithms, systems, the NEA and exam craft — the four places a grade
          7 quietly turns into a grade 9.
        </DetailCard>
        <DetailCard label="Approach" title="Straight feedback">
          No cut corners and no false praise. You&rsquo;ll always know exactly
          what&rsquo;s working and what needs another pass.
        </DetailCard>
      </section>

      <section
        style={{
          ...section,
          padding: "24px 20px 96px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <NotePanel title="On price">
          Computer science teaching isn&rsquo;t spread evenly. If your school
          hasn&rsquo;t got a specialist and the standard rate is a stretch,
          email me and we&rsquo;ll sort something out. It&rsquo;s a
          conversation, not an application.
        </NotePanel>

        <NotePanel title="A note for parents" tone="highlight">
          The gap between a grade 7 and a grade 9 is very often exam technique,
          not subject knowledge — reading the command word, structuring a
          longer answer, managing time under pressure. That&rsquo;s
          specifically what I work on, alongside the content itself.
        </NotePanel>
      </section>
    </main>
  );
}
