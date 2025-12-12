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
{/* SP VERSION — Dior Gold Exhibition Mini（完全版）        */}
{/* ========================================================= */}
<Tag
  {...(isExternal
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { to: link })}
  className="
    sm:hidden block 
    rounded-[22px] overflow-hidden relative
    bg-[#0b0b0b]
    border border-white/[0.16]
    shadow-[0_14px_48px_rgba(0,0,0,0.85)]        /* 深影 */
    transition-all duration-[900ms]
    active:scale-[0.985]
    sp-slide-in                                   /* ← スライドイン */
  "
>
  {/* ===== Outer Gold Glow（枠グロウ） ===== */}
  <div
    className="
      absolute inset-0 pointer-events-none rounded-[22px]
      opacity-0
      group-hover:opacity-[0.32]
      transition-all duration-[1200ms]
      blur-[14px]
    "
    style={{
      boxShadow: "0 0 38px rgba(215,190,150,0.38)",
    }}
  />

  {/* ===== 金ノイズ ===== */}
  <div
    className="
      absolute inset-0 pointer-events-none
      opacity-[0.12]
      bg-[url('/grain-gold.png')]
      mix-blend-overlay
    "
  />

  {/* ============================= */}
  {/* 画像エリア（高級感の中心） */}
  {/* ============================= */}
  <div className="relative w-full aspect-[4/3] overflow-hidden">
    <img
      src={img}
      alt={title}
      loading="lazy"
      className="
        w-full h-full object-cover
        brightness-[0.86]
        scale-[1.02]
        transition-all duration-[1400ms]
      "
    />

    {/* ===== Bloom（強め） ===== */}
    <div
      className="
        absolute top-0 right-0
        w-[75%] h-[75%]
        pointer-events-none
        opacity-[0.45]
        blur-[20px]
      "
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255,240,215,0.45), transparent 70%)",
      }}
    />

    {/* ===== Film Grain ===== */}
    <div
      className="
        absolute inset-0 pointer-events-none
        opacity-[0.05]
        bg-[url('/grain.png')]
      "
    />
  </div>

  {/* ============================= */}
  {/* テキスト（静寂 × 高級）      */}
  {/* ============================= */}
  <div className="px-5 pt-6 pb-7 text-white">
    <h3
      className="
        text-[1.02rem]
        tracking-[0.22em]
        font-light
        mb-3
        text-white/90
      "
    >
      {title}
    </h3>

    <p
      className="
        text-white/55 text-[0.86rem]
        leading-[1.9]
        whitespace-pre-line
        line-clamp-4
        mb-6
      "
    >
      {desc}
    </p>

    <span
      className="
        text-white/75
        text-[0.72rem]
        tracking-[0.30em]
        transition-all duration-700
      "
    >
      VIEW SITE →
    </span>
  </div>
</Tag>


    </>
  );
}
