// src/pages/works/BlueShoreHotel.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlueShoreHotel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f5f8fa] text-[#0e0e0e] min-h-screen pb-48">

      {/* =========================================================
          HERO — 海光 × 静寂ラグジュアリー（最強版）
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
              brightness-[0.94] saturate-[1.05]
            "
          />

          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-white/60 via-white/15 to-white/90
          " />

          {/* Titles SP */}
          <div className="absolute bottom-12 left-6 pr-6">
            <h1 className="text-[1.85rem] leading-[1.25] tracking-[0.23em] font-light mb-2">
              BLUE SHORE<br />HOTEL
            </h1>
            <p className="text-black/40 tracking-[0.28em] text-[0.7rem]">
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
              object-cover brightness-[0.98]
              scale-[1.08] transform-gpu
            "
          />

          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-white/50 via-white/10 to-white/92
          " />

          <div className="absolute bottom-28 left-24">
            <h1 className="text-[4.1rem] leading-[1.2] tracking-[0.24em] font-light mb-5">
              BLUE SHORE<br />HOTEL
            </h1>
            <p className="text-black/45 tracking-[0.30em] text-[0.95rem]">
              SEA × LIGHT × QUIET LUXURY
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — 空気の温度を言語化
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-32 mb-40">

        <h2 className="text-[0.9rem] tracking-[0.30em] text-black/35 mb-10">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.18rem]
            leading-[2.4]
            text-black/80
            font-light
            whitespace-pre-line
          "
        >
          {`沖縄の海光を“静寂のラグジュアリー”として再構築したホテルLP。

光が揺れ、深度が沈み、静けさが満ちる。
その一瞬の温度差を UI に落とし込み、
「視るだけで空気が変わる」体験を設計。

Cinematic Scroll により、光の角度・影の軌跡を
滑らかに変化させ、時間の移ろいを表現。`}
        </p>

        <div className="mt-12 text-black/45 text-[0.86rem] leading-relaxed tracking-[0.12em]">
          <p>TECH — React / Vite / Tailwind / GSAP Cinematic Scroll / PC-SP Separation</p>
        </div>
      </div>

      {/* =========================================================
          VISUAL GALLERY — 透明光 × 余白 × 深度
      ========================================================= */}
      <div className="max-w-[1180px] mx-auto px-8 md:px-0 space-y-36">

        {/* VISUAL 1 */}
        <div className="relative rounded-[22px] overflow-hidden border border-black/10 shadow-[0_0_30px_rgba(0,0,0,0.06)]">
          <img
            src="/works1/okinawa.webp"
            className="w-full object-cover brightness-[1.03]"
            alt="Hotel Visual"
          />
        </div>

        {/* VISUAL 2 */}
        <div className="relative rounded-[22px] overflow-hidden border border-black/10 shadow-[0_0_30px_rgba(0,0,0,0.06)]">
          <img
            src="/works1/okinawa1.webp"
            className="w-full object-cover brightness-[1.08]"
            alt="Okinawa Light"
          />
        </div>

      </div>

      {/* =========================================================
          CTA — 空気ごと吸い込む透明感
      ========================================================= */}
      <div className="text-center mt-40">
        <a
          href="https://lux-hotel-lp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-14 py-[14px]
            text-[0.9rem]
            tracking-[0.32em]
            border border-black/20
            hover:border-black/40
            shadow-[0_0_0_rgba(0,0,0,0)]
            hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]
            transition-all duration-700
          "
        >
          VISIT SITE →
        </a>

        <div className="mt-12">
          <Link
            to="/works"
            className="text-black/45 hover:text-black tracking-[0.26em] text-[0.8rem]"
          >
            ← BACK TO WORKS LIST
          </Link>
        </div>
      </div>

    </section>
  );
}
