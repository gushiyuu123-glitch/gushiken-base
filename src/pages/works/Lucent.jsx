// src/pages/works/Lucent.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

/* =========================
   Primary CTA
========================= */
const PrimaryCTA = ({ className = "" }) => (
  <a
    href="https://lucent-salon.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className={`
      inline-flex items-center
      px-7 py-[11px]
      rounded-full
      bg-[#3a2f28]/95
      text-[#f6f2eb]
      text-[0.74rem]
      tracking-[0.34em]
      shadow-[0_12px_40px_rgba(58,47,40,0.14)]
      hover:bg-[#3a2f28]
      hover:shadow-[0_18px_60px_rgba(58,47,40,0.18)]
      transition-all duration-500
      ${className}
    `}
  >
    ENTER THE SITE →
  </a>
);

export default function Lucent() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/lucent-hero.png",
      teaser1: "/works1/lucent-teaser1.png",
      teaser2: "/works1/lucent-teaser2.png",
    }),
    []
  );

  return (
    <section className="min-h-screen bg-[#f6f2eb] text-[#3a2f28] pb-32">

      {/* =========================
          TOP BAR（LILU準拠）
      ========================= */}
      <header className="sticky top-0 z-50 bg-[#f6f2eb]/85 backdrop-blur border-b border-[#3a2f28]/10">
        <div className="max-w-[1120px] mx-auto px-8 h-[72px] flex items-center justify-between">
          <Link
            to="/works"
            className="text-[12px] tracking-[0.18em] text-[#6a5b50]"
          >
            ← WORKS
          </Link>

          <PrimaryCTA className="px-8 py-[10px] text-[0.7rem]" />
        </div>
      </header>

      {/* =========================
          HERO（既存そのまま）
      ========================= */}
   <div className="relative w-full h-[88vh] md:h-[92vh] overflow-hidden">

<img
  src={assets.hero}
  alt="Hair Salon LUCENT — Concept Hero"
  className="
    absolute inset-0 w-full h-full object-cover
    object-[69%_50%]        /* ← SP：少し左 */
    md:object-[45%_50%]    /* ← PC：今まで通り */
    brightness-[0.94]
    contrast-[0.96]
    scale-[1.04]
  "
/>
<div className="absolute inset-0 bg-gradient-to-b
  from-[#f6f2eb]/22
  via-[#f6f2eb]/48
  to-[#f6f2eb]/96
" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_26%,rgba(255,255,255,0.38),transparent_65%)]" />

        {/* Veil */}
  {/* Veil */}
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#f6f2eb]/20 to-[#f6f2eb]/92" />

{/* ===== Text ===== */}
<div
  className="
    absolute
    bottom-[8vh] left-1/2 -translate-x-1/2
    text-center

    md:bottom-[14vh]
    md:left-[clamp(28px,7vw,120px)]
    md:translate-x-0
    md:text-left
  "
>
  <p
    className="
      text-[0.62rem] tracking-[0.36em] text-[#6a5b50]

      md:text-[0.72rem]
      md:tracking-[0.38em]
    "
  >
    WORKS — HAIR SALON CONCEPT SITE
  </p>

  <h1
    className="
      mt-4
      text-[2.6rem] tracking-[0.22em] font-light leading-[1.05]

      md:mt-6
      md:text-[4.2rem]
      md:tracking-[0.18em]
      md:leading-[1.02]
    "
  >
    LUCENT
  </h1>

  <p
    className="
      mt-3
      text-[#6a5b50]
      tracking-[0.28em]
      text-[0.72rem]

      md:mt-5
      md:text-[0.92rem]
      md:tracking-[0.30em]
    "
  >
    LIGHT / SILENCE / LINE
  </p>
</div>

      </div>

      {/* =========================
          INTRO（LILU型）
      ========================= */}
      <div className="max-w-[1120px] mx-auto px-8 pt-24">
        <p className="text-[0.72rem] tracking-[0.34em] text-[#6a5b50]">
          PROJECT OVERVIEW
        </p>

        <p className="mt-6 text-[#3a2f28]/75 text-[1.04rem] leading-[2.3] max-w-[56ch] font-light">
          ヘアサロン LUCENT のために制作した、
          コンセプト重視のティーザーページ。
          説明よりも先に「空気」が伝わることを目的とし、
          情報量を整理し、落ち着いて閲覧できる構成にした。
        </p>

        {/* Meta */}
        <div className="mt-14 flex gap-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] text-[#6a5b50] mb-2">
              ROLE
            </p>
            <p className="text-[0.85rem]">
              UI / UX / Visual Design
            </p>
          </div>

          <div>
            <p className="text-[0.7rem] tracking-[0.22em] text-[#6a5b50] mb-2">
              TYPE
            </p>
            <p className="text-[0.85rem]">
              Concept Teaser Page
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          VISUAL（LILUのVisual枠）
      ========================= */}
      <div className="max-w-[1120px] mx-auto px-8 pt-32">
        <h2 className="text-[0.78rem] tracking-[0.34em] text-[#6a5b50]">
          VISUAL EXCERPTS
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-14">
          <img
            src={assets.teaser1}
            alt="LUCENT visual cut 1"
            className="rounded-[22px] shadow-[0_40px_120px_rgba(58,47,40,0.10)]"
          />
          <img
            src={assets.teaser2}
            alt="LUCENT visual cut 2"
            className="rounded-[22px] shadow-[0_40px_120px_rgba(58,47,40,0.10)] md:translate-y-12"
          />
        </div>
      </div>

      {/* =========================
          DESIGN INTENT（UX枠）
      ========================= */}
      <div className="max-w-[1120px] mx-auto px-8 pt-36">
        <h2 className="text-center text-[0.8rem] tracking-[0.34em] mb-16">
          DESIGN INTENT
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["LIGHT", "写真と背景の明暗を調整し、内容が読み取りやすい構成にした"],
            ["SILENCE", "情報を抑え、思考を邪魔しない構成"],
            ["LINE", "余白とラインで印象を整える視線誘導"],
          ].map(([t, d]) => (
            <div
              key={t}
              className="
                bg-white/55
                border border-[#3a2f28]/12
                rounded-[22px]
                p-10
              "
            >
              <p className="text-[0.72rem] tracking-[0.28em] mb-4">
                {t}
              </p>
              <p className="text-[0.95rem] leading-[2.2] text-[#3a2f28]/70">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          FOOTER（LILU統一）
      ========================= */}
      <div className="max-w-[1120px] mx-auto px-8 pt-36 text-center">
        <PrimaryCTA />

        <div className="mt-16">
          <Link
            to="/works"
            className="text-[0.78rem] tracking-[0.28em] text-[#6a5b50]"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
