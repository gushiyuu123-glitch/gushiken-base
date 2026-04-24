import React, { useMemo } from "react";

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
  const headingId = useMemo(() => `cat-${key}`, [key]);

  const hasNew = itemsRaw.some((item) => item?.isNew === true);

  // SPカード幅：展示感のため、カテゴリ別の幅差だけ少し残す
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
      aria-labelledby={headingId}
      className={`
        relative w-full
        ${
          accent
            ? `
              border-y border-white/[0.065]
              bg-white/[0.012]
              px-0 py-8 md:px-0 md:py-10
            `
            : ""
        }
      `}
    >
      {/* HEADER */}
      <div className="relative mb-12">
        <div
          className={`
            mb-6 h-px
            ${
              accent
                ? `
                  w-20
                  bg-gradient-to-r
                  from-[rgba(201,177,138,0.58)]
                  via-[rgba(255,255,255,0.12)]
                  to-transparent
                `
                : `
                  w-12
                  bg-gradient-to-r
                  from-[rgba(220,226,235,0.26)]
                  via-[rgba(255,255,255,0.08)]
                  to-transparent
                `
            }
          `}
        />

        <div className="flex items-center gap-3">
          <h2
            id={headingId}
            className={`
              font-light text-white
              ${
                accent
                  ? "text-[1.14rem] tracking-[0.24em]"
                  : "text-[1.02rem] tracking-[0.22em] md:text-[1.12rem]"
              }
            `}
          >
            {title}
          </h2>

          {showNewBadge && hasNew && (
            <span
              className="
                inline-flex items-center justify-center
                border border-[rgba(201,177,138,0.26)]
                bg-[rgba(201,177,138,0.045)]
                px-2 py-[2px]
                text-[0.60rem] tracking-[0.18em]
                text-[rgba(238,226,204,0.80)]
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
              [scrollbar-width:none]
              [-webkit-overflow-scrolling:touch]
              [touch-action:pan-x]
            "
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x",
            }}
            aria-label={`${title} の作品一覧`}
          >
            {items.map((child, index) => (
              <div
                key={index}
                className={`
                  works-card flex-none
                  ${cardWidth}
                  ${index === 0 ? "snap-start" : "snap-center"}
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
        <div
          className="
            hidden grid-cols-2 gap-x-12 gap-y-16 sm:grid
          "
        >
          {items}
        </div>
      ) : (
        <div
          className="
            hidden grid-cols-2 gap-x-12 gap-y-16
            sm:grid xl:grid-cols-3
          "
        >
          {items}
        </div>
      )}
    </section>
  );
}