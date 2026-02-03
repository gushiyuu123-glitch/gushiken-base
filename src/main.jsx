/* ============================================================================
   GUSHIKEN DESIGN Core Init v3
   (FOUC防止 / Glow発火 / SW最適化)
=========================================================================== */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

/* ============================================================================
   Render
=========================================================================== */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);

/* ============================================================================
   ① 初期フェード（FOUC 完全防止・最速）
=========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if (!root) return;

  requestAnimationFrame(() => {
    root.classList.add("show");
  });

  // 保険（300ms）
  setTimeout(() => root.classList.add("show"), 300);
});

/* ============================================================================
   ② Ambient Glow（IntersectionObserverで1回だけ発火）
=========================================================================== */
(() => {
  const sentinel = document.createElement("div");
  sentinel.style.position = "absolute";
  sentinel.style.top = "120vh"; 
  sentinel.style.height = "1px";
  sentinel.style.width = "1px";
  sentinel.style.pointerEvents = "none";
  document.body.appendChild(sentinel);

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      document.body.classList.add("scrolled");
      io.disconnect(); // ← ここで監視終了
    },
    { threshold: 0.01 }
  );

  io.observe(sentinel);
})();

/* ============================================================================
   ③ SW：更新即反映（本番のみ）
=========================================================================== */
if ("serviceWorker" in navigator) {
  const isLocal =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";

  if (!import.meta.env.DEV && !isLocal) {
    navigator.serviceWorker.addEventListener(
      "message",
      (evt) => {
        if (evt?.data?.type === "SW_UPDATED") {
          console.info("SW updated - refreshing...");
          window.location.reload(true);
        }
      },
      { once: true }
    );

    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg?.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
    });
  }

  /* ============================================================================
     ④ 開発環境のみ：SWとキャッシュを完全クリア（安全対策）
  =========================================================================== */
  if (import.meta.env.DEV) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister().catch(() => {}));
    });

    if (window.caches) {
      caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
    }

    console.info("Dev: cleared SW + caches (avoid stale builds)");
  }
}
