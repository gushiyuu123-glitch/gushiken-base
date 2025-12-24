// src/pages/works/Still.jsx
import React, { useEffect } from "react";

export default function Still() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#050505] text-white min-h-screen pb-32">

      {/* =========================================================
          HERO — Black × Mode × Vertical
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

        {/* ===== SP ===== */}
        <div className="block md:hidden w-full relative">
          <img
            src="/works1/still-hero.png"
            alt="STILL — Minimal EC"
            className="
              w-full
              object-cover
              brightness-[0.82]
              transform-gpu
            "
          />

          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/40 via-black/15 to-black/80
          " />

          {/* Titles (SP) */}
          <div className="absolute bottom-10 left-6">
            <h1 className="text-[2.1rem] tracking-[0.22em] font-light mb-2">
              STILL
            </h1>
            <p className="text-white/55 tracking-[0.28em] text-[0.7rem]">
              MINIMAL FASHION × EC DESIGN
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[100vh] relative">
          <img
            src="/works1/still-hero.png"
            alt="STILL — Minimal EC"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.85]
              scale-[1.04]
              transform-gpu
            "
          />

          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/40 via-black/10 to-black/85
          " />

          {/* Titles (PC) */}
          <div className="absolute bottom-20 left-20">
            <h1 className="text-[4rem] tracking-[0.25em] font-light mb-4">
              STILL
            </h1>
            <p className="text-white/55 tracking-[0.32em] text-[0.9rem]">
              MINIMAL FASHION × EC DESIGN
            </p>
          </div>
        </div>
      </div>


      {/* =========================================================
          OUTLINE — Mode Minimalism
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-24 mb-28">
        <h2 className="text-[0.95rem] tracking-[0.32em] text-white/40 mb-8">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.08rem]
            leading-[2.3]
            text-white/85
            font-light
            whitespace-pre-line
            tracking-[0.02em]
          "
        >
{`黒 × 緊張感 × 構成美。

ファッション特有の「ストイックな空気」を UI に抽象化し、
光の当たり方・余白の重心・ラインの角度を
ミリ単位でコントロール。

縦構成のビジュアルを最大限に活かし、
モード特有の世界観を“静けさ × 緊張感”で再現したEC。`}
        </p>

        <div className="mt-10 text-white/35 text-[0.82rem] leading-relaxed">
          <p>Tech Used — React / Vite / Tailwind / GSAP / Minimal Motion</p>
        </div>
      </div>


      {/* =========================================================
          VISUAL — 1枚だけの静寂展示
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-24">
        <img
          src="/works1/still-visual1.webp"
          alt="STILL Visual"
          className="w-full object-cover brightness-[0.92]"
        />
      </div>


      {/* =========================================================
          CTA — Visit Site
      ========================================================= */}
      <div className="text-center mt-32">
        <a
          href="https://still-ec.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-10 py-4
            text-[0.85rem]
            tracking-[0.32em]
            border border-white/25
            hover:border-white/55
            hover:shadow-[0_0_18px_rgba(255,255,255,0.15)]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>
      </div>

    </section>
  );
}
