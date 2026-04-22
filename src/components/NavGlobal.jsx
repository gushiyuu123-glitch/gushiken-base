// src/components/NavGlobal.jsx
// ※ 現在の NavGlobal を丸ごと置換してOK

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/works", label: "WORKS" },
  { to: "/price", label: "PRICE" },
  { to: "/news", label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
];

/* Accent system (aligned to your new tokens) */
const ACCENT = "#d9b98a"; // gold
const ACCENT_DIM = "rgba(217,185,138,0.22)";
const ACCENT_BORDER = "rgba(217,185,138,0.32)";
const ACCENT_GLOW = "rgba(217,185,138,0.06)";

/* Subaccent (silver) — dot only */
const SUBACCENT = "rgba(220, 226, 235, 0.78)";
const SUBACCENT_DIM = "rgba(220, 226, 235, 0.22)";

/* =========================================================
   Body Scroll Lock (robust)
   - iOS/Safari scroll bleed 対策
   - 「閉じたのにスクロール戻らない」系を潰す
========================================================= */
function useBodyScrollLock(locked) {
  const scrollYRef = useRef(0);
  const prevRef = useRef(null);

  useEffect(() => {
    if (!locked) return;

    const body = document.body;
    const docEl = document.documentElement;

    scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    prevRef.current = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    const scrollbarW = Math.max(0, window.innerWidth - docEl.clientWidth);

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    if (scrollbarW) body.style.paddingRight = `${scrollbarW}px`;

    return () => {
      const prev = prevRef.current;
      if (!prev) return;

      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.paddingRight = prev.paddingRight;

      window.scrollTo(0, scrollYRef.current);
      prevRef.current = null;
    };
  }, [locked]);
}

