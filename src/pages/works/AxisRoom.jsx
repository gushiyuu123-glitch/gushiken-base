// src/pages/works/AxisRoom.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AxisRoom() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ============================
          背景（冷黒 × 金属膜 × ノイズ）
      ============================ */}
      <div aria-hidden className="absolute inset-0 z-0 bg-[rgba(7,7,7,0.96)]" />
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-b
          from-[rgba(14,14,14,0.95)]
          via-[rgba(11,11,11,0.97)]
          to-[rgba(5,5,5,1)]
        "
      />
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          opacity-[0.022]
          bg-[url('/grain/noise-metal.png')]
          bg-cover bg-center
        "
      />

      {/* ============================
          Main — 中央寄せレイアウト
      ============================ */}
      <section
        className="
          relative z-10
          px-6 lg:px-24 py-24
          flex flex-col
          items-center
          text-center
        "
      >

        {/* Title */}
        <h1
          className="
            font-serif
            text-[2.55rem] md:text-[3.12rem]
            tracking-[0.23em] md:tracking-[0.27em]
            text-white/95
            mb-10
            select-none
          "
        >
          AXIS — ROOM
        </h1>

        {/* Lead Copy */}
        <p
          className="
            text-white/50
            text-[1.02rem] md:text-[1.10rem]
            leading-[1.86] md:leading-[1.96]
            max-w-[560px]
            mx-auto
          "
        >
          物質が持つ“線の緊張”を静かに整える部屋。  
          形・影・反射の境界を一点ずつ確かめながら、  
          工業的な精密さを、音のない空気の中で観察するための空間です。
        </p>

        {/* ============================
            ★ Image Slot（縦スリット1枚）
        ============================ */}
        <div
          className="
            mt-20
            w-full
            max-w-[880px]
            select-none
          "
        >
          <img
            src="/works1/axis-hero.png"
            alt="AXIS industrial minimal visual"
            className="
              w-full h-auto
              object-cover
              opacity-[0.92]
              rounded-[4px]
             
             
            "
          />
        </div>

        {/* External Link */}
        <a
          href="https://axis-alpha-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-16
            text-white/75 text-[0.78rem]
            tracking-[0.34em]
            border-b border-white/25
            pb-[5px]
            hover:text-white
            hover:border-white/45
            transition-all duration-300
          "
        >
           AXIS（デモサイトを見る）
        </a>
                {/* Back */}
        <div className="mb-14 mt-10 w-full">
          <Link
            to="/works"
            className="
              text-white/45 text-[0.78rem]
              tracking-[0.28em]
              hover:text-white/80
              transition-all duration-300
            "
          >
             BACK TO WORKS
          </Link>
        </div>

      </section>
    </main>
  );
}
