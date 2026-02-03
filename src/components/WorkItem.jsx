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

  // NEW 判定
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
        group block relative rounded-[18px]
        overflow-hidden bg-[#0a0a0a]
        border border-white/10
        shadow-[0_0_20px_rgba(0,0,0,0.52)]
        transition-all duration-[900ms]
        hover:scale-[1.018]
        hover:shadow-[0_24px_42px_rgba(0,0,0,0.58)]
        transform-gpu
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0 pointer-events-none rounded-[18px]
          opacity-0 group-hover:opacity-30
          blur-[26px]
          transition-all duration-[1200ms]
        "
        style={{ boxShadow: "0 0 48px rgba(222,200,156,0.42)" }}
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

      {/* IMAGE */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {isNew && (
          <span
            className="
              absolute top-3 left-3 z-20
              px-3 py-[3px]
              text-[11px]
              tracking-[0.32em] uppercase
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
      </div>

      {/* TEXT */}
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
            text-white/55 text-[0.85rem]
            leading-[1.9] whitespace-pre-line mb-6
          "
          style={{ maxWidth: "360px" }}
        >
          {desc}
        </p>

        <span
          className="
            text-white/60 text-[0.74rem]
            tracking-[0.26em]
            group-hover:text-white/90
            group-hover:tracking-[0.34em]
          "
        >
          作品詳細へ →
        </span>
      </div>

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
    </Tag>
  );
}
