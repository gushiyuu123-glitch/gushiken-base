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

  let isNew = false;
  if (createdAt) {
    const now = new Date();
    const diff = (now - new Date(createdAt)) / 86400000;
    if (diff <= 30) isNew = true;
  }
  if (tags.includes("NEW")) isNew = true;

  return (
    <Tag
      {...(isExternal
        ? { href: link, target: "_blank", rel: "noopener noreferrer" }
        : { to: link })}
      className="
        work-card aq-fade
        group block relative
        rounded-[12px]
        overflow-hidden
        bg-[#0a0a0a]
        border border-white/10
        shadow-[0_0_18px_rgba(0,0,0,0.46)]
        transform-gpu
        transition-[transform,border-color,box-shadow,background-color]
        duration-[380ms]
        ease-[cubic-bezier(0.22,0.56,0.18,1)]
        hover:-translate-y-[4px]
        hover:border-white/18
        hover:shadow-[0_18px_34px_rgba(0,0,0,0.44)]
      "
    >
      {/* subtle glow */}
      <div
        className="
          absolute inset-0 pointer-events-none rounded-[12px]
          opacity-0
          transition-opacity duration-[460ms]
          ease-[cubic-bezier(0.22,0.56,0.18,1)]
          group-hover:opacity-100
        "
        style={{
          boxShadow: "0 0 26px rgba(222,200,156,0.09)",
        }}
      />

      {/* noise */}
      <div
        className="
          absolute inset-0 pointer-events-none
          opacity-[0.045]
          bg-[url('/grain-gold.png')]
          mix-blend-overlay
        "
      />

      {/* IMAGE */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {isNew && (
          <span
            className="
              absolute top-3 left-3 z-20
              rounded-sm border border-white/24
              bg-black/30 px-3 py-[3px]
              text-[10px] font-light uppercase tracking-[0.28em]
              text-white/92
              backdrop-blur-[1.5px]
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
            h-full w-full object-cover
            brightness-[0.9]
            scale-[1.002]
            transition-[transform,filter]
            duration-[620ms]
            ease-[cubic-bezier(0.22,0.56,0.18,1)]
            group-hover:brightness-[1.01]
            group-hover:scale-[1.022]
          "
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.16), rgba(0,0,0,0.02) 42%, rgba(0,0,0,0.08))",
          }}
        />
      </div>

      {/* TEXT */}
      <div className="relative p-7 pb-9 text-white">
        <h3
          className="
            mb-3 text-[1.02rem]
            font-light leading-[1.45]
            tracking-[0.16em] text-white/90
          "
        >
          {title}
        </h3>

        <p
          className="
            mb-6 max-w-[360px]
            whitespace-pre-line text-[0.85rem]
            leading-[1.9] text-white/55
          "
        >
          {desc}
        </p>

        <span
          className="
            inline-flex items-center gap-2
            text-[0.74rem] tracking-[0.24em]
            text-white/62
            transition-colors duration-[280ms] ease-out
            group-hover:text-white/88
          "
        >
          <span>作品詳細へ</span>
          <span
            className="
              transition-transform duration-[300ms] ease-out
              group-hover:translate-x-[3px]
            "
          >
            →
          </span>
        </span>
      </div>

      <style>{`
        @keyframes new-breathe {
          0% {
            opacity: 0.62;
            box-shadow: 0 0 4px rgba(255,245,220,0.10);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 8px rgba(255,245,220,0.16);
          }
          100% {
            opacity: 0.62;
            box-shadow: 0 0 4px rgba(255,245,220,0.10);
          }
        }

        .animate-new-breathe {
          animation: new-breathe 2.8s ease-in-out infinite;
        }
      `}</style>
    </Tag>
  );
}