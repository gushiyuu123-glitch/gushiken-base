// src/sections/Hero.jsx
import React, { useState } from "react";
import heroRoom from "../assets/hero-room.png";
import styles from "./Hero.module.css";

function HeroTitleSvg() {
  return (
    <img
      className={styles.heroTitleImg}
      src="/typography/GushikenDesign.svg"
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
          alt="沖縄のWeb制作・Webデザイン｜GUSHIKEN DESIGN"
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
          max-w-[640px]
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
              text-[0.68rem] leading-none
              tracking-[0.28em] text-white/56
              sm:text-[0.72rem]
              md:mb-6
            "
          >
            OKINAWA / WEB DESIGN / IMPRESSION
          </p>
        </div>

        {/* HOOK */}
        <div className={`${styles.heroFade} ${styles.heroFade2} md:pl-[10px]`}>
          <p
            className="
              mb-4
              text-[0.86rem] font-light leading-[1.7]
              tracking-[0.12em] text-white/90
              sm:text-[0.92rem]
              md:mb-5 md:text-[1rem]
            "
          >
            整えることで、価値は伝わる。
          </p>
        </div>

        {/* TITLE (LOGO ONLY SMOOTH WIPE) */}
        <h1
          className={`
            ${styles.heroLogoReveal}
            ${styles.heroTitleWrap}
            mb-5
            md:mb-6 md:pl-[4px]
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
            bg-[linear-gradient(90deg,rgba(255,255,255,0.58),rgba(255,255,255,0.24),rgba(255,255,255,0))]
            md:mb-8 md:ml-[4px] md:w-[84px]
          `}
        />

        {/* BODY */}
        <div className={`${styles.heroFade} ${styles.heroFade5} md:ml-[14px]`}>
          <div
            className="
              max-w-[31rem]
              text-[0.94rem] leading-[2]
              tracking-[0.015em] text-white/90
              sm:text-[0.98rem]
              md:text-[1.05rem] md:leading-[2.08]
            "
          >
            <p
              className="
                mb-3
                text-[0.76rem] leading-[1.7]
                tracking-[0.12em]
                text-white/62
                md:text-[0.84rem]
              "
            >
              沖縄のWeb制作・Webデザイン｜美容・店舗・EC
            </p>

            <p className="mb-2">余白、写真、言葉、導線まで整え、</p>
            <p>価値が自然に伝わるWebサイトへ。</p>

            <p
              className="
                mt-5
                text-[0.82em] leading-[1.9]
                tracking-[0.08em] text-white/62
              "
            >
              見やすく、迷わず、安っぽくならない。
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              信頼感のある第一印象を設計します。
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        aria-hidden="true"
        className={`
          ${styles.heroFade} ${styles.heroFade5}
          absolute bottom-7 left-1/2 z-[2]
          -translate-x-1/2
        `}
      >
        <div className={styles.heroScrollLine} />
      </div>

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