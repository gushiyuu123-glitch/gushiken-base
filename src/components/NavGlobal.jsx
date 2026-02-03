// src/components/NavGlobal.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavGlobal() {
  const { pathname } = useLocation();

  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /* ----------------------------------------------------
     Active 判定
  ---------------------------------------------------- */
  const isActive = (path) =>
    pathname === path
      ? "text-[#d7c39a] opacity-100"
      : "opacity-60 hover:opacity-100";

  /* ----------------------------------------------------
     Scroll：透明 → 濃く（Silent Glass）
  ---------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setIsSolid(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ----------------------------------------------------
     SP open 時：背景スクロール禁止
  ---------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* ================= NAV BAR（Glass × Gold） ================= */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-[9998]
          border-b transition-all duration-500

          ${isSolid
            ? "bg-black/65 backdrop-blur-[18px] border-white/10 shadow-[0_8px_22px_rgba(0,0,0,0.32)]"
            : "bg-black/35 backdrop-blur-[14px] border-white/5"}
        `}
      >
        <div
          className="
            max-w-6xl mx-auto
            px-6 py-4
            flex items-center justify-between
          "
        >
          {/* ロゴ */}
          <Link
            to="/"
            translate="no"
            className="
              text-white text-[0.95rem]
              tracking-[0.28em]
              font-light
              hover:opacity-80 transition
            "
          >
            GUSHIKEN DESIGN
          </Link>

          {/* ================= PC ================= */}
          <div className="hidden md:flex gap-10 text-sm tracking-wider text-white">
            <Link to="/works" className={isActive("/works")}>
              WORKS
            </Link>

            <Link to="/price" className={isActive("/price")}>
              PRICE
            </Link>

            <Link to="/contact" className={isActive("/contact")}>
              CONTACT
            </Link>
          </div>

          {/* ================= SP Hamburger ================= */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden flex flex-col justify-between w-[26px] h-[20px]"
          >
            <span
              className={`
                h-[2px] w-full bg-white rounded transition
                ${isOpen ? "translate-y-[9px] rotate-45" : ""}
              `}
            />
            <span
              className={`
                h-[2px] w-full bg-white rounded transition
                ${isOpen ? "opacity-0" : ""}
              `}
            />
            <span
              className={`
                h-[2px] w-full bg-white rounded transition
                ${isOpen ? "-translate-y-[9px] -rotate-45" : ""}
              `}
            />
          </button>
        </div>
      </nav>

      {/* ================= SP Overlay Menu ================= */}
      <div
        className={`
          fixed top-[70px] left-0 w-full h-[calc(100vh-70px)]
          bg-black/90 backdrop-blur-[22px]
          flex flex-col
          transform transition-all duration-500
          z-[9997]
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col mt-3">
          <Link
            to="/works"
            onClick={() => setIsOpen(false)}
            className={`
              px-8 py-5 border-b border-white/10 text-white
              tracking-[0.20em] text-[1.05rem]
              ${pathname === "/works" ? "text-[#d7c39a]" : "text-white/85"}
            `}
          >
            WORKS
          </Link>

          <Link
            to="/price"
            onClick={() => setIsOpen(false)}
            className={`
              px-8 py-5 border-b border-white/10 text-white
              tracking-[0.20em] text-[1.05rem]
              ${pathname === "/price" ? "text-[#d7c39a]" : "text-white/85"}
            `}
          >
            PRICE
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`
              px-8 py-5 border-b border-white/10 text-white
              tracking-[0.20em] text-[1.05rem]
              ${pathname === "/contact" ? "text-[#d7c39a]" : "text-white/85"}
            `}
          >
            CONTACT
          </Link>
        </div>

        {/* フッターテキスト */}
        <div
          className="
            mt-auto pb-10 pt-6
            text-center text-white/35
            tracking-[0.32em]
            text-[0.7rem]
          "
        >
          NOT INDEXED. NOT ANNOUNCED. ONLY DISCOVERED.
        </div>
      </div>
    </>
  );
}
