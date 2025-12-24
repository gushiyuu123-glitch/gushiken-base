// src/pages/works/CapeOkinawa.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CapeOkinawa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f7fafc] text-[#0f0f0f] min-h-screen pb-48">

      {/* =========================================================
          HERO — 海光 × 透明感 × 静寂（最強版）
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
      brightness-[0.88]    /* ← 下げる */
    "
  />

  {/* グラデを暗→光 に変更 */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-black/35 via-black/10 to-white/70
    "
  />

  <div className="absolute bottom-10 left-6 pr-6">
    <h1 className="text-[1.9rem] tracking-[0.22em] font-light mb-2 text-white">
      CAPE. OKINAWA
    </h1>

    <p className="text-white/70 tracking-[0.26em] text-[0.72rem]">
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
      object-cover brightness-[0.86]   /* ← 最適 */
      scale-[1.05]
      transform-gpu
    "
  />

  {/* ここ、白→光は弱すぎ。黒→白のほうが文字が絶対見える */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-black/35 via-black/8 to-white/20
    "
  />

  <div className="absolute bottom-28 left-[clamp(20px,8vw,120px)]">
    <h1 className="text-[3.8rem] tracking-[0.24em] leading-[1.1] font-light mb-4 text-white">
      CAPE. OKINAWA
    </h1>

    <p className="text-white/70 tracking-[0.30em] text-[0.9rem]">
      SEA × LIGHT × SILENT CAFE EXPERIENCE
    </p>
  </div>
</div>

      </div>

      {/* =========================================================
          OUTLINE — 海の澄み × 空気の静寂
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-32 mb-40">
        <h2 className="text-[0.9rem] tracking-[0.30em] text-black/35 mb-10">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.18rem]
            leading-[2.38]
            text-black/85
            font-light
            whitespace-pre-line
          "
        >
          {`海光の揺らぎと沖縄の澄んだ空気を UI に抽象化し、
カフェ体験を“展示”として見せる静寂系デザイン。

水面の透明感・海風の光粒・店内の静かな余白を
ミニマルな構成で編集し、時間の流れそのものを表現。

写真が主体のため、余白 × 光 × 粒度 × 色温度を統一し、
視覚体験が途切れない“静けさのカフェUI”へ昇華。`}
        </p>

        <div className="mt-12 text-black/45 text-[0.86rem] leading-relaxed tracking-[0.12em]">
          <p>TECH — React / Vite / Tailwind / GSAP Motion / Exhibition Layout</p>
        </div>
      </div>

      {/* =========================================================
          VISUAL GALLERY — 清涼感 × 海光 × 透明感
      ========================================================= */}
      <div className="max-w-[1180px] mx-auto px-8 md:px-0 space-y-36">

        {/* VISUAL 1 */}
        <div className="relative overflow-hidden rounded-[22px] border border-black/10 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
          <img
            src="/works1/cape-okinawa1.png"
            className="w-full object-cover brightness-[1.03]"
            alt="Cafe Visual"
          />
        </div>

        {/* VISUAL 2 */}
        <div className="relative overflow-hidden rounded-[22px] border border-black/10 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
          <img
            src="/works1/okinawa2.webp"
            className="w-full object-cover brightness-[1.07]"
            alt="Okinawa Light"
          />
        </div>
      </div>

      {/* =========================================================
          CTA — 静かな光のボタン（最強版）
      ========================================================= */}
      <div className="text-center mt-40">
        <a
          href="https://cape-okinawa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-14 py-[14px]
            text-[0.9rem]
            tracking-[0.32em]
            border border-black/20
            hover:border-black/45
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
            className="text-black/50 hover:text-black tracking-[0.26em] text-[0.82rem]"
          >
            ← BACK TO WORKS LIST
          </Link>
        </div>
      </div>

    </section>
  );
}
