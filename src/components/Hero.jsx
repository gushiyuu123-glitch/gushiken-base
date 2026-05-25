import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

// ✅ 内部導線（SEO/回遊/迷子防止）
const VOW_PATH = "/works/vow-in-light";
const KOU_PATH = "/works/kou-ryui";

export default function Hero() {
  const rootRef = useRef(null);
  const [imgErr, setImgErr] = useState({ vow: false, kou: false });

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduce) return;

    const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

    const ctx = gsap.context(() => {
      const q = (sel) => root.querySelector(sel);
      const qa = (sel) => root.querySelectorAll(sel);

      // 初期化（“像が整う”）
      gsap.set(q('[data-hero="bgPhoto"]'), { opacity: 0, y: 18 });
      gsap.set(q('[data-hero="bgType"]'), { opacity: 0 });
      gsap.set(q('[data-hero="selected"]'), { opacity: 0, y: 10 });

      gsap.set(qa('[data-hero="leftItem"]'), { opacity: 0, y: 18 });
      gsap.set(q('[data-hero="frameVow"]'), {
        opacity: 0,
        y: 42,
        scale: 0.985,
      });
      gsap.set(q('[data-hero="frameKou"]'), {
        opacity: 0,
        y: 54,
        scale: 0.985,
      });

      const tl = gsap.timeline({
        defaults: { ease: [0.22, 1, 0.36, 1] },
      });

      tl.to(q('[data-hero="bgType"]'), { opacity: 1, duration: 0.9 }, 0)
        .to(q('[data-hero="bgPhoto"]'), { opacity: 1, y: 0, duration: 0.9 }, 0)
        .to(
          qa('[data-hero="leftItem"]'),
          { opacity: 1, y: 0, duration: 0.66, stagger: 0.085 },
          0.12
        )
        .to(
          q('[data-hero="selected"]'),
          { opacity: 1, y: 0, duration: 0.58 },
          0.34
        )
        .to(
          q('[data-hero="frameVow"]'),
          { opacity: 1, y: 0, scale: 1, duration: 0.78 },
          0.38
        )
        .to(
          q('[data-hero="frameKou"]'),
          { opacity: 1, y: 0, scale: 1, duration: 0.78 },
          0.46
        );

      // =========================
      // Ken Burns（窓パララックス）
      // 位置は触らず、中身(img)だけ動かす
      // coarse（SP/タッチ）は弱める
      // =========================
      const amt = coarse ? 3.5 : 7;
      const sc = coarse ? 1.035 : 1.055;

      const bindKenBurns = (shotSel, triggerSel, from, to) => {
        const shot = q(shotSel);
        const trigger = q(triggerSel);
        if (!shot || !trigger) return;

        gsap.set(shot, {
          yPercent: from,
          scale: sc,
          transformOrigin: "50% 50%",
        });

        gsap.to(shot, {
          yPercent: to,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      };

      bindKenBurns(
        '[data-hero="shotVow"]',
        '[data-hero="frameVow"]',
        amt * 0.55,
        -amt
      );
      bindKenBurns(
        '[data-hero="shotKou"]',
        '[data-hero="frameKou"]',
        amt * 0.35,
        -amt * 0.8
      );

      // “深度”だけ足す
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
        animation: gsap
          .timeline()
          .to(q('[data-hero="bgPhoto"]'), { y: -18 }, 0)
          .to(q('[data-hero="frameVow"]'), { y: -10 }, 0)
          .to(q('[data-hero="frameKou"]'), { y: -6 }, 0)
          .to(q('[data-hero="wordTop"]'), { x: -14 }, 0)
          .to(q('[data-hero="wordBottom"]'), { x: -18 }, 0),
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={rootRef} className={styles.heroRoot} aria-label="Hero">
      {/* Shelf photo background */}
      <div className={styles.bgPhoto} data-hero="bgPhoto" aria-hidden="true" />

      {/* Background giant type */}
      <div className={styles.bgType} data-hero="bgType" aria-hidden="true">
        <div className={`${styles.bgWord} ${styles.bgWordTop}`} data-hero="wordTop">
          GUSHIKEN
        </div>
        <div
          className={`${styles.bgWord} ${styles.bgWordBottom}`}
          data-hero="wordBottom"
        >
          DESIGN
        </div>
      </div>

      {/* Main grid */}
      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.kicker} data-hero="leftItem">
            空気から、設計する。
          </p>
          <div className={styles.kickerRule} data-hero="leftItem" />

          <h1 className={styles.h1} data-hero="leftItem">
            Gushiken
            <br />
            Design
          </h1>

          <div className={styles.copy} data-hero="leftItem">
            <p className={styles.copyMeta}>沖縄の上質なWebデザイン・ホームページ制作</p>
            <p>写真が良いのに、サイトで安く見える。</p>
            <p>
              そのギャップを埋めて、問い合わせまで
              <br />
              迷わない形に整えます。
            </p>
            <p className={styles.copySub}>
              見やすく、迷わず、判断しやすい。信頼感のある第一印象を設計します。
            </p>
          </div>

          <a href="#contact" className={styles.cta} data-hero="leftItem">
            <span>制作を相談する</span>
          </a>

          {/* ✅ CTA直下：不安を潰す一行（短く） */}
          <p className={styles.ctaNote} data-hero="leftItem">
            返信目安：24時間以内 / オンライン可
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.selectedLabel} data-hero="selected">
            SELECTED WORKS
          </p>

          <div className={styles.shelfWrap}>
            <div className={styles.frames}>
              {/* Large — Vow (internal) */}
              <Link
                to={VOW_PATH}
                className={`${styles.frame} ${styles.lg}`}
                data-hero="frameVow"
                aria-label="制作事例：Vow in Light（詳細へ）"
              >
                <div className={styles.frameInner}>
                  <div className={styles.imgWrap}>
                    {!imgErr.vow ? (
                      <img
                        className={styles.workImg}
                        data-hero="shotVow"
                        src="/works/vow-in-light-entryhero.webp"
                        alt="制作事例：Vow in Light"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        onError={() => setImgErr((s) => ({ ...s, vow: true }))}
                      />
                    ) : (
                      <span
                        className={`${styles.fallback} ${styles.fallbackVow}`}
                        data-hero="shotVow"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className={styles.caption}>
                    <span className={styles.workTitle}>Vow in Light</span>
                    <span className={styles.workSub}>Wedding / Okinawa</span>
                  </div>
                </div>
              </Link>

              {/* Medium — KOU (internal) */}
              <Link
                to={KOU_PATH}
                className={`${styles.frame} ${styles.md}`}
                data-hero="frameKou"
                aria-label="制作事例：KOU RYUI（詳細へ）"
              >
                <div className={styles.frameInner}>
                  <div className={styles.imgWrap}>
                    {!imgErr.kou ? (
                      <img
                        className={styles.workImg}
                        data-hero="shotKou"
                        src="/works/kouryui.webp"
                        alt="制作事例：KOU RYUI"
                        loading="lazy"
                        decoding="async"
                        onError={() => setImgErr((s) => ({ ...s, kou: true }))}
                      />
                    ) : (
                      <span
                        className={`${styles.fallback} ${styles.fallbackKou}`}
                        data-hero="shotKou"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className={styles.caption}>
                    <span className={styles.workTitle}>KOU RYUI</span>
                    <span className={styles.workSub}>
                      Ryukyu Costume / Naha / Okinawa
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.sideText} aria-hidden="true">
              Web Design / Okinawa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}