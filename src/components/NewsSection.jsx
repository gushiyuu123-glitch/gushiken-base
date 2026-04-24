import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getNewsList } from "../lib/microcms";
import SectionSvgTitle from "./SectionSvgTitle";
import styles from "../styles/newsSection.module.css";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mountedRef = useRef(false);
  const requestIdRef = useRef(0);
  const newsRef = useRef([]);

  useEffect(() => {
    newsRef.current = news;
  }, [news]);

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

  const fetchNews = useCallback(async ({ silent = false } = {}) => {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    try {
      // 既にNEWSがある状態での復帰再取得では、画面をチラつかせない
      if (!silent || newsRef.current.length === 0) {
        setLoading(true);
      }

      setError(false);

      const res = await getNewsList({ limit: 3 });

      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;

      const items = Array.isArray(res?.contents) ? res.contents : [];

      setNews(items);
      setError(false);
    } catch (err) {
      console.error("❌ NEWS表示エラー:", err);

      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;

      // 既に表示済みNEWSがあるなら、復帰時の一時失敗で消さない
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
    mountedRef.current = true;

    fetchNews();

    return () => {
      mountedRef.current = false;
    };
  }, [fetchNews]);

  // PWA / ホーム画面追加アプリ対策
  // アプリ復帰時にNEWSを再取得する
  useEffect(() => {
    const handleVisible = () => {
      if (document.visibilityState !== "visible") return;

      fetchNews({ silent: true });
    };

    const handlePageShow = (event) => {
      // bfcache復帰時だけ再取得
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
      className={`${styles.wrapper} aq-fade`}
      aria-labelledby="news-heading"
      aria-busy={loading ? "true" : "false"}
    >
      <div className={styles.inner}>
        <div className={styles.sideLine} aria-hidden="true" />

        <header className={`${styles.header} aq-fade delay-1`}>
          <SectionSvgTitle
            title="NEWS"
            sub="UPDATE / JOURNAL"
            className={styles.svgTitle}
          />

          <h2 id="news-heading" className={styles.hiddenHeading}>
            お知らせ
          </h2>

          <p className={styles.lead}>
            制作の更新やお知らせをまとめています。
          </p>
        </header>

        <div className={`${styles.panel} aq-fade delay-2`}>
          {loading && (
            <p className={styles.stateText} aria-live="polite">
              読み込み中…
            </p>
          )}

          {error && !loading && (
            <p className={styles.stateText} aria-live="assertive">
              お知らせを読み込めませんでした。
            </p>
          )}

          {!loading && !error && !hasNews && (
            <p className={styles.stateText} aria-live="polite">
              現在、お知らせはありません。
            </p>
          )}

          {!loading && !error && hasNews && (
            <div className={styles.list}>
              {news.map((item, index) => {
                const date = item.publishedAt || item.createdAt || null;

                return (
                  <Link
                    to={`/news/${item.id}`}
                    key={item.id}
                    className={styles.item}
                    aria-label={`お知らせ: ${item.title}`}
                    style={{ "--item-index": index }}
                  >
                    <span className={styles.itemMeta}>
                      <span className={styles.date}>{formatDate(date)}</span>
                      <span className={styles.number} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <h3 className={styles.itemTitle}>{item.title}</h3>

                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {!loading && !error && hasNews && (
          <div className={styles.moreWrap}>
            <Link to="/news" className={styles.more}>
              <span>もっと見る</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}