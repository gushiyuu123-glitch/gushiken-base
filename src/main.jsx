/* ============================================================================
   GUSHIKEN DESIGN Core Init v5.4
   - FOUC Prevention / Ambient Glow / Stable SW Update / Dev Cache Clear
   - Helmet (SEO head per route)
   - Lenis (PC only) + ScrollTrigger sync
   - ✅ Vercel Analytics: devでは “importしない” (/_vercel 404 を消す)
   - ✅ window.__gd_lenis__ を Proxy API 化（ScrollManager等と噛み合う）
=========================================================================== */

import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.css";
import App from "./App.jsx";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================================
   Helpers
=========================================================================== */

function isLocalHost() {
  return (
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "[::1]"
  );
}

// dev / preview(localhost) ではAnalyticsを出さない（/_vercel 404防止）
const ENABLE_VERCEL_ANALYTICS = import.meta.env.PROD && !isLocalHost();

// ✅ 有効時だけ lazy import（devではパッケージ自体を読まない）
const AnalyticsLazy = ENABLE_VERCEL_ANALYTICS
  ? lazy(() =>
      import("@vercel/analytics/react").then((m) => ({ default: m.Analytics }))
    )
  : null;

/* ============================================================================
   0) Root
=========================================================================== */

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root was not found.");

/* ============================================================================
   1) Initial Reveal (FOUC Prevention)
=========================================================================== */

function revealRoot() {
  const root = document.getElementById("root");
  if (!root) return;

  requestAnimationFrame(() => root.classList.add("show"));

  // 保険：初期描画が遅れた場合でも白画面感を残さない
  window.setTimeout(() => root.classList.add("show"), 300);
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
        {AnalyticsLazy && (
          <Suspense fallback={null}>
            <AnalyticsLazy />
          </Suspense>
        )}
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

/* ============================================================================
   3) Ambient Glow
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
=========================================================================== */

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

  // Dev only
  if (!isProd) {
    clearDevServiceWorkersAndCaches();
    return;
  }

  // Production
  window.addEventListener(
    "load",
    () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.info("[GD] Service Worker registered.");
          registration.update().catch(() => {});

          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (!newWorker) return;

            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  console.info(
                    "[GD] New Service Worker installed. It will be used safely."
                  );
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

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.info("[GD] Service Worker controller changed.");
  });

  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event?.data?.type !== "SW_UPDATED") return;
    console.info("[GD] Service Worker updated:", event.data.version);
  });
}

initServiceWorker();

/* ============================================================================
   5) Lenis (PC only) + Router / ScrollManager bridge
   - window.__gd_lenis__ = Proxy API
=========================================================================== */

function initLenisPcOnly() {
  if (typeof window === "undefined") return;

  const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mqCoarse = window.matchMedia("(pointer: coarse)");
  const mqNarrow = window.matchMedia("(max-width: 980px)");

  const canUse = () => !mqReduce.matches && !mqCoarse.matches && !mqNarrow.matches;

  // HMR/再実行でも二重起動しないように掃除
  const prev = window.__gd_lenis__;
  if (prev?.cleanup) {
    try {
      prev.cleanup();
    } catch (_) {}
  }

  let lenis = null;
  let tickerFn = null;

  const start = () => {
    if (lenis) return;

    lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Lenisのスクロール → ScrollTriggerに通知
    lenis.on("scroll", ScrollTrigger.update);

    // Lenisのrafをgsap tickerで回す
    tickerFn = (time) => {
      lenis?.raf?.(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    console.info("[GD] Lenis enabled (PC only).");
  };

  const stop = () => {
    if (!lenis) return;

    try {
      lenis.off?.("scroll", ScrollTrigger.update);
    } catch (_) {}

    if (tickerFn) gsap.ticker.remove(tickerFn);
    tickerFn = null;

    try {
      lenis.destroy();
    } catch (_) {}
    lenis = null;

    requestAnimationFrame(() => ScrollTrigger.refresh());
    console.info("[GD] Lenis disabled.");
  };

  const sync = () => {
    if (canUse()) start();
    else stop();
  };

  const addMQ = (mq, fn) => {
    if (mq.addEventListener) mq.addEventListener("change", fn);
    else if (mq.addListener) mq.addListener(fn);
  };
  const removeMQ = (mq, fn) => {
    if (mq.removeEventListener) mq.removeEventListener("change", fn);
    else if (mq.removeListener) mq.removeListener(fn);
  };

  // ✅ Proxy API（インスタンス直出しはしない）
  const api = {
    cleanup: () => {},

    // Router側から “確実なTOP復帰”
    scrollToTop: () => {
      api.scrollTo(0, { immediate: true });
    },

    // 汎用 scrollTo（ScrollManager / hash遷移 / 作品内導線で使える）
    scrollTo: (y, opts = {}) => {
      if (lenis?.scrollTo) {
        try {
          lenis.scrollTo(y, { immediate: true, ...opts });
          requestAnimationFrame(() => ScrollTrigger.update());
          return true;
        } catch (_) {
          // fallthrough
        }
      }
      window.scrollTo({ top: y, left: 0, behavior: "auto" });
      return false;
    },

    // 停止/再開（モーダル/FAQで背景スクロール殺す用途）
    stop: () => {
      try {
        lenis?.stop?.();
      } catch (_) {}
    },
    start: () => {
      try {
        lenis?.start?.();
      } catch (_) {}
    },

    // イベント購読（必要な箇所だけ拾える）
    on: (event, fn) => {
      try {
        lenis?.on?.(event, fn);
      } catch (_) {}
    },
    off: (event, fn) => {
      try {
        lenis?.off?.(event, fn);
      } catch (_) {}
    },

    // 現在スクロール値（ScrollManagerが参照できる）
    get scroll() {
      if (typeof lenis?.scroll === "number") return lenis.scroll;
      if (typeof lenis?.animatedScroll === "number") return lenis.animatedScroll;
      return window.scrollY || 0;
    },
    get animatedScroll() {
      if (typeof lenis?.animatedScroll === "number") return lenis.animatedScroll;
      if (typeof lenis?.scroll === "number") return lenis.scroll;
      return window.scrollY || 0;
    },

    // 有効判定
    isEnabled: () => !!lenis,

    // デバッグ用（必要なら覗けるだけ）
    get instance() {
      return lenis;
    },
  };

  // 初期判定
  sync();

  // 状態変化追従
  const onChange = () => sync();
  addMQ(mqReduce, onChange);
  addMQ(mqCoarse, onChange);
  addMQ(mqNarrow, onChange);

  window.addEventListener("resize", onChange, { passive: true });
  window.addEventListener("orientationchange", onChange, { passive: true });

  api.cleanup = () => {
    removeMQ(mqReduce, onChange);
    removeMQ(mqCoarse, onChange);
    removeMQ(mqNarrow, onChange);

    window.removeEventListener("resize", onChange);
    window.removeEventListener("orientationchange", onChange);

    stop();
  };

  window.__gd_lenis__ = api;
}

initLenisPcOnly();