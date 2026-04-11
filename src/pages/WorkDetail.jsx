// src/pages/WorkDetail.jsx
import React, { useMemo, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { worksData } from "../data/worksData";

/* ================================
   motion variants
================================ */
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const visualItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionFade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.76,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ================================
   utils
================================ */
const normalizeSlug = (str = "") =>
  str.replace(/\s+/g, "").replace(/[^\w-]/g, "").toLowerCase();

const isNewItem = (work) => {
  if (work.tags?.includes("NEW")) return true;
  if (!work.createdAt) return false;

  const created = new Date(work.createdAt).getTime();
  if (Number.isNaN(created)) return false;

  return (Date.now() - created) / 86_400_000 <= 30;
};

/* ================================
   component
================================ */
export default function WorkDetail() {
  const { slug } = useParams();
  const rootRef = useRef(null);

  const normalizedSlug = normalizeSlug(slug);

  const allWorks = useMemo(() => worksData.flatMap((block) => block.items), []);

  const work = useMemo(() => {
    return allWorks.find((item) => normalizeSlug(item.slug) === normalizedSlug);
  }, [allWorks, normalizedSlug]);

  if (!work) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs tracking-[0.18em] text-white/60">
            NOT FOUND
          </p>

          <h1 className="mb-10 text-2xl font-light tracking-[0.18em]">
            WORK NOT FOUND
          </h1>

          <Link
            to="/works"
            className="text-white/70 transition hover:text-white"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </main>
    );
  }

  const isNew = isNewItem(work);
  const visuals = work.detail?.visuals?.length ? work.detail.visuals : [work.img];

  return (
    <main
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-[#080706] text-white"
    >
      {/* 全体光膜 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 20%, rgba(255,255,255,0.03), transparent 70%)",
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative px-6 pb-20 pt-32 md:px-10">
        <motion.div
          className="mx-auto max-w-6xl"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 h-px w-12 bg-gradient-to-r from-white/20 to-white/5"
          />

          <motion.div
            variants={fadeUp}
            className="mb-5 flex items-center gap-3"
          >
            <p className="text-[0.65rem] tracking-[0.32em] text-white/35">
              WORK DETAIL
            </p>

            {isNew && (
              <span className="rounded-sm border border-amber-200/20 bg-white/5 px-2 py-[2px] text-[0.62rem] tracking-[0.22em] text-amber-200/90">
                NEW
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2.4rem] font-light leading-[1.1] tracking-[0.18em] md:text-[3.2rem]"
          >
            {work.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl whitespace-pre-line leading-relaxed text-white/50"
          >
            {work.desc}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center gap-5"
          >
            <Link
              to="/works"
              className="
                inline-flex h-[48px] items-center justify-center
                rounded-full border border-white/12 px-8
                text-[11px] tracking-[0.22em] text-white/70
                transition-all duration-500
                hover:border-white/20 hover:bg-white/5 hover:text-white
              "
            >
              ← BACK
            </Link>

            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex h-[48px] items-center justify-center
                rounded-full border border-white/15 bg-white/6 px-8
                text-[11px] tracking-[0.22em] text-white
                transition-all duration-500
                hover:border-white/28 hover:bg-white/12
                hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
              "
            >
              VISIT SITE →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= VISUAL ================= */}
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl space-y-24">
          {visuals.map((visual, index) => (
            <motion.div
              key={`${visual}-${index}`}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/80"
              variants={visualItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.16 }}
            >
              <img
                src={visual}
                alt={`${work.title} visual ${index + 1}`}
                className="w-full object-cover brightness-[0.92] contrast-[1.05]"
                loading="lazy"
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 10%, rgba(255,245,220,0.06), transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TAGS ================= */}
      {!!work.tags?.length && (
        <section className="px-6 pb-28 md:px-10">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
          >
            <h2 className="mb-8 text-[0.9rem] tracking-[0.22em] text-white/80">
              TAGS
            </h2>

            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/8 bg-white/4 px-3 py-[6px] text-[11px] tracking-[0.14em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ================= FOOTER ================= */}
      <section className="px-6 pb-36 md:px-10">
        <motion.div
          className="mx-auto max-w-6xl"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mb-12 h-px w-full bg-gradient-to-r from-white/12 to-transparent" />

          <Link
            to="/works"
            className="text-xs tracking-[0.22em] text-white/70 transition hover:text-white"
          >
            ← BACK TO WORKS LIST
          </Link>
        </motion.div>
      </section>
    </main>
  );
}