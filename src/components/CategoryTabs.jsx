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
      {/* 📱 SP（横スクローラー） */}
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
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categoryList.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                scroll-snap-align-start
                px-4 py-[0.38rem]
                text-[0.62rem]
                tracking-[0.16em]
                rounded-full
                whitespace-nowrap
                border 
                transition-all duration-300
                ${
                  active
                    ? "bg-white text-black border-white"
                    : "border-white/18 text-white/45 hover:text-white/80"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ================================ */}
      {/* 💻 PC（wrapで整然と並ぶ） */}
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
                px-5 py-[0.45rem]
                text-[0.72rem]
                tracking-[0.22em]
                rounded-full
                whitespace-nowrap
                border
                transition-all duration-380
                ${
                  active
                    ? "bg-white text-black border-white shadow-[0_0_14px_rgba(255,255,255,0.20)]"
                    : "border-white/16 text-white/55 hover:text-white/80 hover:border-white/30"
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
