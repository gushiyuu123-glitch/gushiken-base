// src/pages/WorkDetail.jsx
import React, { useMemo, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { worksData } from "../data/worksData";
import gsap from "gsap";

export default function WorkDetail() {
  const { slug } = useParams();
  const rootRef = useRef(null);

  const normalizeSlug = (s = "") =>
    s.replace(/\s+/g, "").replace(/[^\w\-]/g, "").toLowerCase();

  const normalizedSlug = normalizeSlug(slug);
  const allWorks = useMemo(() => worksData.flatMap((b) => b.items), []);

  const work = useMemo(() => {
    return allWorks.find(
      (i) => normalizeSlug(i.slug) === normalizedSlug
    );
  }, [normalizedSlug, allWorks]);

  /* ===============================
     フェード（静かな呼吸）
  =============================== */
  useEffect(() => {
    const elements = rootRef.current?.querySelectorAll(".fade-up");
    if (!elements) return;

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  if (!work) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/60 tracking-[0.18em] text-xs mb-4">
            NOT FOUND
          </p>
          <h1 className="text-2xl tracking-[0.18em] font-light mb-10">
            WORK NOT FOUND
          </h1>
          <Link to="/works" className="text-white/70">
            ← BACK TO WORKS
          </Link>
        </div>
      </main>
    );
  }

  const isNew =
    work.tags?.includes("NEW") ||
    (work.createdAt &&
      (Date.now() - new Date(work.createdAt).getTime()) /
        (1000 * 60 * 60 * 24) <= 30);

  return (
    <main
      ref={rootRef}
      className="relative min-h-screen bg-[#080706] text-white overflow-x-hidden"
    >
      {/* 全体光膜 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 20%, rgba(255,255,255,0.03), transparent 70%)",
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-px bg-gradient-to-r from-white/20 to-white/5 mb-6" />

          <div className="flex items-center gap-3 mb-5">
            <p className="text-[0.65rem] tracking-[0.32em] text-white/35">
              WORK DETAIL
            </p>
            {isNew && (
              <span className="px-2 py-[2px] text-[0.62rem] tracking-[0.22em] rounded-sm text-amber-200/90 bg-white/5 border border-amber-200/20">
                NEW
              </span>
            )}
          </div>

          <h1 className="text-[2.4rem] md:text-[3.2rem] tracking-[0.18em] font-light leading-[1.1]">
            {work.title}
          </h1>

          <p className="mt-8 text-white/50 leading-relaxed whitespace-pre-line max-w-2xl">
            {work.desc}
          </p>

<div className="mt-14 flex flex-wrap items-center gap-5">

  {/* BACK */}
  <Link
    to="/works"
    className="
      inline-flex items-center justify-center
      px-8 h-[48px]
      rounded-full
      border border-white/12
      text-white/70
      tracking-[0.22em] text-[11px]
      transition-all duration-500
      hover:bg-white/5
      hover:text-white
      hover:border-white/20
    "
  >
    ← BACK
  </Link>

  {/* VISIT */}
  <a
    href={work.link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-8 h-[48px]
      rounded-full
      bg-white/6
      border border-white/15
      text-white
      tracking-[0.22em] text-[11px]
      backdrop-blur-[3px]
      transition-all duration-500
      hover:bg-white/14
      hover:border-white/30
      hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]
    "
  >
    VISIT SITE →
  </a>

</div>

        </div>
      </section>

      {/* ================= VISUAL ================= */}
      <section className="px-6 md:px-10 pb-24 fade-up">
        <div className="max-w-6xl mx-auto space-y-24">
          {(work.detail?.visuals || [work.img]).map((v, i) => (
            <div
              key={i}
              className="relative rounded-[20px] overflow-hidden border border-white/10 bg-black/80"
            >
              <img
                src={v}
                alt={`${work.title} visual ${i + 1}`}
                className="w-full object-cover brightness-[0.92] contrast-[1.05]"
                loading="lazy"
              />

              {/* 光の滲み */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 70% 10%, rgba(255,245,220,0.06), transparent 60%)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= TAGS ================= */}
      <section className="px-6 md:px-10 pb-28 fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[0.9rem] tracking-[0.22em] text-white/80 mb-8">
            TAGS
          </h2>

          <div className="flex flex-wrap gap-2">
            {(work.tags || []).map((t) => (
              <span
                key={t}
                className="px-3 py-[6px] text-[11px] tracking-[0.14em] bg-white/4 border border-white/8 rounded-full text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="px-6 md:px-10 pb-36 fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-white/12 to-transparent mb-12" />
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
