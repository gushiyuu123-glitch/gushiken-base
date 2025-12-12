import React, { useEffect, useState } from "react";
import { getNewsDetail } from "../lib/microcms";
import styles from "../styles/newsDetail.module.css";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    getNewsDetail(id)
      .then((res) => {
        if (!mounted) return;
        setArticle(res);
      })
      .catch(() => {
        if (!mounted) return;
        setError(true);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (error) {
    return (
      <p className={styles.loading}>
        記事を読み込めませんでした
      </p>
    );
  }

  if (!article) {
    return <p className={styles.loading}>読み込み中…</p>;
  }

  const date =
    article.publishedAt ||
    article.createdAt ||
    article.updatedAt ||
    null;

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{article.title}</h1>

        {date && (
          <p className={styles.date}>
            {new Date(date).toLocaleDateString("ja-JP")}
          </p>
        )}
      </header>

      {article.eyecatch && (
        <figure className={styles.figure}>
          <img
            src={article.eyecatch.url}
            alt={article.title}
            className={styles.eyecatch}
          />
        </figure>
      )}

      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </article>
  );
}
