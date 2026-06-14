// src/sections/Philosophy.jsx
import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "./Philosophy.module.css";

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
        最初の数秒で判断できる順序へ整えます。
      </>
    ),
  },
  {
    number: "02",
    title: "印象を編集する",
    en: "ATMOSPHERE",
    type: "atmosphere",
    text: (
      <>
        写真・言葉・余白の温度を揃える。
        <br />
        見た後に、静かに残る空気を作ります。
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
        不安が出る前に、必要な答えを置く。
        <br />
        迷わず問い合わせへ進める流れを設計します。
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

        <p
          className={cx(styles.principlesLabel, styles.principleReveal)}
          style={{ "--d": "40ms" }}
        >
          HOW I DESIGN
        </p>

        <div className={styles.principlesList}>
          {PRINCIPLES.map((item, index) => (
            <article
              key={item.number}
              className={cx(styles.vpItem, styles.principleReveal)}
              style={{ "--d": `${140 + index * 95}ms` }}
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

export default function Philosophy() {
  const sectionRef = useRef(null);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const flowTargets = Array.from(root.querySelectorAll("[data-reveal-flow]"));
    const principlesTarget = root.querySelector("[data-reveal-principles]");

    const reveal = (el) => el.classList.add(styles.isIn);

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
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
  }, [reduceMotion]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className={styles.section}
      aria-label="制作方針"
    >
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

        <header
          className={cx(styles.header, styles.flow, styles.flow1)}
          data-reveal-flow
        >
          <SectionSvgTitle
            title="POLICY"
            sub="DESIGN POLICY"
            className={styles.svgTitle}
          />

          <p className={styles.sub}>制作で大切にしていること</p>
        </header>

        <div className={styles.copy}>
          <p className={cx(styles.lead, styles.flow, styles.flow2)} data-reveal-flow>
            <span>見た瞬間に伝わり</span>、
            <br />
            読み進めても迷わない。
            <br />
            その先で、<span>相談したくなる流れ</span>まで整えます。
          </p>

          <p className={cx(styles.body, styles.flow, styles.flow3)} data-reveal-flow>
            Webサイトは、じっくり読まれる前に印象で判断されます。
            <br />
            だからこそ、情報の順序、文字量、写真の見え方、余白の温度を編集し、
            <span>何をしているか／誰に向いているか</span>が自然に入る状態を作ります。
            <br />
            <br />
            きれいに整えるだけで終わらせず、
            <span>不安を先回りで潰し</span>、問い合わせまでの導線も一緒に設計します。
          </p>

          <VisualPrinciples />

          <p className={cx(styles.last, styles.flow, styles.flow5)} data-reveal-flow>
            <span>
              迷わない。伝わる。決められる。
              <br />
              この3つが揃うと、サイトは強くなります。
            </span>
            <br />
            <em>
              「ここなら任せやすそう」と感じてもらえることを、成果の前提に置いています。
            </em>
          </p>

        </div>
      </div>
    </section>
  );
}