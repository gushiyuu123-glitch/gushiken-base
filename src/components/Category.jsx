// src/components/Category.jsx
import React from "react";

export default function Category({ title, subtitle, children }) {
  return (
    <section
      className="
        aq-fade w-full relative
        [overscroll-behavior-x:none]
      "
    >

      {/* ----- Title ----- */}
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

      {/* ----- SP 横スク（縦×横 完全両立版） ----- */}
      <div className="sm:hidden w-full relative mb-16 pt-4">

        {/* 左右フェード */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-[28px] bg-gradient-to-r from-black/10 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[28px] bg-gradient-to-l from-black/10 to-transparent z-10" />

        {/* 横スクコンテナ */}
        <div
          className="
            flex gap-6 
            overflow-x-auto
            scroll-x-snap
            no-scrollbar
            pr-10

            /* ===== 触り心地の最適化 ===== */
            [touch-action:pan-x_pan-y]     /* ← Safari に縦も横も許可させる */
            [overscroll-behavior-x:contain] /* ← 横バウンス防止 */
            will-change-transform
            transform-gpu
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {React.Children.map(children, (child) => (
            <div className="snap-start min-w-[82%]">{child}</div>
          ))}
        </div>
      </div>

      {/* ----- PC grid ----- */}
      <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 auto-rows-[1fr]">
        {children}
      </div>

    </section>
  );
}
