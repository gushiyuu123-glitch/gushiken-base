// src/components/NavGlobal.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

/* =========================
   Tokens
========================= */
const NAV_HEIGHT = 68;
const SCROLL_OFFSET = NAV_HEIGHT + 12;

const LOGO_SRC = "/logo-gd.png";

const ACCENT = "#d9b98a";
const ACCENT_SOFT = "rgba(217,185,138,0.18)";
const ACCENT_DIM = "rgba(217,185,138,0.24)";
const ACCENT_GLOW = "rgba(217,185,138,0.075)";

const WHITE = "rgba(255,255,255,0.92)";
const WHITE_DIM = "rgba(255,255,255,0.36)";

/* =========================
   Lists
========================= */
const HOME_ITEMS = [
  { href: "#works", label: "WORKS" },
  { href: "#about", label: "ABOUT" },
  { href: "#philosophy", label: "POLICY" },
  { href: "#price", label: "PRICE" },
  { href: "#contact", label: "CONTACT", emphasis: true },
];

const GLOBAL_ITEMS = [
  { to: "/works", label: "WORKS" },
  { to: "/price", label: "PRICE" },
  { to: "/news", label: "NEWS" },
  { to: "/contact", label: "CONTACT", emphasis: true },
];

/* =========================
   helpers
========================= */
function scrollToHash(hash) {
  if (!hash?.startsWith("#")) return;

  const el = document.querySelector(hash);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + (window.scrollY || 0) - SCROLL_OFFSET;

  const safeTop = Math.max(0, Math.round(top));

  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  window.scrollTo({ top: safeTop, behavior: "smooth" });
}

