// src/pages/NewsList.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNewsList } from "../lib/microcms";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "../styles/newsList.module.css";

const SITE_NAME = "GUSHIKEN DESIGN";
const PAGE_TITLE = `NEWS｜${SITE_NAME}`;
const PAGE_DESC = "制作の更新やお知らせをまとめています。";
const FALLBACK_OG = "/ogp.png";

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

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mountedRef = useRef(false);
  const requestIdRef = useRef(0);
  const newsRef = useRef([]);

  const location = useLocation();

  useEffect(() => {
    newsRef.current = news;
  }, [news]);

  const formatDate = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      if (Number.isNaN(date.getTime())) return "";
      return formatter.format(date);
    };
  }, []);

  const fetchNews = useCallback(async ({ silent = false } = {}) => {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    try {
      if (!silent || newsRef.current.length === 0) setLoading(true);
      setError(false);

      const res = await getNewsList({ limit: 50 });

      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;

      const items = Array.isArray(res?.contents) ? res.contents : [];
      setNews(items);
      setError(false);
    } catch (err) {
      console.error("❌ NEWS一覧表示エラー:", err);

      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;

      if (newsRef.current.length === 0) {
        setNews([]);
        setError(true);
      }
    } finally {
      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;
      setLoading(false);
    }
  }, []);

  // SEO/OGP
  useEffect(() => {
    document.title = PAGE_TITLE;

    const origin = window?.location?.origin || "https://gushikendesign.com";
    const canonical = `${origin}/news`;
    const ogImage = `${origin}${FALLBACK_OG}`;

    setCanonical(canonical);
    setMetaByName("description", PAGE_DESC);

    setMetaByProperty("og:site_name", SITE_NAME);
    setMetaByProperty("og:title", PAGE_TITLE);
    setMetaByProperty("og:description", PAGE_DESC);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:url", canonical);
    setMetaByProperty("og:image", ogImage);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", PAGE_TITLE);
    setMetaByName("twitter:description", PAGE_DESC);
    setMetaByName("twitter:image", ogImage);
  }, []);

  // ✅ /news 遷移時：スクロール残り対策（Lenis含む）
  useEffect(() => {
    if (location.hash) return;

    const goTop = () => scrollTopSafe();
    goTop();

    const raf = requestAnimationFrame(goTop);
    const timer = window.setTimeout(goTop, 80);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    mountedRef.current = true;
    fetchNews();
    return () => {
      mountedRef.current = false;
    };
  }, [fetchNews]);

  // PWA/復帰時の再取得
  useEffect(() => {
    const handleVisible = () => {
      if (document.visibilityState !== "visible") return;
      fetchNews({ silent: true });
    };

    const handlePageShow = (event) => {
      if (!event.persisted) return;
      fetchNews({ silent: true });
    };

    document.addEventListener("visibilitychange", handleVisible);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("visibilitychange", handleVisible);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [fetchNews]);

  const hasNews = news.length > 0;

  return (
    <section
      className={styles.wrapper}
      aria-busy={loading ? "true" : "false"}
      aria-labelledby="news-list-heading"
    >
      <div className={styles.inner}>
        <div className={styles.sideLine} aria-hidden="true" />

        <header className={styles.header}>
          <SectionSvgTitle title="NEWS" sub="NEWS / ARCHIVE" className={styles.svgTitle} />

          <h1 id="news-list-heading" className={styles.hiddenHeading}>
            お知らせ
          </h1>

          <p className={styles.lead}>制作の更新やお知らせをまとめています。</p>
        </header>

        {loading && (
          <p className={styles.stateText} aria-live="polite">
            読み込み中…
          </p>
        )}

        {error && !loading && (
          <div className={styles.stateBox} role="alert">
            <p className={styles.error}>お知らせを読み込めませんでした。</p>

            <Link to="/" className={styles.backLink}>
              HOMEへ戻る
            </Link>
          </div>
        )}

        {!loading && !error && !hasNews && (
          <p className={styles.stateText} aria-live="polite">
            現在、お知らせはありません。
          </p>
        )}

        {!loading && !error && hasNews && (
          <div className={styles.list}>
            {news.map((item, index) => {
              const date = item.publishedAt || item.createdAt || item.updatedAt || null;
              const hasThumb = Boolean(item.eyecatch?.url);

              return (
                <Link
                  to={`/news/${item.id}`}
                  key={item.id}
                  className={styles.item}
                  data-has-thumb={hasThumb ? "true" : "false"}
                  aria-label={`お知らせ: ${item.title || "無題"}`}
                >
                  <span className={styles.itemNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {hasThumb && (
                    <div className={styles.thumbWrap} aria-hidden="true">
                      <img
                        src={item.eyecatch.url}
                        className={styles.thumb}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                      />
                    </div>
                  )}

                  <div className={styles.meta}>
                    <p className={styles.date}>{formatDate(date)}</p>
                    <h2 className={styles.itemTitle}>{item.title || "Untitled"}</h2>
                  </div>

                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}