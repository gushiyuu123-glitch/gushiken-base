// src/components/Footer.jsx
import React, { useCallback, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const LOGO_SRC = "/logo-gd.png";

// TODO: あとで自分のURLに差し替え
const INSTAGRAM_URL = "https://www.instagram.com/";
const NOTE_URL = "https://note.com/noahgushi123";

const MENU_LINKS = [
  { type: "hash", label: "WORKS", hash: "#works" },
  { type: "hash", label: "ABOUT", hash: "#about" },
  { type: "hash", label: "POLICY", hash: "#philosophy" },
  { type: "hash", label: "PRICE", hash: "#price" },
  { type: "hash", label: "CONTACT", hash: "#contact" },

  // Entry / SEO islands
  { type: "route", label: "沖縄のHP制作", to: "/okinawa" },
  { type: "route", label: "全国オンライン制作", to: "/online" },
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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.snsIcon}>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" />
      <circle cx="12" cy="12" r="4.15" />
      <circle cx="17.2" cy="6.9" r="1.05" className={styles.snsDot} />
    </svg>
  );
}

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

function getLenisLike() {
  const api = window.__gd_lenis__;

  if (api?.lenis?.scrollTo) return api.lenis;
  if (api?.scrollTo) return api;

  return null;
}

function scrollToHash(hash, options = {}) {
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

export default function Footer() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = useCallback(
    (event, hash) => {
      event.preventDefault();

      if (!hash) return;

      // Home上ならその場でスクロール
      if (location.pathname === "/") {
        window.history.replaceState(null, "", `/${hash}`);

        requestAnimationFrame(() => {
          scrollToHash(hash);
        });

        return;
      }

      // 他ページからHomeへ戻る時だけ state で一回渡す
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

  const handleRouteClick = useCallback(() => {
    // 念のため、過去に残った古いグローバル値を消す
    if (typeof window !== "undefined") {
      window.__gd_footer_pending_hash__ = "";
    }
  }, []);

  // 他ページ → Home hash 遷移後、1回クリックで確実に対象へ寄せる
  useEffect(() => {
    const hashFromState = location.state?.gdScrollHash;
    const targetHash = hashFromState || location.hash;

    if (location.pathname !== "/" || !targetHash) return undefined;

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

      // HomeのDOM描画が遅れた時の保険
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

    targets.forEach((t) => observer.observe(t));

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
          {/* BRAND */}
          <section
            className={cx(styles.brand, styles.reveal, styles.r1)}
            data-footer-reveal
            aria-label="GUSHIKEN DESIGN"
          >
            <Link
              to="/"
              className={styles.logoLink}
              aria-label="GUSHIKEN DESIGN ホームへ"
              onClick={handleRouteClick}
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
                  Web Design / Okinawa
                </span>
              </span>
            </Link>

            <p className={styles.brandCopy}>
              沖縄を拠点に、
              <br />
              世界観と導線を設計するWeb制作を行っています。
            </p>

            <Link to="/layer0" className={styles.lab} onClick={handleRouteClick}>
              HIDDEN LABORATORY
            </Link>
          </section>

          {/* MENU */}
          <nav
            className={cx(styles.nav, styles.reveal, styles.r2)}
            data-footer-reveal
            aria-label="フッターメニュー"
          >
            <p className={styles.colLabel}>MENU</p>

            <div className={styles.linkList}>
              {MENU_LINKS.map((item, index) => {
                const key = `${item.type}-${item.label}-${
                  item.to || item.hash || index
                }`;

                if (item.type === "hash") {
                  return (
                    <Link
                      key={key}
                      to={`/${item.hash}`}
                      className={styles.link}
                      style={{ "--link-index": index }}
                      onClick={(event) => handleHashClick(event, item.hash)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={key}
                    to={item.to}
                    className={styles.link}
                    style={{ "--link-index": index }}
                    onClick={handleRouteClick}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* PROJECTS / SOCIAL / LEGAL */}
          <section
            className={cx(styles.side, styles.reveal, styles.r3)}
            data-footer-reveal
            aria-label="関連リンク"
          >
            <div className={styles.projects}>
              <p className={styles.colLabel}>EXPERIMENTAL PROJECTS</p>

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
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(styles.sns, styles.snsWithIcon)}
                translate="no"
                aria-label="Instagramを開く"
                style={{ "--link-index": 0 }}
              >
                <span className={styles.snsIconWrap} aria-hidden="true">
                  <InstagramIcon />
                </span>
                <span className={styles.snsLabel}>Instagram</span>
              </a>

              <a
                href={NOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(styles.sns, styles.snsWithIcon)}
                translate="no"
                aria-label="noteを開く"
                style={{ "--link-index": 1 }}
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
                  onClick={handleRouteClick}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>
        </div>

        {/* BOTTOM */}
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