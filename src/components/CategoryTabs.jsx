import React from "react";

export default function CategoryTabs({ activeCategory, setActiveCategory, categoryList }) {
  const normalize = (str = "") =>
    str
      .replace(/\s+/g, "")
      .replace(/[／・]/g, "/")
      .replace(/-{1,}/g, "")
      .replace(/_/g, "")
      .toLowerCase();

  return (
    <div className="mb-16">
      {/* ================================ */}
      {/* 📱 SP */}
      {/* ================================ */}
      <div
        className="
          no-scrollbar flex gap-2.5 overflow-x-auto
          px-3 py-2 md:hidden
          [scroll-snap-type:x_mandatory]
          [overscroll-behavior-x:contain]
        "
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y", // ✅ 画面引っ張り事故を減らす
        }}
      >
        {categoryList.map((cat) => {
          const active = normalize(activeCategory) === normalize(cat);

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`
                relative shrink-0 whitespace-nowrap overflow-hidden
                rounded-[999px] border px-4 py-[0.48rem]
                text-[0.64rem] tracking-[0.18em]
                transition-[color,border-color,background-color,box-shadow]
                duration-[360ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                [scroll-snap-align:start]
                ${
                  active
                    ? "border-[rgba(220,226,235,0.24)] text-white bg-white/[0.06] shadow-[0_0_18px_rgba(255,255,255,0.035)]"
                    : "border-white/12 bg-transparent text-white/52 hover:border-[rgba(220,226,235,0.22)] hover:text-white/82"
                }
              `}
            >
              {/* ✅ pill移動なし：その場で点灯 */}
              <span
                aria-hidden="true"
                className={`
                  pointer-events-none absolute inset-0 rounded-[999px]
                  bg-white/[0.06]
                  transition-opacity duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${active ? "opacity-100" : "opacity-0"}
                `}
              />
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* ================================ */}
      {/* 💻 PC */}
      {/* ================================ */}
      <div className="hidden flex-wrap justify-center gap-3 px-2 pb-3 pt-2 md:flex">
        {categoryList.map((cat) => {
          const active = normalize(activeCategory) === normalize(cat);

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`
                relative whitespace-nowrap overflow-hidden
                rounded-[999px] border px-6 py-[0.56rem]
                text-[0.74rem] tracking-[0.22em]
                transition-[color,border-color,background-color,box-shadow]
                duration-[380ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  active
                    ? "border-[rgba(220,226,235,0.26)] text-white bg-white/[0.065] shadow-[0_0_22px_rgba(255,255,255,0.04)]"
                    : "border-white/14 bg-transparent text-white/54 hover:border-[rgba(220,226,235,0.24)] hover:text-white/84"
                }
              `}
            >
              <span
                aria-hidden="true"
                className={`
                  pointer-events-none absolute inset-0 rounded-[999px]
                  bg-white/[0.065]
                  transition-opacity duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${active ? "opacity-100" : "opacity-0"}
                `}
              />
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}