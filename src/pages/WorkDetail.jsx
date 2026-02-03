import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { worksData } from "../data/worksData";

export default function WorkDetail() {
  const { slug } = useParams();

  // 対象作品を照合
  const work = useMemo(() => {
    const all = worksData.flatMap((b) => b.items);
    return all.find((i) => i.slug === slug);
  }, [slug]);

  /* ============================================================
       NOT FOUND
  ============================================================ */
  if (!work) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-24">
        <div className="max-w-3xl mx-auto aq-fade aq-show">
          <p className="text-white/60 tracking-[0.18em] text-xs mb-4">
            NOT FOUND
          </p>
          <h1 className="text-2xl tracking-[0.18em] font-light mb-10">
            WORK NOT FOUND
          </h1>
          <Link
            to="/works"
            className="inline-block text-white/70 hover:text-white transition tracking-[0.22em] text-xs"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </main>
    );
  }

  // New 判定（30日ルール or NEW タグ）
  const isNew =
    work.tags?.includes("NEW") ||
    (work.createdAt &&
      (Date.now() - new Date(work.createdAt).getTime()) /
        (1000 * 60 * 60 * 24) <= 30);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

      {/* ============================================================
          HERO（展示室：静かな主張）
      ============================================================ */}
      <section className="relative pt-28 pb-16 px-6 md:px-10 aq-fade">
        <div className="max-w-6xl mx-auto">

          {/* 小ライン（薄膜） */}
          <div className="w-12 h-px bg-gradient-to-r from-white/20 to-white/5 mb-6" />

          {/* ラベル + NEW */}
          <div className="flex items-center gap-3 mb-5">
            <p className="text-[0.65rem] tracking-[0.32em] text-white/35">
              WORK DETAIL
            </p>

            {isNew && (
              <span
                className="
                  px-2 py-[2px]
                  text-[0.62rem] tracking-[0.22em]
                  rounded-sm
                  text-amber-200/90 bg-white/3
                  border border-amber-200/20
                  backdrop-blur-[2px]
                "
              >
                NEW
              </span>
            )}
          </div>

          {/* タイトル */}
          <h1 className="
            text-[2.3rem] md:text-[3.14rem]
            tracking-[0.18em] font-light
            leading-[1.13]
          ">
            {work.title}
          </h1>

          {/* サブ文章 */}
          <p className="mt-6 text-white/50 leading-relaxed whitespace-pre-line max-w-2xl">
            {work.desc}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-7 h-[46px]
                rounded-full
                bg-white/5 hover:bg-white/9
                border border-white/15 hover:border-white/25
                transition
                tracking-[0.18em] text-[12px]
                backdrop-blur-[3px]
              "
            >
              VISIT SITE →
            </a>

            <Link
              to="/works"
              className="
                inline-flex items-center justify-center
                px-7 h-[46px]
                rounded-full
                bg-transparent hover:bg-white/6
                border border-white/10
                transition
                tracking-[0.18em] text-[12px]
                text-white/75 hover:text-white
              "
            >
              BACK →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN VISUAL（複数対応・展示室仕様）
      ============================================================ */}
      <section className="px-6 md:px-10 pb-20 aq-fade">
        <div className="max-w-6xl mx-auto space-y-20">
          {(work.detail.visuals || [work.img]).map((v, i) => (
            <div
              key={i}
              className="
                relative rounded-[18px] overflow-hidden
                border border-white/12 bg-black
              "
            >
              <img
                src={v}
                alt={`${work.title} visual ${i + 1}`}
                className="w-full h-full object-cover brightness-[0.88]"
                loading="lazy"
              />
              {/* Dior 薄膜 */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 68% 8%, rgba(255,245,220,0.08), transparent 62%)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          TAGS（展示風タグ）
      ============================================================ */}
      <section className="px-6 md:px-10 pb-24 aq-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[0.9rem] tracking-[0.22em] font-light text-white/85 mb-6">
            TAGS
          </h2>

          <div className="flex flex-wrap gap-2">
            {(work.tags || []).map((t) => (
              <span
                key={t}
                className="
                  px-3 py-[6px]
                  text-[11px] tracking-[0.14em]
                  bg-white/3
                  border border-white/8
                  rounded-full
                  text-white/60
                  backdrop-blur-[2px]
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER NAV（帰り道のライン）
      ============================================================ */}
      <section className="px-6 md:px-10 pb-28 aq-fade">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-white/12 to-transparent mb-10" />
          <Link
            to="/works"
            className="text-white/70 hover:text-white transition tracking-[0.22em] text-xs"
          >
            ← BACK TO WORKS LIST
          </Link>
        </div>
      </section>
    </main>
  );
}
