const { useState: useStateF, useEffect: useEffectF, useMemo: useMemoF, useRef: useRefF } = React;
function StageDashboard() {
  const cores = useMemoF(() => Array.from({ length: 8 }, (_, i) => ({
    id: `C${i}`,
    base: [38, 24, 52, 29, 41, 18, 33, 22][i]
  })), []);
  const [vals, setVals] = useStateF(cores.map((c) => c.base));
  useEffectF(() => {
    const t = setInterval(() => {
      setVals((prev) => prev.map((v, i) => {
        const next = v + (Math.random() - 0.5) * 22;
        return Math.max(4, Math.min(96, next));
      }));
    }, 900);
    return () => clearInterval(t);
  }, []);
  const cpu = useLiveWalk(11, 32, 9, 60, 900);
  const ram = useLiveWalk(23, 68, 2, 60, 900);
  const net = useLiveWalk(47, 22, 14, 60, 900);
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "DASHBOARD"), /* @__PURE__ */ React.createElement("div", { className: "dash-prev" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)", letterSpacing: "0.1em" } }, "CPU \xB7 LIVE"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" } }, Math.round(cpu[cpu.length - 1]), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-faint)", fontSize: 16, marginLeft: 4 } }, "%"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 10, height: 2, background: "var(--teal)", verticalAlign: "middle", marginRight: 6 } }), "CPU"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 10, height: 2, background: "var(--violet)", verticalAlign: "middle", marginRight: 6 } }), "RAM"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 10, height: 2, background: "var(--chartreuse)", verticalAlign: "middle", marginRight: 6 } }), "NET"))), /* @__PURE__ */ React.createElement(MultiTrace, { height: 160, traces: [
    { data: cpu, color: "oklch(0.82 0.13 195)" },
    { data: ram, color: "oklch(0.70 0.18 285)" },
    { data: net, color: "oklch(0.86 0.16 130)" }
  ] })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)", letterSpacing: "0.1em", marginBottom: 10 } }, "8 CORES \xB7 RYZEN 7"), /* @__PURE__ */ React.createElement("div", { className: "dash-cores" }, vals.map((v, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "dash-core" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "C", i), /* @__PURE__ */ React.createElement("div", { className: "v" }, Math.round(v), "%"), /* @__PURE__ */ React.createElement("div", { className: "bar", style: { width: `${v}%` } })))))));
}
const PROC_DATA = [
  { pid: 17672, name: "msedgewebview2.exe", letter: "M", color: "violet", cpu: 6.8, mem: "637 MB" },
  { pid: 17128, name: "noyare.exe", letter: "N", color: "teal", cpu: 1.5, mem: "53 MB" },
  { pid: 5520, name: "msedge.exe", letter: "M", color: "violet", cpu: 0.8, mem: "2.27 GB" },
  { pid: 22320, name: "Antigravity IDE.exe", letter: "A", color: "chart", cpu: 0.7, mem: "1.74 GB" },
  { pid: 7064, name: "node.exe", letter: "N", color: "chart", cpu: 0.4, mem: "981 MB" },
  { pid: 6584, name: "postgres.exe", letter: "P", color: "chart", cpu: 0.2, mem: "16 MB" },
  { pid: 1124, name: "dwm.exe", letter: "D", color: "violet", cpu: 1.1, mem: "92 MB" },
  { pid: 140, name: "Secure System", letter: "S", color: "amber", cpu: 0, mem: "53 MB" }
];
const COLOR_MAP = {
  teal: ["oklch(0.82 0.13 195 / 0.20)", "oklch(0.82 0.13 195)"],
  violet: ["oklch(0.70 0.18 285 / 0.20)", "oklch(0.70 0.18 285)"],
  chart: ["oklch(0.86 0.16 130 / 0.20)", "oklch(0.86 0.16 130)"],
  amber: ["oklch(0.84 0.14 80  / 0.20)", "oklch(0.84 0.14 80)"]
};
function StageProcesses() {
  const [flash, setFlash] = useStateF(-1);
  useEffectF(() => {
    const t = setInterval(() => setFlash(Math.floor(Math.random() * PROC_DATA.length)), 1200);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "PROCESSES \xB7 63"), /* @__PURE__ */ React.createElement("div", { className: "proc-prev" }, /* @__PURE__ */ React.createElement("div", { className: "head" }, /* @__PURE__ */ React.createElement("span", null, "PID"), /* @__PURE__ */ React.createElement("span", null, "NAME"), /* @__PURE__ */ React.createElement("span", { style: { textAlign: "right" } }, "CPU"), /* @__PURE__ */ React.createElement("span", { style: { textAlign: "right" } }, "MEMORY")), PROC_DATA.map((p, i) => {
    const [bg, fg] = COLOR_MAP[p.color];
    return /* @__PURE__ */ React.createElement("div", { key: p.pid, className: `proc-row ${flash === i ? "flash" : ""}` }, /* @__PURE__ */ React.createElement("span", { className: "pid" }, p.pid), /* @__PURE__ */ React.createElement("span", { className: "name" }, /* @__PURE__ */ React.createElement("span", { className: "av", style: { background: bg, color: fg } }, p.letter), /* @__PURE__ */ React.createElement("span", null, p.name)), /* @__PURE__ */ React.createElement("span", { className: "cpu-cell", style: { color: p.cpu > 5 ? "var(--teal)" : "var(--fg)" } }, p.cpu.toFixed(1), "%"), /* @__PURE__ */ React.createElement("span", { className: "mem" }, p.mem));
  })));
}
const PORT_DATA = [
  { p: 22, proc: "sshd.exe", tag: "EXPOSED", c: "warn" },
  { p: 80, proc: "httpd", tag: "EXPOSED", c: "warn" },
  { p: 135, proc: "svchost", tag: "SYSTEM", c: "ghost" },
  { p: 445, proc: "system", tag: "EXPOSED", c: "bad" },
  { p: 1900, proc: "svchost", tag: "SYSTEM", c: "ghost" },
  { p: 2179, proc: "vmms", tag: "SYSTEM", c: "ghost" },
  { p: 3e3, proc: "node.exe", tag: "SAFE", c: "" },
  { p: 5353, proc: "msedge", tag: "SYSTEM", c: "ghost" },
  { p: 5432, proc: "postgres", tag: "SAFE", c: "" },
  { p: 8080, proc: "node.exe", tag: "EXPOSED", c: "warn" },
  { p: 9090, proc: "noyare", tag: "SAFE", c: "" },
  { p: 50375, proc: "Antigravity", tag: "SAFE", c: "" }
];
function StagePorts() {
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "PORTS \xB7 12 LISTENING"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)", letterSpacing: "0.1em", marginBottom: 14 } }, "OPEN SOCKETS"), /* @__PURE__ */ React.createElement("div", { className: "port-grid" }, PORT_DATA.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.p, className: `port-cell ${p.c}`, style: { animationDelay: `${i * 60}ms` } }, /* @__PURE__ */ React.createElement("div", { className: "pnum" }, ":", p.p), /* @__PURE__ */ React.createElement("div", { className: "pproc" }, p.proc), /* @__PURE__ */ React.createElement("div", { className: "ptag", style: {
    color: p.c === "bad" ? "var(--red)" : p.c === "warn" ? "var(--amber)" : p.c === "ghost" ? "var(--fg-faint)" : "var(--teal)"
  } }, p.tag)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", gap: 16, fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)" } }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--teal)", verticalAlign: "middle", marginRight: 6 } }), "safe"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--amber)", verticalAlign: "middle", marginRight: 6 } }), "exposed"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--red)", verticalAlign: "middle", marginRight: 6 } }), "danger"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--fg-ghost)", verticalAlign: "middle", marginRight: 6 } }), "system"))));
}
const DOMAINS = [
  { d: "api.github.com", ip: "140.82.121.4", proc: "Antigravity" },
  { d: "registry.npmjs.org", ip: "104.16.9.34", proc: "node.exe" },
  { d: "telemetry.microsoft.com", ip: "20.50.201.200", proc: "svchost.exe" },
  { d: "fonts.gstatic.com", ip: "142.250.80.131", proc: "msedge.exe" },
  { d: "cdn.jsdelivr.net", ip: "151.101.65.242", proc: "msedge.exe" },
  { d: "api.openai.com", ip: "104.18.6.192", proc: "noyare.exe" },
  { d: "settings-win.microsoft.com", ip: "20.210.53.246", proc: "svchost.exe" },
  { d: "v10.events.data.microsoft.com", ip: "51.105.74.121", proc: "svchost.exe" },
  { d: "github.githubassets.com", ip: "185.199.108.154", proc: "msedge.exe" },
  { d: "fonts.googleapis.com", ip: "142.250.80.42", proc: "msedge.exe" }
];
function StageNetwork() {
  const [feed, setFeed] = useStateF(() => DOMAINS.slice(0, 7).map((d, i) => ({ ...d, k: `init-${i}`, t: `${(7 - i) * 3}s` })));
  useEffectF(() => {
    const t = setInterval(() => {
      setFeed((prev) => {
        const next = DOMAINS[Math.floor(Math.random() * DOMAINS.length)];
        return [{ ...next, k: `${Date.now()}`, t: "now" }, ...prev.slice(0, 6).map((x, i) => ({ ...x, t: `${(i + 1) * 3}s` }))];
      });
    }, 1600);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "stage", style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "NETWORK \xB7 DNS SNIFFER"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 18, marginBottom: 18 } }, [
    { k: "ACTIVE", v: "162", c: "var(--teal)" },
    { k: "ESTABLISHED", v: "70", c: "var(--chartreuse)" },
    { k: "UDP", v: "48", c: "var(--amber)" }
  ].map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { background: "var(--bg-inset)", borderRadius: 10, padding: "14px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-faint)", letterSpacing: "0.1em" } }, s.k), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, fontWeight: 500, color: s.c, fontVariantNumeric: "tabular-nums" } }, s.v)))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "hidden", background: "var(--bg-inset)", borderRadius: 12 } }, /* @__PURE__ */ React.createElement("div", { className: "dns-stream" }, feed.map((f) => /* @__PURE__ */ React.createElement("div", { className: "dns-line", key: f.k }, /* @__PURE__ */ React.createElement("span", { className: "t" }, f.t), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "dom" }, f.d), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-ghost)", marginLeft: 8, fontSize: 11 } }, f.proc)), /* @__PURE__ */ React.createElement("span", { className: "ip" }, f.ip))))));
}
function StageStorage() {
  const items = [
    { label: "Edge Cache", val: 210, max: 600, color: "var(--violet)" },
    { label: "npm Cache", val: 522, max: 600, color: "var(--teal)" },
    { label: "User Temp", val: 96, max: 600, color: "var(--chartreuse)" },
    { label: "WU Cache", val: 142, max: 600, color: "var(--amber)" },
    { label: "Docker", val: 18, max: 600, color: "var(--coral)" }
  ];
  const [filled, setFilled] = useStateF(false);
  useEffectF(() => {
    const t = setTimeout(() => setFilled(true), 300);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "STORAGE \xB7 SCANNING"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, marginBottom: 22 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)", letterSpacing: "0.1em" } }, "RECLAIMABLE"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 48, fontWeight: 500, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums", background: "linear-gradient(135deg, var(--teal), var(--violet))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" } }, "988"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, color: "var(--fg-faint)" } }, "MB"), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontFamily: "var(--mono)", fontSize: 11, color: "var(--teal)" } }, "4 of 12 categories selected"))), /* @__PURE__ */ React.createElement("div", { className: "disk-bar" }, items.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: "disk-row", key: i }, /* @__PURE__ */ React.createElement("span", { className: "label" }, it.label), /* @__PURE__ */ React.createElement("span", { className: "track" }, /* @__PURE__ */ React.createElement("span", { className: "fill", style: { width: filled ? `${it.val / it.max * 100}%` : "0%", background: it.color, transitionDelay: `${i * 100}ms` } })), /* @__PURE__ */ React.createElement("span", { className: "val" }, it.val, " MB")))), /* @__PURE__ */ React.createElement("div", { className: "scan-viz" }, /* @__PURE__ */ React.createElement("div", { className: "scan-line" }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 16, left: 16, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--teal)", letterSpacing: "0.1em" } }, "DISK ANALYZER \xB7 LIVE"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 16, left: 16, right: 16, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)" } }, "C:\\Users\\sorcim\\.rustup \xA0\xB7\xA0 2.77 GB \xA0\xB7\xA0 1284 files")));
}
const PROXY_DATA = [
  { m: "POST", host: "api.openai.com", url: "/v1/chat/completions", s: 200, d: 1420 },
  { m: "GET", host: "api.github.com", url: "/repos/sorcim/noyare", s: 200, d: 142 },
  { m: "GET", host: "cdn.jsdelivr.net", url: "/npm/react@18", s: 200, d: 38 },
  { m: "OPT", host: "api.github.com", url: "/repos/sorcim/issues", s: 204, d: 24 },
  { m: "GET", host: "telemetry.microsoft.com", url: "/v1/events", s: 401, d: 56 },
  { m: "POST", host: "analytics.local", url: "/track", s: 500, d: 312 },
  { m: "GET", host: "registry.npmjs.org", url: "/react", s: 200, d: 86 },
  { m: "GET", host: "fonts.gstatic.com", url: "/s/jetbrainsmono/v18", s: 200, d: 14 }
];
function StageProxy() {
  const [intercepting, setIntercepting] = useStateF(true);
  useEffectF(() => {
    const t = setInterval(() => setIntercepting((v) => !v), 2400);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "PROXY \xB7 127.0.0.1:9090"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, marginBottom: 16, display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 10px", background: intercepting ? "oklch(0.66 0.18 18 / 0.18)" : "var(--bg-inset)", borderRadius: 999 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 50, background: intercepting ? "var(--red)" : "var(--fg-ghost)", boxShadow: intercepting ? "0 0 10px var(--red)" : "none" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: intercepting ? "var(--red)" : "var(--fg-faint)", letterSpacing: "0.1em" } }, intercepting ? "INTERCEPT ON" : "INTERCEPT OFF")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-faint)" } }, PROXY_DATA.length, " captured \xB7 2 broken")), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 12, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "proxy-list" }, PROXY_DATA.map((p, i) => {
    const sCls = p.s < 300 ? "ok" : p.s < 400 ? "warn" : "bad";
    return /* @__PURE__ */ React.createElement("div", { className: "proxy-row", key: i }, /* @__PURE__ */ React.createElement("span", { className: `method ${p.m}` }, p.m), /* @__PURE__ */ React.createElement("span", { className: "url" }, /* @__PURE__ */ React.createElement("b", null, p.host), p.url), /* @__PURE__ */ React.createElement("span", { className: `code ${sCls}` }, p.s), /* @__PURE__ */ React.createElement("span", { className: "dur" }, p.d, "ms"));
  }))));
}
function StageMemory() {
  const [standby, setStandby] = useStateF(4280);
  const [free, setFree] = useStateF(1240);
  const [islcActive, setIslcActive] = useStateF(true);
  const [history, setHistory] = useStateF(() => Array.from({ length: 20 }, () => Math.random() * 20 + 40));
  useEffectF(() => {
    const t = setInterval(() => {
      setHistory((h) => {
        const next = Math.max(10, Math.min(95, h[h.length - 1] + (Math.random() - 0.5) * 8));
        return [...h.slice(1), next];
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const handlePurge = () => {
    setStandby(250);
    setFree((prev) => prev + 4030);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "MEMORY \xB7 RAM OPTIMIZER"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)", letterSpacing: "0.1em" } }, "STANDBY LIST CACHE"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 44, fontWeight: 500, color: "var(--teal)", fontVariantNumeric: "tabular-nums" } }, (standby / 1024).toFixed(2)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, color: "var(--fg-faint)" } }, "GB"), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)" } }, "Free RAM: ", Math.round(free), " MB"))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 12, padding: 16, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500 } }, "Intelligent Standby List Cleaner (ISLC)"), /* @__PURE__ */ React.createElement("button", { onClick: () => setIslcActive(!islcActive), style: { background: islcActive ? "var(--teal)" : "var(--bg-elev)", color: islcActive ? "var(--bg)" : "var(--fg-mute)", border: "1px solid var(--line)", borderRadius: 6, padding: "4px 10px", fontSize: 11, cursor: "pointer", fontWeight: "600" } }, islcActive ? "ACTIVE" : "PAUSED")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-mute)", lineHeight: 1.4 } }, "Automatically purges standby memory lists when free memory falls below 1024 MB and standby list exceeds 2048 MB.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("button", { onClick: handlePurge, style: { flex: 1, background: "linear-gradient(135deg, var(--teal), var(--teal-deep))", color: "var(--bg)", border: 0, borderRadius: 8, padding: "10px", fontSize: 12.5, fontWeight: 600, cursor: "pointer" } }, "Purge Standby Lists"), /* @__PURE__ */ React.createElement("button", { style: { flex: 1, background: "var(--bg-soft)", color: "var(--fg)", border: "1px solid var(--line)", borderRadius: 8, padding: "10px", fontSize: 12.5, fontWeight: 500, cursor: "pointer" } }, "Trim Process Memory")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-faint)", marginBottom: 8 } }, "STANDBY LIST CACHE ACTIVITY"), /* @__PURE__ */ React.createElement(MultiTrace, { height: 100, traces: [{ data: history, color: "oklch(0.82 0.13 195)" }], showGrid: false }));
}
function StageStartup() {
  const [items, setItems] = useStateF([
    { name: "Discord", path: "C:\\Users\\sorcim\\AppData\\Local\\Discord\\Update.exe", status: true, delay: 0, impact: "High", trust: "suspect" },
    { name: "OneDrive", path: "C:\\Program Files\\Microsoft OneDrive\\OneDrive.exe", status: true, delay: 10, impact: "Medium", trust: "trusted" },
    { name: "Spotify", path: "C:\\Users\\sorcim\\AppData\\Roaming\\Spotify\\Spotify.exe", status: false, delay: 0, impact: "Low", trust: "trusted" },
    { name: "Noyare", path: "C:\\Program Files\\Noyare\\noyare.exe", status: true, delay: 5, impact: "None", trust: "trusted" }
  ]);
  const toggleStatus = (idx) => {
    setItems((prev) => prev.map((item, i) => i === idx ? { ...item, status: !item.status } : item));
  };
  const setDelay = (idx, delay) => {
    setItems((prev) => prev.map((item, i) => i === idx ? { ...item, delay } : item));
  };
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "STARTUP \xB7 4 REGISTERED ITEMS"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, items.map((item, idx) => {
    const trustColor = item.trust === "suspect" ? "var(--amber)" : "var(--teal)";
    return /* @__PURE__ */ React.createElement("div", { key: item.name, style: { background: "var(--bg-inset)", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2, maxWidth: "60%" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13.5, fontWeight: 600 } }, item.name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 9, color: trustColor, background: item.trust === "suspect" ? "oklch(0.84 0.14 80 / 0.15)" : "var(--teal-soft)", padding: "1px 5px", borderRadius: 4 } }, item.trust.toUpperCase())), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, color: "var(--fg-faint)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, item.path)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--fg-faint)", fontFamily: "var(--mono)" } }, "DELAY"), /* @__PURE__ */ React.createElement("select", { value: item.delay, onChange: (e) => setDelay(idx, parseInt(e.target.value)), disabled: !item.status, style: { background: "var(--bg-elev)", color: item.status ? "var(--fg)" : "var(--fg-ghost)", border: "1px solid var(--line)", borderRadius: 4, fontSize: 11, fontFamily: "var(--mono)", padding: "2px 4px", cursor: item.status ? "pointer" : "default" } }, /* @__PURE__ */ React.createElement("option", { value: 0 }, "None"), /* @__PURE__ */ React.createElement("option", { value: 5 }, "5s"), /* @__PURE__ */ React.createElement("option", { value: 10 }, "10s"), /* @__PURE__ */ React.createElement("option", { value: 30 }, "30s"))), /* @__PURE__ */ React.createElement("button", { onClick: () => toggleStatus(idx), style: { background: item.status ? "var(--teal-soft)" : "transparent", color: item.status ? "var(--teal)" : "var(--fg-ghost)", border: `1px solid ${item.status ? "var(--teal)" : "var(--line)"}`, borderRadius: 6, padding: "6px 12px", fontSize: 11, fontWeight: "600", cursor: "pointer", minWidth: 70 } }, item.status ? "ENABLED" : "DISABLED")));
  }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, padding: "10px 14px", background: "oklch(0.84 0.14 80 / 0.1)", border: "1px solid oklch(0.84 0.14 80 / 0.2)", borderRadius: 10, fontSize: 11.5, color: "var(--amber)", lineHeight: 1.4 } }, "1 item has High impact on startup time and is currently unsigned. Adding a delay of 5-10s is recommended to free CPU cycles during login."));
}
function StageKeepAwake() {
  const [active, setActive] = useStateF(true);
  const [mode, setMode] = useStateF("continuous");
  const [batteryThreshold, setBatteryThreshold] = useStateF(20);
  const [watchedProcesses, setWatchedProcesses] = useStateF("render.exe, ffmpeg.exe");
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "INSOMNIA \xB7 ACTIVE"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16, background: active ? "oklch(0.86 0.16 130 / 0.12)" : "var(--bg-inset)", border: `1px solid ${active ? "var(--chartreuse)" : "var(--line)"}`, borderRadius: 12, padding: "16px 20px", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 12, height: 12, borderRadius: "50%", background: active ? "var(--chartreuse)" : "var(--fg-ghost)", boxShadow: active ? "0 0 12px var(--chartreuse)" : "none" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 600 } }, active ? "KEEP AWAKE ON" : "KEEP AWAKE OFF"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--fg-mute)" } }, active ? "System sleep and display turn-off are currently blocked." : "System follows default OS power plans.")), /* @__PURE__ */ React.createElement("button", { onClick: () => setActive(!active), style: { marginLeft: "auto", background: active ? "var(--chartreuse)" : "var(--bg-soft)", color: active ? "var(--bg)" : "var(--fg)", border: "0", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: "600", cursor: "pointer" } }, active ? "DISABLE" : "ENABLE")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, [
    { id: "continuous", title: "Continuous Mode", desc: "Never sleep while Noyare is running." },
    { id: "process", title: "Process-bound", desc: `Keep awake only when watched processes are active (${watchedProcesses}).` },
    { id: "battery", title: "Battery Safeguard", desc: `Auto-disable keep awake when battery falls below ${batteryThreshold}%.` },
    { id: "network", title: "Network Transfer Activity", desc: "Block sleep if network bandwidth exceeds 50 KB/s." }
  ].map((item) => {
    const isSelected = mode === item.id;
    return /* @__PURE__ */ React.createElement("div", { key: item.id, onClick: () => setMode(item.id), style: { background: isSelected ? "var(--bg-soft)" : "var(--bg-inset)", border: `1px solid ${isSelected ? "var(--teal)" : "transparent"}`, borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2, maxWidth: "85%" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500, color: isSelected ? "var(--teal)" : "var(--fg)" } }, item.title), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--fg-faint)" } }, item.desc)), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", width: 14, height: 14, borderRadius: "50%", border: `2px solid ${isSelected ? "var(--teal)" : "var(--fg-ghost)"}`, background: isSelected ? "var(--teal)" : "transparent" } }));
  }))));
}
function StageBattery() {
  const [level, setLevel] = useStateF(92);
  const [temp, setTemp] = useStateF(34.8);
  const [cycleCount, setCycleCount] = useStateF(185);
  const [wearLevel, setWearLevel] = useStateF(6.4);
  const [history, setHistory] = useStateF(() => [98, 92, 85, 78, 70, 62, 55, 48, 56, 68, 80, 92]);
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "BATTERY DIAGNOSTICS"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 10, padding: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-faint)" } }, "HEALTH STATUS"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, fontWeight: 500, color: "var(--teal)", marginTop: 4 } }, "93.6%", /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--fg-faint)", marginLeft: 6, fontWeight: 400 } }, "Excellent")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-mute)", marginTop: 6 } }, `Wear: ${wearLevel}% (${cycleCount} cycles)`)), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 10, padding: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-faint)" } }, "DISCHARGE METRICS"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, fontWeight: 500, color: "var(--amber)", marginTop: 4 } }, "-11.8 W"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-mute)", marginTop: 6 } }, `Temp: ${temp}\xB0C \xB7 Voltage: 15.4V`))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 12, padding: 16, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)" } }, "CHARGE LEVEL HISTORY"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--teal)" } }, "12 Hours")), /* @__PURE__ */ React.createElement(MultiTrace, { height: 110, traces: [{ data: history, color: "oklch(0.84 0.14 80)" }], showGrid: false })), /* @__PURE__ */ React.createElement("button", { style: { width: "100%", background: "var(--bg-soft)", color: "var(--fg)", border: "1px solid var(--line)", borderRadius: 10, padding: "12px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", null, "\u2938"), " Generate Complete Battery Diagnostics Report")));
}
function StageTweaks() {
  const [scrollbarSize, setScrollbarSize] = useStateF(12);
  const [focusTimeout, setFocusTimeout] = useStateF(200);
  const [tweakStates, setTweakStates] = useStateF({
    explorer: true,
    telemetry: false,
    snap: true
  });
  const toggleTweak = (key) => {
    setTweakStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "TWEAKS \xB7 SYSTEM OPTIMIZER"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 12, padding: "16px 18px", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5, fontWeight: 500 } }, "System Scrollbar Width"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)" } }, scrollbarSize, "px")), /* @__PURE__ */ React.createElement("input", { type: "range", min: 4, max: 24, value: scrollbarSize, onChange: (e) => setScrollbarSize(parseInt(e.target.value)), style: { width: "100%", accentColor: "var(--teal)", cursor: "pointer" } })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5, fontWeight: 500 } }, "Menu Show Delay (Focus Timeout)"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)" } }, focusTimeout, "ms")), /* @__PURE__ */ React.createElement("input", { type: "range", min: 0, max: 600, step: 50, value: focusTimeout, onChange: (e) => setFocusTimeout(parseInt(e.target.value)), style: { width: "100%", accentColor: "var(--teal)", cursor: "pointer" } })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, [
    { key: "explorer", label: "Speed up Windows Explorer navigation", desc: "Modifies shell registry keys for folder response times." },
    { key: "telemetry", label: "Disable background OS Telemetry", desc: "Blocks diagnostic logs from leaking to MS servers." },
    { key: "snap", label: "Advanced window snap features", desc: "Optimizes snap layouts and hotkeys response." }
  ].map((tw) => {
    const isEnabled = tweakStates[tw.key];
    return /* @__PURE__ */ React.createElement("div", { key: tw.key, style: { background: "var(--bg-inset)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 1, maxWidth: "80%" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5, fontWeight: 500, color: isEnabled ? "var(--fg)" : "var(--fg-mute)" } }, tw.label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, color: "var(--fg-faint)" } }, tw.desc)), /* @__PURE__ */ React.createElement("button", { onClick: () => toggleTweak(tw.key), style: { background: isEnabled ? "oklch(0.82 0.13 195 / 0.15)" : "var(--bg-soft)", color: isEnabled ? "var(--teal)" : "var(--fg-ghost)", border: `1px solid ${isEnabled ? "var(--teal)" : "var(--line)"}`, borderRadius: 6, padding: "4px 10px", fontSize: 10.5, fontWeight: "600", cursor: "pointer" } }, isEnabled ? "ON" : "OFF"));
  }))));
}
function StageTunnel() {
  const [tunnels, setTunnels] = useStateF([
    { name: "dev-server", local: "http://localhost:3000", remote: "https://dev-server.trycloudflare.com", status: "Active", bandwidth: "34.2 KB/s" },
    { name: "api-gateway", local: "http://localhost:8080", remote: "https://api-gateway.trycloudflare.com", status: "Active", bandwidth: "148.5 KB/s" },
    { name: "admin-panel", local: "http://localhost:5000", remote: "https://admin-panel.trycloudflare.com", status: "Inactive", bandwidth: "0 B/s" }
  ]);
  const toggleTunnel = (idx) => {
    setTunnels((prev) => prev.map((t, i) => i === idx ? { ...t, status: t.status === "Active" ? "Inactive" : "Active", bandwidth: t.status === "Active" ? "0 B/s" : "12.4 KB/s" } : t));
  };
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "LOCAL TUNNELS \xB7 CLOUDFLARE"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, tunnels.map((t, idx) => {
    const isActive = t.status === "Active";
    return /* @__PURE__ */ React.createElement("div", { key: t.name, style: { background: "var(--bg-inset)", borderRadius: 10, padding: "12px 14px", border: isActive ? "1px solid oklch(0.82 0.13 195 / 0.2)" : "1px solid transparent" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13.5, fontWeight: 600 } }, t.name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 9, color: isActive ? "var(--teal)" : "var(--fg-ghost)", background: isActive ? "var(--teal-soft)" : "var(--bg-soft)", padding: "1px 5px", borderRadius: 4 } }, t.status.toUpperCase())), /* @__PURE__ */ React.createElement("button", { onClick: () => toggleTunnel(idx), style: { background: isActive ? "var(--teal)" : "var(--bg-soft)", color: isActive ? "var(--bg)" : "var(--fg)", border: 0, borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: "600", cursor: "pointer" } }, isActive ? "STOP" : "START")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-mute)", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-faint)" } }, "Local: "), t.local), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--teal)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-faint)" } }, "Public: "), t.remote), isActive && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 8, paddingTop: 6, borderTop: "1px dashed var(--line-soft)", fontFamily: "var(--mono)", fontSize: 9.5, color: "var(--fg-faint)" } }, /* @__PURE__ */ React.createElement("span", null, "TRAFFIC ACTIVE"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--teal)" } }, t.bandwidth)));
  }))));
}
function StageQuickLook() {
  const [editing, setEditing] = useStateF(false);
  const [content, setContent] = useStateF(`// File previewer via Spacebar\nimport { useState } from 'react';\n\nexport function Component() {\n  const [loading, setLoading] = useState(false);\n  return (\n    <div className="preview-card">\n      <h4>Noyare Quick Look</h4>\n      <p>Instant visual validation.</p>\n    </div>\n  );\n}`);
  return /* @__PURE__ */ React.createElement("div", { className: "stage" }, /* @__PURE__ */ React.createElement("span", { className: "frame-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-d" }), "QUICK LOOK \xB7 SPACEBAR PREVIEW"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 8, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--teal)" } }, "preview_window.tsx"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--fg-faint)", marginLeft: 8 } }, "342 bytes \xB7 TypeScript")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setEditing(!editing), style: { background: editing ? "var(--teal)" : "var(--bg-soft)", color: editing ? "var(--bg)" : "var(--fg)", border: `1px solid ${editing ? "var(--teal)" : "var(--line)"}`, borderRadius: 4, padding: "3px 8px", fontSize: 11, cursor: "pointer" } }, editing ? "Save" : "Edit"), /* @__PURE__ */ React.createElement("button", { style: { background: "var(--bg-soft)", color: "var(--fg)", border: "1px solid var(--line)", borderRadius: 4, padding: "3px 8px", fontSize: 11, cursor: "pointer" } }, "Crop"))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg-inset)", borderRadius: 10, padding: 16, fontFamily: "var(--mono)", fontSize: 11.5, lineHeight: 1.5, color: "oklch(0.86 0.16 130)", maxHeight: 280, overflowY: "auto", border: "1px solid var(--line)" } }, editing ? /* @__PURE__ */ React.createElement("textarea", { value: content, onChange: (e) => setContent(e.target.value), style: { width: "100%", height: 240, background: "transparent", color: "var(--fg)", border: 0, fontFamily: "var(--mono)", fontSize: 11.5, outline: "none", resize: "none" } }) : /* @__PURE__ */ React.createElement("pre", { style: { margin: 0, whiteSpace: "pre-wrap" } }, content.split("\n").map((line, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 24, color: "var(--fg-ghost)", userSelect: "none" } }, i + 1), /* @__PURE__ */ React.createElement("span", { style: { color: line.startsWith("//") ? "var(--fg-faint)" : "inherit" } }, line))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 11, color: "var(--fg-mute)" } }, /* @__PURE__ */ React.createElement("span", null, "Press SPACEBAR in Explorer to preview any file"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--teal)" } }, "Active hook"))));
}
Object.assign(window, {
  StageDashboard,
  StageProcesses,
  StagePorts,
  StageNetwork,
  StageStorage,
  StageProxy,
  StageMemory,
  StageStartup,
  StageKeepAwake,
  StageBattery,
  StageTweaks,
  StageTunnel,
  StageQuickLook
});
