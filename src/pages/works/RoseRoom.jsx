// src/pages/works/RoseRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoseRoom() {
  const imgRef = useRef(null);

  /* ============================================
     GSAP — 画像の“静かな呼吸”（最適スケール）
  ============================================ */
  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">

      {/* ===============================
          背景（白膜 × 微粒ノイズ）
      =============================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-b
          from-white
          via-[rgba(255,249,251,0.96)]
          to-[rgba(245,240,242,0.90)]
        "
      />

      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          opacity-[0.035]
          bg-[url('/grain/noise-light.png')] bg-cover bg-center
        "
      />

      {/* ===============================
          HERO（SP最適・PCバランス最強）
      =============================== */}
      <section className="relative pt-[18vh] pb-[7vh] flex flex-col items-center">

        {/* メイン縦長イメージ */}
        <img
          ref={imgRef}
          src="/works1/rose-vein.png"
          alt="Rose Veil Room — Visual Study"
          className="
            w-[92vw] md:w-[38vw]
            h-auto rounded-[14px]
            opacity-[0.98]
            select-none
          "
        />

        {/* タイトル & コピー */}
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
              max-w-[440px] mx-auto
            "
          >
            あえて飾らず、ただそこに咲く花のように。  
            光と空気が“最初の気配”だけを描く部屋。
          </p>
        </div>
      </section>

      {/* ===============================
          CTA（薄膜ライン × 高見え設計）
      =============================== */}
      <div
        className="
          relative z-20 px-10 lg:px-32 py-24 pb-[25vh]
          flex flex-col md:flex-row
          items-center justify-center
          gap-8 md:gap-16
        "
      >
        {/* 香りの世界リンク */}
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
          香りの世界はこちらから
        </a>

        {/* 作品一覧 */}
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
