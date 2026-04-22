import React, { useEffect, useState } from "react";
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

/* ── 王冠 SVG（幾何学的・極細） ── */
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
      <rect x="18.2" y="2" width="3.6" height="3.6" transform="rotate(45 20 3.8)" strokeWidth="0.85" />
      <rect x="2.2" y="8" width="3.6" height="3.6" transform="rotate(45 4 9.8)" strokeWidth="0.85" />
      <rect x="34.2" y="8" width="3.6" height="3.6" transform="rotate(45 36 9.8)" strokeWidth="0.85" />
    </svg>
  );
}

/* ── 学習中アイコン（コンパス風） ── */
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

  return (
    <div
      className={`qcard qcard--${item.tier} ${clickable ? "qcard--clickable" : ""}`}
      onClick={() => clickable && onOpen(item)}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(item);
        }
      }}
    >
      <div className="qcard__accent-line" aria-hidden="true" />

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
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    // ✅ body fixedは使わない（Navと同じ思想）
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="certificate-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="certificate-modal__inner" onClick={(e) => e.stopPropagation()}>
        <div className="certificate-modal__header">
          <div>
            <p className="certificate-modal__label">Qualification</p>
            <h4 className="certificate-modal__title">{item.title}</h4>
          </div>

          <button type="button" className="certificate-modal__close" onClick={onClose}>
            CLOSE
          </button>
        </div>

    
