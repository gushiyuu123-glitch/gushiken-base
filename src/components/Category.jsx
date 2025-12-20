// src/components/Category.jsx
import React from "react";

export default function Category({ title, subtitle, children }) {
  return (
    <section
      className="
        aq-fade w-full relative
        [overscroll-behavior-x:none]   /* ← ページ側の横バウンスを無効化 */
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

      {/* ----- SP 横スク（完全版） ----- */}
      <div className="sm:hidden w-full relative mb-16">

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

            /* ← これが iOS の滑らかさを決定づける */
            pr-10                    /* 右端に余白を作り iOS に“横スクエリア”だと認識させる */
            touch-pan-x              /* 横スクを OS に許可 */
            [touch-action:pan-x]     /* 明示的に横方向だけ許可 */
            [overscroll-behavior-x:contain]  /* 横方向の画面外バウンス停止 */

            will-change-transform 
            transform-gpu
          "
          style={{
            WebkitOverflowScrolling: "touch", /* 慣性スクロール (Momentum Scroll) */
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
