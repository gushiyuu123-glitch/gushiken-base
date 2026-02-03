// src/components/Category.jsx
import React from "react";

export default function Category({
  title,
  subtitle,
  accent = false,
  children,
  itemsRaw = [],
}) {
  const items = React.Children.toArray(children);

  /* ============================================================
        normalize（揺れ完全吸収版）
  ============================================================ */
  const normalize = (str = "") =>
    str
      .replace(/\s+/g, "")       // 全スペース除去
      .replace(/[／・]/g, "/")   // 全角スラッシュ・中点 → 半角 /
      .replace(/-{1,}/g, "")     // "-" のゆれ消去
      .replace(/_/g, "")         // "_" のゆれ消去
      .toLowerCase();

  const key = normalize(title);

  const hasNew = itemsRaw.some((i) => i.isNew === true);

  /* 幅マッピング（normalize後で一致させる） */
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
        aq-fade w-full relative
        ${accent ? "pt-5 pb-12 bg-white/[0.02] rounded-xl" : ""}
      `}
    >
      {/* HEADER */}
      <div className="mb-12 relative">
        <div
          className={`
            h-px mb-6
            ${
              accent
                ? "w-20 bg-gradient-to-r from-amber-300/60 to-amber-200/10"
                : "w-12 bg-gradient-to-r from-white/28 to-white/5"
            }
          `}
        />

        <div className="flex items-center">
          <h2
            className={`
              text-white font-light tracking-[0.22em]
              ${accent ? "text-[1.18rem]" : "text-[1.02rem] md:text-[1.14rem]"}
            `}
          >
            {title}
          </h2>

          {hasNew && (
            <span
              className="
                ml-3 px-2 py-[2px]
                text-[0.65rem] tracking-[0.18em]
                rounded-sm
                text-amber-300 bg-white/5
                border border-amber-300/40
                shadow-[0_0_12px_rgba(255,200,120,0.25)]
                animate-pulse
              "
            >
              NEW
            </span>
          )}
        </div>

        <p
          className={`
            mt-2 leading-relaxed tracking-[0.14em]
            ${
              accent
                ? "text-white/60 text-[0.86rem]"
                : "text-white/38 text-[0.78rem]"
            }
          `}
        >
          {subtitle}
        </p>
      </div>

      {/* SP（横スクロール） */}
      <div className="sm:hidden w-full relative mb-20 pt-4">
        <div className="relative px-1">
          <div
            className="
              works-rail flex gap-5 px-4 py-4
              overflow-x-auto overflow-y-hidden no-scrollbar
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
                  ${index === 0 ? "snap-start is-first" : "snap-center"}
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
        <div className="hidden sm:grid grid-cols-2 gap-x-12 gap-y-16">
          {items}
        </div>
      ) : (
        <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
          {items}
        </div>
      )}
    </section>
  );
}
