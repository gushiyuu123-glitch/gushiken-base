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

  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsSolid(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        window.setTimeout(() => {
          buttonRef.current?.focus();
        }, 0);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

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
    transition-all duration-500
    ${
      isSolid
        ? "bg-black/42 backdrop-blur-[16px] shadow-[0_16px_38px_rgba(0,0,0,0.22)]"
        : "bg-black/18 backdrop-blur-[10px]"
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
              text-[0.95rem] font-light tracking-[0.24em] text-white
              transition hover:opacity-80
              focus-visible:outline-none
              focus-visible:ring-1 focus-visible:ring-white/30
              focus-visible:ring-offset-2 focus-visible:ring-offset-black
            "
          >
            GUSHIKEN DESIGN
          </Link>

          {/* ================= PC ================= */}
          <div className="hidden items-center gap-10 text-sm tracking-wider md:flex">
            {navItems.map((item) => {
              const active = pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`
                    group relative pb-2 transition-all duration-500
                    focus-visible:outline-none
                    focus-visible:ring-1 focus-visible:ring-white/30
                    focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    ${
                      active
                        ? "text-white [text-shadow:0_0_12px_rgba(255,255,255,0.12)]"
                        : "text-white/68 hover:text-white"
                    }
                  `}
                >
                  <span className="relative z-[1] transition-all duration-500 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.10)]">
                    {item.label}
                  </span>

                  {/* hover専用の下線 */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute bottom-0 left-0 h-px w-0
                      bg-gradient-to-r from-white/10 via-white/60 to-white/10
                      opacity-0 transition-all duration-500
                      group-hover:w-full group-hover:opacity-100
                    "
                  />
                </Link>
              );
            })}
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
              focus-visible:outline-none
              focus-visible:ring-1 focus-visible:ring-white/30
              focus-visible:ring-offset-4 focus-visible:ring-offset-black
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
          fixed inset-0 z-[9996] bg-black/28 backdrop-blur-[6px]
          transition-all duration-500 md:hidden
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      {/* ================= SP Panel ================= */}
      <div
        id="global-mobile-navigation"
        className={`
          fixed left-3 right-3 top-[88px]
          z-[9997] max-h-[calc(100svh-108px)] overflow-y-auto
          rounded-[22px] border border-white/10
          bg-[linear-gradient(180deg,rgba(18,18,18,0.96)_0%,rgba(10,10,10,0.96)_100%)]
          shadow-[0_18px_44px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.03)]
          backdrop-blur-[12px]
          transition-all duration-500 md:hidden
          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }
        `}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col px-5 pb-5 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[0.72rem] tracking-[0.18em] text-white/52">
              MENU
            </p>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
              className="
                relative h-8 w-8 rounded-full transition
                hover:bg-white/5
                focus-visible:outline-none
                focus-visible:ring-1 focus-visible:ring-white/30
                focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
            >
              <span className="absolute left-2 top-[15px] h-px w-4 rotate-45 bg-white/72" />
              <span className="absolute left-2 top-[15px] h-px w-4 -rotate-45 bg-white/72" />
            </button>
          </div>

          <div className="flex flex-col">
            {navItems.map((item, index) => {
              const active = pathname === item.to;

              return (
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
                    focus-visible:outline-none
                    focus-visible:ring-1 focus-visible:ring-white/30
                    focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    ${
                      active
                        ? "text-white [text-shadow:0_0_12px_rgba(255,255,255,0.12)]"
                        : "text-white/88 hover:translate-x-[2px] hover:text-white"
                    }
                  `}
                >
                  <span>{item.label}</span>
                  <span className={`${active ? "text-white/60" : "text-white/46"} text-[0.88rem]`}>
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="pt-5">
            <p className="text-[0.72rem] leading-[1.8] tracking-[0.08em] text-white/30">
              Quiet structure.
              <br />
              Clear direction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}