export default function NavGlobal({ mode }) {
  const { pathname } = useLocation();
  const isHome = mode ? mode === "home" : pathname === "/";

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const panelRef = useRef(null);
  const pendingHashRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ── Scroll → solid ── */
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ── Route change → close + unlock ── */
  useEffect(() => {
    setOpen(false);
    document.documentElement.classList.remove("scroll-lock");
    document.body.classList.remove("scroll-lock");
  }, [pathname]);

  /* ── Close when desktop ── */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const closeIfDesktop = () => {
      if (mq.matches) setOpen(false);
    };

    closeIfDesktop();

    if (mq.addEventListener) mq.addEventListener("change", closeIfDesktop);
    else mq.addListener(closeIfDesktop);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", closeIfDesktop);
      else mq.removeListener(closeIfDesktop);
    };
  }, []);

  /* ── Scroll lock ── */
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;

    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    const panel = panelRef.current;

    const preventOutside = (e) => {
      if (panel && panel.contains(e.target)) return;
      e.preventDefault();
    };

    document.addEventListener("touchmove", preventOutside, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventOutside);
      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");
    };
  }, [open]);

  /* ── Esc close ── */
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        setTimeout(() => buttonRef.current?.focus(), 0);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* ── Focus first link on open ── */
  useEffect(() => {
    if (!open) return;

    const t = setTimeout(() => firstLinkRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [open]);

  /* ── Home hash sync ── */
  useEffect(() => {
    if (!isHome) return;

    const sync = () => setActiveHash(window.location.hash || "");
    sync();

    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);

    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [isHome]);

  /* ── Home IntersectionObserver active follow ── */
  useEffect(() => {
    if (!isHome) return;

    let observer = null;
    let timer = null;
    let tries = 0;
    const MAX_TRIES = 8;

    const setup = () => {
      const targets = HOME_ITEMS
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      if (!targets.length) {
        tries += 1;
        if (tries <= MAX_TRIES) timer = window.setTimeout(setup, 180);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (!visible.length) return;

          visible.sort((a, b) => {
            const ratio = (b.intersectionRatio || 0) - (a.intersectionRatio || 0);
            if (ratio) return ratio;

            return (
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
            );
          });

          const id = visible[0]?.target?.id;
          if (!id) return;

          const next = `#${id}`;
          setActiveHash((prev) => (prev === next ? prev : next));
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
        }
      );

      targets.forEach((el) => observer.observe(el));
    };

    setup();

    return () => {
      if (timer) window.clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [isHome]);

  /* ── Close → then scroll ── */
  useEffect(() => {
    if (open) return;

    const pending = pendingHashRef.current;
    if (!pending) return;

    pendingHashRef.current = null;
    requestAnimationFrame(() => scrollToHash(pending));
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((value) => !value), []);

  const handleAnchorClick = useCallback(
    (href) => (e) => {
      e.preventDefault();

      setActiveHash((prev) => (prev === href ? prev : href));

      if (open) {
        pendingHashRef.current = href;
        setOpen(false);
        return;
      }

      scrollToHash(href);
    },
    [open]
  );

  const homeLinks = useMemo(() => HOME_ITEMS, []);
  const globalLinks = useMemo(() => GLOBAL_ITEMS, []);

  const renderPcHomeLink = (item, index) => {
    const active = activeHash === item.href;

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={handleAnchorClick(item.href)}
        className="gd-nav-sharp group relative pb-3 no-underline transition-colors duration-300 focus-visible:outline-none focus-visible:rounded"
        style={{
          "--nav-delay": `${0.24 + index * 0.07}s`,
          fontSize: "0.74rem",
          fontWeight: 300,
          letterSpacing: "0.22em",
          color: active
            ? WHITE
            : item.emphasis
              ? "rgba(217,185,138,0.72)"
              : "rgba(255,255,255,0.50)",
          paddingTop: "6px",
          position: "relative",
        }}
      >
        <span className="relative z-[1] transition-colors duration-300 group-hover:text-white/92">
          {item.label}
        </span>

        <span className="gd-nav-sheen" aria-hidden="true" />
        <NavUnderline active={active} />
      </a>
    );
  };

  const renderPcGlobalLink = (item, index) => {
    const active = pathname === item.to;

    return (
      <Link
        key={item.to}
        to={item.to}
        className="gd-nav-sharp group relative pb-3 no-underline transition-colors duration-300 focus-visible:outline-none focus-visible:rounded"
        style={{
          "--nav-delay": `${0.24 + index * 0.07}s`,
          fontSize: "0.74rem",
          fontWeight: 300,
          letterSpacing: "0.22em",
          color: active
            ? WHITE
            : item.emphasis
              ? "rgba(217,185,138,0.72)"
              : "rgba(255,255,255,0.50)",
          paddingTop: "6px",
          position: "relative",
        }}
      >
        <span className="relative z-[1] transition-colors duration-300 group-hover:text-white/92">
          {item.label}
        </span>

        <span className="gd-nav-sheen" aria-hidden="true" />
        <NavUnderline active={active} />
      </Link>
    );
  };

  if (!mounted) return null;

  const ui = (
    <>
      <style>{`
        html.scroll-lock,
        body.scroll-lock {
          overflow: hidden;
          overscroll-behavior: none;
        }

        .gd-nav-sharp {
          opacity: 0;
          transform: translate3d(-10px, 0, 0) scale(0.985);
          filter: brightness(0.9);
          clip-path: inset(0 100% 0 0);
          animation: gdNavSharpIn 0.72s cubic-bezier(.22,.56,.18,1) var(--nav-delay, 0s) forwards;
          will-change: opacity, transform, filter, clip-path;
        }

        .gd-nav-sheen {
          position: absolute;
          left: -10%;
          top: 50%;
          z-index: 0;
          width: 42%;
          height: 1px;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0),
            rgba(255,255,255,0.46),
            rgba(217,185,138,0.32),
            rgba(255,255,255,0)
          );
          opacity: 0;
          transform: translate3d(-18px, -50%, 0) scaleX(0.25);
          transform-origin: left center;
          animation: gdNavSheen 0.56s cubic-bezier(.22,.56,.18,1) calc(var(--nav-delay, 0s) + 0.15s) forwards;
        }

        .gd-nav-logo-seal {
          position: relative;
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
        }

        .gd-nav-logo-mask {
          width: 100%;
          height: 100%;
          display: block;

          background:
            linear-gradient(
              145deg,
              rgba(225, 216, 196, 0.92) 0%,
              rgba(196, 177, 143, 0.90) 24%,
              rgba(149, 126, 91, 0.88) 50%,
              rgba(218, 207, 186, 0.92) 73%,
              rgba(130, 109, 79, 0.88) 100%
            );

          -webkit-mask: var(--logo-url) center / contain no-repeat;
          mask: var(--logo-url) center / contain no-repeat;

          filter:
            drop-shadow(0 0 0.5px rgba(255,255,255,0.08))
            drop-shadow(0 2px 8px rgba(0,0,0,0.24))
            drop-shadow(0 0 16px rgba(217,185,138,0.035));

          opacity: 0.92;

          transition:
            opacity 0.4s ease,
            filter 0.4s ease,
            transform 0.4s ease;
        }

        .gd-nav-logo-seal::after {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 9999px;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(217,185,138,0.08),
              rgba(217,185,138,0.025) 38%,
              transparent 70%
            );
          opacity: 0.48;
          filter: blur(0.2px);
        }

        .gd-nav-logo-seal:hover .gd-nav-logo-mask {
          opacity: 1;
          transform: translateY(-0.5px);
          filter:
            drop-shadow(0 0 0.5px rgba(255,255,255,0.12))
            drop-shadow(0 3px 10px rgba(0,0,0,0.28))
            drop-shadow(0 0 18px rgba(217,185,138,0.055));
        }

        .gd-nav-mobile-link {
          transform: translate3d(0, 6px, 0);
          opacity: 0;
        }

        .gd-nav-panel-open .gd-nav-mobile-link {
          animation: gdNavMobileIn 0.62s cubic-bezier(.22,.56,.18,1) forwards;
        }

        @keyframes gdNavSharpIn {
          0% {
            opacity: 0;
            transform: translate3d(-10px, 0, 0) scale(0.985);
            filter: brightness(0.88);
            clip-path: inset(0 100% 0 0);
          }

          68% {
            opacity: 1;
            filter: brightness(1.06);
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: brightness(1);
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes gdNavSheen {
          0% {
            opacity: 0;
            transform: translate3d(-18px, -50%, 0) scaleX(0.25);
          }

          24% {
            opacity: 0.72;
          }

          100% {
            opacity: 0;
            transform: translate3d(92px, -50%, 0) scaleX(1);
          }
        }

        @keyframes gdNavMobileIn {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @media (max-width: 767px) {
          .gd-nav-logo-seal {
            width: 30px;
            height: 30px;
          }

          .gd-nav-sheen {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gd-nav-sharp,
          .gd-nav-sheen,
          .gd-nav-mobile-link {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            clip-path: none !important;
          }
        }
      `}</style>

      {/* NAV BAR */}
      <nav
        className="fixed left-0 top-0 z-[9998] w-full transition-all duration-500"
        style={{
          height: NAV_HEIGHT,
          background: scrolled ? "rgba(6,6,6,0.84)" : "rgba(0,0,0,0.10)",
          backdropFilter: scrolled
            ? "blur(18px) saturate(130%)"
            : "blur(10px) saturate(115%)",
          WebkitBackdropFilter: scrolled
            ? "blur(18px) saturate(130%)"
            : "blur(10px) saturate(115%)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.09)"
            : "1px solid rgba(255,255,255,0.045)",
          boxShadow: scrolled
            ? `0 1px 0 ${ACCENT_SOFT}, 0 12px 42px rgba(0,0,0,0.28)`
            : "none",
        }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <Link
            to="/"
            translate="no"
            onClick={() => open && closeMenu()}
            className="group flex items-center gap-3 text-white/94 no-underline transition-opacity duration-300 hover:opacity-86
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded"
            aria-label="GUSHIKEN DESIGN Home"
          >
            <span
              className="gd-nav-sharp gd-nav-logo-seal"
              aria-hidden="true"
              style={{ "--nav-delay": "0.04s" }}
            >
              <span
                className="gd-nav-logo-mask"
                style={{ "--logo-url": `url(${LOGO_SRC})` }}
              />
              <span className="gd-nav-sheen" aria-hidden="true" />
            </span>

            <span className="flex flex-col gap-[0.14rem] leading-none">
              <span
                className="gd-nav-sharp relative inline-block"
                style={{
                  "--nav-delay": "0.10s",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  letterSpacing: "0.24em",
                  color: "rgba(255,255,255,0.90)",
                }}
              >
                GUSHIKEN DESIGN
                <span className="gd-nav-sheen" aria-hidden="true" />
              </span>

              <span
                className="gd-nav-sharp relative hidden sm:inline-block"
                style={{
                  "--nav-delay": "0.16s",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "0.7rem",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  color: "rgba(201,190,169,0.58)",
                }}
              >
                Web Design / Okinawa
                <span className="gd-nav-sheen" aria-hidden="true" />
              </span>
            </span>
          </Link>

          {/* PC Links */}
          <div className="hidden items-center gap-10 md:flex">
            {isHome
              ? homeLinks.map(renderPcHomeLink)
              : globalLinks.map(renderPcGlobalLink)}
          </div>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="global-mobile-navigation"
            onClick={toggleMenu}
            className="relative z-[10000] flex h-[20px] w-[28px] flex-col justify-between md:hidden
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: i === 2 && !open ? "58%" : "100%",
                  marginLeft: i === 2 && !open ? "auto" : 0,
                  background:
                    i === 1
                      ? "rgba(201,190,169,0.68)"
                      : "rgba(255,255,255,0.78)",
                }}
                className={`h-px rounded transition-all duration-[420ms]
                  ${i === 0 && open ? "translate-y-[9.5px] rotate-45" : ""}
                  ${i === 1 && open ? "opacity-0" : ""}
                  ${i === 2 && open ? "-translate-y-[9.5px] -rotate-45 !w-full !ml-0" : ""}
                `}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[9996] transition-all duration-[360ms] md:hidden
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        style={{
          background: "rgba(0,0,0,0.42)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          overscrollBehavior: "contain",
        }}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      {/* MOBILE PANEL */}
      <div
        ref={panelRef}
        id="global-mobile-navigation"
        className={`fixed left-[14px] right-[14px] top-[84px] z-[9997]
          mx-auto max-h-[calc(100svh-108px)] max-w-[404px]
          overflow-y-auto rounded-[22px]
          transition-all duration-[360ms] md:hidden
          ${open ? "gd-nav-panel-open translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
        style={{
          background:
            "radial-gradient(circle at 14% 0%, rgba(217,185,138,0.055), transparent 32%), linear-gradient(180deg, rgba(12,12,12,0.985), rgba(7,7,7,0.965))",
          border: "1px solid rgba(255,255,255,0.085)",
          borderTop: `1px solid ${ACCENT_DIM}`,
          boxShadow: `
            0 0 0 0.5px ${ACCENT_GLOW},
            0 24px 70px rgba(0,0,0,0.54),
            inset 0 1px 0 rgba(255,255,255,0.045)
          `,
          backdropFilter: "blur(16px) saturate(125%)",
          WebkitBackdropFilter: "blur(16px) saturate(125%)",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex flex-col px-5 pb-[1.35rem] pt-[1.1rem]">
          <div
            className="mb-3 flex items-center justify-between pb-[0.85rem]"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="m-0 flex items-center gap-[0.55rem]"
              style={{
                fontSize: "0.64rem",
                letterSpacing: "0.28em",
                color: WHITE_DIM,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: 16,
                  height: 1,
                  background: `linear-gradient(90deg, ${ACCENT}, rgba(255,255,255,0.18))`,
                  opacity: 0.62,
                  flexShrink: 0,
                }}
              />
              MENU
            </p>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTimeout(() => buttonRef.current?.focus(), 0);
              }}
              aria-label="Close navigation"
              tabIndex={open ? 0 : -1}
              className="relative h-8 w-8 rounded-full transition duration-300 hover:bg-white/5
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.018)",
              }}
            >
              <span className="absolute left-[9px] top-[15px] h-px w-[14px] rotate-45 rounded bg-white/62" />
              <span className="absolute left-[9px] top-[15px] h-px w-[14px] -rotate-45 rounded bg-white/62" />
            </button>
          </div>

          <div className="flex flex-col">
            {isHome
              ? homeLinks.map((item, i) => {
                  const active = activeHash === item.href;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      ref={i === 0 ? firstLinkRef : null}
                      tabIndex={open ? 0 : -1}
                      onClick={handleAnchorClick(item.href)}
                      className="gd-nav-mobile-link group flex items-center justify-between py-[15px] no-underline transition-[transform,color] duration-300
                                 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:rounded"
                      style={{
                        animationDelay: `${0.04 + i * 0.055}s`,
                        borderBottom:
                          i < homeLinks.length - 1
                            ? "1px solid rgba(255,255,255,0.055)"
                            : "none",
                        color: active
                          ? ACCENT
                          : item.emphasis
                            ? "rgba(217,185,138,0.72)"
                            : "rgba(255,255,255,0.74)",
                      }}
                    >
                      <MobileLinkInner label={item.label} active={active} />
                    </a>
                  );
                })
              : globalLinks.map((item, i) => {
                  const active = pathname === item.to;

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      ref={i === 0 ? firstLinkRef : null}
                      tabIndex={open ? 0 : -1}
                      onClick={() => setOpen(false)}
                      className={`gd-nav-mobile-link group flex items-center justify-between py-[15px] no-underline
                                  transition-[transform,color] duration-300
                                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:rounded
                                  ${active ? "" : "hover:translate-x-[3px] hover:text-white/95"}`}
                      style={{
                        animationDelay: `${0.04 + i * 0.055}s`,
                        borderBottom:
                          i < globalLinks.length - 1
                            ? "1px solid rgba(255,255,255,0.055)"
                            : "none",
                        color: active
                          ? ACCENT
                          : item.emphasis
                            ? "rgba(217,185,138,0.72)"
                            : "rgba(255,255,255,0.74)",
                      }}
                    >
                      <MobileLinkInner label={item.label} active={active} />
                    </Link>
                  );
                })}
          </div>

          <div
            className="mt-4 pt-[0.95rem]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.67rem",
                lineHeight: 1.8,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.24)",
              }}
            >
              Structure, atmosphere, and trust.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(ui, document.body);
}

function NavUnderline({ active }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px transition-all duration-500"
        style={{
          width: active ? "100%" : "0%",
          opacity: active ? 0.76 : 0,
          background: `linear-gradient(to right, transparent, ${ACCENT}, rgba(255,255,255,0.18), transparent)`,
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-50"
        style={{
          background: `linear-gradient(to right, transparent, ${ACCENT}, rgba(255,255,255,0.16), transparent)`,
        }}
      />
    </>
  );
}

function MobileLinkInner({ label, active }) {
  return (
    <>
      <span
        style={{
          fontSize: "0.9rem",
          fontWeight: 300,
          letterSpacing: "0.14em",
        }}
      >
        {label}
      </span>

      <span
        className={`text-[0.75rem] transition-[transform,color] duration-300 ${
          active
            ? "text-[rgba(217,185,138,0.58)]"
            : "text-white/28 group-hover:translate-x-[2px] group-hover:text-white/50"
        }`}
      >
        →
      </span>
    </>
  );
}