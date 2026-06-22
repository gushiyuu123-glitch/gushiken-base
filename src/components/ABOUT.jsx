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
    title: "らしさの手がかりを見る",
    text: "写真や文章が揃っていない段階でも、そのサービスらしさや見せるべき方向を一緒に整理します。",
  },
  {
    no: "02",
    label: "EDIT",
    title: "伝わる順番にする",
    text: "言葉を増やす前に、初めて見る人が必要な情報へ進みやすい順番に整えます。",
  },
  {
    no: "03",
    label: "SHAPE",
    title: "公開できる形にする",
    text: "見た目だけで終わらせず、スマホでの見やすさや相談までの流れも確認しながら仕上げます。",
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
            見せ方だけでなく、
            <br />
            <span>伝わり方まで見る。</span>
          </p>

          <p
            className={cx(
              styles["about-body"],
              styles["about-flow"],
              styles["about-flow-3"]
            )}
          >
            初めて訪れた人が、何のサイトか、誰に向いているか、
            <br />
            どこから相談できるかを自然に理解できるように。
            <br />
            <span>言葉・写真・流れ</span>を整えるところから始めます。
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
            世界観を大切にしながら、
            見る人が迷いやすい部分を減らすことを意識しています。
            <br />
            お店やサービスの魅力がきちんと伝わり、
            相談しやすい状態まで整えるWeb制作を行っています。
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
            制作の背景や、より詳しい考え方は、
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