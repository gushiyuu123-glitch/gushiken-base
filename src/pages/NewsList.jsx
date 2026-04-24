import React, { useEffect, useMemo, useState } from "react";
import { getNewsList } from "../lib/microcms";
import styles from "../styles/newsList.module.css";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    let mounted = true;

    document.title = "NEWS｜GUSHIKEN DESIGN";

    async function fetchNews() {
      try {
        setLoading(true);
        setError(false);

        const res = await getNewsList({ limit: 50 });
        if (!mounted) return;

        const items = Array.isArray(res?.contents) ? res.contents : [];
        setNews(items);
      } catch {
        if (!mounted) return;
        setError(true);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    fetchNews();

    return () => {
      mounted = false;
    };
  }, []);

  const hasNews = news.length > 0;

  return (
    <section
      className={`${styles.wrapper} aq-fade aq-show`}
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

        <div className={styles.panel}>
          {loading && (
            <p className={styles.stateText} aria-live="polite">
              読み込み中…
            </p>
          )}

          {error && !loading && (
            <div className={styles.stateBox} role="alert">
              <p className={styles.error}>
                お知らせを読み込めませんでした。
              </p>

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
                    className={`${styles.item} ${
                      hasThumb ? styles.withThumb : ""
                    }`}
                    aria-label={`お知らせ: ${item.title}`}
                  >
                    <span className={styles.number} aria-hidden="true">
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
                      <h2 className={styles.itemTitle}>{item.title}</h2>
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
      </div>
    </section>
  );
}