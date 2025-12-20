// src/components/Category.jsx
import React, { useRef, useEffect } from "react";

export default function Category({ title, subtitle, children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;

    // iOS Safari 専用：縦スクと横スクの衝突回避
    const onTouchStart = (e) => {
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
    };

    const onTouchMove = (e) => {
      const t = e.touches[0];
      const dx = Math.abs(t.clientX - startX);
      const dy = Math.abs(t.clientY - startY);

      // ★ dx > dy → 横スクしたい
      if (dx > dy) {
        // 横スクを許可（縦スクは止める）
        e.stopPropagation();
      } else {
        // 縦スク動作 → 横スクエリアが邪魔しない
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <section className="aq-fade w-full relative">

      {/* Title */}
      <div className="mb-12 relative">
        <div className="w-12 h-px bg-gradient-to-r from-white/30 to-white/5 mb-6" />
        <h2
          className="
            text-white 
            text-[1.02rem] md:text-[1.15rem]
            font-light tracking-[0.22em]
            mb-[0.35rem]
          "
        >
          {title}
        </h2>
        <p className="text-white/38 text-[0.78rem] tracking-[0.14em] leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* SP 横スク */}
      <div className="sm:hidden w-full relative mb-16">

        <div className="pointer-events-none absolute top-0 left-0 h-full w-[28px] bg-gradient-to-r from-black/10 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[28px] bg-gradient-to-l from-black/10 to-transparent z-10" />

        <div
          ref={scrollRef}
          className="
            flex gap-6 
            overflow-x-auto 
            scroll-x-snap
            no-scrollbar
            pr-4
            md:will-change-transform md:transform-gpu
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {React.Children.map(children, (child, i) => (
            <div className="snap-start min-w-[82%]">{child}</div>
          ))}
        </div>
      </div>

      {/* PC grid */}
      <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 auto-rows-[1fr]">
        {children}
      </div>

    </section>
  );
}
