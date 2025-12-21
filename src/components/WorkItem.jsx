// src/components/WorkItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ title = "", desc = "", link = "/", img = "" }) {
  /* ----------------------------------------------------------
     リンク種別を安全に判定
  ---------------------------------------------------------- */
  const isExternal =
    /^https?:\/\//.test(link) ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:");

  const Tag = isExternal ? "a" : Link;

  /* ----------------------------------------------------------
     本体レンダリング
  ---------------------------------------------------------- */
  return (
    <>
      {/* ========================================================= */}
      {/* PC VERSION — Minimal Glow + aq-fade                      */}
      {/* ========================================================= */}
      <Tag
        {...(isExternal
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : { to: link })}
        className="
          aq-fade
          hidden sm:block group relative rounded-[16px] overflow-hidden
          bg-[#0a0a0a]
          border border-white/[0.10]
          shadow-[0_0_14px_rgba(0,0,0,0.45)]
          transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)]
          hover:scale-[1.018]
          hover:shadow-[0_18px_34px_rgba(0,0,0,0.55)]
        "
      >
        {/* Glow Frame */}
        <div
          className="
            absolute inset-0 rounded-[16px] pointer-events-none
            opacity-0 group-hover:opacity-[0.26]
            transition-all duration-[1100ms]
            group-hover:blur-[18px]
          "
          style={{ boxShadow: "0 0 30px rgba(215, 188, 140, 0.45)" }}
        />

        {/* Gold Noise */}
        <div
          className="
            absolute inset-0 pointer-events-none
            opacity-[0.07]
            bg-[url('/grain-gold.png')]
            mix-blend-overlay
          "
        />

        {/* IMAGE */}
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

          <div
            className="
              absolute top-0 right-0 w-[60%] h-[60%]
              pointer-events-none
              opacity-0 group-hover:opacity-[0.45]
              transition-all duration-[1300ms]
            "
            style={{
              background:
                "radial-gradient(circle at top right, rgba(255,244,214,0.32), transparent 70%)",
            }}
          />
        </div>

        {/* TEXT */}
        <div className="p-7 pb-9 text-white relative">
          <div className="min-h-[150px]">
            <h3
              className="
                text-[1.05rem]
                tracking-[0.18em]
                font-light
                mb-3
                text-white/90
                leading-[1.45]
                transform-gpu
              "
            >
              {title}
            </h3>

            <p
              className="
                text-white/55 text-[0.85rem]
                leading-[1.9]
                whitespace-pre-line
                mb-5
                transform-gpu
              "
              style={{ maxWidth: "360px" }}
            >
              {desc}
            </p>

            <span
              className="
                text-white/60 text-[0.72rem]
                tracking-[0.26em]
                inline-block mt-1
                transition-all duration-[600ms]
                group-hover:tracking-[0.34em]
                group-hover:text-white/90
                transform-gpu
              "
            >
              VIEW SITE →
            </span>
          </div>
        </div>
      </Tag>

      {/* ========================================================= */}
      {/* SP VERSION — Silent Touch Optimized                      */}
      {/* ========================================================= */}
      <Tag
        {...(isExternal
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : { to: link })}
        className="
          aq-fade
          sm:hidden block 
          rounded-[22px] relative overflow-clip
          bg-[#0b0b0b]
          border border-white/[0.16]
          shadow-[0_14px_48px_rgba(0,0,0,0.85)]
          transition-all duration-[900ms]
          active:scale-[0.985]
          sp-slide-in
          [touch-action:pan-y pan-x]
        "
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0 pointer-events-none rounded-[22px]
            opacity-0
            transition-all duration-[1200ms]
            blur-[14px]
          "
          style={{ boxShadow: "0 0 38px rgba(215,190,150,0.38)" }}
        />

        {/* IMAGE */}
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
        </div>

        {/* TEXT */}
        <div className="px-5 pt-6 pb-8 text-white">
          <div className="min-h-[148px] mx-auto">
            <h3
              className="
                text-[1.02rem]
                font-light
                text-white/90
                leading-[1.35]
                tracking-[0.12em]
                break-words
                mb-[0.55rem]
                transform-gpu
              "
              style={{ maxWidth: "260px" }}
            >
              {title}
            </h3>

            <p
              className="
                text-white/55
                text-[0.86rem]
                leading-[1.8]
                whitespace-pre-line
                line-clamp-4
                mb-6
                transform-gpu
              "
              style={{ maxWidth: "260px" }}
            >
              {desc}
            </p>

            <span
              className="
                block
                text-white/75
                text-[0.72rem]
                tracking-[0.30em]
                transform-gpu
              "
            >
              VIEW SITE →
            </span>
          </div>
        </div>
      </Tag>
    </>
  );
}
