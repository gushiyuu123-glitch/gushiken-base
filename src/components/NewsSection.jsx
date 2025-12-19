import React, { useEffect, useState, useRef } from "react";
import { getNewsList } from "../lib/microcms";
import styles from "../styles/newsSection.module.css";
import { Link } from "react-router-dom";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const sectionRef = useRef(null);

  /* ---------------------------------------------
     Dior Exhibition Fade v4（セクションフェード）
  --------------------------------------------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("aq-show");

          el.querySelectorAll(".aq-fade").forEach((x) => {
            x.classList.add("aq-show");
          });

          observer.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ---------------------------------------------
     microCMS fetch
  --------------------------------------------- */
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

    return () => (mounted = false);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.wrapper} aq-section`}
      aria-labelledby="news-heading"
    >
      {/* タイトル */}
      <h2 id="news-heading" className={`${styles.title} aq-fade delay-1`}>
        NEWS
      </h2>
      <div className={`${styles.underline} aq-fade delay-2`} />

      {/* ローディング */}
      {loading && (
        <p className={`${styles.loading} aq-fade delay-3`} aria-live="polite">
          Loading…
        </p>
      )}

      {/* エラー */}
      {error && !loading && (
        <p className={`${styles.error} aq-fade delay-3`} aria-live="assertive">
          お知らせを読み込めませんでした
        </p>
      )}

      {/* リスト */}
      {!loading && !error && (
        <div className={`${styles.list} aq-fade delay-3`}>
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
        <div className={`${styles.moreWrap} aq-fade delay-4`}>
          <Link to="/news" className={styles.more}>
            もっと見る →
          </Link>
        </div>
      )}
    </section>
  );
}
