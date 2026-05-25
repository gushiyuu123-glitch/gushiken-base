// src/components/NavGlobal.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import styles from "./Nav.module.css";

const LOGO_SRC = "/logo-gd.png";
const FALLBACK_NAV_HEIGHT = 68;

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

// 監視専用（Heroは「下線を消す」判定にだけ使う）
const OBSERVE_IDS = ["works", "about", "philosophy", "price", "news", "contact", "footer"];
const DARK_HASHES = new Set(["#works", "#news", "#footer"]);
const DARK_ROUTES = new Set(["/works", "/news"]);

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
}

/* =========================================================
   Body Scroll Lock (fixed body)
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

/* =========================================================
   Scroll helpers (Lenis safe)
========================================================= */
function scrollToY(y) {
  const safeY = Math.max(0, Math.round(y));
  const reduce = prefersReducedMotion();
  const lenis = window?.__gd_lenis;

  if (lenis?.scrollTo) {
    if (reduce) lenis.scrollTo(safeY, { immediate: true });
    else lenis.scrollTo(safeY, { duration: 0.78, easing: (t) => 1 - Math.pow(1 - t, 3) });
    return;
  }

  window.scrollTo({ top: safeY, behavior: reduce ? "auto" : "smooth" });
}

function scrollToHash(hash, offsetPx) {
  if (!hash?.startsWith("#")) return;

  const el = document.querySelector(hash);
  if (!el) return;

  const top = el.getBoundingClientRect().top + (window.scrollY || 0) - offsetPx;
  const safeTop = Math.max(0, Math.round(top));

  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  scrollToY(safeTop);
}

/**
 * tone:
 * - "auto" (default): homeはhashで自動、下層はrouteで自動
 * - "paper": 常に紙
 * - "dark": 常に黒
 */
