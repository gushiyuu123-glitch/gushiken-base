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
    const created = new Date(createdAt).getTime();

    if (!Number.isNaN(created)) {
      const diff = (Date.now() - created) / 86_400_000;
      if (diff <= 30) isNew = true;
    }
  }

  if (tags.includes("NEW")) isNew = true;

  return (
    <Tag
      {...(isExternal
        ? { href: link, target: "_blank", rel: "noopener noreferrer" }
        : { to: link })}
      className="
        work-list-card aq-fade
        group relative block
        overflow-hidden
        border border-white/[0.075]
        border-t-[rgba(201,177,138,0.16)]
        bg-[rgba(8,8,8,0.96)]
        text-white no-underline
        shadow-[0_18px_48px_rgba(0,0,0,0.34)]
        transform-gpu
        transition-[transform,border-color,box-shadow,background-color]
        duration-[520ms]
        ease-[cubic-bezier(0.22,0.56,0.18,1)]
        hover:-translate-y-[3px]
        hover:border-[rgba(201,177,138,0.28)]
        hover:shadow-[0_26px_70px_rgba(0,0,0,0.46)]
      "
    >
      {/* subtle champagne line */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute left-0 top-0 z-20
          h-px w-full opacity-70
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,177,138,0.44), rgba(255,255,255,0.12), transparent)",
        }}
      />

      {/* surface grain */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-10
          opacity-[0.018]
          mix-blend-normal
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 0.42px, transparent 0.42px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* soft hover glow */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-10
          opacity-0
          transition-opacity duration-[520ms]
          ease-[cubic-bezier(0.22,0.56,0.18,1)]
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at 22% 0%, rgba(201,177,138,0.06), transparent 46%)",
        }}
      />

      {/* IMAGE */}
      <div className="relative w-full aspect-[16/9] overflow-hidden md:aspect-[16/10]">
        {isNew && (
          <span
            className="
              absolute left-3 top-3 z-30
              border border-[rgba(201,177,138,0.26)]
              bg-black/35 px-3 py-[3px]
              text-[10px] font-light uppercase tracking-[0.28em]
              text-[rgba(238,226,204,0.92)]
              backdrop-blur-[1px]
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
          decoding="async"
          className="
            h-full w-full object-cover
            brightness-[0.86] saturate-[0.92] contrast-[1.04]
            scale-[1.006]
            transition-[transform,filter]
            duration-[760ms]
            ease-[cubic-bezier(0.22,0.56,0.18,1)]
            group-hover:brightness-[0.96]
            group-hover:saturate-[0.96]
            group-hover:scale-[1.035]
          "
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.38), rgba(0,0,0,0.08) 44%, rgba(0,0,0,0.10))",
          }}
        />
      </div>

      {/* TEXT */}
      <div className="relative z-20 p-5 pb-6 md:p-7 md:pb-9">
        <h3
          className="
            mb-2 text-[0.96rem]
            font-light leading-[1.38]
            tracking-[0.13em] text-white/90
            md:mb-3 md:text-[1.02rem] md:tracking-[0.16em]
          "
        >
          {title}
        </h3>

        <p
          className="
            mb-4 max-w-[360px]
            whitespace-pre-line text-[0.8rem]
            leading-[1.78] text-white/54
            md:mb-6 md:text-[0.85rem] md:leading-[1.9]
          "
        >
          {desc}
        </p>

        <span
          className="
            inline-flex items-center gap-2
            text-[0.68rem] tracking-[0.18em]
            text-[rgba(201,177,138,0.62)]
            transition-colors duration-[280ms] ease-out
            group-hover:text-[rgba(238,226,204,0.92)]
            md:text-[0.74rem] md:tracking-[0.24em]
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
            box-shadow: 0 0 4px rgba(201,177,138,0.08);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 10px rgba(201,177,138,0.15);
          }
          100% {
            opacity: 0.62;
            box-shadow: 0 0 4px rgba(201,177,138,0.08);
          }
        }

        .animate-new-breathe {
          animation: new-breathe 2.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-new-breathe {
            animation: none !important;
          }
        }
      `}</style>
    </Tag>
  );
}