import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

/* =========================
   Tokens
========================= */
const NAV_HEIGHT = 68;
const SCROLL_OFFSET = NAV_HEIGHT + 12;

const ACCENT = "#d9b98a"; // gold
const ACCENT_DIM = "rgba(217,185,138,0.22)";
const ACCENT_BORDER = "rgba(217,185,138,0.32)";
const ACCENT_GLOW = "rgba(217,185,138,0.06)";

const SUBACCENT = "rgba(220, 226, 235, 0.78)"; // silver dot
const SUBACCENT_DIM = "rgba(220, 226, 235, 0.22)";

/* =========================
   Lists
========================= */
const HOME_ITEMS = [
  { href: "#works", label: "WORKS" },
  { href: "#about", label: "ABOUT" },
  { href: "#philosophy", label: "POLICY" },
  { href: "#price", label: "PRICE" },
  { href: "#contact", label: "CONTACT" },
];

const GLOBAL_ITEMS = [
  { to: "/works", label: "WORKS" },
  { to: "/price", label: "PRICE" },
  { to: "/news", label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
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

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // home active
  const [activeHash, setActiveHash] = useState("");

  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const panelRef = useRef(null);
  const pendingHashRef = useRef(null);

  /* ── Scroll → solid（RAF） ── */
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

  /* ── Route change → close + failsafe unlock ── */
  useEffect(() => {
    setOpen(false);

    // まれな残骸対策（念のため）
    document.documentElement.classList.remove("scroll-lock");
    document.body.classList.remove("scroll-lock");
  }, [pathname]);

  /* ── Close menu automatically when viewport becomes desktop ── */
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

  /* ── Scroll lock (NO body fixed) ── */
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    const panel = panelRef.current;

    const preventOutside = (e) => {
      // panel内のスクロールは許可
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

  /* ── Esc close + focus return ── */
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

  /* ── Home: hash sync ── */
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

  /* ── Home: IntersectionObserver active follow ── */
  useEffect(() => {
    if (!isHome) return;

    let observer = null;
    let timer = null;
    let tries = 0;
    const MAX_TRIES = 8;

    const setup = () => {
      const targets = HOME_ITEMS
        .map((i) => document.querySelector(i.href))
        .filter(Boolean);

      if (!targets.length) {
        tries += 1;
        if (tries <= MAX_TRIES) timer = window.setTimeout(setup, 180);
        return;
      }

      const thresholds = [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1];

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (!visible.length) return;

          visible.sort((a, b) => {
            const r = (b.intersectionRatio || 0) - (a.intersectionRatio || 0);
            if (r) return r;
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
        { rootMargin: "-35% 0px -55% 0px", threshold: thresholds }
      );

      targets.forEach((el) => observer.observe(el));
    };

    setup();

    return () => {
      if (timer) window.clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [isHome]);

  /* ── If a hash was clicked while open: close → then scroll ── */
  useEffect(() => {
    if (open) return;
    const pending = pendingHashRef.current;
    if (!pending) return;

    pendingHashRef.current = null;
    requestAnimationFrame(() => scrollToHash(pending));
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((v) => !v), []);

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

  const ui = (
    <>
      {/* NAV BAR */}
      <nav
        className="fixed left-0 top-0 z-[9998] w-full transition-all duration-500"
        style={{
          height: NAV_HEIGHT,
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
            onClick={() => open && closeMenu()}
            className="flex items-center gap-3 text-white/94 no-underline transition-opacity duration-300 hover:opacity-70
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded"
            style={{
              fontSize: "0.88rem",
              fontWeight: 300,
              letterSpacing: "0.26em",
            }}
          >
            GUSHIKEN DESIGN
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

          {/* PC Links */}
          <div className="hidden items-center gap-11 md:flex">
            {isHome
              ? homeLinks.map((item) => {
                  const active = activeHash === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleAnchorClick(item.href)}
                      className="group relative pb-3 no-underline transition-colors duration-300 focus-visible:outline-none focus-visible:rounded"
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

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-0 h-px transition-all duration-500"
                        style={{
                          width: active ? "100%" : "0%",
                          opacity: active ? 0.75 : 0,
                          background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
                        }}
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-0 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-50"
                        style={{
                          background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
                        }}
                      />
                    </a>
                  );
                })
              : globalLinks.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="group relative pb-3 no-underline transition-colors duration-300 focus-visible:outline-none focus-visible:rounded"
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

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-0 h-px transition-all duration-500"
                        style={{
                          width: active ? "100%" : "0%",
                          opacity: active ? 0.75 : 0,
                          background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
                        }}
                      />
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

          {/* Hamburger */}
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="global-mobile-navigation"
            onClick={toggleMenu}
            className="relative z-[10000] flex h-[18px] w-[26px] flex-col justify-between md:hidden
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: i === 2 && !open ? "60%" : "100%",
                  marginLeft: i === 2 && !open ? "auto" : 0,
                }}
                className={`h-px rounded bg-white/85 transition-all duration-[400ms]
                  ${i === 0 && open ? "translate-y-[8.5px] rotate-45" : ""}
                  ${i === 1 && open ? "opacity-0" : ""}
                  ${i === 2 && open ? "-translate-y-[8.5px] -rotate-45 !w-full !ml-0" : ""}
                `}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[9996] transition-all duration-[350ms] md:hidden
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        style={{
          background: "rgba(0,0,0,0.32)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
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
          max-h-[calc(100svh-108px)] max-w-[400px] mx-auto
          overflow-y-auto rounded-[20px]
          transition-all duration-[350ms] md:hidden
          ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
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
        aria-hidden={!open}
      >
        <div className="flex flex-col px-5 pb-[1.4rem] pt-[1.1rem]">
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
              onClick={() => {
                setOpen(false);
                setTimeout(() => buttonRef.current?.focus(), 0);
              }}
              aria-label="Close navigation"
              tabIndex={open ? 0 : -1}
              className="relative h-8 w-8 rounded-full transition duration-300 hover:bg-white/5
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
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
                      className="group flex items-center justify-between py-[15px] no-underline transition-[transform,color] duration-300
                                 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:rounded"
                      style={{
                        borderBottom:
                          i < homeLinks.length - 1
                            ? "1px solid rgba(255,255,255,0.055)"
                            : "none",
                        color: active ? ACCENT : "rgba(255,255,255,0.72)",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", fontWeight: 300, letterSpacing: "0.14em" }}>
                        {item.label}
                      </span>
                      <span
                        className={`text-[0.75rem] transition-[transform,color] duration-300 ${
                          active
                            ? "text-[rgba(217,185,138,0.55)]"
                            : "text-white/28 group-hover:translate-x-[2px] group-hover:text-white/48"
                        }`}
                      >
                        →
                      </span>
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
                      className={`group flex items-center justify-between py-[15px] no-underline
                                  transition-[transform,color] duration-300
                                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d9b98a]/40 focus-visible:rounded
                                  ${active ? "" : "hover:translate-x-[3px] hover:text-white/95"}`}
                      style={{
                        borderBottom:
                          i < globalLinks.length - 1
                            ? "1px solid rgba(255,255,255,0.055)"
                            : "none",
                        color: active ? ACCENT : "rgba(255,255,255,0.72)",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", fontWeight: 300, letterSpacing: "0.14em" }}>
                        {item.label}
                      </span>
                      <span
                        className={`text-[0.75rem] transition-[transform,color] duration-300 ${
                          active
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

  return createPortal(ui, document.body);
}