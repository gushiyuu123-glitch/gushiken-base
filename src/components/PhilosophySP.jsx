// src/sections/PhilosophySP.jsx
import React, { useEffect, useRef } from "react";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "./PhilosophySP.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const PRINCIPLES = [
  {
    number: "01",
    title: "最初に迷わせない",
    en: "CLARITY",
    type: "clarity",
    text: (
      <>
        何をしているか、誰に向いているか。
        <br />
        最初の数秒で判断できる順序に。
      </>
    ),
  },
  {
    number: "02",
    title: "温度をそろえる",
    en: "ATMOSPHERE",
    type: "atmosphere",
    text: (
      <>
        写真・言葉・余白のトーンを合わせ、
        <br />
        らしさが静かに残る画面を作ります。
      </>
    ),
  },
  {
    number: "03",
    title: "相談までつなげる",
    en: "FLOW",
    type: "flow",
    text: (
      <>
        必要な答えを、先に置く。
        <br />
        問い合わせまで自然に進める流れを作ります。
      </>
    ),
  },
];

function PrincipleVisual({ type }) {
  if (type === "atmosphere") {
    return (
      <div
        className={cx(styles.vpVisual, styles.vpAtmosphere)}
        aria-hidden="true"
      >
        <span className={styles.vpGoldBar} />
        <div className={styles.vpLines}>
          <span className={cx(styles.vpGoldLine, styles.vpGoldStrong)} />
          <span className={cx(styles.vpGoldLine, styles.vpGoldMid)} />
          <span className={cx(styles.vpGoldLine, styles.vpGoldThin)} />
        </div>
      </div>
    );
  }

  if (type === "flow") {
    return (
      <div className={cx(styles.vpVisual, styles.vpFlow)} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className={cx(styles.vpVisual, styles.vpClarity)} aria-hidden="true">
      <span className={cx(styles.vpLine, styles.vpStrong)} />
      <span className={cx(styles.vpLine, styles.vpMid)} />
      <span className={cx(styles.vpLine, styles.vpThin)} />
    </div>
  );
}

function VisualPrinciples() {
  return (
    <div className={styles.principles} data-reveal-principles>
      <div className={styles.principlesInner}>
        <div className={styles.vpAxis} aria-hidden="true" />

        <p className={cx(styles.principlesLabel, styles.principleReveal)}>
          DESIGN IN PRACTICE
        </p>

        <div className={styles.principlesList}>
          {PRINCIPLES.map((item, index) => (
            <article
              key={item.number}
              className={cx(styles.vpItem, styles.principleReveal)}
              style={{ "--vp-index": index }}
            >
              <span className={styles.vpNum} aria-hidden="true">
                {item.number}
              </span>

              <div className={styles.vpContent}>
                <div className={styles.vpHeading}>
                  <h3>{item.title}</h3>
                  <p>{item.en}</p>
                </div>

                <PrincipleVisual type={item.type} />

                <p className={styles.vpText}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PhilosophySP() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const flowTargets = Array.from(root.querySelectorAll("[data-reveal-flow]"));
    const principlesTarget = root.querySelector("[data-reveal-principles]");

    const reveal = (el) => el.classList.add(styles.isIn);

    if (reduce || typeof IntersectionObserver === "undefined") {
      flowTargets.forEach(reveal);
      if (principlesTarget) reveal(principlesTarget);
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    flowTargets.forEach((target) => io.observe(target));
    if (principlesTarget) io.observe(principlesTarget);

    return () => io.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="philosophy-sp-title"
    >
      <div className={styles.seamTop} aria-hidden="true" />
      <div className={styles.seamBottom} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.bgWord} aria-hidden="true">
          POLICY
        </div>

        <div
          className={cx(
            styles.sideLine,
            styles.flow,
            styles.flowLine,
            styles.flow1
          )}
          data-reveal-flow
          aria-hidden="true"
        />

        <header
          className={cx(styles.header, styles.flow, styles.flow1)}
          data-reveal-flow
        >
          <h2 id="philosophy-sp-title" className={styles.srOnly}>
            制作方針
          </h2>

          <SectionSvgTitle
            title="POLICY"
            sub="DESIGN POLICY"
            className={styles.svgTitle}
          />

          <p className={styles.sub}>制作で大切にしていること</p>
        </header>

        <div className={styles.copy}>
          <p
            className={cx(styles.lead, styles.flow, styles.flow2)}
            data-reveal-flow
          >
            <span>見た瞬間に伝わり</span>、
            <br />
            読み進めても迷わない。
          </p>

          <p
            className={cx(styles.body, styles.flow, styles.flow3)}
            data-reveal-flow
          >
            情報の順序、文字量、写真の見え方、余白のトーンを整えると、
            <br />
            初めて見る人は
            <span>自然に判断しやすく</span>なります。
            <br />
            <br />
            不安が出る前に必要な答えを置き、
            <br />
            問い合わせまでの流れも一緒に設計します。
          </p>

          <VisualPrinciples />

          <p
            className={cx(styles.last, styles.flow, styles.flow5)}
            data-reveal-flow
          >
            <span>
              「ここなら相談できそう」と思ってもらえることを、
              <br />
              制作のすべての起点にしています。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}