export default function NavGlobal({ mode, tone = "auto" }) {
  const { pathname } = useLocation();
  const isHome = mode ? mode === "home" : pathname === "/";

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const pendingHashRef = useRef(null);

  const [navH, setNavH] = useState(FALLBACK_NAV_HEIGHT);
  const scrollOffset = navH + 12;
  const scrollOffsetRef = useRef(scrollOffset);

  const homeLinks = useMemo(() => HOME_ITEMS, []);
  const globalLinks = useMemo(() => GLOBAL_ITEMS, []);

  useBodyScrollLock(open);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    scrollOffsetRef.current = scrollOffset;
  }, [scrollOffset]);

  /* ── measure nav height ── */
  useEffect(() => {
    const measure = () => {
      const h = navRef.current?.getBoundingClientRect?.().height;
      if (!h) return;
      const rounded = Math.round(h);
      setNavH((prev) => (prev === rounded ? prev : rounded));
    };

    measure();

    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* ── scroll → density ── */
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

  /* ── route change closes menu ── */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ── close if desktop ── */
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

  /* ── sync activeHash only on home ── */
  useEffect(() => {
    if (!isHome) return;

    const syncHash = () => setActiveHash(window.location.hash || "");
    syncHash();

    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [isHome]);

  /* ── IntersectionObserver active follow (home) ── */
  useEffect(() => {
    if (!isHome) return;

    let observer = null;
    let timer = null;
    let tries = 0;
    const MAX_TRIES = 8;

    const setup = () => {
      const targets = OBSERVE_IDS.map((id) => document.getElementById(id)).filter(Boolean);

      // Hero優先判定用（存在すれば最強に安定）
      const heroEl = document.getElementById("hero");

      if (!targets.length) {
        tries += 1;
        if (tries <= MAX_TRIES) timer = window.setTimeout(setup, 180);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          // ✅ Hero が見えてる間は active を消す（ABOUTが先に反応するのを根絶）
          if (heroEl) {
            const r = heroEl.getBoundingClientRect();
            if (r.bottom > (scrollOffsetRef.current ?? 80)) {
              setActiveHash((prev) => (prev ? "" : prev));
              return;
            }
          }

          const visible = entries.filter((entry) => entry.isIntersecting);
          if (!visible.length) return;

          visible.sort((a, b) => {
            const ratio = (b.intersectionRatio || 0) - (a.intersectionRatio || 0);
            if (ratio) return ratio;
            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
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

  /* ── esc close ── */
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      setOpen(false);
      window.setTimeout(() => buttonRef.current?.focus(), 0);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* ── focus first link on open ── */
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 90);
    return () => window.clearTimeout(t);
  }, [open]);

  /* ── close → then scroll (home anchor) ── */
  useEffect(() => {
    if (open) return;
    const pending = pendingHashRef.current;
    if (!pending) return;
    pendingHashRef.current = null;
    requestAnimationFrame(() => scrollToHash(pending, scrollOffsetRef.current));
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((v) => !v), []);

  const handleAnchorClick = useCallback(
    (href) => (e) => {
      if (!href?.startsWith("#")) return;
      e.preventDefault();

      setActiveHash((prev) => (prev === href ? prev : href));

      if (open) {
        pendingHashRef.current = href;
        setOpen(false);
        return;
      }

      scrollToHash(href, scrollOffsetRef.current);
    },
    [open]
  );

  const handleLogoClick = useCallback(
    (e) => {
      if (!isHome) {
        if (open) closeMenu();
        return;
      }

      // home上でロゴ → 必ずトップへ（hashも消す）
      e.preventDefault();
      if (open) setOpen(false);

      // hash を消す（"ABOUTが残る"事故防止）
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }

      requestAnimationFrame(() => {
        setActiveHash("");
        scrollToY(0);
      });
    },
    [isHome, open, closeMenu]
  );

  if (!mounted) return null;

  // ── theme decision（上のバーだけ） ──
  let theme = "paper";
  if (tone === "dark") theme = "dark";
  else if (tone === "paper") theme = "paper";
  else {
    if (isHome) theme = DARK_HASHES.has(activeHash) ? "dark" : "paper";
    else theme = DARK_ROUTES.has(pathname) ? "dark" : "paper";
  }

  // ✅ スマホで開くメニューは常に “dark”
  const menuTheme = "dark";

  const ui = (
    <>
      {/* ===== TOP BAR ===== */}
      <nav
        ref={navRef}
        data-theme={theme}
        className={cx(styles.navRoot, scrolled ? styles.navActive : styles.navIdle)}
        aria-label="Global Navigation"
      >
        <div className={styles.navInner}>
          <Link
            to="/"
            translate="no"
            onClick={handleLogoClick}
            className={styles.navLogo}
            aria-label="GUSHIKEN DESIGN Home"
          >
            <span
              className={cx(styles.navLogoSeal, styles.sharpIn)}
              aria-hidden="true"
              style={{
                "--nav-delay": "0.04s",
                "--logo-url": `url(${LOGO_SRC})`,
              }}
            />

            <span className={styles.navLogoText}>
              <span className={cx(styles.navLogoMain, styles.sharpIn)} style={{ "--nav-delay": "0.10s" }}>
                GUSHIKEN DESIGN
              </span>

              <span className={cx(styles.navLogoSub, styles.sharpIn)} style={{ "--nav-delay": "0.16s" }}>
                Web Design / Okinawa
              </span>
            </span>
          </Link>

          {/* ===== PC LINKS ===== */}
          <div className={styles.navPc}>
            {isHome
              ? homeLinks.map((item, index) => {
                  const active = activeHash === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleAnchorClick(item.href)}
                      aria-current={active ? "location" : undefined}
                      data-emphasis={item.emphasis ? "true" : "false"}
                      className={cx(
                        styles.navItem,
                        styles.sharpIn,
                        active && styles.navItemActive,
                        item.emphasis && styles.navItemEmphasis
                      )}
                      style={{ "--nav-delay": `${0.22 + index * 0.06}s`, "--i": index }}
                    >
                      <span className={styles.navItemText}>{item.label}</span>
                    </a>
                  );
                })
              : globalLinks.map((item, index) => {
                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      data-emphasis={item.emphasis ? "true" : "false"}
                      className={cx(
                        styles.navItem,
                        styles.sharpIn,
                        active && styles.navItemActive,
                        item.emphasis && styles.navItemEmphasis
                      )}
                      style={{ "--nav-delay": `${0.22 + index * 0.06}s`, "--i": index }}
                    >
                      <span className={styles.navItemText}>{item.label}</span>
                    </Link>
                  );
                })}
          </div>

          {/* ===== HAMBURGER ===== */}
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="global-mobile-navigation"
            onClick={toggleMenu}
            className={cx(styles.hamburger, open && styles.hamburgerOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        data-theme={menuTheme}
        className={cx(styles.mobileOverlay, open && styles.mobileOverlayOpen)}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ===== MOBILE NAV ===== */}
      <div
        id="global-mobile-navigation"
        data-theme={menuTheme}
        className={cx(styles.mobileNav, open && styles.mobileOpen)}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Navigation menu"
      >
        <div className={styles.mobileNavInner}>
          <div className={styles.mobileNavTop}>
            <p className={styles.mobileNavLabel}>MENU</p>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.setTimeout(() => buttonRef.current?.focus(), 0);
              }}
              aria-label="Close navigation"
              tabIndex={open ? 0 : -1}
              className={styles.mobileClose}
            >
              <span />
              <span />
            </button>
          </div>

          <div className={styles.mobileNavLinks}>
            {isHome
              ? homeLinks.map((item, index) => {
                  const active = activeHash === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      ref={index === 0 ? firstLinkRef : null}
                      tabIndex={open ? 0 : -1}
                      onClick={handleAnchorClick(item.href)}
                      aria-current={active ? "location" : undefined}
                      data-emphasis={item.emphasis ? "true" : "false"}
                      className={cx(
                        styles.mobileNavItem,
                        active && styles.mobileNavItemActive,
                        item.emphasis && styles.mobileNavItemEmphasis
                      )}
                      style={{ "--i": index }}
                    >
                      <span className={styles.mobileNavText}>{item.label}</span>
                      <span className={styles.mobileNavArrow} aria-hidden="true">
                        →
                      </span>
                    </a>
                  );
                })
              : globalLinks.map((item, index) => {
                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      ref={index === 0 ? firstLinkRef : null}
                      tabIndex={open ? 0 : -1}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      data-emphasis={item.emphasis ? "true" : "false"}
                      className={cx(
                        styles.mobileNavItem,
                        active && styles.mobileNavItemActive,
                        item.emphasis && styles.mobileNavItemEmphasis
                      )}
                      style={{ "--i": index }}
                    >
                      <span className={styles.mobileNavText}>{item.label}</span>
                      <span className={styles.mobileNavArrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  );
                })}
          </div>

          <div className={styles.mobileNavFooter}>
            <p className={styles.mobileNavNote}>Structure, atmosphere, and trust.</p>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(ui, document.body);
}