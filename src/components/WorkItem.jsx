// src/components/WorkItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ title = "", desc = "", link = "/", img = "" }) {
  const isExternal =
    /^https?:\/\//.test(link) ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:");

  const Tag = isExternal ? "a" : Link;

  return (
    <>
      {/* ========================================================= */}
      {/* PC VERSION — Silent Gold Glow + aq-fade                  */}
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
          hover:shadow-[0_22px_34px_rgba(0,0,0,0.55)]
          transform-gpu
        "
      >
        {/* Glow Frame */}
        <div
          className="
            absolute inset-0 rounded-[16px] pointer-events-none
            opacity-0 group-hover:opacity-[0.28]
            transition-all duration-[1200ms]
            group-hover:blur-[22px]
          "
          style={{ boxShadow: "0 0 44px rgba(221,198,150,0.42)" }}
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
              brightness-[0.85]
              transition-all duration-[1400ms]
              ease-[cubic-bezier(.23,.54,.32,1)]
              group-hover:brightness-[1.05]
              group-hover:scale-[1.055]
              transform-gpu
            "
          />

          <div
            className="
              absolute top-0 right-0 w-[62%] h-[62%]
              pointer-events-none
              opacity-0 group-hover:opacity-[0.48]
              transition-all duration-[1300ms]
              blur-[22px]
            "
            style={{
              background:
                "radial-gradient(circle at top right, rgba(255,244,214,0.33), transparent 70%)",
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
{/* SP VERSION — Silent Touch Optimized v2.3  (5:4 特化版) */}
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
    shadow-[0_14px_42px_rgba(0,0,0,0.78)]
    transition-all duration-[900ms]
    active:scale-[0.985]
    sp-slide-in
    [touch-action:pan-x_pan-y]
    transform-gpu
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
    style={{ boxShadow: "0 0 34px rgba(215,190,150,0.32)" }}
  />

  {/* IMAGE → 5/4 に変更 */}
  <div className="relative w-full aspect-[5/4] overflow-hidden">
    <img
      src={img}
      alt={title}
      loading="lazy"
      className="
        w-full h-full object-cover
        brightness-[0.85]
        scale-[1.02]
        transition-all duration-[1400ms]
        transform-gpu
      "
    />

    {/* Light */}
    <div
      className="
        absolute top-0 right-0
        w-[68%] h-[68%]
        pointer-events-none
        opacity-[0.42]
        blur-[20px]
      "
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255,240,215,0.44), transparent 70%)",
      }}
    />
  </div>

  {/* TEXT */}
  <div className="px-5 pt-5 pb-7 text-white">
    <div className="min-h-[110px] mx-auto">
      <h3
        className="
          text-[0.98rem]
          font-light
          text-white/90
          leading-[1.32]
          tracking-[0.12em]
          break-words
          mb-[0.45rem]
          transform-gpu
        "
        style={{ maxWidth: "240px" }}
      >
        {title}
      </h3>

      <p
        className="
          text-white/55
          text-[0.82rem]
          leading-[1.75]
          whitespace-pre-line
          line-clamp-3
          mb-5
          transform-gpu
        "
        style={{ maxWidth: "240px" }}
      >
        {desc}
      </p>

      <span
        className="
          block
          text-white/75
          text-[0.70rem]
          tracking-[0.28em]
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
