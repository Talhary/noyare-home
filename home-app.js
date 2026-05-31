const { useState: useStateH, useEffect: useEffectH } = React;
function Nav() {
  return /* @__PURE__ */ React.createElement("nav", { className: "nav" }, /* @__PURE__ */ React.createElement("div", { className: "container nav-inner" }, /* @__PURE__ */ React.createElement("a", { className: "brand", href: "#top" }, /* @__PURE__ */ React.createElement("img", { src: "./logo.png", alt: "Noyare Logo", style: { width: "24px", height: "24px", borderRadius: "6px" } }), "NOYARE"), /* @__PURE__ */ React.createElement("div", { className: "nav-links" }, /* @__PURE__ */ React.createElement("a", { className: "nav-link", href: "#features" }, "Features"), /* @__PURE__ */ React.createElement("a", { className: "nav-link", href: "#dashboard" }, "Dashboard"), /* @__PURE__ */ React.createElement("a", { className: "nav-link", href: "#proxy" }, "Proxy"), /* @__PURE__ */ React.createElement("a", { className: "nav-link", href: "#specs" }, "Specs")), /* @__PURE__ */ React.createElement("a", { className: "nav-cta", href: "#download" }, /* @__PURE__ */ React.createElement(I.download, null), " Download")));
}
function Hero() {
  const cpu = useLiveWalk(11, 30, 11, 90, 900);
  const ram = useLiveWalk(23, 68, 1.8, 90, 900);
  const net = useLiveWalk(47, 26, 16, 90, 900);
  const disk = useLiveWalk(91, 14, 6, 90, 900);
  const traces = [
    { data: cpu, color: "oklch(0.82 0.13 195)", label: "CPU" },
    { data: ram, color: "oklch(0.70 0.18 285)", label: "RAM" },
    { data: net, color: "oklch(0.86 0.16 130)", label: "NET" },
    { data: disk, color: "oklch(0.84 0.14 80)", label: "DISK" }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "hero", id: "top" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "hero-eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "live-dot" }), "NOYARE \xB7 V0.1 \xB7 BUILT IN RUST")), /* @__PURE__ */ React.createElement(Reveal, { delay: 80 }, /* @__PURE__ */ React.createElement("h1", null, "See your ", /* @__PURE__ */ React.createElement("span", { className: "accent" }, "machine think"), ", second by second.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 160 }, /* @__PURE__ */ React.createElement("p", { className: "lede" }, "Noyare is a forensic system monitor for your desk. Watch every process, every open port, every DNS lookup, every byte on disk \u2014 all in one calm, observable surface.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 240 }, /* @__PURE__ */ React.createElement("div", { className: "hero-actions" }, /* @__PURE__ */ React.createElement("button", { className: "btn-primary", onClick: () => window.open("https://apps.microsoft.com/detail/9PL83RF36NP4?hl=en-us&gl=US&ocid=pdpshare", "_blank") }, /* @__PURE__ */ React.createElement(I.download, null), " Get it from Microsoft Store"))), /* @__PURE__ */ React.createElement(Reveal, { delay: 320 }, /* @__PURE__ */ React.createElement("div", { className: "hero-meta" }, /* @__PURE__ */ React.createElement("div", { className: "item" }, /* @__PURE__ */ React.createElement("b", null, "~18 MB"), /* @__PURE__ */ React.createElement("span", null, "self-contained install")), /* @__PURE__ */ React.createElement("div", { className: "item" }, /* @__PURE__ */ React.createElement("b", null, "0.4% CPU"), /* @__PURE__ */ React.createElement("span", null, "at rest, polling every 1.1s")), /* @__PURE__ */ React.createElement("div", { className: "item" }, /* @__PURE__ */ React.createElement("b", null, "1.1 s"), /* @__PURE__ */ React.createElement("span", null, "sampling resolution")), /* @__PURE__ */ React.createElement("div", { className: "item" }, /* @__PURE__ */ React.createElement("b", null, "Tauri \xB7 Rust"), /* @__PURE__ */ React.createElement("span", null, "native, no Electron")))), /* @__PURE__ */ React.createElement(Reveal, { delay: 400 }, /* @__PURE__ */ React.createElement("div", { className: "hero-viz" }, /* @__PURE__ */ React.createElement("div", { className: "viz-head" }, /* @__PURE__ */ React.createElement("span", { className: "viz-tag" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "LIVE \xB7 90s"), /* @__PURE__ */ React.createElement("div", { className: "viz-legend" }, traces.map((t, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "legend-i" }, /* @__PURE__ */ React.createElement("span", { className: "sw", style: { background: t.color } }), t.label, " ", /* @__PURE__ */ React.createElement("b", null, Math.round(t.data[t.data.length - 1]), "%"))))), /* @__PURE__ */ React.createElement(MultiTrace, { height: 380, traces }), /* @__PURE__ */ React.createElement("div", { className: "viz-foot" }, /* @__PURE__ */ React.createElement("span", { className: "tick-row" }, /* @__PURE__ */ React.createElement("span", null, "-90s"), /* @__PURE__ */ React.createElement("span", null, "-60s"), /* @__PURE__ */ React.createElement("span", null, "-30s"), /* @__PURE__ */ React.createElement("span", null, "NOW")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-ghost)" } }, "SAMPLE 1.1s \xB7 UPTIME 04:48:36"))))));
}
function SignalTicker() {
  const items = [
    { c: "", t: "PID 17128 \xB7 noyare.exe \xB7 53 MB" },
    { c: "v", t: "msedgewebview2.exe \u2192 6.8% CPU" },
    { c: "c", t: "172.217 ESTABLISHED \xB7 fonts.gstatic.com" },
    { c: "a", t: "Port :8080 EXPOSED" },
    { c: "r", t: "401 telemetry.microsoft.com \xB7 blocked" },
    { c: "", t: "DNS \xB7 api.openai.com \u2192 104.18.6.192" },
    { c: "v", t: "Memory 10.97 GB / 15.86 GB" },
    { c: "c", t: "npm cache \xB7 522 MB reclaimable" },
    { c: "", t: "Sniffer \xB7 162 active connections" },
    { c: "a", t: "Port :22 sshd.exe EXPOSED" },
    { c: "v", t: "Disk D:\\ \xB7 79% used" },
    { c: "r", t: "500 analytics.local /track" }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "signal-ticker" }, /* @__PURE__ */ React.createElement("div", { className: "signal-track" }, [...items, ...items].map((it, i) => /* @__PURE__ */ React.createElement("span", { className: "signal-item", key: i }, /* @__PURE__ */ React.createElement("span", { className: `glyph ${it.c}` }), it.t))));
}
function Stats() {
  return /* @__PURE__ */ React.createElement("section", { className: "container", style: { marginTop: 80 } }, /* @__PURE__ */ React.createElement("div", { className: "stats" }, /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("span", { className: "l" }, "SAMPLE INTERVAL"), /* @__PURE__ */ React.createElement("span", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { to: 1.1, suffix: "" }), /* @__PURE__ */ React.createElement("span", { className: "unit" }, "s")), /* @__PURE__ */ React.createElement("span", { className: "d" }, "Polled every beat, no jitter.")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("span", { className: "l" }, "PROCESSES TRACKED"), /* @__PURE__ */ React.createElement("span", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { to: 399 })), /* @__PURE__ */ React.createElement("span", { className: "d" }, "Every PID, every binary, every thread.")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("span", { className: "l" }, "SOCKETS WATCHED"), /* @__PURE__ */ React.createElement("span", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { to: 162 })), /* @__PURE__ */ React.createElement("span", { className: "d" }, "TCP, UDP, IPv4, IPv6 \u2014 all live.")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("span", { className: "l" }, "CPU OVERHEAD"), /* @__PURE__ */ React.createElement("span", { className: "v" }, "<", /* @__PURE__ */ React.createElement(CountUp, { to: 1 }), /* @__PURE__ */ React.createElement("span", { className: "unit" }, "%")), /* @__PURE__ */ React.createElement("span", { className: "d" }, "Idle while you work."))));
}
function FeatureIndex() {
  const feats = [
    { n: "01", t: "Dashboard", d: "Full-bleed live activity ribbon, per-core sparklines, memory & swap breakouts." },
    { n: "02", t: "Processes", d: "Every PID with CPU/MEM, trust evaluation, sort & filter, drill into paths." },
    { n: "03", t: "Ports", d: "All listening & established sockets. Risk-classified \u2014 SAFE / EXPOSED / SYSTEM." },
    { n: "04", t: "Network", d: "Active connections + a live DNS sniffer streaming every lookup leaving your box." },
    { n: "05", t: "Storage", d: "Quick cleaner for caches and temp, plus a recursive disk analyzer with treemaps." },
    { n: "06", t: "Proxy", d: "Local HTTPS proxy \u2014 capture, break on, modify, repeat any request." },
    { n: "07", t: "Memory", d: "Intelligent Standby List Cleaner (ISLC) engine to purge memory and free RAM." },
    { n: "08", t: "Startup", d: "Manage startup applications, analyze safety, and configure custom launch delays." },
    { n: "09", t: "Insomnia", d: "Keep-awake power manager triggered by process watch lists, battery levels, or network." },
    { n: "10", t: "Battery", d: "Deep telemetry report of wear levels, cycle counts, voltage, and discharge logs." },
    { n: "11", t: "Tweaks", d: "Windows customization hub for scrollbars, menu delays, snap layouts, and privacy." },
    { n: "12", t: "Tunnels", d: "Cloudflare tunnel daemon. Tunnel localhost to public domains with traffic metrics." },
    { n: "13", t: "Quick Look", d: "Instant file previewer (Spacebar hook) for code, images, audio, video, and archives." }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "features" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "num" }, "02"), "FEATURES")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", null, "Thirteen tools, ", /* @__PURE__ */ React.createElement("em", null, "one window."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", { className: "lede" }, "Most monitors are a fragmented mess \u2014 one tab for CPU, one for ports, a different binary for network. Noyare folds the whole investigation surface into a single pane and keeps every signal live.")), /* @__PURE__ */ React.createElement("div", { className: "feature-grid" }, feats.map((f, i) => /* @__PURE__ */ React.createElement(Reveal, { key: i, delay: i * 60 }, /* @__PURE__ */ React.createElement("a", { className: "fi-cell", href: `#${f.t.toLowerCase()}` }, /* @__PURE__ */ React.createElement("span", { className: "num" }, f.n), /* @__PURE__ */ React.createElement("h3", null, f.t), /* @__PURE__ */ React.createElement("p", null, f.d)))))));
}
function Feature({ num, title, kicker, desc, bullets, stage, reverse, id }) {
  return /* @__PURE__ */ React.createElement("section", { className: `feature ${reverse ? "reverse" : ""}`, id }, /* @__PURE__ */ React.createElement("div", { className: "container feature-inner" }, /* @__PURE__ */ React.createElement("div", { className: "feature-text" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "feature-num" }, /* @__PURE__ */ React.createElement("span", { className: "bar" }), " ", num, " \xB7 ", kicker)), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h3", null, title)), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", { className: "desc" }, desc)), /* @__PURE__ */ React.createElement(Reveal, { delay: 180 }, /* @__PURE__ */ React.createElement("ul", { className: "bullets" }, bullets.map((b, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement(I.check, null), /* @__PURE__ */ React.createElement("span", { dangerouslySetInnerHTML: { __html: b } })))))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, stage)));
}
function TweaksStrip() {
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "settings" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "num" }, "16"), "SETTINGS")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", null, "Yours, ", /* @__PURE__ */ React.createElement("em", null, "to the millisecond."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", { className: "lede" }, "Noyare ships with calm defaults but stays out of your way. Theme, sampling cadence, sniffer behavior, trust evaluation \u2014 pin every knob.")), /* @__PURE__ */ React.createElement("div", { className: "toggles-strip" }, [
    { k: "01", n: "Theme", d: "Dark, light, or follow your OS. Both palettes are first-class.", s: "DARK \xB7 LIGHT" },
    { k: "02", n: "Sidebar style", d: "Full labels or icon-only \u2014 toggle at any time.", s: "LABELS \xB7 ICONS" },
    { k: "03", n: "Sample interval", d: "Default 1.1s. Push to 250ms for forensics or 5s to coast.", s: "0.25s \u2013 5s" },
    { k: "04", n: "Sniffer", d: "DNS lookup capture, with auto-flush windows.", s: "ON \xB7 OFF" },
    { k: "05", n: "Trust eval", d: "Verify signatures on every running binary, in the background.", s: "ON \xB7 OFF" },
    { k: "06", n: "Auto-pause", d: "Reduce work when the window loses focus.", s: "ON \xB7 OFF" },
    { k: "07", n: "Proxy CA", d: "Regenerate the root certificate any time.", s: "ROTATE" },
    { k: "08", n: "Reset", d: "Wipe local config and start clean.", s: "DANGER" }
  ].map((t, i) => /* @__PURE__ */ React.createElement(Reveal, { key: i, delay: i * 50 }, /* @__PURE__ */ React.createElement("div", { className: "toggle-card" }, /* @__PURE__ */ React.createElement("span", { className: "tswatch" }, t.s), /* @__PURE__ */ React.createElement("span", { className: "ti" }, t.k), /* @__PURE__ */ React.createElement("span", { className: "tn" }, t.n), /* @__PURE__ */ React.createElement("span", { className: "td" }, t.d)))))));
}
function Specs() {
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "specs" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "num" }, "17"), "SPECS")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", null, "Built for ", /* @__PURE__ */ React.createElement("em", null, "your machine."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", { className: "lede" }, "Native, signed, sandboxed. Noyare runs locally \u2014 your machine's data never leaves your machine.")), /* @__PURE__ */ React.createElement("div", { className: "specs" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "spec" }, /* @__PURE__ */ React.createElement("h4", null, "Engine"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Runtime"), /* @__PURE__ */ React.createElement("b", null, "Tauri 2.0")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Language"), /* @__PURE__ */ React.createElement("b", null, "Rust 1.84")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Renderer"), /* @__PURE__ */ React.createElement("b", null, "WebView2 \xB7 WKWebView")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Binary size"), /* @__PURE__ */ React.createElement("b", null, "~18 MB")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "RAM idle"), /* @__PURE__ */ React.createElement("b", null, "~40 MB"))))), /* @__PURE__ */ React.createElement(Reveal, { delay: 80 }, /* @__PURE__ */ React.createElement("div", { className: "spec" }, /* @__PURE__ */ React.createElement("h4", null, "Platforms"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Windows"), /* @__PURE__ */ React.createElement("b", null, "10 \xB7 11")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "macOS"), /* @__PURE__ */ React.createElement("b", null, "13+ Universal")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Linux"), /* @__PURE__ */ React.createElement("b", null, "x86_64 \xB7 ARM64")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Distribution"), /* @__PURE__ */ React.createElement("b", null, "Microsoft Store")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "License"), /* @__PURE__ */ React.createElement("b", null, "Apache-2.0"))))), /* @__PURE__ */ React.createElement(Reveal, { delay: 160 }, /* @__PURE__ */ React.createElement("div", { className: "spec" }, /* @__PURE__ */ React.createElement("h4", null, "Privacy"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Telemetry"), /* @__PURE__ */ React.createElement("b", null, "none")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Network calls"), /* @__PURE__ */ React.createElement("b", null, "0 outbound")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Updates"), /* @__PURE__ */ React.createElement("b", null, "Store-managed")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Logs"), /* @__PURE__ */ React.createElement("b", null, "local only")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", null, "Sandbox"), /* @__PURE__ */ React.createElement("b", null, "verified"))))))));
}
function CTAFooter() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "container", id: "download" }, /* @__PURE__ */ React.createElement("div", { className: "cta" }, /* @__PURE__ */ React.createElement("div", { className: "cta-inner" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "num" }, "18"), "GET IT")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", null, "Watch your machine. ", /* @__PURE__ */ React.createElement("em", null, "Right now."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", null, "Free, secure, native. Drops in under 10 seconds and starts streaming immediately.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 180 }, /* @__PURE__ */ React.createElement("div", { className: "cta-actions" }, /* @__PURE__ */ React.createElement("button", { className: "btn-primary", onClick: () => window.open("https://apps.microsoft.com/detail/9PL83RF36NP4?hl=en-us&gl=US&ocid=pdpshare", "_blank") }, /* @__PURE__ */ React.createElement(I.download, null), " Get it from Microsoft Store")))))), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "footer-inner" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", { className: "brand", href: "#top" }, /* @__PURE__ */ React.createElement("img", { src: "./logo.png", alt: "Noyare Logo", style: { width: "24px", height: "24px", borderRadius: "6px" } }), "NOYARE"), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, color: "var(--fg-mute)", fontSize: 13.5, maxWidth: "36ch" } }, "A forensic system monitor. Built locally, runs locally, stays locally.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "Product"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Dashboard"), /* @__PURE__ */ React.createElement("li", null, "Processes"), /* @__PURE__ */ React.createElement("li", null, "Ports"), /* @__PURE__ */ React.createElement("li", null, "Network"), /* @__PURE__ */ React.createElement("li", null, "Storage"), /* @__PURE__ */ React.createElement("li", null, "Memory"), /* @__PURE__ */ React.createElement("li", null, "Startup"), /* @__PURE__ */ React.createElement("li", null, "Keep Awake"), /* @__PURE__ */ React.createElement("li", null, "Battery"), /* @__PURE__ */ React.createElement("li", null, "Tweaks"), /* @__PURE__ */ React.createElement("li", null, "Tunnels"), /* @__PURE__ */ React.createElement("li", null, "Quick Look"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Documentation"), /* @__PURE__ */ React.createElement("li", null, "Changelog"), /* @__PURE__ */ React.createElement("li", null, "Roadmap"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "https://apps.microsoft.com/detail/9PL83RF36NP4?hl=en-us&gl=US&ocid=pdpshare", target: "_blank", rel: "noopener noreferrer", style: { color: "inherit", textDecoration: "none" } }, "Microsoft Store")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "Project"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "About"), /* @__PURE__ */ React.createElement("li", null, "License"), /* @__PURE__ */ React.createElement("li", null, "Privacy"), /* @__PURE__ */ React.createElement("li", null, "Contact")))), /* @__PURE__ */ React.createElement("div", { className: "footer-meta" }, /* @__PURE__ */ React.createElement("span", null, "NOYARE \xA9 2026 \xB7 APACHE-2.0"), /* @__PURE__ */ React.createElement("span", null, "BUILT IN RUST \xB7 DESIGNED IN THE OPEN")))));
}
function BgFx() {
  return /* @__PURE__ */ React.createElement("div", { className: "bg-fx", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("div", { className: "bg-grid" }), /* @__PURE__ */ React.createElement("div", { className: "bg-glow t" }), /* @__PURE__ */ React.createElement("div", { className: "bg-glow v" }), /* @__PURE__ */ React.createElement("div", { className: "bg-glow c" }));
}
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "shell", "data-screen-label": "Noyare Home" }, /* @__PURE__ */ React.createElement(BgFx, null), /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Stats, null), /* @__PURE__ */ React.createElement(SignalTicker, null), /* @__PURE__ */ React.createElement(FeatureIndex, null), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "03",
      id: "dashboard",
      kicker: "THE DASHBOARD",
      title: "A single pane where every signal lives.",
      desc: "Open Noyare, see your machine. A 90-second multi-trace ribbon overlays CPU, RAM, network, and disk. Per-core sparklines breathe at 1.1s. Memory splits into apps / system / cache / free. Drives, interfaces, and DNS sit one click below.",
      bullets: [
        "<b>Full-bleed live ribbon</b> \u2014 four overlaid traces, glow rendered.",
        "<b>Per-core grid</b> \u2014 every CPU core with its own 30-tick sparkline.",
        "<b>Memory segmentation</b> \u2014 apps \xB7 system \xB7 cache \xB7 free + swap.",
        "<b>Drive health</b> \u2014 every mount, every fill rate, every alert."
      ],
      stage: /* @__PURE__ */ React.createElement(StageDashboard, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "04",
      id: "processes",
      kicker: "PROCESSES",
      reverse: true,
      title: "Every PID, every binary, every byte.",
      desc: "A sortable, filterable table of every running process \u2014 name, PID, CPU, memory, path. Inline mini-bars show CPU load at a glance. Trust evaluation flags unsigned binaries. Drill into child processes; end tasks in a click.",
      bullets: [
        "<b>Live ticking</b> \u2014 CPU and memory update every 1.1s, no flicker.",
        "<b>Trust evaluation</b> \u2014 every binary scored: trusted \xB7 suspect \xB7 blocked.",
        "<b>Search anywhere</b> \u2014 name, path, PID, or process group.",
        "<b>Smart sorts</b> \u2014 CPU, memory, PID, name, alphabetical, recent."
      ],
      stage: /* @__PURE__ */ React.createElement(StageProcesses, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "05",
      id: "ports",
      kicker: "PORTS",
      title: "Open sockets, classified at a glance.",
      desc: "Every listening port and every established connection laid out as a grid, each cell color-tagged by exposure. Click any cell to jump to the owning process. UDP and TCP shown side by side; IPv4 and IPv6 unified.",
      bullets: [
        "<b>Risk classification</b> \u2014 SAFE \xB7 EXPOSED \xB7 SYSTEM, scored locally.",
        "<b>Loopback first</b> \u2014 separate localhost-only listeners from public.",
        "<b>State filtering</b> \u2014 LISTENING, ESTABLISHED, TIME_WAIT, CLOSED.",
        "<b>Process linkage</b> \u2014 jump straight to the binary that owns the port."
      ],
      stage: /* @__PURE__ */ React.createElement(StagePorts, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "06",
      id: "network",
      kicker: "NETWORK",
      reverse: true,
      title: "See every byte leave your machine.",
      desc: "A passive DNS sniffer streams every outbound lookup in real time \u2014 domain, resolved IP, originating process. Active connections list every flow with remote IP, duration, and reverse-resolved hostname. Nothing is sent anywhere; everything is captured locally.",
      bullets: [
        "<b>Live DNS sniffer</b> \u2014 every lookup, with the process that asked.",
        "<b>Connection map</b> \u2014 local \u2194 remote, protocol, duration.",
        "<b>Per-interface meters</b> \u2014 Wi-Fi, Ethernet, virtual adapters.",
        "<b>Domain-level filters</b> \u2014 block, log, alert by domain or IP range."
      ],
      stage: /* @__PURE__ */ React.createElement(StageNetwork, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "07",
      id: "storage",
      kicker: "STORAGE",
      title: "Reclaim the disk, one click.",
      desc: "Two tools in one screen. The Quick Cleaner scans every known cache location \u2014 browsers, package managers, build tooling, system temp \u2014 and lets you reclaim them in one shot. The Disk Analyzer recurses a folder and ranks children by size with live treemap viz.",
      bullets: [
        "<b>12 cache scanners</b> \u2014 browsers, npm, pip, yarn, Docker, VSCode\u2026",
        "<b>Live tally</b> \u2014 running sum updates as you toggle categories.",
        "<b>Disk analyzer</b> \u2014 sort any folder by size with bar distribution.",
        "<b>Safe-by-default</b> \u2014 never touches user docs, only known caches."
      ],
      stage: /* @__PURE__ */ React.createElement(StageStorage, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "08",
      id: "proxy",
      kicker: "PROXY INTERCEPT",
      reverse: true,
      title: "A pocket-sized Charles Proxy.",
      desc: "A local HTTPS proxy with a beautiful inspector. Capture every request from every binary, break on response, modify headers and body, then send it back. Repeater rebuilds requests with new params. Export the CA in one click \u2014 fully self-signed, fully local.",
      bullets: [
        "<b>HTTP/HTTPS capture</b> \u2014 full headers, body, timing, every flow.",
        "<b>Break on rules</b> \u2014 pause requests matching any predicate.",
        "<b>Repeater</b> \u2014 replay any captured request with edits.",
        "<b>Self-signed CA</b> \u2014 export, install, rotate at any moment."
      ],
      stage: /* @__PURE__ */ React.createElement(StageProxy, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "09",
      id: "memory",
      kicker: "MEMORY CLEANER",
      title: "Optimize system memory instantly.",
      desc: "Standby memory lists and cached pages can clog your system, leaving less active RAM. Noyare's RAM Cleaner introduces an Intelligent Standby List Cleaner (ISLC) engine to automatically free up caches when memory thresholds are hit, alongside manual working set trimming.",
      bullets: [
        "<b>ISLC Engine</b> \u2014 Auto-purges standby cache based on free RAM limits.",
        "<b>Working Set Trimmer</b> \u2014 Reclaims active process memory buffers safely.",
        "<b>Live Cache Tally</b> \u2014 Visualizes RAM consumption across system categories.",
        "<b>Low Overhead</b> \u2014 Runs in the background without stealing CPU cycles."
      ],
      stage: /* @__PURE__ */ React.createElement(StageMemory, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "10",
      id: "startup",
      kicker: "STARTUP APPS",
      reverse: true,
      title: "Control your boot experience.",
      desc: "Heavy login programs increase startup latency. Noyare lists all registered startup apps in registry keys and startup folders, computes their impact, and lets you disable, delete, or configure custom launch delays so your computer boots instantly.",
      bullets: [
        "<b>Launch Delays</b> \u2014 Postpone heavy boot items to ease initial CPU load.",
        "<b>Registry Analyzer</b> \u2014 Scans standard and advanced system startup paths.",
        "<b>Trust Indicators</b> \u2014 Flags unsigned startup binaries automatically.",
        "<b>Toggle & Delete</b> \u2014 Safely enable, disable, or delete boot tasks."
      ],
      stage: /* @__PURE__ */ React.createElement(StageStartup, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "11",
      id: "keepawake",
      kicker: "INSOMNIA MODE",
      title: "Your machine stays awake, on your terms.",
      desc: "Prevent system sleep or screen display timeout during long renders, downloads, or builds. Set simple continuous overrides or build advanced process-based rules, network transfer limits, and battery safeguard thresholds.",
      bullets: [
        "<b>Continuous Wake</b> \u2014 Prevent screen and sleep cycles indefinitely.",
        "<b>Process Watch</b> \u2014 Only keep awake while specific processes are running.",
        "<b>Battery Threshold</b> \u2014 Automatically deactivate below set battery power.",
        "<b>Network Guard</b> \u2014 Keep awake during active file transfers."
      ],
      stage: /* @__PURE__ */ React.createElement(StageKeepAwake, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "12",
      id: "battery",
      kicker: "BATTERY DIAGNOSTICS",
      reverse: true,
      title: "Precision power telemetry.",
      desc: "Monitor battery wear level, charge cycles, health status, and live discharge rates. Keep track of battery capacity history logs over time and generate a clean Windows battery diagnostics report in one click.",
      bullets: [
        "<b>Wear Telemetry</b> \u2014 Track design capacity vs current full charge capacity.",
        "<b>Discharge Rates</b> \u2014 Watch energy flow in Watts under different system loads.",
        "<b>History Logs</b> \u2014 Maintain historic records of battery level and health.",
        "<b>Report Generator</b> \u2014 Build and export complete HTML diagnostic sheets."
      ],
      stage: /* @__PURE__ */ React.createElement(StageBattery, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "13",
      id: "tweaks",
      kicker: "SYSTEM TWEAKS",
      title: "Personalize and optimize your desktop.",
      desc: "Noyare offers a dashboard of deep operating system tweaks. Shrink or expand scrollbars, configure hover focus timeouts, tweak explorer file display speeds, and disable background telemetry trackers.",
      bullets: [
        "<b>Scrollbar Customizer</b> \u2014 Edit visual scrollbar widths across the OS.",
        "<b>Focus Timeouts</b> \u2014 Control menu delay reaction speeds under the mouse.",
        "<b>Telemetry Block</b> \u2014 Toggles to disable background usage logging.",
        "<b>Explorer Speedups</b> \u2014 Registry-based response timing enhancements."
      ],
      stage: /* @__PURE__ */ React.createElement(StageTweaks, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "14",
      id: "tunnels",
      kicker: "LOCAL TUNNELS",
      reverse: true,
      title: "Expose your ports instantly.",
      desc: "Test webhooks, showcase progress, or route traffic securely. Noyare encapsulates Cloudflare tunnel processes, allowing you to spin up secure public tunnels for local ports and monitor live bandwidth and latency stats.",
      bullets: [
        "<b>Zero Configuration</b> \u2014 Spin up cloudflared instances in a single tap.",
        "<b>Public URLs</b> \u2014 Mapped to secure HTTPS trycloudflare subdomains.",
        "<b>Bandwidth Logs</b> \u2014 Live data throughput meters showing Up/Down stats.",
        "<b>Process Shield</b> \u2014 Native process management wraps the tunnel daemon."
      ],
      stage: /* @__PURE__ */ React.createElement(StageTunnel, null)
    }
  ), /* @__PURE__ */ React.createElement(
    Feature,
    {
      num: "15",
      id: "quicklook",
      kicker: "QUICK LOOK",
      title: "Spacebar file preview, native and fast.",
      desc: "Select a file in Windows Explorer, tap the Spacebar, and instantly see its contents in a translucent, fluid overlay. Works for text files (with live editing and saving), images (with cropping), audio, video, and archive structures.",
      bullets: [
        "<b>Spacebar Hook</b> \u2014 Low-level keyboard hook binds preview to Spacebar.",
        "<b>Code Editor</b> \u2014 View code with syntax highlighting, edit, and save changes.",
        "<b>Image Cropper</b> \u2014 Crop, inspect, and export image assets instantly.",
        "<b>Archive Reader</b> \u2014 List files inside zip and tar.gz files without unpacking."
      ],
      stage: /* @__PURE__ */ React.createElement(StageQuickLook, null)
    }
  ), /* @__PURE__ */ React.createElement(TweaksStrip, null), /* @__PURE__ */ React.createElement(Specs, null), /* @__PURE__ */ React.createElement(CTAFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
