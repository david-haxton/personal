/* <dh-island> — isometric Crystal Palace Park map for the hero. Attributes: time (sunrise|day|dusk|night|live), spot (id of element to centre on), zoomto (tuition|ai|web), interactive (drag to spin, responds to dh-camera), hreftuition/hrefai/hrefweb. */
(function () {
  "use strict";
  if (customElements.get("dh-island")) { return; }
  var TW = 64, TH = 32, N = 11, FONT = "'Schibsted Grotesk', system-ui, sans-serif";

  /* Viewing angle, in radians, applied to grid coords before projection.
     iso() has ~80 call sites and no instance access, so the angle lives at
     module scope and draw() sets it each frame. One island per page. */
  var A = 0, CA = 1, SA = 0, MID = N / 2;
  function setAngle(a) { A = a; CA = Math.cos(a); SA = Math.sin(a); }
  function rotX(gx, gy) { return (gx - MID) * CA - (gy - MID) * SA + MID; }
  function rotY(gx, gy) { return (gx - MID) * SA + (gy - MID) * CA + MID; }
  /* Painter's-algorithm key. Unrotated this is gx + gy, the screen-y axis. */
  function depth(gx, gy) { return rotX(gx, gy) + rotY(gx, gy); }
  function iso(gx, gy, z) { var rx = rotX(gx, gy), ry = rotY(gx, gy); return { x: (rx - ry) * TW / 2, y: (rx + ry) * TH / 2 - (z || 0) }; }

  /* The four side walls of an axis-aligned box, as [nx, ny, ax, ay, bx, by].
     Exactly two ever face the camera; rotation permutes which two, so the
     hand-tuned shade constants are assigned by screen orientation rather than
     by axis. A wall only swaps in or out when it is edge-on, so it is seamless. */
  function walls(x0, y0, x1, y1) {
    return [[0, 1, x0, y1, x1, y1], [1, 0, x1, y0, x1, y1], [0, -1, x1, y0, x0, y0], [-1, 0, x0, y1, x0, y0]];
  }
  /* Rotated outward normal; >0 on .facing means the camera can see that wall,
     and .left distinguishes the lighter screen-left wall from the darker right. */
  function facing(w) {
    var ax = w[0] * CA - w[1] * SA, ay = w[0] * SA + w[1] * CA;
    return { facing: ax + ay, left: (ax - ay) < 0 };
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function smooth(a, b, v) { var t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function hex(h) { h = h.replace("#", ""); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  function rgb(c) { return "rgb(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + ")"; }
  function mix(a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; }
  function shade(c, f) { return [c[0] * f, c[1] * f, c[2] * f]; }
  function rng(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  /* Lake with the dinosaur islet, top-left */
  var LAKE = {}, ISLET = {};
  for (var lx = 0; lx <= 3; lx++) { for (var ly = 0; ly <= 3; ly++) { LAKE[lx + "," + ly] = 1; } }
  [[0, 4], [1, 4], [2, 4]].forEach(function (p) { LAKE[p[0] + "," + p[1]] = 1; });
  [[1, 1], [2, 1], [1, 2], [2, 2]].forEach(function (p) { delete LAKE[p[0] + "," + p[1]]; ISLET[p[0] + "," + p[1]] = 1; });
  var PATH = {};
  function addPath(x0, y0, x1, y1) { for (var x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) { for (var y = Math.min(y0, y1); y <= Math.max(y0, y1); y++) { PATH[x + "," + y] = 1; } } }
  addPath(5, 3, 5, 10); addPath(3, 7, 4, 7); addPath(6, 3, 6, 3); addPath(6, 7, 6, 7); addPath(4, 3, 4, 4);

  var ST = {
    gate: { gx: 5.5, gy: 10.6, door: [5, 10] },
    tuition: { gx: 2.2, gy: 7.0, door: [3, 7], top: 74, num: "01", label: "Tuition", col: "#FFB320", href: "https://www.davidhaxton.co.uk/tuition" },
    ai: { gx: 7.6, gy: 3.4, door: [6, 3], top: 66, num: "02", label: "AI", col: "#2BB5A8", href: "https://www.davidhaxton.co.uk/ai" },
    web: { gx: 8.3, gy: 7.4, door: [6, 7], top: 64, num: "03", label: "Web", col: "#F25C54", href: "https://www.davidhaxton.co.uk/web" }
  };
  var PINS = ["tuition", "ai", "web"];
  var LAKESIDE = "4,3", GATE = "5,10";
  /* Where visitors start and finish a walk: the three building doors, the park
     gate and the lakeside. Everything else is just path between them. */
  var STOPS = [ST.tuition.door.join(","), ST.ai.door.join(","), ST.web.door.join(","), GATE, LAKESIDE];
  /* Of those, the ones you can actually go inside. Visitors vanish through
     these doors while they wait, instead of loitering on the step. */
  var INDOORS = {};
  INDOORS[ST.tuition.door.join(",")] = 1; INDOORS[ST.ai.door.join(",")] = 1; INDOORS[ST.web.door.join(",")] = 1;
  var TREES = [[0, 6], [0, 8], [1, 9], [0, 10], [2, 10], [1, 5], [3, 9], [8, 10], [9, 9], [10, 8], [10, 5], [10, 10], [7, 0], [5, 0], [6, 1], [3, 5], [8, 5], [10, 3], [7, 9], [4, 0], [4, 1], [9, 5], [0, 5]];
  var LAMPS = [[5, 4], [5, 6], [5, 9], [4, 7], [6, 6]];

  function neighbours(k) { var p = k.split(",").map(Number); return [[1, 0], [-1, 0], [0, 1], [0, -1]].map(function (d) { return (p[0] + d[0]) + "," + (p[1] + d[1]); }).filter(function (n) { return PATH[n]; }); }
  var routeCache = {};
  function route(a, b) {
    var key = a + ">" + b; if (routeCache[key]) { return routeCache[key]; }
    var prev = {}, q = [a]; prev[a] = null;
    while (q.length) { var c = q.shift(); if (c === b) { break; } neighbours(c).forEach(function (n) { if (!(n in prev)) { prev[n] = c; q.push(n); } }); }
    var out = [], c2 = b; while (c2) { out.unshift(c2.split(",").map(Number)); c2 = prev[c2]; }
    return (routeCache[key] = out);
  }

  var SKY = [
    [5.5, "#1B1C48", "#3A3470"], [7, "#3E4C8F", "#F3A27A"], [8.5, "#5C9BDB", "#CBE5F6"], [13, "#3F8EDC", "#BEE2FA"],
    [16.5, "#4C79C2", "#F2C18F"], [18.2, "#3A3577", "#EE7E6B"], [19.4, "#151A45", "#3C3B7C"], [23, "#0D1033", "#242761"]
  ];
  function skyAt(h) {
    for (var i = 0; i < SKY.length - 1; i++) { if (h <= SKY[i + 1][0]) { var t = clamp((h - SKY[i][0]) / (SKY[i + 1][0] - SKY[i][0]), 0, 1); return [mix(hex(SKY[i][1]), hex(SKY[i + 1][1]), t), mix(hex(SKY[i][2]), hex(SKY[i + 1][2]), t)]; } }
    return [hex(SKY[SKY.length - 1][1]), hex(SKY[SKY.length - 1][2])];
  }
  function nightness(h) { return Math.max(smooth(17.6, 19.6, h), 1 - smooth(5.6, 7.4, h)); }
  var HOURS = { sunrise: 7.2, day: 13, dusk: 18.2, night: 21.5 };

  var PAL = {
    grass: hex("#7FC56E"), grass2: hex("#74BC64"), path: hex("#F1DDAE"), path2: hex("#E9D29E"), water: hex("#3CB4C8"), earth: hex("#9B6B43"), earth2: hex("#7D5233"),
    trunk: hex("#7A4E2D"), leaf: hex("#3E9B4F"), leaf2: hex("#56B562"), cream: hex("#FFF6DC"), gold: hex("#FFB320"), coral: hex("#F25C54"), red: hex("#C8372F"), teal: hex("#2BB5A8"), ink: hex("#1C1A3A"),
    stone: hex("#D8CBB0"), glass: hex("#BFE3F2"), dino1: hex("#7E8C6A"), dino2: hex("#8F7B5E")
  };
  var SKIN = ["#F3D2B3", "#D9A57A", "#A86F48", "#6E4429"], HAIR_DARK = ["#2B1D14", "#5A3A22", "#1C1A3A", "#8A5A2B"], HAIR_OLD = ["#C9C9D1", "#EDEDED", "#9A948C"];
  /* Motion gate. Read live rather than latched at load: Chrome's Battery Saver
     reports reduced motion while it is active, and a one-shot read leaves the
     park frozen for the life of the page once that happens. `override` is the
     viewer's explicit choice (dh-motion), which beats the media query. */
  var motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var override = null, reduce = motionQuery ? motionQuery.matches : false;
  function syncMotion() { reduce = override === null ? (motionQuery ? motionQuery.matches : false) : !override; }
  if (motionQuery) {
    if (motionQuery.addEventListener) { motionQuery.addEventListener("change", syncMotion); }
    else if (motionQuery.addListener) { motionQuery.addListener(syncMotion); }
  }
  window.addEventListener("dh-motion", function (e) {
    var d = e && e.detail;
    override = (d && typeof d.on === "boolean") ? d.on : null;
    syncMotion();
  });

  class Island extends HTMLElement {
    static get observedAttributes() { return ["time"]; }
    connectedCallback() {
      if (this.c) { return; }
      this.style.display = "block"; this.style.position = this.style.position || "absolute"; this.style.overflow = "hidden";
      if (!this.style.inset) { this.style.inset = "0"; }
      var c = this.c = document.createElement("canvas");
      c.setAttribute("aria-hidden", "true");
      c.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      this.appendChild(c); this.ctx = c.getContext("2d");
      this.pinLayer = document.createElement("nav");
      this.pinLayer.setAttribute("aria-label", "Park map");
      /* z-index lifts the pins above the hero copy. On /ai the headline lands
         right over the home pin and, because the text column is pointer-events
         auto, it swallowed the click. The layer itself stays pointer-events
         none, so only the pins themselves take the cursor back. */
      this.pinLayer.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:3";
      this.appendChild(this.pinLayer);
      this.pins = {};
      var self = this;
      PINS.forEach(function (id) {
        var a = ST[id], el = document.createElement("a");
        el.href = self.getAttribute("href" + id) || a.href;
        el.style.cssText = "position:absolute;left:0;top:0;transform:translate(-50%,-100%);pointer-events:auto;display:flex;align-items:center;gap:7px;padding:5px 14px 5px 5px;border-radius:999px;background:rgba(255,255,255,0.95);color:#1C1A3A;text-decoration:none;font:700 0.9rem " + FONT + ";white-space:nowrap;box-shadow:0 6px 18px rgba(20,16,60,0.28);transition:background 0.2s,transform 0.25s cubic-bezier(.2,.8,.3,1.2)";
        el.innerHTML = '<span style="display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:' + a.col + ';color:#1C1A3A;font:800 0.7rem ' + FONT + '">' + a.num + "</span>" + a.label;
        el.addEventListener("mouseenter", function () { self.focusId = id; });
        el.addEventListener("mouseleave", function () { if (self.focusId === id) { self.focusId = null; } });
        el.addEventListener("focus", function () { self.focusId = id; });
        el.addEventListener("blur", function () { if (self.focusId === id) { self.focusId = null; } });
        self.pinLayer.appendChild(el); self.pins[id] = el;
      });
      this.onExtFocus = function (e) { self.focusId = e.detail || null; };
      window.addEventListener("dh-focus", this.onExtFocus);
      this.r = rng(1851); this.t = 0; this.focusId = null; this.w = 0; this.h = 0;
      /* Camera the viewer drives, applied on top of the attribute-derived base. */
      this.angle = 0; this.targetAngle = 0; this.userZoom = 1; this.targetZoom = 1; this.dragging = false;
      this.onCam = function (e) {
        var d = e.detail || {};
        if (d.reset) { self.targetAngle = 0; self.targetZoom = 1; return; }
        if (d.zoom) { self.targetZoom = clamp(self.targetZoom * (d.zoom > 0 ? 1.35 : 1 / 1.35), 0.6, 3); }
        if (d.spin) { self.targetAngle += (d.spin > 0 ? 1 : -1) * Math.PI / 2; }
      };
      window.addEventListener("dh-camera", this.onCam);
      if (this.hasAttribute("interactive")) { this.interactive(); }
      this.groups = [];
      /* Each page gets mostly its own audience, with a handful of others so the
         park still reads as public. Counts are weighted by PEOPLE, not groups:
         a tuition group is 2-3 (adult plus children), ai 1-2, web 1-2, so equal
         group counts would leave the web page half as populated. Each column
         lands near 27 figures with roughly three-quarters the page's own kind. */
      var MIX = {
        tuition: { tuition: 9, ai: 3, web: 3 },
        ai: { tuition: 2, ai: 17, web: 2 },
        web: { tuition: 2, ai: 2, web: 15 }
      };
      var mix = MIX[this.getAttribute("zoomto")] || { tuition: 6, ai: 6, web: 5 };
      ["tuition", "ai", "web"].forEach(function (kind) {
        for (var n = 0; n < mix[kind]; n++) { self.groups.push(self.newGroup(kind)); }
      });
      this.groups.push(this.newDavid());
      this.last = performance.now();
      var loop = function (now) {
        if (!self.isConnected) { return; }
        var dt = Math.min(0.05, (now - self.last) / 1000); self.last = now;
        if (!reduce) { self.step(dt); }
        self.ease(dt);
        self.draw();
        self.raf = requestAnimationFrame(loop);
      };
      this.raf = requestAnimationFrame(loop);
    }
    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
      window.removeEventListener("dh-focus", this.onExtFocus);
      window.removeEventListener("dh-camera", this.onCam);
    }
    /* Drag to spin, arrow keys to step a quadrant. Only wired up when the
       `interactive` attribute is present, so the section pages stay fixed. */
    interactive() {
      var self = this, c = this.c, QUARTER = Math.PI / 2;
      this.tabIndex = 0;
      this.setAttribute("aria-label", "Map of the park. Drag or use the arrow keys to turn it; plus and minus to zoom; 0 to reset.");
      /* pan-y keeps a vertical swipe scrolling the page on a phone. */
      c.style.touchAction = "pan-y";
      c.style.cursor = "grab";
      c.addEventListener("pointerdown", function (e) {
        if (e.button) { return; }
        self.dragging = true; self.dragX = e.clientX; self.dragA = self.angle;
        c.style.cursor = "grabbing";
        try { c.setPointerCapture(e.pointerId); } catch (err) { /* capture is best-effort */ }
      });
      c.addEventListener("pointermove", function (e) {
        if (!self.dragging) { return; }
        self.angle = self.dragA + (e.clientX - self.dragX) * 0.006;
      });
      var release = function (e) {
        if (!self.dragging) { return; }
        self.dragging = false; c.style.cursor = "grab";
        self.targetAngle = Math.round(self.angle / QUARTER) * QUARTER;
        try { c.releasePointerCapture(e.pointerId); } catch (err) { /* already released */ }
      };
      c.addEventListener("pointerup", release);
      c.addEventListener("pointercancel", release);
      this.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { self.targetAngle -= QUARTER; }
        else if (e.key === "ArrowRight") { self.targetAngle += QUARTER; }
        /* Zoom stays keyboard-reachable even though the buttons are gone. */
        else if (e.key === "+" || e.key === "=") { self.targetZoom = clamp(self.targetZoom * 1.35, 0.6, 3); }
        else if (e.key === "-" || e.key === "_") { self.targetZoom = clamp(self.targetZoom / 1.35, 0.6, 3); }
        else if (e.key === "0") { self.targetAngle = 0; self.targetZoom = 1; }
        else { return; }
        e.preventDefault();
      });
      /* Wheel zoom. Scales continuously from deltaY rather than reusing the
         buttons' discrete 1.35 step, which a trackpad would slam to the clamp
         in one flick. Shares targetZoom and the 0.6–3 bounds with the buttons.
         preventDefault only when the zoom actually moved, so once it is pinned
         at a limit the page scrolls on instead of trapping the reader here. */
      c.addEventListener("wheel", function (e) {
        var unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? self.clientHeight || 400 : 1;
        var before = self.targetZoom;
        self.targetZoom = clamp(before * Math.exp(-e.deltaY * unit * 0.0016), 0.6, 3);
        if (self.targetZoom !== before) { e.preventDefault(); }
      }, { passive: false });
    }
    /* Camera easing. Driven off dt, not this.t, because the clock is frozen
       under reduced motion while the loop keeps running — there we snap. */
    ease(dt) {
      if (this.dragging) { return; }
      var k = reduce ? 1 : 1 - Math.pow(0.0012, dt);
      this.angle = lerp(this.angle, this.targetAngle, k);
      if (Math.abs(this.angle - this.targetAngle) < 0.0005) { this.angle = this.targetAngle; }
      this.userZoom = lerp(this.userZoom, this.targetZoom, k);
      if (Math.abs(this.userZoom - this.targetZoom) < 0.001) { this.userZoom = this.targetZoom; }
    }
    hour() {
      var t = this.getAttribute("time") || "sunrise";
      if (t === "live") { var d = new Date(); return d.getHours() + d.getMinutes() / 60; }
      return HOURS[t] != null ? HOURS[t] : 7.2;
    }
    pick(a) { return a[(this.r() * a.length) | 0]; }
    /* Each section has its own visitors: parents with kids for tuition, adults of every age for AI, makers with laptops for web */
    newGroup(kind) {
      var r = this.r.bind(this), m = [], self = this;
      /* Unknown kinds used to fall through to the laptop branch and then throw
         on ST[kind].door; fail loudly on the typo instead. */
      if (!ST[kind]) { throw new Error('dh-island: unknown crowd kind "' + kind + '"'); }
      if (kind === "tuition") {
        m.push({ b: this.pick(["#4F7CE0", "#8B5CF6", "#1C1A3A", "#2BB5A8", "#E8E2D0", "#A0785A"]), h: this.pick(SKIN), hair: this.pick(HAIR_DARK), sc: 1, ox: -0.13, oy: 0.05 });
        var kids = r() < 0.35 ? 2 : 1;
        for (var k = 0; k < kids; k++) { m.push({ b: this.pick(["#2F3A6B", "#7A2335", "#2F5E3A"]), h: this.pick(SKIN), hair: this.pick(HAIR_DARK), sc: 0.66, pack: this.pick(["#FFB320", "#F25C54", "#2BB5A8", "#8B5CF6"]), ox: 0.12 + k * 0.16, oy: -0.06 + k * 0.12 }); }
      } else if (kind === "ai") {
        var n = r() < 0.3 ? 2 : 1;
        for (var j = 0; j < n; j++) { var old = r() < 0.6; m.push({ b: this.pick(["#C8372F", "#6B7A8F", "#A0785A", "#3E4C8F", "#E8E2D0", "#127A71"]), h: this.pick(SKIN), hair: old ? this.pick(HAIR_OLD) : this.pick(HAIR_DARK), sc: 1, bubble: r() < 0.55, seed: r() * 10, ox: j * 0.22 - 0.1, oy: j * 0.08 }); }
      } else {
        /* Makers sometimes pair up, so the web crowd reads as people working
           together rather than a scatter of lone figures. */
        var pairs = r() < 0.35 ? 2 : 1;
        for (var q = 0; q < pairs; q++) { m.push({ b: this.pick(["#1C1A3A", "#F25C54", "#FFB320", "#2BB5A8", "#4F7CE0"]), h: this.pick(SKIN), hair: this.pick(HAIR_DARK), sc: 1, laptop: true, ox: q * 0.22 - 0.09, oy: q * 0.08 }); }
      }
      /* Start standing at a door rather than mid-path, so they read as coming
         out of a building, and head for a different one. Staggered waits stop
         them all setting off at once. */
      var home = ST[kind].door.join(",");
      var start = r() < 0.55 ? home : this.nextStop(null, home);
      return { kind: kind, home: home, inside: !!INDOORS[start], route: route(start, this.nextStop(start, home)), i: 0, f: 0, speed: (kind === "tuition" ? 0.45 : 0.55) + r() * 0.4, wait: r() * 6, members: m, jx: r() * 0.4 - 0.2, jy: r() * 0.4 - 0.2 };
    }
    /* Cache each pin's intrinsic size. They never change on their own — the
       zoom scaling is a transform, which does not affect offsetWidth. */
    measurePins() {
      var all = PINS.map(function (id) { return this.pins[id]; }, this);
      all.forEach(function (el) { if (el) { el.__w = el.offsetWidth; el.__h = el.offsetHeight; } });
    }
    /* Where a group is on its current segment, in grid coords. Used by both
       the draw pass and the name tag that follows David. */
    groupPos(gp) {
      var a = gp.route[Math.min(gp.i, gp.route.length - 1)];
      var b = gp.route[Math.min(gp.i + 1, gp.route.length - 1)];
      return { x: lerp(a[0], b[0], gp.f) + 0.5 + gp.jx, y: lerp(a[1], b[1], gp.f) + 0.5 + gp.jy };
    }
    /* The man himself: one bald, dark-bearded figure doing the rounds. No home
       building, so he visits all three evenly rather than favouring one. */
    newDavid() {
      var r = this.r.bind(this), start = this.nextStop(null, null);
      return {
        kind: "david", home: null, inside: !!INDOORS[start],
        route: route(start, this.nextStop(start, null)), i: 0, f: 0,
        speed: 0.62 + r() * 0.18, wait: r() * 3,
        members: [{ b: "#1C1A3A", h: SKIN[0], beard: "#241A14", sc: 1.06, ox: 0, oy: 0 }],
        jx: r() * 0.3 - 0.15, jy: r() * 0.3 - 0.15
      };
    }
    /* Pick somewhere to walk to, never where we already are. A group favours
       its own section's building but does the rounds of the whole park. */
    nextStop(from, home) {
      if (home && home !== from && this.r() < 0.4) { return home; }
      var opts = STOPS.filter(function (s) { return s !== from; });
      return opts[(this.r() * opts.length) | 0];
    }
    step(dt) {
      this.t += dt; var self = this;
      this.groups.forEach(function (g) {
        if (g.wait > 0) { g.wait -= dt; return; }
        g.inside = false;                       /* wait over — back out the door */
        g.f += dt * g.speed * 0.85;   /* global pace; lower is a slower stroll */
        while (g.f >= 1) {
          g.f -= 1; g.i++;
          if (g.i >= g.route.length - 1) {
            /* Arrived somewhere: pause at the door, then walk to another one. */
            var here = g.route[g.route.length - 1].join(",");
            g.route = route(here, self.nextStop(here, g.home)); g.i = 0; g.f = 0;
            g.inside = !!INDOORS[here];          /* step inside while waiting */
            g.wait = (here === g.home ? 2.5 : 1.2) + self.r() * 2.5; return;
          }
        }
      });
    }
    layout() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2), w = this.clientWidth || 300, h = this.clientHeight || 200;
      if (w !== this.w || h !== this.h || dpr !== this.dpr) {
        this.w = w; this.h = h; this.dpr = dpr;
        this.c.width = Math.round(w * dpr); this.c.height = Math.round(h * dpr);
        this.measurePins();
      }
      var me = this.getBoundingClientRect(), id = this.getAttribute("spot"), spot = id && document.getElementById(id), r;
      if (spot) { var sr = spot.getBoundingClientRect(); r = { x: sr.left - me.left, y: sr.top - me.top, w: sr.width, h: sr.height }; }
      else { r = { x: 0, y: 0, w: w, h: h }; }
      var z = this.getAttribute("zoomto"), base = Math.min(r.w / 760, r.h / 480);
      /* The attribute gives the base framing; the viewer's zoom multiplies it.
         Without this split layout() would wipe the user camera every frame. */
      if (z && ST[z]) { var c0 = iso(ST[z].gx, ST[z].gy, 34); this.cx = c0.x; this.cy = c0.y; this.s = clamp(base * 1.9, 0.75, 2.4); }
      else { this.cx = 0; this.cy = 160; this.s = clamp(base, 0.38, 1.4); }
      this.s *= this.userZoom || 1;
      this.sr = r; this.ox = r.x + r.w / 2; this.oy = r.y + r.h / 2;
    }
    P(p) { return { x: (p.x - this.cx) * this.s + this.ox, y: (p.y - this.cy) * this.s + this.oy }; }
    poly(pts, fill) { var x = this.ctx; x.beginPath(); for (var i = 0; i < pts.length; i++) { var p = this.P(pts[i]); if (i) { x.lineTo(p.x, p.y); } else { x.moveTo(p.x, p.y); } } x.closePath(); x.fillStyle = fill; x.fill(); }
    line(a, b, col, wdt) { var x = this.ctx, p = this.P(a), q = this.P(b); x.strokeStyle = col; x.lineWidth = wdt * this.s; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke(); }
    box(gx, gy, w, d, h, col, z0) {
      z0 = z0 || 0; var x0 = gx - w / 2, x1 = gx + w / 2, y0 = gy - d / 2, y1 = gy + d / 2;
      var ws = walls(x0, y0, x1, y1), i, w2, f;
      for (i = 0; i < 4; i++) {
        w2 = ws[i]; f = facing(w2);
        if (f.facing <= 0) { continue; }
        this.poly([iso(w2[2], w2[3], z0), iso(w2[4], w2[5], z0), iso(w2[4], w2[5], z0 + h), iso(w2[2], w2[3], z0 + h)], rgb(shade(col, f.left ? 0.78 : 0.6)));
      }
      this.poly([iso(x0, y0, z0 + h), iso(x1, y0, z0 + h), iso(x1, y1, z0 + h), iso(x0, y1, z0 + h)], rgb(shade(col, 1.06)));
    }
    roof(gx, gy, w, d, z, rh, col) {
      var x0 = gx - w / 2 - 0.08, x1 = gx + w / 2 + 0.08, y0 = gy - d / 2 - 0.08, y1 = gy + d / 2 + 0.08, apex = iso(gx, gy, z + rh);
      var ws = walls(x0, y0, x1, y1), i, w2, f;
      for (i = 0; i < 4; i++) {
        w2 = ws[i]; f = facing(w2);
        if (f.facing <= 0) { continue; }
        this.poly([iso(w2[2], w2[3], z), iso(w2[4], w2[5], z), apex], rgb(shade(col, f.left ? 0.88 : 0.66)));
      }
    }
    windows(gx, gy, w, d, z, lit, n) {
      var x = this.ctx, s = this.s, x0 = gx - w / 2, x1 = gx + w / 2, y0 = gy - d / 2, y1 = gy + d / 2;
      var ws = walls(x0, y0, x1, y1), i, w2, f, k, t, p;
      x.fillStyle = lit ? "rgba(255,214,120,0.95)" : "rgba(30,40,70,0.55)";
      for (i = 0; i < 4; i++) {
        w2 = ws[i]; f = facing(w2);
        /* Windows sit on the screen-left wall — the y1 face when unrotated, so
           the default view is unchanged, and they never land on a hidden side. */
        if (f.facing <= 0 || !f.left) { continue; }
        for (k = 0; k < n; k++) {
          t = (k + 0.5) / n;
          p = this.P(iso(lerp(w2[2], w2[4], t), lerp(w2[3], w2[5], t), z));
          x.fillRect(p.x - 3 * s, p.y - 6 * s, 6 * s, 7 * s);
        }
      }
    }
    circle(p, r, fill) { var x = this.ctx, q = this.P(p); x.beginPath(); x.arc(q.x, q.y, r * this.s, 0, Math.PI * 2); x.fillStyle = fill; x.fill(); }
    text(p, txt, size, fill) { var x = this.ctx, q = this.P(p); x.font = "800 " + Math.max(7, size * this.s) + "px " + FONT; x.textAlign = "center"; x.textBaseline = "middle"; x.fillStyle = fill; x.fillText(txt, q.x, q.y); }
    flag(gx, gy, z0, col) {
      var x = this.ctx, p0 = this.P(iso(gx, gy, z0)), p1 = this.P(iso(gx, gy, z0 + 26)), s = this.s, wave = reduce ? 0 : Math.sin(this.t * 5 + gx) * 2;
      x.strokeStyle = "#1C1A3A"; x.lineWidth = 1.6 * s; x.beginPath(); x.moveTo(p0.x, p0.y); x.lineTo(p1.x, p1.y); x.stroke();
      x.beginPath(); x.moveTo(p1.x, p1.y); x.quadraticCurveTo(p1.x + 9 * s, p1.y + (2 + wave) * s, p1.x + 18 * s, p1.y + 3 * s); x.lineTo(p1.x, p1.y + 10 * s); x.closePath(); x.fillStyle = col; x.fill();
    }
    /* Glass grid over a box face, for the glasshouse */
    glassBox(gx, gy, w, d, h, z0, lit) {
      var col = lit ? hex("#FFE3A8") : PAL.glass;
      this.box(gx, gy, w, d, h, col, z0);
      var x0 = gx - w / 2, x1 = gx + w / 2, y1 = gy + d / 2, y0 = gy - d / 2, mull = "rgba(255,255,255,0.85)", k;
      var nx = Math.max(2, Math.round(w * 5)), ny = Math.max(2, Math.round(d * 5));
      var ws = walls(x0, y0, x1, y1), i, w2, f, nn, t, mx, my;
      for (i = 0; i < 4; i++) {
        w2 = ws[i]; f = facing(w2);
        if (f.facing <= 0) { continue; }
        nn = w2[0] ? ny : nx;
        for (k = 1; k < nn; k++) {
          t = k / nn; mx = lerp(w2[2], w2[4], t); my = lerp(w2[3], w2[5], t);
          this.line(iso(mx, my, z0), iso(mx, my, z0 + h), mull, 0.9);
        }
        this.line(iso(w2[2], w2[3], z0 + h / 2), iso(w2[4], w2[5], z0 + h / 2), mull, 0.9);
      }
    }
    station(id, lit) {
      var a = ST[id];
      if (id === "gate") {
        this.box(a.gx - 1.05, a.gy, 0.35, 0.35, 64, PAL.coral); this.box(a.gx + 1.05, a.gy, 0.35, 0.35, 64, PAL.coral);
        this.box(a.gx, a.gy, 2.6, 0.4, 16, PAL.gold, 64);
      } else if (id === "tuition") {
        this.box(a.gx, a.gy, 1.4, 1.2, 30, PAL.cream); this.roof(a.gx, a.gy, 1.4, 1.2, 30, 22, PAL.gold); this.windows(a.gx, a.gy, 1.4, 1.2, 20, lit, 3);
        this.box(a.gx, a.gy + 0.61, 0.32, 0.02, 16, PAL.ink);
        this.box(a.gx, a.gy, 0.3, 0.3, 18, PAL.cream, 42); this.roof(a.gx, a.gy, 0.3, 0.3, 60, 12, PAL.red);
      } else if (id === "ai") {
        this.box(a.gx, a.gy, 1.2, 1.2, 26, PAL.teal); this.box(a.gx, a.gy, 1.32, 1.32, 4, [255, 255, 255], 26); this.windows(a.gx, a.gy, 1.2, 1.2, 17, lit, 3);
        this.circle(iso(a.gx, a.gy, 38), 17, "#F4F3FB"); this.circle(iso(a.gx - 0.12, a.gy - 0.12, 44), 6, "#FFFFFF");
        this.box(a.gx + 0.42, a.gy - 0.42, 0.05, 0.05, 28, [60, 60, 80], 30);
        var blink = reduce || Math.sin(this.t * 3) > 0; this.circle(iso(a.gx + 0.42, a.gy - 0.42, 60), 3.4, blink ? "#F25C54" : "#7A2A26");
      } else if (id === "web") {
        /* a little glass palace: long nave, taller central transept */
        this.box(a.gx, a.gy, 2.1, 1.3, 4, PAL.stone);
        this.glassBox(a.gx, a.gy, 2.0, 1.2, 26, 4, lit);
        this.roof(a.gx - 0.62, a.gy, 0.72, 1.2, 30, 10, lit ? hex("#FFE3A8") : PAL.glass); this.roof(a.gx + 0.62, a.gy, 0.72, 1.2, 30, 10, lit ? hex("#FFE3A8") : PAL.glass);
        this.glassBox(a.gx, a.gy, 0.55, 1.3, 42, 4, lit);
        this.roof(a.gx, a.gy, 0.55, 1.3, 46, 12, lit ? hex("#FFE3A8") : PAL.glass);
        this.flag(a.gx, a.gy, 58, "#F25C54");
      }
    }
    /* Crystal Palace transmitter: tapering lattice mast */
    mast(gx, gy, night) {
      var H = 230, steel = night > 0.5 ? "rgba(150,150,180,0.9)" : "#8E8CA8", L = function (z) { return lerp(0.45, 0.05, z / H); }, k, z, w0, w1;
      this.box(gx, gy, 1.0, 1.0, 3, PAL.stone);
      var corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
      corners.forEach(function (c) { this.line(iso(gx + c[0] * L(0), gy + c[1] * L(0), 3), iso(gx + c[0] * L(H), gy + c[1] * L(H), H), steel, 1.6); }, this);
      for (k = 0; k < 10; k++) {
        z = 3 + k * (H - 3) / 10; var z2 = 3 + (k + 1) * (H - 3) / 10; w0 = L(z); w1 = L(z2);
        this.line(iso(gx - w0, gy + w0, z), iso(gx + w1, gy + w1, z2), steel, 0.8); this.line(iso(gx + w0, gy + w0, z), iso(gx - w1, gy + w1, z2), steel, 0.8);
        this.line(iso(gx + w0, gy - w0, z), iso(gx + w1, gy + w1, z2), steel, 0.8); this.line(iso(gx + w0, gy + w0, z), iso(gx + w1, gy - w1, z2), steel, 0.8);
        this.line(iso(gx - w0, gy + w0, z), iso(gx + w0, gy + w0, z), steel, 0.8); this.line(iso(gx + w0, gy - w0, z), iso(gx + w0, gy + w0, z), steel, 0.8);
      }
      this.box(gx, gy, 0.3, 0.3, 6, [170, 170, 190], H * 0.62);
      this.line(iso(gx, gy, H), iso(gx, gy, H + 26), steel, 1.4);
      var on = reduce || Math.sin(this.t * 2.2) > -0.2; this.circle(iso(gx, gy, H + 27), 3.2, on ? "#F25C54" : "#6A2A28");
    }
    /* Victorian dinosaur sculpture */
    dino(gx, gy, col, dir) {
      var x = this.ctx, s = this.s, d = dir;
      [[-0.16, -0.07], [0.16, -0.07], [-0.16, 0.09], [0.16, 0.09]].forEach(function (o) { this.box(gx + o[0] * d, gy + o[1], 0.08, 0.08, 10, col); }, this);
      this.poly([iso(gx + 0.18 * d, gy - 0.04, 18), iso(gx + 0.18 * d, gy - 0.04, 10), iso(gx + 0.62 * d, gy - 0.32 * d, 4)], rgb(shade(col, 0.8)));
      var b = this.P(iso(gx, gy, 16)); x.fillStyle = rgb(col); x.beginPath(); x.ellipse(b.x, b.y, 18 * s, 8.5 * s, 0, 0, Math.PI * 2); x.fill();
      x.fillStyle = rgb(shade(col, 1.15)); x.beginPath(); x.ellipse(b.x, b.y - 3 * s, 12 * s, 4 * s, 0, 0, Math.PI * 2); x.fill();
      this.circle(iso(gx - 0.24 * d, gy + 0.14 * d, 23), 5.5, rgb(col));
      this.circle(iso(gx - 0.38 * d, gy + 0.22 * d, 27), 5, rgb(shade(col, 1.08)));
      var e = this.P(iso(gx - 0.42 * d, gy + 0.26 * d, 29)); x.fillStyle = "#1C1A3A"; x.fillRect(e.x - 0.9 * s, e.y - 0.9 * s, 1.8 * s, 1.8 * s);
    }
    sphinx(gx, gy) {
      this.box(gx, gy, 0.5, 0.32, 12, PAL.stone);
      this.box(gx + 0.04, gy, 0.42, 0.2, 7, hex("#C9B994"), 12);
      this.box(gx - 0.15, gy, 0.14, 0.16, 11, hex("#C9B994"), 15);
    }
    tree(gx, gy, night) {
      var cx = gx + 0.5, cy = gy + 0.5; this.box(cx, cy, 0.12, 0.12, 14, PAL.trunk);
      this.circle(iso(cx, cy, 26), 15, rgb(mix(PAL.leaf, [20, 40, 50], night * 0.4))); this.circle(iso(cx - 0.05, cy - 0.05, 32), 10, rgb(mix(PAL.leaf2, [20, 40, 50], night * 0.4)));
    }
    person(gx, gy, m, z) {
      var s = this.s, p = this.P(iso(gx, gy, z || 0)), x = this.ctx, r = Math.max(1.3, 3.2 * s) * (m.sc || 1);
      x.fillStyle = "rgba(0,0,0,0.18)"; x.beginPath(); x.ellipse(p.x, p.y, r * 1.1, r * 0.5, 0, 0, Math.PI * 2); x.fill();
      if (m.pack) { x.fillStyle = m.pack; x.fillRect(p.x + r * 0.3, p.y - r * 2.2, r * 0.8, r * 1.2); }
      x.fillStyle = m.b; x.beginPath(); x.ellipse(p.x, p.y - r * 1.3, r * 0.85, r * 1.3, 0, 0, Math.PI * 2); x.fill();
      x.fillStyle = m.h; x.beginPath(); x.arc(p.x, p.y - r * 3, r * 0.75, 0, Math.PI * 2); x.fill();
      if (m.hair) { x.fillStyle = m.hair; x.beginPath(); x.arc(p.x, p.y - r * 3.1, r * 0.8, Math.PI, 0); x.fill(); }
      /* Beard is the hair cap mirrored: lower half of the head, no crown. */
      if (m.beard) { x.fillStyle = m.beard; x.beginPath(); x.arc(p.x, p.y - r * 2.9, r * 0.78, 0, Math.PI); x.fill(); }
      if (m.laptop) { x.fillStyle = "#3A3A48"; x.fillRect(p.x - r * 0.95, p.y - r * 1.75, r * 1.9, r * 0.5); x.fillStyle = "#9FE3DA"; x.fillRect(p.x - r * 0.7, p.y - r * 1.68, r * 1.4, r * 0.2); }
      if (m.bubble && (reduce || Math.sin(this.t * 0.9 + m.seed) > 0.55)) {
        var bx = p.x + r * 1.7, by = p.y - r * 5.2, br = Math.max(4, r * 1.35);
        x.fillStyle = "#FFFFFF"; x.beginPath(); x.arc(bx, by, br, 0, Math.PI * 2); x.fill();
        x.beginPath(); x.moveTo(bx - br * 0.6, by + br * 0.6); x.lineTo(bx - br * 1.1, by + br * 1.3); x.lineTo(bx - br * 0.1, by + br * 0.9); x.fill();
        x.fillStyle = "#127A71"; x.font = "800 " + br * 1.5 + "px " + FONT; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText("?", bx, by + br * 0.08);
      }
    }
    draw() {
      /* Set the module-level viewing angle first: layout() projects through
         iso() too, so it has to see the same angle as the rest of the frame. */
      setAngle(this.angle || 0);
      this.layout();
      var x = this.ctx, w = this.w, h = this.h, self = this, hr = this.hour(), night = nightness(hr), sky = skyAt(hr), sr = this.sr;
      x.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      var g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, rgb(sky[0])); g.addColorStop(1, rgb(sky[1])); x.fillStyle = g; x.fillRect(0, 0, w, h);
      if (night > 0.05) {
        var rr = rng(42);
        for (var i = 0; i < 90; i++) { var sx = rr() * w, sy = rr() * h * 0.7, tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(this.t * 2 + i); x.globalAlpha = 0.85 * night * tw; x.fillStyle = "#FFFFFF"; x.fillRect(sx, sy, 1.6, 1.6); }
        x.globalAlpha = 1;
        x.beginPath(); x.arc(sr.x + sr.w * 0.88, sr.y + sr.h * 0.12, Math.min(sr.w, sr.h) * 0.05, 0, Math.PI * 2); x.fillStyle = "rgba(245,240,220," + night + ")"; x.fill();
      }
      if (hr > 5.8 && hr < 19.2) {
        var f = clamp((hr - 6) / 13, 0, 1), sunx = sr.x + sr.w * (0.12 + 0.76 * f), suny = sr.y + sr.h * 0.42 - Math.sin(Math.PI * f) * sr.h * 0.32, rad = Math.min(sr.w, sr.h) * 0.08;
        var sg = x.createRadialGradient(sunx, suny, rad * 0.3, sunx, suny, rad * 3.2); sg.addColorStop(0, "rgba(255,236,170,0.9)"); sg.addColorStop(1, "rgba(255,236,170,0)");
        x.fillStyle = sg; x.fillRect(sunx - rad * 4, suny - rad * 4, rad * 8, rad * 8);
        x.beginPath(); x.arc(sunx, suny, rad, 0, Math.PI * 2); x.fillStyle = "#FFE9A8"; x.fill();
      }
      x.fillStyle = "rgba(255,255,255," + (0.5 - night * 0.38) + ")";
      for (var cI = 0; cI < 4; cI++) { var cw = sr.w * 0.11, cx = sr.x + cw * 1.2 + ((cI * 0.31 + this.t * 0.006 * (cI + 1)) % 1) * (sr.w - cw * 2.4), cy = sr.y + sr.h * (0.06 + cI * 0.06); x.beginPath(); x.ellipse(cx, cy, cw, sr.h * 0.03, 0, 0, Math.PI * 2); x.ellipse(cx + cw * 0.55, cy - sr.h * 0.02, cw * 0.7, sr.h * 0.04, 0, 0, Math.PI * 2); x.fill(); }

      /* Only the cliff faces the camera can see, else you look straight
         through the island's open back once it turns. */
      var slab = walls(0, 0, N, N), sI, sW, sF;
      for (sI = 0; sI < 4; sI++) {
        sW = slab[sI]; sF = facing(sW);
        if (sF.facing <= 0) { continue; }
        this.poly([iso(sW[2], sW[3], 0), iso(sW[4], sW[5], 0), iso(sW[4], sW[5], -34), iso(sW[2], sW[3], -34)], rgb(sF.left ? PAL.earth : PAL.earth2));
      }
      for (var gy = 0; gy < N; gy++) {
        for (var gx = 0; gx < N; gx++) {
          var key = gx + "," + gy, col;
          if (LAKE[key]) { col = mix(PAL.water, [255, 255, 255], reduce ? 0.06 : 0.06 + 0.06 * Math.sin(this.t * 1.5 + gx + gy * 0.7)); }
          else if (ISLET[key]) { col = (gx + gy) % 2 ? hex("#8CCB78") : hex("#82C46E"); }
          else if (PATH[key]) { col = (gx + gy) % 2 ? PAL.path : PAL.path2; }
          else { col = (gx + gy) % 2 ? PAL.grass : PAL.grass2; }
          this.poly([iso(gx, gy), iso(gx + 1, gy), iso(gx + 1, gy + 1), iso(gx, gy + 1)], rgb(col));
        }
      }
      /* terrace steps in front of the gate */
      this.poly([iso(3.4, 10.1), iso(7.6, 10.1), iso(7.6, 11), iso(3.4, 11)], rgb(PAL.stone));
      var fid = this.focusId || this.getAttribute("zoomto");
      if (fid && ST[fid]) {
        var fa = ST[fid], rad2 = 1.25 + (reduce ? 0 : 0.12 * Math.sin(this.t * 4)), ring = [];
        for (var k2 = 0; k2 < 40; k2++) { var an = k2 / 40 * Math.PI * 2; ring.push(iso(fa.gx + Math.cos(an) * rad2, fa.gy + Math.sin(an) * rad2, 0)); }
        this.poly(ring, "rgba(255,179,32,0.45)");
      }
      /* The boat circles the lake; one dinosaur gives chase, trailing it round
         the shore. Both go through the sorted pass so the one in front wins. */
      var ba = this.t * 0.25, bgx = 2 + 1.5 * Math.cos(ba), bgy = 2 + 1.5 * Math.sin(ba);
      var ca = ba - 0.6, cgx = 2 + 1.95 * Math.cos(ca), cgy = 2 + 1.95 * Math.sin(ca);
      /* Face the way it is running: screen-x velocity of the orbit. */
      var cdir = -Math.sin(ca) >= 0 ? 1 : -1;

      var lit = night > 0.45, objs = [];
      objs.push({ d: depth(bgx, bgy), f: function () {
        self.box(bgx, bgy, 0.42, 0.26, 6, hex("#F25C54"));
        self.person(bgx, bgy, { b: "#FFB320", h: "#F3D2B3", hair: "#5A3A22" }, 6);
      } });
      /* Depth is the rotated screen-y axis — plain gx + gy only sorts correctly
         at the unrotated angle. The small constants are unchanged tie-breaks. */
      Object.keys(ST).forEach(function (id) { var a = ST[id]; objs.push({ d: depth(a.gx, a.gy) + 0.6, f: function () { self.station(id, lit); } }); });
      objs.push({ d: depth(9.5, 1.5) + 0.6, f: function () { self.mast(9.5, 1.5, night); } });
      objs.push({ d: depth(cgx, cgy), f: function () { self.dino(cgx, cgy, PAL.dino1, cdir); } });
      objs.push({ d: depth(2.5, 2.4), f: function () { self.dino(2.5, 2.4, PAL.dino2, -1); } });
      objs.push({ d: depth(3.7, 10.4), f: function () { self.sphinx(3.7, 10.4); } });
      objs.push({ d: depth(7.3, 10.4), f: function () { self.sphinx(7.3, 10.4); } });
      TREES.forEach(function (t) { objs.push({ d: depth(t[0], t[1]) + 1, f: function () { self.tree(t[0], t[1], night); } }); });
      LAMPS.forEach(function (l) { objs.push({ d: depth(l[0], l[1]) + 1, f: function () { self.box(l[0] + 0.15, l[1] + 0.15, 0.06, 0.06, 26, [60, 60, 80]); self.circle(iso(l[0] + 0.15, l[1] + 0.15, 28), 3.5, lit ? "#FFE08A" : "#D8D8E8"); } }); });
      this.groups.forEach(function (gp) {
        if (gp.inside) { return; }
        var gp0 = self.groupPos(gp), bx = gp0.x, by = gp0.y;
        gp.members.forEach(function (m) { var px = bx + m.ox, py = by + m.oy; objs.push({ d: depth(px, py), f: function () { self.person(px, py, m); } }); });
      });
      objs.sort(function (a, b) { return a.d - b.d; });
      objs.forEach(function (o) { o.f(); });

      if (night > 0.02) {
        x.fillStyle = "rgba(14,16,52," + (night * 0.45) + ")"; x.fillRect(0, 0, w, h);
        x.globalCompositeOperation = "lighter";
        var glow = function (p, r, a) { var q = self.P(p), R = r * self.s, lg = x.createRadialGradient(q.x, q.y, 0, q.x, q.y, R); lg.addColorStop(0, "rgba(255,205,120," + a + ")"); lg.addColorStop(1, "rgba(255,205,120,0)"); x.fillStyle = lg; x.fillRect(q.x - R, q.y - R, R * 2, R * 2); };
        LAMPS.forEach(function (l) { glow(iso(l[0] + 0.15, l[1] + 0.15, 28), 34, 0.55 * night); });
        PINS.forEach(function (id) { var a = ST[id]; glow(iso(a.gx, a.gy + 0.6, 20), id === "web" ? 80 : 46, (id === "web" ? 0.5 : 0.35) * night); });
        x.globalCompositeOperation = "source-over";
        if (!reduce || true) { var on2 = reduce || Math.sin(this.t * 2.2) > -0.2; if (on2) { this.circle(iso(9.5, 1.5, 257), 3.2, "#FF6B5E"); } }
      }
      /* Keep a pin inside the column the park is framed in. Zoomed in on a
         subpage the gate drifts a long way from the landmark, and the home pin
         ended up sitting on top of the headline. */
      /* Pin sizes are measured once, not per frame. Reading offsetWidth here
         forces a synchronous reflow, and doing it between style writes made the
         whole hero thrash layout ~60 times a second. */
      var penX = function (el, x) {
        var half = (el.__w || 0) / 2 + 6, lo = self.sr.x + half, hi = self.sr.x + self.sr.w - half;
        return hi > lo ? clamp(x, lo, hi) : x;
      };
      PINS.forEach(function (id) {
        var a = ST[id], q = self.P(iso(a.gx, a.gy, a.top + 14)), el = self.pins[id], zt = self.getAttribute("zoomto"), on = (self.focusId || zt) === id;
        el.style.display = zt && zt !== id ? "none" : "flex";
        var bob = reduce ? 0 : Math.sin(self.t * 2 + a.gx) * 2.5;
        el.style.left = penX(el, q.x) + "px"; el.style.top = (q.y + bob) + "px";
        el.style.background = on ? "#FFB320" : "rgba(255,255,255,0.95)";
        /* Pins are DOM, so they don't scale with the canvas. Track the viewer's
           zoom gently (sqrt) so they neither swamp the park nor vanish. */
        var pk = clamp(Math.sqrt(self.userZoom || 1), 0.72, 1.3) * (on ? 1.08 : 1);
        el.style.transform = "translate(-50%,-100%) scale(" + pk.toFixed(3) + ")";
      });
    }
  }
  customElements.define("dh-island", Island);
})();
