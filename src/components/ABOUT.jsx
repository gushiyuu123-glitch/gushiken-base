// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "./SectionSvgTitle";
import styles from "./About.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const PROOFS = [
  {
    no: "01",
    label: "OBSERVE",
    title: "らしさの輪郭を拾う",
    text: "写真や文章が揃う前の段階から、そのサービスらしさや見せるべき空気を整理します。",
  },
  {
    no: "02",
    label: "EDIT",
    title: "伝える量と順番を整える",
    text: "言葉を増やすのではなく、初めて見る人が判断しやすい順番と余白に整えます。",
  },
  {
    no: "03",
    label: "SHAPE",
    title: "画面として最後まで形にする",
    text: "構成、デザイン、実装、公開までを一貫して見ながら、使いやすいWebサイトに仕上げます。",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(
      root.querySelectorAll(`.${styles["about-flow"]}`)
    );

    const reveal = (target) => {
      target.classList.add(styles.isIn);
    };

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        <div
          className={cx(
            styles["about-side-line"],
            styles["about-flow"],
            styles["about-flow-line"],
            styles["about-flow-1"]
          )}
          aria-hidden="true"
        />

        <header
          className={cx(
            styles["about-header"],
            styles["about-flow"],
            styles["about-flow-1"]
          )}
        >
          <h2 className={styles.srOnly}>ABOUT</h2>

          <SectionSvgTitle
            title="ABOUT"
            sub="ABOUT / CREATOR"
            className={styles["about-svg-title"]}
          />

          <p className={styles["about-sub"]}>制作者について</p>
        </header>

        <div className={styles["about-intro"]}>
          <p
            className={cx(
              styles["about-kicker"],
              styles["about-flow"],
              styles["about-flow-2"]
            )}
          >
            OKINAWA / WEB DESIGN / PERSONAL STUDIO
          </p>

          <p
            className={cx(
              styles["about-lead"],
              styles["about-flow"],
              styles["about-flow-2"]
            )}
          >
            説明より先に、
            <br />
            <span>印象が届く状態をつくる。</span>
          </p>

          <p
            className={cx(
              styles["about-body"],
              styles["about-flow"],
              styles["about-flow-3"]
            )}
          >
            写真の置き方、言葉の量、余白と導線。
            <br />
            初めて見た人が<span>自然に判断できる入口</span>をつくることから始めます。
          </p>
        </div>

        <div
          className={cx(
            styles["about-profile"],
            styles["about-flow"],
            styles["about-flow-4"]
          )}
        >
          <h3 className={styles["about-name"]} translate="no">
            Gushiken Yuto
          </h3>

          <p className={styles["about-role"]}>
            Web Design / Art Direction / Frontend
          </p>

          <p className={styles["about-text"]}>
            世界観をつくることと、読みにくさを減らすこと。
            <br />
            その両方を見ながら、構成・デザイン・実装まで一貫して制作します。
            <br />
            沖縄を拠点に、<span>ホームページ制作・LP制作・Webデザイン</span>を行っています。
          </p>
        </div>

        <div
          className={cx(
            styles["about-proof-grid"],
            styles["about-flow"],
            styles["about-flow-5"]
          )}
        >
          {PROOFS.map((item) => (
            <article key={item.no} className={styles["about-proof-card"]}>
              <div className={styles["about-proof-head"]}>
                <span className={styles["about-proof-no"]}>{item.no}</span>
                <span className={styles["about-proof-label"]}>
                  {item.label}
                </span>
              </div>

              <h3 className={styles["about-proof-title"]}>{item.title}</h3>
              <p className={styles["about-proof-text"]}>{item.text}</p>
            </article>
          ))}
        </div>

        <div
          className={cx(
            styles["about-last"],
            styles["about-flow"],
            styles["about-flow-6"]
          )}
        >
          <p>
            制作の背景や、Web制作で大切にしている考え方を、
            <br />
            <span>制作者ページにまとめています。</span>
          </p>

<div className={styles["about-links"]}>
  <Link to="/about" className={styles["about-main-link"]}>
    制作者について知る
  </Link>

  <a
    href="https://note.com/noahgushi123"
    target="_blank"
    rel="noopener noreferrer"
    className={styles["about-note-link"]}
  >
    制作記録を読む
  </a>
</div>


        </div>
      </div>
    </section>
  );
}