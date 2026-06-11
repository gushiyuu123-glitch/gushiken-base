// src/layouts/AppLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";   // ←あなたの実ファイル名に合わせて
import Footer from "../components/Footer";   // ←あなたの実ファイル名に合わせて

export default function AppLayout() {
  const { pathname } = useLocation();

  // ✅ /okinawa だけ “本拠地のヘッダー/フッターを描画しない”
  const hideChrome = pathname === "/okinawa";

  return (
    <>
      {!hideChrome && <Header />}
      <Outlet />
      {!hideChrome && <Footer />}
    </>
  );
}