import React, { useEffect, useMemo, useState } from "react";
import { getNewsList } from "../lib/microcms";
import styles from "../styles/newsList.module.css";
import { Link } from "react-router-dom";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const formatDate = useMemo(() => {
    const fmt = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return (dateStr) => {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      if (Number.isNaN(d.getTime())) return "";
      return fmt.format(d);
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await getNewsList({ limit: 50 });
        if (!mounted) return;

        const items = Array.isArray(res?.contents) ? res.contents : [];
        setNews(items);
        setError(false);
      } catch {
        if (!mounted) return;
        setError(true);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const hasNews = news.length > 0;

  return (
    <section className={styles.wrapper} aria-busy={loading ? "true" : "false"}>
      <header className={styles.header}>
        <p className={styles.kicker}>NEWS</p>
        <h1 className={styles.title}>お知らせ</h1>

        {/* ✅ “静かに”は使わない */}
        <p className={styles.lead}>制作の更新やお知らせをまとめています。</p>
      </header>

      {loading && (
        <p className={styles.loading} aria-live="polite">
          読み込み中…
        </p>
      )}

      {error && !loading && (
        <p className={styles.error} aria-live="assertive">
          お知らせを読み込めませんでした
        </p>
      )}

      {!loading && !error && !hasNews && (
        <p className={styles.empty} aria-live="polite">
          現在、お知らせはありません。
        </p>
      )}

      {!loading && !error && hasNews && (
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
                {item.eyecatch?.url && (
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
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}