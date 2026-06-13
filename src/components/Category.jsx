// src/components/Category.jsx
import React, { useMemo } from "react";

const normalize = (str = "") =>
  String(str)
    .replace(/\s+/g, "")
    .replace(/[／・]/g, "/")
    .replace(/-{1,}/g, "")
    .replace(/_/g, "")
    .toLowerCase();

const WIDTH_MAP = {
  [normalize("PICK UP")]: "88%",
  [normalize("BEAUTY / SALON")]: "94%",
  [normalize("HOTEL")]: "90%",
  [normalize("FOOD / FURNITURE / BRAND")]: "88%",
  [normalize("EC / BRAND DESIGN")]: "84%",
  [normalize("ART / CREATIVE")]: "96%",
};

function getCategoryNo(index = 0) {
  return String(index + 1).padStart(2, "0");
}

export default function Category({
  title,
  subtitle,
  accent = false,
  children,
  itemsRaw = [],
  showNewBadge = true,
  index = 0,
}) {
  const items = React.Children.toArray(children);

  const key = useMemo(() => normalize(title), [title]);
  const headingId = useMemo(() => `cat-${key}`, [key]);

  const hasNew = useMemo(
    () => itemsRaw.some((item) => item?.isNew === true),
    [itemsRaw]
  );

  const itemCount = items.length;
  const cardWidth = WIDTH_MAP[key] || "88%";

  return (
    <section
      aria-labelledby={headingId}
      data-category={key}
      className={[
        "relative w-full",
        "before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-px before:w-full",
        "before:bg-gradient-to-r before:from-white/10 before:via-white/[0.025] before:to-transparent",
        accent
          ? "border-y border-white/[0.065] bg-white/[0.012] px-0 py-8 md:py-10"
          : "",
      ].join(" ")}
    >
      {/* ================= HEADER ================= */}
      <header className="relative mb-12 md:mb-14">
        <div className="mb-5 flex items-end justify-between gap-6">
          <div
            className={[
              "h-px",
              accent
                ? "w-24 bg-gradient-to-r from-[rgba(201,177,138,0.62)] via-white/12 to-transparent"
                : "w-14 bg-gradient-to-r from-white/24 via-white/8 to-transparent",
            ].join(" ")}
            aria-hidden="true"
          />

          <div className="hidden items-center gap-3 text-[0.62rem] tracking-[0.24em] text-white/28 sm:flex">
            <span>{getCategoryNo(index)}</span>
            <span className="h-px w-8 bg-white/10" aria-hidden="true" />
            <span>{itemCount} WORKS</span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <h2
                id={headingId}
                className={[
                  "font-light text-white",
                  accent
                    ? "text-[1.14rem] tracking-[0.24em]"
                    : "text-[1.02rem] tracking-[0.22em] md:text-[1.12rem]",
                ].join(" ")}
              >
                {title}
              </h2>

              {showNewBadge && hasNew && (
                <span
                  className="
                    inline-flex items-center justify-center
                    border border-[rgba(201,177,138,0.28)]
                    bg-[rgba(201,177,138,0.045)]
                    px-2 py-[2px]
                    text-[0.60rem] tracking-[0.18em]
                    text-[rgba(238,226,204,0.86)]
                  "
                  aria-label="新規作品あり"
                >
                  NEW
                </span>
              )}
            </div>

            {!!subtitle && (
              <p
                className={[
                  "max-w-[620px] leading-relaxed tracking-[0.13em]",
                  accent
                    ? "text-[0.84rem] text-white/56"
                    : "text-[0.78rem] text-white/40",
                ].join(" ")}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="shrink-0 pt-1 text-right sm:hidden">
            <p className="text-[0.62rem] tracking-[0.22em] text-white/28">
              {itemCount} WORKS
            </p>
          </div>
        </div>
      </header>

      {/* ================= SP RAIL ================= */}
      <div className="relative mb-20 w-full pt-2 sm:hidden">
        <div className="relative">
          <div
            className="
              pointer-events-none absolute left-0 top-0 z-20 h-full w-10
              bg-gradient-to-r from-[#070604] via-[#070604]/55 to-transparent
            "
            aria-hidden="true"
          />

          <div
            className="
              pointer-events-none absolute right-0 top-0 z-20 h-full w-10
              bg-gradient-to-l from-[#070604] via-[#070604]/55 to-transparent
            "
            aria-hidden="true"
          />

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
              [scroll-padding-left:16px]
              [scroll-padding-right:16px]
            "
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x",
            }}
            aria-label={`${title} の作品一覧`}
          >
            {items.map((child, itemIndex) => (
              <div
                key={itemIndex}
                className={[
                  "works-card flex-none",
                  itemIndex === 0 ? "snap-start" : "snap-center",
                ].join(" ")}
                style={{ width: cardWidth }}
              >
                {child}
              </div>
            ))}
          </div>

          <div
            className="mx-4 mt-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ================= PC GRID ================= */}
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