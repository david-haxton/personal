"use client";

import { useEffect, useState } from "react";
import { page } from "./tokens";

const STORE = "dh-motion";

/**
 * Deliberately only a motion control. Spinning and zooming the park are left
 * undocumented so finding them is a small reward — but motion that runs
 * indefinitely needs a way to stop it, so that one stays visible.
 *
 * The element registers its dh-motion listener when island.js upgrades it,
 * which happens after this effect would otherwise fire, so wait for the
 * definition before replaying a saved preference. Without that the park stays
 * frozen while the button claims to be playing.
 */
function send(on: boolean) {
  if (typeof window === "undefined") return;
  const fire = () =>
    window.dispatchEvent(new CustomEvent(STORE, { detail: { on } }));
  if (window.customElements?.whenDefined) {
    window.customElements.whenDefined("dh-island").then(fire, fire);
  } else {
    fire();
  }
}

const button: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  padding: "0 14px",
  height: 30,
  borderRadius: 999,
  border: "1px solid rgba(255, 255, 255, 0.32)",
  background: "rgba(28, 26, 58, 0.55)",
  color: page,
  font: "700 0.78rem/1 inherit",
  cursor: "pointer",
  opacity: 0.9,
};

/* Without a glyph the bare word reads as stray body text rather than a
   control. The label stays alongside it, so the affordance does not rest on
   an icon alone. */
const glyph: React.CSSProperties = { fontSize: "0.7rem", lineHeight: 1 };

export default function IslandControls() {
  /* null until the effect reads the real preference, so the first paint does
     not assert a state we have not checked yet. */
  const [motion, setMotion] = useState<boolean | null>(null);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORE);
    } catch {
      /* private mode */
    }
    if (saved === "on" || saved === "off") {
      const on = saved === "on";
      setMotion(on);
      send(on);
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotion(!mq.matches);
    const onChange = () => setMotion(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const on = !motion;
    setMotion(on);
    try {
      window.localStorage.setItem(STORE, on ? "on" : "off");
    } catch {
      /* private mode */
    }
    send(on);
  };

  return (
    <div style={{ display: "flex", marginTop: 22, pointerEvents: "auto" }}>
      <button
        type="button"
        style={button}
        onClick={toggle}
        aria-pressed={motion === true}
        aria-label={motion ? "Stop the park moving" : "Let the park move"}
      >
        <span aria-hidden="true" style={glyph}>
          {motion ? "❚❚" : "▶"}
        </span>
        {motion ? "Pause the park" : "Animate the park"}
      </button>
    </div>
  );
}
