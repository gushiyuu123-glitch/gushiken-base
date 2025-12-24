// src/pages/works/BlueShoreHotel.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlueShoreHotel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f6f9fb] text-[#111] min-h-screen pb-40">

      {/* =========================================================
          HERO — 沖縄の海光 × 静寂ラグジュアリー
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

        {/* --- SP --- */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/lux-hotel-lp1.png"
            alt="Blue Shore Hotel"
            className="
              absolute inset-0 w-full h-full
              object-cover object-center
              brightness-[0.92]
            "
          />

          {/* Light Film */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/50 via-white/10 to-white/80
            "
          />

          <div className="absolute bottom-10 left-6">
            <h1 className="text-[1.8rem] tracking-[0.22em] font-light mb-1">
              BLUE SHORE HOTEL
            </h1>
            <p className="text-black/45 tracking-[0.26em] text-[0.65rem]">
              SEA × LIGHT × QUIET LUXURY
            </p>
          </div>
        </div>

        {/* --- PC --- */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src="/works1/lux-hotel-lp1.png"
            alt="Blue Shore Hotel"
            className="
              absolute inset-0 w-full h-full
              object-cover brightness-[0.95]
              scale-[1.06]
              transform-gpu
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/45 via-white/10 to-white/85
            "
          />

          <div className="absolute bottom-24 left-20">
            <h1 className="text-[3.6rem] tracking-[0.24em] font-light mb-3">
              BLUE SHORE HOTEL
            </h1>
            <p className="text-black/40 tracking-[0.32em] text-[0.85rem]">
              SEA × LIGHT × QUIET LUXURY
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — “光 × 静寂 × 余白” の空気感
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 mb-32">

        <h2 className="text-[0.9rem] tracking-[0.28em] text-black/35 mb-8">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.1rem]
            leading-[2.3]
            text-black/80
            font-light
            whitespace-pre-line
          "
        >
          {`沖縄の海光を“静寂のラグジュアリー”として再構築したホテルLP。

淡い光の揺らぎ・静寂の余白・海の透明感を主体に、
ホテルらしい落ち着きと洗練された世界観をミニマルに設計。

Cinematic Scroll により、海光の深度と空気の温度変化を
スクロールで体験できる静謐なUI構成。`}
        </p>

        <div className="mt-12 text-black/40 text-[0.84rem] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / GSAP Cinematic Scroll / PC-SP Separation</p>
        </div>
      </div>

      {/* =========================================================
          VISUAL GALLERY — SANKOU級 余白 × 光 × 深度
      ========================================================= */}
      <div className="max-w-6xl mx-auto px-8 md:px-0 space-y-32">

        {/* VISUAL 1 */}
        <div className="relative overflow-hidden rounded-[18px] border border-black/10">
          <img
            src="/works1/okinawa.webp"
            className="w-full object-cover brightness-[1.0]"
            alt="Hotel Visual"
          />
        </div>

        {/* VISUAL 2（例） */}
        <div className="relative overflow-hidden rounded-[18px] border border-black/10">
          <img
            src="/works1/okinawa1.webp"
            className="w-full object-cover brightness-[1.05]"
            alt="Okinawa Light"
          />
        </div>



      </div>

      {/* =========================================================
          CTA — 透明な光の余韻
      ========================================================= */}
      <div className="text-center mt-36">
        <a
          href="https://lux-hotel-lp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-12 py-4
            text-[0.85rem]
            tracking-[0.32em]
            border border-black/20
            hover:border-black/40
            hover:shadow-[0_0_24px_rgba(0,0,0,0.15)]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>

        <div className="mt-10">
          <Link
            to="/works"
            className="text-black/50 hover:text-black tracking-[0.26em] text-[0.75rem]"
          >
            ← BACK TO WORKS LIST
          </Link>
        </div>
      </div>

    </section>
  );
}
