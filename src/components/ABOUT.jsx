import React, { useEffect, useRef, useState } from "react";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./about.css";

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
  },
  {
    id: "color-2",
    status: "学習中",
    statusEn: "IN PROGRESS",
    title: "色彩検定2級",
    org: "基礎〜実務感覚を強化中",
    year: "",
    note: "現在学習中",
    image: null,
    tier: "learning",
  },
];

const STYLE_ITEMS = [
  {
    title: "伝わる順序を整える",
    text: "必要な情報が自然に入るよう、見せる順序と区切りを整えます。",
  },
  {
    title: "見え方をそろえる",
    text: "写真や色のトーンを合わせ、全体の印象を一つにまとめます。",
  },
  {
    title: "迷いを減らす",
    text: "初めての方でも戸惑わないよう、導線とUIの分かりやすさに配慮します。",
  },
  {
    title: "公開まで丁寧に進める",
    text: "デザインから実装まで一貫して対応し、公開まで進行します。",
  },
];

const SWATCHES = [
  { bg: "#0d0d0d", label: "DEEP" },
  { bg: "#1a1a1a", label: "BASE" },
  { bg: "#2c2b29", label: "WARM" },
  { bg: "rgba(255,255,255,0.5)", label: "LIGHT" },
  {
    bg: "linear-gradient(135deg,#c9b18a,#d9c29a,#8f7650)",
    label: "GOLD",
  },
];

function CrownIcon({ className = "" }) {
  return (
    <svg
      className={`crown-icon ${className}`}
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
      <rect
        x="18.2"
        y="2"
        width="3.6"
        height="3.6"
        transform="rotate(45 20 3.8)"
        strokeWidth="0.85"
      />
      <rect
        x="2.2"
        y="8"
        width="3.6"
        height="3.6"
        transform="rotate(45 4 9.8)"
        strokeWidth="0.85"
      />
      <rect
        x="34.2"
        y="8"
        width="3.6"
        height="3.6"
        transform="rotate(45 36 9.8)"
        strokeWidth="0.85"
      />
    </svg>
  );
}

