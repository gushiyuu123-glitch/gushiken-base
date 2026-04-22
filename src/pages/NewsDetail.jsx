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
      const d = new Date(dateStr);
      if (Number.isNaN(d.getTime())) return "";
      return fmt.format(d);
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    setError(false);
    setArticle(null);

    // ルート遷移で上へ（事故防止）
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    (async () => {
      try {
        const res = await getNewsDetail(id);
        if (!mounted) return;
        setArticle(res);
      } catch {
        if (!mounted) return;
        setError(true);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (error) {
    return (
      <section className={styles.wrapper} aria-busy="false">
        <p className={styles.error} role="alert">
          記事を読み込めませんでした
        </p>
        <div className={styles.backWrap}>
          <Link to="/news" className={styles.backLink}>
            一覧へ戻る
          </Link>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <p className={styles.loading} aria-live="polite" aria-busy="true">
        読み込み中…
      </p>
    );
  }

  const date = article.publishedAt || article.createdAt || article.updatedAt || null;

  return (
    <article className={`${styles.wrapper} aq-fade aq-show`} aria-busy="false">
      <header className={styles.header}>
        <p className={styles.kicker}>NEWS</p>
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
        // microCMSのHTMLをそのまま出す前提（不安ならサニタイズ層を噛ませる）
        dangerouslySetInnerHTML={{ __html: article.body || "" }}
      />

      <div className={styles.backWrap}>
        <Link to="/news" className={styles.backLink}>
          一覧へ戻る
        </Link>
      </div>
    </article>
  );
}