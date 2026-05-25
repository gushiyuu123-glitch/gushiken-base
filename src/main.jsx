/* ============================================================================
   GUSHIKEN DESIGN Core Init v5
   FOUC Prevention / Ambient Glow / Stable SW Update / Dev Cache Clear
   + Helmet (SEO head per route)
   + Lenis (PC only) + ScrollTrigger sync
=========================================================================== */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.css";
import App from "./App.jsx";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================================
   0) Root
=========================================================================== */

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element #root was not found.");
}

/* ============================================================================
   1) Initial Reveal
   - DOMContentLoaded 済みでも確実に show を付ける
=========================================================================== */

function revealRoot() {
  const root = document.getElementById("root");
  if (!root) return;

  requestAnimationFrame(() => {
    root.classList.add("show");
  });

  // 保険：初期描画が遅れた場合でも白画面感を残さない
  window.setTimeout(() => {
    root.classList.add("show");
  }, 300);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", revealRoot, { once: true });
} else {
  revealRoot();
}

/* ============================================================================
   2) Render
=========================================================================== */

createRoot(rootEl).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

/* ============================================================================
   3) Ambient Glow
   - 120vh 到達で body.scrolled を1回だけ付与
=========================================================================== */

function initAmbientGlow() {
  if (typeof window === "undefined") return;

  if (!("IntersectionObserver" in window)) {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        document.body.classList.add("scrolled");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return;
  }

  const sentinel = document.createElement("div");

  sentinel.setAttribute("aria-hidden", "true");
  sentinel.style.position = "absolute";
  sentinel.style.top = "120vh";
  sentinel.style.left = "0";
  sentinel.style.width = "1px";
  sentinel.style.height = "1px";
  sentinel.style.pointerEvents = "none";

  document.body.appendChild(sentinel);

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return;

      document.body.classList.add("scrolled");
      io.disconnect();
      sentinel.remove();
    },
    { threshold: 0.01 }
  );

  io.observe(sentinel);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAmbientGlow, { once: true });
} else {
  initAmbientGlow();
}

/* ============================================================================
   4) Service Worker
   - 本番のみ登録
   - 開発環境では古いSW / cachesを削除
   - PWAで不安定になりやすい強制reloadをしない
=========================================================================== */

function isLocalHost() {
  return (
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "[::1]"
  );
}

async function clearDevServiceWorkersAndCaches() {
  try {
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.unregister().catch(() => {})));
    }

    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }

    console.info("[GD] Dev: cleared Service Worker + caches.");
  } catch (error) {
    console.warn("[GD] Dev cache clear failed:", error);
  }
}

function initServiceWorker() {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  const isProd = import.meta.env.PROD && !isLocalHost();

  /* --------------------------------------------------------------------------
     Dev only: 古いSWとCacheを消す
     ※ 本番URLでこのログが出たら環境判定がおかしい
  -------------------------------------------------------------------------- */
  if (!isProd) {
    clearDevServiceWorkersAndCaches();
    return;
  }

  /* --------------------------------------------------------------------------
     Production: register
     - 登録はload後
     - update検知はする
     - ただし起動中の強制reloadはしない
  -------------------------------------------------------------------------- */
  window.addEventListener(
    "load",
    () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.info("[GD] Service Worker registered.");

          // 起動時に新しいSWがないか確認
          registration.update().catch(() => {});

          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (!newWorker) return;

            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  console.info("[GD] New Service Worker installed. It will be used safely.");
                } else {
                  console.info("[GD] Service Worker installed for the first time.");
                }
              }
            });
          });
        })
        .catch((error) => {
          console.warn("[GD] Service Worker registration failed:", error);
        });
    },
    { once: true }
  );

  /* --------------------------------------------------------------------------
     Controller change
     - ここで reload しない
     - PWA / ホーム画面追加時のNEWS取得タイミング事故を避ける
  -------------------------------------------------------------------------- */
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.info("[GD] Service Worker controller changed.");
  });

  /* --------------------------------------------------------------------------
     SW側からの通知
  -------------------------------------------------------------------------- */
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event?.data?.type !== "SW_UPDATED") return;

    console.info("[GD] Service Worker updated:", event.data.version);
  });
}

initServiceWorker();

/* ============================================================================
   5) Lenis (PC only)
   - pointer:coarse（スマホ）/ 980px以下 / reduced-motion では無効
   - GSAP ScrollTrigger と同期（lenis.on(scroll) + gsap.ticker）
=========================================================================== */

function initLenisPcOnly() {
  if (typeof window === "undefined") return;

  const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mqCoarse = window.matchMedia("(pointer: coarse)");
  const mqNarrow = window.matchMedia("(max-width: 980px)");

  const canUse = () => !mqReduce.matches && !mqCoarse.matches && !mqNarrow.matches;

  // HMR/再実行でも二重起動しないように、前のインスタンスがいたら掃除
  const prev = window.__gd_lenis__;
  if (prev?.cleanup) {
    try { prev.cleanup(); } catch (_) {}
  }

  let lenis = null;
  let tickerFn = null;

  const start = () => {
    if (lenis) return;

    lenis = new Lenis({
      lerp: 0.08,          // “質量”の重さ：0.06〜0.12で調整
      smoothWheel: true,
      wheelMultiplier: 1,
      // touch系はそもそも起動しない（coarse/narrowで止める）
    });

    // Lenisのスクロール → ScrollTriggerに通知
    lenis.on("scroll", ScrollTrigger.update);

    // Lenisのrafをgsap tickerで回す（ScrollTriggerと同じ心臓に乗せる）
    tickerFn = (time) => {
      lenis?.raf?.(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // 初回はレイアウト確定後にrefresh（pin/計測ズレ防止）
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    console.info("[GD] Lenis enabled (PC only).");
  };

  const stop = () => {
    if (!lenis) return;

    try {
      // lenisのevents解除（offが無い版もあるので安全に）
      lenis.off?.("scroll", ScrollTrigger.update);
    } catch (_) {}

    if (tickerFn) gsap.ticker.remove(tickerFn);
    tickerFn = null;

    try { lenis.destroy(); } catch (_) {}
    lenis = null;

    // Lenis停止後にScrollTriggerを整える
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    console.info("[GD] Lenis disabled.");
  };

  const sync = () => {
    if (canUse()) start();
    else stop();
  };

  // 初期判定
  sync();

  // 状態変化追従（回転/リサイズ/設定変更）
  const onChange = () => sync();
  mqReduce.addEventListener?.("change", onChange);
  mqCoarse.addEventListener?.("change", onChange);
  mqNarrow.addEventListener?.("change", onChange);

  window.addEventListener("resize", onChange, { passive: true });
  window.addEventListener("orientationchange", onChange, { passive: true });

  const cleanup = () => {
    mqReduce.removeEventListener?.("change", onChange);
    mqCoarse.removeEventListener?.("change", onChange);
    mqNarrow.removeEventListener?.("change", onChange);

    window.removeEventListener("resize", onChange);
    window.removeEventListener("orientationchange", onChange);

    stop();
  };

  // グローバルに保持（HMR/再初期化用）
  window.__gd_lenis__ = { cleanup };
}

initLenisPcOnly();