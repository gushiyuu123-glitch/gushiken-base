// src/pages/Sketchbook.jsx

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getSketchbookList } from "../lib/microcms";
import styles from "./Sketchbook.module.css";

const SITE_URL = "https://gushikendesign.com";

function formatDate(value) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
  }).format(date);
}

function normalizeSketchItem(item) {
  return {
    id: item?.id,
    title: item?.title || "Untitled",
    image: item?.image || null,
    type: item?.type || "",
    note: item?.note || "",
    publishedAt: item?.publishedAt || item?.createdAt || "",
  };
}

export default function Sketchbook() {
  const [rawItems, setRawItems] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let alive = true;

    setStatus("loading");

    getSketchbookList({ limit: 100 })
      .then((data) => {
        if (!alive) return;

        const contents = Array.isArray(data?.contents) ? data.contents : [];

        setRawItems(contents);
        setStatus("ready");
      })
      .catch((error) => {
        console.error("❌ Sketchbook取得エラー:", error);

        if (!alive) return;

        setRawItems([]);
        setStatus("error");
      });

    return () => {
      alive = false;
    };
  }, []);

  const items = useMemo(() => {
    return rawItems
      .map(normalizeSketchItem)
      .filter((item) => item.id && item.image?.url);
  }, [rawItems]);

  return (
    <>
      <Helmet>
        <title>Sketchbook | GUSHIKEN DESIGN</title>
        <meta
          name="description"
          content="GUSHIKEN DESIGNのSketchbook。ラフ、線、構図のメモを置いていくページです。"
        />
        <link rel="canonical" href={`${SITE_URL}/sketchbook`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sketchbook | GUSHIKEN DESIGN" />
        <meta
          property="og:description"
          content="ラフ、線、構図のメモ。制作の手前にある断片を置いていくページです。"
        />
        <meta property="og:url" content={`${SITE_URL}/sketchbook`} />
        <meta property="og:site_name" content="GUSHIKEN DESIGN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sketchbook | GUSHIKEN DESIGN" />
        <meta
          name="twitter:description"
          content="ラフ、線、構図のメモ。制作の手前にある断片を置いていくページです。"
        />
      </Helmet>

      <main className={styles.page}>
        <div className={styles.noise} aria-hidden="true" />

        <header className={styles.header}>
          <Link to="/" className={styles.back} aria-label="ホームへ戻る">
            GUSHIKEN DESIGN
          </Link>

          <p className={styles.kicker}>PRIVATE ROOM</p>

          <h1 className={styles.title}>Sketchbook</h1>

          <p className={styles.lead}>ラフ、線、構図のメモ。</p>
        </header>

        {status === "loading" && (
          <p className={styles.state}>Loading sketches...</p>
        )}

        {status === "error" && (
          <p className={styles.state}>Sketchbookを読み込めませんでした。</p>
        )}

        {status === "ready" && items.length === 0 && (
          <p className={styles.state}>まだスケッチはありません。</p>
        )}

        {status === "ready" && items.length > 0 && (
          <section className={styles.gallery} aria-label="Sketchbook gallery">
            {items.map((item) => {
              const dateText = formatDate(item.publishedAt);

              return (
                <figure key={item.id} className={styles.item}>
                  <img
                    src={item.image.url}
                    alt={item.title}
                    width={item.image.width || undefined}
                    height={item.image.height || undefined}
                    className={styles.image}
                    loading="lazy"
                    decoding="async"
                  />

                  <figcaption className={styles.caption}>
                    <span>{item.title}</span>
                    {dateText && <small>{dateText}</small>}
                  </figcaption>
                </figure>
              );
            })}
          </section>
        )}
      </main>
    </>
  );
}