// src/pages/works/Lucent.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

/* =========================
   Primary CTA（全箇所共通）
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
    <section className="min-h-screen pb-28 bg-[#f6f2eb] text-[#3a2f28]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/lucent#creativework",
      "name": "Hair Salon LUCENT｜Quiet Salon Concept Teaser",
      "description":
        "光・静寂・ラインを軸に設計したヘアサロンのコンセプトティーザーページ。説明ではなく、余白と光の体験によってブランド空気を先に届ける構成。",
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
      "url": "https://gushikendesign.com/works/lucent",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "Hair Salon LUCENT Official Site",
        "url": "https://lucent-salon.vercel.app/"
      }
    })
  }}
/>

      {/* =========================
          TEASER HERO
      ========================= */}
      <div className="relative w-full overflow-hidden">
        {/* ===== SP ===== */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src={assets.hero}
            alt="Hair Salon LUCENT — Teaser"
            className="
              absolute inset-0 w-full h-full object-cover
              object-[50%_48%]
              brightness-[0.99] contrast-[0.97]
              scale-[1.02] transform-gpu
            "
          />

          {/* Veil */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-[#f6f2eb]/48 to-[#f6f2eb]/88" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.48),transparent_60%)]" />

          {/* Text */}
          <div className="absolute bottom-16 left-5 right-5">
            <p className="text-[0.62rem] tracking-[0.36em] text-[#6a5b50]">
              WORKS — HAIR SALON CONCEPT SITE
            </p>

            <h1 className="mt-2.5 text-[1.9rem] tracking-[0.20em] font-light leading-[1.06]">
              LUCENT
            </h1>

            <p className="mt-3 text-[#6a5b50] tracking-[0.30em] text-[0.68rem]">
              LIGHT / SILENCE / LINE
            </p>

            <p className="mt-4 text-[#3a2f28]/78 text-[0.88rem] leading-[2.15] max-w-[30ch]">
              光が、髪に触れる時間。
              <br />
              説明ではなく、体験として設計した。
            </p>

            <div className="mt-14">
              <PrimaryCTA />
            </div>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src={assets.hero}
            alt="Hair Salon LUCENT — Teaser"
            className="
              absolute inset-0 w-full h-full object-cover
              object-[45%_50%]
              brightness-[0.98] contrast-[0.98]
              scale-[1.04] transform-gpu
            "
          />

          {/* Veil */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/28 via-[#f6f2eb]/45 to-[#f6f2eb]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.55),transparent_60%)]" />

          <div className="absolute bottom-[13vh] left-[clamp(28px,7vw,120px)] max-w-[760px]">
            <p className="text-[0.72rem] tracking-[0.38em] text-[#6a5b50]">
              WORKS — HAIR SALON CONCEPT SITE
            </p>

            <h1 className="mt-6 text-[4.2rem] tracking-[0.18em] font-light leading-[1.02]">
              LUCENT
            </h1>

            <p className="mt-5 text-[#6a5b50] tracking-[0.30em] text-[0.92rem]">
              LIGHT / SILENCE / LINE
            </p>

            <p className="mt-7 text-[#3a2f28]/75 text-[1.06rem] leading-[2.25] max-w-[46ch]">
              切るより先に、整える。
              <br />
              変えるより先に、引き出す。
              <br />
              その空気を、余白と光で翻訳した。
            </p>

            <div className="mt-12 flex items-center gap-8">
              <PrimaryCTA className="px-12 py-[14px] text-[0.82rem]" />
              <div className="h-px w-28 bg-gradient-to-r from-[#3a2f28]/55 to-transparent" />
              <span className="text-[0.72rem] tracking-[0.30em] text-[#6a5b50]">
                A QUIET TRAILER PAGE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          TRAILER CUTS
      ========================= */}
      <div className="max-w-5xl mx-auto px-7 md:px-10 pt-24">
        <div className="border-t border-[#3a2f28]/10 pt-16">
          <h2 className="text-[0.78rem] tracking-[0.34em] text-[#6a5b50]">
            TRAILER CUTS
          </h2>

          <p className="mt-6 text-[#3a2f28]/70 text-[1.06rem] leading-[2.55] max-w-[60ch] font-light">
            This page shows only a fragment.
            <br />
            The rest is meant to be entered.
          </p>

          <div className="mt-14 grid md:grid-cols-12 gap-12 items-start">
            {/* Words */}
            <div className="md:col-span-5">
              <div className="rounded-[22px] border border-[#3a2f28]/12 bg-white/45 p-8 shadow-[0_26px_90px_rgba(58,47,40,0.08)]">
                <p className="text-[0.78rem] tracking-[0.34em] text-[#6a5b50]">
                  THREE WORDS
                </p>

                <ul className="mt-6 space-y-3 text-[1.02rem] tracking-[0.18em]">
                  <li>Light</li>
                  <li>Silence</li>
                  <li>Line</li>
                </ul>

                <p className="mt-7 text-[#6a5b50] text-[0.84rem] tracking-[0.18em]">
                  Designed to be felt, not explained.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="md:col-span-7">
              <div className="grid gap-12">
                <img
                  src={assets.teaser1}
                  alt="LUCENT trailer cut 1"
                  className="rounded-[22px] shadow-[0_40px_120px_rgba(58,47,40,0.10)]"
                />
                <img
                  src={assets.teaser2}
                  alt="LUCENT trailer cut 2"
                  className="rounded-[22px] shadow-[0_40px_120px_rgba(58,47,40,0.10)] md:translate-x-6"
                />
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="text-center pt-24">
            <Link
              to="/works"
              className="text-[#6a5b50] hover:text-[#3a2f28] tracking-[0.28em] text-[0.78rem]"
            >
              ← BACK TO WORKS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
