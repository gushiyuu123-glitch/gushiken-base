// src/pages/works/FineOkinawa.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function FineOkinawa() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/fine-okinawa-2.png",
      cut1: "/works1/fine-okinawa-1.png",
      cut2: "/works1/fine-okinawa-hero.png",
    }),
    []
  );

  // Palette (3 calm colors)
  const C = {
    base: "#F6F3EE", // Ivory Sand
    sage: "#DDE6DF", // Soft Sage
    taupe: "#B8AFA6", // Warm Taupe
    ink: "#3E3A36", // Charcoal for text
  };

  return (
    <section
      className="min-h-screen pb-44"
      style={{
        background: `linear-gradient(180deg, ${C.base} 0%, #F8F5F1 45%, ${C.sage} 100%)`,
        color: C.ink,
      }}
    >
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/fine-okinawa#creativework",
      "name": "FINE Okinawa｜Calm Marriage & Encounter Salon Website",
      "description":
        "40〜50代を中心とした沖縄の結婚相談・出会いサロン『FINE Okinawa』のWebサイト制作実績。落ち着き・信頼・再出発を軸に、静かな余白と読みやすさで安心感を設計したコンセプト詳細ページ。",
      "genre": [
        "Marriage Salon Website",
        "Service Website Design",
        "Calm UX Design"
      ],
      "keywords": [
        "結婚相談所 Webサイト",
        "婚活 サイトデザイン",
        "40代 50代 婚活",
        "安心感 UX",
        "落ち着いた Webデザイン"
      ],
      "creator": {
        "@type": "Person",
        "name": "裕人 具志堅",
        "alternateName": "Yuto Gushiken",
        "url": "https://gushikendesign.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GUSHIKEN DESIGN",
        "url": "https://gushikendesign.com/"
      },
      "inLanguage": "ja",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "FINE Okinawa Official Site",
        "url": "https://www.fine-okinawa.com/"
      },
      "url": "https://gushikendesign.com/works/fine-okinawa"
    })
  }}
