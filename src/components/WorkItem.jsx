// src/components/WorkItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ title, desc, link, img }) {
  const isExternal = link.startsWith("http");
  const Tag = isExternal ? "a" : Link;

  return (
    <Tag
      {...(isExternal
        ? { href: link, target: "_blank", rel: "noopener noreferrer" }
        : { to: link })}
      className="
        work-item fade-up block rounded-xl overflow-hidden
        bg-[#111] border border-white/10
        shadow-[0_0_25px_rgba(0,0,0,0.35)]
        transition-all duration-700 hover:scale-[1.02]
      "
    >
      {/* 画像エリア */}
      <div className="relative w-full h-56 md:h-64 bg-black/40">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/40 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* テキスト層 */}
      <div className="p-6 text-white">
        <h3 className="text-lg tracking-[0.14em] mb-1 font-light">
          {title}
        </h3>

        <p className="text-white/60 text-sm">
          {desc}
        </p>

        <span className="text-white/80 text-xs tracking-[0.18em] mt-4 block">
          VIEW SITE →
        </span>
      </div>
    </Tag>
  );
}
