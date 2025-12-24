// src/pages/works/Resonance.jsx
import React, { useEffect } from "react";

export default function Resonance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#0b0a0a] text-white min-h-screen pb-32">

      {/* =========================================================
          HERO — Silent Cinematic
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

        {/* ===== SP ===== */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/resonance-hero1.png"
            alt="RÉSONANCE — Restaurant"
            className="
              absolute inset-0 w-full h-full
              object-cover object-center
              brightness-[0.78]
              transform-gpu
            "
          />

          {/* Fade Layer */}
          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/40 via-black/15 to-black/80
          " />

          <div className="absolute bottom-10 left-6">
            <h1 className="text-[2rem] tracking-[0.22em] font-light mb-2">
              RÉSONANCE
            </h1>
            <p className="text-white/55 tracking-[0.26em] text-[0.7rem]">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[88vh] relative">
          <img
            src="/works1/resonance-hero1.png"
            alt="RÉSONANCE — Restaurant"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.82]
              scale-[1.05]
              transform-gpu
            "
          />

          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/35 via-black/15 to-black/80
          " />

          <div className="absolute bottom-16 left-16">
            <h1 className="text-[3.6rem] tracking-[0.26em] font-light mb-4">
              RÉSONANCE
            </h1>
            <p className="text-white/55 tracking-[0.30em] text-[0.85rem]">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>
      </div>


      {/* =========================================================
          OUTLINE — Concept × Atmosphere
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-24 mb-24">
        <h2 className="text-[0.95rem] tracking-[0.32em] text-white/40 mb-8">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.05rem]
            leading-[2.25]
            text-white/85
            font-light
            whitespace-pre-line
            tracking-[0.02em]
          "
        >
          {`時間 × 熱 × 静寂。

“料理が持つ温度の移ろい” を UI に翻訳。  
スクロールで一夜が静かに進行するような  
シネマティック・レストラン体験を構築。

暗がりの深度・光の粒度を抑制し、  
あえて『見せすぎない』ことで世界観の余白を残す。`}
        </p>

        <div className="mt-10 text-white/35 text-[0.82rem] leading-relaxed">
          <p>Tech Used — React / Vite / Tailwind / GSAP / Cinematic Scroll</p>
        </div>
      </div>


      {/* =========================================================
          VISUAL — 1枚だけ展示するミニマル展示
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-24">
        <div className="relative overflow-hidden">
          <img
            src="/works1/resonance1.webp"
            className="w-full object-cover brightness-[0.90]"
            alt="Resonance Visual 1"
          />
        </div>
      </div>


      {/* =========================================================
          CTA — 実際のサイトへ
      ========================================================= */}
      <div className="text-center mt-32">
        <a
          href="https://resonance-restaurant.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-10 py-4
            text-[0.85rem]
            tracking-[0.32em]
            border border-white/25
            hover:border-white/55
            hover:shadow-[0_0_22px_rgba(255,255,255,0.18)]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>
      </div>

    </section>
  );
}