/>

      {/* =========================
          HERO — Calm / Trust / Restart
      ========================= */}
      <div className="relative w-full overflow-hidden">
        {/* ===== SP ===== */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src={assets.hero}
            alt="FINE Okinawa — Teaser"
            className="
              absolute inset-0 w-full h-full object-cover
              object-[55%_45%]
              brightness-[0.98] contrast-[0.98]
              scale-[1.02] transform-gpu
            "
          />

          {/* Veil */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(246,243,238,0.15) 0%, rgba(246,243,238,0.62) 48%, rgba(246,243,238,0.92) 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.60), transparent 52%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 80% 70%, rgba(221,230,223,0.55), transparent 58%)",
            }}
          />

          {/* Text */}
          <div className="absolute bottom-14 left-5 right-5">
            <p
              className="text-[0.62rem] tracking-[0.34em]"
              style={{ color: "rgba(62,58,54,0.70)" }}
            >
              WORKS — OKINAWA MARRIAGE & ENCOUNTER SALON
            </p>

            <h1 className="mt-2.5 text-[1.85rem] tracking-[0.18em] font-light leading-[1.08]">
              FINE Okinawa
            </h1>

            <p
              className="mt-3 text-[0.70rem] tracking-[0.30em]"
              style={{ color: "rgba(62,58,54,0.65)" }}
            >
              CALM / TRUST / RESTART
            </p>

            <p
              className="mt-4 text-[0.92rem] leading-[2.15] max-w-[30ch]"
              style={{ color: "rgba(62,58,54,0.78)" }}
            >
              もう一度、人を好きになる場所。
              <br />
              焦らず、丁寧に、あなたのペースで。
            </p>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://www.fine-okinawa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  px-6 py-[11px] rounded-full
                  text-[0.72rem] tracking-[0.34em]
                  transition-all duration-500
                "
                style={{
                  background: C.ink,
                  color: C.base,
                  boxShadow: "0 14px 44px rgba(62,58,54,0.18)",
                }}
              >
                OPEN SITE →
              </a>

              <span
                className="text-[0.70rem] tracking-[0.26em]"
                style={{ color: "rgba(62,58,54,0.58)" }}
              >
                Parent’s business
              </span>
            </div>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src={assets.hero}
            alt="FINE Okinawa — Teaser"
            className="
              absolute inset-0 w-full h-full object-cover
              object-[62%_45%]
              brightness-[0.98] contrast-[0.98]
              scale-[1.04] transform-gpu
            "
          />

          {/* Veil */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, rgba(246,243,238,0.92) 0%, rgba(246,243,238,0.70) 20%, rgba(246,243,238,0.28) 40%, rgba(246,243,238,0.14) 50%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 22% 24%, rgba(255,255,255,0.62), transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 36% 78%, rgba(221,230,223,0.50), transparent 62%)",
            }}
          />

          <div className="absolute bottom-[12vh] left-[clamp(28px,7vw,120px)] max-w-[780px]">
            <p
              className="text-[0.72rem] tracking-[0.38em]"
              style={{ color: "rgba(62,58,54,0.64)" }}
            >
              WORKS — OKINAWA MARRIAGE & ENCOUNTER SALON
            </p>

            <h1 className="mt-6 text-[4.0rem] tracking-[0.14em] font-light leading-[1.04]">
              FINE Okinawa
            </h1>

            <p
              className="mt-5 text-[0.92rem] tracking-[0.30em]"
              style={{ color: "rgba(62,58,54,0.62)" }}
            >
              CALM / TRUST / RESTART
            </p>

            <p
              className="mt-7 text-[1.06rem] leading-[2.25] max-w-[52ch]"
              style={{ color: "rgba(62,58,54,0.76)" }}
            >
              年齢を重ねても、もう一度。
              <br />
              焦らない安心感と、言葉の重みが伝わる設計へ。
              <br />
              40〜50代の「落ち着いた出会い」を、静けさで支える。
            </p>

            <div className="mt-12 flex items-center gap-8">
              <a
                href="https://www.fine-okinawa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex justify-center
                  px-12 py-[14px]
                  rounded-full
                  text-[0.82rem]
                  tracking-[0.30em]
                  transition
                  hover:-translate-y-[2px]
                "
                style={{
                  background: C.ink,
                  color: C.base,
                  boxShadow: "0 26px 90px rgba(62,58,54,0.22)",
                }}
              >
                OPEN SITE →
              </a>

              <div
                className="h-px w-28"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(62,58,54,0.55), rgba(62,58,54,0.00))",
                }}
              />

              <span
                className="text-[0.72rem] tracking-[0.30em]"
                style={{ color: "rgba(62,58,54,0.58)" }}
              >
                A calm detail page
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          BODY
      ========================= */}
      <div className="max-w-6xl mx-auto px-7 md:px-10 pt-24">
        <div className="border-t border-black/10 pt-16">
          {/* Intro */}
          <div className="grid md:grid-cols-12 gap-14 items-start">
            <div className="md:col-span-6">
              <p
                className="text-[0.74rem] tracking-[0.34em]"
                style={{ color: "rgba(62,58,54,0.62)" }}
              >
                CONCEPT
              </p>

              <h2 className="mt-6 text-[1.55rem] md:text-[2.15rem] tracking-[0.10em] font-light leading-[1.35]">
                もう一度、<br className="md:hidden" />
                人を好きになる喜びを。
              </h2>

              <p
                className="mt-7 text-[1.02rem] leading-[2.35] font-light max-w-[54ch]"
                style={{ color: "rgba(62,58,54,0.74)" }}
              >
                「落ち着いた空気」と「丁寧な進行」は、年齢を重ねた出会いにこそ必要。
                <br />
                派手さではなく、安心感。煽りではなく、静かな確信。
                <br />
                FINE Okinawa は、沖縄の光と風のように、やわらかく寄り添う場を設計しました。
              </p>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2.5">
                {[
                  "40〜50代中心",
                  "少人数制",
                  "1対1紹介",
                  "相談しやすい空気",
                  "沖縄のやわらかさ",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-2 rounded-full text-[0.72rem] tracking-[0.18em]"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(62,58,54,0.10)",
                      color: "rgba(62,58,54,0.70)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image 1 */}
            <div className="md:col-span-6">
              <div
                className="rounded-[26px] overflow-hidden"
                style={{
                  boxShadow: "0 34px 120px rgba(62,58,54,0.10)",
                  border: "1px solid rgba(62,58,54,0.08)",
                  background: "rgba(255,255,255,0.50)",
                }}
              >
                <img
                  src={assets.cut1}
                  alt="FINE Okinawa — calm space"
                  className="w-full h-auto block"
                />
              </div>

              <p
                className="mt-4 text-[0.78rem] tracking-[0.24em]"
                style={{ color: "rgba(62,58,54,0.55)" }}
              >
                A space that feels safe to talk.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-24">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p
                  className="text-[0.74rem] tracking-[0.34em]"
                  style={{ color: "rgba(62,58,54,0.62)" }}
                >
                  SERVICE
                </p>
                <h3 className="mt-4 text-[1.25rem] md:text-[1.55rem] tracking-[0.10em] font-light">
                  落ち着いて進められる、3つの導線。
                </h3>
              </div>

              <div
                className="h-px w-44 md:w-64"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(62,58,54,0.22), rgba(62,58,54,0.00))",
                }}
              />
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "1対1のご紹介（お見合い）",
                  desc: "プロフィールだけでなく、空気感や大切にしたい価値観も丁寧に確認。落ち着いた場で、ゆっくり会話できます。",
                },
                {
                  title: "少人数制の婚活パーティー",
                  desc: "大人数が苦手な方でも参加しやすい雰囲気設計。会の進行も穏やかに、自然に話せる導線を用意。",
                },
                {
                  title: "アフターサポート",
                  desc: "不安や迷いが出やすい時期も、無理なく前に進めるように。ペースを守りながら相談できる体制を整備。",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-[22px] p-7 md:p-8"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(62,58,54,0.10)",
                    boxShadow: "0 22px 70px rgba(62,58,54,0.07)",
                  }}
                >
                  <p
                    className="text-[0.72rem] tracking-[0.34em]"
                    style={{ color: "rgba(62,58,54,0.58)" }}
                  >
                    SUPPORT
                  </p>
                  <h4 className="mt-4 text-[1.02rem] tracking-[0.10em] font-medium">
                    {card.title}
                  </h4>
                  <p
                    className="mt-4 text-[0.95rem] leading-[2.15] font-light"
                    style={{ color: "rgba(62,58,54,0.72)" }}
                  >
                    {card.desc}
                  </p>

                  <div
                    className="mt-7 h-px w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(184,175,166,0.50), rgba(184,175,166,0.00))",
                    }}
                  />
                  <p
                    className="mt-5 text-[0.76rem] tracking-[0.22em]"
                    style={{ color: "rgba(62,58,54,0.55)" }}
                  >
                    Calm progress, not pressure.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image 2 + Message */}
          <div className="mt-24 grid md:grid-cols-12 gap-14 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div
                className="rounded-[26px] overflow-hidden"
                style={{
                  boxShadow: "0 34px 120px rgba(62,58,54,0.10)",
                  border: "1px solid rgba(62,58,54,0.08)",
                  background: "rgba(255,255,255,0.50)",
                }}
              >
                <img
                  src={assets.cut2}
                  alt="FINE Okinawa — conversation"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            <div className="md:col-span-6 order-1 md:order-2">
              <p
                className="text-[0.74rem] tracking-[0.34em]"
                style={{ color: "rgba(62,58,54,0.62)" }}
              >
                MESSAGE
              </p>

              <h3 className="mt-6 text-[1.35rem] md:text-[1.75rem] tracking-[0.10em] font-light leading-[1.5]">
                無理に明るくしない。
                <br />
                だから、信頼が残る。
              </h3>

              <p
                className="mt-7 text-[1.02rem] leading-[2.35] font-light max-w-[56ch]"
                style={{ color: "rgba(62,58,54,0.74)" }}
              >
                40代・50代の婚活は、気持ちの整理が大切。
                <br />
                このサイトは、派手な演出ではなく「静けさ」と「読みやすさ」で安心を積み上げる設計にしました。
                <br />
                相談前の不安を、ページの余白でそっと下げる。そんな思想の詳細ページです。
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.fine-okinawa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-[11px] rounded-full
                    text-[0.74rem] tracking-[0.34em]
                    transition-all duration-500
                    hover:-translate-y-[1px]
                  "
                  style={{
                    background: C.ink,
                    color: C.base,
                    boxShadow: "0 16px 56px rgba(62,58,54,0.18)",
                  }}
                >
                  OPEN SITE →
                </a>

                <span
                  className="text-[0.72rem] tracking-[0.24em]"
                  style={{ color: "rgba(62,58,54,0.55)" }}
                >
                  Soft palette / calm layout / readable type
                </span>
              </div>
            </div>
          </div>

          {/* Footer nav */}
          <div className="text-center pt-24">
            <Link
              to="/works"
              className="text-[0.78rem] tracking-[0.28em] transition"
              style={{ color: "rgba(62,58,54,0.62)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(62,58,54,0.92)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(62,58,54,0.62)")}
            >
              ← BACK TO WORKS
            </Link>

            <div className="mt-8 flex justify-center">
              <div
                className="h-px w-64"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(62,58,54,0.00), rgba(62,58,54,0.22), rgba(62,58,54,0.00))",
                }}
              />
            </div>

            <p
              className="mt-8 text-[0.70rem] tracking-[0.26em]"
              style={{ color: "rgba(62,58,54,0.52)" }}
            >
              © Concept detail page — Calm / Trust / Restart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
