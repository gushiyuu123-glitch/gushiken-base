// src/pages/Sketchbook.jsx

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getSketchbookList } from "../lib/microcms";
import styles from "./Sketchbook.module.css";

const SITE_URL = "https://gushikendesign.com";

const PAGE_TITLE = "Sketchbook | GUSHIKEN DESIGN";
const PAGE_DESCRIPTION =
  "GUSHIKEN DESIGNのSketchbook。Webデザインやホームページ制作の途中で残ったラフ、スケッチ、構図メモなどを置いていくページです。";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function formatDate(value) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
  }).format(date);
}

function normalizeType(type) {
  if (!type) return "";

  const raw = String(type).trim();

  const value = raw
    .toLowerCase()
    .replace(/\s*\/\s*/g, " / ")
    .trim();

  const primary = value.split(" / ")[0]?.trim();

  const labels = {
    doodle: "DOODLE",
    rough: "ROUGH",
    layout: "LAYOUT",
    composition: "COMPOSITION",
    idea: "IDEA",
    memo: "MEMO",
    typography: "TYPOGRAPHY",

    // 旧データ・保険
    drawing: "DRAWING",
    sketch: "SKETCH",

    // 日本語だけで入れた場合の保険
    落書き: "DOODLE",
    ラフ: "ROUGH",
    レイアウト: "LAYOUT",
    構図メモ: "COMPOSITION",
    アイデア: "IDEA",
    メモ: "MEMO",
    タイポ練習: "TYPOGRAPHY",
  };

  return labels[primary] || labels[value] || raw.toUpperCase();
}

function normalizeSketchItem(item) {
  return {
    id: item?.id || "",
    title: item?.title || "Untitled",
    image: item?.image || null,
    type: normalizeType(item?.type),
    note: item?.note || "",
    publishedAt: item?.publishedAt || item?.createdAt || "",
  };
}

function getImageAlt(item) {
  if (!item?.title || item.title === "Untitled") {
    return "Sketchbook image";
  }

  return `${item.title} - Sketchbook`;
}

function SketchSkeleton() {
  return (
    <section className={styles.gallery} aria-label="読み込み中">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`sketch-skeleton-${index}`}
          className={cx(
            styles.item,
            styles.skeleton,
            index % 3 === 0 && styles.skeletonTall,
            index % 3 === 1 && styles.skeletonWide
          )}
          aria-hidden="true"
        />
      ))}
    </section>
  );
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
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/sketchbook`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/sketchbook`} />
        <meta property="og:site_name" content="GUSHIKEN DESIGN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
      </Helmet>

      <main className={styles.page}>
        <div className={styles.noise} aria-hidden="true" />

        <header className={styles.header}>
          <Link to="/" className={styles.back} aria-label="ホームへ戻る">
            GUSHIKEN DESIGN
          </Link>

          <p className={styles.kicker}>PRIVATE ROOM</p>

          <h1 className={styles.title}>Sketchbook</h1>

          <p className={styles.lead}>
            ラフ、線、構図のメモ。
            <br />
            ノートの落書きのようなものを、淡々と置いていくページです。
          </p>
        </header>

        {status === "loading" && <SketchSkeleton />}

        {status === "error" && (
          <p className={styles.state}>
            Sketchbookを読み込めませんでした。
            <br />
            時間を置いて、もう一度お試しください。
          </p>
        )}

        {status === "ready" && items.length === 0 && (
          <p className={styles.state}>
            まだスケッチはありません。
            <br />
            気が向いたときに、少しずつ追加していきます。
          </p>
        )}

        {status === "ready" && items.length > 0 && (
          <section className={styles.gallery} aria-label="Sketchbook gallery">
            {items.map((item, index) => {
              const dateText = formatDate(item.publishedAt);
              const hasMeta = item.type || dateText;
              const isFirstView = index < 3;

              return (
                <figure key={item.id} className={styles.item}>
                  <img
                    src={item.image.url}
                    alt={getImageAlt(item)}
                    width={item.image.width || undefined}
                    height={item.image.height || undefined}
                    className={styles.image}
                    loading={isFirstView ? "eager" : "lazy"}
                    decoding="async"
                  />

                  <figcaption className={styles.caption}>
                    <span className={styles.captionTitle}>{item.title}</span>

                    {hasMeta && (
                      <span className={styles.captionMeta}>
                        {item.type && <span>{item.type}</span>}

                        {item.type && dateText && (
                          <span aria-hidden="true">/</span>
                        )}

                        {dateText && <span>{dateText}</span>}
                      </span>
                    )}

                    {item.note && (
                      <span className={styles.captionNote}>{item.note}</span>
                    )}
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