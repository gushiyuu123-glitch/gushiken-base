// src/pages/works/Resonance.jsx
import React, { useEffect } from "react";

export default function Resonance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#090808] text-white min-h-screen pb-32">

      {/* =========================================================
          HERO — Silent Cinematic Edition（300点版）
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
              brightness-[0.70]
              scale-[1.04]
            "
          />

          {/* 深い夜のグラデ（SP） */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black/55 via-black/25 to-black/85
            "
          />

          <div className="absolute bottom-10 left-6">
            <h1 className="text-[2.15rem] tracking-[0.24em] font-light mb-2">
              RÉSONANCE
            </h1>
            <p className="text-white/55 tracking-[0.28em] text-[0.7rem]">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src="/works1/resonance-hero1.png"
            alt="RÉSONANCE — Restaurant"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.78]
              scale-[1.06]
              transform-gpu
            "
          />

          {/* Night Depth Gradient（PC） */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black/50 via-black/18 to-black/88
            "
          />

          <div className="absolute bottom-24 left-20">
            <h1 className="text-[3.8rem] tracking-[0.26em] font-light mb-4">
              RÉSONANCE
            </h1>
            <p className="text-white/55 tracking-[0.32em] text-[0.9rem]">
              CINEMATIC EXPERIENCE DESIGN
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — 夜気×温度×静けさの翻訳（300点版）
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 mb-28">

        <h2 className="text-[0.95rem] tracking-[0.32em] text-white/40 mb-8">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.12rem]
            leading-[2.35]
            text-white/85
            font-light
            whitespace-pre-line
            tracking-[0.015em]
          "
        >
{`時間 × 熱 × 静寂。

“料理の温度変化” を UI へ翻訳した、
シネマティックなレストランLP。

光と影のコントラストを極端に抑え、
視線が『漂う』ように構成。

時間がゆっくり進む夜の空気感を、
スクロールの緩やかな深度変化で表現し、

あえて「見せすぎない」演出で
静けさの余白を残したUI。`}
        </p>

        <div className="mt-10 text-white/35 text-[0.82rem] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / GSAP Cinematic Scroll / Deep Silence UI</p>
        </div>
      </div>

      {/* =========================================================
          VISUAL — 1枚展示の“沈黙レイアウト”
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-24">
        <div className="relative overflow-hidden  border border-white/10">
          <img
            src="/works1/resonance1.webp"
            className="
              w-full
              object-cover
              brightness-[0.88]
              contrast-[0.95]
            "
            alt="Resonance Visual 1"
          />
        </div>
      </div>

      {/* =========================================================
          CTA — 静かに光るボタン
      ========================================================= */}
      <div className="text-center mt-32">
        <a
          href="https://resonance-restaurant.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-12 py-4
            text-[0.86rem]
            tracking-[0.32em]
            border border-white/25
            hover:border-white/60
            hover:shadow-[0_0_26px_rgba(255,255,255,0.20)]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>
      </div>

    </section>
  );
}
