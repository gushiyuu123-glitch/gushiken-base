// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav";

import NavGlobal from "./components/NavGlobal";

import Footer from "./components/FOOTER";

import Home from "./pages/Home";

import WorksList from "./pages/WorksList";
import WorkDetail from "./pages/WorkDetail";
import NoirLux from "./pages/works/NoirLux";


import PriceDetail from "./pages/PriceDetail";

import Contact from "./pages/Contact";

import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Legal from "./pages/Legal";

import Privacy from "./pages/Privacy";

import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";

import ScrollToTop from "./components/ScrollToTop";

import Layer0 from "./pages/Layer0";
// ================================
// Layout（全ページ共通レイアウト）
// ================================
function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      {/* ページ遷移ごとに位置リセット */}
      <ScrollToTop />

      {/* ホームだけ特別ナビ、それ以外はグローバル */}
      {isHome ? <Nav /> : <NavGlobal />}

      <main id="page-root">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 制作実績 */}
          <Route path="/works" element={<WorksList />} />
<Route path="/works/:slug" element={<WorkDetail />} />
<Route path="/works/noir-lux" element={<NoirLux />} />


          {/* 料金 */}
          <Route path="/price" element={<PriceDetail />} />

          {/* お問い合わせ */}
          <Route path="/contact" element={<Contact />} />

          {/* 法務 */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* ニュース */}
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/layer0" element={<Layer0 />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}


// ================================
// Silent UI v4.2 — グローバルフェード管理
// ================================
export default function App() {

  // aq-fade → aq-show を全ページ共通で管理
  useEffect(() => {
    const runFade = () => {
      const els = document.querySelectorAll(".aq-fade");
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;

              // ランダムディレイ（Silent UI）
              const d = Math.random() * 120;
              el.style.animationDelay = `${d}ms`;

              el.classList.add("aq-show");
              io.unobserve(el);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };

    // 初回&ルーティング変更ごとに実行
    runFade();

    // MutationObserver → 画面切り替え後にDOM変化があっても拾う
    const mo = new MutationObserver(runFade);
    mo.observe(document.getElementById("page-root"), {
      childList: true,
      subtree: true,
    });

    return () => mo.disconnect();
  }, []);

  return <Layout />;
}
