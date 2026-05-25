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

  const TabButton = ({ cat, size = "sp" }) => {
    const active = isActive(cat);

    const base =
      size === "sp"
        ? "text-[0.70rem] tracking-[0.22em] pb-3"
        : "text-[0.78rem] tracking-[0.24em] pb-3";

    return (
      <button
        key={cat}
        type="button"
        onClick={() => setActiveCategory(cat)}
        aria-pressed={active}
        className={`
          relative shrink-0 whitespace-nowrap
          ${base}
          transition-[color] duration-[340ms] ease-[cubic-bezier(0.22,0.56,0.18,1)]
          focus-visible:outline-none
          focus-visible:ring-1
          focus-visible:ring-[rgba(201,177,138,0.42)]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#070707]
          ${active ? "text-[rgba(238,226,204,0.95)]" : "text-white/48 hover:text-white/82"}
          after:content-['']
          after:absolute after:left-1/2 after:bottom-0 after:h-px
          after:-translate-x-1/2
          after:transition-[width,opacity,background-color] after:duration-[420ms]
          after:ease-[cubic-bezier(0.22,0.56,0.18,1)]
          ${active
            ? "after:w-[86%] after:opacity-100 after:bg-[rgba(201,177,138,0.44)]"
            : "after:w-[38%] after:opacity-30 after:bg-white/20 hover:after:opacity-60 hover:after:bg-[rgba(201,177,138,0.26)]"}
        `}
      >
        {cat}
      </button>
    );
  };

  return (
    <div className="mb-16">
      {/* ================= SP ================= */}
      <div className="relative md:hidden" aria-label="作品カテゴリ">
        {/* 端フェード（続きがある合図） */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#070707] via-[#070707]/55 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#070707] via-[#070707]/55 to-transparent"
          aria-hidden="true"
        />

        <div
          className="
            no-scrollbar flex gap-6 overflow-x-auto
            px-4 pt-2
            [scroll-snap-type:x_mandatory]
            [overscroll-behavior-x:contain]
            [scroll-padding-left:16px]
            [scroll-padding-right:16px]
            border-b border-white/10
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
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-3 border-b border-white/10 px-2 pt-2">
          {categoryList.map((cat) => (
            <TabButton key={cat} cat={cat} size="pc" />
          ))}
        </div>
      </div>
    </div>
  );
}