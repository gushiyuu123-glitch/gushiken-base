// src/pages/WorksList.jsx
import React, { useEffect, useRef, useState } from "react";
import Category from "../components/Category";
import WorkItem from "../components/WorkItem";
import CategoryTabs from "../components/CategoryTabs";
import { worksData } from "../data/worksData";

export default function WorksList() {
  const rootRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  /* ---------------------------------------------
     NEW 自動判定（30日以内）
  --------------------------------------------- */
  const isNewItem = (item) => {
    if (!item.createdAt) return false;
    const now = Date.now();
    const created = new Date(item.createdAt).getTime();
    const diffDays = (now - created) / (1000 * 3600 * 24);
    return diffDays <= 30;
  };

  const enrichedData = worksData.map((block) => ({
    ...block,
    items: block.items.map((item) => ({
      ...item,
      isNew: item.isNew || isNewItem(item),
    })),
  }));

  const categoryList = ["ALL", "NEW", ...enrichedData.map((b) => b.category)];

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

  /* ---------------------------------------------
     PC fade
  --------------------------------------------- */
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

  /* ---------------------------------------------
     SP slide-in
  --------------------------------------------- */
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
      "
    >
      {/* ======================================================
          SEO STRUCTURED DATA（完全版）
      ====================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                /* -----------------------------------------
                   ① WebPage（/works ページの本体）
                ----------------------------------------- */
                {
                  "@type": "WebPage",
                  "@id": "https://gushikendesign.com/works#webpage",
                  "url": "https://gushikendesign.com/works",
                  "name": "Works — GUSHIKEN DESIGN",
                  "description":
                    "EC・美容・建築・ホテル・アート作品をまとめたポートフォリオ一覧。世界観 × 余白 × 静寂で設計された作品群。",
                  "isPartOf": {
                    "@id": "https://gushikendesign.com/#website"
                  }
                },

                /* -----------------------------------------
                   ② WebSite（ブランドの公式枠）
                ----------------------------------------- */
                {
                  "@type": "WebSite",
                  "@id": "https://gushikendesign.com/#website",
                  "url": "https://gushikendesign.com/",
                  "name": "GUSHIKEN DESIGN",
                  "description":
                    "世界観 × 余白 × 静寂を核に、EC・美容・建築・ホテル・アート領域を制作するデザインスタジオ。",
                  "publisher": {
                    "@id": "https://gushikendesign.com/#organization"
                  }
                },

                /* -----------------------------------------
                   ③ Organization（ブランド本体）
                ----------------------------------------- */
                {
                  "@type": "Organization",
                  "@id": "https://gushikendesign.com/#organization",
                  "name": "GUSHIKEN DESIGN",
                  "url": "https://gushikendesign.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://gushikendesign.com/ogp/logo.png"
                  }
                },

                /* -----------------------------------------
                   ④ ItemList（作品一覧としてのSEO）
                ----------------------------------------- */
                {
                  "@type": "ItemList",
                  "name": "GUSHIKEN DESIGN — Works Portfolio",
                  "itemListOrder": "Descending",
                  "numberOfItems": worksData.reduce(
                    (sum, block) => sum + block.items.length,
                    0
                  ),
                  "itemListElement": worksData.flatMap((block) =>
                    block.items.map((item, index) => ({
                      "@type": "ListItem",
                      "position": index + 1,
                      "url": `https://gushikendesign.com/works/${item.slug}`,
                      "name": item.title,
                      "image": `https://gushikendesign.com${item.img.replace(
                        "/works",
                        "/ogp"
                      )}`
                    }))
                  )
                }
              ]
            }
          )
        }}
      />

      {/* ---------------------------------------------
          ambient glow
      --------------------------------------------- */}
      <div
        className="ambient-glow"
        style={{
          height: "1px",
          pointerEvents: "none",
          position: "relative",
        }}
      ></div>

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
            ブランドや店舗の魅力が、まっすぐ伝わるように作った作品をまとめています。
            <br /><br />
            世界観だけでなく、使いやすさや
            <br />“伝わり方”まで丁寧にデザインしました。
          </p>
        </div>

        <div className="w-16 h-px bg-white/12 mb-16 aq-fade" />

        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={handleChangeCategory}
          categoryList={categoryList}
        />

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
                itemsRaw={block.items}
              >
                {block.items.map((item) => (
                  <WorkItem
                    key={item.title}
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

      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(22px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
