import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroSp.module.css";

gsap.registerPlugin(ScrollTrigger);

// ✅ 内部導線（SEO/回遊/迷子防止）
const VOW_PATH = "/works/vow-in-light";
const KOU_PATH = "/works/kou-ryui";

export default function HeroSP() {
  const rootRef = useRef(null);
  const [imgErr, setImgErr] = useState({ vow: false, kou: false });

  const WORKS = useMemo(
    () => [
      {
        key: "vow",
        title: "Vow in Light",
        sub: "Wedding / Okinawa",
        to: VOW_PATH,
        img: "/works/vow-in-light-entryherosp.webp",
        alt: "制作事例：Vow in Light",
      },
      {
        key: "kou",
        title: "KOU RYUI",
        sub: "Ryukyu Costume / Naha / Okinawa",
        to: KOU_PATH,
        img: "/works/kouryuisp.webp",
        alt: "制作事例：KOU RYUI",
      },
    ],
    []
  );

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const ctx = gsap.context(() => {
      if (reduce) return;

      const q = (sel) => root.querySelector(sel);
      const qa = (sel) => root.querySelectorAll(sel);

      gsap.set(q('[data-hero="bgPhoto"]'), { opacity: 0, y: 14 });
      gsap.set(q('[data-hero="bgType"]'), { opacity: 0 });

      // 読める“場所” → 文字 → 作品
      gsap.set(q('[data-hero="readPad"]'), { opacity: 0 });

      gsap.set(qa('[data-hero="leftItem"]'), {
        opacity: 0,
        y: 16,
        filter: "blur(0.12px)",
      });

      gsap.set(q('[data-hero="selected"]'), { opacity: 0, y: 10 });
      gsap.set(q('[data-hero="frameVow"]'), { opacity: 0, y: 34, scale: 0.988 });
      gsap.set(q('[data-hero="frameKou"]'), { opacity: 0, y: 46, scale: 0.988 });

      const tl = gsap.timeline({ defaults: { ease: [0.22, 1, 0.36, 1] } });

      tl.to(q('[data-hero="bgType"]'), { opacity: 1, duration: 0.9 }, 0)
        .to(q('[data-hero="bgPhoto"]'), { opacity: 1, y: 0, duration: 0.82 }, 0.02)
        .to(q('[data-hero="readPad"]'), { opacity: 1, duration: 0.55 }, 0.10)
        .to(
          qa('[data-hero="leftItem"]'),
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.66, stagger: 0.085 },
          0.14
        )
        .to(q('[data-hero="selected"]'), { opacity: 1, y: 0, duration: 0.54 }, 0.38)
        .to(q('[data-hero="frameVow"]'), { opacity: 1, y: 0, scale: 1, duration: 0.76 }, 0.44)
        .to(q('[data-hero="frameKou"]'), { opacity: 1, y: 0, scale: 1, duration: 0.76 }, 0.52);

      // 深度だけ（動かし過ぎない）
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: 0.55,
        invalidateOnRefresh: true,
        animation: gsap
          .timeline()
          .to(q('[data-hero="bgPhoto"]'), { y: -10 }, 0)
          .to(q('[data-hero="frameVow"]'), { y: -6 }, 0)
          .to(q('[data-hero="frameKou"]'), { y: -4 }, 0),
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero-sp" ref={rootRef} className={styles.root} aria-label="GUSHIKEN DESIGN Hero (SP)">
      {/* 背景：棚＋花瓶（右下） */}
      <div
        className={styles.bgPhoto}
        data-hero="bgPhoto"
        aria-hidden="true"
        style={{ backgroundImage: "url(/images/shelf-vase1.webp)" }}
      />

      {/* 巨大タイポ（気配：主張落とす） */}
      <div className={styles.bgType} data-hero="bgType" aria-hidden="true">
        <span className={styles.bgWordTop}>GUSHIKEN</span>
        <span className={styles.bgWordBottom}>DESIGN</span>
      </div>

      <div className={styles.content}>
        {/* テキストの下に可読性膜（箱に見せない） */}
        <div className={styles.readPad} data-hero="readPad" aria-hidden="true" />

        {/* テキスト */}
        <div className={styles.left}>
          <p className={styles.kicker} data-hero="leftItem">
            QUIET / ORDER / IMPRESSION
          </p>

          <p className={styles.hook} data-hero="leftItem">
            空気から、設計する。
          </p>

          <h1 className={styles.h1} data-hero="leftItem">
            Gushiken
            <br />
            Design
          </h1>

          <p className={styles.copy} data-hero="leftItem">
            <span className={styles.copyMeta}>沖縄の上質なWebデザイン・ホームページ制作</span>
            <span className={styles.copyText}>
              写真が良いのに、サイトで安く見える。
              <br />
              そのギャップを埋めて、問い合わせまで迷わない形に整えます。
            </span>
          </p>

          <a className={styles.cta} href="#contact" data-hero="leftItem">
            <span>相談する</span>
          </a>

          {/* ✅ SPでも「一行の安心」 */}
          <p className={styles.ctaNote} data-hero="leftItem">
            返信目安：24時間以内 / オンライン可
          </p>
        </div>

        {/* 作品ステージ */}
        <div className={styles.stage}>
          <p className={styles.selected} data-hero="selected">
            SELECTED WORKS
          </p>

          <div className={styles.frames}>
            {/* Vow（奥・大） */}
            <Link
              to={WORKS[0].to}
              className={`${styles.frame} ${styles.lg}`}
              data-hero="frameVow"
              aria-label="制作事例：Vow in Light（詳細へ）"
            >
              <div className={styles.frameInner}>
                <div className={styles.imgWrap}>
                  {!imgErr.vow ? (
                    <img
                      className={styles.workImg}
                      src={WORKS[0].img}
                      alt={WORKS[0].alt}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      draggable="false"
                      onError={() => setImgErr((s) => ({ ...s, vow: true }))}
                    />
                  ) : (
                    <span className={`${styles.fallback} ${styles.fallbackVow}`} aria-hidden="true" />
                  )}
                </div>
                <div className={styles.caption}>
                  <span className={styles.workTitle}>{WORKS[0].title}</span>
                  <span className={styles.workSub}>{WORKS[0].sub}</span>
                </div>
              </div>
            </Link>

            {/* KOU（手前） */}
            <Link
              to={WORKS[1].to}
              className={`${styles.frame} ${styles.md}`}
              data-hero="frameKou"
              aria-label="制作事例：KOU RYUI（詳細へ）"
            >
              <div className={styles.frameInner}>
                <div className={styles.imgWrap}>
                  {!imgErr.kou ? (
                    <img
                      className={styles.workImg}
                      src={WORKS[1].img}
                      alt={WORKS[1].alt}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      onError={() => setImgErr((s) => ({ ...s, kou: true }))}
                    />
                  ) : (
                    <span className={`${styles.fallback} ${styles.fallbackKou}`} aria-hidden="true" />
                  )}
                </div>
                <div className={styles.caption}>
                  <span className={styles.workTitle}>{WORKS[1].title}</span>
                  <span className={styles.workSub}>{WORKS[1].sub}</span>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.scrollHint} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}