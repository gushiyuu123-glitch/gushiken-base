// src/pages/works/Still.jsx
import React, { useEffect } from "react";

export default function Still() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#040404] text-white min-h-screen pb-40">

      {/* =========================================================
          HERO — Black × Mode × Vertical Tension
          （縦構成 × 建築光 × モードの緊張）
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

{/* ===== SP ===== */}
<div className="block md:hidden w-full aspect-[4/5] relative">
  <img
    src="/works1/still-hero.png"
    alt="STILL — Minimal EC"
    className="
      absolute inset-0
      w-full h-full
      object-cover
      brightness-[0.82]
      scale-[1.03]
      transform-gpu
    "
  />

  <div className="
    absolute inset-0
    bg-gradient-to-b
    from-black/55 via-black/15 to-black/85
  " />

  <div className="absolute bottom-10 left-6">
    <h1 className="text-[2.2rem] tracking-[0.26em] font-light mb-2">
      STILL
    </h1>
    <p className="text-white/55 tracking-[0.30em] text-[0.7rem]">
      MINIMAL FASHION × EC DESIGN
    </p>
  </div>
</div>


        {/* ---------------------- PC ---------------------- */}
        <div className="hidden md:block w-full h-[100vh] relative">

          {/* Image */}
          <img
            src="/works1/still-hero.png"
            alt="STILL — Minimal EC"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.82]
              scale-[1.05]
              transform-gpu
            "
          />

          {/* Dior / CELINE style deep gradient */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black/55 via-black/20 to-black/88
            "
          />

          {/* PC Title */}
          <div className="absolute bottom-[18vh] left-[clamp(32px,9vw,180px)]">
            <h1 className="text-[4.4rem] tracking-[0.28em] font-light leading-[1.1]">
              STILL
            </h1>
            <p className="text-white/55 tracking-[0.34em] text-[0.95rem] mt-3">
              MINIMAL FASHION × EC DESIGN
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — Mode Minimalism × 緊張と静けさ
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 mb-28">

        <h2 className="text-[0.95rem] tracking-[0.32em] text-white/40 mb-8">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.14rem]
            leading-[2.45]
            text-white/90
            font-light
            whitespace-pre-line
          "
        >
{`黒 × 緊張 × 建築構図。

ファッションの“ストイックな空気”を UI に翻訳するため、
光の入り方、縦ラインの角度、余白の伸びを
建築写真の原理でミリ単位調整。

静けさを保ちながら、モード特有の緊張を
「構成比 × 重心 × コントラスト」で設計。

縦構成を主役にし、視線がまっすぐ落ちていく
“静かな Mode EC” に仕上げた。`}
        </p>

        <div className="mt-10 text-white/30 text-[0.82rem] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / GSAP Minimal Drift / PC-SP Separation</p>
        </div>
      </div>

      {/* =========================================================
          VISUAL — Vertical Mode Exhibition
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-24">

        <div className="relative overflow-hidden border border-white/5">
          <img
            src="/works1/still-visual1.jpg"
            alt="STILL Visual"
            className="
              w-full
              object-cover
              brightness-[0.92]
            "
          />

          {/* subtle shadow bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>

      </div>

      {/* =========================================================
          CTA — Sharp Minimal Button
      ========================================================= */}
      <div className="text-center mt-32">
        <a
          href="https://still-ec.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-12 py-4
            text-[0.85rem]
            tracking-[0.32em]
            border border-white/25
            hover:border-white/60
            hover:shadow-[0_0_28px_rgba(255,255,255,0.30)]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>
      </div>

    </section>
  );
}
