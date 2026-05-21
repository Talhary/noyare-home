const { useState, useEffect, useRef, useMemo, useCallback } = React;
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}
function useLiveWalk(seed, base, amp, len = 80, interval = 1100) {
  const seedRef = useRef(seed);
  const [data, setData] = useState(() => {
    let s = seed, v = base;
    const out = [];
    for (let i = 0; i < len; i++) {
      s = (s * 9301 + 49297) % 233280;
      v += (s / 233280 - 0.5) * amp;
      v = Math.max(3, Math.min(97, v));
      out.push(v);
    }
    return out;
  });
  useEffect(() => {
    const t = setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1];
        seedRef.current = (seedRef.current * 9301 + 49297) % 233280;
        const r = seedRef.current / 233280;
        let v = last + (r - 0.5) * amp;
        v = Math.max(3, Math.min(97, v));
        return [...prev.slice(1), v];
      });
    }, interval);
    return () => clearInterval(t);
  }, [amp, interval]);
  return data;
}
const I = {
  check: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "m5 12 5 5L20 7" })),
  arrow: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "2", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14M13 6l6 6-6 6" })),
  download: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "2", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3v12M6 11l6 6 6-6M5 21h14" })),
  github: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "currentColor", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" })),
  cpu: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "1.7", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" })),
  proc: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "1.7", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 9h8M8 13h8M8 17h5" })),
  port: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "1.7", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M3 12h18M12 3v18" })),
  net: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "1.7", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 7h14M3 7l4-4M3 7l4 4M21 17H7M21 17l-4-4M21 17l-4 4" })),
  storage: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "1.7", ...p }, /* @__PURE__ */ React.createElement("ellipse", { cx: "12", cy: "5", rx: "8", ry: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" })),
  proxy: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "1.7", ...p }, /* @__PURE__ */ React.createElement("path", { d: "m13 2-9 12h7l-1 8 9-12h-7z" }))
};
function smoothPath(data, w, h, pad = 0) {
  const max = 100, min = 0;
  const step = w / (data.length - 1);
  const pts = data.map((d, i) => [i * step, h - (d - min) / (max - min) * (h - pad * 2) - pad]);
  return pts.map((p, i) => i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
}
function MultiTrace({ height = 380, traces, showGrid = true }) {
  const w = 1200;
  const h = height;
  return /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${w} ${h}`, preserveAspectRatio: "none", style: { width: "100%", height, display: "block" } }, /* @__PURE__ */ React.createElement("defs", null, traces.map((t, i) => /* @__PURE__ */ React.createElement("linearGradient", { key: i, id: `mt-${i}`, x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: t.color, stopOpacity: "0.28" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: t.color, stopOpacity: "0" })))), showGrid && [0.25, 0.5, 0.75].map((g, i) => /* @__PURE__ */ React.createElement("line", { key: i, x1: "0", y1: h * g, x2: w, y2: h * g, stroke: "oklch(0.32 0.012 240 / 0.25)", strokeDasharray: "2 4", vectorEffect: "non-scaling-stroke" })), traces.map((t, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("path", { d: smoothPath(t.data, w, h, 20) + ` L${w},${h} L0,${h} Z`, fill: `url(#mt-${i})` }), /* @__PURE__ */ React.createElement("path", { d: smoothPath(t.data, w, h, 20), stroke: t.color, strokeWidth: "1.8", fill: "none", vectorEffect: "non-scaling-stroke", style: { filter: `drop-shadow(0 0 6px ${t.color})` } }))));
}
function CountUp({ to, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration]);
  return /* @__PURE__ */ React.createElement("span", { ref }, v < 10 ? v.toFixed(1) : Math.round(v).toLocaleString(), suffix);
}
function Reveal({ children, delay = 0 }) {
  const [ref, shown] = useReveal();
  return /* @__PURE__ */ React.createElement("div", { ref, className: `reveal ${shown ? "in" : ""}`, style: { transitionDelay: shown ? `${delay}ms` : "0ms" } }, children);
}
Object.assign(window, {
  useReveal,
  useLiveWalk,
  I,
  smoothPath,
  MultiTrace,
  CountUp,
  Reveal
});
