export default function Mission() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "2px solid #152A23",
        borderBottom: "2px solid #152A23",
      }}
    >
      <div
        className="sec-pad grid-2col"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "100px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "#22C55E",
              padding: "4px 12px",
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              border: "2px solid #152A23",
            }}
          >
            The Mission
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 900,
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              lineHeight: 1.02,
              textTransform: "uppercase",
              marginTop: 24,
            }}
          >
            The textbook only gets you so far.
          </h2>
        </div>
        <div
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "#152A23",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <p>
            Whether you&apos;re aiming for a grade 9 at GCSE, an A* at
            A-Level, taking your first steps with AI, or fixing a web layout
            that isn&apos;t quite working —{" "}
            <span style={{ background: "#FDE047", padding: "2px 6px" }}>
              I&apos;m here to help you actually get there.
            </span>
          </p>
          <p style={{ color: "#4B5563" }}>
            I teach computer science, build digital products, and help
            people — whatever their starting point — get proper, working use
            out of modern technology.
          </p>
        </div>
      </div>
    </section>
  );
}
