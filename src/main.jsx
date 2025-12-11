import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

// ===========================
//  Root Render
// ===========================
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      {/* Vercel Analytics */}
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);

// ===========================
//  ① 初期フェード（FOUC防止）
// ===========================
window.addEventListener("DOMContentLoaded", () => {
  const r = document.getElementById("root");
  if (r) r.classList.add("show");
});

// ===========================
//  ② スクロール検知（Ambient Glow用）
// ===========================
let glowActivated = false;
const activateGlow = () => {
  if (!glowActivated) {
    document.body.classList.add("scrolled");
    glowActivated = true;
  }
};

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 10) activateGlow();
  },
  { passive: true }
);

// ===========================
//  ③ Service Worker 更新時の即時反映
// ===========================
if (
  "serviceWorker" in navigator &&
  location.hostname !== "localhost" &&
  location.hostname !== "127.0.0.1"
) {
  navigator.serviceWorker.addEventListener("message", (evt) => {
    try {
      const data = evt.data;
      if (data?.type === "SW_UPDATED") {
        console.info(
          "ServiceWorker updated to",
          data.version,
          "- refreshing page..."
        );
        window.location.reload(true);
      }
    } catch (e) {
      console.warn("Failed to handle SW message", e);
    }
  });
}

// ===========================
//  ④ 本番：SWが待ち状態なら即更新
// ===========================
if (!import.meta.env.DEV && "serviceWorker" in navigator) {
  try {
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg?.waiting) {
        reg.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    });
  } catch (e) {}
}

// ===========================
//  ⑤ 開発環境：SWを完全クリア（事故防止）
// ===========================
if (import.meta.env.DEV && "serviceWorker" in navigator) {
  try {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister().catch(() => {}));
    });

    if (window.caches?.keys) {
      caches.keys().then((keys) =>
        Promise.all(keys.map((k) => caches.delete(k)))
      );
    }

    console.info("Dev: cleared SW + caches to avoid stale builds");
  } catch (e) {}
}
