import React, { useEffect, useState } from "react";
import { getNewsList } from "../lib/microcms";
import styles from "../styles/newsList.module.css";
import { Link } from "react-router-dom";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getNewsList({ limit: 50 })
      .then((res) => {
        if (!mounted) return;
        setNews(Array.isArray(res?.contents) ? res.contents : []);
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
    <section className={styles.wrapper}>
      <h1 className={styles.title}>NEWS</h1>

      {loading && (
        <p className={styles.loading}>Loading…</p>
      )}

      {!loading && (
        <div className={styles.list}>
          {news.map((item) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              className={styles.item}
              aria-label={item.title}
            >
              {item.eyecatch && (
                <img
                  src={item.eyecatch.url}
                  className={styles.thumb}
                  alt=""
                  loading="lazy"
                />
              )}

              <div className={styles.meta}>
                <p className={styles.date}>
                  {item.publishedAt
                    ? new Date(item.publishedAt).toLocaleDateString("ja-JP")
                    : ""}
                </p>
                <h2 className={styles.itemTitle}>
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

