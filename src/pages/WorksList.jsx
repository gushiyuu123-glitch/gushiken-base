// src/pages/WorksList.jsx
import React, { useEffect, useRef, useState } from "react";
import Category from "../components/Category";
import WorkItem from "../components/WorkItem";
import CategoryTabs from "../components/CategoryTabs";
import { worksData } from "../data/worksData";

export default function WorksList() {
  const rootRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  /* ================================
        normalize
  ================================ */
  const normalize = (str = "") =>
    str.replace(/\s+/g, "").replace(/／/g, "/").toLowerCase();

  /* ================================
        NEW 判定（30日以内）
  ================================ */
  const isNewItem = (item) => {
    if (!item.createdAt) return false;
    const now = Date.now();
    const created = new Date(item.createdAt).getTime();
    return (now - created) / (1000 * 3600 * 24) <= 30;
  };

  /* ================================
        enrichedData
  ================================ */
  const enrichedData = worksData.map((block) => ({
    ...block,
    items: block.items.map((item) => ({
      ...item,
      isNew: item.isNew || isNewItem(item),
    })),
  }));

  /* ================================
        カテゴリーリスト
  ================================ */
  const categoryList = ["ALL", "NEW", ...enrichedData.map((b) => b.category)];

  /* ================================
        フィルタリング
  ================================ */
  const filteredData =
    activeCategory === "ALL"
      ? enrichedData
      : activeCategory === "NEW"
      ? [
          {
            category: "NEW",
            subtitle: "最新作 — Newly Published Works",
            items: enrichedData.flatMap((b) =>
              b.items.filter((i) => i.isNew)
            ),
          },
        ]
      : enrichedData.filter(
          (b) => normalize(b.category) === normalize(activeCategory)
        );

  /* ================================
        PC fade-in
  ================================ */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".aq-fade");

    items.forEach((el) => {
      el.classList.remove("aq-show");
      el.style.opacity = 0;
      el.style.transform = "translateY(22px)";
      el.style.filter = "blur(6px)";
    });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("aq-show");
        }),
      { threshold: 0.14 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeCategory]);

  /* ================================
        SP slide-in
  ================================ */
  useEffect(() => {
    const items = document.querySelectorAll(".sp-slide-in");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeCategory]);

  /* ================================
        Category click
  ================================ */
  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);

    window.scrollTo({
      top: rootRef.current.offsetTop - 40,
      behavior: "smooth",
    });
  };

  /* ================================
        RENDER
  ================================ */
  return (
    <section className="bg-[#070604] min-h-screen py-24 px-6 md:px-10 lg:px-16 overflow-x-hidden">
      <div className="ambient-glow" style={{ height: "1px" }} />

      <div ref={rootRef} className="max-w-6xl lg:max-w-7xl mx-auto">

        {/* ================= TOP ================= */}
        <div className="aq-fade mb-24 md:mb-28">
          <div className="w-12 h-px bg-gradient-to-r from-white/20 to-white/5 mb-6" />
          <p className="text-[0.75rem] tracking-[0.32em] text-white/30 mb-3">
            SELECTED WORKS
          </p>

          <h1 className="text-white text-[2.8rem] md:text-[3.6rem] tracking-[0.28em] font-light leading-[1.2]">
            WORKS —
          </h1>

          <p className="mt-10 text-[0.95rem] text-white/45 leading-relaxed max-w-xl tracking-[0.04em]">
            世界観 × 構造 × 技術。  
            それぞれの分野で“核”を持つ作品のみを掲載。
          </p>
        </div>

        <div className="w-16 h-px bg-white/12 mb-16 aq-fade" />

        {/* ================= TABS ================= */}
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={handleChangeCategory}
          categoryList={categoryList}
        />

        {/* ================= BLOCKS ================= */}
        <div className="space-y-40">
          {filteredData.map((block, blockIndex) => (
            <div key={`${block.category}-${blockIndex}`} className="aq-fade">

              {/* ORIGIN 特別表示（ART のみ） */}
              {block.items.some((i) => i.isOrigin) && (
                <div className="mb-24 text-center">
                  <p className="text-[0.7rem] tracking-[0.5em] text-white/40 mb-6">
                    — ORIGIN —
                  </p>
                  <p className="text-white/50 text-[0.9rem] max-w-xl mx-auto leading-relaxed">
                    これは“作品”ではない。  
                    すべての世界観が生まれる発生源。
                  </p>
                </div>
              )}

              <Category
                title={block.category}
                subtitle={block.subtitle}
                itemsRaw={block.items}
              >
                {block.items.map((item, itemIndex) => (
                  <WorkItem
                    key={`${block.category}-${blockIndex}-${itemIndex}`}
                    title={item.title}
                    desc={item.desc}
                    link={`/works/${item.slug}`}
                    img={item.img}
                    tags={item.tags}
                    isNew={item.isNew}
                    createdAt={!item.isOrigin ? item.createdAt : null}
                    isOrigin={item.isOrigin} // ←渡す
                  />
                ))}
              </Category>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FOOT LINKS ================= */}
      <div className="mt-32 text-center space-y-8">
        <a
          href="https://note.com/noahgushi123"
          target="_blank"
          className="inline-block text-white/40 hover:text-white/75 underline underline-offset-[4px] tracking-[0.14em] text-[0.85rem] transition"
        >
          note（制作の裏側）
        </a>

        <a
          href="https://yorisoi-nine.vercel.app/"
          target="_blank"
          className="inline-block text-white/40 hover:text-white/75 underline underline-offset-[4px] tracking-[0.14em] text-[0.85rem] transition"
        >
          NEW
        </a>
      </div>
    </section>
  );
}
