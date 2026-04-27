import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import styles from "./Nav.module.css";

const NAV_HEIGHT = 68;
const SCROLL_OFFSET = NAV_HEIGHT + 12;
const LOGO_SRC = "/logo-gd.png";

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

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

  window.scrollTo({
    top: safeTop,
    behavior: "smooth",
  });
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

  const homeLinks = useMemo(() => HOME_ITEMS, []);
  const globalLinks = useMemo(() => GLOBAL_ITEMS, []);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    setOpen(false);
    document.documentElement.classList.remove("scroll-lock");
    document.body.classList.remove("scroll-lock");
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const closeIfDesktop = () => {
      if (mq.matches) setOpen(false);
    };

    closeIfDesktop();

    if (mq.addEventListener) {
      mq.addEventListener("change", closeIfDesktop);
    } else {
      mq.addListener(closeIfDesktop);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", closeIfDesktop);
      } else {
        mq.removeListener(closeIfDesktop);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const html = document.documentElement;
    const body = document.body;

    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    const panel = panelRef.current;

    const preventOutsideTouch = (e) => {
      if (panel && panel.contains(e.target)) return;
      e.preventDefault();
    };

    document.addEventListener("touchmove", preventOutsideTouch, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", preventOutsideTouch);
      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key !== "Escape") return;

      e.preventDefault();
      setOpen(false);

      window.setTimeout(() => {
        buttonRef.current?.focus();
      }, 0);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const timer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 80);

    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!isHome) return undefined;

    const syncHash = () => {
      setActiveHash(window.location.hash || "");
    };

    syncHash();

    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return undefined;

    let observer = null;
    let timer = null;
    let tries = 0;
    const MAX_TRIES = 8;

    const setup = () => {
      const targets = HOME_ITEMS.map((item) =>
        document.querySelector(item.href)
      ).filter(Boolean);

      if (!targets.length) {
        tries += 1;

        if (tries <= MAX_TRIES) {
          timer = window.setTimeout(setup, 180);
        }

        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (!visible.length) return;

          visible.sort((a, b) => {
            const ratio =
              (b.intersectionRatio || 0) - (a.intersectionRatio || 0);

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

  useEffect(() => {
    if (open) return;

    const pending = pendingHashRef.current;
    if (!pending) return;

    pendingHashRef.current = null;

    requestAnimationFrame(() => {
      scrollToHash(pending);
    });
  }, [open]);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((value) => !value);
  }, []);

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

  const renderPcHomeLink = (item, index) => {
    const active = activeHash === item.href;

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={handleAnchorClick(item.href)}
        className={cx(
          styles.navItem,
          styles.sharpIn,
          active && styles.navItemActive,
          item.emphasis && styles.navItemEmphasis
        )}
        style={{ "--nav-delay": `${0.24 + index * 0.07}s` }}
      >
        <span className={styles.navItemText}>{item.label}</span>
        <span className={styles.navSheen} aria-hidden="true" />
      </a>
    );
  };

  const renderPcGlobalLink = (item, index) => {
    const active = pathname === item.to;

    return (
      <Link
        key={item.to}
        to={item.to}
        className={cx(
          styles.navItem,
          styles.sharpIn,
          active && styles.navItemActive,
          item.emphasis && styles.navItemEmphasis
        )}
        style={{ "--nav-delay": `${0.24 + index * 0.07}s` }}
      >
        <span className={styles.navItemText}>{item.label}</span>
        <span className={styles.navSheen} aria-hidden="true" />
      </Link>
    );
  };

  if (!mounted) return null;

  const ui = (
    <>
      <nav
        className={cx(
          styles.navRoot,
          scrolled ? styles.navActive : styles.navIdle
        )}
        aria-label="Global Navigation"
      >
        <div className={styles.navInner}>
          <Link
            to="/"
            translate="no"
            onClick={() => {
              if (open) closeMenu();
            }}
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
            >
              <span className={styles.navLogoMask} />
              <span className={styles.navSheen} aria-hidden="true" />
            </span>

            <span className={styles.navLogoText}>
              <span
                className={cx(styles.navLogoMain, styles.sharpIn)}
                style={{ "--nav-delay": "0.1s" }}
              >
                GUSHIKEN DESIGN
                <span className={styles.navSheen} aria-hidden="true" />
              </span>

              <span
                className={cx(styles.navLogoSub, styles.sharpIn)}
                style={{ "--nav-delay": "0.16s" }}
              >
                Web Design / Okinawa
                <span className={styles.navSheen} aria-hidden="true" />
              </span>
            </span>
          </Link>

          <div className={styles.navPc}>
            {isHome
              ? homeLinks.map(renderPcHomeLink)
              : globalLinks.map(renderPcGlobalLink)}
          </div>

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

      <div
        className={cx(
          styles.mobileOverlay,
          open && styles.mobileOverlayOpen
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id="global-mobile-navigation"
        className={cx(styles.mobileNav, open && styles.mobileOpen)}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className={styles.mobileNavInner}>
          <div className={styles.mobileNavTop}>
            <p className={styles.mobileNavLabel}>MENU</p>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.setTimeout(() => {
                  buttonRef.current?.focus();
                }, 0);
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
                      className={cx(
                        styles.mobileNavItem,
                        active && styles.mobileNavItemActive,
                        item.emphasis && styles.mobileNavItemEmphasis
                      )}
                      style={{ "--i": index }}
                    >
                      <MobileLinkInner label={item.label} />
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
                      className={cx(
                        styles.mobileNavItem,
                        active && styles.mobileNavItemActive,
                        item.emphasis && styles.mobileNavItemEmphasis
                      )}
                      style={{ "--i": index }}
                    >
                      <MobileLinkInner label={item.label} />
                    </Link>
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

  return createPortal(ui, document.body);
}

function MobileLinkInner({ label }) {
  return (
    <>
      <span className={styles.mobileNavText}>{label}</span>
      <span className={styles.mobileNavArrow} aria-hidden="true">
        →
      </span>
    </>
  );
}