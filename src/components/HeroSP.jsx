import React, { useState } from "react";
import styles from "./HeroSp.module.css";
import heroSP from "../assets/hero-sp33.png";

function HeroSPTitleSignature() {
  return (
    <img
      className={styles.titleImg}
      src="/typography/Gushiken Design222.svg"
      alt=""
      aria-hidden="true"
      draggable="false"
      loading="eager"
      decoding="async"
    />
  );
}

export default function HeroSP() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      className={styles.root}
      aria-label="GUSHIKEN DESIGN スマートフォン ヒーローセクション"
      data-loaded={imgLoaded ? "true" : "false"}
    >
      <div className={styles.bg}>
        <img
          src={heroSP}
          alt="沖縄の上質なWebデザイン・ホームページ制作｜GUSHIKEN DESIGN"
          className={styles.image}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
        />
      </div>

      <div className={styles.imageVeil} aria-hidden="true" />
      <div className={styles.imageBloom} aria-hidden="true" />

      <div className={styles.topVeil} aria-hidden="true" />
      <div className={styles.globalDepth} aria-hidden="true" />
      <div className={styles.leftShadow} aria-hidden="true" />
      <div className={styles.leftFog} aria-hidden="true" />
      <div className={styles.bottomReadability} aria-hidden="true" />
      <div className={styles.edgeVignette} aria-hidden="true" />
      <div className={styles.filmNoise} aria-hidden="true" />

      <div className={styles.textBlock}>
        <div className={styles.max}>
          <div className={styles.headGroup}>
            <div className={`${styles.fade} ${styles.fade1}`}>
              <p className={styles.label}>QUIET / ORDER / IMPRESSION</p>
            </div>

            <div className={`${styles.fade} ${styles.fade2} ${styles.hookPad}`}>
              {/* ✅ 軸 */}
              <p className={styles.hook}>空気から、設計する。</p>
            </div>

            <div className={styles.copyBlock}>
              <div className={`${styles.fade} ${styles.fade4} ${styles.divider}`} />
              <div className={`${styles.fade} ${styles.fade5} ${styles.bodyPad}`}>
                <p className={styles.copy}>
                  {/* ✅ meta：品よく、でも具体 */}
                  <span className={styles.copyMeta}>
                    沖縄の上質なWebデザイン・ホームページ制作
                  </span>

                  {/* ✅ 本文：Claude/ChatGPTの軸をSPへ */}
       <span className={styles.copyText}>
  商品・空間・サービスの印象を上質に伝えるWebデザイン。
  <br /><br></br>
  写真、<span className={styles.em}>余白</span>、言葉、導線まで整え、{" "}
  <span className={styles.noBreak}>
    安っぽく見せず、価値が自然に伝わるWebサイトへ。
  </span>
</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bodyGroup}>
            <div className={styles.signatureShift}>
              <h1 className={styles.logoWrap} aria-label="GUSHIKEN DESIGN">
                <span className={styles.srOnly}>GUSHIKEN DESIGN</span>
                <HeroSPTitleSignature />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHintWrap} aria-hidden="true">
        <div className={styles.scrollHint} />
      </div>
    </section>
  );
}