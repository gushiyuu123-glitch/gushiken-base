// src/main.jsx
/* ============================================================================
   GUSHIKEN DESIGN Core Init v5.6
   - FOUC Prevention
   - Helmet Provider
   - Vercel Analytics: production only
   - Lenis / route scroll: App.jsx 側で管理
   - Stable Service Worker
   - Dev Cache Clear
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

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function isLocalHost() {
  if (!isBrowser()) return false;

  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "[::1]"
  );
}

function isProductionHost() {
  return import.meta.env.PROD && !isLocalHost();
}

const ENABLE_VERCEL_ANALYTICS = isProductionHost();

const AnalyticsLazy = ENABLE_VERCEL_ANALYTICS
  ? lazy(() =>
      import("@vercel/analytics/react").then((module) => ({
        default: module.Analytics,
      }))
    )
  : null;

/* ============================================================================
   0) Root
=========================================================================== */

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element #root was not found.");
}

/* ============================================================================
   1) Initial Reveal
   - #root.show を付けるだけ
   - スクロールやクリックには触らない
=========================================================================== */

function revealRoot() {
  const root = document.getElementById("root");
  if (!root) return;

  requestAnimationFrame(() => {
    root.classList.add("show");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", revealRoot, { once: true });
} else {
  revealRoot();
}

/* ============================================================================
   2) Ambient Glow
   - body.scrolled を一度だけ付与
   - クリック・ルーティングには関与しない
=========================================================================== */

function initAmbientGlow() {
  if (!isBrowser()) return;

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

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return;

      document.body.classList.add("scrolled");
      observer.disconnect();
      sentinel.remove();
    },
    {
      threshold: 0.01,
    }
  );

  observer.observe(sentinel);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAmbientGlow, {
    once: true,
  });
} else {
  initAmbientGlow();
}

/* ============================================================================
   3) Service Worker
=========================================================================== */

async function clearDevServiceWorkersAndCaches() {
  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();

      await Promise.all(
        registrations.map((registration) =>
          registration.unregister().catch(() => {})
        )
      );
    }

    if ("caches" in window) {
      const keys = await caches.keys();

      await Promise.all(
        keys.map((key) => caches.delete(key).catch(() => false))
      );
    }

    console.info("[GD] Dev: cleared Service Worker + caches.");
  } catch (error) {
    console.warn("[GD] Dev cache clear failed:", error);
  }
}

function initServiceWorker() {
  if (!isBrowser()) return;
  if (!("serviceWorker" in navigator)) return;

  const shouldRegister = isProductionHost();

  if (!shouldRegister) {
    clearDevServiceWorkersAndCaches();
    return;
  }

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
              if (newWorker.state !== "installed") return;

              if (navigator.serviceWorker.controller) {
                console.info(
                  "[GD] New Service Worker installed. It will be used safely."
                );
              } else {
                console.info("[GD] Service Worker installed for the first time.");
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
   4) Render
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