/* ============================================================================
   GUSHIKEN DESIGN Core Init v5
   FOUC Prevention / Ambient Glow / Stable SW Update / Dev Cache Clear
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