// src/components/Category.jsx
import React from "react";

export default function Category({ title, subtitle, children }) {
  const items = React.Children.toArray(children);

  /* ------------------------------------------
    ★ カテゴリー別カード幅（自動判定）
  ------------------------------------------ */
  const getCardWidth = () => {
    if (title.includes("BEAUTY") || title.includes("SALON")) return "92%";
    if (title.includes("HOTEL")) return "88%";
    if (title.includes("EC")) return "85%";
    if (title.includes("FURNITURE") || title.includes("FOOD")) return "88%";
    if (title.includes("MATCHING")) return "92%";
    if (title.includes("ART") || title.includes("CREATIVE")) return "90%";
    return "88%"; // default
  };

  const cardWidth = getCardWidth();

  return (
    <section className="aq-fade w-full relative">

      {/* ----- Title Block ----- */}
      <div className="mb-10">
        <div className="w-12 h-px bg-gradient-to-r from-white/30 to-white/5 mb-6" />
        <h2 className="text-white text-[1.02rem] md:text-[1.15rem] font-light tracking-[0.22em] mb-[0.35rem]">
          {title}
        </h2>
        <p className="text-white/38 text-[0.78rem] tracking-[0.14em] leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* =======================================================
          🟣 SP：横スワイプ棚 UI（カテゴリ別カード幅）
      ======================================================= */}
      <div className="sm:hidden w-full mb-14 pt-2">
        <div
          className="
            flex gap-5
            overflow-x-auto no-scrollbar
            pl-1 pr-8
            snap-x snap-mandatory
            scroll-smooth
            [touch-action:pan-x_pan-y]
            [overscroll-behavior-x:contain]
            will-change-transform
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((child, i) => (
            <div
              key={i}
              className="snap-center"
              style={{
                minWidth: cardWidth,
                maxWidth: cardWidth,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* =======================================================
          🟡 PC：従来グリッド
      ======================================================= */}
      <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 auto-rows-[1fr]">
        {items}
      </div>

    </section>
  );
}
