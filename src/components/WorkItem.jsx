import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ title, desc, link, img }) {
  const isExternal = /^https?:\/\//.test(link);
  const Tag = isExternal ? "a" : Link;

  return (
    <>
      {/* ========================================================= */}
      {/* PC VERSION — 黒 × 金 × 展示会                         */}
      {/* ========================================================= */}
      <Tag
        {...(isExternal
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : { to: link })}
       className="
    hidden sm:block group relative rounded-[14px] overflow-hidden
    bg-[#0a0a0a]
    border border-white/[0.08]
    shadow-[0_0_18px_rgba(255,255,255,0.03)]
    transition-all
    duration-[780ms]
    hover:shadow-[0_0_26px_rgba(255,255,255,0.08)]
    hover:scale-[1.016]
  "
  style={{
    transitionDelay: "40ms" // ← 高級感の正体
  }}
>

        {/* 金ノイズ背景 */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('/grain-gold.png')] mix-blend-overlay" />

        {/* 画像 */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="
              w-full h-full object-cover
              brightness-[0.85]
              transition-all duration-[1300ms]
              ease-[cubic-bezier(.25,.46,.45,.94)]
              group-hover:brightness-100
              group-hover:scale-[1.045]
            "
          />

          {/* フィルムグレイン */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('/grain.png')]" />
        </div>

        {/* テキスト */}
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

          <span
            className="
              text-white/60 text-[0.72rem]
              tracking-[0.28em]
              inline-block mt-1
              transition-all duration-500
              group-hover:tracking-[0.35em]
              group-hover:text-white/90
            "
          >
            VIEW SITE →
          </span>
        </div>
      </Tag>

      {/* ========================================================= */}
      {/* SP VERSION — 静かなミニ展示                              */}
      {/* ========================================================= */}
      <Tag
        {...(isExternal
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : { to: link })}
        className="
    sm:hidden block rounded-[16px] overflow-hidden
    bg-[#0d0d0d]
    border border-white/10
    shadow-[0_0_10px_rgba(0,0,0,0.3)]
    backdrop-blur-[1px]
  "
>
        {/* 金ノイズ背景（SP） */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('/grain-gold.png')] mix-blend-overlay" />

        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="
              w-full h-full object-cover
              brightness-[0.88]
              transition-all duration-[1000ms]
              group-hover:brightness-100
              group-hover:scale-[1.03]
            "
          />
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('/grain.png')]" />
        </div>

        {/* テキスト */}
        <div className="px-5 pt-5 pb-7 text-white">
          <h3 className="
            text-[0.95rem]
            tracking-[0.16em]
            font-light
            mb-3
            text-white/90
          ">
            {title}
          </h3>

          <p className="
            text-white/55
            text-[0.82rem]
            leading-[1.75]
            whitespace-pre-line
            line-clamp-4
            mb-5
          ">
            {desc}
          </p>

          <span className="text-white/65 text-[0.68rem] tracking-[0.22em]">
            VIEW SITE →
          </span>
        </div>
      </Tag>
    </>
  );
}
