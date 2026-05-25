import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Category from "../components/Category";
import WorkItem from "../components/WorkItem";
import CategoryTabs from "../components/CategoryTabs";
import FloatingShareButton from "../components/FloatingShareButton";
import { worksData } from "../data/worksData";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
}

function scrollToY(y) {
  // ✅ Lenis 優先（PCのみ有効な想定）
  const lenis = typeof window !== "undefined" ? window.__gd_lenis__ : null;

  // reduced-motion は即時
  const immediate = prefersReducedMotion();

  if (lenis && typeof lenis.scrollTo === "function") {
    try {
      lenis.scrollTo(y, {
        immediate,
        // “ぬるぬる”じゃなく、君のサイトの“像が整う”寄り
        duration: immediate ? 0 : 0.78,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
      return;
    } catch (_) {
      // fallthrough
    }
  }

  window.scrollTo({ top: y, behavior: immediate ? "auto" : "smooth" });
}

export default function WorksList() {
  const rootRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const normalize = (str = "") =>
    String(str).replace(/\s+/g, "").replace(/／/g, "/").toLowerCase();

  const isNewItem = useCallback((item) => {
    if (!item?.createdAt) return false;

    const created = new Date(item.createdAt).getTime();
    if (Number.isNaN(created)) return false;

    return (Date.now() - created) / 86_400_000 <= 30;
  }, []);

  const enrichedData = useMemo(
    () =>
      worksData.map((block) => ({
        ...block,
        items: Array.isArray(block.items)
          ? block.items.map((item) => ({
              ...item,
              isNew: Boolean(item.isNew || isNewItem(item)),
            }))
          : [],
      })),
    [isNewItem]
  );

  const categoryList = useMemo(
    () => ["ALL", "NEW", ...enrichedData.map((block) => block.category)],
    [enrichedData]
  );

  const filteredData = useMemo(() => {
    if (activeCategory === "ALL") return enrichedData;

    if (activeCategory === "NEW") {
      return [
        {
          category: "NEW",
          subtitle: "最新作 — Newly Published Works",
          items: enrichedData.flatMap((block) =>
            block.items.filter((item) => item.isNew)
          ),
        },
      ];
    }

    return enrichedData.filter(
      (block) => normalize(block.category) === normalize(activeCategory)
    );
  }, [activeCategory, enrichedData]);

  // TOP / TABS など、初回だけ出す静的フェード（現状維持）
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll('[data-reveal="static"]'));
    if (!targets.length) return undefined;

    const reduce = prefersReducedMotion();

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("aq-show"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("aq-show");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChangeCategory = useCallback((cat) => {
    setActiveCategory(cat);

    // ✅ 1フレーム後に “その時点のtop” へ移動（Lenis対応）
    requestAnimationFrame(() => {
      const root = rootRef.current;
      if (!root) return;

      const top = root.getBoundingClientRect().top + window.scrollY - 40;
      scrollToY(top);
    });
  }, []);

  return (
   <section className="min-h-screen overflow-x-hidden bg-[#070604] text-white px-6 py-24 pb-32 md:px-10 lg:px-16">
      <div className="ambient-glow" style={{ height: "1px" }} />

      <div ref={rootRef} className="mx-auto max-w-6xl lg:max-w-7xl">
        {/* ================= TOP ================= */}
        <div data-reveal="static" className="aq-fade delay-1 mb-24 md:mb-28">
          <div className="mb-6 h-px w-12 bg-gradient-to-r from-white/20 to-white/5" />

          <p className="mb-3 text-[0.74rem] tracking-[0.30em] text-white/30">
            SELECTED WORKS
          </p>

          <h1 className="text-[2.65rem] font-light leading-[1.14] tracking-[0.22em] text-white md:text-[3.3rem]">
            WORKS
          </h1>

          {/* ✅ クライアント目線に寄せた説明（“世界観/構造/技術”の内輪語を薄める） */}
          <p className="mt-8 max-w-[620px] text-[0.95rem] leading-[1.95] tracking-[0.03em] text-white/48">
            まず「印象」が伝わり、
            <br className="hidden sm:block" />
            次に「迷わない順番」で理解できる。そんな設計の実例です。
          </p>
        </div>

        <div
          data-reveal="static"
          className="aq-fade delay-2 mb-16 h-px w-16 bg-white/12"
        />

        {/* ================= TABS ================= */}
        <div data-reveal="static" className="aq-fade delay-2 overflow-x-hidden">
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={handleChangeCategory}
            categoryList={categoryList}
          />
        </div>

        {/* ================= BLOCKS ================= */}
        <div className="space-y-36 md:space-y-40">
          {filteredData.map((block, blockIndex) => {
            const hideNewBadgeForItems =
              block.category === "HOTEL" ||
              block.category === "FOOD / FURNITURE / BRAND";

            const showCategoryNewBadge = !hideNewBadgeForItems;

            return (
              <div key={`${activeCategory}-${block.category}-${blockIndex}`}>
                {block.items.some((item) => item.isOrigin) && (
                  <div className="mb-20 text-center md:mb-24">
                    <p className="text-[0.7rem] tracking-[0.42em] text-white/40">
                      — ORIGINALITY —
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
                      // ✅ ここが肝：カテゴリ切替で確実に再マウント→再フェードが安定
                      key={`${activeCategory}:${item.slug || `${block.category}-${itemIndex}`}`}
                      title={item.title}
                      desc={item.desc}
                      link={`/works/${item.slug}`}
                      img={item.img}
                      tags={item.tags}
                      createdAt={!item.isOrigin ? item.createdAt : null}
                      revealIndex={itemIndex}
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

      <FloatingShareButton
        label="SHARE"
        showAfter={260}
        title="WORKS"
        shareText="GUSHIKEN DESIGN — WORKS"
      />
    </section>
  );
}