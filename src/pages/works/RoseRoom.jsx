// src/pages/works/RoseRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoseRoom() {
  const imgRef = useRef(null);
  const glowRef = useRef(null);
  const slitLeft = useRef(null);
  const slitRight = useRef(null);

  /* =====================================================
        GSAP：バラ画像の “呼吸 × 光のゆらぎ”
  ===================================================== */
  useEffect(() => {
    if (!imgRef.current) return;

    // スクロールによる極薄スケール
    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 1.055,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // 呼吸アニメーション（ゆらぎ）
    gsap.to(imgRef.current, {
      scale: 1.03,
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // 光膜のゆらぎ
    gsap.to(glowRef.current, {
      opacity: 0.08,
      duration: 5.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 左右スリットの揺れ
    gsap.to([slitLeft.current, slitRight.current], {
      opacity: 0.06,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">

      {/* ===============================
          背景：白膜 × 微粒ノイズ
      =============================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-b
          from-white
          via-[rgba(255,250,252,0.96)]
          to-[rgba(245,240,242,0.88)]
        "
      />
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          opacity-[0.038]
          bg-[url('/grain/noise-light.png')] bg-cover bg-center
        "
      />

      {/* ===============================
          HERO：香りの“前室”
      =============================== */}
      <section className="relative pt-[18vh] pb-[7vh] flex flex-col items-center">

        {/* --- 光膜（白い薄膜） --- */}
        <div
          ref={glowRef}
          aria-hidden
          className="
            absolute
            w-[94vw] md:w-[40vw]
            h-[100%]
            rounded-[18px]
            bg-white/5
            blur-[18px]
            z-[1]
          "
        />

        {/* --- 左スリット --- */}
        <div
          ref={slitLeft}
          aria-hidden
          className="
            absolute left-0 top-0 bottom-0
            w-[22%]
            bg-gradient-to-r
            from-transparent
            via-white/7
            to-transparent
            mix-blend-screen
            z-[2]
          "
        />

        {/* --- 右スリット --- */}
        <div
          ref={slitRight}
          aria-hidden
          className="
            absolute right-0 top-0 bottom-0
            w-[22%]
            bg-gradient-to-l
            from-transparent
            via-white/7
            to-transparent
            mix-blend-screen
            z-[2]
          "
        />

        {/* --- バラ画像（主役） --- */}
        <img
          ref={imgRef}
          src="/works1/rose-vein.png"
          alt="Rose Veil Room — Visual Study"
          className="
            relative z-[3]
            w-[92vw] md:w-[38vw]
            h-auto
            rounded-[14px]
            opacity-[0.98]
            shadow-[0_0_22px_rgba(255,255,255,0.08)]
            select-none
          "
        />

        {/* --- タイトル & コピー --- */}
        <div className="mt-10 text-center px-6 md:px-0">
          <h1
            className="
              font-serif
              text-[1.95rem] md:text-[3.1rem]
              tracking-[0.14em] md:tracking-[0.22em]
              text-[rgba(60,60,60,0.88)]
              mb-5
            "
          >
            ROSE VEIL — ROOM
          </h1>

          <p
            className="
              text-[0.95rem] md:text-[1.08rem]
              leading-[1.75] md:leading-[1.9]
              text-[rgba(75,75,75,0.70)]
              max-w-[460px] mx-auto
            "
          >
            咲く前の花のように、  
            ただ静かに“気配だけ”が満ちていく部屋。  
            光と空気が香りの輪郭をそっと描きはじめる前室です。
          </p>
        </div>
      </section>

      {/* ===============================
          CTA（高級見えの薄膜ライン）
      =============================== */}
      <div
        className="
          relative z-20 px-10 lg:px-32 py-24 pb-[25vh]
          flex flex-col md:flex-row
          items-center justify-center
          gap-8 md:gap-16
        "
      >
        <a
          href="https://rose-veil.vercel.app/"
          target="_blank"
          className="
            text-[rgba(85,85,85,0.75)]
            text-[0.9rem] md:text-[0.82rem]
            tracking-[0.26em] md:tracking-[0.30em]
            pb-[4px]
            border-b border-[rgba(85,85,85,0.18)]
            hover:text-[rgba(40,40,40,0.9)]
            hover:border-[rgba(40,40,40,0.26)]
            transition-all duration-300
          "
        >
          香りの世界はこちら
        </a>

        <Link
          to="/works"
          className="
            text-[rgba(90,90,90,0.60)]
            text-[0.88rem] md:text-[0.78rem]
            tracking-[0.26em] md:tracking-[0.30em]
            pb-[4px]
            border-b border-[rgba(90,90,90,0.14)]
            hover:text-[rgba(60,60,60,0.9)]
            hover:border-[rgba(60,60,60,0.26)]
            transition-all duration-300
          "
        >
          作品一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
