// src/components/WorkItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ title, desc, link, img }) {
  const isExternal = /^https?:\/\//.test(link);
  const Tag = isExternal ? "a" : Link;

  return (
    <Tag
      {...(isExternal
        ? { href: link, target: "_blank", rel: "noopener noreferrer" }
        : { to: link })}
      className="
        group block rounded-[14px] overflow-hidden
        bg-[#0a0a0a]
        border border-white/[0.07]
        shadow-[0_0_14px_rgba(0,0,0,0.22)]
        transition-all duration-[750ms]
        hover:shadow-[0_0_28px_rgba(0,0,0,0.33)]
        hover:scale-[1.017]
        relative
      "
    >



      {/* 画像ブロック */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="
            w-full h-full object-cover
            brightness-[0.92]
            transition-all duration-[1100ms]
            ease-[cubic-bezier(.25,.46,.45,.94)]
            group-hover:brightness-100
            group-hover:scale-[1.035]
          "
        />


      </div>

      {/* テキスト */}
      <div className="p-6 text-white relative">
        <h3 className="text-[1.05rem] tracking-[0.13em] font-light mb-2">
          {title}
        </h3>

        <p className="text-white/60 text-sm leading-[1.75] mb-4 whitespace-pre-line">
          {desc}
        </p>

        <span
          className="
            text-white/75 text-[0.7rem]
            tracking-[0.22em]
            inline-block mt-1
            transition-all duration-500
            group-hover:tracking-[0.32em]
            group-hover:text-white/90
          "
        >
          VIEW SITE →
        </span>
      </div>

    </Tag>
  );
}
