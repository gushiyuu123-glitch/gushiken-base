import React from "react";

export default function Category({ title, subtitle, children, itemsRaw = [] }) {
  const items = React.Children.toArray(children);

  // ← これが最強に正確な NEW 判定
  const hasNew = itemsRaw.some((i) => i.isNew === true);

  const getCardWidth = (category) => {
const map = {
  "BEAUTY / SALON": "w-[92%]",
  "HOTEL / STAY": "w-[90%]",
  "FOOD / FURNITURE / BRAND": "w-[88%]",
  "EC / BRAND DESIGN": "w-[84%]",
  "ART / CREATIVE": "w-[94%]",
};

    return map[category] || "w-[88%]";
  };

  return (
    <section className="aq-fade w-full relative">

      {/* TITLE */}
      <div className="mb-12 relative">
        <div className="w-12 h-px bg-gradient-to-r from-white/30 to-white/5 mb-6" />

        <div className="flex items-center">
          <h2 className="text-white text-[1.02rem] md:text-[1.15rem] font-light tracking-[0.22em]">
            {title}
          </h2>

          {hasNew && (
            <span
              className="
                ml-3 px-2 py-[2px]
                text-[0.65rem] tracking-[0.18em]
                rounded-sm
                text-amber-300 bg-white/5
                border border-amber-300/40
                shadow-[0_0_12px_rgba(255,200,120,0.25)]
                animate-pulse
              "
            >
              NEW
            </span>
          )}
        </div>

        <p className="text-white/38 text-[0.78rem] tracking-[0.14em] leading-relaxed mt-2">
          {subtitle}
        </p>
      </div>

{/* SP 横スク（Noah Ultimate） */}
<div className="sm:hidden w-full relative mb-20 pt-4">
  {/* 縦スクロールの逃げ場 */}
  <div className="relative px-1">
    <div
      className="
        works-rail
        flex
        overflow-x-auto overflow-y-hidden
        no-scrollbar
        snap-x snap-mandatory
        gap-5 px-4 py-4
        overscroll-x-contain
      "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {items.map((child, index) => (
        <div
          key={index}
          className={`
            works-card
            flex-shrink-0
            ${getCardWidth(title)}
            ${index === 0 ? "snap-start is-first" : "snap-center"}
          `}
        >
          {child}
        </div>
      ))}
    </div>
  </div>
</div>


      {/* PC GRID */}
      <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
        {items}
      </div>
    </section>
  );
}