function StudyIcon({ className = "" }) {
  return (
    <svg
      className={`study-icon ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="14" strokeWidth="0.8" strokeDasharray="2.5 3" />
      <circle cx="20" cy="20" r="1.6" strokeWidth="0.9" />
      <line x1="20" y1="18.4" x2="20" y2="7" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="20" y1="21.6" x2="26" y2="30" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function QualificationCard({ item, onOpen }) {
  const clickable = Boolean(item.image);
  const isAcquired = item.tier === "acquired";

  const handleOpen = () => {
    if (!clickable) return;
    onOpen(item);
  };

  return (
    <div
      className={`qcard qcard--${item.tier} ${clickable ? "qcard--clickable" : ""}`}
      onClick={handleOpen}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(event) => {
        if (!clickable) return;

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleOpen();
        }
      }}
    >
      <span className="qcard__accent-line" aria-hidden="true" />

      <div className="qcard__icon-row">
        {isAcquired ? <CrownIcon /> : <StudyIcon />}
        <span className="qcard__status-en">{item.statusEn}</span>
      </div>

      <div className="qcard__body">
        <p className="qcard__status">{item.status}</p>

        <h4 className="qcard__title">{item.title}</h4>

        <p className="qcard__org">
          {item.org}
          {item.year ? (
            <>
              <span className="qcard__org-sep">／</span>
              {item.year}
            </>
          ) : null}
        </p>
      </div>

      <div className="qcard__badge-row">
        <span className="qcard__badge">{item.note}</span>
      </div>

      <div className="qcard__footer">
        <p className="qcard__hint">
          {clickable ? "クリックで証明画像を表示" : "制作の土台として学習を継続中"}
        </p>

        {clickable && (
          <span className="qcard__view-btn" aria-hidden="true">
            <span className="qcard__view-text">VIEW</span>
            <span className="qcard__view-arrow">→</span>
          </span>
        )}
      </div>
    </div>
  );
}
function CertificateModal({ item, onClose }) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!item) return undefined;

    const html = document.documentElement;
    const body = document.body;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    // 開いた瞬間の位置を保存
    scrollYRef.current =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      const y = scrollYRef.current;

      document.removeEventListener("keydown", handleKeyDown);

      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");

      // 解除直後に即戻す
      window.scrollTo(0, y);
      document.documentElement.scrollTop = y;
      document.body.scrollTop = y;

      // 描画ズレ保険
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
        document.documentElement.scrollTop = y;
        document.body.scrollTop = y;
      });

      window.setTimeout(() => {
        window.scrollTo(0, y);
        document.documentElement.scrollTop = y;
        document.body.scrollTop = y;
      }, 60);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="certificate-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className="certificate-modal__inner"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="certificate-modal__header">
          <div>
            <p className="certificate-modal__label">QUALIFICATION</p>
            <h4 id="certificate-modal-title" className="certificate-modal__title">
              {item.title}
            </h4>
          </div>

          <button
            type="button"
            className="certificate-modal__close"
            onClick={onClose}
            aria-label="証明画像を閉じる"
          >
            CLOSE
          </button>
        </div>

        <div className="certificate-modal__imageWrap">
          <img
            src={item.image}
            alt={`${item.title} の証明画像`}
            className="certificate-modal__image"
          />

          <p className="certificate-modal__note" aria-label="注意事項">
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

    const revealTargets = Array.from(
      root.querySelectorAll(".about-flow, .qcard-flow")
    );

    const reveal = (target) => {
      target.classList.add("is-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      revealTargets.forEach(reveal);
      if (styleBlock) styleBlock.classList.add("is-in");
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
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealTargets.forEach((target) => flowObserver.observe(target));

    let styleObserver;

    if (styleBlock) {
      styleObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;

          styleBlock.classList.add("is-in");
          styleObserver.disconnect();
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      styleObserver.observe(styleBlock);
    }

    return () => {
      flowObserver.disconnect();
      if (styleObserver) styleObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section id="about" ref={sectionRef} className="about-section">
        <div className="about-container">
          <div
            className="about-side-line about-flow about-flow-line about-flow-1"
            aria-hidden="true"
          />

          <header className="about-header about-flow about-flow-1">
            <SectionSvgTitle
              title="ABOUT"
              sub="ABOUT / CREATOR"
              className="about-svg-title"
            />

            <p className="about-sub">制作者について</p>
          </header>

          <div className="about-intro">
            <p className="about-lead about-flow about-flow-2">
              上品に見えるのに、読みやすい。
              <br />
              <span>印象が整うWebサイト</span>を作りたい方へ。
              <br />
              デザインと情報の両方を整えながら、公開まで一貫して制作しています。
            </p>

            <p className="about-body about-flow about-flow-3">
              大切にしているのは、<span>必要な情報が迷わず入ること</span>。
              <br />
              写真・色・余白・文字のバランスを整え、見え方に一貫性を作ります。
              <br />
              見た目だけで終わらせず、<span>読み手が判断しやすい流れ</span>まで整えます。
            </p>
          </div>

          <div className="about-profile about-flow about-flow-4">
            <h3 className="about-name" translate="no">
              Gushiken Yuto
            </h3>

            <p className="about-role">Impression Design / Web Design</p>

            <p className="about-text">
              沖縄を拠点に、Web制作・Webデザインを行っています。
              <br />
              デザインから実装まで一貫して対応し、<span>見え方と使いやすさ</span>
              を整えながら、公開まで丁寧に進めます。
            </p>

            <a
              href="https://note.com/noahgushi123"
              target="_blank"
              rel="noopener noreferrer"
              className="about-note-link"
            >
              制作の裏側を見る
            </a>
          </div>

          <div className="qualifications-block about-flow about-flow-5">
            <p className="qualifications-label">QUALIFICATIONS</p>

            <p className="qualifications-intro">
              制作の信頼性を高めるため、
              <br />
              基礎学習と資格取得も継続しています。
            </p>

            <div className="qualifications-grid">
              {QUALIFICATIONS.map((item, index) => (
                <div
                  key={item.id}
                  className="qcard-flow"
                  style={{ "--q-index": index }}
                >
                  <QualificationCard
                    item={item}
                    onOpen={(selected) => setActiveCertificate(selected)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div ref={styleBlockRef} className="about-style-block">
            <p className="about-style-label about-style-reveal">
              DESIGN APPROACH
            </p>

            <div className="about-style-grid">
              {STYLE_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className="about-style-card about-style-reveal"
                  style={{ "--style-index": index }}
                >
                  <span className="about-style-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h4 className="about-style-title">{item.title}</h4>
                    <p className="about-style-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="site-tone-block about-flow about-flow-7">
            <p className="site-tone-label site-flow" style={{ "--site-index": 0 }}>
              SITE TONE
            </p>

            <p className="site-tone-text site-flow" style={{ "--site-index": 1 }}>
              掲載しているサイトでは、
              <br />
              余白と読みやすさを優先し、見え方の一貫性を大切にしています。
            </p>

            <div className="site-swatch-grid">
              {SWATCHES.map(({ bg, label }, index) => (
                <div
                  key={label}
                  className="site-swatch-item site-flow"
                  style={{ "--site-index": index + 2 }}
                >
                  <div className="site-swatch" style={{ background: bg }} />
                  <p>{label}</p>
                </div>
              ))}
            </div>

            <div className="site-tone-meta site-flow" style={{ "--site-index": 7 }}>
              <div>
                <p className="site-tone-meta-label">FONT</p>
                <p className="site-tone-meta-main">Aa Bb</p>
                <p className="site-tone-meta-sub">読みやすさ</p>
              </div>

              <div>
                <p className="site-tone-meta-label">SPACING</p>
                <div className="spacing-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="site-tone-meta-sub">情報の区切り</p>
              </div>

              <div>
                <p className="site-tone-meta-label">TONE</p>
                <div className="tone-dots">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p className="site-tone-meta-sub">統一感</p>
              </div>
            </div>
          </div>

          <div className="about-last about-flow about-flow-8">
            <p>
              あなたのサービスの魅力を、
              <span>見やすく、上品に伝わるWebサイト</span>として形にします。
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