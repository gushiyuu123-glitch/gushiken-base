import React, { useEffect, useMemo, useState } from "react";
import { getNewsDetail } from "../lib/microcms";
import styles from "../styles/newsDetail.module.css";
import { Link, useParams } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    let mounted = true;

    setError(false);
    setArticle(null);

    async function fetchArticle() {
      try {
        const res = await getNewsDetail(id);

        if (!mounted) return;

        setArticle(res);

        if (res?.title) {
          document.title = `${res.title}｜GUSHIKEN DESIGN`;
        }
      } catch {
        if (!mounted) return;
        setError(true);
        document.title = "NEWS｜GUSHIKEN DESIGN";
      }
    }

    fetchArticle();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (error) {
    return (
      <section className={styles.wrapper} aria-busy="false">
        <div className={styles.inner}>
          <div className={styles.sideLine} aria-hidden="true" />

          <div className={styles.stateBox}>
            <p className={styles.error} role="alert">
              記事を読み込めませんでした。
            </p>

            <Link to="/news" className={styles.backLink}>
              一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className={styles.wrapper} aria-busy="true">
        <div className={styles.inner}>
          <div className={styles.sideLine} aria-hidden="true" />

          <p className={styles.loading} aria-live="polite">
            読み込み中…
          </p>
        </div>
      </section>
    );
  }

  const date =
    article.publishedAt || article.createdAt || article.updatedAt || null;

  return (
    <article
      className={`${styles.wrapper} aq-fade aq-show`}
      aria-busy="false"
    >
      <div className={styles.inner}>
        <div className={styles.sideLine} aria-hidden="true" />

        <header className={styles.header}>
          <p className={styles.kicker}>NEWS / JOURNAL</p>

          <h1 className={styles.title}>{article.title}</h1>

          {date && <p className={styles.date}>{formatDate(date)}</p>}
        </header>

        {article.eyecatch?.url && (
          <figure className={styles.figure}>
            <img
              src={article.eyecatch.url}
              alt={article.title}
              className={styles.eyecatch}
              loading="eager"
              decoding="async"
              draggable="false"
            />
          </figure>
        )}

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: article.body || "" }}
        />

        <div className={styles.backWrap}>
          <Link to="/news" className={styles.backLink}>
            一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}