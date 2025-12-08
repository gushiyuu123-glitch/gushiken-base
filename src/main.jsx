import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.jsx';

// 🟦 追加：Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      {/* 🟦 ここに追加：Analytics */}
      <Analytics />

    </BrowserRouter>
  </StrictMode>,
);

// 🟩 React描画後にrootをフェード表示（チラ見え防止）
window.addEventListener('DOMContentLoaded', () => {
  const r = document.getElementById('root');
  if (r) r.classList.add('show');
});

if (
  "serviceWorker" in navigator &&
  location.hostname !== "localhost" &&
  location.hostname !== "127.0.0.1"
) {
  navigator.serviceWorker.addEventListener('message', (evt) => {
    try {
      const data = evt.data;
      if (data && data.type === 'SW_UPDATED') {
        console.info('ServiceWorker updated to', data.version, '- reloading page to refresh cache');
        window.location.reload(true);
      }
    } catch (e) {
      console.warn('SW message handling failed', e);
    }
  });
}

if (!import.meta.env.DEV && "serviceWorker" in navigator) {
  try {
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg && reg.waiting) {
        try {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        } catch (e) {}
      }
    });
  } catch (e) {}
}

if (import.meta.env.DEV && "serviceWorker" in navigator) {
  try {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => {
        reg.unregister().catch(() => {});
      });
    });
    if (window.caches && caches.keys) {
      caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))));
    }
    console.info('Dev: cleared service workers and caches to avoid stale assets');
  } catch (e) {}
}
