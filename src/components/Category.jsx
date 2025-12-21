// src/components/Category.jsx
import React from "react";

export default function Category({ title, subtitle, children }) {
  const items = React.Children.toArray(children);

  return (
    <section
      className="
        aq-fade w-full relative
        pb-10 sm:pb-0
        [overscroll-behavior-x:none]
      "
    >
      {/* ===== Title Block ===== */}
      <div className="mb-12 relative">
        <div className="w-12 h-px bg-gradient-to-r from-white/30 to-white/5 mb-6" />

        <h2
          className="
            text-white
            text-[1.02rem] md:text-[1.15rem]
            font-light tracking-[0.22em]
            mb-[0.35rem]
          "
        >
          {title}
        </h2>

        <p className="text-white/38 text-[0.78rem] tracking-[0.14em] leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* =======================================================
          SP 横スクロール（Gushiken Silent Scroll Edition）
      ======================================================== */}
  {/* ----- SP 横スク ------ */}
<div className="sm:hidden w-full relative mb-16 pt-4">

  {/* 横スク */} 
  <div
    className="
      flex gap-6
      overflow-x-auto
      scroll-x-snap
      no-scrollbar
      pr-10
      [touch-action:pan-x_pan-y]
      [overscroll-behavior-x:contain]
      will-change-transform
      transform-gpu
    "
    style={{ WebkitOverflowScrolling: "touch" }}
  >
    {items.map((child, i) => (
      <div key={i} className="snap-start min-w-[82%]">
        {child}
      </div>
    ))}
  </div>
</div>

      {/* =======================================================
          PC GRID（ストレスゼロの展示型レイアウト）
      ======================================================== */}
      <div
        className="
          hidden sm:grid
          grid-cols-2 xl:grid-cols-3
          gap-x-12 gap-y-16
          auto-rows-[1fr]
        "
      >
        {items}
      </div>
    </section>
  );
}
