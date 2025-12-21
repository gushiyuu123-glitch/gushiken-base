// src/components/CategoryTabs.jsx
import React from "react";

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
  categoryList,
}) {
  return (
    <div
      className="
        aq-fade mb-20
        flex flex-wrap justify-center
        gap-3 md:gap-4
        overflow-x-auto md:overflow-visible
        no-scrollbar
        pt-2 pb-3 px-2 md:px-0
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
              rounded-[16px]
              backdrop-blur-[2px]
              transition-all duration-[480ms]
              whitespace-nowrap
              shadow-[0_0_10px_rgba(255,255,255,0.05)]
              ${
                active
                  ? "text-black bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.18)]"
                  : "text-white/55 border border-white/14 hover:text-white/80 hover:border-white/30"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
