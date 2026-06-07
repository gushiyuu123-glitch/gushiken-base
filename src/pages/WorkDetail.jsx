// src/pages/WorkDetail.jsx
import React, { useEffect, useMemo, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./WorkDetail.module.css";
import { worksBySlug, normalizeWorkSlug } from "../data/worksIndex";

/* ================================
   utils
================================ */
const isNewItem = (work) => {
  if (work.tags?.includes("NEW")) return true;
  if (!work.createdAt) return false;

  const created = new Date(work.createdAt).getTime();
  if (Number.isNaN(created)) return false;

  return (Date.now() - created) / 86_400_000 <= 30;
};

function scrollToTopStable() {
  if (typeof window === "undefined") return;

  const reduce =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  // ✅ Lenis Proxy（window.__gd_lenis__）がいれば最優先
  const lenis = window.__gd_lenis__;
  if (lenis) {
    // scrollToTop があればそれを優先
    if (typeof lenis.scrollToTop === "function") {
      try {
        lenis.scrollToTop();
        return;
      } catch (_) {}
    }
    // scrollTo があれば 0へ
    if (typeof lenis.scrollTo === "function") {
      try {
        lenis.scrollTo(0, { immediate: true });
        return;
      } catch (_) {}
    }
  }

  window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "auto" });
}

/* ================================
   component
================================ */
export default function WorkDetail() {
  const { slug } = useParams();
  const rootRef = useRef(null);
  const navigate = useNavigate();

  const normalizedSlug = normalizeWorkSlug(slug);

  // ✅ Map参照（重複・大小文字・空白差で事故らない）
  const work = useMemo(
    () => worksBySlug.get(normalizedSlug) || null,
    [normalizedSlug]
  );

  // ✅ 作品詳細に入った瞬間、必ず上へ（Lenis導入後の事故対策）
  useEffect(() => {
    scrollToTopStable();
  }, [normalizedSlug]);

  // ✅ reveal（このページはこれ一本）
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const targets = Array.from(root.querySelectorAll("[data-reveal]"));

    if (!targets.length) return;

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add(styles.in));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add(styles.in);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [normalizedSlug]);

  // ✅ 見た目は Link のまま、動作だけ「前のページへ」
  const handleBackClick = (e) => {
    e.preventDefault();

    const idx =
      typeof window !== "undefined" &&
      window.history?.state &&
      typeof window.history.state.idx === "number"
        ? window.history.state.idx
        : null;

    if (idx !== null && idx > 0) navigate(-1);
    else navigate("/works", { replace: true });
  };

  if (!work) {
    return (
      <main className={styles.notFound}>
        <div className={styles.notFoundInner}>
          <p className={styles.nfKicker}>NOT FOUND</p>
          <h1 className={styles.nfTitle}>WORK NOT FOUND</h1>

          <Link to="/works" className={styles.backText}>
            ← BACK TO WORKS
          </Link>
        </div>
      </main>
    );
  }

  const isNew = isNewItem(work);
  const visuals = work.detail?.visuals?.length ? work.detail.visuals : [work.img];

  return (
    <main ref={rootRef} className={styles.main}>
      <div className={styles.bg} aria-hidden="true" />

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div
            className={`${styles.rule} ${styles.reveal}`}
            data-reveal
            style={{ "--d": "0ms" }}
          />

          <div
            className={`${styles.metaRow} ${styles.reveal}`}
            data-reveal
            style={{ "--d": "70ms" }}
          >
            <p className={styles.kicker}>WORK DETAIL</p>
            {isNew && <span className={styles.new}>NEW</span>}
          </div>

          <h1
            className={`${styles.h1} ${styles.reveal}`}
            data-reveal
            style={{ "--d": "140ms" }}
          >
            {work.title}
          </h1>

          {!!work.desc && (
            <p
              className={`${styles.desc} ${styles.reveal}`}
              data-reveal
              style={{ "--d": "210ms" }}
            >
              {work.desc}
            </p>
          )}

          <div
            className={`${styles.actions} ${styles.reveal}`}
            data-reveal
            style={{ "--d": "280ms" }}
          >
            {/* ✅ 見た目そのまま、挙動だけ前ページへ */}
            <Link to="/works" className={styles.back} onClick={handleBackClick}>
              ← BACK
            </Link>

            {!!work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.live}
                aria-label="作品サイトを新しいタブで開く"
              >
                LIVE ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ================= VISUAL ================= */}
      <section className={styles.visuals}>
        <div className={styles.container}>
          {visuals.map((visual, index) => (
            <figure
              key={`${visual}-${index}`}
              className={`${styles.frame} ${styles.reveal}`}
              data-reveal
              style={{ "--d": `${140 + index * 70}ms` }}
            >
              <div className={styles.seamTop} aria-hidden="true" />
              <div className={styles.seamBottom} aria-hidden="true" />

              <img
                src={visual}
                alt={`${work.title} 作品ビジュアル ${index + 1}`}
                className={styles.img}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              <div className={styles.glow} aria-hidden="true" />
            </figure>
          ))}
        </div>
      </section>

      {/* ================= TAGS ================= */}
      {!!work.tags?.length && (
        <section className={styles.tags}>
          <div className={styles.container}>
            <h2
              className={`${styles.h2} ${styles.reveal}`}
              data-reveal
              style={{ "--d": "0ms" }}
            >
              TAGS
            </h2>

            <div
              className={`${styles.tagList} ${styles.reveal}`}
              data-reveal
              style={{ "--d": "70ms" }}
            >
              {work.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FOOT ================= */}
      <section className={styles.foot}>
        <div className={styles.container}>
          <div
            className={`${styles.footRule} ${styles.reveal}`}
            data-reveal
            style={{ "--d": "0ms" }}
          />
          {/* これはそのままでOK */}
          <Link
            to="/works"
            className={`${styles.backText} ${styles.reveal}`}
            data-reveal
            style={{ "--d": "70ms" }}
          >
            ALL WORKS LIST →
          </Link>
        </div>
      </section>
    </main>
  );
}