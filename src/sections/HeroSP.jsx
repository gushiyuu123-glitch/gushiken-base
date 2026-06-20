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
        sub: "Bridal / Photowedding",
        to: VOW_PATH,
        img: "/works/vow-in-light-entryherosp.webp",
        alt: "Vow in Light ブライダル・フォトウェディング向けWebサイト制作事例",
        w: 900,
        h: 1200,
      },
      {
        key: "kou",
        title: "KOU RYUI",
        sub: "Ryukyu Costume / Culture",
        to: KOU_PATH,
        img: "/works/kouryuisp.webp",
        alt: "KOU RYUI 琉装・沖縄文化体験向けWebサイト制作事例",
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

      gsap.set(q('[data-hero="frameVow"]'), {
        opacity: 0,
        y: 34,
        scale: 0.988,
      });

      gsap.set(q('[data-hero="frameKou"]'), {
        opacity: 0,
        y: 46,
        scale: 0.988,
      });

      const tl = gsap.timeline({ defaults: { ease: [0.22, 1, 0.36, 1] } });

      tl.to(q('[data-hero="bgType"]'), { opacity: 1, duration: 0.9 }, 0)
        .to(
          q('[data-hero="bgPhoto"]'),
          { opacity: 1, y: 0, duration: 0.82 },
          0.02
        )
        .to(q('[data-hero="readPad"]'), { opacity: 1, duration: 0.55 }, 0.1)
        .to(
          qa('[data-hero="leftItem"]'),
          {
            opacity: 1,
            y: 0,
            duration: 0.66,
            stagger: 0.085,
          },
          0.14
        )
        .to(
          q('[data-hero="frameVow"]'),
          { opacity: 1, y: 0, scale: 1, duration: 0.76 },
          0.4
        )
        .to(
          q('[data-hero="frameKou"]'),
          { opacity: 1, y: 0, scale: 1, duration: 0.76 },
          0.48
        );

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
      aria-labelledby="hero-sp-title"
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
            OKINAWA / ONLINE WEB DESIGN
          </p>

          <p className={styles.hook} data-hero="leftItem">
            選ばれる入口を、空気から設計する。
          </p>

          <h1 id="hero-sp-title" className={styles.h1} data-hero="leftItem">
            Gushiken
            <br />
            Design
            <span className="visually-hidden">
              ｜沖縄県浦添市を拠点に、沖縄県内・全国対応でホームページ制作・LP制作・Webデザインを行う個人制作スタジオ
            </span>
          </h1>

          <div className={styles.copy} data-hero="leftItem">
            <p className={styles.copyMeta}>
              沖縄県浦添市 / 全国対応 / HP・LP制作
            </p>

            <p className={styles.copyLead}>
              写真・言葉・余白を整えて、
              <br />
              予約・問い合わせにつながるWebへ。
            </p>

            <p className={styles.copySub}>
              美容室・飲食店・ブライダルなど、
              <br />
              印象で選ばれる業種に対応。
            </p>

            <p className="visually-hidden">
              沖縄県内・全国オンライン対応で、ホームページ制作・LP制作・Webデザインを行います。美容室、飲食店、ブライダル、観光体験、タトゥースタジオなど、印象で選ばれる業種に向けて、構成・デザイン・実装まで一貫して制作します。
            </p>
          </div>

          <div className={styles.ctaRow} data-hero="leftItem">
            <Link
              className={styles.cta}
              to="/contact"
              aria-label="ホームページ制作・LP制作の相談をする"
            >
              <span>相談する</span>
            </Link>
          </div>

          <p className={styles.ctaNote} data-hero="leftItem">
            返信目安：24時間以内 / 沖縄県内・全国オンライン対応
          </p>
        </div>

        <div className={styles.stage}>
          <div className={styles.frames}>
            <Link
              to={WORKS[0].to}
              className={`${styles.frame} ${styles.lg}`}
              aria-label="制作事例：Vow in Light ブライダル・フォトウェディング向けWebサイト制作事例へ"
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
                        onError={() =>
                          setImgErr((s) => ({ ...s, vow: true }))
                        }
                      />
                    ) : (
                      <span
                        className={`${styles.fallback} ${styles.fallbackVow}`}
                        aria-hidden="true"
                      />
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
              aria-label="制作事例：KOU RYUI 琉装・沖縄文化体験向けWebサイト制作事例へ"
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
                        onError={() =>
                          setImgErr((s) => ({ ...s, kou: true }))
                        }
                      />
                    ) : (
                      <span
                        className={`${styles.fallback} ${styles.fallbackKou}`}
                        aria-hidden="true"
                      />
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