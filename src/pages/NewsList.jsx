// src/pages/NewsList.jsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { getNewsList } from "../lib/microcms";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "../styles/newsList.module.css";

const SITE_NAME = "GUSHIKEN DESIGN";
const PAGE_TITLE = `NEWS｜${SITE_NAME}`;
const PAGE_DESC = "制作の更新やお知らせをまとめています。";
const FALLBACK_OG = "/ogp.png";

const NEWS_PAGE_SIZE = 12;

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

function mergeNews(prev = [], next = []) {
  const seen = new Set();
  const merged = [];

  [...prev, ...next].forEach((item) => {
    const key = item?.id || `${item?.title || "untitled"}-${item?.createdAt || ""}`;

    if (seen.has(key)) return;

    seen.add(key);
    merged.push(item);
  });

  return merged;
}

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
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

  const fetchNews = useCallback(
    async ({ offset = 0, append = false, silent = false } = {}) => {
      const requestId = requestIdRef.current + 1;
      requestIdRef.current = requestId;

      try {
        if (append) {
          setLoadingMore(true);
        } else if (!silent || newsRef.current.length === 0) {
          setLoading(true);
        }

        setError(false);

        const res = await getNewsList({
          limit: NEWS_PAGE_SIZE,
          offset,
        });

        if (!mountedRef.current) return;
        if (requestId !== requestIdRef.current) return;

        const items = Array.isArray(res?.contents) ? res.contents : [];
        const nextTotal =
          Number.isFinite(Number(res?.totalCount)) && Number(res?.totalCount) >= 0
            ? Number(res.totalCount)
            : offset + items.length;

        const nextNews = append ? mergeNews(newsRef.current, items) : items;

        setNews(nextNews);
        setTotalCount(nextTotal);
        setHasMore(nextTotal > 0 ? nextNews.length < nextTotal : items.length === NEWS_PAGE_SIZE);
        setError(false);
      } catch (err) {
        console.error("❌ NEWS一覧表示エラー:", err);

        if (!mountedRef.current) return;
        if (requestId !== requestIdRef.current) return;

        if (newsRef.current.length === 0) {
          setNews([]);
          setTotalCount(0);
          setHasMore(false);
          setError(true);
        }
      } finally {
        if (!mountedRef.current) return;
        if (requestId !== requestIdRef.current) return;

        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

  // SEO / OGP
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

  // /news 遷移時：スクロール残り対策
  useEffect(() => {
    if (location.hash) return undefined;

    const goTop = () => scrollTopSafe();

    goTop();

    const raf = requestAnimationFrame(goTop);
    const timer = window.setTimeout(goTop, 80);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    mountedRef.current = true;

    fetchNews({
      offset: 0,
      append: false,
      silent: false,
    });

    return () => {
      mountedRef.current = false;
    };
  }, [fetchNews]);

  // PWA / 復帰時：空なら再取得。読み込み済みを勝手に巻き戻さない。
  useEffect(() => {
    const handleVisible = () => {
      if (document.visibilityState !== "visible") return;
      if (newsRef.current.length > 0) return;

      fetchNews({ offset: 0, append: false, silent: true });
    };

    const handlePageShow = (event) => {
      if (!event.persisted) return;
      if (newsRef.current.length > 0) return;

      fetchNews({ offset: 0, append: false, silent: true });
    };

    document.addEventListener("visibilitychange", handleVisible);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("visibilitychange", handleVisible);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [fetchNews]);

  const handleLoadMore = useCallback(() => {
    if (loadingMore || loading || !hasMore) return;

    fetchNews({
      offset: newsRef.current.length,
      append: true,
      silent: true,
    });
  }, [fetchNews, hasMore, loading, loadingMore]);

  const hasNews = news.length > 0;
  const remainingCount = Math.max(0, totalCount - news.length);
  const countLabel = totalCount > 0 ? `${news.length} / ${totalCount}` : `${news.length}`;

  return (
    <section
      className={styles.wrapper}
      aria-busy={loading ? "true" : "false"}
      aria-labelledby="news-list-heading"
    >
      <div className={styles.inner}>
        <div className={styles.sideLine} aria-hidden="true" />

        <header className={styles.header}>
          <SectionSvgTitle
            title="NEWS"
            sub="NEWS / ARCHIVE"
            className={styles.svgTitle}
          />

          <h1 id="news-list-heading" className={styles.hiddenHeading}>
            お知らせ
          </h1>

          <p className={styles.lead}>
            制作の更新、公開の記録、
            <br />
            考えたことを残しています。
          </p>

          {!loading && !error && hasNews && (
            <div className={styles.archiveMeta} aria-label="表示件数">
              <span className={styles.archiveMetaLine} aria-hidden="true" />
              <span className={styles.archiveMetaText}>{countLabel}</span>
            </div>
          )}
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
          <>
            <div className={styles.list}>
              {news.map((item, index) => {
                const date =
                  item.publishedAt || item.createdAt || item.updatedAt || null;

                const title = item.title || "Untitled";
                const hasThumb = Boolean(item.eyecatch?.url);

                return (
                  <Link
                    to={`/news/${item.id}`}
                    key={item.id}
                    className={styles.item}
                    data-has-thumb={hasThumb ? "true" : "false"}
                    style={{ "--item-index": index }}
                    aria-label={`お知らせ: ${title}`}
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
                          width={item.eyecatch.width || undefined}
                          height={item.eyecatch.height || undefined}
                        />

                        <span className={styles.thumbVeil} aria-hidden="true" />
                      </div>
                    )}

                    <div className={styles.meta}>
                      <p className={styles.date}>{formatDate(date)}</p>
                      <h2 className={styles.itemTitle}>{title}</h2>
                    </div>

                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            {hasMore ? (
              <div className={styles.loadMoreWrap}>
                <button
                  type="button"
                  className={styles.loadMore}
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  aria-label="さらにニュースを読み込む"
                >
                  <span className={styles.loadMoreLine} aria-hidden="true" />

                  <span>
                    {loadingMore
                      ? "LOADING"
                      : `LOAD MORE ${String(Math.min(remainingCount, NEWS_PAGE_SIZE)).padStart(
                          2,
                          "0"
                        )}`}
                  </span>

                  <span
                    className={styles.loadMoreIcon}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                <p className={styles.countText}>{countLabel}</p>
              </div>
            ) : (
              <p className={styles.endText}>END OF ARCHIVE</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}