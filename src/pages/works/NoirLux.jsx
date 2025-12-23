// src/pages/works/NoirLux.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NoirLux() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#060504] text-white min-h-screen pb-32">

      {/* =========================================================
          HERO SECTION — Silent Luxury Shadow Glow
      ========================================================= */}


<div className="
  relative w-full overflow-hidden
">

  {/* --- SP（高さ固定禁止） --- */}
  <div className="block md:hidden w-full aspect-[4/5] relative">
    <img
      src="/works1/noir-lux-hero.webp"
      alt="Noir & Lux — Shadow Edition"
      className="
        absolute inset-0 w-full h-full
        object-cover object-center
        brightness-[0.80]
        transform-gpu
      "
    />

    {/* Fade for SP */}
    <div className="
      absolute inset-0
      bg-gradient-to-b
      from-black/40 via-black/10 to-black/80
    " />

    {/* Titles */}
    <div className="absolute bottom-10 left-6">
      <h1 className="text-[2rem] tracking-[0.25em] font-light mb-2">
        NOIR & LUX
      </h1>
      <p className="text-white/55 tracking-[0.28em] text-[0.7rem]">
        SHADOW EDITION — BRAND EC DESIGN
      </p>
    </div>
  </div>


  {/* --- PC（高さを大きく使ってOK） --- */}
  <div className="hidden md:block w-full h-[88vh] relative">
    <img
      src="/works1/noir-lux-hero.webp"
      alt="Noir & Lux — Shadow Edition"
      className="
        absolute inset-0 w-full h-full
        object-cover
        brightness-[0.80]
        scale-[1.04]
        transform-gpu
      "
    />

    <div className="
      absolute inset-0
      bg-gradient-to-b
      from-black/40 via-black/15 to-black/80
    " />

    {/* Title */}
    <div className="absolute bottom-16 left-16">
      <h1 className="text-[3.6rem] tracking-[0.28em] font-light mb-4">
        NOIR & LUX
      </h1>
      <p className="text-white/55 tracking-[0.32em] text-[0.85rem]">
        SHADOW EDITION — BRAND EC DESIGN
      </p>
    </div>
  </div>
</div>


      {/* =========================================================
          OUTLINE — 静かな余白 × 説明
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-24 mb-28">

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
          影 × 造形 × 精密美。
          {"\n"}
          Dior系の静かな高級感をベースに、影の彫刻ラインをUIへ抽象化。
          {"\n\n"}
          光の差し込み方と余白の緊張感でブランドの静謐さを演出し、
          商品の“立体感”を強調したビジュアル設計を採用。
          {"\n\n"}
          PC/SP完全分離構成、GSAPの滑らかな影モーションで、
          「影のゆらぎ」そのものを体験化したブランドEC。
        </p>

        <div className="mt-10 text-white/35 text-[0.82rem] leading-relaxed">
          <p>Tech Used — Vite / React / Tailwind / GSAP / PC-SP Separation</p>
        </div>
      </div>


      {/* =========================================================
          VISUAL BLOCKS — SANKOU 余白構成
      ========================================================= */}
      <div className="max-w-6xl mx-auto px-8 md:px-0 space-y-28">

        {/* VISUAL 1 */}
        <div className="relative overflow-hidden">
          <img
            src="/works1/noir-lux1.webp"
            className="
              w-full
              object-cover
              brightness-[0.88]
            "
            alt="Noir & Lux Visual"
          />
        </div>

        {/* VISUAL 2 */}
        <div className="relative overflow-hidden">
          <img
            src="/works1/noir-lux2.webp"
            className="
              w-full
              object-cover
              brightness-[0.92]
            "
            alt="Noir & Lux Visual Detail"
          />
        </div>
      </div>


      {/* =========================================================
          CTA — 静かに光るボタン
      ========================================================= */}
      <div className="text-center mt-32">
        <a
          href="https://noir-lux.vercel.app"
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
