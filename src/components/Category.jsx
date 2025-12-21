// src/components/Category.jsx
import React from "react";

export default function Category({ title, subtitle, children }) {
  const items = React.Children.toArray(children);

  // カテゴリに応じてカード幅を調整
  const getCardWidth = (category) => {
    const map = {
      "BEAUTY / SALON": "w-[92%]",
      "EC / BRAND DESIGN": "w-[85%]",
      "FOOD / FURNITURE / BRAND": "w-[88%]",
      HOTEL: "w-[90%]",
      "SMARTPHONE / MOBILE DESIGN": "w-[80%]",
      "ART / CREATIVE": "w-[94%]",
    };

    return map[category] || "w-[88%]";
  };

  return (
    <section className="aq-fade w-full relative">
      {/* ----- Title ------ */}
      <div className="mb-12 relative">
        <div className="w-12 h-px bg-gradient-to-r from-white/30 to-white/5 mb-6" />

        <h2 className="text-white text-[1.02rem] md:text-[1.15rem] font-light tracking-[0.22em] mb-[0.35rem]">
          {title}
        </h2>

        <p className="text-white/38 text-[0.78rem] tracking-[0.14em] leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* ----------------------------
          SP 横スク（強化版）
      ----------------------------- */}
      <div className="sm:hidden w-full relative mb-16 pt-4">
        <div
          className="
            flex gap-6
            overflow-x-auto no-scrollbar
            snap-x snap-mandatory
            scroll-smooth
            pr-10
            [touch-action:pan-x_pan-y]
            [overscroll-behavior-x:contain]
            will-change-transform
            transform-gpu
          "
          style={{
            WebkitOverflowScrolling: "touch", // 惰性スクロール最大化
          }}
        >
          {items.map((child, i) => (
            <div
              key={i}
              className={`
                snap-center
                ${getCardWidth(title)}
                ${i === 0 ? "ml-6" : ""}
              `}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* ----- PC GRID ----- */}
      <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 auto-rows-[1fr]">
        {items}
      </div>
    </section>
  );
}
