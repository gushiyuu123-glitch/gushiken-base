// src/pages/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "./SectionSvgTitle";
import styles from "./About.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const QUALIFICATIONS = [
  {
    id: "html5-expert",
    status: "取得済み",
    statusEn: "ACQUIRED",
    title: "HTML5 Webエキスパート",
    org: "Webクリエイター能力認定試験",
    year: "2025",
    note: "証明書あり",
    image: "/images/certificates/web-expert-certificate-site-final1.webp",
    tier: "acquired",
    action: "証明を見る →",
  },
  {
    id: "color-design",
    status: "強化領域",
    statusEn: "FOCUS",
    title: "色彩設計 / 配色理論",
    org: "色彩検定2級の範囲をベースに、配色・トーン設計を強化",
    year: "",
    note: "実務反映",
    image: null,
    tier: "focus",
    action: "設計に反映中",
  },
];

const STYLE_ITEMS = [
  {
    title: "印象の入口を設計する",
    text: "最初に何を見せるか、どこで止めるかを整理し、サービスの空気が伝わる入口を作ります。",
  },
  {
    title: "見え方のトーンを揃える",
    text: "写真・色・文字・余白の温度を合わせ、全体の印象がばらつかないよう整えます。",
  },
  {
    title: "迷わない導線をつくる",
    text: "初めて見る人が、内容を理解し、比較し、問い合わせまで進みやすい流れを設計します。",
  },
  {
    title: "公開まで一貫して進める",
    text: "構成・デザイン・実装・公開までを分断せず、目的に合わせて最後まで整えます。",
  },
];

const SWATCHES = [
  { bg: "#0d0d0d", label: "DEEP" },
  { bg: "#1a1a1a", label: "BASE" },
  { bg: "#2c2b29", label: "WARM" },
  { bg: "rgba(255,255,255,0.5)", label: "LIGHT" },
  { bg: "linear-gradient(135deg,#c9b18a,#d9c29a,#8f7650)", label: "GOLD" },
];

function CrownIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="4" y1="22" x2="36" y2="22" strokeWidth="1" strokeLinecap="round" />
      <polyline
        points="4,22 4,10 13,17 20,4 27,17 36,10 36,22"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="18.2" y="2" width="3.6" height="3.6" transform="rotate(45 20 3.8)" strokeWidth="0.85" />
      <rect x="2.2" y="8" width="3.6" height="3.6" transform="rotate(45 4 9.8)" strokeWidth="0.85" />
      <rect x="34.2" y="8" width="3.6" height="3.6" transform="rotate(45 36 9.8)" strokeWidth="0.85" />
    </svg>
  );
}

function FocusIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="14" strokeWidth="0.8" strokeDasharray="2.5 3" />
      <circle cx="20" cy="20" r="5.5" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="1.6" strokeWidth="0.9" />
      <line x1="20" y1="18.4" x2="20" y2="7" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="21.4" y1="20.8" x2="30" y2="25.5" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function QualificationRow({ item, index, onOpen }) {
  const clickable = Boolean(item.image);
  const isAcquired = item.tier === "acquired";

  const handleOpen = () => {
    if (!clickable) return;
    onOpen(item);
  };

  return (
    <div
      className={cx(
        styles.qrow,
        styles[`qrow--${item.tier}`],
        clickable ? styles["qrow--clickable"] : ""
      )}
      onClick={handleOpen}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `${item.title} の証明画像を開く` : undefined}
      aria-haspopup={clickable ? "dialog" : undefined}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
    >
      <div className={styles["qrow__meta"]}>
        <span className={styles["qrow__no"]}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {isAcquired ? (
          <CrownIcon className={styles["qrow__icon"]} />
        ) : (
          <FocusIcon className={styles["qrow__icon"]} />
        )}

        <span className={styles["qrow__status"]}>{item.status}</span>
        <span className={styles["qrow__statusEn"]}>{item.statusEn}</span>
      </div>

      <div className={styles["qrow__main"]}>
        <h4 className={styles["qrow__title"]}>{item.title}</h4>
        <p className={styles["qrow__org"]}>
          {item.org}
          {item.year ? (
            <>
              <span className={styles["qrow__org-sep"]}>／</span>
              {item.year}
            </>
          ) : null}
        </p>
      </div>

      <div className={styles["qrow__right"]}>
        <span className={styles["qrow__note"]}>{item.note}</span>
        <span className={styles["qrow__action"]} aria-hidden="true">
          <span>{clickable ? "証明を見る →" : item.action || "設計に反映中"}</span>
        </span>
      </div>
    </div>
  );
}

