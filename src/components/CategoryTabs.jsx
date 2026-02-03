// src/components/CategoryTabs.jsx
import React from "react";

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
  categoryList,
}) {
  /* ============================================================
        normalize（揺れ完全吸収版）
        → Category.jsx と100%同一にして整合性を取る
  ============================================================ */
  const normalize = (str = "") =>
    str
      .replace(/\s+/g, "")       // 全スペース除去
      .replace(/[／・]/g, "/")   // 全角スラッシュ・中点を半角に統一
      .replace(/-{1,}/g, "")     // ハイフン吸収
      .replace(/_/g, "")         // アンダーバー吸収
      .toLowerCase();

  return (
    <div className="aq-fade mb-16">

      {/* ================================ */}
      {/* 📱 SP（横スクローラー） */}
      {/* ================================ */}
      <div
        className="
          flex md:hidden
          overflow-x-auto no-scrollbar
          gap-2.5
          px-3 py-2
          [scroll-snap-type:x_mandatory]
          [overscroll-behavior-x:contain]
        "
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {categoryList.map((cat) => {
          const active = normalize(activeCategory) === normalize(cat);

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                scroll-snap-align-start
                px-4 py-[0.46rem]
                text-[0.65rem]
                tracking-[0.18em]
                rounded-full
                whitespace-nowrap
                border
                transition-all duration-350
                backdrop-blur-[3px]
                ${
                  active
                    ? "bg-white text-black border-white shadow-[0_0_14px_rgba(255,255,255,0.16)]"
                    : "border-white/14 text-white/55 hover:text-white/85 hover:border-white/28"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ================================ */}
      {/* 💻 PC（Boutique Tabs） */}
      {/* ================================ */}
      <div
        className="
          hidden md:flex
          flex-wrap justify-center
          gap-3
          px-2 pt-2 pb-3
        "
      >
        {categoryList.map((cat) => {
          const active = normalize(activeCategory) === normalize(cat);

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-[0.52rem]
                text-[0.75rem]
                tracking-[0.22em]
                rounded-full
                whitespace-nowrap
                border
                transition-all duration-400
                backdrop-blur-[3px]
                ${
                  active
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.22)]"
                    : "border-white/16 text-white/55 hover:text-white/85 hover:border-white/30"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
