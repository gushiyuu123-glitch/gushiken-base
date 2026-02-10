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
        PC fade-in（カテゴリ切替にも対応）
  ================================ */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".aq-fade");

    // ---- 初期化（カテゴリ切替時に真っ黒バグ防止）----
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
    <section
      className="
        bg-[#070604]
        min-h-screen
        py-24 px-6 md:px-10 lg:px-16
        overflow-x-hidden
      "
    >
      <div
        className="ambient-glow"
        style={{
          height: "1px",
          pointerEvents: "none",
          position: "relative",
          zIndex: -1,
        }}
      />

      <div ref={rootRef} className="max-w-6xl lg:max-w-7xl mx-auto">
        {/* TOP */}
        <div className="aq-fade mb-24 md:mb-28">
          <div className="w-12 h-px bg-gradient-to-r from-white/20 to-white/5 mb-6" />
          <p className="text-[0.65rem] md:text-[0.75rem] tracking-[0.32em] text-white/30 mb-3">
            SELECTED WORKS
          </p>

          <h1 className="text-white text-[2.6rem] md:text-[3.4rem] tracking-[0.28em] font-light leading-[1.2] aq-fade delay-1">
            WORKS —<br className="md:hidden" />
            Portfolio
          </h1>

          <p className="mt-10 text-[0.85rem] md:text-[1rem] text-white/45 leading-relaxed max-w-xl tracking-[0.04em] aq-fade delay-2">
            美容・EC・店舗・ブランドなどを中心に制作した
            世界観 × 高品質 × 伝わりやすさを両立した作品です。
          </p>
        </div>

        <div className="w-16 h-px bg-white/12 mb-16 aq-fade" />

        {/* TABS */}
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={handleChangeCategory}
          categoryList={categoryList}
        />

        {/* CATEGORY BLOCKS */}
        <div className="space-y-32">
          {filteredData.map((block, blockIndex) => (
            <div key={`${block.category}-${blockIndex}`} className="aq-fade">
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
                    createdAt={item.createdAt}
                  />
                ))}
              </Category>
            </div>
          ))}
        </div>
      </div>

      {/* NOTE LINK */}
      <div className="mt-32 text-center">
        <a
          href="https://note.com/noahgushi123"
          target="_blank"
          className="
            inline-block
            text-white/40 hover:text-white/75
            underline underline-offset-[4px]
            tracking-[0.14em]
            text-[0.85rem]
            transition
          "
        >
          note（制作の裏側）
        </a>
      </div>
           <div className="mt-32 text-center">
           <a
          href="https://yorisoi-nine.vercel.app/"
          target="_blank"
          className="
            inline-block
            text-white/40 hover:text-white/75
            underline underline-offset-[4px]
            tracking-[0.14em]
            text-[0.85rem]
            transition
          "
        >
        NEW
        </a>
        </div>
    </section>
  );
}
