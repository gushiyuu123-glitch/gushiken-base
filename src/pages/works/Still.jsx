// src/pages/works/Still.jsx
import React, { useEffect } from "react";

export default function Still() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#050505] text-white min-h-screen pb-44">

      {/* =========================================================
          HERO — Black × Architecture × Mode Precision（300点版）
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
              brightness-[0.90]
              scale-[1.06]
              transform-gpu
            "
          />

          {/* 光の縦ライン強調 */}
          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/65 via-black/25 to-black/90
          " />

          <div className="absolute bottom-10 left-6">
            <h1 className="text-[2.3rem] tracking-[0.26em] font-light">
              STILL
            </h1>
            <p className="text-white/55 tracking-[0.32em] text-[0.72rem] mt-2">
              MODE MINIMAL × ARCHITECTURE
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[100vh] relative">

          {/* Layer 1 */}
          <img
            src="/works1/still-hero.png"
            alt="STILL"
            className="
              absolute inset-0 w-full h-full object-cover
              brightness-[0.88] scale-[1.04]
            "
          />

          {/* Layer 2（縦光の深度） */}
          <img
            src="/works1/still-hero.png"
            alt="STILL Secondary"
            className="
              absolute inset-0 w-full h-full object-cover
              brightness-[1.02] scale-[1.01]
              mix-blend-screen opacity-[0.18]
            "
          />

          {/* 影のアーキテクチャ */}
          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/60 via-black/22 to-black/92
          " />

          <div className="absolute bottom-[19vh] left-[clamp(48px,10vw,200px)]">
            <h1 className="text-[4.45rem] tracking-[0.28em] font-light leading-[1.12]">
              STILL
            </h1>
            <p className="text-white/55 tracking-[0.33em] text-[1.03rem] mt-4">
              MODE MINIMAL × ARCHITECTURE
            </p>
          </div>
        </div>
      </div>


      {/* =========================================================
          OUTLINE — 建築 × 緊張 × モード静度（300点チューニング）
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-32 mb-32">

        <h2 className="text-[0.95rem] tracking-[0.32em] text-white/40 mb-10">
          PROJECT OUTLINE
        </h2>

        <p className="
          text-[1.17rem]
          leading-[2.62]     /* ← 300点の行間 */
          text-white/90
          font-light
          whitespace-pre-line
          tracking-[0.004em]
        ">
{`黒 × 緊張 × 建築構図。

ファッションの“静かな強さ”を UI に翻訳するため、
光の入り方・陰影の角度・縦ラインの伸びを
建築写真の原理で精密に調整した。

コントラストではなく“光の密度”で魅せることで、
モード特有の緊張を保ちながら、
静寂がゆっくり広がる EC を設計。

縦構成を軸にし、視線がすっと落ちる
“建築 × ファッション” の境界線をデザインした。`}
        </p>

        <div className="mt-10 text-white/30 text-[0.82rem] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / GSAP Minimal Drift / PC-SP Separation</p>
        </div>
      </div>


      {/* =========================================================
          VISUALS — Vertical Mode Exhibition（完成展示）
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-28 space-y-28">

        {/* Architecture Visual */}
        <div className="relative overflow-hidden border border-white/10">
          <img
            src="/works1/still-visual1.jpg"
            alt="STILL Visual"
            className="w-full object-cover brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/24" />
        </div>

        {/* Fashion / Model Vertical */}
        <div className="relative overflow-hidden border border-white/10">
          <img
            src="/works1/still-visual2.png"
            alt="Fashion Still"
            className="w-full object-cover brightness-[0.90]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/22" />
        </div>

      </div>


      {/* =========================================================
          CTA — 黒ミニマルの最終形（重心調整済み）
      ========================================================= */}
      <div className="text-center mt-40">
        <a
          href="https://still-ec.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-14 py-4
            text-[0.9rem]
            tracking-[0.30em]
            border border-white/22
            rounded-full
            hover:border-white/55
            hover:shadow-[0_0_34px_rgba(255,255,255,0.25)]
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
