import type { Metadata } from "next";
import BookCta from "@/components/BookCta";
import CardGrid from "@/components/CardGrid";
import DetailCard from "@/components/DetailCard";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { amber, amberDeep, display, ink, muted } from "@/components/tokens";

export const metadata: Metadata = {
  title: "Student tuition",
  description:
    "One-to-one GCSE and A-Level computer science tuition online, from a Head of Computer Science with fifteen years’ teaching experience.",
};

const QUESTIONS = [
  {
    q: "What does it cost?",
    a: "£75 an hour. Sessions are paid in blocks of five, in advance. If your school hasn’t got a specialist computer science teacher and that’s a stretch, email me and we’ll sort something out.",
  },
  {
    q: "How long are sessions, and how often?",
    a: "An hour, usually once a week. Some students step up to twice a week before mocks or the summer exams.",
  },
  {
    q: "Where do sessions happen?",
    a: "Online, on Google Meet. You don’t need to install anything, just a laptop with a camera and a decent connection.",
  },
  {
    q: "What happens in the first session?",
    a: "I find out where the gaps are, usually by working through a few past-paper questions together. You leave with a clear picture of what we’ll tackle first.",
  },
  {
    q: "Do you teach my child’s exam board?",
    a: "AQA, OCR and Edexcel at GCSE, and OCR and AQA at A-Level. I work to whichever specification your school runs.",
  },
  {
    q: "Can I sit in?",
    a: "Always. Sessions aren’t recorded unless everyone agrees.",
  },
  {
    q: "What if we need to cancel?",
    a: "Give me 48 hours’ notice and the session moves. With less notice it’s charged, as I only have a few slots each week.",
  },
  {
    q: "When are you available?",
    a: "Weekend mornings and weekday evenings. Places are limited, so book a call to see what’s free.",
  },
];

const card: React.CSSProperties = {
  background: "#FFFFFF",
  borderRadius: 18,
  padding: "26px 28px",
  boxShadow: "0 6px 20px rgba(20, 16, 60, 0.08)",
};

const h2: React.CSSProperties = {
  fontFamily: display,
  fontWeight: 800,
  fontSize: "1.4rem",
  letterSpacing: "-0.02em",
  margin: "0 0 10px",
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
        <section style={card}>
          <h2 style={h2}>About</h2>
          <p style={{ margin: "0 0 14px", color: muted, textWrap: "pretty" }}>
            I’m Head of Computer Science at an independent school in London, and
            I’ve taught GCSE and A-Level for over fifteen years. I have a BSc in
            Computer Science and a PGCE. Before teaching, I was a developer and
            project manager at BT, so I teach this subject as something people
            actually do, not just something on the syllabus.
          </p>
          <p
            style={{
              margin: 0,
              fontWeight: 800,
              color: amberDeep,
              textWrap: "pretty",
            }}
          >
            Enhanced DBS checked. Parents are always welcome to sit in.
          </p>
        </section>

        <CardGrid>
          <DetailCard label="Boards" title="AQA · OCR · Edexcel" accent={amber}>
            AQA, OCR and Edexcel at GCSE; OCR and AQA at A-Level. Whichever
            specification your school runs, we work to that one.
          </DetailCard>
          <DetailCard label="Focus" title="Where marks go" accent={amber}>
            Algorithms, programming, systems and exam craft: the four places a
            grade 7 quietly turns into a grade 9.
          </DetailCard>
          <DetailCard label="Approach" title="Straight feedback" accent={amber}>
            No cut corners and no false praise. You’ll always know exactly
            what’s working and what needs another pass.
          </DetailCard>
        </CardGrid>

        <section style={card}>
          <h2 style={h2}>A note for parents</h2>
          <p style={{ margin: 0, color: muted, textWrap: "pretty" }}>
            The gap between a grade 7 and a grade 9 is very often exam
            technique, not subject knowledge. Reading the command word,
            structuring a longer answer, managing time under pressure:
            that’s specifically what I work on, alongside the content itself.
          </p>
        </section>

        <Faq heading="Questions" items={QUESTIONS} accent={amber} />

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
          <p
            style={{
              margin: 0,
              flex: "1 1 320px",
              minWidth: 0,
              fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
              textWrap: "pretty",
            }}
          >
            Not sure yet? A 15-minute call costs nothing. Tell me the year
            group, the exam board and what’s going wrong, and I’ll tell you
            honestly whether I can help.
          </p>
          <div style={{ flex: "0 1 auto", minWidth: 0 }}>
            <BookCta onDark />
          </div>
        </div>
      </Main>
      <SiteFooter />
    </>
  );
}
