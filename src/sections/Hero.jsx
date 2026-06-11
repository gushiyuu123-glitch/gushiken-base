// src/sections/Hero.jsx
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

      // 背景/フレームだけ初期化（文字は初期表示のまま）
      gsap.set(q('[data-hero="bgPhoto"]'), { opacity: 0, y: 18 });
      gsap.set(q('[data-hero="bgType"]'), { opacity: 0 });
      gsap.set(q('[data-hero="selected"]'), { opacity: 0, y: 10 });

      gsap.set(q('[data-hero="frameVow"]'), { opacity: 0, y: 42, scale: 0.985 });
      gsap.set(q('[data-hero="frameKou"]'), { opacity: 0, y: 54, scale: 0.985 });

      const tl = gsap.timeline({ defaults: { ease: [0.22, 1, 0.36, 1] } });

      tl.to(q('[data-hero="bgType"]'), { opacity: 1, duration: 0.9 }, 0)
        .to(q('[data-hero="bgPhoto"]'), { opacity: 1, y: 0, duration: 0.9 }, 0)
        .to(q('[data-hero="selected"]'), { opacity: 1, y: 0, duration: 0.58 }, 0.18)
        .to(q('[data-hero="frameVow"]'), { opacity: 1, y: 0, scale: 1, duration: 0.78 }, 0.22)
        .to(q('[data-hero="frameKou"]'), { opacity: 1, y: 0, scale: 1, duration: 0.78 }, 0.30);

      // Ken Burns（窓パララックス）
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

      bindKenBurns('[data-hero="shotVow"]', '[data-hero="frameVow"]', amt * 0.55, -amt);
      bindKenBurns('[data-hero="shotKou"]', '[data-hero="frameKou"]', amt * 0.35, -amt * 0.8);

      // 深度だけ
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
    <header
      id="hero"
      ref={rootRef}
      className={styles.heroRoot}
      aria-labelledby="hero-title"
    >
      <div className={styles.bgPhoto} data-hero="bgPhoto" aria-hidden="true" />

      <div className={styles.bgType} data-hero="bgType" aria-hidden="true">
        <div className={`${styles.bgWord} ${styles.bgWordTop}`} data-hero="wordTop">
          GUSHIKEN
        </div>
        <div className={`${styles.bgWord} ${styles.bgWordBottom}`} data-hero="wordBottom">
          DESIGN
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.kicker} data-hero="leftItem">
            空気から、設計する。
          </p>
          <div className={styles.kickerRule} data-hero="leftItem" />

          {/* ✅ h1（常に1つだけ） */}
          <h1 id="hero-title" className={styles.h1} data-hero="leftItem">
            Gushiken
            <br />
            Design
            <span className="visually-hidden">
              ｜沖縄のWebデザイン・ホームページ制作
            </span>
          </h1>

          <div className={styles.copy} data-hero="leftItem">
            <p className={styles.copyMeta}>
              沖縄（浦添拠点）の実店舗向けに、HP/LPを設計→公開まで。
            </p>

            <p>写真が良いのに、サイトで安く見える。</p>
            <p>そのギャップを埋めて、問い合わせまで迷わない形に整えます。</p>

            <p className={styles.copySub}>
              見やすく、迷わず、判断しやすい。信頼感のある第一印象を設計します。
            </p>
          </div>

          <div className={styles.ctaRow} data-hero="leftItem">
            <Link
              to="/contact"
              className={styles.cta}
              aria-label="制作の相談（お問い合わせページへ）"
            >
              <span>制作を相談する</span>
            </Link>
          </div>

          <p className={styles.ctaNote} data-hero="leftItem">
            返信目安：24時間以内 / オンライン可
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.selectedLabel} data-hero="selected">
            SELECTED WORKS
          </p>

          <div className={styles.shelfWrap}>
            <div className={styles.frames}>
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
                        width="900"
                        height="1200"
                        sizes="(max-width: 768px) 70vw, 420px"
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
                        width="900"
                        height="1200"
                        sizes="(max-width: 768px) 60vw, 360px"
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
    </header>
  );
}