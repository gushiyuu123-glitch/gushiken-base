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
      <header className={styles.header}>
        <p className={styles.kicker}>NEWS</p>
        <h1 className={styles.title}>お知らせ</h1>
        <p className={styles.lead}>
          制作のお知らせや更新情報を、静かにまとめています。
        </p>
      </header>

      {loading && <p className={styles.loading}>読み込み中…</p>}

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
                <div className={styles.thumbWrap}>
                  <img
                    src={item.eyecatch.url}
                    className={styles.thumb}
                    alt=""
                    loading="lazy"
                  />
                </div>
              )}

              <div className={styles.meta}>
                <p className={styles.date}>
                  {item.publishedAt
                    ? new Date(item.publishedAt).toLocaleDateString("ja-JP")
                    : ""}
                </p>
                <h2 className={styles.itemTitle}>{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}