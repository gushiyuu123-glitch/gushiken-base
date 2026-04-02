import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/works", label: "WORKS" },
  { to: "/price", label: "PRICE" },
  { to: "/news", label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
];

export default function NavGlobal() {
  const { pathname } = useLocation();

  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

  const isActive = (path) =>
    pathname === path
      ? "text-[#d7c39a] opacity-100"
      : "text-white/68 hover:text-white hover:opacity-100 opacity-100";

  /* ----------------------------------------------------
     Scroll：透明 → 濃く
  ---------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setIsSolid(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ----------------------------------------------------
     SP open 時：背景スクロール禁止
  ---------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ----------------------------------------------------
     ルート変更時は閉じる
  ---------------------------------------------------- */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* ----------------------------------------------------
     Esc で閉じる
  ---------------------------------------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  /* ----------------------------------------------------
     開いたら最初のリンクへ
  ---------------------------------------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 80);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ================= NAV BAR ================= */}
      <nav
        className={`
          fixed left-0 top-0 z-[9998] w-full
          border-b transition-all duration-500
          ${
            isSolid
              ? "bg-black/65 backdrop-blur-[18px] border-white/10 shadow-[0_8px_22px_rgba(0,0,0,0.32)]"
              : "bg-black/35 backdrop-blur-[14px] border-white/5"
          }
        `}
      >
        <div
          className="
            mx-auto flex max-w-6xl items-center justify-between
            px-6 py-4
          "
        >
          {/* ロゴ */}
          <Link
            to="/"
            translate="no"
            className="
              text-[0.95rem] font-light tracking-[0.28em] text-white
              transition hover:opacity-80
            "
          >
            GUSHIKEN DESIGN
          </Link>

          {/* ================= PC ================= */}
          <div className="hidden items-center gap-10 text-sm tracking-wider md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  relative pb-2 transition
                  ${isActive(item.to)}
                  after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
                  after:bg-gradient-to-r after:from-[#d7c39a]/20 after:to-[#d7c39a]
                  after:transition-all after:duration-500
                  hover:after:w-full
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ================= SP Hamburger ================= */}
          <button
            ref={buttonRef}
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="global-mobile-navigation"
            onClick={() => setIsOpen((v) => !v)}
            className="
              relative z-[10000] flex h-[20px] w-[26px] flex-col
              justify-between md:hidden
            "
          >
            <span
              className={`
                h-[1.5px] w-full rounded bg-white transition duration-300
                ${isOpen ? "translate-y-[9px] rotate-45" : ""}
              `}
            />
            <span
              className={`
                h-[1.5px] w-full rounded bg-white transition duration-300
                ${isOpen ? "opacity-0" : ""}
              `}
            />
            <span
              className={`
                h-[1.5px] w-full rounded bg-white transition duration-300
                ${isOpen ? "-translate-y-[9px] -rotate-45" : ""}
              `}
            />
          </button>
        </div>
      </nav>

      {/* ================= SP Overlay ================= */}
      <div
        className={`
          fixed inset-0 z-[9996] bg-black/35 backdrop-blur-[6px]
          transition-all duration-500 md:hidden
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      {/* ================= SP Panel ================= */}
      <div
        id="global-mobile-navigation"
        ref={menuRef}
        className={`
          fixed bottom-3 left-3 right-3 top-[82px]
          z-[9997] rounded-[22px]
          border border-white/10
          bg-[linear-gradient(180deg,rgba(18,18,18,0.96)_0%,rgba(10,10,10,0.96)_100%)]
          shadow-[0_18px_44px_rgba(0,0,0,0.34),0_0_0_1px_rgba(220,190,140,0.05)_inset]
          backdrop-blur-[16px]
          transition-all duration-500 md:hidden
          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }
        `}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col px-5 pb-5 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[0.72rem] tracking-[0.18em] text-[#d7c39a]/75">
              MENU
            </p>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
              className="
                relative h-8 w-8 rounded-full transition
                hover:bg-white/5
              "
            >
              <span className="absolute left-2 top-[15px] h-px w-4 rotate-45 bg-white/72" />
              <span className="absolute left-2 top-[15px] h-px w-4 -rotate-45 bg-white/72" />
            </button>
          </div>

          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                ref={index === 0 ? firstLinkRef : null}
                onClick={closeMenu}
                className={`
                  flex items-center justify-between
                  border-b border-white/8
                  py-[15px]
                  text-[1rem] tracking-[0.16em]
                  transition
                  ${
                    pathname === item.to
                      ? "text-[#d7c39a]"
                      : "text-white/88 hover:translate-x-[2px] hover:text-white"
                  }
                `}
              >
                <span>{item.label}</span>
                <span className="text-[0.88rem] text-[#d7c39a]/72">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <p className="text-[0.72rem] leading-[1.8] tracking-[0.08em] text-white/30">
              NOT INDEXED. NOT ANNOUNCED.
              <br />
              ONLY DISCOVERED.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}