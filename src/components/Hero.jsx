// src/sections/Hero.jsx
import React, { useState } from "react";
import heroRoom from "../assets/hero-room.png";
import styles from "./Hero.module.css";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      className={`
        ${styles.heroRoot}
        relative w-full overflow-hidden
        bg-[#0a0a0a]
        h-[92vh] min-h-[680px]
        md:h-screen md:min-h-[760px]
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
        />
      </div>

      {/* TOP VEIL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-[116px] md:h-[128px]
          bg-[linear-gradient(180deg,rgba(6,6,6,0.48)_0%,rgba(6,6,6,0.24)_42%,transparent_100%)]
        "
      />

      {/* GLOBAL DEPTH */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.05)_30%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.38)_100%)]
        "
      />

      {/* LEFT TEXT SHADOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[72%]
          md:w-[58%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_40%,transparent_100%)]
        "
      />

      {/* LEFT EXTRA SOFT FOG */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[34%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.16)_0%,transparent_100%)]
        "
      />

      {/* RIGHT SUBTLE GUIDE LINE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-[15.5%] top-[21%] z-[1]
          hidden h-[50%] w-px lg:block
          bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.10)_18%,rgba(255,255,255,0.06)_78%,transparent_100%)]
        "
      />

      {/* EDGE VIGNETTE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          [box-shadow:inset_0_0_120px_rgba(0,0,0,0.16)]
          md:[box-shadow:inset_0_0_160px_rgba(0,0,0,0.18)]
        "
      />

      {/* FILM GRAIN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.035]
          [background-image:radial-gradient(rgba(255,255,255,0.42)_0.42px,transparent_0.42px)]
          [background-size:4px_4px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          absolute left-6 right-6 bottom-[3.1rem] z-[2]
          max-w-[650px]
          sm:left-7 sm:right-8
          md:left-16 md:bottom-24
          lg:left-20 lg:bottom-28
        "
      >
        {/* LABEL（見られ方：印象設計） */}
        <div className={`${styles.heroFade} ${styles.heroFade1}`}>
          <p
            className="
              mb-4
              text-[0.68rem] leading-none
              tracking-[0.28em] text-white/50
              sm:text-[0.72rem]
              md:mb-6
            "
          >
            OKINAWA / IMPRESSION DESIGN
          </p>
        </div>

        {/* HOOK */}
        <div className={`${styles.heroFade} ${styles.heroFade2} md:pl-[10px]`}>
          <p
            className="
              mb-4
              text-[0.86rem] font-light leading-[1.7]
              tracking-[0.12em] text-white/82
              sm:text-[0.92rem]
              md:mb-5 md:text-[1rem]
            "
          >
            整えることで、価値は伝わる。
          </p>
        </div>

        {/* TITLE */}
        <h1
          className={`
            ${styles.heroFade} ${styles.heroFade3}
            mb-5
            text-[2.18rem] font-light leading-[1.03]
            tracking-[0.2em] text-white
            sm:text-[2.5rem]
            md:mb-7 md:pl-[6px] md:text-[4.05rem]
            lg:text-[4.55rem]
          `}
        >
          GUSHIKEN
          <br />
          DESIGN
        </h1>

        {/* DIVIDER */}
        <div
          className={`
            ${styles.heroFade} ${styles.heroFade4}
            mb-6 h-px w-[72px]
            bg-white/44
            md:mb-8 md:ml-[6px] md:w-[80px]
          `}
        />

        {/* BODY */}
        <div className={`${styles.heroFade} ${styles.heroFade5} md:ml-[18px]`}>
          <div
            className="
              max-w-[30rem]
              text-[0.92rem] leading-[2]
              tracking-[0.015em] text-white/84
              sm:text-[0.96rem]
              md:text-[1.04rem] md:leading-[2.08]
            "
          >
            {/* ✅ SEO/安心（小さく残す） */}
            <p
              className="
                mb-3
                text-[0.76rem] tracking-[0.12em]
                text-white/56
                md:text-[0.84rem]
              "
            >
              沖縄のWeb制作・Webデザイン｜印象設計
            </p>

            <p className="mb-2">店舗・サロン・サービスの価値を、</p>
            <p>上品に、伝わりやすく整えるサイト制作</p>

            <p
              className="
                mt-5
                text-[0.82em] leading-[1.9]
                tracking-[0.08em] text-white/54
              "
            >
              見やすさと高級感を両立し、
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              信頼感のある印象へ整えます。
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR (Quiet metal line) */}
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