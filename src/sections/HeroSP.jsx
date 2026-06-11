// src/sections/HeroSP.jsx
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroSp.module.css";

gsap.registerPlugin(ScrollTrigger);

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
        w: 900,
        h: 1200,
      },
      {
        key: "kou",
        title: "KOU RYUI",
        sub: "Ryukyu Costume / Naha / Okinawa",
        to: KOU_PATH,
        img: "/works/kouryuisp.webp",
        alt: "制作事例：KOU RYUI",
        w: 900,
        h: 1200,
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
      gsap.set(q('[data-hero="readPad"]'), { opacity: 0 });

      gsap.set(qa('[data-hero="leftItem"]'), { opacity: 0, y: 16 });

      gsap.set(q('[data-hero="frameVow"]'), { opacity: 0, y: 34, scale: 0.988 });
      gsap.set(q('[data-hero="frameKou"]'), { opacity: 0, y: 46, scale: 0.988 });

      const tl = gsap.timeline({ defaults: { ease: [0.22, 1, 0.36, 1] } });

      tl.to(q('[data-hero="bgType"]'), { opacity: 1, duration: 0.9 }, 0)
        .to(q('[data-hero="bgPhoto"]'), { opacity: 1, y: 0, duration: 0.82 }, 0.02)
        .to(q('[data-hero="readPad"]'), { opacity: 1, duration: 0.55 }, 0.10)
        .to(qa('[data-hero="leftItem"]'), { opacity: 1, y: 0, duration: 0.66, stagger: 0.085 }, 0.14)
        .to(q('[data-hero="frameVow"]'), { opacity: 1, y: 0, scale: 1, duration: 0.76 }, 0.40)
        .to(q('[data-hero="frameKou"]'), { opacity: 1, y: 0, scale: 1, duration: 0.76 }, 0.48);

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
    <section
      id="hero-sp"
      ref={rootRef}
      className={styles.root}
      aria-label="GUSHIKEN DESIGN Hero (SP)"
    >
      <div
        className={styles.bgPhoto}
        data-hero="bgPhoto"
        aria-hidden="true"
        style={{ backgroundImage: "url(/images/shelf-vase1.webp)" }}
      />

      <div className={styles.bgType} data-hero="bgType" aria-hidden="true">
        <span className={styles.bgWordTop}>GUSHIKEN</span>
        <span className={styles.bgWordBottom}>DESIGN</span>
      </div>

      <div className={styles.content}>
        <div className={styles.readPad} data-hero="readPad" aria-hidden="true" />

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
            <span className="visually-hidden">
              ｜沖縄のWebデザイン・ホームページ制作
            </span>
          </h1>

          <p className={styles.copy} data-hero="leftItem">
            <span className={styles.copyMeta}>
              沖縄の上質なWebデザイン・ホームページ制作
            </span>
            <span className={styles.copyText}>
              写真が良いのに、サイトで安く見える。
              <br />
              そのギャップを埋めて、問い合わせまで迷わない形に整えます。
            </span>
          </p>

          <div className={styles.ctaRow} data-hero="leftItem">
            <Link className={styles.cta} to="/contact" aria-label="お問い合わせへ">
              <span>相談する</span>
            </Link>
          </div>

          <p className={styles.ctaNote} data-hero="leftItem">
            返信目安：24時間以内 / オンライン可
          </p>
        </div>

        <div className={styles.stage}>
          <div className={styles.frames}>
            <Link
              to={WORKS[0].to}
              className={`${styles.frame} ${styles.lg}`}
              aria-label="制作事例：Vow in Light（詳細へ）"
            >
              <div className={styles.frameAnim} data-hero="frameVow">
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
                        width={WORKS[0].w}
                        height={WORKS[0].h}
                        sizes="(max-width: 420px) 76vw, 360px"
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
              </div>
            </Link>

            <Link
              to={WORKS[1].to}
              className={`${styles.frame} ${styles.md}`}
              aria-label="制作事例：KOU RYUI（詳細へ）"
            >
              <div className={styles.frameAnim} data-hero="frameKou">
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
                        width={WORKS[1].w}
                        height={WORKS[1].h}
                        sizes="(max-width: 420px) 66vw, 310px"
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
              </div>
            </Link>
          </div>

          <div className={styles.scrollHint} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}