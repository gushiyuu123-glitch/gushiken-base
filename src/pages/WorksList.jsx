// src/pages/WorksList.jsx
import React, { useEffect, useRef } from "react";
import Category from "../components/Category";
import WorkItem from "../components/WorkItem";
import { worksData } from "../data/worksData"; // ← JSON から読み込むだけ！

export default function WorksList() {
  const rootRef = useRef(null);

  /* -------------------------------------------------------
     Silent UI v4.2 — aq-fade
  -------------------------------------------------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".aq-fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("aq-show");
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------
     SP slide-in
  -------------------------------------------------------- */
  useEffect(() => {
    const items = document.querySelectorAll(".sp-slide-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#070604] min-h-screen py-24 px-6 md:px-10 lg:px-16">
      <div className="ambient-glow"></div>

      <div ref={rootRef} className="max-w-6xl lg:max-w-7xl mx-auto">

        {/* ===== TOP BLOCK ===== */}
        <div className="aq-fade mb-28">
          <div className="w-12 h-px bg-gradient-to-r from-white/20 to-white/5 mb-6" />

          <p className="text-[0.65rem] md:text-[0.75rem] tracking-[0.32em] text-white/30 mb-3">
            SELECTED WORKS
          </p>

          <h1 className="text-white text-[2.6rem] md:text-[3.4rem] tracking-[0.28em] font-light leading-[1.2] aq-fade delay-1">
            WORKS —<br className="md:hidden" />
            Portfolio
          </h1>

          <p className="mt-7 text-[0.9rem] md:text-[1rem] text-white/45 leading-relaxed max-w-xl tracking-[0.04em] aq-fade delay-2">
            沖縄 × 光 × 静寂 を軸にしたセレクション。<br />
            用途ごとに世界観を切り替えながらも、統一された静かなトーンで構築。
          </p>
        </div>

        <div className="w-16 h-px bg-white/12 mb-20 aq-fade" />

        {/* =====================================================
            ★ 完全 JSON ⟶ UI 自動生成ゾーン
        ====================================================== */}
        <div className="space-y-32">
          {worksData.map((block) => (
            <Category
              key={block.category}
              title={block.category}
              subtitle={block.subtitle}
            >
              {block.items.map((item) => (
                <WorkItem
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                  img={item.img}
                />
              ))}
            </Category>
          ))}
        </div>
      </div>
    </section>
  );
}
