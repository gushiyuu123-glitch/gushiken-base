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

const NAV_HEIGHT = 68;
const SCROLL_OFFSET = NAV_HEIGHT + 12;

/* =========================================================
   Body Scroll Lock
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
   Smooth scroll to section
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
  const panelRef = useRef(null);

  useBodyScrollLock(open);

  /* ── Scroll → solid background ── */
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
      const targets = navItems
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
  }, []);

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

    const t = setTimeout(() => firstLinkRef.current?.focus(), 90);
    return () => clearTimeout(t);
  }, [open]);

  /* ── Close → then scroll ── */
  useEffect(() => {
    if (open) return;

    const pending = pendingHashRef.current;
    if (!pending) return;

    pendingHashRef.current = null;

    requestAnimationFrame(() => {
      scrollToHash(pending);
    });
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
      {/* Local motion / logo mask utility */}
      <style>{`
        .gd-nav-sharp {
          position: relative;
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
          .gd-nav-sheen {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            clip-path: none !important;
          }
        }
      `}</style>

      <nav
        className={`${styles.navRoot} ${scrolled ? styles.navActive : styles.navIdle}`}
        aria-label="Primary navigation"
      >
        <div className={styles.navInner}>
          <a
            href="/"
            className={styles.navLogo}
            translate="no"
            onClick={() => open && closeMenu()}
            aria-label="GUSHIKEN DESIGN ホームへ"
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

            <span className={styles.navLogoText}>
              <span
                className={`${styles.navLogoMain} gd-nav-sharp`}
                style={{ "--nav-delay": "0.10s" }}
              >
                GUSHIKEN DESIGN
                <span className="gd-nav-sheen" aria-hidden="true" />
              </span>

              <span
                className={`${styles.navLogoSub} gd-nav-sharp`}
                style={{ "--nav-delay": "0.16s" }}
              >
                Web Design / Okinawa
                <span className="gd-nav-sheen" aria-hidden="true" />
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
                  className={`
                    ${styles.navItem}
                    ${active ? styles.navItemActive : ""}
                    ${item.emphasis ? styles.navItemEmphasis : ""}
                    gd-nav-sharp
                  `}
                  style={{ "--nav-delay": `${0.24 + index * 0.07}s` }}
                >
                  <span className="relative z-[1]">{item.label}</span>
                  <span className="gd-nav-sheen" aria-hidden="true" />
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
        ref={panelRef}
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
              onClick={() => {
                setOpen(false);
                setTimeout(() => buttonRef.current?.focus(), 0);
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
                  className={`
                    ${styles.mobileNavItem}
                    ${active ? styles.mobileNavItemActive : ""}
                    ${item.emphasis ? styles.mobileNavItemEmphasis : ""}
                  `}
                  style={{ "--i": i }}
                >
                  <span className={styles.mobileNavLeft}>
                    <span className={styles.mobileNavText}>{item.label}</span>
                  </span>

                  <span className={styles.mobileNavArrow}>→</span>
                </a>
              );
            })}
          </div>

          <div className={styles.mobileNavFooter}>
            <p className={styles.mobileNavNote}>
              Structure, atmosphere, and trust.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}