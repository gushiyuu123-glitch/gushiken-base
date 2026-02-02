import React from "react";

export default function Category({ title, subtitle, accent = false, children, itemsRaw = [] }) {
  const items = React.Children.toArray(children);

  // NEW 判定（itemsRaw が最も正確）
  const hasNew = itemsRaw.some((i) => i.isNew === true);

  /* ======================================================
     PICK UP は完全に別扱い（黄金レイアウトのため）
  ====================================================== */
  const getCardWidth = (category) => {
    const map = {
      "PICK UP": "w-[88%]",                 // ← ここが特別。大きすぎず、最も上質に見える。
      "BEAUTY / SALON": "w-[94%]",
      "HOTEL / STAY": "w-[90%]",
      "FOOD / FURNITURE / BRAND": "w-[88%]",
      "EC / BRAND DESIGN": "w-[82%]",
      "ART / CREATIVE": "w-[96%]"
    };

    return map[category] || "w-[88%]";
  };

  return (
    <section
      className={`
        aq-fade w-full relative
        ${accent ? "pt-4 pb-10 bg-white/[0.02] rounded-xl" : ""}
      `}
    >

      {/* TITLE */}
      <div className="mb-12 relative">
        {/* PICK UP は強調ライン強め */}
        <div
          className={`
            h-px mb-6
            ${accent
              ? "w-20 bg-gradient-to-r from-amber-300/60 to-amber-200/10"
              : "w-12 bg-gradient-to-r from-white/30 to-white/5"
            }
          `}
        />

        <div className="flex items-center">
          <h2
            className={`
              text-white font-light tracking-[0.22em]
              ${accent ? "text-[1.18rem]" : "text-[1.02rem] md:text-[1.15rem]"}
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
            mt-2 leading-relaxed
            tracking-[0.14em]
            ${accent
              ? "text-white/55 text-[0.86rem]"
              : "text-white/38 text-[0.78rem]"
            }
          `}
        >
          {subtitle}
        </p>
      </div>

      {/* ======================================================
          SP：横スクロール（PICK UP 対応）
      ====================================================== */}
      <div className="sm:hidden w-full relative mb-20 pt-4">
        <div className="relative px-1">
          <div
            className="
              works-rail
              flex overflow-x-auto overflow-y-hidden
              no-scrollbar snap-x snap-mandatory
              gap-5 px-4 py-4
              overscroll-x-contain
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {items.map((child, index) => (
              <div
                key={index}
                className={`
                  works-card flex-shrink-0
                  ${getCardWidth(title)}
                  ${index === 0 ? "snap-start is-first" : "snap-center"}
                `}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================
          PC GRID（PICK UP は 2列 → 余白多め）
      ====================================================== */}
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
