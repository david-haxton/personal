export default function WhatIDoLead() {
  return (
    <section
      id="tuition"
      className="sec-pad"
      style={{
        maxWidth: 1360,
        margin: "0 auto",
        padding: "100px 40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "#FDE047",
              padding: "4px 12px",
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              border: "2px solid #152A23",
              marginBottom: 20,
            }}
          >
            What I do
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.02,
              textTransform: "uppercase",
              maxWidth: "18ch",
            }}
          >
            Three ways I can help.
          </h2>
        </div>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans'",
            fontWeight: 700,
            fontSize: 14,
            color: "#4B5563",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            maxWidth: 320,
          }}
        >
          Pick the one that fits you
        </div>
      </div>
    </section>
  );
}
