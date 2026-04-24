import React from "react";

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
  categoryList,
}) {
  const normalize = (str = "") =>
    str
      .replace(/\s+/g, "")
      .replace(/[／・]/g, "/")
      .replace(/-{1,}/g, "")
      .replace(/_/g, "")
      .toLowerCase();

  const isActive = (cat) => normalize(activeCategory) === normalize(cat);

  return (
    <div className="mb-16">
      {/* ================================
          SP
      ================================ */}
      <div
        className="
          no-scrollbar flex gap-2.5 overflow-x-auto
          px-3 py-2 md:hidden
          [scroll-snap-type:x_mandatory]
          [overscroll-behavior-x:contain]
        "
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x",
        }}
        aria-label="作品カテゴリ"
      >
        {categoryList.map((cat) => {
          const active = isActive(cat);

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={active}
              className={`
                relative shrink-0 whitespace-nowrap overflow-hidden
                rounded-full border px-4 py-[0.48rem]
                text-[0.64rem] tracking-[0.18em]
                transition-[color,border-color,background-color,box-shadow,transform]
                duration-[360ms]
                ease-[cubic-bezier(0.22,0.56,0.18,1)]
                [scroll-snap-align:start]
                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-[rgba(201,177,138,0.42)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#070707]
                ${
                  active
                    ? `
                      border-[rgba(201,177,138,0.34)]
                      bg-[rgba(201,177,138,0.065)]
                      text-[rgba(238,226,204,0.94)]
                      shadow-[0_0_18px_rgba(201,177,138,0.045)]
                    `
                    : `
                      border-white/[0.12]
                      bg-transparent
                      text-white/50
                      hover:border-[rgba(201,177,138,0.26)]
                      hover:text-white/82
                    `
                }
              `}
            >
              <span
                aria-hidden="true"
                className={`
                  pointer-events-none absolute inset-0 rounded-full
                  transition-opacity duration-[360ms]
                  ease-[cubic-bezier(0.22,0.56,0.18,1)]
                  ${active ? "opacity-100" : "opacity-0"}
                `}
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(201,177,138,0.10), transparent 58%)",
                }}
              />

              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* ================================
          PC
      ================================ */}
      <div
        className="
          hidden flex-wrap justify-center gap-3
          px-2 pb-3 pt-2 md:flex
        "
        aria-label="作品カテゴリ"
      >
        {categoryList.map((cat) => {
          const active = isActive(cat);

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={active}
              className={`
                relative whitespace-nowrap overflow-hidden
                rounded-full border px-6 py-[0.56rem]
                text-[0.74rem] tracking-[0.22em]
                transition-[color,border-color,background-color,box-shadow,transform]
                duration-[380ms]
                ease-[cubic-bezier(0.22,0.56,0.18,1)]
                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-[rgba(201,177,138,0.42)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#070707]
                ${
                  active
                    ? `
                      border-[rgba(201,177,138,0.36)]
                      bg-[rgba(201,177,138,0.065)]
                      text-[rgba(238,226,204,0.95)]
                      shadow-[0_0_22px_rgba(201,177,138,0.05)]
                    `
                    : `
                      border-white/[0.13]
                      bg-transparent
                      text-white/52
                      hover:-translate-y-[1px]
                      hover:border-[rgba(201,177,138,0.26)]
                      hover:text-white/84
                    `
                }
              `}
            >
              <span
                aria-hidden="true"
                className={`
                  pointer-events-none absolute inset-0 rounded-full
                  transition-opacity duration-[380ms]
                  ease-[cubic-bezier(0.22,0.56,0.18,1)]
                  ${active ? "opacity-100" : "opacity-0"}
                `}
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(201,177,138,0.10), transparent 58%)",
                }}
              />

              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}