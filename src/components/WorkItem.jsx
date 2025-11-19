// src/components/WorkItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ title, desc, img, link }) {
  // 外部リンクかどうか判断
  const isExternal = link.startsWith("http");
  const Tag = isExternal ? "a" : Link;

  return (
    <Tag
      {...(isExternal
        ? { href: link, target: "_blank", rel: "noopener noreferrer" }
        : { to: link })}
      className="
        work-item block group relative overflow-hidden
        opacity-0 translate-y-10 blur-sm
        transition-all duration-[1200ms]
      "
    >
      {/* 画像 */}
      <img
        src={img}
        className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700"
      />

      {/* テキスト層 */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
        <h3
          className="text-white text-lg tracking-[0.14em] mb-1 font-light"
          translate="no"
        >
          {title}
        </h3>
        <p className="text-white/70 text-sm">{desc}</p>

        <span
          className="text-white/90 text-xs tracking-[0.18em] mt-3 group-hover:opacity-70 transition"
          translate="no"
        >
          VIEW SITE →
        </span>
      </div>
    </Tag>
  );
}
