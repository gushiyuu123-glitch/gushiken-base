// src/pages/Layer0.jsx
import { useEffect, useState } from "react";
import styles from "./Layer0.module.css";
import hiddenLinks from "../../data/hiddenLinks.json";

export default function Layer0() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={styles.page}>
      {/* 背景レイヤー */}
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      {/* 中央コンテンツ */}
      <div className={styles.inner}>
        <p className={styles.layerLabel}>LAYER 0</p>

        <h1 className={styles.title}>
          The Quiet Room Beyond Design
        </h1>

        <p className={styles.sub}>
          A room never listed on maps. A chamber outside the visible.
        </p>

        {/* ブラックホール生成ゾーン */}
        <div
          className={`${styles.holeWrap} ${
            mounted ? styles.holeVisible : ""
          }`}
        >
          <div className={styles.holeCore} />
          <div className={styles.holeRing} />
        </div>

        {/* 扉リスト */}
        <div
          className={`${styles.doors} ${
            mounted ? styles.doorsVisible : ""
          }`}
        >
          {hiddenLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.door}
            >
              <span className={styles.doorCode}>
                {item.id?.toUpperCase() || "DOOR"}
              </span>
              <span className={styles.doorTitle}>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
