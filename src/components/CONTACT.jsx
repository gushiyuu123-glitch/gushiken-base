// src/components/Contact.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "./Contact.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const STARTERS = [
  "まだ内容が固まっていない",
  "印象を上質に整えたい",
  "今のサイトが安っぽく見える",
  "写真や文章の見せ方を整えたい",
  "リニューアルでトーンを揃えたい",
];

function ContactVisual() {
  return (
    <div className={cx(styles.visual, styles.reveal, styles.r4)} data-contact-reveal>
      <p className={styles.visualLabel}>こんな段階から</p>

      <div className={styles.starterList} role="list">
        {STARTERS.map((text, index) => (
          <div
            key={text}
            className={styles.starterRow}
            style={{ "--starter-index": index }}
            role="listitem"
          >
            <span className={styles.starterIndex} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className={styles.starterText}>{text}</p>

            <span className={styles.starterCheck} aria-hidden="true">
              ✓
            </span>
          </div>
        ))}
      </div>

      <div className={styles.visualNote} aria-hidden="true">
        <span />
        <p>まだ具体的でなくても、大丈夫です。</p>
        <span />
      </div>
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll("[data-contact-reveal]"));
    const reveal = (el) => el.classList.add(styles.in);

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          reveal(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <div
          className={cx(styles.sideLine, styles.reveal, styles.lineReveal, styles.r1)}
          data-contact-reveal
          aria-hidden="true"
        />

        <header className={cx(styles.header, styles.reveal, styles.r1)} data-contact-reveal>
          <SectionSvgTitle
            title="CONTACT"
            sub="CONTACT / REQUEST"
            className={styles.svgTitle}
          />

          <h2 id="contact-heading" className={styles.sr}>
            お問い合わせ
          </h2>

          <p className={styles.sectionTitle}>お問い合わせ / CONTACT FORM</p>
        </header>

        <div className={styles.intro}>
          <p className={cx(styles.lead, styles.reveal, styles.r2)} data-contact-reveal>
            このトーンが、
            <br />
            <span>あなたのサービスに合いそうなら。</span>
          </p>

          <p className={cx(styles.leadSub, styles.reveal, styles.r3)} data-contact-reveal>
            まだ内容が固まっていなくても大丈夫です。
            <br />
            印象の方向性から整理しながら、無理のない形で進めます。
          </p>
        </div>

        <ContactVisual />

        <div className={cx(styles.actions, styles.reveal, styles.r5)} data-contact-reveal>
          <Link to="/contact" className={styles.btn}>
            <span>お問い合わせはこちら</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className={cx(styles.footer, styles.reveal, styles.r6)} data-contact-reveal>
          ※ 時期や内容により、開始時期のご相談をお願いする場合があります。
          <br />
          その際も、できるだけ丁寧にご案内いたします。
        </p>
      </div>
    </section>
  );
}