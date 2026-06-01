/* ============================================================================
   GUSHIKEN DESIGN Core Init v5.5 (Lenis separated)
   - FOUC Prevention / Ambient Glow / Stable SW Update / Dev Cache Clear
   - Helmet (SEO head per route)
   - ✅ Vercel Analytics: devでは “importしない” (/_vercel 404 を消す)
   - ✅ Lenis/ScrollTrigger は Lenis.jsx（App直下）へ移管
=========================================================================== */

import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App.jsx";

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

  // ✅ 1回で十分（二重実行は削除）
  requestAnimationFrame(() => root.classList.add("show"));
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