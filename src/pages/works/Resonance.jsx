// src/pages/works/Resonance.jsx
import React, { useEffect } from "react";

export default function Resonance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8fafc] text-[#0e0e0e] min-h-screen pb-32">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/resonance#creativework",
      "name": "RÉSONANCE｜Cinematic Restaurant Experience Design",
      "description":
        "料理の温度変化をUIに翻訳した、静かなシネマティック・レストランLP。光・温度・静寂を軸に、余白と明度の密度だけで夜の深度を設計した体験型Webデザイン。",
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
      "url": "https://gushikendesign.com/works/resonance",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "RÉSONANCE Restaurant Site",
        "url": "https://resonance-restaurant.vercel.app/"
      }
    })
  }}
/>

      {/* =========================================================
          HERO — White × Clean × Cinematic Silence（300点）
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

        {/* ===== SP ===== */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/resonance-hero1.png"
            alt="RÉSONANCE — Restaurant Experience Design"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.96]
              contrast-[0.95]
              scale-[1.04]
            "
          />

          {/* 清潔な白ベール */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/85 via-white/40 to-white/10
            "
          />

          <div className="absolute bottom-10 left-6 right-6">
            <h1 className="text-[2.05rem] tracking-[0.22em] font-light leading-[1.15]">
              RÉSONANCE
            </h1>
            <p className="mt-2 text-black/55 tracking-[0.28em] text-[0.7rem] leading-relaxed">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src="/works1/resonance-hero1.png"
            alt="RÉSONANCE — Restaurant Experience Design"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.98]
              contrast-[0.96]
              scale-[1.05]
              transform-gpu
            "
          />

          {/* 白→透明のシネマベール */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/60 via-white/32 to-transparent
            "
          />

          <div className="absolute bottom-24 left-[clamp(48px,10vw,170px)] max-w-[720px]">
            <h1 className="text-[4rem] tracking-[0.26em] font-light mb-4 leading-[1.1]">
              RÉSONANCE
            </h1>
            <p className="text-black/55 tracking-[0.32em] text-[1rem] leading-relaxed">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — 温度 × 静けさ × 余白
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-32 mb-28">
        <h2 className="text-[0.95rem] tracking-[0.32em] text-black/40 mb-10">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.12rem]
            leading-[2.55]
            text-black/85
            font-light
            whitespace-pre-line
          "
        >
{`光 × 温度 × 静寂。

料理の“温度変化”を UI に翻訳した、
静かなシネマティック・レストランLP。

影のコントラストを抑え、
視線がゆっくり漂うように構成し、

明るさと影の“密度”だけで
夜の深度を設計した。

見せすぎず、語りすぎない。
余白が記憶に残る時間デザイン。`}
        </p>

        <div className="mt-10 text-black/45 text-[0.82rem] leading-relaxed tracking-[0.12em]">
          <p>TECH — React / Vite / Tailwind / GSAP Silent Scroll</p>
        </div>
      </div>

      {/* =========================================================
          VISUAL — Single Exhibition（清潔×余韻）
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-24">
        <div className="relative overflow-hidden  border border-black/10 bg-white">
          <img
            src="/works1/resonance1.png"
            alt="Resonance Interior Visual"
            className="
              w-full
              object-cover
              brightness-[0.96]
              contrast-[0.94]
            "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/12" />
        </div>
      </div>

      {/* =========================================================
          CTA — Clean Minimal Button
      ========================================================= */}
      <div className="text-center mt-32">
        <a
          href="https://resonance-restaurant.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-14 py-4
            text-[0.88rem]
            tracking-[0.32em]
            border border-black/20
            rounded-full
            hover:border-black/50
            hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]
            hover:-translate-y-[2px]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>
      </div>

    </section>
  );
}
