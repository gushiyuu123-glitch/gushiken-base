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
    title: "余韻を残す",
    en: "ATMOSPHERE",
    type: "atmosphere",
    text: (
      <>
        見たあとに残る手触りをつくる。
        <br />
        らしさが静かに続く画面に。
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
        迷いが増える前に次へ進めます。
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
            <span>何度も見たくなるサイトをつくる。</span>
            <br />
            一度見て終わらないWebへ。
          </p>

          <p
            className={cx(styles.body, styles.flow, styles.flow3)}
            data-reveal-flow
          >
            ただ情報を並べるだけでは、
            <br />
            その店やサービスの魅力は伝わりきりません。
            <br />
            <br />
            何を先に見せるか、どんな言葉にするか。
            <br />
            写真の見せ方や余白を整えて、
            <br />
            初めて見る人にも伝わるページにしていきます。
            <br />
            <br />
            必要な答えを先に置き、
            <br />
            相談や問い合わせまで自然に進める流れも一緒につくります。
          </p>

          <VisualPrinciples />

          <p
            className={cx(styles.last, styles.flow, styles.flow5)}
            data-reveal-flow
          >
            <span>
              「また見たい」と思えることと、
              <br />
              「ここなら相談できそう」と思えること。
              <br />
              その両方を、制作の中心に置いています。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}