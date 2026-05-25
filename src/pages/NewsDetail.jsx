// src/pages/NewsDetail.jsx
import React, { useEffect, useMemo, useState } from "react";
import { getNewsDetail } from "../lib/microcms";
import styles from "../styles/newsDetail.module.css";
import { Link, useParams, useLocation } from "react-router-dom";

const SITE_NAME = "GUSHIKEN DESIGN";
const FALLBACK_OG = "/ogp.png";

function stripHtml(html = "") {
  return html
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
  // Lenis がいる場合も事故らないように
  try {
    const gdLenis = window?.__gd_lenis;
    if (gdLenis?.scrollTo) {
      gdLenis.scrollTo(0, { immediate: true });
      return;
    }
  } catch {}
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export default function NewsDetail() {
  const { id } = useParams();
  const location = useLocation();

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

  // ✅ ルート遷移で必ずトップへ（「クリックしたあとトップに移動しない」事故対策）
  useEffect(() => {
    scrollTopSafe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    let mounted = true;

    setError(false);
    setArticle(null);

    async function fetchArticle() {
      try {
        const res = await getNewsDetail(id);
        if (!mounted) return;

        setArticle(res);

        const title = res?.title ? `${res.title}｜${SITE_NAME}` : `NEWS｜${SITE_NAME}`;
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

        setMetaByName("twitter:card", "summary_large_image");
        setMetaByName("twitter:title", title);
        setMetaByName("twitter:description", desc);
        setMetaByName("twitter:image", ogImage);
      } catch {
        if (!mounted) return;
        setError(true);
        document.title = `NEWS｜${SITE_NAME}`;

        const origin = window?.location?.origin || "https://gushikendesign.com";
        setCanonical(`${origin}/news/${id}`);
      }
    }

    fetchArticle();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (error) {
    return (
      <section className={styles.wrapper} aria-busy="false">
        <div className={styles.inner}>
          <div className={styles.sideLine} aria-hidden="true" />

          <div className={styles.stateBox}>
            <p className={styles.error} role="alert">
              記事を読み込めませんでした。
            </p>

            <Link to="/news" className={styles.backLink}>
              一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className={styles.wrapper} aria-busy="true">
        <div className={styles.inner}>
          <div className={styles.sideLine} aria-hidden="true" />

          <p className={styles.loading} aria-live="polite">
            読み込み中…
          </p>
        </div>
      </section>
    );
  }

  const date = article.publishedAt || article.createdAt || article.updatedAt || null;

  return (
    <article className={`${styles.wrapper} aq-fade aq-show`} aria-busy="false">
      <div className={styles.inner}>
        <div className={styles.sideLine} aria-hidden="true" />

        <header className={styles.header}>
          <p className={styles.kicker}>NEWS / JOURNAL</p>

          <h1 className={styles.title}>{article.title}</h1>

          {date && <p className={styles.date}>{formatDate(date)}</p>}
        </header>

        {article.eyecatch?.url && (
          <figure className={styles.figure}>
            <img
              src={article.eyecatch.url}
              alt={article.title}
              className={styles.eyecatch}
              loading="eager"
              decoding="async"
              draggable="false"
            />
          </figure>
        )}

        <div className={styles.body} dangerouslySetInnerHTML={{ __html: article.body || "" }} />

        <div className={styles.backWrap}>
          <Link to="/news" className={styles.backLink}>
            一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}