function CertificateModal({ item, onClose }) {
  const scrollYRef = useRef(0);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (!item) return undefined;

    const html = document.documentElement;
    const body = document.body;
    lastActiveRef.current = document.activeElement;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    scrollYRef.current =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");
    document.addEventListener("keydown", onKey);

    return () => {
      const y = scrollYRef.current;
      document.removeEventListener("keydown", onKey);

      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");

      window.scrollTo(0, y);
      const el = lastActiveRef.current;
      if (el && typeof el.focus === "function") el.focus();
      lastActiveRef.current = null;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className={styles["certificate-modal"]}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className={styles["certificate-modal__inner"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["certificate-modal__header"]}>
          <div>
            <p className={styles["certificate-modal__label"]}>QUALIFICATION</p>
            <h4
              id="certificate-modal-title"
              className={styles["certificate-modal__title"]}
            >
              {item.title}
            </h4>
          </div>

          <button
            type="button"
            className={styles["certificate-modal__close"]}
            onClick={onClose}
            aria-label="証明画像を閉じる"
          >
            CLOSE
          </button>
        </div>

        <div className={styles["certificate-modal__imageWrap"]}>
          <img
            src={item.image}
            alt={`${item.title} の証明画像`}
            className={styles["certificate-modal__image"]}
          />
          <p className={styles["certificate-modal__note"]} aria-label="注意事項">
            ※悪用防止のため、一部情報を加工・解像度調整しています。
          </p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const sectionRef = useRef(null);
  const styleBlockRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    const styleBlock = styleBlockRef.current;
    if (!root) return undefined;

    const sel = `.${styles["about-flow"]}, .${styles["qrow-flow"]}`;
    const revealTargets = Array.from(root.querySelectorAll(sel)).filter(
      (el) => !el.classList.contains(styles["site-tone-block"])
    );
    const siteToneBlock = root.querySelector(`.${styles["site-tone-block"]}`);

    const reveal = (target) => target.classList.add(styles.isIn);

    if (typeof IntersectionObserver === "undefined") {
      revealTargets.forEach(reveal);
      if (styleBlock) styleBlock.classList.add(styles.isIn);
      if (siteToneBlock) siteToneBlock.classList.add(styles.isIn);
      return undefined;
    }

    const flowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          flowObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((t) => flowObserver.observe(t));

    let styleObserver;
    if (styleBlock) {
      styleObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          styleBlock.classList.add(styles.isIn);
          styleObserver.disconnect();
        },
        { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
      );
      styleObserver.observe(styleBlock);
    }

    let siteToneObserver;
    if (siteToneBlock) {
      siteToneObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          siteToneBlock.classList.add(styles.isIn);
          siteToneObserver.disconnect();
        },
        { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
      );
      siteToneObserver.observe(siteToneBlock);
    }

    return () => {
      flowObserver.disconnect();
      if (styleObserver) styleObserver.disconnect();
      if (siteToneObserver) siteToneObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section id="about" ref={sectionRef} className={styles["about-section"]}>
        <div className={styles["about-container"]}>
          <div
            className={cx(
              styles["about-side-line"],
              styles["about-flow"],
              styles["about-flow-line"],
              styles["about-flow-1"]
            )}
            aria-hidden="true"
          />

          <header
            className={cx(
              styles["about-header"],
              styles["about-flow"],
              styles["about-flow-1"]
            )}
          >
            <h2 className={styles.srOnly}>ABOUT</h2>

            <SectionSvgTitle
              title="ABOUT"
              sub="ABOUT / CREATOR"
              className={styles["about-svg-title"]}
            />

            <p className={styles["about-sub"]}>制作者について</p>
          </header>

          <div className={styles["about-intro"]}>
            <p
              className={cx(
                styles["about-lead"],
                styles["about-flow"],
                styles["about-flow-2"]
              )}
            >
              その空気が、
              <br />
              <span>選ばれる理由になる。</span>
            </p>

            <p
              className={cx(
                styles["about-body"],
                styles["about-flow"],
                styles["about-flow-3"]
              )}
            >
              写真、言葉、余白、導線。
              <br />
              ひとつずつ整えることで、商品・空間・サービスの印象は変わります。
              <br />
              見た目だけで終わらせず、<span>読み手が判断しやすい流れ</span>まで設計します。
            </p>
          </div>

          <div
            className={cx(
              styles["about-profile"],
              styles["about-flow"],
              styles["about-flow-4"]
            )}
          >
            <h3 className={styles["about-name"]} translate="no">
              Gushiken Yuto
            </h3>

            <p className={styles["about-role"]}>
              Web Design / Art Direction / Frontend
            </p>

            <p className={styles["about-text"]}>
              沖縄を拠点に、ホームページ制作・LP制作・Webデザインを行っています。
              <br />
              構成からデザイン、実装、公開まで一貫して対応し、
              <span>印象と使いやすさ</span>を両立したWebサイトへ整えます。
            </p>

            <div className={styles["about-links"]}>
              <Link to="/works" className={styles["about-works-link"]}>
                制作事例を見る
              </Link>

              <Link to="/contact" className={styles["about-contact-link"]}>
                相談する
              </Link>

              <a
                href="https://note.com/noahgushi123"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["about-note-link"]}
              >
                制作の裏側
              </a>
            </div>
          </div>

          <div
            className={cx(
              styles["qualifications-block"],
              styles["about-flow"],
              styles["about-flow-5"]
            )}
          >
            <h3 className={styles["qualifications-label"]}>
              QUALIFICATIONS / FOCUS
            </h3>

            <p className={styles["qualifications-intro"]}>
              証明できる資格と、
              <br />
              制作に反映している設計領域を掲載しています。
            </p>

            <div className={styles["qualifications-list"]}>
              {QUALIFICATIONS.map((item, index) => (
                <div
                  key={item.id}
                  className={styles["qrow-flow"]}
                  style={{ "--q-index": index }}
                >
                  <QualificationRow
                    item={item}
                    index={index}
                    onOpen={setActiveCertificate}
                  />
                </div>
              ))}
            </div>
          </div>

          <div ref={styleBlockRef} className={styles["about-style-block"]}>
            <p
              className={cx(
                styles["about-style-label"],
                styles["about-style-reveal"]
              )}
            >
              DESIGN APPROACH
            </p>

            <div className={styles["about-style-list"]}>
              {STYLE_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className={cx(
                    styles["about-style-item"],
                    styles["about-style-reveal"]
                  )}
                  style={{ "--style-index": index }}
                >
                  <span className={styles["about-style-no"]}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className={styles["about-style-title"]}>{item.title}</h4>
                  <p className={styles["about-style-text"]}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cx(
              styles["site-tone-block"],
              styles["about-flow"],
              styles["about-flow-7"]
            )}
          >
            <p
              className={cx(styles["site-tone-label"], styles["site-flow"])}
              style={{ "--site-index": 0 }}
            >
              SITE TONE
            </p>

            <p
              className={cx(styles["site-tone-text"], styles["site-flow"])}
              style={{ "--site-index": 1 }}
            >
              掲載しているサイトでは、
              <br />
              余白と読みやすさを優先し、見え方の一貫性を大切にしています。
            </p>

            <div className={styles["site-swatch-grid"]}>
              {SWATCHES.map(({ bg, label }, index) => (
                <div
                  key={label}
                  className={cx(styles["site-swatch-item"], styles["site-flow"])}
                  style={{ "--site-index": index + 2 }}
                >
                  <div
                    className={styles["site-swatch"]}
                    style={{ background: bg }}
                  />
                  <p>{label}</p>
                </div>
              ))}
            </div>

            <div
              className={cx(styles["site-tone-meta"], styles["site-flow"])}
              style={{ "--site-index": 7 }}
            >
              <div>
                <p className={styles["site-tone-meta-label"]}>FONT</p>
                <p className={styles["site-tone-meta-main"]}>Aa Bb</p>
                <p className={styles["site-tone-meta-sub"]}>読みやすさ</p>
              </div>

              <div>
                <p className={styles["site-tone-meta-label"]}>SPACING</p>
                <div className={styles["spacing-lines"]}>
                  <span />
                  <span />
                  <span />
                </div>
                <p className={styles["site-tone-meta-sub"]}>情報の区切り</p>
              </div>

              <div>
                <p className={styles["site-tone-meta-label"]}>TONE</p>
                <div className={styles["tone-dots"]}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p className={styles["site-tone-meta-sub"]}>統一感</p>
              </div>
            </div>
          </div>

          <div
            className={cx(
              styles["about-last"],
              styles["about-flow"],
              styles["about-flow-8"]
            )}
          >
            <p>
              あなたのサービスの魅力を、
              <span>選ばれる入口として機能するWebサイト</span>へ整えます。
            </p>
          </div>
        </div>
      </section>

      <CertificateModal
        item={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </>
  );
}