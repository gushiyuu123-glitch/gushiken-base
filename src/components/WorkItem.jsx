import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ title, desc, link, img }) {
  const isExternal = /^https?:\/\//.test(link);
  const Tag = isExternal ? "a" : Link;

  return (
    <>
      {/* ========================================================= */}
      {/* PC VERSION — SANKOU × Dior Gold Exhibition              */}
      {/* ========================================================= */}
      <Tag
        {...(isExternal
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : { to: link })}
        className="
          hidden sm:block group relative rounded-[16px] overflow-hidden
          bg-[#0a0a0a]
          border border-white/[0.10]
          shadow-[0_0_14px_rgba(0,0,0,0.45)]
          transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)]
          hover:scale-[1.018]
          hover:shadow-[0_18px_34px_rgba(0,0,0,0.55)]
        "
        style={{
          transitionDelay: "35ms",
        }}
      >

        {/* ===== Gold Glow Frame（展示会の照明の反射） ===== */}
        <div
          className="
            absolute inset-0 rounded-[16px] pointer-events-none
            opacity-0 group-hover:opacity-[0.26]
            transition-all duration-[1100ms]
            group-hover:blur-[18px]
          "
          style={{
            boxShadow: "0 0 30px rgba(215, 188, 140, 0.45)",
            transitionDelay: "80ms",
          }}
        />

        {/* ===== 金ノイズ（金属的な微粒子） ===== */}
        <div className="
          absolute inset-0 pointer-events-none
          opacity-[0.07]
          bg-[url('/grain-gold.png')]
          mix-blend-overlay
        " />

        {/* =================== 画像 =================== */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="
              w-full h-full object-cover
              brightness-[0.83]
              transition-all duration-[1400ms]
              ease-[cubic-bezier(.23,.54,.32,1)]
              group-hover:brightness-[1.06]
              group-hover:scale-[1.055]
            "
          />

          {/* Bloom（右上だけ光が滲む） */}
          <div
            className="
              absolute top-0 right-0 w-[60%] h-[60%]
              pointer-events-none
              opacity-[0]
              group-hover:opacity-[0.45]
              transition-all duration-[1300ms]
            "
            style={{
              background:
                "radial-gradient(circle at top right, rgba(255,244,214,0.32), transparent 70%)",
            }}
          />

          {/* Film Grain */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('/grain.png')]" />
        </div>

        {/* =================== テキスト =================== */}
        <div className="p-7 pb-9 text-white relative">
          <h3 className="
            text-[1.05rem]
            tracking-[0.18em]
            font-light
            mb-3
            text-white/90
          ">
            {title}
          </h3>

          <p className="
            text-white/55 text-[0.85rem]
            leading-[1.9]
            whitespace-pre-line
            mb-5
          ">
            {desc}
          </p>

          <span className="
            text-white/60 text-[0.72rem]
            tracking-[0.26em]
            inline-block mt-1
            transition-all duration-[600ms]
            group-hover:tracking-[0.34em]
            group-hover:text-white/90
          ">
            VIEW SITE →
          </span>
        </div>
      </Tag>

{/* ========================================================= */}
{/* SP VERSION — 静寂ミニ展示（完全版）                     */}
{/* ========================================================= */}
<Tag
  {...(isExternal
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { to: link })}
  className="
    sm:hidden block rounded-[18px] overflow-hidden relative
    bg-[#0d0d0d]
    border border-white/[0.12]
    shadow-[0_0_12px_rgba(0,0,0,0.35)]
    transition-all duration-700
  "
>

  {/* 金ノイズ（SP 専用） */}
  <div
    className="
      absolute inset-0 pointer-events-none
      opacity-[0.06]
      bg-[url('/grain-gold.png')] mix-blend-overlay
    "
  />

  {/* ========================== */}
  {/* 画像エリア（完全版）       */}
  {/* ========================== */}
  <div className="relative w-full aspect-[4/3] overflow-hidden">
    <img
      src={img}
      alt={title}
      loading="lazy"
      className="
        w-full h-full object-cover
        object-[center_38%]              /* ← 枠はそのまま、構図だけ引く */
        brightness-[0.93]
        transition-all duration-[1000ms]
      "
    />

    {/* Bloom（SP 用に最適化） */}
    <div
      className="
        absolute top-0 right-0
        w-[55%] h-[55%]
        pointer-events-none
        opacity-[0.20]
      "
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255,235,210,0.18), transparent 70%)",
      }}
    />

    {/* フィルムグレイン（弱め） */}
    <div
      className="
        absolute inset-0 pointer-events-none
        opacity-[0.04]
        bg-[url('/grain.png')]
      "
    />
  </div>

  {/* ========================== */}
  {/* テキストエリア（完全版）   */}
  {/* ========================== */}
  <div className="px-5 pt-5 pb-7 text-white">
    <h3
      className="
        text-[0.96rem]
        tracking-[0.17em]
        font-light
        mb-3
        text-white/90
      "
    >
      {title}
    </h3>

    <p
      className="
        text-white/55 text-[0.83rem]
        leading-[1.75]
        whitespace-pre-line
        line-clamp-4
        mb-5
      "
    >
      {desc}
    </p>

    <span
      className="
        text-white/70
        text-[0.68rem]
        tracking-[0.22em]
      "
    >
      VIEW SITE →
    </span>
  </div>
</Tag>

    </>
  );
}
