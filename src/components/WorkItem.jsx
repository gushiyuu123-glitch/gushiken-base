// src/components/WorkItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({
  title = "",
  desc = "",
  link = "/",
  img = "",
  tags = [],
  createdAt = null,
}) {
  const isExternal =
    /^https?:\/\//.test(link) ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:");

  const Tag = isExternal ? "a" : Link;

  /** NEW 判定（30日以内 or tagsにNEW） */
  let isNew = false;
  if (createdAt) {
    const now = new Date();
    const diff = (now - new Date(createdAt)) / 86400000;
    if (diff <= 30) isNew = true;
  }
  if (tags.includes("NEW")) isNew = true;

  return (
    <>
      {/* =====================================================
          PC 版 — Dior Exhibition（静けさ × 光膜 × ギャラリー感）
      ====================================================== */}
      <Tag
        {...(isExternal
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : { to: link })}
        className="
          hidden sm:block group relative
          overflow-hidden rounded-[18px]
          bg-[#0a0a0a]
          border border-white/10
          shadow-[0_0_20px_rgba(0,0,0,0.52)]
          transition-all duration-[900ms]
          hover:scale-[1.018]
          hover:shadow-[0_24px_42px_rgba(0,0,0,0.58)]
          transform-gpu
        "
      >
        {/* --- PC：GOLD IRIS GLOW --- */}
        <div
          className="
            absolute inset-0 pointer-events-none rounded-[18px]
            opacity-0 group-hover:opacity-30
            blur-[26px]
            transition-all duration-[1200ms]
          "
          style={{
            boxShadow: "0 0 48px rgba(222,200,156,0.42)",
          }}
        />

        {/* Noise */}
        <div
          className="
            absolute inset-0 pointer-events-none
            opacity-[0.06]
            bg-[url('/grain-gold.png')]
            mix-blend-overlay
          "
        />

        {/* --- IMAGE --- */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">

          {/* NEW（PC） */}
          {isNew && (
            <span
              className="
                absolute top-3 left-3 z-20
                px-3 py-[3px]
                text-[11px] tracking-[0.32em] uppercase
                text-white font-light
                bg-white/10 border border-white/40
                rounded-sm backdrop-blur-[4px]
                animate-new-breathe
              "
            >
              NEW
            </span>
          )}

          <img
            src={img}
            alt={title}
            loading="lazy"
            className="
              w-full h-full object-cover brightness-[0.87]
              transition-all duration-[1400ms]
              group-hover:brightness-[1.05]
              group-hover:scale-[1.055]
            "
          />

          {/* Light rim */}
          <div
            className="
              absolute top-0 right-0 w-[60%] h-[60%]
              pointer-events-none opacity-0
              group-hover:opacity-[0.48]
              blur-[22px]
              transition-all duration-[1300ms]
            "
            style={{
              background:
                "radial-gradient(circle at top right, rgba(255,240,210,0.35), transparent 70%)",
            }}
          />
        </div>

        {/* --- TEXT --- */}
        <div className="p-7 pb-9 text-white relative">
          <h3
            className="
              text-[1.05rem] font-light tracking-[0.18em]
              leading-[1.45] text-white/90 mb-3
            "
          >
            {title}
          </h3>

          <p
            className="
              text-white/55 text-[0.85rem] leading-[1.9]
              whitespace-pre-line mb-6
            "
            style={{ maxWidth: "360px" }}
          >
            {desc}
          </p>

          <span
            className="
              text-white/60 text-[0.74rem]
              tracking-[0.26em]
              transition-all duration-[600ms]
              group-hover:text-white/90
              group-hover:tracking-[0.34em]
            "
          >
            作品詳細へ →
          </span>
        </div>
      </Tag>

      {/* =====================================================
          SP 版 — 呼吸と触感に最適化（Apple × Dior Hybrid）
      ====================================================== */}
      <Tag
        {...(isExternal
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : { to: link })}
        className="
          sm:hidden block relative rounded-[22px]
          overflow-hidden bg-[#0b0b0b]
          border border-white/14
          shadow-[0_14px_42px_rgba(0,0,0,0.78)]
          transition-all duration-[780ms]
          active:scale-[0.985]
          sp-slide-in
        "
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0 pointer-events-none rounded-[22px]
            opacity-0 blur-[16px]
            transition-all duration-[1200ms]
          "
          style={{
            boxShadow: "0 0 38px rgba(220,196,150,0.38)",
          }}
        />

        <div className="relative w-full aspect-[5/4] overflow-hidden">

          {/* NEW（SP） */}
          {isNew && (
            <span
              className="
                absolute top-3 left-3 z-20
                px-3 py-[4px]
                text-[12px] tracking-[0.34em] uppercase
                text-white font-light
                bg-white/12 border border-white/40
                rounded-sm backdrop-blur-[4px]
                animate-new-breathe
              "
            >
              NEW
            </span>
          )}

          <img
            src={img}
            alt={title}
            loading="lazy"
            className="
              w-full h-full object-cover
              brightness-[0.86] scale-[1.02]
              transition-all duration-[1400ms]
            "
          />

          <div
            className="
              absolute top-0 right-0 w-[65%] h-[65%]
              pointer-events-none opacity-[0.42]
              blur-[20px]
            "
            style={{
              background:
                "radial-gradient(circle at top right, rgba(255,238,212,0.42), transparent 70%)",
            }}
          />
        </div>

        {/* --- TEXT --- */}
        <div className="px-5 pt-5 pb-7 text-white">
          <h3
            className="
              text-[0.98rem] font-light text-white/90
              leading-[1.32] tracking-[0.12em]
              mb-[0.45rem]
              break-words
            "
            style={{ maxWidth: "240px" }}
          >
            {title}
          </h3>

          <p
            className="
              text-white/55 text-[0.82rem]
              leading-[1.75]
              whitespace-pre-line line-clamp-3
              mb-5
            "
            style={{ maxWidth: "240px" }}
          >
            {desc}
          </p>

          <span
            className="
              block text-white/75 text-[0.70rem]
              tracking-[0.28em]
            "
          >
            作品詳細へ →
          </span>
        </div>
      </Tag>

      {/* =====================================================
          NEW BADGE 呼吸アニメ
      ====================================================== */}
      <style>{`
        @keyframes new-breathe {
          0% {
            opacity: 0.55;
            box-shadow: 0 0 6px rgba(255,245,220,0.20);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 14px rgba(255,245,220,0.42);
          }
          100% {
            opacity: 0.55;
            box-shadow: 0 0 6px rgba(255,245,220,0.20);
          }
        }
        .animate-new-breathe {
          animation: new-breathe 2.4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
