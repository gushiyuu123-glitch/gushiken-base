import React from "react";

export default function Category({
  title,
  subtitle,
  accent = false,
  children,
  itemsRaw = [],
  showNewBadge = true,
}) {
  const items = React.Children.toArray(children);

  const normalize = (str = "") =>
    str
      .replace(/\s+/g, "")
      .replace(/[／・]/g, "/")
      .replace(/-{1,}/g, "")
      .replace(/_/g, "")
      .toLowerCase();

  const key = normalize(title);
  const hasNew = itemsRaw.some((item) => item.isNew === true);

  const widthMap = {
    [normalize("PICK UP")]: "w-[88%]",
    [normalize("BEAUTY / SALON")]: "w-[94%]",
    [normalize("HOTEL")]: "w-[90%]",
    [normalize("FOOD / FURNITURE / BRAND")]: "w-[88%]",
    [normalize("EC / BRAND DESIGN")]: "w-[82%]",
    [normalize("ART / CREATIVE")]: "w-[96%]",
  };

  const cardWidth = widthMap[key] || "w-[88%]";

  return (
    <section
      className={`
        relative w-full
        ${accent ? "rounded-[12px] bg-white/[0.02] px-5 py-6 md:px-6 md:py-7" : ""}
      `}
    >
      {/* HEADER */}
      <div className="relative mb-12">
        <div
          className={`
            mb-6 h-px
            ${
              accent
                ? "w-20 bg-gradient-to-r from-amber-200/44 to-amber-200/8"
                : "w-12 bg-gradient-to-r from-white/26 to-white/5"
            }
          `}
        />

        <div className="flex items-center gap-3">
          <h2
            className={`
              font-light tracking-[0.22em] text-white
              ${accent ? "text-[1.14rem]" : "text-[1.02rem] md:text-[1.12rem]"}
            `}
          >
            {title}
          </h2>

          {showNewBadge && hasNew && (
            <span
              className="
                inline-flex items-center justify-center
                rounded-sm border border-amber-200/26
                bg-white/4 px-2 py-[2px]
                text-[0.62rem] tracking-[0.18em] text-amber-200/88
              "
            >
              NEW
            </span>
          )}
        </div>

        {!!subtitle && (
          <p
            className={`
              mt-2 leading-relaxed tracking-[0.14em]
              ${
                accent
                  ? "text-[0.84rem] text-white/56"
                  : "text-[0.78rem] text-white/38"
              }
            `}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* SP RAIL */}
      <div className="relative mb-20 w-full pt-4 sm:hidden">
        <div className="relative px-1">
          <div
            className="
              works-rail no-scrollbar flex gap-5
              overflow-x-auto overflow-y-hidden
              px-4 py-4
              snap-x snap-mandatory
              overscroll-x-contain
              [scroll-behavior:smooth]
            "
          >
            {items.map((child, index) => (
              <div
                key={index}
                className={`
                  works-card flex-shrink-0
                  ${cardWidth}
                  ${index === 0 ? "is-first snap-start" : "snap-center"}
                `}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PC GRID */}
      {accent ? (
        <div className="hidden grid-cols-2 gap-x-12 gap-y-16 sm:grid">
          {items}
        </div>
      ) : (
        <div className="hidden grid-cols-2 gap-x-12 gap-y-16 sm:grid xl:grid-cols-3">
          {items}
        </div>
      )}
    </section>
  );
}