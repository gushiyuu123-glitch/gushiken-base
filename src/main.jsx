/* ============================================================================
   GUSHIKEN DESIGN Core Init v4
   FOUC Prevention / Ambient Glow / Safe SW Update / Dev Cache Clear
=========================================================================== */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";
import App from "./App.jsx";

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

  // 保険
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
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);

/* ============================================================================
   3) Ambient Glow
   - 120vh 到達で body.scrolled を1回だけ付与
=========================================================================== */

function initAmbientGlow() {
  if (!("IntersectionObserver" in window)) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > window.innerHeight * 0.8) {
          document.body.classList.add("scrolled");
        }
      },
      { passive: true, once: true }
    );
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
   - 新SWが有効化されたら1回だけreload
   - reload loop防止
=========================================================================== */

function initServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  const isLocal =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";

  const isProd = import.meta.env.PROD && !isLocal;

  /* --------------------------------------------------------------------------
     Dev only: 古いSWとCacheを消す
  -------------------------------------------------------------------------- */
  if (!isProd) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister().catch(() => {}));
    });

    if ("caches" in window) {
      caches.keys().then((keys) => {
        keys.forEach((key) => caches.delete(key));
      });
    }

    console.info("[GD] Dev: cleared Service Worker + caches.");
    return;
  }

  /* --------------------------------------------------------------------------
     Production: register
  -------------------------------------------------------------------------- */
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.info("[GD] Service Worker registered.");

        // すでに waiting がある場合
        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }

        // 新しいSW検知
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              newWorker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });
      })
      .catch((error) => {
        console.warn("[GD] Service Worker registration failed:", error);
      });
  });

  /* --------------------------------------------------------------------------
     Controller change → reload once
  -------------------------------------------------------------------------- */
  let refreshing = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;

    const key = "gd-sw-reloaded";

    // reload loop 防止
    if (sessionStorage.getItem(key) === "1") {
      sessionStorage.removeItem(key);
      return;
    }

    sessionStorage.setItem(key, "1");
    window.location.reload();
  });

  /* --------------------------------------------------------------------------
     SW側からの通知にも対応
  -------------------------------------------------------------------------- */
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event?.data?.type !== "SW_UPDATED") return;

    console.info("[GD] Service Worker updated:", event.data.version);
  });
}

initServiceWorker();