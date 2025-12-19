import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

// ============================================
// Render
// ============================================
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);

// ============================================
// ① 初期フェード（FOUC 完全防止版）
// ============================================
window.addEventListener("load", () => {
  const r = document.getElementById("root");
  if (!r) return;

  // CSS 読み込み後の次のフレームで確実に付ける
  requestAnimationFrame(() => {
    r.classList.add("show");
  });

  // 保険：もし何かで遅延した場合 500ms で必ず付く
  setTimeout(() => r.classList.add("show"), 500);
});

// ============================================
// ② Ambient Glow（1度だけ発火）
// ============================================
let glowActivated = false;

const activateGlow = () => {
  if (glowActivated) return;
  glowActivated = true;
  document.body.classList.add("scrolled");
};

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 10) activateGlow();
  },
  { passive: true }
);

// ============================================
// ③ SW：更新即反映
// ============================================
if (
  "serviceWorker" in navigator &&
  location.hostname !== "localhost" &&
  location.hostname !== "127.0.0.1"
) {
  navigator.serviceWorker.addEventListener(
    "message",
    (evt) => {
      try {
        if (evt?.data?.type === "SW_UPDATED") {
          console.info("SW updated - refreshing...");
          window.location.reload(true);
        }
      } catch (e) {}
    },
    { once: true } // ← 重複防止（重要）
  );
}

// ============================================
// ④ 正式リリース環境：SW waiting → 即更新
// ============================================
if (!import.meta.env.DEV && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistration().then((reg) => {
    if (reg?.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
  });
}

// ============================================
// ⑤ 開発環境：SW完全クリア（事故防止）
// ============================================
if (import.meta.env.DEV && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => {
    regs.forEach((reg) => reg.unregister().catch(() => {}));
  });

  if (window.caches?.keys) {
    caches.keys().then((keys) => {
      keys.forEach((k) => caches.delete(k));
    });
  }

  console.info("Dev: cleared SW + caches to avoid stale builds");
}
