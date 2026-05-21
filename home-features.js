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
Object.assign(window, {
  StageDashboard,
  StageProcesses,
  StagePorts,
  StageNetwork,
  StageStorage,
  StageProxy
});
