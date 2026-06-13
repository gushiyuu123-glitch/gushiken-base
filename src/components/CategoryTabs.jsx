// src/components/CategoryTabs.jsx
import React, { useMemo } from "react";

const normalize = (str = "") =>
  String(str)
    .replace(/\s+/g, "")
    .replace(/[／・]/g, "/")
    .replace(/-{1,}/g, "")
    .replace(/_/g, "")
    .toLowerCase();

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
  categoryList = [],
}) {
  const activeKey = useMemo(() => normalize(activeCategory), [activeCategory]);

  const isActive = (cat) => activeKey === normalize(cat);

  const TabButton = ({ cat, size = "sp" }) => {
    const active = isActive(cat);

    const base =
      size === "sp"
        ? "text-[0.70rem] tracking-[0.22em] pb-3"
        : "text-[0.78rem] tracking-[0.24em] pb-3";

    return (
      <button
        type="button"
        onClick={() => setActiveCategory(cat)}
        aria-pressed={active}
        className={[
          "relative shrink-0 whitespace-nowrap",
          base,
          "transition-[color,opacity] duration-[340ms] ease-[cubic-bezier(0.22,0.56,0.18,1)]",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(201,177,138,0.42)]",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[#070604]",
          active
            ? "text-[rgba(238,226,204,0.96)]"
            : "text-white/42 hover:text-white/82",
          "after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-px after:-translate-x-1/2",
          "after:transition-[width,opacity,background-color] after:duration-[420ms]",
          "after:ease-[cubic-bezier(0.22,0.56,0.18,1)]",
          active
            ? "after:w-[88%] after:opacity-100 after:bg-[rgba(201,177,138,0.48)]"
            : "after:w-[32%] after:opacity-25 after:bg-white/22 hover:after:opacity-60 hover:after:bg-[rgba(201,177,138,0.28)]",
        ].join(" ")}
      >
        <span className="relative z-10">{cat}</span>

        {active && (
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-7 w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(201,177,138,0.09),transparent_68%)]"
            aria-hidden="true"
          />
        )}
      </button>
    );
  };

  return (
    <div className="mb-16 md:mb-20">
      {/* ================= SP ================= */}
      <div className="relative md:hidden" aria-label="作品カテゴリ">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#070604] via-[#070604]/65 to-transparent"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#070604] via-[#070604]/65 to-transparent"
          aria-hidden="true"
        />

        <div
          className="
            no-scrollbar flex gap-6 overflow-x-auto
            border-b border-white/10
            px-4 pt-2
            [scroll-snap-type:x_mandatory]
            [overscroll-behavior-x:contain]
            [scroll-padding-left:16px]
            [scroll-padding-right:16px]
          "
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
        >
          {categoryList.map((cat) => (
            <div key={cat} className="[scroll-snap-align:start]">
              <TabButton cat={cat} size="sp" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= PC ================= */}
      <div className="hidden md:block" aria-label="作品カテゴリ">
        <div className="relative mx-auto max-w-5xl">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="relative flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-white/10 px-2 pt-2">
            {categoryList.map((cat) => (
              <TabButton key={cat} cat={cat} size="pc" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}