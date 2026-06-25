// src/components/NavGlobal.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import OkinawaThreeSea from "../visuals/OkinawaThreeSea";
import styles from "./Nav.module.css";

const LOGO_SRC = "/logo-gd.png";
const FALLBACK_NAV_HEIGHT = 68;

const HOME_ITEMS = [
  { href: "#works", label: "WORKS" },
  { href: "#voice", label: "VOICE" },
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

const OBSERVE_IDS = [
  "works",
  "voice",
  "about",
  "philosophy",
  "price",
  "news",
  "contact",
  "footer",
];

const DARK_HASHES = new Set(["#works", "#news", "#footer"]);
const DARK_ROUTES = new Set(["/works", "/news"]);

const MOBILE_META = {
  WORKS: {
    title: "WORKS",
    kana: "制作実績を見る",
    desc: "まずは、作ったものを見てください。",
  },
  VOICE: {
    title: "VOICE",
    kana: "お客様の声",
    desc: "実際の制作後の感想。",
  },
  ABOUT: {
    title: "ABOUT",
    kana: "制作者について",
    desc: "どんな人が作っているか。",
  },
  POLICY: {
    title: "POLICY",
    kana: "制作方針",
    desc: "どう考えて作るか。",
  },
  PRICE: {
    title: "PRICE",
    kana: "料金の目安",
    desc: "依頼前に確認できます。",
  },
  CONTACT: {
    title: "CONTACT",
    kana: "相談する",
    desc: "制作の相談はこちら。",
  },
  NEWS: {
    title: "NEWS",
    kana: "制作記録",
    desc: "更新と制作メモ。",
  },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getMobileMeta(label) {
  return (
    MOBILE_META[label] || {
      title: label,
      kana: "",
      desc: "",
    }
  );
}

function getItemKey(item) {
  return item.href || item.to || item.label;
}

function isRouteActive(pathname, to) {
  if (!to) return false;
  if (pathname === to) return true;
  return pathname.startsWith(`${to}/`);
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
}

/* =========================================================
   Body Scroll Lock
   - メニュー単体で閉じる: 元の位置へ復元
   - メニュー内Linkでページ遷移: 復元しない
   - App.jsx側のスクロールトップと衝突させない
========================================================= */

function useBodyScrollLock(locked, restoreOnUnlockRef) {
  const scrollYRef = useRef(0);
  const prevRef = useRef(null);

  useEffect(() => {
    if (!locked) return undefined;

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

    if (scrollbarW) {
      body.style.paddingRight = `${scrollbarW}px`;
    }

    return () => {
      const prev = prevRef.current;
      if (!prev) return;

      const shouldRestore = restoreOnUnlockRef?.current !== false;

      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.paddingRight = prev.paddingRight;

      if (shouldRestore) {
        window.scrollTo({
          top: scrollYRef.current,
          left: 0,
          behavior: "auto",
        });
      }

      if (restoreOnUnlockRef) {
        restoreOnUnlockRef.current = true;
      }

      prevRef.current = null;
    };
  }, [locked, restoreOnUnlockRef]);
}

/* =========================================================
   Scroll helpers
========================================================= */

function scrollToY(y) {
  if (typeof window === "undefined") return;

  const safeY = Math.max(0, Math.round(y));
  const reduce = prefersReducedMotion();
  const lenis = window.__gd_lenis__;

  if (lenis?.scrollTo) {
    if (reduce) {
      lenis.scrollTo(safeY, { immediate: true });
    } else {
      lenis.scrollTo(safeY, {
        duration: 0.78,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    }

    return;
  }

  window.scrollTo({
    top: safeY,
    behavior: reduce ? "auto" : "smooth",
  });
}

function scrollToHash(hash, offsetPx) {
  if (typeof window === "undefined") return;
  if (typeof document === "undefined") return;
  if (!hash?.startsWith("#")) return;

  const el = document.querySelector(hash);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + (window.scrollY || 0) - offsetPx;

  const safeTop = Math.max(0, Math.round(top));

  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  scrollToY(safeTop);
}

/**
 * tone:
 * - "auto": homeはhashで自動、下層はrouteで自動
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

  // メニュー解除時に現在地復元するかどうか
  // 通常の閉じる: true
  // ページ遷移リンク: false
  const restoreOnUnlockRef = useRef(true);

  const [navH, setNavH] = useState(FALLBACK_NAV_HEIGHT);
  const scrollOffset = navH + 12;
  const scrollOffsetRef = useRef(scrollOffset);

  const homeLinks = useMemo(() => HOME_ITEMS, []);
  const globalLinks = useMemo(() => GLOBAL_ITEMS, []);

  const mobileItems = useMemo(
    () => (isHome ? homeLinks : globalLinks),
    [isHome, homeLinks, globalLinks]
  );

  useBodyScrollLock(open, restoreOnUnlockRef);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    scrollOffsetRef.current = scrollOffset;
  }, [scrollOffset]);

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
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const closeIfDesktop = () => {
      if (mq.matches) {
        restoreOnUnlockRef.current = true;
        setOpen(false);
      }
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
    if (!isHome) return undefined;

    const syncHash = () => setActiveHash(window.location.hash || "");
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
      const targets = OBSERVE_IDS.map((id) =>
        document.getElementById(id)
      ).filter(Boolean);

      const heroEl = document.getElementById("hero");

      if (!targets.length) {
        tries += 1;

        if (tries <= MAX_TRIES) {
          timer = window.setTimeout(setup, 180);
        }

        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
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
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key !== "Escape") return;

      e.preventDefault();
      restoreOnUnlockRef.current = true;
      setOpen(false);

      window.setTimeout(() => buttonRef.current?.focus(), 0);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const t = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 120);

    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (open) return;

    const pending = pendingHashRef.current;
    if (!pending) return;

    pendingHashRef.current = null;

    requestAnimationFrame(() => {
      scrollToHash(pending, scrollOffsetRef.current);
    });
  }, [open]);

  const closeMenu = useCallback(() => {
    restoreOnUnlockRef.current = true;
    setOpen(false);
  }, []);

  const closeMenuForRouteChange = useCallback(() => {
    restoreOnUnlockRef.current = false;
    setOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    restoreOnUnlockRef.current = true;
    setOpen((v) => !v);
  }, []);

  const handleAnchorClick = useCallback(
    (href) => (e) => {
      if (!href?.startsWith("#")) return;

      e.preventDefault();

      setActiveHash((prev) => (prev === href ? prev : href));

      if (open) {
        // ホーム内アンカーは「閉じたあとに目的地へスクロール」する。
        // ここでは復元を止めない。
        restoreOnUnlockRef.current = true;
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
        if (open) {
          // 下層からロゴでHOMEへ遷移する時は、Nav側の位置復元を止める。
          closeMenuForRouteChange();
        }

        return;
      }

      e.preventDefault();

      if (open) {
        // HOME上でロゴを押す時はトップへ戻すので、Nav側の位置復元を止める。
        restoreOnUnlockRef.current = false;
        setOpen(false);
      }

      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }

      requestAnimationFrame(() => {
        setActiveHash("");
        scrollToY(0);
      });
    },
    [isHome, open, closeMenuForRouteChange]
  );

  const renderMobileSeaLink = useCallback(
    (item, index) => {
      const meta = getMobileMeta(item.label);
      const isHash = Boolean(item.href);

      const active = isHash
        ? activeHash === item.href
        : isRouteActive(pathname, item.to);

      const variant =
        item.label === "WORKS" || item.label === "VOICE"
          ? "primary"
          : ["PRICE", "CONTACT"].includes(item.label)
            ? "action"
            : "minor";

      const className = cx(
        styles.mobileSeaLink,
        variant === "primary" && styles.mobileSeaLinkPrimary,
        variant === "action" && styles.mobileSeaLinkAction,
        variant === "minor" && styles.mobileSeaLinkMinor,
        active && styles.mobileSeaLinkActive,
        item.emphasis && styles.mobileSeaLinkEmphasis
      );

      const content = (
        <>
          <span className={styles.mobileSeaLinkNo}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className={styles.mobileSeaLinkBody}>
            <span className={styles.mobileSeaLinkTitle}>{meta.title}</span>
            <span className={styles.mobileSeaLinkKana}>{meta.kana}</span>
            <span className={styles.mobileSeaLinkDesc}>{meta.desc}</span>
          </span>

          <span className={styles.mobileSeaLinkLine} aria-hidden="true" />
        </>
      );

      if (isHash) {
        return (
          <a
            key={getItemKey(item)}
            href={item.href}
            ref={index === 0 ? firstLinkRef : null}
            tabIndex={open ? 0 : -1}
            onClick={handleAnchorClick(item.href)}
            aria-current={active ? "location" : undefined}
            data-emphasis={item.emphasis ? "true" : "false"}
            className={className}
            style={{ "--i": index }}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          key={getItemKey(item)}
          to={item.to}
          ref={index === 0 ? firstLinkRef : null}
          tabIndex={open ? 0 : -1}
          onClick={closeMenuForRouteChange}
          aria-current={active ? "page" : undefined}
          data-emphasis={item.emphasis ? "true" : "false"}
          className={className}
          style={{ "--i": index }}
        >
          {content}
        </Link>
      );
    },
    [
      activeHash,
      closeMenuForRouteChange,
      handleAnchorClick,
      open,
      pathname,
    ]
  );

  if (!mounted) return null;

  let theme = "paper";

  if (tone === "dark") {
    theme = "dark";
  } else if (tone === "paper") {
    theme = "paper";
  } else {
    if (isHome) {
      theme = DARK_HASHES.has(activeHash) ? "dark" : "paper";
    } else {
      theme = DARK_ROUTES.has(pathname) ? "dark" : "paper";
    }
  }

  const menuTheme = "dark";

  const ui = (
    <>
      <nav
        ref={navRef}
        data-theme={theme}
        data-open={open ? "true" : "false"}
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
              <span
                className={cx(styles.navLogoMain, styles.sharpIn)}
                style={{ "--nav-delay": "0.10s" }}
              >
                GUSHIKEN DESIGN
              </span>

              <span
                className={cx(styles.navLogoSub, styles.sharpIn)}
                style={{ "--nav-delay": "0.16s" }}
              >
                Web Design / Okinawa
              </span>
            </span>
          </Link>

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
                      style={{
                        "--nav-delay": `${0.22 + index * 0.06}s`,
                        "--i": index,
                      }}
                    >
                      <span className={styles.navItemText}>{item.label}</span>
                    </a>
                  );
                })
              : globalLinks.map((item, index) => {
                  const active = isRouteActive(pathname, item.to);

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
                      style={{
                        "--nav-delay": `${0.22 + index * 0.06}s`,
                        "--i": index,
                      }}
                    >
                      <span className={styles.navItemText}>{item.label}</span>
                    </Link>
                  );
                })}
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
        data-theme={menuTheme}
        className={cx(styles.mobileOverlay, open && styles.mobileOverlayOpen)}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="global-mobile-navigation"
        data-theme={menuTheme}
        className={cx(styles.mobileNav, open && styles.mobileOpen)}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Navigation menu"
      >
        <div className={styles.mobileSeaLayer} aria-hidden="true">
          {open && (
            <OkinawaThreeSea
              className={styles.mobileSeaCanvas}
              variant="whiteWave"
            />
          )}
          <span className={styles.mobileSeaWhite} />
          <span className={styles.mobileSeaVeil} />
          <span className={styles.mobileSeaDepth} />
        </div>

        <div className={styles.mobileSeaShell}>
          <div className={styles.mobileSeaTop}>
            <div className={styles.mobileSeaIdentity}>
              <span className={styles.mobileSeaIdentityKicker}>
                GUSHIKEN DESIGN
              </span>
              <span className={styles.mobileSeaIdentityText}>
                OKINAWA / WEB DESIGN
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                window.setTimeout(() => buttonRef.current?.focus(), 0);
              }}
              aria-label="Close navigation"
              tabIndex={open ? 0 : -1}
              className={styles.mobileSeaClose}
            >
              <span />
              <span />
            </button>
          </div>

          <div className={styles.mobileSeaCommand}>
            <section className={styles.mobileSeaStatement}>
              <p className={styles.mobileSeaStatementEyebrow}>
                PORTFOLIO / OKINAWA
              </p>

              <h2 className={styles.mobileSeaStatementTitle}>
                作品と声を、
                <br />
                見てください。
              </h2>

              <p className={styles.mobileSeaStatementBody}>
                Works / Voice / Contact
              </p>
            </section>

            <nav className={styles.mobileSeaMenu} aria-label="Site sections">
              {mobileItems.map((item, index) =>
                renderMobileSeaLink(item, index)
              )}
            </nav>
          </div>

          <div className={styles.mobileSeaFooter}>
            <p className={styles.mobileSeaFooterText}>
              Structure, atmosphere, and trust.
            </p>
            <p className={styles.mobileSeaFooterCode}>GD / WHITE WAVE</p>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(ui, document.body);
}