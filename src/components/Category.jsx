// src/components/Category.jsx
import React from "react";

/* ============================================================
   CATEGORY — 完全版（SANKOU Exhibition × Dior Glow）
   PC/SP 完全分離 ＋ 呼吸アニメ ＋ 両端フェード
============================================================ */

export default function Category({ title, subtitle, children }) {
  return (
    <section className="fade-up w-full relative">

      {/* Exhibition Title Block */}
      <div className="mb-12 relative">
        <div
          className="
            w-12 h-px 
            bg-gradient-to-r from-white/30 to-white/5
            drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]
            mb-6
          "
        />

        <h2
          className="
            category-title
            text-white 
            text-[1.02rem] md:text-[1.15rem]
            font-light 
            tracking-[0.22em]
            mb-1
          "
        >
          {title}
        </h2>

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

      {/* =================================================== */}
      {/* SP — 横スク展示（安定化したカードラップ）       */}
      {/* =================================================== */}
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

        {/* 横スク本体 */}
        <div
          className="
            flex gap-6 
            overflow-x-auto 
            scroll-x-snap
            no-scrollbar
            pr-4
          "
        >
          {React.Children.map(children, (child, i) => (
            <div
              className="
                snap-start 
                min-w-[82%]
                sp-card-animate
              "
              style={{
                animationDelay: `${i * 0.18}s`,
              }}
            >
              {/* ★ 高さ安定コンテナ（字間の影響をゼロにする） */}
              <div className="w-[100%] mx-auto">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================== */}
      {/* PC — Exhibition Grid                               */}
      {/* =================================================== */}
      <div
        className="
          hidden sm:grid
          grid-cols-2 xl:grid-cols-3
          gap-x-12 gap-y-16
          relative
        "
      >
        {children}
      </div>
    </section>
  );
}
