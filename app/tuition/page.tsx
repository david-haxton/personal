import type { Metadata } from "next";
import BookCta from "@/components/BookCta";
import CardGrid from "@/components/CardGrid";
import DetailCard from "@/components/DetailCard";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import LessonCard from "@/components/LessonCard";
import Main from "@/components/Main";
import Portrait from "@/components/Portrait";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { amber, amberDeep, display, ink, muted } from "@/components/tokens";

export const metadata: Metadata = {
  title: "Student tuition",
  description:
    "One-to-one KS3, GCSE and A-Level computer science tuition and enrichment online, from a Head of Computer Science with fifteen years’ teaching experience.",
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
    a: "KS3 follows your school’s scheme of work, or mine if there isn’t one. At GCSE I teach AQA, OCR and Edexcel; at A-Level, OCR and AQA. I work to whichever specification your school runs.",
  },
  {
    q: "Do you teach KS3?",
    a: "Yes. KS3 is where good habits start, especially in programming, and it’s a lot easier to build them at 12 than to fix them at 16.",
  },
  {
    q: "What is enrichment?",
    a: "Computer science beyond the exam: how AI actually works, algorithms in art and nature, and building real things. It suits students who are ahead, bored, or thinking about computer science at university. It’s charged at the same rate as tuition.",
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
        eyebrow="KS3, GCSE & A-Level · Enrichment · One to one · Online"
        accent={amber}
        zoomTo="tuition"
        cta
        lead="A top grade needs more than memorised definitions. I take the theory apart, build it back up, and drill the exam craft that separates a 7 from a 9."
      >
        Understand it <span style={{ color: amber }}>properly,</span> then walk
        in ready.
      </Hero>

      <Main>
        {/* The portrait that does the work. Away from the gradient and the
            park, on a calm white card, at a size where a face actually reads
            — this is where someone decides whether to trust me. */}
        <section style={card}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "20px 26px",
            }}
          >
            <Portrait size={200} shape="block" />
            <div style={{ flex: "1 1 320px", minWidth: 0 }}>
              <h2 style={h2}>About</h2>
              <p
                style={{
                  margin: "0 0 14px",
                  color: muted,
                  /* A reading measure, which also stops the copy running out
                     flat beside a 250px portrait and leaving the card empty
                     below it. */
                  maxWidth: "58ch",
                  textWrap: "pretty",
                }}
              >
                I’m Head of Computer Science at an independent school in London,
                and I’ve taught KS3, GCSE and A-Level for over fifteen years. I
                have
                a BSc in Computer Science and a PGCE. Before teaching, I was a
                developer and project manager at BT, so I teach this subject as
                something people actually do, not just something on the
                syllabus.
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
            </div>
          </div>
        </section>

        <section id="try">
          <h2
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.02em",
              margin: "14px 0 8px",
            }}
          >
            Try a lesson
          </h2>
          <p style={{ margin: "0 0 18px", color: muted, textWrap: "pretty" }}>
            These are three of the interactive lessons I’ve built. They’re free
            to try, and they’re the real thing.
          </p>
          <CardGrid>
            <LessonCard
              href="/try/not-magic"
              label="KS3 · Lesson 1 of 4"
              title="Not Magic: rules or examples?"
            >
              Build a cat detector two ways: write the rules yourself, or teach
              it with examples.
            </LessonCard>
            <LessonCard
              href="/try/ide"
              label="GCSE · OCR J277 2.5.2"
              title="The IDE"
            >
              Switch on an IDE one facility at a time, then find out which tool
              catches which error.
            </LessonCard>
            <LessonCard
              href="/try/lexical-analysis"
              label="A-Level · OCR H446 1.2.2 (e)"
              title="Lexical analysis"
            >
              Type into a live lexer and watch your code become tokens. Then
              find out what the IDE actually hands to the compiler.
            </LessonCard>
          </CardGrid>
          <p
            style={{
              margin: "18px 0 0",
              fontWeight: 800,
              color: amberDeep,
              textWrap: "pretty",
            }}
          >
            Tuition clients get the full set, from KS3 to A-Level.
          </p>
        </section>

        <CardGrid min={420}>
          <DetailCard label="Boards" title="AQA · OCR · Edexcel" accent={amber}>
            KS3 follows your school’s scheme, or mine. AQA, OCR and Edexcel at
            GCSE; OCR and AQA at A-Level. Whichever specification your school
            runs, we work to that one.
          </DetailCard>
          <DetailCard label="Focus" title="Where marks go" accent={amber}>
            Algorithms, programming, systems and exam craft: the four places a
            grade 7 quietly turns into a grade 9.
          </DetailCard>
          <DetailCard label="Approach" title="Straight feedback" accent={amber}>
            No cut corners and no false praise. You’ll always know exactly
            what’s working and what needs another pass.
          </DetailCard>
          <DetailCard label="Enrichment" title="Beyond the syllabus" accent={amber}>
            How AI really works, the algorithms hiding in everyday things, and
            real programming projects. For students who’ve outgrown school
            computer science, or who are thinking about it as a degree.
          </DetailCard>
        </CardGrid>

        <section style={card}>
          <h2 style={h2}>A note for parents</h2>
          <p style={{ margin: 0, color: muted, textWrap: "pretty" }}>
            The gap between a grade 7 and a grade 9 is very often exam
            technique, not subject knowledge. Reading the command word,
            structuring a longer answer, managing time under pressure: that’s
            specifically what I work on, alongside the content itself.
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
