// Noyare Home Page Controller - Vanilla JS & Hybrid React Mounting

// Progressive enhancement class added immediately to document element
document.documentElement.classList.add("js-active");

// Safely resolve React and ReactDOM from global scope
const _React = window.React;
const _ReactDOM = window.ReactDOM;

// Ticker data for signals
const signalItems = [
  { c: "", t: "PID 17128 · noyare.exe · 53 MB" },
  { c: "v", t: "msedgewebview2.exe → 6.8% CPU" },
  { c: "c", t: "172.217 ESTABLISHED · fonts.gstatic.com" },
  { c: "a", t: "Port :8080 EXPOSED" },
  { c: "r", t: "401 telemetry.microsoft.com · blocked" },
  { c: "", t: "DNS · api.openai.com → 104.18.6.192" },
  { c: "v", t: "Memory 10.97 GB / 15.86 GB" },
  { c: "c", t: "npm cache · 522 MB reclaimable" },
  { c: "", t: "Sniffer · 162 active connections" },
  { c: "a", t: "Port :22 sshd.exe EXPOSED" },
  { c: "v", t: "Disk D:\\ · 79% used" },
  { c: "r", t: "500 analytics.local /track" }
];

// Mapping of tab IDs to global React Components from window
const stageComponents = {
  dashboard: window.StageDashboard,
  processes: window.StageProcesses,
  ports: window.StagePorts,
  network: window.StageNetwork,
  memory: window.StageMemory,
  quicklook: window.StageQuickLook,
  tweaks: window.StageTweaks,
  startup: window.StageStartup,
  insomnia: window.StageKeepAwake,
  battery: window.StageBattery,
  tunnels: window.StageTunnel,
  proxy: window.StageProxy,
  storage: window.StageStorage
};

function initHome() {
  // 1. Reveal transitions on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: "0px 0px -20px 0px" });

  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.classList.contains("in")) return;
    revealObserver.observe(el);
  });

  // 2. CountUp animations
  const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const to = parseFloat(el.getAttribute("data-to") || "0");
        const decimals = parseInt(el.getAttribute("data-decimals") || "0");
        animateCountUp(el, to, decimals);
        countUpObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".countup").forEach((el) => {
    countUpObserver.observe(el);
  });

  // 3. Populate signal ticker marquee
  const tickerTrack = document.getElementById("signal-marquee-track");
  if (tickerTrack) {
    tickerTrack.innerHTML = "";
    const list = [...signalItems, ...signalItems];
    list.forEach((item) => {
      const span = document.createElement("span");
      span.className = "signal-item";
      
      const glyph = document.createElement("span");
      glyph.className = `glyph ${item.c}`;
      
      span.appendChild(glyph);
      span.appendChild(document.createTextNode(` ${item.t}`));
      tickerTrack.appendChild(span);
    });
  }

  // 4. Setup Interactive Hero Mockup Window
  const heroRoot = document.getElementById("hero-mock-root");
  if (heroRoot && _React && _ReactDOM) {
    try {
      const currentRoot = _ReactDOM.createRoot(heroRoot);
      
      // Mount default tab (StageDashboard)
      if (window.StageDashboard) {
        currentRoot.render(_React.createElement(window.StageDashboard, null));
      }

      // Handle tab switching clicks
      const sidebar = document.getElementById("hero-sidebar");
      if (sidebar) {
        sidebar.querySelectorAll(".mock-sidebar-item").forEach((btn) => {
          btn.addEventListener("click", () => {
            sidebar.querySelectorAll(".mock-sidebar-item").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            
            const tabId = btn.getAttribute("data-tab");
            const comp = stageComponents[tabId];
            
            if (comp) {
              currentRoot.render(_React.createElement(comp, null));
            }
          });
        });
      }
    } catch (e) {
      console.warn("Failed to initialize interactive React mock window", e);
    }
  }

  // 5. Mount stages in Bento grid synchronously for zero intersection lag
  document.querySelectorAll(".stage-mini").forEach((el) => {
    if (el.id) {
      const key = el.id.replace("bento-stage-", "");
      const comp = stageComponents[key === "tunnels" ? "tunnels" : key];
      if (comp && _React && _ReactDOM) {
        try {
          const root = _ReactDOM.createRoot(el);
          root.render(_React.createElement(comp, null));
        } catch (err) {
          console.warn(`Failed to mount bento stage ${el.id}`, err);
        }
      }
    }
  });

  // 6. Mount detailed feature stages synchronously
  document.querySelectorAll(".stage").forEach((el) => {
    if (el.id && el.id !== "hero-mock-root") {
      const key = el.id.replace("feature-stage-", "");
      const comp = stageComponents[key === "tunnels" ? "tunnels" : key];
      if (comp && _React && _ReactDOM) {
        try {
          const root = _ReactDOM.createRoot(el);
          root.render(_React.createElement(comp, null));
        } catch (err) {
          console.warn(`Failed to mount feature stage ${el.id}`, err);
        }
      }
    }
  });
}

// Ensure execution regardless of script load delays
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHome);
} else {
  initHome();
}

// Helper for count up animation
function animateCountUp(el, to, decimals = 0) {
  const duration = 1600;
  const start = performance.now();
  
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(1, elapsed / duration);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
    const currentVal = to * eased;
    
    el.textContent = currentVal.toFixed(decimals);
    
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = to.toFixed(decimals);
    }
  }
  
  requestAnimationFrame(tick);
}
