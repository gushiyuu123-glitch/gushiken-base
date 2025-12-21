// src/components/CategoryTabs.jsx
import React from "react";

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
  categoryList,
}) {
  return (
    <div className="aq-fade mb-16">
      {/* SP: 横スク */}
      <div
        className="
          flex md:hidden
          overflow-x-auto no-scrollbar
          gap-3
          px-3 py-2
        "
      >
        {categoryList.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-[0.35rem]
                text-[0.64rem]
                tracking-[0.16em]
                rounded-full
                border
                whitespace-nowrap
                transition-all duration-300
                ${
                  active
                    ? "bg-white text-black border-white"
                    : "border-white/20 text-white/45 hover:text-white/75"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* PC: 中央寄せ + wrap */}
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
                px-5 py-[0.48rem]
                text-[0.72rem]
                tracking-[0.22em]
                rounded-full
                border
                whitespace-nowrap
                transition-all duration-380
                ${
                  active
                    ? "bg-white text-black border-white"
                    : "border-white/18 text-white/55 hover:text-white/80"
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
