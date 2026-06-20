// src/components/Footer.jsx
import React, { useCallback, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const LOGO_SRC = "/logo-gd.png";
const NOTE_URL = "https://note.com/noahgushi123";

const MENU_LINKS = [
  { type: "hash", label: "WORKS", hash: "#works" },
  { type: "hash", label: "ABOUT", hash: "#about" },
  { type: "hash", label: "POLICY", hash: "#philosophy" },
  { type: "hash", label: "PRICE", hash: "#price" },
  { type: "hash", label: "CONTACT", hash: "#contact" },
];

const AREA_LINKS = [
  { label: "沖縄のホームページ制作", to: "/okinawa" },
  { label: "全国オンライン対応", to: "/online" },
];

const PROJECT_LINKS = [
  {
    label: "Quiet AI Image Library",
    href: "https://quiet-ai.gushikendesign.com/",
  },
  {
    label: "Minimal Website Templates",
    href: "https://atelierquiet.gushikendesign.com/",
  },
];

const LEGAL_LINKS = [
  { label: "特商法表記", to: "/legal" },
  { label: "利用規約", to: "/terms" },
  { label: "返金規約", to: "/refund" },
  { label: "PRIVACY", to: "/privacy" },
];

/* =========================================================
   Icons
========================================================= */

function NoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cx(styles.snsIcon, styles.snsIconNote)}
    >
      <rect x="3.2" y="4.1" width="17.6" height="15.8" rx="3.2" />
      <path d="M7.2 15.8V8.2h2.1l3.8 5.1V8.2h2v7.6H13l-3.8-5.1v5.1z" />
      <path d="M6.6 18.3h10.8" className={styles.snsNoteLine} />
    </svg>
  );
}

/* =========================================================
   Helpers
========================================================= */

function normalizePathname(pathname = "/") {
  const raw = String(pathname || "/").split("?")[0].split("#")[0];

  if (!raw || raw === "/") return "/";

  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/+$/, "") || "/";
}

function getLenisLike() {
  if (typeof window === "undefined") return null;

  const api = window.__gd_lenis__;

  if (api?.lenis?.scrollTo) return api.lenis;
  if (api?.scrollTo) return api;

  return null;
}

function forceTop() {
  if (typeof window === "undefined") return;

  const lenis = getLenisLike();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  if (lenis?.scrollTo) {
    lenis.scrollTo(0, {
      immediate: true,
      force: true,
      duration: 0,
    });
  }

  if (lenis?.resize) {
    lenis.resize();
  }
}

function scrollToHash(hash, options = {}) {
  if (typeof document === "undefined") return false;
  if (!hash) return false;

  const id = String(hash).replace("#", "");
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  const lenis = getLenisLike();

  if (lenis?.scrollTo) {
    lenis.scrollTo(el, {
      offset: options.offset ?? 0,
      duration: options.duration ?? 0.9,
    });
    return true;
  }

  el.scrollIntoView({
    behavior: options.behavior ?? "smooth",
    block: "start",
  });

  return true;
}

/* =========================================================
   Component
========================================================= */

