import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavGlobal() {
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path ? "text-gold opacity-100" : "opacity-60";

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/85 backdrop-blur-md 
        border-b border-white/10
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          px-6 py-4
          flex items-center justify-between
        "
      >
        {/* 左ロゴ */}
        <Link
          to="/"
          className="text-white tracking-[0.25em] text-sm"
          translate="no"
        >
          GUSHIKEN DESIGN
        </Link>

        {/* 右メニュー */}
        <div className="flex gap-10 text-sm tracking-wider">

          <Link to="/works" className={`${isActive("/works")} hover:opacity-100`}>
            WORKS
          </Link>

          {/* ▼ 料金ページ ▼ */}
          <Link to="/price" className={`${isActive("/price")} hover:opacity-100`}>
            PRICE
          </Link>

          {/* ▼ CONTACT は外部アンカーなので active 判定なし */}
          <a href="/#contact" className="opacity-60 hover:opacity-100">
            CONTACT
          </a>

        </div>
      </div>
    </nav>
  );
}
