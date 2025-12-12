import React, { useEffect, useState } from "react";
import { getNewsList } from "../lib/microcms";
import styles from "../styles/newsSection.module.css";
import { Link } from "react-router-dom";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    getNewsList({ limit: 3 })
      .then((res) => {
        if (!mounted) return;
        setNews(Array.isArray(res?.contents) ? res.contents : []);
      })
      .catch(() => {
        if (!mounted) return;
        setError(true);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className={styles.wrapper} aria-labelledby="news-heading">
      {/* タイトル */}
      <h2 id="news-heading" className={styles.title}>
        NEWS
      </h2>
      <div className={styles.underline} />

      {/* ローディング / エラー */}
      {loading && (
        <p className={styles.loading} aria-live="polite">
          Loading…
        </p>
      )}
      {error && !loading && (
        <p className={styles.error} aria-live="assertive">
          お知らせを読み込めませんでした
        </p>
      )}

      {/* リスト */}
      {!loading && !error && (
        <div className={styles.list}>
          {news.map((item) => {
            const date = item.publishedAt || item.createdAt || null;

            return (
              <Link
                to={`/news/${item.id}`}
                key={item.id}
                className={styles.item}
                aria-label={`お知らせ: ${item.title}`}
              >
                <p className={styles.date}>
                  {date ? new Date(date).toLocaleDateString("ja-JP") : ""}
                </p>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </Link>
            );
          })}
        </div>
      )}

      {/* もっと見る */}
      {!loading && !error && news.length > 0 && (
        <div className={styles.moreWrap}>
          <Link to="/news" className={styles.more}>
            もっと見る →
          </Link>
        </div>
      )}
    </section>
  );
}
