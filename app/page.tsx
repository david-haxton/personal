import Island from "@/components/Island";
import Portrait from "@/components/Portrait";
import IslandControls from "@/components/IslandControls";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  amber,
  amberDeep,
  coral,
  cream,
  display,
  gutter,
  ink,
  muted,
  sky,
  teal,
} from "@/components/tokens";

const DOORS = [
  {
    href: "/tuition",
    number: "01",
    kicker: "Tuition",
    title: "Student tuition",
    body: "KS3, GCSE and A-Level, one to one. Exam technique for the top grades, and enrichment for students who want to go further.",
    extra: { href: "/tuition#try", label: "Try a free lesson →" },
    accent: amber,
  },
  {
    href: "/ai",
    number: "02",
    kicker: "AI",
    title: "AI for adults",
    body: "From your first ever prompt to workflows you can rely on. Ask anything.",
    accent: teal,
  },
  {
    href: "/web",
    number: "03",
    kicker: "Web",
    title: "Web design",
    body: "Two live builds, made end to end.",
    accent: coral,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: sky,
          color: "#FFFFFF",
        }}
      >
        <Island />
        {/*
          Legibility scrim: darkens the park behind the copy so the headline
          holds up over the busy art. No z-index, and it sits before the content
          in the DOM, so the text paints above it and the pins above that.
        */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, rgba(28,26,58,0.58) 0%, rgba(28,26,58,0.42) 34%, rgba(28,26,58,0) 62%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0 24px",
            padding: `clamp(36px, 7vh, 80px) ${gutter} clamp(80px, 12vh, 110px)`,
            pointerEvents: "none",
          }}
        >
          <div
            style={{ flex: "1 1 460px", minWidth: 0, pointerEvents: "auto" }}
          >
            {/* Byline-sized, so it says who this is without competing with the
                park for the eye. The portrait that has to carry weight lives
                on /tuition, where someone is deciding whether to trust me. */}
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                margin: "0 0 16px",
                fontWeight: 800,
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                textShadow: "0 2px 14px rgba(20, 16, 60, 0.55)",
              }}
            >
              <Portrait size={60} onDark ring="rgba(255, 255, 255, 0.5)" />
              Computer science teacher · Builder
            </p>
            <h1
              style={{
                fontFamily: display,
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.02,
                margin: "0 0 22px",
                maxWidth: "16ch",
                textWrap: "balance",
                textShadow: "0 3px 22px rgba(20, 16, 60, 0.5)",
              }}
            >
              Serious computer science. Practical AI.
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(1.08rem, 1.5vw, 1.25rem)",
                maxWidth: "34ch",
                textShadow: "0 2px 14px rgba(20, 16, 60, 0.6)",
              }}
            >
              Head of Computer Science at a London independent school, with
              fifteen years teaching KS3, GCSE and A-Level. Before that, a developer
              and project manager at BT. Pick where you&rsquo;d like to start.
            </p>
            <IslandControls />
          </div>
          <div
            id="island-spot"
            style={{
              flex: "1 1 420px",
              minWidth: 0,
              height: "clamp(300px, 46vh, 460px)",
            }}
          />
        </div>
      </section>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "-56px auto 0",
          padding: `0 ${gutter} 80px`,
          display: "grid",
          gap: 18,
        }}
      >
        {DOORS.map((door) => (
          /* Not one big <a>: the tuition door carries a second link, and
             links can't nest. The title's link stretches over the whole card
             (.door-link in globals.css) and the second link sits above it. */
          <div
            key={door.href}
            className="door"
            style={{
              position: "relative",
              display: "flex",
              background: cream,
              color: ink,
              borderRadius: 18,
              textDecoration: "none",
              overflow: "hidden",
              boxShadow: "0 12px 34px rgba(20, 16, 60, 0.14)",
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                width: 126,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 10,
                background: door.accent,
              }}
            >
              <b
                style={{
                  fontFamily: display,
                  fontWeight: 800,
                  fontSize: "2rem",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                }}
              >
                {door.number}
              </b>
              <small
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: 4,
                }}
              >
                {door.kicker}
              </small>
            </div>
            <div
              style={{
                flex: "1 1 0",
                minWidth: 0,
                padding: "22px clamp(18px, 3vw, 30px)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px 20px",
              }}
            >
              <div style={{ flex: "1 1 300px", minWidth: 0 }}>
                <h2
                  style={{
                    fontFamily: display,
                    fontWeight: 800,
                    fontSize: "1.45rem",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    margin: "0 0 6px",
                  }}
                >
                  <a
                    href={door.href}
                    className="door-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {door.title}
                  </a>
                </h2>
                <p style={{ margin: 0, color: muted, textWrap: "pretty" }}>
                  {door.body}
                </p>
                {door.extra && (
                  <a
                    href={door.extra.href}
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "inline-block",
                      marginTop: 8,
                      fontWeight: 800,
                      color: amberDeep,
                    }}
                  >
                    {door.extra.label}
                  </a>
                )}
              </div>
              <span
                className="btn-amber"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: ink,
                  color: "#FFFFFF",
                  fontWeight: 800,
                  marginLeft: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                Enter →
              </span>
            </div>
          </div>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
