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
              items: enrichedData.flatMap((b) => b.items.filter((i) => i.isNew)),
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
      el.style.transform = "translateY(18px)";
      el.style.filter = "blur(4px)";
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
    <section className="min-h-screen overflow-x-hidden bg-[#070604] px-6 py-24 md:px-10 lg:px-16">
      <div className="ambient-glow" style={{ height: "1px" }} />

      <div ref={rootRef} className="mx-auto max-w-6xl lg:max-w-7xl">
        {/* ================= TOP ================= */}
        <div className="aq-fade mb-24 md:mb-28">
          <div className="mb-6 h-px w-12 bg-gradient-to-r from-white/20 to-white/5" />

          <p className="mb-3 text-[0.74rem] tracking-[0.30em] text-white/30">
            SELECTED WORKS
          </p>

          <h1 className="text-[2.65rem] font-light leading-[1.14] tracking-[0.22em] text-white md:text-[3.3rem]">
            WORKS
          </h1>

          <p className="mt-8 max-w-[580px] text-[0.95rem] leading-[1.95] tracking-[0.03em] text-white/48">
            世界観・構造・技術の三つを軸に、
            <br className="hidden sm:block" />
            それぞれに核のある作品だけを掲載しています。
          </p>
        </div>

        <div className="aq-fade mb-16 h-px w-16 bg-white/12" />

        {/* ================= TABS ================= */}
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={handleChangeCategory}
          categoryList={categoryList}
        />

        {/* ================= BLOCKS ================= */}
        <div className="space-y-36 md:space-y-40">
          {filteredData.map((block, blockIndex) => {
            const hideNewBadgeForItems =
              block.category === "HOTEL" ||
              block.category === "FOOD / FURNITURE / BRAND";

            const showCategoryNewBadge =
              block.category !== "HOTEL" &&
              block.category !== "FOOD / FURNITURE / BRAND";

            return (
              <div key={`${block.category}-${blockIndex}`} className="aq-fade">
                {/* ORIGIN 特別表示（ART のみ） */}
                {block.items.some((i) => i.isOrigin) && (
                  <div className="mb-20 text-center md:mb-24">
                    <p className="mb-5 text-[0.7rem] tracking-[0.42em] text-white/40">
                      — ORIGIN —
                    </p>

                    <p className="mx-auto max-w-[620px] text-[0.92rem] leading-[1.95] text-white/52">
                      偉人たちの視点や本質を、
                      Webという形で静かに再構築したシリーズです。
                      <br />
                      ORIGIN は、その思考を
                      “デザインの起点” として整理した場所でもあります。
                    </p>
                  </div>
                )}

                <Category
                  title={block.category}
                  subtitle={block.subtitle}
                  itemsRaw={block.items}
                  showNewBadge={showCategoryNewBadge}
                >
                  {block.items.map((item, itemIndex) => (
                    <WorkItem
                      key={`${block.category}-${blockIndex}-${itemIndex}`}
                      title={item.title}
                      desc={item.desc}
                      link={`/works/${item.slug}`}
                      img={item.img}
                      tags={item.tags}
                      isNew={!hideNewBadgeForItems && item.isNew}
                      createdAt={!item.isOrigin ? item.createdAt : null}
                      isOrigin={item.isOrigin}
                    />
                  ))}
                </Category>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= FOOT LINKS ================= */}
      <div className="mt-28 text-center md:mt-32">
        <a
          href="https://note.com/noahgushi123"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-b border-white/14 pb-[4px] text-[0.84rem] tracking-[0.12em] text-white/42 transition hover:text-white/76"
        >
          note — 制作の裏側
        </a>
      </div>
    </section>
  );
}