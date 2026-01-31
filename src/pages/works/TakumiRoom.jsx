// src/pages/works/TakumiRoom.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TakumiRoom() {
  return (
    <main className="relative min-h-screen bg-[#050504] text-white overflow-hidden">

      {/* =====================================
          背景（建築の“深度”を作る3層黒膜）
      ===================================== */}
      {/* 1層目：空気の黒 */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-[rgba(8,7,6,0.96)]
        "
      />

      {/* 2層目：素材の黒（マット感） */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-b
          from-[rgba(10,9,8,0.92)]
          via-[rgba(14,13,12,0.94)]
          to-[rgba(6,5,4,0.94)]
        "
      />

      {/* 3層目：粒子（建築素材の“微振動”） */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          opacity-[0.028]
          bg-[url('/grain/noise-soft.png')] bg-cover bg-center
        "
      />

      {/* =====================================
          Main Container
      ===================================== */}
      <section className="relative z-10 px-6 lg:px-24 py-24">

        {/* Back */}
        <div className="mb-14">
          <Link
            to="/works"
            className="
              text-white/45 text-[0.78rem]
              tracking-[0.28em]
              hover:text-white/80
              transition-all duration-300
            "
          >
            ← BACK TO WORKS
          </Link>
        </div>

        {/* =====================================
            Title — 建築雑誌の“見出し構造”
        ===================================== */}
        <h1
          className="
            font-serif
            text-[2.45rem] md:text-[3.15rem]
            tracking-[0.22em] md:tracking-[0.25em]
            text-white/95
            mb-10
            select-none
          "
        >
          TAKUMI — ROOM
        </h1>

        {/* =====================================
            Lead — 建築 × 空気 × 下地の翻訳
        ===================================== */}
        <p
          className="
            text-white/50
            text-[1.02rem] md:text-[1.12rem]
            leading-[1.88] md:leading-[1.98]
            max-w-[560px]
          "
        >
          建築物のように、光と影の“骨格”を丁寧に整える部屋。  
          形そのものではなく、構造・動線・余白が生む  
          “下地の美しさ”を静かに確認するための空間です。
        </p>

        {/* =====================================
            External Link — 建築の細い線（緊張のUI）
        ===================================== */}
        <a
          href="https://takumi-ochre.vercel.app/"
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
          ▶ TAKUMI（デモサイトを見る）
        </a>
      </section>
    </main>
  );
}
