import React from "react";

export default function Category({ title, subtitle, children }) {
  const items = React.Children.toArray(children);

  return (
    <section className="aq-fade w-full relative">
      
      {/* ----- Title Block ----- */}
      <div className="mb-10">
        <div className="w-12 h-px bg-gradient-to-r from-white/30 to-white/5 mb-6" />
        <h2 className="text-white text-[1.02rem] md:text-[1.15rem] font-light tracking-[0.22em] mb-[0.35rem]">
          {title}
        </h2>
        <p className="text-white/38 text-[0.78rem] tracking-[0.14em] leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* =======================================================
          🟣 SP：横スワイプ（棚 UI）
      ======================================================= */}
      <div className="sm:hidden w-full mb-14 pt-2">
        <div
          className="
            flex gap-5
            overflow-x-auto
            no-scrollbar
            pl-1 pr-8
            snap-x snap-mandatory
            [touch-action:pan-x_pan-y]
            [overscroll-behavior-x:contain]
            will-change-transform
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((child, i) => (
            <div
              key={i}
              className="
                snap-start 
                min-w-[86%] 
                max-w-[86%]
              "
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* =======================================================
          🟡 PC：従来のグリッド表示
      ======================================================= */}
      <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 auto-rows-[1fr]">
        {items}
      </div>

    </section>
  );
}
