import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import NavGlobal from "./components/NavGlobal";
import Footer from "./components/FOOTER";

import Home from "./pages/Home";
import WorksList from "./pages/WorksList";
import PriceDetail from "./pages/PriceDetail";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <ScrollToTop />   {/* ← ココが最強 */}

  {/* TOP → Nav / 他ページ → NavGlobal */}
  {isHome ? <Nav /> : <NavGlobal />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<WorksList />} />
        <Route path="/price" element={<PriceDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return <Layout />;
}
