// src/pages/works/TakumiRoom.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TakumiRoom() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main
      className="
        relative min-h-screen text-white overflow-hidden
        bg-cover bg-center lg:bg-left
      "
      style={{
        backgroundImage: "url('/works1/philosophy-bg.png')",
      }}
    >

      {/* ======== 黒膜（明るめに変更） ======== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-[rgba(0,0,0,0.28)]     /* ← 0.52 → 0.28 に改善 */
          backdrop-blur-[1px]
        "
      />

      {/* ======== 光膜（明るさ補正の新設レイヤー） ======== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-b
          from-[rgba(255,255,255,0.06)]
          via-[rgba(255,255,255,0.04)]
          to-transparent
          pointer-events-none
        "
      />

      {/* ======== 横の光スリット（建築の光の再現） ======== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-r
          from-transparent
          via-[rgba(255,255,255,0.07)]
          to-transparent
          mix-blend-screen
        "
      />

      {/* ======== CONTENT（中央寄せ） ======== */}
      <section
        className="
          relative z-20 
          px-6 py-20
          lg:px-0
          lg:py-28
          mx-auto
          w-full
          lg:max-w-[880px]
          text-center
        "
      >

        {/* =====================
            TITLE
        ====================== */}
        <h1
          className="
            font-serif
            text-[2.6rem] md:text-[3.4rem]
            tracking-[0.22em]
            text-white/98     /* ← ↑明るく */
            mb-10
            select-none
          "
        >
          TAKUMI — ROOM
        </h1>

        {/* =====================
            LEAD
        ====================== */}
        <p
          className="
            text-white/70          /* ← 55 → 70 にアップ */
            text-[1.05rem] md:text-[1.18rem]
            leading-[1.95] md:leading-[2.05]
            mx-auto
            max-w-[650px]
            mb-20
          "
        >
          建築物を構成するのは“形”ではなく、
          光の入り方、影の落ち方、下地が持つ“骨格の美しさ”。  
          TAKUMI — ROOM は、その「構造の静寂」を  
          Webの中で丁寧に確かめるための部屋。
        </p>

        {/* =====================
            VISUAL BLOCK（中央）
        ====================== */}
        <div className="relative mb-20 flex justify-center">
          <img
            src="/works1/philosophy-bg2.png"
            alt="TAKUMI architectural texture"
            className="
              w-full max-w-[900px]
              rounded-[18px]
              opacity-[0.96]
            "
          />

          {/* 中央白スリット（そのまま） */}
          <div
            aria-hidden
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-white/4
              to-transparent
              mix-blend-screen
            "
          />
        </div>

        {/* =====================
            SUBTEXT
        ====================== */}
        <p
          className="
            text-white/60         /* ← 45 → 60 にアップ */
            text-[0.92rem]
            tracking-[0.18em]
            leading-[2.1]
            mx-auto
            max-w-[650px]
            mb-16
          "
        >
          面の緊張がほどける場所。  
          光が落ち着き、影が呼吸をはじめる瞬間。  
          その“変化”だけを静かに並べた空間。
        </p>

        {/* =====================
            CTA
        ====================== */}
        <div className="text-center">
          <a
            href="https://takumi-ochre.vercel.app/"
            target="_blank"
            className="
              inline-block
              text-white/85     /* ← 80 → 85 */
              text-[0.78rem]
              tracking-[0.32em]
              border-b border-white/25
              pb-[6px]
              hover:text-white hover:border-white/45
              transition-all duration-400
            "
          >
            TAKUMI（デモサイトを見る）
          </a>
        </div>

        {/* Back */}
        <div className="mb-14 mt-10 text-center">
          <Link
            to="/works"
            className="
              text-white/55 text-[0.75rem]    /* ← 45 → 55 */
              tracking-[0.28em]
              hover:text-white/80
              transition
            "
          >
            BACK TO WORKS
          </Link>
        </div>

      </section>
    </main>
  );
}
