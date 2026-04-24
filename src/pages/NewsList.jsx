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
      if (!silent || newsRef.current.length === 0) {
        setLoading(true);
      }

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

  useEffect(() => {
    document.title = "NEWS｜GUSHIKEN DESIGN";
  }, []);

  /*
    /news 遷移時のスクロール位置残り対策。
    HOME下部の「もっと見る」から来た時に、前のスクロール位置を引き継がせない。
  */
  useEffect(() => {
    if (location.hash) return;

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };

    scrollTop();

    const raf = requestAnimationFrame(scrollTop);
    const timer = window.setTimeout(scrollTop, 80);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    mountedRef.current = true;

    fetchNews();

    return () => {
      mountedRef.current = false;
    };
  }, [fetchNews]);

  /*
    PWA / ホーム画面追加アプリ対策。
    アプリ復帰時にNEWS一覧を再取得する。
  */
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
          <SectionSvgTitle
            title="NEWS"
            sub="NEWS / ARCHIVE"
            className={styles.svgTitle}
          />

          <h1 id="news-list-heading" className={styles.hiddenHeading}>
            お知らせ
          </h1>

          <p className={styles.lead}>
            制作の更新やお知らせをまとめています。
          </p>
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
              const date =
                item.publishedAt || item.createdAt || item.updatedAt || null;

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
                    <div className={styles.thumbWrap}>
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
                    <h2 className={styles.itemTitle}>
                      {item.title || "Untitled"}
                    </h2>
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