// Philosophy.jsx
import React, { useEffect, useRef } from "react";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "./PhilosophySP.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const PRINCIPLES = [
  {
    number: "01",
    title: "見やすさ",
    en: "CLARITY",
    type: "clarity",
    text: (
      <>
        必要な情報が自然に目に入り、
        <br />
        迷わず読み進められる画面へ。
      </>
    ),
  },
  {
    number: "02",
    title: "印象",
    en: "ATMOSPHERE",
    type: "atmosphere",
    text: (
      <>
        写真・色・余白の温度を合わせ、
        <br />
        魅力が静かに伝わる空気へ。
      </>
    ),
  },
  {
    number: "03",
    title: "相談への流れ",
    en: "FLOW",
    type: "flow",
    text: (
      <>
        不安を減らし、問い合わせまで
        <br />
        無理なく進める導線へ。
      </>
    ),
  },
];

function PrincipleVisual({ type }) {
  if (type === "atmosphere") {
    return (
      <div className={cx(styles.vpVisual, styles.vpAtmosphere)} aria-hidden="true">
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
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const flowTargets = Array.from(root.querySelectorAll("[data-reveal-flow]"));
    const principlesTarget = root.querySelector("[data-reveal-principles]");

    const reveal = (el) => el.classList.add(styles.isIn);

    if (reduce || typeof IntersectionObserver === "undefined") {
      flowTargets.forEach(reveal);
      if (principlesTarget) reveal(principlesTarget);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          reveal(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    flowTargets.forEach((t) => io.observe(t));
    if (principlesTarget) io.observe(principlesTarget);

    return () => io.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className={styles.section}>
      <div className={styles.seamTop} aria-hidden="true" />
      <div className={styles.seamBottom} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.bgWord} aria-hidden="true">
          POLICY
        </div>

        <div
          className={cx(styles.sideLine, styles.flow, styles.flowLine, styles.flow1)}
          data-reveal-flow
          aria-hidden="true"
        />

        <header className={cx(styles.header, styles.flow, styles.flow1)} data-reveal-flow>
          <SectionSvgTitle
            title="POLICY"
            sub="DESIGN POLICY"
            className={styles.svgTitle}
          />
          <p className={styles.sub}>制作で大切にしていること</p>
        </header>

        <div className={styles.copy}>
          <p className={cx(styles.lead, styles.flow, styles.flow2)} data-reveal-flow>
            商品・空間・サービスの印象を、
            <br />
            <span>上質に、きちんと伝える</span>ために。
            <br />
            まずは、見やすさと安心感の土台から設計します。
          </p>

          <p className={cx(styles.body, styles.flow, styles.flow3)} data-reveal-flow>
            Webサイトは、最初から丁寧に読まれるとは限りません。
            <br />
            だからこそ、情報の順序・余白・文字量・写真の見え方を整え、
            <span>何をしているのか、誰に向いているのか</span>
            が自然に伝わる状態を目指します。
            <br />
            <br />
            見た目だけで終わらせず、読み手の不安を減らし、
            <span>問い合わせにつながる流れ</span>
            まで設計することを大切にしています。
          </p>

          <VisualPrinciples />

          <p className={cx(styles.last, styles.flow, styles.flow5)} data-reveal-flow>
            <span>
              見やすさと印象の両方を整え、
              <br />
              魅力が自然に伝わるサイトを。
            </span>
            <br />
            <em>
              「ここなら相談しやすそう」と感じてもらえることも、
              制作の大切な役割だと考えています。
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}