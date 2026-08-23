import type { Metadata } from "next";
import DetailCard from "@/components/DetailCard";
import EmailButton from "@/components/EmailButton";
import IntroBox from "@/components/IntroBox";
import PageHero from "@/components/PageHero";
import Sticker from "@/components/Sticker";
import {
  bodyCopy,
  card,
  green,
  greenInk,
  greenPale,
  highlight,
  highlightPale,
  ink,
  muted,
  section,
} from "@/components/tokens";

export const metadata: Metadata = {
  title: "Student tuition",
  description:
    "One-to-one GCSE & A-Level computer science tuition. 97.2% of students graded 9–7 across a three-year average on OCR J277.",
};

const RESULTS = [
  { series: "2023", mine: "95.0%", national: "23.3%" },
  { series: "2024", mine: "100%", national: "27.4%" },
  { series: "2025", mine: "96.9%", national: "29.6%*" },
];

const headerCell = {
  padding: "10px 10px",
  fontSize: 11.5,
  fontWeight: 700,
  letterSpacing: "0.14em",
  borderBottom: `3px solid ${ink}`,
  textTransform: "uppercase",
} as const;

const bodyCell = {
  padding: "13px 10px",
  borderBottom: `1px solid ${ink}`,
} as const;

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
              97.2%
            </div>
            <p
              style={{
                ...bodyCopy(19),
                lineHeight: 1.45,
                margin: "20px 0 0",
                maxWidth: "30ch",
              }}
            >
              of my students earned a grade 9–7. Three-year average, OCR J277 —
              every candidate passed.
            </p>
          </div>

          <div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 16,
              }}
            >
              <caption className="sr-only">
                Grade 9–7 rate, my students against the national figure
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ ...headerCell, textAlign: "left" }}>
                    Series
                  </th>
                  <th scope="col" style={{ ...headerCell, textAlign: "right" }}>
                    Mine
                  </th>
                  <th scope="col" style={{ ...headerCell, textAlign: "right" }}>
                    National
                  </th>
                </tr>
              </thead>
              <tbody>
                {RESULTS.map((row) => (
                  <tr key={row.series}>
                    <td style={{ ...bodyCell, fontWeight: 500 }}>
                      {row.series}
                    </td>
                    <td
                      style={{
                        ...bodyCell,
                        textAlign: "right",
                        fontWeight: 800,
                      }}
                    >
                      {row.mine}
                    </td>
                    <td
                      style={{
                        ...bodyCell,
                        textAlign: "right",
                        fontWeight: 500,
                        color: muted,
                      }}
                    >
                      {row.national}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    style={{
                      padding: "13px 10px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    3-yr avg
                  </td>
                  <td
                    style={{
                      padding: "13px 10px",
                      textAlign: "right",
                      fontWeight: 800,
                      background: greenPale,
                    }}
                  >
                    97.2%
                  </td>
                  <td
                    style={{
                      padding: "13px 10px",
                      textAlign: "right",
                      fontWeight: 500,
                      color: muted,
                    }}
                  >
                    —
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              style={{
                fontSize: 12.5,
                fontWeight: 500,
                lineHeight: 1.55,
                color: muted,
                margin: "16px 0 0",
              }}
            >
              * 2025 = all boards combined; OCR-specific figure unavailable. On
              2023 &amp; 2024 like-for-like, roughly 4× the national rate.
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

      <section style={{ ...section, padding: "24px 20px 96px" }}>
        <div
          style={{
            ...card(8),
            background: greenPale,
            padding: "36px 36px",
          }}
        >
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: ink,
              margin: "0 0 16px",
              textTransform: "uppercase",
            }}
          >
            A note for parents
          </h2>
          <p style={{ ...bodyCopy(20), maxWidth: "64ch" }}>
            The gap between a grade 7 and a grade 9 is very often exam
            technique, not subject knowledge — reading the command word,
            structuring a longer answer, managing time under pressure.
            That&rsquo;s specifically what I work on, alongside the content
            itself.
          </p>
        </div>
      </section>
    </main>
  );
}
