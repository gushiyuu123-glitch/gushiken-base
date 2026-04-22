import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Nav.module.css";

const navItems = [
  { href: "#works",      label: "WORKS" },
  { href: "#about",      label: "ABOUT" },
  { href: "#philosophy", label: "POLICY" },
  { href: "#price",      label: "PRICE" },
  { href: "#contact",    label: "CONTACT" },
];

const NAV_HEIGHT = 68;
const SCROLL_OFFSET = NAV_HEIGHT + 12;

/* =========================================================
   Body Scroll Lock (robust)
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
   Smooth scroll to section with fixed-header offset
========================================================= */
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

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const firstLinkRef = useRef(null);
  const buttonRef = useRef(null);
  const pendingHashRef = useRef(null);

  useBodyScrollLock(open);

  /* ── Scroll → solid background (lightweight) ── */
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

  /* ── Sync activeHash with back/forward & manual hash edits ── */
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

  /* ── IntersectionObserver (stable pick + retry for late-render sections) ── */
  useEffect(() => {
    let observer = null;
    let timer = null;
    let tries = 0;
    const MAX_TRIES = 8;

    const setup = () => {
      const targets = navItems
        .map((item) => document.querySelector(item.href))
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
  }, []);

  /* ── Esc close ── */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
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

  /* ── If a hash was clicked while open: close → unlock → then scroll ── */
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
      if (!href?.startsWith("#")) return;
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

  const pcLinks = useMemo(() => navItems, []);

  return (
    <>
      <nav
        className={`${styles.navRoot} ${scrolled ? styles.navActive : styles.navIdle}`}
      >
        <div className={styles.navInner}>
          <a
            href="/"
            className={styles.navLogo}
            translate="no"
            onClick={() => open && closeMenu()}
          >
            GUSHIKEN DESIGN
            <span className={styles.navLogoRule} aria-hidden="true" />
            <span className={styles.navLogoBrand} aria-hidden="true">
              Web Design
            </span>
          </a>

          <div className={styles.navPc}>
            {pcLinks.map((item) => {
              const active = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleAnchorClick(item.href)}
                  className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
                >
                  {item.label}
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

      <div
        className={`${styles.mobileOverlay} ${open ? styles.mobileOverlayOpen : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      <div
        id="mobile-navigation"
        className={`${styles.mobileNav} ${open ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className={styles.mobileNavInner}>
          <div className={styles.mobileNavTop}>
            <p className={styles.mobileNavLabel}>MENU</p>

            <button
              type="button"
              className={styles.mobileClose}
              onClick={closeMenu}
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
                  className={`${styles.mobileNavItem} ${active ? styles.mobileNavItemActive : ""}`}
                >
                  <span className={styles.mobileNavText}>{item.label}</span>
                  <span className={styles.mobileNavArrow}>→</span>
                </a>
              );
            })}
          </div>

          <div className={styles.mobileNavFooter}>
            <p className={styles.mobileNavNote}>Quiet structure.&ensp;Clear direction.</p>
          </div>
        </div>
      </div>
    </>
  );
}