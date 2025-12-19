// src/components/Category.jsx
import React from "react";

/* ============================================================
   CATEGORY — Silent UI v4.3（完全最適化）
   PC/SP完全分離・作品展レイアウト・呼吸アニメ・横スク安定
============================================================ */

export default function Category({ title, subtitle, children }) {
  return (
   <section className="aq-fade w-full relative">


      {/* ----------------------------- */}
      {/* Exhibition Title Block        */}
      {/* ----------------------------- */}
      <div className="mb-12 relative">

        {/* 極薄ゴールドライン */}
        <div className="w-12 h-px bg-gradient-to-r from-white/30 to-white/5 mb-6" />

        {/* タイトル */}
        <div className="category-title-wrapper aq-fade delay-1">

          <h2
            className="
              category-title
              text-white 
              text-[1.02rem] md:text-[1.15rem]
              font-light 
              tracking-[0.22em]
              mb-[0.35rem]   /* ← Silent UI 呼吸ポイント */
            "
          >
            {title}
          </h2>
        </div>

        {/* 説明 */}
        <p
          className="
            text-white/38 
            text-[0.78rem] 
            tracking-[0.14em]
            leading-relaxed
          "
        >
          {subtitle}
        </p>
      </div>

      {/* ----------------------------- */}
      {/* SP — 横スクロール展示         */}
      {/* ----------------------------- */}
      <div className="sm:hidden w-full relative mb-16">

        {/* 左フェード */}
        <div
          className="
            pointer-events-none 
            absolute top-0 left-0 h-full w-[28px]
            bg-gradient-to-r from-black/10 to-transparent
            z-10
          "
        />

        {/* 右フェード */}
        <div
          className="
            pointer-events-none 
            absolute top-0 right-0 h-full w-[28px]
            bg-gradient-to-l from-black/10 to-transparent
            z-10
          "
        />

        {/* 横スク container */}
        <div
          className="
            flex gap-6 
            overflow-x-auto 
            scroll-x-snap
            no-scrollbar
            pr-4

            /* ★ iOS Safari 安定化（ガクつき防止） */
            will-change-transform
            transform-gpu
          "
        >
          {React.Children.map(children, (child, i) => (
            <div className="snap-start min-w-[82%]">
              {/* 高さ完全固定 */}
              <div className="block will-change-auto">
                {React.cloneElement(child, {
                  spIndex: i,
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------- */}
      {/* PC — Exhibition Grid           */}
      {/* ----------------------------- */}
      <div
        className="
          hidden sm:grid
          grid-cols-2 xl:grid-cols-3
          gap-x-12 gap-y-16
          
          /* ★ カード揺れゼロ化 */
          auto-rows-[1fr]
        "
      >
        {children}
      </div>

    </section>
  );
}
