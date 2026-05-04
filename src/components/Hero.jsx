import React, { useState } from "react";
import heroRoom from "../assets/hero-room.png";
import styles from "./Hero.module.css";

function HeroTitleSvg() {
  return (
    <img
      className={styles.heroTitleImg}
      src="/typography/Gushiken Design222.svg"
      alt=""
      aria-hidden="true"
      draggable="false"
      loading="eager"
      decoding="async"
    />
  );
}

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleScrollDown = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    window.scrollBy({
      top: window.innerHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <section
      className={`
        ${styles.heroRoot}
        relative w-full overflow-hidden
        bg-[#0a0a0a]
        h-[92svh] min-h-[680px]
        md:h-[100svh] md:min-h-[760px]
      `}
      data-loaded={imgLoaded ? "true" : "false"}
      aria-label="GUSHIKEN DESIGN ヒーローセクション"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroRoom}
          alt="沖縄の上質なWebデザイン・ホームページ制作｜GUSHIKEN DESIGN"
          className={`
            ${styles.heroImage}
            ${styles.heroImageReveal}
            h-full w-full object-cover
            object-[58%_center]
            md:object-center
            select-none
          `}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
        />
      </div>

      {/* TOP VEIL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-[116px] md:h-[128px]
          bg-[linear-gradient(180deg,rgba(6,6,6,0.52)_0%,rgba(6,6,6,0.26)_42%,transparent_100%)]
        "
      />

      {/* GLOBAL DEPTH */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.06)_30%,rgba(0,0,0,0.22)_72%,rgba(0,0,0,0.44)_100%)]
        "
      />

      {/* LEFT TEXT SHADOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[80%]
          md:w-[64%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.26)_42%,transparent_100%)]
        "
      />

      {/* LEFT EXTRA SOFT FOG */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[42%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.16)_0%,transparent_100%)]
        "
      />

      {/* RIGHT SUBTLE GUIDE LINE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-[15.5%] top-[21%] z-[1]
          hidden h-[50%] w-px lg:block
          bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.10)_18%,rgba(255,255,255,0.05)_78%,transparent_100%)]
        "
      />

      {/* EDGE VIGNETTE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          [box-shadow:inset_0_0_120px_rgba(0,0,0,0.18)]
          md:[box-shadow:inset_0_0_170px_rgba(0,0,0,0.20)]
        "
      />

      {/* FILM GRAIN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.03]
          [background-image:radial-gradient(rgba(255,255,255,0.40)_0.42px,transparent_0.42px)]
          [background-size:4px_4px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          absolute left-6 right-6 bottom-[3.1rem] z-[2]
          max-w-[680px]
          sm:left-7 sm:right-8
          md:left-16 md:bottom-24
          lg:left-20 lg:bottom-28
        "
      >
        {/* LABEL */}
        <div className={`${styles.heroFade} ${styles.heroFade1}`}>
          <p
            className="
              mb-4
              text-[0.64rem] leading-none
              tracking-[0.22em] text-white/38
              sm:text-[0.68rem]
              md:mb-6
            "
          >
            Okinawa / Web Design / Impression
          </p>
        </div>

        {/* HOOK */}
        <div className={`${styles.heroFade} ${styles.heroFade2} md:pl-[14px]`}>
          <p
            className="
              mb-4
              font-normal leading-[1.58]
              tracking-[0.08em]
              text-[clamp(1.12rem,1.12vw,1.34rem)]
              text-white/90
              md:mb-5
              [text-shadow:0_1px_16px_rgba(0,0,0,0.34)]
            "
          >
            空気から、設計する。
          </p>
        </div>

        {/* TITLE */}
        <h1
          className={`
            ${styles.heroLogoReveal}
            ${styles.heroTitleWrap}
            mb-5
            md:mb-6 md:pl-[14px]
          `}
          aria-label="GUSHIKEN DESIGN"
        >
          <span className="sr-only">GUSHIKEN DESIGN</span>
          <HeroTitleSvg />
        </h1>

        {/* DIVIDER */}
        <div
          className={`
            ${styles.heroFade} ${styles.heroFade4}
            mb-6 h-px w-[72px]
            bg-[linear-gradient(90deg,rgba(255,255,255,0.42),rgba(255,255,255,0.16),rgba(255,255,255,0))]
            md:mb-8 md:ml-[14px] md:w-[92px]
          `}
        />

        {/* BODY */}
        <div className={`${styles.heroFade} ${styles.heroFade5} md:ml-[14px]`}>
          <div className="[text-shadow:0_1px_14px_rgba(0,0,0,0.34)]">
            {/* meta */}
            <p
              className="
                mb-3
                text-[0.76rem] leading-[1.7]
                tracking-[0.11em]
                text-white/46
                md:text-[0.90rem]
              "
            >
              沖縄の上質なWebデザイン・ホームページ制作
            </p>

            {/* main */}
            <div
              className="
                max-w-[36rem]
                text-[clamp(0.96rem,1.00vw,1.14rem)]
                leading-[1.86]
                tracking-[0.012em]
                text-white/82
                md:leading-[1.90]
              "
            >
              <p className="mb-2">
                商品・空間・サービスの印象を上質に伝えるWebデザイン。
              </p>
              <p className="mb-2">
                写真、<span className="text-white/86 font-normal">余白</span>、言葉、導線まで整え、
              </p>
              <p>安っぽく見せず、価値が自然に伝わるWebサイトへ。</p>
            </div>

            {/* sub */}
            <p
              className="
                mt-6
                text-[0.88rem] leading-[1.86]
                tracking-[0.06em]
                text-white/46
                md:text-[0.94rem]
              "
            >
              見やすく、迷わず、判断しやすい。
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              信頼感のある第一印象を設計します。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={`${styles.heroFade} ${styles.heroFade6} md:ml-[14px]`}>
          <a href="#contact" className={styles.heroCta}>
            <span>制作を相談する</span>
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              aria-hidden="true"
              className={styles.heroCtaArrow}
            >
              <path
                d="M9 1L14 5M14 5L9 9M14 5H1"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        type="button"
        className={`
          ${styles.heroFade} ${styles.heroFade5}
          ${styles.heroScrollButton}
          absolute bottom-7 left-1/2 z-[2]
          -translate-x-1/2
        `}
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <div className={styles.heroScrollLine} />
      </button>

      {/* BOTTOM BREATH */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-[1]
          h-[180px] md:h-[210px]
          bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.10)_34%,rgba(0,0,0,0.30)_100%)]
        "
      />

      {/* BOTTOM SOFT SHADOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-[1]
          h-[72px]
          bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.12)_100%)]
        "
      />
    </section>
  );
}