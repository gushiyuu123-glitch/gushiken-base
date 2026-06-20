// src/components/Contact.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "./Contact.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const STARTERS = [
  "内容がまだ固まっていない",
  "今のサイトを整え直したい",
  "はじめてWebサイトをつくる",
];

function ContactVisual() {
  return (
    <div
      className={cx(styles.visual, styles.reveal, styles.r4)}
      data-contact-reveal
    >
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
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((target) => io.observe(target));

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
          className={cx(
            styles.sideLine,
            styles.reveal,
            styles.lineReveal,
            styles.r1
          )}
          data-contact-reveal
          aria-hidden="true"
        />

        <header
          className={cx(styles.header, styles.reveal, styles.r1)}
          data-contact-reveal
        >
          <h2 id="contact-heading" className={styles.sr}>
            お問い合わせ
          </h2>

          <SectionSvgTitle
            title="CONTACT"
            sub="CONTACT / REQUEST"
            className={styles.svgTitle}
          />

          <p className={styles.sectionTitle}>お問い合わせ / CONTACT</p>
        </header>

        <div className={styles.intro}>
          <p
            className={cx(styles.lead, styles.reveal, styles.r2)}
            data-contact-reveal
          >
            ここから、
            <br />
            <span>整えていく。</span>
          </p>

          <p
            className={cx(styles.leadSub, styles.reveal, styles.r3)}
            data-contact-reveal
          >
            まだ内容が固まっていなくても大丈夫です。
            <br />
            業種・目的・写真・予算感を聞きながら、
            必要な見せ方と進め方を一緒に決めていきます。
          </p>
        </div>

        <ContactVisual />

        <div
          className={cx(styles.actions, styles.reveal, styles.r5)}
          data-contact-reveal
        >
          <Link to="/contact" className={styles.btn}>
            <span>お問い合わせへ進む</span>
          </Link>
        </div>

        <p
          className={cx(styles.footer, styles.reveal, styles.r6)}
          data-contact-reveal
        >
          ※ 時期や内容により、開始時期のご相談をお願いする場合があります。
          <br />
          その際も、できるだけ丁寧にご案内いたします。
        </p>
      </div>
    </section>
  );
}