// src/pages/works/RoseRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoseRoom() {
  const imgRef = useRef(null);

  /* -------------------------------
     GSAP：画像の静かなスケール
  --------------------------------*/
  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">

      {/* ===== 背景レイヤー ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-gradient-to-b
          from-white
          via-[rgba(255,248,250,0.95)]
          to-[rgba(245,240,242,0.90)]
        "
      />

      <div
        aria-hidden
        className="
          absolute inset-0 z-0 opacity-[0.03]
          bg-[url('/grain/noise-light.png')] bg-cover bg-center
        "
      />

      {/* ===========================
          HERO 新構図（SP最適）
      =========================== */}
      <section className="relative pt-[10vh] pb-[6vh] flex flex-col items-center">

        {/* 上部の縦長イメージ（中心） */}
        <img
          ref={imgRef}
          src="/works1/rose-vein.png"
          alt="Rose Veil Room Visual"
          className="
            w-[100vw] h-auto
            md:w-[38vw]
            rounded-xl
            opacity-[0.98]
          "
        />

        {/* タイトル（画像直下へ変更） */}
        <div className="mt-10 text-center px-6 md:px-0">
          <h1
            className="
              font-serif
              text-[2rem] md:text-[3.2rem]
              tracking-[0.16em] md:tracking-[0.22em]
              text-[rgba(55,55,55,0.9)]
              mb-4
            "
          >
            ROSE VEIL — ROOM
          </h1>

          <p
            className="
              text-[0.95rem] md:text-[1.05rem]
              leading-relaxed md:leading-[1.85]
              text-[rgba(75,75,75,0.72)]
              max-w-[430px]
              mx-auto
            "
          >
            あえて飾らず、ただそこに咲く花のように。  
            光と空気が、最初の気配だけを描く部屋。
          </p>
        </div>
      </section>

      {/* ===========================
          CTA
      =========================== */}
<div
  className="
    relative z-20 px-8 lg:px-32 py-24
    flex flex-col md:flex-row
    items-center justify-center
    gap-8 md:gap-16
  "
>
  {/* 香りの世界リンク（薄ボタン感付与） */}
  <a
    href="https://rose-veil.vercel.app/"
    target="_blank"
    className="
      text-[rgba(90,90,90,0.70)]
      text-[0.9rem] md:text-[0.8rem]
      tracking-[0.26em] md:tracking-[0.30em]
      px-[6px] pb-[4px]          /* ← ボタンの気配（枠なし） */
      border-b border-[rgba(90,90,90,0.18)]  /* ← 0.5px相当の薄膜ライン */
      hover:text-[rgba(40,40,40,0.9)]
      hover:border-[rgba(40,40,40,0.28)]
      transition-all duration-300
    "
  >
    香りの世界は、こちらから
  </a>

  {/* 作品一覧へ戻る（弱めのボタン感） */}
  <Link
    to="/works"
    className="
      text-[rgba(90,90,90,0.60)]
      text-[0.85rem] md:text-[0.75rem]
      tracking-[0.26em] md:tracking-[0.30em]
      px-[6px] pb-[4px]
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
