"use client";

import { useEffect, useState } from "react";
import { page } from "./tokens";

const STORE = "dh-motion";

type Cam = { zoom?: number; spin?: number; reset?: boolean };

/**
 * Drives <dh-island> through the `dh-camera` window event, mirroring the
 * `dh-focus` channel the element already listens on. Buttons rather than
 * wheel/pinch so page scrolling is never hijacked.
 */
function send(detail: Cam) {
  window.dispatchEvent(new CustomEvent("dh-camera", { detail }));
}

const button: React.CSSProperties = {
  width: 34,
  height: 34,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 999,
  border: "1px solid rgba(255, 255, 255, 0.28)",
  background: "rgba(28, 26, 58, 0.55)",
  color: page,
  font: "800 1rem/1 inherit",
  cursor: "pointer",
  padding: 0,
};

export default function IslandControls() {
  /* null = follow the system preference, true/false = the viewer overrode it.
     Lives here rather than in the element so the label can reflect the state. */
  const [motion, setMotion] = useState<boolean | null>(null);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = window.localStorage.getItem(STORE); } catch { /* private mode */ }
    if (saved === "on" || saved === "off") {
      const on = saved === "on";
      setMotion(on);
      window.dispatchEvent(new CustomEvent(STORE, { detail: { on } }));
    } else {
      setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  const toggleMotion = () => {
    const on = !motion;
    setMotion(on);
    try { window.localStorage.setItem(STORE, on ? "on" : "off"); } catch { /* private mode */ }
    window.dispatchEvent(new CustomEvent(STORE, { detail: { on } }));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 22,
        pointerEvents: "auto",
      }}
    >
      <span
        style={{
          fontSize: "0.82rem",
          fontWeight: 700,
          color: page,
          opacity: 0.85,
          marginRight: 4,
          textShadow: "0 2px 10px rgba(20, 16, 60, 0.6)",
        }}
      >
        Drag the park to turn it
      </span>
      <button type="button" style={button} onClick={() => send({ spin: -1 })} aria-label="Turn the park left">
        ↶
      </button>
      <button type="button" style={button} onClick={() => send({ spin: 1 })} aria-label="Turn the park right">
        ↷
      </button>
      <button type="button" style={button} onClick={() => send({ zoom: -1 })} aria-label="Zoom out">
        −
      </button>
      <button type="button" style={button} onClick={() => send({ zoom: 1 })} aria-label="Zoom in">
        +
      </button>
      <button
        type="button"
        style={{ ...button, width: "auto", padding: "0 14px", fontSize: "0.82rem" }}
        onClick={() => send({ reset: true })}
        aria-label="Reset the view"
      >
        Reset
      </button>
      <button
        type="button"
        style={{ ...button, width: "auto", padding: "0 14px", fontSize: "0.82rem" }}
        onClick={toggleMotion}
        aria-pressed={motion === true}
        aria-label={motion ? "Stop the park moving" : "Let the park move"}
      >
        {motion ? "Pause" : "Animate"}
      </button>
    </div>
  );
}
