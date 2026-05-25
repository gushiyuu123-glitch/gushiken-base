// src/components/Nav.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Nav.module.css";

const LOGO_SRC = "/logo-gd.png";

const navItems = [
  { href: "#works", label: "WORKS" },
  { href: "#about", label: "ABOUT" },
  { href: "#philosophy", label: "POLICY" },
  { href: "#price", label: "PRICE" },
  { href: "#contact", label: "CONTACT", emphasis: true },
];

// ✅ 黒ナビにしたいセクション（必要なら追加）
const DARK_HASHES = new Set(["#works", "#news", "#footer"]);

// いつでも黒にしたいなら true
const FORCE_DARK = false;

// ✅ SPメニューは常にdark固定（白化事故を根絶）
const MENU_THEME = "dark";

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
   Scroll (Lenis safe)
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

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const navRef = useRef(null);
  const firstLinkRef = useRef(null);
  const buttonRef = useRef(null);
  const pendingHashRef = useRef(null);

  const [navH, setNavH] = useState(68);
  const scrollOffset = navH + 12;

  // ✅ IOのコールバックから常に最新offset参照する（closure事故防止）
  const scrollOffsetRef = useRef(scrollOffset);
  useEffect(() => {
    scrollOffsetRef.current = scrollOffset;
  }, [scrollOffset]);

  useBodyScrollLock(open);

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

  /* ── Scroll → solid background ── */
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ── Close menu when desktop ── */
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

  /* ── Sync activeHash ── */
  useEffect(() => {
    const sync = () => setActiveHash(window.location.hash || "");
    sync();

    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);

    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  /* ── IntersectionObserver active follow ── */
  useEffect(() => {
    let observer = null;
    let timer = null;
    let tries = 0;
    const MAX_TRIES = 8;

    const setup = () => {
      const targets = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);

      if (!targets.length) {
        tries += 1;
        if (tries <= MAX_TRIES) timer = window.setTimeout(setup, 180);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          // ✅ Heroが見えてる間は active を消す（ABOUTが先に反応する事故を根絶）
          // Hero最外側に id="hero" が付いてる前提（無ければ下にある注意参照）
          const hero = document.getElementById("hero");
          if (hero) {
            const r = hero.getBoundingClientRect();
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
  }, []);

  /* ── Esc close ── */
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

  /* ── Focus first link on open ── */
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 90);
    return () => window.clearTimeout(t);
  }, [open]);

  /* ── Close → then scroll ── */
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

  const handleLogoTop = useCallback(
    (e) => {
      e.preventDefault();

      // ✅ hashを消して「ABOUTが残留」する事故を防ぐ
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }

      setActiveHash("");
      if (open) {
        setOpen(false);
        pendingHashRef.current = null;
      }

      requestAnimationFrame(() => scrollToY(0));
    },
    [open]
  );

  const pcLinks = useMemo(() => navItems, []);
  const isDark = FORCE_DARK || DARK_HASHES.has(activeHash);

  return (
    <>
      {/* ===== TOP BAR（paper/dark 自動） ===== */}
      <nav
        ref={navRef}
        data-theme={isDark ? "dark" : "paper"}
        className={[
          styles.navRoot,
          scrolled ? styles.isScrolled : "",
          open ? styles.isMenuOpen : "",
        ].join(" ")}
        aria-label="Primary navigation"
      >
        <div className={styles.navInner}>
          {/* ✅ HOME内なので reload しない：トップへ */}
          <a
            href="#top"
            className={styles.navLogo}
            translate="no"
            onClick={handleLogoTop}
            aria-label="GUSHIKEN DESIGN トップへ"
          >
            {/* ✅ GDロゴ透過前提：囲み/背景のための子要素を持たない */}
            <span
              className={`${styles.navLogoSeal} ${styles.sharpIn}`}
              aria-hidden="true"
              style={{ "--nav-delay": "0.04s", "--logo-url": `url(${LOGO_SRC})` }}
            />

            <span className={styles.navLogoText}>
              <span className={`${styles.navLogoMain} ${styles.sharpIn}`} style={{ "--nav-delay": "0.10s" }}>
                GUSHIKEN DESIGN
              </span>

              <span className={`${styles.navLogoSub} ${styles.sharpIn}`} style={{ "--nav-delay": "0.16s" }}>
                Web Design / Okinawa
              </span>
            </span>
          </a>

          <div className={styles.navPc}>
            {pcLinks.map((item, index) => {
              const active = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleAnchorClick(item.href)}
                  aria-current={active ? "location" : undefined}
                  data-emphasis={item.emphasis ? "true" : "false"}
                  className={[
                    styles.navItem,
                    active ? styles.navItemActive : "",
                    item.emphasis ? styles.navItemEmphasis : "",
                    styles.sharpIn,
                  ].join(" ")}
                  style={{ "--nav-delay": `${0.22 + index * 0.06}s` }}
                >
                  <span className={styles.navItemText}>{item.label}</span>
                </a>
              );
            })}
          </div>

          <button
            ref={buttonRef}
            type="button"
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY（常にdark） ===== */}
      <div
        data-theme={MENU_THEME}
        className={`${styles.mobileOverlay} ${open ? styles.mobileOverlayOpen : ""}`}
        onClick={() => {
          closeMenu();
          window.setTimeout(() => buttonRef.current?.focus(), 0);
        }}
        aria-hidden="true"
      />

      {/* ===== MOBILE NAV（常にdark固定） ===== */}
      <div
        id="mobile-navigation"
        data-theme={MENU_THEME}
        className={`${styles.mobileNav} ${open ? styles.mobileOpen : ""}`}
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
              className={styles.mobileClose}
              onClick={() => {
                setOpen(false);
                window.setTimeout(() => buttonRef.current?.focus(), 0);
              }}
              aria-label="Close navigation"
              tabIndex={open ? 0 : -1}
            >
              <span />
              <span />
            </button>
          </div>

          <div className={styles.mobileNavLinks}>
            {navItems.map((item, i) => {
              const active = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  ref={i === 0 ? firstLinkRef : null}
                  onClick={handleAnchorClick(item.href)}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "location" : undefined}
                  data-emphasis={item.emphasis ? "true" : "false"}
                  className={[
                    styles.mobileNavItem,
                    active ? styles.mobileNavItemActive : "",
                    item.emphasis ? styles.mobileNavItemEmphasis : "",
                  ].join(" ")}
                  style={{ "--i": i }}
                >
                  <span className={styles.mobileNavLeft}>
                    <span className={styles.mobileNavText}>{item.label}</span>
                  </span>
                  <span className={styles.mobileNavArrow} aria-hidden="true">
                    →
                  </span>
                </a>
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
}