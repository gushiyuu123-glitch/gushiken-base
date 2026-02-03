// src/components/CategoryTabs.jsx
import React from "react";

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
  categoryList,
}) {
  return (
    <div className="aq-fade mb-16">

      {/* ================================ */}
      {/* 📱 SP（横スクローラー：薄膜×静 × 高級） */}
      {/* ================================ */}
      <div
        className="
          flex md:hidden
          overflow-x-auto no-scrollbar
          gap-2.5
          px-3 py-2
          [scroll-snap-type:x_mandatory]
          [overscroll-behavior-x:contain]
        "
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {categoryList.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                scroll-snap-align-start
                px-4 py-[0.46rem]
                text-[0.65rem]
                tracking-[0.18em]
                rounded-full
                whitespace-nowrap
                border
                transition-all duration-350
                backdrop-blur-[3px]

                ${
                  active
                    ? "bg-white text-black border-white shadow-[0_0_14px_rgba(255,255,255,0.16)]"
                    : "border-white/14 text-white/55 hover:text-white/85 hover:border-white/28"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ================================ */}
      {/* 💻 PC（高級ブティックの並び × 線階層統一） */}
      {/* ================================ */}
      <div
        className="
          hidden md:flex
          flex-wrap justify-center
          gap-3
          px-2 pt-2 pb-3
        "
      >
        {categoryList.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-[0.52rem]
                text-[0.75rem]
                tracking-[0.22em]
                rounded-full
                whitespace-nowrap
                border
                transition-all duration-400
                backdrop-blur-[3px]

                ${
                  active
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.22)]"
                    : "border-white/16 text-white/55 hover:text-white/85 hover:border-white/30"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