export default function NavGlobal() {
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const panelRef = useRef(null);

  useBodyScrollLock(isOpen);

  /* ── Scroll → solid（RAFで軽量化） ── */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ── Close on route change ── */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* ── Close menu automatically when viewport becomes desktop ── */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeIfDesktop = () => {
      if (mq.matches) setIsOpen(false);
    };

    closeIfDesktop();

    if (mq.addEventListener) mq.addEventListener("change", closeIfDesktop);
    else mq.addListener(closeIfDesktop);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", closeIfDesktop);
      else mq.removeListener(closeIfDesktop);
    };
  }, []);

  const close = useCallback((returnFocus = false) => {
    setIsOpen(false);
    if (returnFocus) setTimeout(() => buttonRef.current?.focus(), 0);
  }, []);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  /* ── Esc close + Focus trap（Tab事故防止） ── */
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
        return;
      }

      if (e.key !== "Tab") return;

      const root = panelRef.current;
      if (!root) return;

      const focusables = Array.from(
        root.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("aria-hidden"));

      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  /* ── Focus first link ── */
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => firstLinkRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [isOpen]);

  const nav = useMemo(() => navItems, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          NAV BAR
      ═══════════════════════════════════════════ */}
      <nav
        className="fixed left-0 top-0 z-[9998] w-full transition-all duration-500"
        style={{
          height: 68,
          background: scrolled ? "rgba(6,6,6,0.80)" : "rgba(0,0,0,0.12)",
          backdropFilter: scrolled
            ? "blur(18px) saturate(130%)"
            : "blur(10px) saturate(115%)",
          WebkitBackdropFilter: scrolled
            ? "blur(18px) saturate(130%)"
            : "blur(10px) saturate(115%)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.09)"
            : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled
            ? `0 1px 0 ${ACCENT_DIM}, 0 12px 40px rgba(0,0,0,0.22)`
            : "none",
        }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-8">
          {/* Logo */}
          <Link
            to="/"
            translate="no"
            onClick={() => isOpen && close(false)}
            className="flex items-center gap-3 text-white/94 no-underline transition-opacity duration-300 hover:opacity-70
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded"
            style={{
              fontSize: "0.88rem",
              fontWeight: 300,
              letterSpacing: "0.26em",
            }}
          >
            GUSHIKEN DESIGN
            {/* Thin rule */}
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 1,
                height: 12,
                background: ACCENT_BORDER,
                flexShrink: 0,
              }}
            />
            {/* Brand sub-label */}
            <span
              aria-hidden="true"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.76rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.38)",
              }}
            >
              Web Design
            </span>
          </Link>

          {/* ── PC Links ── */}
          <div className="hidden items-center gap-11 md:flex">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group relative pb-3 no-underline transition-colors duration-300
                             focus-visible:outline-none focus-visible:rounded"
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 300,
                    letterSpacing: "0.22em",
                    color: active
                      ? "rgba(255,255,255,0.94)"
                      : "rgba(255,255,255,0.5)",
                    paddingTop: "6px",
                    position: "relative",
                  }}
                >
                  {/* ✅ Active dot (SILVER) */}
                  {active && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        background: SUBACCENT,
                        boxShadow: `0 0 0 0.5px ${SUBACCENT_DIM}`,
                        opacity: 0.55,
                      }}
                    />
                  )}

                  <span className="transition-colors duration-300 group-hover:text-white/92">
                    {item.label}
                  </span>

                  {/* Gold underline */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px transition-all duration-500"
                    style={{
                      width: active ? "100%" : "0%",
                      opacity: active ? 0.75 : 0,
                      background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
                    }}
                  />
                  {/* Hover underline */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-50"
                    style={{
                      background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── Hamburger ── */}
          <button
            ref={buttonRef}
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="global-mobile-navigation"
            onClick={toggle}
            className="relative z-[10000] flex h-[18px] w-[26px] flex-col justify-between md:hidden
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: i === 2 && !isOpen ? "60%" : "100%",
                  marginLeft: i === 2 && !isOpen ? "auto" : 0,
                }}
                className={`h-px rounded bg-white/85 transition-all duration-[400ms]
                  ${i === 0 && isOpen ? "translate-y-[8.5px] rotate-45" : ""}
                  ${i === 1 && isOpen ? "opacity-0" : ""}
                  ${i === 2 && isOpen ? "-translate-y-[8.5px] -rotate-45 !w-full !ml-0" : ""}
                `}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          MOBILE OVERLAY
      ═══════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[9996] transition-all duration-[350ms] md:hidden
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        style={{
          background: "rgba(0,0,0,0.32)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          overscrollBehavior: "contain",
        }}
        onClick={() => close(true)}
        aria-hidden={!isOpen}
      />

      {/* ═══════════════════════════════════════════
          MOBILE PANEL
      ═══════════════════════════════════════════ */}
      <div
        ref={panelRef}
        id="global-mobile-navigation"
        className={`fixed left-[14px] right-[14px] top-[84px] z-[9997]
          max-h-[calc(100svh-108px)] max-w-[400px] mx-auto
          overflow-y-auto rounded-[20px]
          transition-all duration-[350ms] md:hidden
          ${isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        style={{
          background: "rgba(10,10,10,0.96)",
          border: `1px solid rgba(255,255,255,0.09)`,
          borderTop: `1px solid ${ACCENT_DIM}`,
          boxShadow: `0 0 0 0.5px ${ACCENT_GLOW}, 0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col px-5 pb-[1.4rem] pt-[1.1rem]">
          {/* Panel header */}
          <div
            className="mb-3 flex items-center justify-between pb-[0.8rem]"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="m-0 flex items-center gap-[0.55rem]"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.36)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: 14,
                  height: 1,
                  background: ACCENT,
                  opacity: 0.55,
                  flexShrink: 0,
                }}
              />
              MENU
            </p>

            <button
              type="button"
              onClick={() => close(true)}
              aria-label="Close navigation"
              tabIndex={isOpen ? 0 : -1}
              className="relative h-8 w-8 rounded-full transition duration-300 hover:bg-white/5
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="absolute left-[9px] top-[15px] h-px w-[14px] rotate-45 rounded bg-white/62" />
              <span className="absolute left-[9px] top-[15px] h-px w-[14px] -rotate-45 rounded bg-white/62" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            {nav.map((item, i) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  ref={i === 0 ? firstLinkRef : null}
                  onClick={() => close(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className={`group flex items-center justify-between py-[15px] no-underline
                              transition-[transform,color] duration-300
                              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:rounded
                              ${active ? "" : "hover:translate-x-[3px] hover:text-white/95"}`}
                  style={{
                    borderBottom:
                      i < nav.length - 1
                        ? "1px solid rgba(255,255,255,0.055)"
                        : "none",
                    color: active ? ACCENT : "rgba(255,255,255,0.72)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      letterSpacing: "0.14em",
                    }}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`text-[0.75rem] transition-[transform,color] duration-300
                      ${active
                        ? "text-[rgba(217,185,138,0.55)]"
                        : "text-white/28 group-hover:translate-x-[2px] group-hover:text-white/48"
                      }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer tagline */}
          <div
            className="mt-4 pt-[0.9rem]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.68rem",
                lineHeight: 1.8,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              Quiet structure.&ensp;Clear direction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}