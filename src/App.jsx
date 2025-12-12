import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import NavGlobal from "./components/NavGlobal";
import Footer from "./components/FOOTER";

import Home from "./pages/Home";
import WorksList from "./pages/WorksList";
import PriceDetail from "./pages/PriceDetail";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";

import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

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

      {/* ホームだけ特別なナビ、それ以外はグローバル */}
      {isHome ? <Nav /> : <NavGlobal />}

    <main id="page-root">
  <Routes>
    <Route path="/" element={<Home />} />

    {/* 制作実績 */}
    <Route path="/works" element={<WorksList />} />

    {/* 料金ページ */}
    <Route path="/price" element={<PriceDetail />} />

    {/* お問い合わせ */}
    <Route path="/contact" element={<Contact />} />

    {/* 法務ページ（ここに入れる） */}
    <Route path="/terms" element={<Terms />} />
    <Route path="/refund" element={<Refund />} />
    <Route path="/legal" element={<Legal />} />
    <Route path="/privacy" element={<Privacy />} />

  </Routes>
</main>


      {/* 全ページ共通フッター */}
      <Footer />
    </>
  );
}

// ================================
// App（最終的に返すルート）
// ================================
export default function App() {
  return <Layout />;
}
