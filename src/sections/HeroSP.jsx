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
    if (!root) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce) return undefined;

    let rafId = 0;

    const ctx = gsap.context(() => {
      const q = (sel) => root.querySelector(sel);
      const qa = (sel) => gsap.utils.toArray(root.querySelectorAll(sel));

      const bgPhoto = q('[data-hero="bgPhoto"]');
      const bgType = q('[data-hero="bgType"]');
      const readPad = q('[data-hero="readPad"]');

      const leftItems = qa('[data-hero="leftItem"]');
      const frameVow = q('[data-hero="frameVow"]');
      const frameKou = q('[data-hero="frameKou"]');

      const introTargets = [
        bgPhoto,
        bgType,
        readPad,
        frameVow,
        frameKou,
        ...leftItems,
      ].filter(Boolean);

      gsap.set(introTargets, {
        force3D: true,
        backfaceVisibility: "hidden",
        willChange: "transform, opacity",
      });

      gsap.set(bgPhoto, {
        autoAlpha: 0,
        y: 10,
      });

      gsap.set(bgType, {
        autoAlpha: 0,
      });

      gsap.set(readPad, {
        autoAlpha: 0,
      });

      gsap.set(leftItems, {
        autoAlpha: 0,
        y: 10,
      });

      gsap.set(frameVow, {
        autoAlpha: 0,
        y: 22,
      });

      gsap.set(frameKou, {
        autoAlpha: 0,
        y: 28,
      });

      const createScrollMotion = () => {
        const scrollTl = gsap.timeline({
          defaults: {
            ease: "none",
            overwrite: "auto",
            force3D: true,
          },
        });

        if (bgPhoto) scrollTl.to(bgPhoto, { y: -8 }, 0);
        if (frameVow) scrollTl.to(frameVow, { y: -5 }, 0);
        if (frameKou) scrollTl.to(frameKou, { y: -3 }, 0);

        ScrollTrigger.create({
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.45,
          invalidateOnRefresh: true,
          animation: scrollTl,
        });

        rafId = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          overwrite: "auto",
          force3D: true,
        },
        onComplete: () => {
          gsap.set(introTargets, {
            clearProps: "willChange",
          });

          createScrollMotion();
        },
      });

      tl.to(bgType, { autoAlpha: 1, duration: 0.58 }, 0)
        .to(bgPhoto, { autoAlpha: 1, y: 0, duration: 0.62 }, 0)
        .to(readPad, { autoAlpha: 1, duration: 0.42 }, 0.08)
        .to(
          leftItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.46,
            stagger: 0.052,
          },
          0.12
        )
        .to(
          frameVow,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
          },
          0.34
        )
        .to(
          frameKou,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
          },
          0.42
        );
    }, root);

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
    };
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
              沖縄県浦添市 / 全国オンライン対応 / HP・LP制作
            </p>

            <p className={styles.copyLead}>
              見た人の記憶に残り、
              <br />
              予約・問い合わせのきっかけになる
              <br />
              Webサイトへ。
            </p>

            <p className={styles.copySub}>
              美容室・飲食店・ブライダル・観光体験・タトゥースタジオなど、
              <br />
              世界観や体験価値が大切な業種に向けて、設計から公開まで形にします。
            </p>

            <p className="visually-hidden">
              沖縄県内・全国オンライン対応で、ホームページ制作・LP制作・Webデザインを行います。
              美容室、飲食店、ブライダル、観光体験、タトゥースタジオなど、
              サービスの魅力や事業の強みを整理し、予約・問い合わせにつながるWebサイトを制作します。
            </p>
          </div>

          <div className={styles.ctaRow} data-hero="leftItem">
            <Link
              className={styles.cta}
              to="/contact"
              aria-label="ホームページ制作・LP制作の相談をする"
            >
              <span>制作を相談する</span>
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