<div className="certificate-modal__imageWrap">
  <img
    src={item.image}
    alt={`${item.title} の証明画像`}
    className="certificate-modal__image"
  />

  {/* ✅ 追加：悪用対策の注記 */}
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

  return (
    <>
      <section id="about" className="about-section aq-fade">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="about-gold-line aq-fade delay-1" />

          <h2
            className="
              aq-fade delay-1
              text-[2.2rem] sm:text-[2.4rem]
              tracking-[0.22em]
              text-white font-light
              pl-1 mb-2
            "
            translate="no"
          >
            ABOUT
          </h2>

          <p
            className="
              aq-fade delay-1
              text-white/60
              text-[0.85rem] sm:text-[0.9rem]
              tracking-[0.12em]
              mb-10 sm:mb-12
              pl-1
            "
          >
            ― 制作者について ―
          </p>

          {/* =========================
              LEAD / BODY（文章だけ整え）
          ========================= */}
          {/* PC */}
          <div className="hidden sm:block">
            <p className="about-lead aq-fade delay-2 text-[0.95rem] sm:text-[1rem] leading-[2.1] sm:leading-[2.2]">
              上品に見えるのに、読みやすい。
              <br />
              <span className="text-white/95">印象が整うWebサイト</span>を作りたい方へ。
              <br />
              デザインと情報の両方を整えながら、公開まで一貫して制作しています。
            </p>

            <p className="about-body aq-fade delay-3 text-[0.95rem] sm:text-[1rem] leading-[2.2] sm:leading-[2.3]">
              大切にしているのは、
              <span className="text-white/95">必要な情報が迷わず入ること</span>。
              <br />
              写真・色・余白・文字のバランスを整え、見え方に一貫性を作ります。
              <br />
              見た目だけで終わらせず、<span className="text-white/90">読み手が判断しやすい流れ</span>まで整えます。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p className="about-lead aq-fade delay-2 text-[0.95rem] leading-[2.1]">
              上品に見えるのに、
              <br />
              読みやすい。
              <br />
              <span className="text-white/95">印象が整うWebサイト</span>を
              <br />
              作りたい方へ。
              <br /><br />
              デザインと情報の両方を整えながら、
              <br />
              公開まで一貫して制作しています。
            </p>

            <p className="about-body aq-fade delay-3 text-[0.95rem] leading-[2.15]">
              大切にしているのは、
              <br />
              <span className="text-white/95">
                必要な情報が迷わず入ること。
              </span>
              <br /><br />
              写真・色・余白・文字を整え、
              <br />
              見え方に一貫性を作ります。
              <br /><br />
              見た目だけで終わらせず、
              <br />
              <span className="text-white/90">判断しやすい流れ</span>まで整えます。
            </p>
          </div>

          {/* =========================
              NAME / ROLE（名乗りを“印象設計”へ）
          ========================= */}
          <div className="mb-14 sm:mb-16 aq-fade delay-4">
            <h3 className="about-name text-[1.1rem] sm:text-[1.2rem]" translate="no">
              Gushiken Yuto
            </h3>

            {/* PC */}
            <div className="hidden sm:block">
              <p className="about-text text-[0.9rem] sm:text-[0.95rem] leading-[2.1] sm:leading-[2.2]">
                Impression Design / Web Design
                <br />
                沖縄を拠点に、Web制作・Webデザインを行っています。
                <br /><br />
                デザインから実装まで一貫して対応し、
                <span className="text-white/90">見え方と使いやすさ</span>を整えながら、
                公開まで丁寧に進めます。
              </p>
            </div>

            {/* SP */}
            <div className="block sm:hidden">
              <p className="about-text text-[0.9rem] leading-[2.1]">
                Impression Design / Web Design
                <br />
                沖縄を拠点に、
                <br />
                Web制作・Webデザインを
                <br />
                行っています。
                <br /><br />
                デザインから実装まで一貫して対応し、
                <br />
                <span className="text-white/90">見え方と使いやすさ</span>を整えながら、
                <br />
                公開まで丁寧に進めます。
              </p>
            </div>

            <a
              href="https://note.com/noahgushi123"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-6
                text-white/50 hover:text-white/80
                underline underline-offset-[4px]
                text-[0.85rem] tracking-[0.14em]
                transition
              "
            >
              制作の裏側を見る
            </a>
          </div>

          {/* =========================
              QUALIFICATIONS
          ========================= */}
          <div className="qualifications-block aq-fade delay-5">
            <p className="qualifications-label">― QUALIFICATIONS ―</p>

            <div className="hidden sm:block">
              <p className="qualifications-intro">
                制作の土台として、
                <br />
                資格取得と学習も継続しています。
              </p>
            </div>

            <div className="block sm:hidden">
              <p className="qualifications-intro">
                制作の土台として、
                <br />
                資格取得と学習も
                <br />
                継続しています。
              </p>
            </div>

            <div className="qualifications-grid">
              {QUALIFICATIONS.map((item, index) => (
                <div key={item.id} className={`aq-fade delay-${5 + index}`}>
                  <QualificationCard item={item} onOpen={(selected) => setActiveCertificate(selected)} />
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              STYLE（4つの軸：文章だけ整え）
          ========================= */}
          <div className="space-y-8 sm:space-y-9 mb-16 sm:mb-20">
            <div className="aq-fade delay-5">
              <h4 className="about-style-title">・伝わる順序を整える</h4>
              <p className="about-style-text">必要な情報が自然に入るよう、見せる順序と区切りを整えます。</p>
            </div>

            <div className="aq-fade delay-5">
              <h4 className="about-style-title">・見え方をそろえる</h4>
              <p className="about-style-text">写真や色のトーンを合わせ、全体の印象を一つにまとめます。</p>
            </div>

            <div className="aq-fade delay-6">
              <h4 className="about-style-title">・迷いを減らす</h4>
              <p className="about-style-text">初めての方でも戸惑わないよう、導線とUIの分かりやすさに配慮します。</p>
            </div>

            <div className="aq-fade delay-6">
              <h4 className="about-style-title">・公開まで丁寧に進める</h4>
              <p className="about-style-text">デザインから実装まで一貫して対応し、公開まで進行します。</p>
            </div>
          </div>

          {/* =========================
              SITE TONE（“落ち着いた”連呼を回避）
          ========================= */}
          <div className="aq-fade delay-7 mb-16 sm:mb-20">
            <p className="text-white/25 text-[0.68rem] tracking-[0.22em] mb-5 pl-1">
              ― SITE TONE ―
            </p>

            <div className="hidden sm:block">
              <p className="text-white/50 text-[0.88rem] leading-[2] tracking-[0.08em] mb-7">
                掲載しているサイトでは、
                <br />
                余白と読みやすさを優先し、見え方の一貫性を大切にしています。
              </p>
            </div>

            <div className="block sm:hidden">
              <p className="text-white/50 text-[0.86rem] leading-[1.95] tracking-[0.08em] mb-7">
                掲載しているサイトでは、
                <br />
                余白と読みやすさを優先し、
                <br />
                見え方の一貫性を大切にしています。
              </p>
            </div>

            {/* swatchesはそのまま */}
            <div className="flex gap-2 sm:gap-3 mb-7">
              {[
                { bg: "#0d0d0d", label: "DEEP" },
                { bg: "#1a1a1a", label: "BASE" },
                { bg: "#2c2b29", label: "WARM" },
                { bg: "rgba(255,255,255,0.5)", label: "LIGHT" },
                { bg: "linear-gradient(135deg,#d9b98a,#e8d5a3)", label: "GOLD" },
              ].map(({ bg, label }) => (
                <div key={label} className="flex-1 flex flex-col gap-2">
                  <div className="rounded-[2px] border border-white/[0.07]" style={{ height: "68px", background: bg }} />
                  <p className="text-[0.58rem] tracking-[0.16em] text-white/20 text-center">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-5 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div>
                <p className="text-[0.6rem] tracking-[0.2em] text-white/20 mb-2 uppercase">Font</p>
                <p className="text-white/65 text-[1rem] tracking-[0.08em] font-light leading-relaxed">Aa Bb</p>
                <p className="text-[0.72rem] tracking-[0.13em] text-white/30 mt-1">読みやすさ</p>
              </div>

              <div>
                <p className="text-[0.6rem] tracking-[0.2em] text-white/20 mb-3 uppercase">Spacing</p>
                <div className="flex flex-col gap-[5px] mb-2">
                  <div className="h-[1.5px] w-full" style={{ background: "rgba(255,255,255,0.12)" }} />
                  <div className="h-[1.5px] w-[68%]" style={{ background: "rgba(255,255,255,0.08)" }} />
                  <div className="h-[1.5px] w-[42%]" style={{ background: "rgba(255,255,255,0.05)" }} />
                </div>
                <p className="text-[0.72rem] tracking-[0.13em] text-white/30">情報の区切り</p>
              </div>

              <div>
                <p className="text-[0.6rem] tracking-[0.2em] text-white/20 mb-3 uppercase">Tone</p>
                <div className="flex gap-[6px] mb-2">
                  {[
                    { bg: "#0e0e0e", border: "rgba(255,255,255,0.18)" },
                    { bg: "#2c2b29", border: "rgba(255,255,255,0.12)" },
                    { bg: "rgba(255,255,255,0.5)", border: "rgba(255,255,255,0.12)" },
                    { bg: "#d9b98a", border: "transparent" },
                  ].map(({ bg, border }, i) => (
                    <div
                      key={i}
                      className="rounded-full"
                      style={{ width: 15, height: 15, background: bg, border: `1px solid ${border}` }}
                    />
                  ))}
                </div>
                <p className="text-[0.72rem] tracking-[0.13em] text-white/30">統一感</p>
              </div>
            </div>
          </div>

          {/* LAST */}
          <div className="hidden sm:block">
            <p className="about-last aq-fade delay-8 text-[0.95rem] sm:text-[1rem] leading-[2.1] sm:leading-[2.2]">
              あなたのサービスの魅力を、
              <span className="text-white/95">見やすく、上品に伝わるWebサイト</span>として形にします。
            </p>
          </div>

          <div className="block sm:hidden">
            <p className="about-last aq-fade delay-8 text-[0.95rem] leading-[2.1]">
              あなたのサービスの魅力を、
              <br />
              <span className="text-white/95">見やすく、上品に伝わるWebサイト</span>として形にします。
            </p>
          </div>
        </div>
      </section>

      <CertificateModal item={activeCertificate} onClose={() => setActiveCertificate(null)} />
    </>
  );
}