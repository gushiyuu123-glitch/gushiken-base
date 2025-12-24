// src/pages/works/CapeOkinawa.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CapeOkinawa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8fbfd] text-[#0e0e0e] min-h-screen pb-40">

      {/* =========================================================
          HERO — 海光 × 透明感 × 静寂（PC/SP 分離）
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

        {/* --- SP HERO --- */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/CapeOkinawa.png"
            alt="CAPE OKINAWA"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.95]
            "
          />

          {/* 光フィルム */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/40 via-white/8 to-white/85
            "
          />

          <div className="absolute bottom-10 left-6">
            <h1 className="text-[1.85rem] tracking-[0.22em] font-light mb-1">
              CAPE. OKINAWA
            </h1>

            <p className="text-black/45 tracking-[0.26em] text-[0.7rem]">
              SEA × LIGHT × SILENT CAFE EXPERIENCE
            </p>
          </div>
        </div>

        {/* --- PC HERO --- */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src="/works1/CapeOkinawa.png"
            alt="CAPE OKINAWA"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.98]
              scale-[1.04]
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/45 via-white/10 to-white/88
            "
          />

          <div className="absolute bottom-24 left-60">
            <h1 className="text-[3.6rem] tracking-[0.24em] font-light mb-3">
              CAPE. OKINAWA
            </h1>

            <p className="text-black/40 tracking-[0.32em] text-[0.9rem]">
              SEA × LIGHT × SILENT CAFE EXPERIENCE
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — “海の澄み × 空気の静寂” の編集UI
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 mb-32">
        <h2 className="text-[0.9rem] tracking-[0.28em] text-black/35 mb-8">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.1rem]
            leading-[2.3]
            text-black/85
            font-light
            whitespace-pre-line
          "
        >
          {`海光の揺らぎと沖縄の澄んだ空気を UI に抽象化し、
カフェ体験を“展示”として見せる静寂系デザイン。

水面の透明感・海風の光粒・店内の静かな余白を
ミニマルな構成で編集し、時間の流れそのものを表現。

写真が主体のため、余白 × 光 × 色温度を極限まで統一し、
視覚体験が途切れない“静けさのカフェUI”を設計。`}
        </p>

        <div className="mt-12 text-black/40 text-[0.84rem] leading-relaxed">
          <p>
            Tech — React / Vite / Tailwind / GSAP Motion / Minimal Exhibition Layout
          </p>
        </div>
      </div>

      {/* =========================================================
          VISUAL GALLERY — 清涼感 × 透明感 × 海光
      ========================================================= */}
      <div className="max-w-6xl mx-auto px-8 md:px-0 space-y-32">

        {/* VISUAL 1 */}
        <div className="relative overflow-hidden rounded-[18px] border border-black/10">
          <img
            src="/works1/cape-okinawa1.png"
            className="w-full object-cover brightness-[1.0]"
            alt="Cafe Visual"
          />
        </div>

        {/* VISUAL 2（例：青ベース） */}
        <div className="relative overflow-hidden rounded-[18px] border border-black/10">
          <img
            src="/works1/okinawa2.webp"
            className="w-full object-cover brightness-[1.05]"
            alt="Okinawa Light"
          />
        </div>
      </div>

      {/* =========================================================
          CTA — 静かな光のボタン
      ========================================================= */}
      <div className="text-center mt-36">
        <a
          href="https://cape-okinawa.vercel.app/"
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
