// src/pages/works/Resonance.jsx
import React, { useEffect } from "react";

export default function Resonance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#0b0b0c] text-white min-h-screen pb-32">

      {/* =========================================================
          HERO — Bright Silent Cinematic（300点）
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
              brightness-[0.88]
              contrast-[0.92]
              scale-[1.04]
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-[#0b0b0c]/80 via-[#0b0b0c]/40 to-[#0b0b0c]/90
            "
          />

          <div className="absolute bottom-10 left-6">
            <h1 className="text-[2.1rem] tracking-[0.25em] font-light mb-2">
              RÉSONANCE
            </h1>
            <p className="text-white/55 tracking-[0.30em] text-[0.7rem]">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[92vh] relative">

          {/* メインビジュアル */}
          <img
            src="/works1/resonance-hero1.png"
            alt="RÉSONANCE — Restaurant"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.92]
              contrast-[0.94]
              scale-[1.05]
              transform-gpu
            "
          />

          {/* 透明×静寂のシネマグラデ */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-[#0b0b0c]/45 via-[#0b0b0c]/20 to-[#0b0b0c]/88
            "
          />

          <div className="absolute bottom-24 left-[clamp(48px,10vw,170px)]">
            <h1 className="text-[4rem] tracking-[0.26em] font-light mb-5">
              RÉSONANCE
            </h1>
            <p className="text-white/55 tracking-[0.32em] text-[1rem]">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>
      </div>



      {/* =========================================================
          OUTLINE — “温度 × 静けさ × 余白” の翻訳
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-32 mb-28">
        <h2 className="text-[0.95rem] tracking-[0.32em] text-white/40 mb-10">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.14rem]
            leading-[2.55]
            text-white/90
            font-light
            whitespace-pre-line
          "
        >
{`光 × 温度 × 静寂。

“料理の温度変化”を UI へ翻訳した
静かなシネマティックLP。

影のコントラストを抑え、
視線が“漂う”ように構成し、

明るさと影の密度で
夜の深度を設計した UI。

見せすぎない演出で、
余白の美しさを残した時間デザイン。`}
        </p>

        <div className="mt-10 text-white/35 text-[0.82rem] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / GSAP Silent Scroll / Soft Contrast UI</p>
        </div>
      </div>



      {/* =========================================================
          VISUAL — 1枚展示 “Empty Silence Layout”
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-24">
        <div className="relative overflow-hidden border border-white/10 rounded-sm">
          <img
            src="/works1/resonance1.webp"
            alt="Resonance Visual 1"
            className="
              w-full
              object-cover
              brightness-[0.95]
              contrast-[0.92]
            "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0b0c]/25" />
        </div>
      </div>



      {/* =========================================================
          CTA — 静かに光が溶けるボタン
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
            border border-white/20
            hover:border-white/60
            rounded-full
            hover:shadow-[0_0_26px_rgba(255,255,255,0.25)]
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
