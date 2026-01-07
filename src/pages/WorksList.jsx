// src/pages/WorksList.jsx
import React, { useEffect, useRef, useState } from "react";
import Category from "../components/Category";
import WorkItem from "../components/WorkItem";
import CategoryTabs from "../components/CategoryTabs";
import { worksData } from "../data/worksData";

export default function WorksList() {
  const rootRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("ALL");

  /* -------------------------------------------------------
     New 自動判定（30日以内）
  -------------------------------------------------------- */
  const isNewItem = (item) => {
    if (!item.createdAt) return false;
    const now = Date.now();
    const created = new Date(item.createdAt).getTime();
    const diffDays = (now - created) / (1000 * 3600 * 24);
    return diffDays <= 30;
  };

  // worksData に isNew を付加
  const enrichedData = worksData.map((block) => ({
    ...block,
    items: block.items.map((item) => ({
      ...item,
      isNew: item.isNew || isNewItem(item),  
    })),
  }));

  /* -------------------------------------------------------
     カテゴリーリスト（NEW 追加）
  -------------------------------------------------------- */
  const categoryList = ["ALL", "NEW", ...enrichedData.map((b) => b.category)];

  /* -------------------------------------------------------
     表示データの生成
  -------------------------------------------------------- */
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
      : enrichedData.filter((b) => b.category === activeCategory);

  /* -------------------------------------------------------
     アニメーション
  -------------------------------------------------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".aq-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("aq-show");
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* SP animation */
  useEffect(() => {
    const items = document.querySelectorAll(".sp-slide-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------
     タブ切り替え（スクロールトップ）
  -------------------------------------------------------- */
  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);

    window.scrollTo({
      top: rootRef.current.offsetTop - 40,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        bg-[#070604]
        min-h-screen
        py-24 px-6 md:px-10 lg:px-16
        overflow-x-hidden
        [overscroll-behavior-y:none]
      "
    >
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "GUSHIKEN DESIGN — Works Portfolio",
      "itemListElement": worksData.flatMap(block =>
        block.items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.title,
          "url": `https://gushikendesign.com/works/${item.slug}`
        }))
      )
    })
  }}
/>

      <div className="ambient-glow"></div>

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
  {/* 説明文（AXIS基準・沖縄ワード排除） */}
<p className="mt-7 text-[0.9rem] md:text-[1rem] text-white/45 leading-relaxed max-w-xl tracking-[0.04em] aq-fade delay-2">
  一貫した思想を軸に設計した作品群。
  <br />
  すべては一つの設計原理〈AXIS〉から生まれている。
</p>

{/* ===============================
   AXIS LINK（思想導線・完成形）
   =============================== */}
<a
  href="https://axis-alpha-one.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    inline-flex
    items-center
    gap-3
    mt-7

    text-[0.6rem]
    tracking-[0.44em]
    text-white/45

    transition-colors
    duration-300

    aq-fade
    delay-3

    hover:text-white/75
    active:opacity-70
  "
>
  {/* TEXT */}
  <span className="relative">
    ABOUT AXIS

    {/* UNDERLINE */}
    <span
      aria-hidden
      className="
        absolute
        left-0
        -bottom-1.5
        h-px
        w-full

        bg-white/30

        /* 呼吸（下線のみ） */
        animate-[pulse_4s_ease-in-out_infinite]

        /* PC：hoverで出現 */
        md:scale-x-0
        md:origin-left
        md:transition-transform
        md:duration-500
        md:group-hover:scale-x-100

        /* SP：常時うっすら表示 */
        scale-x-100
        opacity-40
      "
    />
  </span>

  {/* ARROW */}
  <span
    aria-hidden
    className="
      text-[0.6rem]
      opacity-50

      transition-all
      duration-500

      md:group-hover:opacity-80
      md:group-hover:translate-x-1.5
    "
  >
    →
  </span>
</a>

{/* SP ONLY : 補助テキスト */}
<span
  className="
    block
    md:hidden
    mt-2

    text-[0.45rem]
    tracking-[0.28em]
    text-white/30

    cursor-pointer
    transition-all
    duration-200

    active:translate-y-[1px]
    active:opacity-60
  "
>
  Tap to read concept
</span>

        </div>

        <div className="w-16 h-px bg-white/12 mb-16 aq-fade" />

        {/* CATEGORY TABS */}
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={handleChangeCategory}
          categoryList={categoryList}
        />

        {/* LIST */}
        <div className="space-y-32">
          {filteredData.map((block) => (
            <div
              key={block.category}
              className="
                opacity-0 translate-x-[18px]
                animate-[slideIn_0.68s_cubic-bezier(.22,.61,.36,1)_forwards]
              "
            >
            <Category
  title={block.category}
  subtitle={block.subtitle}
  itemsRaw={block.items}   // ← これが絶対必要!!!
>

                {block.items.map((item) => (
              <WorkItem
  key={item.title}
  title={item.title}
  desc={item.desc}
 link={`/works/${item.slug}`}   // ★ここが肝
  img={item.img}
  tags={item.tags}
  isNew={item.isNew}   // ← これ!!
  createdAt={item.createdAt}  // ← 自動30日消滅用に必要
/>
                ))}
              </Category>
            </div>
          ))}
        </div>
      </div>

      {/* animation */}
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(22px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
