// src/pages/NewsDetail.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getNewsDetail } from "../lib/microcms";
import styles from "../styles/newsDetail.module.css";

const SITE_NAME = "GUSHIKEN DESIGN";
const FALLBACK_OG = "/ogp.png";

function stripHtml(html = "") {
  return String(html)
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function clampText(text = "", max = 120) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

function setMetaByName(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;

  let tag = document.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function scrollTopSafe() {
  try {
    const gdLenis = window?.__gd_lenis__ || window?.__gd_lenis;

    if (gdLenis?.scrollTo) {
      gdLenis.scrollTo(0, { immediate: true });
      return;
    }
  } catch (_) {
    // fallback
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export default function NewsDetail() {
  const { id } = useParams();
  const location = useLocation();

  const rootRef = useRef(null);
  const mountedRef = useRef(false);
  const requestIdRef = useRef(0);

  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);

  const formatDate = useMemo(() => {
    const fmt = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      if (Number.isNaN(date.getTime())) return "";
      return fmt.format(date);
    };
  }, []);

  useEffect(() => {
    if (location.hash) return;
    scrollTopSafe();

    const raf = requestAnimationFrame(scrollTopSafe);
    const timer = window.setTimeout(scrollTopSafe, 80);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    setError(false);
    setArticle(null);

    async function fetchArticle() {
      try {
        const res = await getNewsDetail(id);

        if (ignore) return;
        if (!mountedRef.current) return;
        if (requestId !== requestIdRef.current) return;

        setArticle(res);

        const title = res?.title
          ? `${res.title}｜${SITE_NAME}`
          : `NEWS｜${SITE_NAME}`;

        document.title = title;

        const bodyText = clampText(stripHtml(res?.body || ""), 120);
        const desc = bodyText || "制作の背景、判断、更新を記録しています。";

        const origin = window?.location?.origin || "https://gushikendesign.com";
        const canonical = `${origin}/news/${id}`;
        const ogImage = res?.eyecatch?.url || `${origin}${FALLBACK_OG}`;

        setCanonical(canonical);

        setMetaByName("description", desc);

        setMetaByProperty("og:site_name", SITE_NAME);
        setMetaByProperty("og:title", title);
        setMetaByProperty("og:description", desc);
        setMetaByProperty("og:type", "article");
        setMetaByProperty("og:url", canonical);
        setMetaByProperty("og:image", ogImage);

        if (res?.publishedAt) {
          setMetaByProperty("article:published_time", res.publishedAt);
        }

        if (res?.updatedAt) {
          setMetaByProperty("article:modified_time", res.updatedAt);
        }

        setMetaByName("twitter:card", "summary_large_image");
        setMetaByName("twitter:title", title);
        setMetaByName("twitter:description", desc);
        setMetaByName("twitter:image", ogImage);
      } catch (err) {
        console.error("❌ NEWS詳細表示エラー:", err);

        if (ignore) return;
        if (!mountedRef.current) return;
        if (requestId !== requestIdRef.current) return;

        setError(true);
        document.title = `NEWS｜${SITE_NAME}`;

        const origin = window?.location?.origin || "https://gushikendesign.com";
        setCanonical(`${origin}/news/${id}`);
      }
    }

    fetchArticle();

    return () => {
      ignore = true;
    };
  }, [id]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll("[data-news-detail-reveal]"));

    if (!targets.length) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add(styles.isIn));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(styles.isIn);
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => io.observe(target));

    return () => {
      io.disconnect();
    };
  }, [article, error]);

  if (error) {
    return (
      <section
        ref={rootRef}
        className={styles.wrapper}
        aria-busy="false"
        aria-labelledby="news-error-heading"
      >
        <div className={styles.inner}>
          <div className={styles.sideLine} aria-hidden="true" />

          <div className={styles.stateBox}>
            <p className={styles.kicker}>NEWS / ERROR</p>

            <h1 id="news-error-heading" className={styles.stateTitle}>
              記事を読み込めませんでした。
            </h1>

            <Link to="/news" className={styles.backLink}>
              BACK TO NEWS
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section
        ref={rootRef}
        className={styles.wrapper}
        aria-busy="true"
        aria-labelledby="news-loading-heading"
      >
        <div className={styles.inner}>
          <div className={styles.sideLine} aria-hidden="true" />

          <div className={styles.loadingBox}>
            <p className={styles.kicker}>NEWS / JOURNAL</p>

            <h1 id="news-loading-heading" className={styles.stateTitle}>
              LOADING
            </h1>

            <p className={styles.loading} aria-live="polite">
              読み込み中…
            </p>
          </div>
        </div>
      </section>
    );
  }

  const date =
    article.publishedAt || article.createdAt || article.updatedAt || null;

  const title = article.title || "Untitled";
  const bodyHtml = article.body || "";
  const hasEyecatch = Boolean(article.eyecatch?.url);

  return (
    <article
      ref={rootRef}
      className={styles.wrapper}
      aria-busy="false"
      aria-labelledby="news-detail-heading"
    >
      <div className={styles.inner}>
        <div className={styles.sideLine} aria-hidden="true" />

        <header
          className={`${styles.header} ${styles.reveal}`}
          data-news-detail-reveal
          style={{ "--d": "0ms" }}
        >
          <p className={styles.kicker}>NEWS / JOURNAL</p>

          <h1 id="news-detail-heading" className={styles.title}>
            {title}
          </h1>

          <div className={styles.articleMeta}>
            {date && <time dateTime={date}>{formatDate(date)}</time>}
            <span aria-hidden="true">GUSHIKEN DESIGN</span>
          </div>
        </header>

        {hasEyecatch && (
          <figure
            className={`${styles.figure} ${styles.reveal}`}
            data-news-detail-reveal
            style={{ "--d": "90ms" }}
          >
            <div className={styles.figureTop} aria-hidden="true">
              <span>VISUAL</span>
              <span>NEWS</span>
            </div>

            <img
              src={article.eyecatch.url}
              alt={title}
              className={styles.eyecatch}
              loading="eager"
              decoding="async"
              draggable="false"
              width={article.eyecatch.width || undefined}
              height={article.eyecatch.height || undefined}
            />

            <span className={styles.figureVeil} aria-hidden="true" />
          </figure>
        )}

        <div
          className={`${styles.body} ${styles.reveal}`}
          data-news-detail-reveal
          style={{ "--d": hasEyecatch ? "160ms" : "90ms" }}
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        <footer
          className={`${styles.backWrap} ${styles.reveal}`}
          data-news-detail-reveal
          style={{ "--d": "120ms" }}
        >
          <div className={styles.footRule} aria-hidden="true" />

          <Link to="/news" className={styles.backText}>
            <span aria-hidden="true">←</span>
            <span>BACK TO NEWS</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}