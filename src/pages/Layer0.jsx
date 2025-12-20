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
    <main className={styles.page}>
      {/* 背景レイヤー */}
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.bgRay} />

      {/* 中央コンテンツ */}
      <section
        className={`${styles.inner} ${
          mounted ? styles.innerVisible : styles.innerHidden
        }`}
      >
        {/* ラベル */}
        <p className={styles.layerLabel}>LAYER 0</p>

        {/* タイトル */}
        <h1 className={styles.title}>The Quiet Room Beyond Design</h1>

        {/* 説明 */}
        <p className={styles.sub}>
          A room never listed on maps.
          <br className={styles.subBreak} />
          A chamber made of morning light.
        </p>

        {/* ガラスカード */}
        <div className={styles.card}>
          <p className={styles.cardLabel}>
            DOORS THAT ARE NOT MEANT TO BE FOUND.
          </p>

          <ul className={styles.doorList}>
            {hiddenLinks.map((item, index) => {
              const code = item.code || `DOOR_0${index + 1}`;
              const title = item.title || "Untitled";
              const subtitle =
                item.subtitle ||
                (index === 0
                  ? "EXPERIMENTAL SCRIPTS"
                  : index === 1
                  ? "A CHAMBER OUTSIDE THE VISIBLE"
                  : "ROOM NEVER LISTED ON MAPS");

              return (
                <li key={item.id || item.code || title}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.door}
                  >
                    <span className={styles.doorCode}>{code}</span>

                    <span className={styles.doorContent}>
                      <span className={styles.doorTitle}>{title}</span>
                      <span className={styles.doorMeta}>{subtitle}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <p className={styles.cardFoot}>
            NOT INDEXED. NOT ANNOUNCED. ONLY DISCOVERED.
          </p>
        </div>
      </section>
    </main>
  );
}
