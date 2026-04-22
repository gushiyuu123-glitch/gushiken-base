import React, { useEffect, useMemo, useState } from "react";
import { getNewsList } from "../lib/microcms";
import styles from "../styles/newsSection.module.css";
import { Link } from "react-router-dom";

export default function NewsSection() {
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
        const res = await getNewsList({ limit: 3 });
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
    <section
      className={`${styles.wrapper} aq-fade`}
      aria-labelledby="news-heading"
      aria-busy={loading ? "true" : "false"}
    >
      <header className={`${styles.header} aq-fade delay-1`}>
        <p className={styles.kicker}>NEWS</p>
        <h2 id="news-heading" className={styles.title}>
          お知らせ
        </h2>

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
                <p className={styles.date}>{formatDate(date)}</p>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </Link>
            );
          })}
        </div>
      )}

      {!loading && !error && hasNews && (
        <div className={styles.moreWrap}>
          <Link to="/news" className={styles.more}>
            もっと見る
          </Link>
        </div>
      )}
    </section>
  );
}