export default function Footer() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = useCallback(
    (event, hash) => {
      event.preventDefault();

      if (!hash) return;

      const currentPath = normalizePathname(location.pathname);

      if (currentPath === "/") {
        navigate(
          {
            pathname: "/",
            hash,
          },
          {
            replace: true,
            state: null,
          }
        );

        requestAnimationFrame(() => {
          scrollToHash(hash);
        });

        return;
      }

      navigate(
        {
          pathname: "/",
          hash,
        },
        {
          replace: false,
          state: {
            gdScrollHash: hash,
          },
        }
      );
    },
    [location.pathname, navigate]
  );

  const handleRouteClick = useCallback(
    (event, to = "/") => {
      event.preventDefault();

      if (typeof window !== "undefined") {
        window.__gd_footer_pending_hash__ = "";
      }

      const currentPath = normalizePathname(location.pathname);
      const targetPath = normalizePathname(to);
      const isHomeHashState = currentPath === "/" && Boolean(location.hash);

      if (targetPath === "/") {
        navigate(
          {
            pathname: "/",
          },
          {
            replace: currentPath === "/",
            state: null,
          }
        );

        requestAnimationFrame(() => {
          forceTop();
        });

        return;
      }

      if (isHomeHashState) {
        navigate(
          {
            pathname: "/",
          },
          {
            replace: true,
            state: null,
          }
        );

        requestAnimationFrame(() => {
          navigate(targetPath, {
            replace: false,
            state: null,
          });

          requestAnimationFrame(() => {
            forceTop();
          });
        });

        return;
      }

      navigate(targetPath, {
        replace: false,
        state: null,
      });

      requestAnimationFrame(() => {
        forceTop();
      });
    },
    [location.pathname, location.hash, navigate]
  );

  useEffect(() => {
    const hashFromState = location.state?.gdScrollHash;
    const targetHash = hashFromState || location.hash;

    if (normalizePathname(location.pathname) !== "/" || !targetHash) {
      return undefined;
    }

    let raf1 = 0;
    let raf2 = 0;
    let timer = 0;

    const clearState = () => {
      if (!location.state?.gdScrollHash) return;

      navigate(
        {
          pathname: "/",
          hash: targetHash,
        },
        {
          replace: true,
          state: null,
        }
      );
    };

    const run = () => {
      const ok = scrollToHash(targetHash);

      if (ok) {
        clearState();
        return;
      }

      timer = window.setTimeout(() => {
        scrollToHash(targetHash);
        clearState();
      }, 160);
    };

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(run);
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.hash, location.state, navigate]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll("[data-footer-reveal]"));
    const reveal = (el) => el.classList.add(styles.in);

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      ref={sectionRef}
      className={styles.section}
      aria-label="サイトフッター"
    >
      <div
        className={cx(styles.topLine, styles.reveal, styles.lineReveal)}
        data-footer-reveal
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.grid}>
          <section
            className={cx(styles.brand, styles.reveal, styles.r1)}
            data-footer-reveal
            aria-label="GUSHIKEN DESIGN"
          >
            <Link
              to="/"
              className={styles.logoLink}
              aria-label="GUSHIKEN DESIGN ホームへ"
              onClick={(event) => handleRouteClick(event, "/")}
            >
              <span className={styles.logoFrame} aria-hidden="true">
                <img
                  src={LOGO_SRC}
                  alt=""
                  className={styles.logo}
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <span className={styles.brandText}>
                <span className={styles.brandName} translate="no">
                  <span className={styles.srOnly}>GUSHIKEN DESIGN</span>
                  <img
                    src="/typography/Gushiken Design22.svg"
                    alt=""
                    aria-hidden="true"
                    className={styles.brandNameSvg}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </span>

                <span className={styles.brandPlace} translate="no">
                  Web Design / Urasoe, Okinawa
                </span>
              </span>
            </Link>

            <p className={styles.brandCopy}>
              沖縄を拠点に、
              <br />
              ホームページ制作・LP制作・Webデザインを行っています。
            </p>

            <Link
              to="/layer0"
              className={styles.lab}
              onClick={(event) => handleRouteClick(event, "/layer0")}
            >
              HIDDEN LABORATORY
            </Link>
          </section>

          <nav
            className={cx(styles.nav, styles.reveal, styles.r2)}
            data-footer-reveal
            aria-label="フッターメニュー"
          >
            <p className={styles.colLabel}>MENU</p>

            <div className={styles.linkList}>
              {MENU_LINKS.map((item, index) => (
                <Link
                  key={`${item.label}-${item.hash}`}
                  to={`/${item.hash}`}
                  className={styles.link}
                  style={{ "--link-index": index }}
                  onClick={(event) => handleHashClick(event, item.hash)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className={styles.areaBlock}>
              <p className={styles.colSubLabel}>ENTRY</p>

              <div className={styles.areaList}>
                {AREA_LINKS.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={styles.areaLink}
                    style={{ "--link-index": index + MENU_LINKS.length }}
                    onClick={(event) => handleRouteClick(event, item.to)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <section
            className={cx(styles.side, styles.reveal, styles.r3)}
            data-footer-reveal
            aria-label="関連リンク"
          >
            <div className={styles.projects}>
              <p className={styles.colLabel}>SIDE PROJECTS</p>

              <div className={styles.projectList}>
                {PROJECT_LINKS.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    translate="no"
                    style={{ "--link-index": index }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.snsRow} aria-label="SNSリンク">
              <a
                href={NOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(styles.sns, styles.snsWithIcon)}
                translate="no"
                aria-label="noteを開く"
                style={{ "--link-index": 0 }}
              >
                <span className={styles.snsIconWrap} aria-hidden="true">
                  <NoteIcon />
                </span>
                <span className={styles.snsLabel}>note</span>
              </a>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            <nav className={styles.legalList} aria-label="法務リンク">
              {LEGAL_LINKS.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={styles.legal}
                  style={{ "--link-index": index }}
                  onClick={(event) => handleRouteClick(event, item.to)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>
        </div>

        <div
          className={cx(styles.bottom, styles.reveal, styles.r4)}
          data-footer-reveal
        >
          <p className={styles.guideText}>
            このサイトのデザインや文章は、
            <span>紹介・引用の範囲であれば歓迎しています。</span>
            <br />
            <em>無断転載・複製・再配布・商用利用はご遠慮ください。</em>
          </p>

          <p className={styles.copyright} translate="no">
            © 2025 GUSHIKEN DESIGN
          </p>
        </div>
      </div>
    </footer>
  );
}