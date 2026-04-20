import React, { useEffect, useState } from "react";
import "./about.css";

const QUALIFICATIONS = [
  {
    id: "html5-expert",
    status: "取得済み",
    title: "HTML5 Webエキスパート",
    org: "Webクリエイター能力認定試験",
    year: "2025",
    note: "証明書あり",
    image: "/images/certificates/web-expert-certificate-site-final.webp",
  },
  {
    id: "color-2",
    status: "学習中",
    title: "色彩検定2級",
    org: "基礎〜実務感覚を強化中",
    year: "",
    note: "現在学習中",
    image: null,
  },
];

function QualificationCard({ item, onOpen }) {
  const clickable = Boolean(item.image);

  return (
    <div
      className={`qualification-card ${clickable ? "is-clickable" : ""}`}
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
      <div className="qualification-card__top">
        <div>
          <p className="qualification-card__status">{item.status}</p>
          <h4 className="qualification-card__title">{item.title}</h4>
          <p className="qualification-card__org">
            {item.org}
            {item.year ? ` / ${item.year}` : ""}
          </p>
        </div>

        <div className="qualification-card__badge">
          <span>{item.note}</span>
        </div>
      </div>

      <div className="qualification-card__bottom">
        <p className="qualification-card__hint">
          {clickable ? "クリックで証明画像を表示" : "制作の土台として学習を継続中"}
        </p>

        {clickable && <span className="qualification-card__view">VIEW</span>}
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

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="certificate-modal" onClick={onClose}>
      <div
        className="certificate-modal__inner"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="certificate-modal__header">
          <div>
            <p className="certificate-modal__label">Qualification</p>
            <h4 className="certificate-modal__title">{item.title}</h4>
          </div>

          <button
            type="button"
            className="certificate-modal__close"
            onClick={onClose}
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
          <div className="about-gold-line aq-fade delay-1"></div>

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

          {/* PC */}
          <div className="hidden sm:block">
            <p
              className="
                about-lead aq-fade delay-2
                text-[0.95rem] sm:text-[1rem]
                leading-[2.1] sm:leading-[2.2]
              "
            >
              「テンプレのような雰囲気は避けたい。
              <br />
              でも、ハイブランドのように固すぎる印象にもしたくない」
              <br />
              <br />
              そんな
              <span className="text-white/95">
                上品で落ち着いたデザイン
              </span>
              を求める方へ向けて制作しています。
              <br />
              美容・EC・店舗・サロンなど、
              <span className="text-white/90">
                業種に合わせた見せ方
              </span>
              を大切にしています。
            </p>

            <p
              className="
                about-body aq-fade delay-3
                text-[0.95rem] sm:text-[1rem]
                leading-[2.2] sm:leading-[2.3]
              "
            >
              大切にしているのは、
              <span className="text-white/95">
                見やすさと安心感が自然に伝わること。
              </span>
              <br />
              どれだけ見た目が整っていても、内容が伝わりにくければ意味がありません。
              <br />
              <br />
              写真・色・余白・文字のバランスを丁寧に整えながら、
              <span className="text-white/90">
                サービスやブランドの魅力が伝わる形
              </span>
              に仕上げています。
              <br />
              ガチャガチャしすぎず、落ち着きがあり、
              <br />
              「ちゃんとしている」と感じてもらえる印象を大切にしています。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p
              className="
                about-lead aq-fade delay-2
                text-[0.95rem]
                leading-[2.1]
              "
            >
              「テンプレっぽい雰囲気は避けたい。
              <br />
              でも、ハイブランドほど
              <br />
              固くしたくない」
              <br />
              <br />
              そんな
              <span className="text-white/95">
                上品で落ち着いたデザイン
              </span>
              を求める方へ向けて制作しています。
              <br />
              美容・EC・店舗・サロンなど、
              <br />
              <span className="text-white/90">
                業種に合わせた見せ方
              </span>
              を大切にしています。
            </p>

            <p
              className="
                about-body aq-fade delay-3
                text-[0.95rem]
                leading-[2.15]
              "
            >
              大切にしているのは、
              <br />
              <span className="text-white/95">
                見やすさと安心感
              </span>
              が自然に伝わること。
              <br />
              <br />
              どれだけ綺麗に見えても、
              <br />
              内容が伝わりにくければ意味がありません。
              <br />
              <br />
              写真・色・余白・文字を整えながら、
              <br />
              <span className="text-white/90">
                魅力が伝わる形
              </span>
              に仕上げています。
            </p>
          </div>

          <div className="mb-14 sm:mb-16 aq-fade delay-4">
            <h3
              className="
                about-name
                text-[1.1rem] sm:text-[1.2rem]
              "
              translate="no"
            >
              Gushiken Yuto
            </h3>

            {/* PC */}
            <div className="hidden sm:block">
              <p
                className="
                  about-text
                  text-[0.9rem] sm:text-[0.95rem]
                  leading-[2.1] sm:leading-[2.2]
                "
              >
                Designer / Front-end Creator
                <br />
                沖縄を拠点に、ブランドサイト・サロン・カフェ・個人ビジネスなどの
                Webサイトを制作しています。
                <br />
                <br />
                デザインから実装まで一貫して対応することで、
                <span className="text-white/90">
                  見た目だけで終わらず、使いやすさまで含めて整える
                </span>
                ことを大切にしています。
              </p>
            </div>

            {/* SP */}
            <div className="block sm:hidden">
              <p
                className="
                  about-text
                  text-[0.9rem]
                  leading-[2.1]
                "
              >
                Designer / Front-end Creator
                <br />
                沖縄を拠点に、
                <br />
                ブランドサイト・サロン・カフェ・
                <br />
                個人ビジネスなどの
                <br />
                Webサイトを制作しています。
                <br />
                <br />
                デザインから実装まで一貫して対応し、
                <br />
                <span className="text-white/90">
                  見た目だけでなく
                  <br />
                  使いやすさまで整える
                </span>
                ことを大切にしています。
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
              制作の背景や考え方を見る
            </a>
          </div>

          {/* Qualifications */}
          <div className="qualifications-block aq-fade delay-5">
            <p className="qualifications-label">― QUALIFICATIONS ―</p>

            {/* PC */}
            <div className="hidden sm:block">
              <p className="qualifications-intro">
                制作の印象だけでなく、
                <br />
                基礎知識と積み重ねも含めて、静かに信頼へつなげています。
              </p>
            </div>

            {/* SP */}
            <div className="block sm:hidden">
              <p className="qualifications-intro">
                制作の印象だけでなく、
                <br />
                基礎知識と積み重ねも含めて、
                <br />
                静かに信頼へつなげています。
              </p>
            </div>

            <div className="qualifications-grid">
              {QUALIFICATIONS.map((item, index) => (
                <div key={item.id} className={`aq-fade delay-${5 + index}`}>
                  <QualificationCard
                    item={item}
                    onOpen={(selected) => setActiveCertificate(selected)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 sm:space-y-9 mb-16 sm:mb-20">
            <div className="aq-fade delay-5">
              <h4 className="about-style-title">・見やすく整理する</h4>
              <p className="about-style-text">
                情報を整え、初めて訪れた方にも伝わりやすい画面を目指します。
              </p>
            </div>

            <div className="aq-fade delay-5">
              <h4 className="about-style-title">・雰囲気をそろえる</h4>
              <p className="about-style-text">
                写真や色のトーンを整え、ブランドらしさが伝わる印象にまとめます。
              </p>
            </div>

            <div className="aq-fade delay-6">
              <h4 className="about-style-title">・動きは控えめに使う</h4>
              <p className="about-style-text">
                過度な演出に頼らず、見やすさや印象を損なわない範囲で整えます。
              </p>
            </div>

            <div className="aq-fade delay-6">
              <h4 className="about-style-title">・デザインから実装まで対応する</h4>
              <p className="about-style-text">
                完成後の見え方まで含めて、全体の印象がぶれないよう制作しています。
              </p>
            </div>
          </div>

          {/* ── Design Palette ── */}
          <div className="aq-fade delay-7 mb-16 sm:mb-20">
            <p className="text-white/25 text-[0.68rem] tracking-[0.22em] mb-5 pl-1">
              ― DESIGN PALETTE ―
            </p>

            {/* PC intro */}
            <div className="hidden sm:block">
              <p className="text-white/50 text-[0.88rem] leading-[2] tracking-[0.08em] mb-7">
                落ち着き・品・やわらかさを保つために、
                <br />
                色や余白、文字のトーンも細かく整えています。
              </p>
            </div>

            {/* SP intro */}
            <div className="block sm:hidden">
              <p className="text-white/50 text-[0.86rem] leading-[1.95] tracking-[0.08em] mb-7">
                落ち着き・品・やわらかさを保つために、
                <br />
                色や余白、文字のトーンも
                <br />
                細かく整えています。
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 mb-7">
              {[
                { bg: "#0d0d0d", label: "DEEP" },
                { bg: "#1a1a1a", label: "BASE" },
                { bg: "#2c2b29", label: "WARM" },
                { bg: "rgba(255,255,255,0.5)", label: "LIGHT" },
                { bg: "linear-gradient(135deg,#c9a96e,#e8d5a3)", label: "GOLD" },
              ].map(({ bg, label }) => (
                <div key={label} className="flex-1 flex flex-col gap-2">
                  <div
                    className="rounded-[2px] border border-white/[0.07]"
                    style={{ height: "68px", background: bg }}
                  />
                  <p className="text-[0.58rem] tracking-[0.16em] text-white/20 text-center">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="grid grid-cols-3 gap-5 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div>
                <p className="text-[0.6rem] tracking-[0.2em] text-white/20 mb-2 uppercase">
                  Font
                </p>
                <p className="text-white/65 text-[1rem] tracking-[0.08em] font-light leading-relaxed">
                  Aa Bb
                </p>
                <p className="text-[0.72rem] tracking-[0.13em] text-white/30 mt-1">
                  細字・余白重視
                </p>
              </div>

              <div>
                <p className="text-[0.6rem] tracking-[0.2em] text-white/20 mb-3 uppercase">
                  Spacing
                </p>
                <div className="flex flex-col gap-[5px] mb-2">
                  <div
                    className="h-[1.5px] w-full"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  />
                  <div
                    className="h-[1.5px] w-[68%]"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  />
                  <div
                    className="h-[1.5px] w-[42%]"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  />
                </div>
                <p className="text-[0.72rem] tracking-[0.13em] text-white/30">
                  余白で整理する
                </p>
              </div>

              <div>
                <p className="text-[0.6rem] tracking-[0.2em] text-white/20 mb-3 uppercase">
                  Tone
                </p>
                <div className="flex gap-[6px] mb-2">
                  {[
                    { bg: "#0e0e0e", border: "rgba(255,255,255,0.18)" },
                    { bg: "#2c2b29", border: "rgba(255,255,255,0.12)" },
                    { bg: "rgba(255,255,255,0.5)", border: "rgba(255,255,255,0.12)" },
                    { bg: "#c9a96e", border: "transparent" },
                  ].map(({ bg, border }, i) => (
                    <div
                      key={i}
                      className="rounded-full"
                      style={{
                        width: 15,
                        height: 15,
                        background: bg,
                        border: `1px solid ${border}`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-[0.72rem] tracking-[0.13em] text-white/30">
                  落ち着きを保つ
                </p>
              </div>
            </div>
          </div>

          {/* PC */}
          <div className="hidden sm:block">
            <p
              className="
                about-last aq-fade delay-8
                text-[0.95rem] sm:text-[1rem]
                leading-[2.1] sm:leading-[2.2]
              "
            >
              あなたのブランドやお店のらしさを、
              <span className="text-white/95">
                落ち着きと品が伝わるWebサイト
              </span>
              として丁寧に形にします。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p
              className="
                about-last aq-fade delay-8
                text-[0.95rem]
                leading-[2.1]
              "
            >
              あなたのブランドやお店のらしさを、
              <br />
              <span className="text-white/95">
                落ち着きと品が伝わるWebサイト
              </span>
              として丁寧に形にします。
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