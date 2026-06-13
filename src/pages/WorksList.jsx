// src/pages/WorksList.jsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Category from "../components/Category";
import WorkItem from "../components/WorkItem";
import CategoryTabs from "../components/CategoryTabs";
import FloatingShareButton from "../components/FloatingShareButton";
import WorksBlackLightField from "../visuals/WorksBlackLightField";

import { worksData } from "../data/worksData";

const INITIAL_VISIBLE_COUNT = 6;

const ARCHIVE_OVERLAY_STYLE = {
  background: `
    radial-gradient(780px 540px at 50% -4%, rgba(244,239,230,0.035), transparent 72%),
    radial-gradient(620px 460px at 50% 14%, rgba(142,182,255,0.018), transparent 76%),
    radial-gradient(900px 760px at 50% 68%, rgba(0,0,0,0.025), rgba(0,0,0,0.36) 62%, rgba(0,0,0,0.72)),
    linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.24) 42%, rgba(0,0,0,0.72))
  `,
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
}

function normalize(str = "") {
  return String(str).replace(/\s+/g, "").replace(/／/g, "/").toLowerCase();
}

function scrollToY(y) {
  const lenis = typeof window !== "undefined" ? window.__gd_lenis__ : null;
  const immediate = prefersReducedMotion();

  if (lenis && typeof lenis.scrollTo === "function") {
    try {
      lenis.scrollTo(y, {
        immediate,
        duration: immediate ? 0 : 0.78,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
      return;
    } catch (_) {
      // fallback
    }
  }

  window.scrollTo({
    top: y,
    behavior: immediate ? "auto" : "smooth",
  });
}

function makeExpandKey(activeCategory, blockCategory, blockIndex) {
  return `${normalize(activeCategory)}:${normalize(blockCategory)}:${blockIndex}`;
}

export default function WorksList() {
  const rootRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [expandedMap, setExpandedMap] = useState({});

  const isNewItem = useCallback((item) => {
    if (!item?.createdAt) return false;

    const created = new Date(item.createdAt).getTime();
    if (Number.isNaN(created)) return false;

    return (Date.now() - created) / 86_400_000 <= 30;
  }, []);

  const enrichedData = useMemo(() => {
    return worksData.map((block) => ({
      ...block,
      items: Array.isArray(block.items)
        ? block.items.map((item) => ({
            ...item,
            isNew: Boolean(item.isNew || isNewItem(item)),
          }))
        : [],
    }));
  }, [isNewItem]);

  const categoryList = useMemo(() => {
    return ["ALL", "NEW", ...enrichedData.map((block) => block.category)];
  }, [enrichedData]);

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

  const hasWorks = filteredData.some((block) => block.items.length > 0);

  // カテゴリ切替時は展開状態をリセット
  useEffect(() => {
    setExpandedMap({});
  }, [activeCategory]);

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
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChangeCategory = useCallback((cat) => {
    setActiveCategory(cat);

    requestAnimationFrame(() => {
      const root = rootRef.current;
      if (!root) return;

      const top = root.getBoundingClientRect().top + window.scrollY - 40;
      scrollToY(top);
    });
  }, []);

  const toggleExpand = useCallback((key) => {
    setExpandedMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-x-hidden bg-[#000000] px-6 py-24 pb-32 text-white md:px-10 lg:px-16">
      {/* ================= WEBGL BLACK LIGHT ================= */}
      <WorksBlackLightField className="pointer-events-none fixed inset-0 z-0 opacity-100" />

      {/* ================= BLACK VEIL ================= */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={ARCHIVE_OVERLAY_STYLE}
        aria-hidden="true"
      />

      {/* ================= SUBTLE GRAIN ================= */}
      <div
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.012]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 0.35px, transparent 0.35px)",
          backgroundSize: "4px 4px",
          mixBlendMode: "screen",
        }}
      />

      {/* ================= SIDE DEPTH ================= */}
      <div
        className="pointer-events-none fixed inset-0 z-[3]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.36), transparent 24%, transparent 76%, rgba(0,0,0,0.36))",
        }}
      />

      <div
        ref={rootRef}
        className="relative z-10 mx-auto max-w-6xl lg:max-w-7xl"
      >
        {/* ================= TOP ================= */}
        <div data-reveal="static" className="aq-fade delay-1 mb-24 md:mb-28">
          <div className="mb-6 h-px w-12 bg-gradient-to-r from-white/20 to-white/5" />

          <p className="mb-3 text-[0.74rem] tracking-[0.30em] text-white/32">
            SELECTED WORKS
          </p>

          <h1 className="text-[2.65rem] font-light leading-[1.14] tracking-[0.22em] text-white md:text-[3.3rem]">
            WORKS
          </h1>

          <p className="mt-8 max-w-[660px] text-[0.95rem] leading-[1.95] tracking-[0.035em] text-white/52">
            制作したWebサイトを、ここにまとめています。
            <br className="hidden sm:block" />
            見た目だけで終わらせず、伝わるところまで作り込んだもの。
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
          {hasWorks ? (
            filteredData.map((block, blockIndex) => {
              const allItems = Array.isArray(block.items) ? block.items : [];

              const expandKey = makeExpandKey(
                activeCategory,
                block.category,
                blockIndex
              );

              const isExpanded = Boolean(expandedMap[expandKey]);

              const visibleItems = isExpanded
                ? allItems
                : allItems.slice(0, INITIAL_VISIBLE_COUNT);

              const totalCount = allItems.length;
              const visibleCount = visibleItems.length;
              const hiddenCount = Math.max(0, totalCount - visibleCount);
              const canToggle = totalCount > INITIAL_VISIBLE_COUNT;

              const hideNewBadgeForItems =
                block.category === "HOTEL" ||
                block.category === "FOOD / FURNITURE / BRAND";

              const showCategoryNewBadge = !hideNewBadgeForItems;

              return (
                <div
                  key={`${activeCategory}-${block.category}-${blockIndex}`}
                  className="relative"
                >
                  {allItems.some((item) => item.isOrigin) && (
                    <div className="mb-20 text-center md:mb-24">
                      <p className="text-[0.7rem] tracking-[0.42em] text-white/40">
                        — ORIGINALITY —
                      </p>
                    </div>
                  )}

                  <Category
                    title={block.category}
                    subtitle={block.subtitle}
                    itemsRaw={allItems}
                    showNewBadge={showCategoryNewBadge}
                    index={blockIndex}
                  >
                    {visibleItems.map((item, itemIndex) => (
                      <WorkItem
                        key={`${
                          activeCategory
                        }:${item.slug || `${block.category}-${itemIndex}`}`}
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

                  {canToggle && (
                    <div className="mt-10 flex justify-center md:mt-12">
                      <button
                        type="button"
                        onClick={() => toggleExpand(expandKey)}
                        aria-expanded={isExpanded}
                        className="
                          group relative inline-flex items-center gap-4
                          border border-white/10
                          bg-black/28
                          px-5 py-3
                          text-[0.72rem] tracking-[0.22em]
                          text-white/52
                          backdrop-blur-[2px]
                          transition
                          duration-500
                          ease-[cubic-bezier(0.22,0.56,0.18,1)]
                          hover:border-[rgba(201,177,138,0.28)]
                          hover:bg-white/[0.035]
                          hover:text-white/82
                          focus-visible:outline-none
                          focus-visible:ring-1
                          focus-visible:ring-[rgba(201,177,138,0.42)]
                          focus-visible:ring-offset-2
                          focus-visible:ring-offset-black
                        "
                      >
                        <span
                          className="
                            block h-px w-8 bg-white/18
                            transition-all duration-500
                            group-hover:w-12
                            group-hover:bg-[rgba(201,177,138,0.42)]
                          "
                          aria-hidden="true"
                        />

                        <span>
                          {isExpanded
                            ? "CLOSE"
                            : `MORE ${String(hiddenCount).padStart(2, "0")}`}
                        </span>

                        <span
                          className={[
                            "inline-block transition-transform duration-500",
                            isExpanded ? "rotate-180" : "rotate-0",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-28 text-center">
              <p className="text-[0.72rem] tracking-[0.32em] text-white/32">
                NO WORKS
              </p>

              <p className="mt-5 text-[0.92rem] leading-[1.9] text-white/44">
                このカテゴリの制作事例は、まだありません。
              </p>
            </div>
          )}
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