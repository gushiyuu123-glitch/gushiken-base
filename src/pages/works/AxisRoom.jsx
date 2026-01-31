// src/pages/works/AxisRoom.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AxisRoom() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* =====================================
          背景（冷黒 × 無光金属のグラデ）
      ===================================== */}
      {/* 層1：空気の黒 */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-[rgba(7,7,7,0.96)]
        "
      />

      {/* 層2：金属の“冷たさ”を持つ黒膜 */}
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

      {/* 層3：工業ノイズ（粒度をさらに精密化） */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          opacity-[0.022]
          bg-[url('/grain/noise-metal.png')]
          bg-cover bg-center
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
            Title — 金属“線”の張りを typographic に翻訳
        ===================================== */}
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

        {/* =====================================
            Lead Copy — 線 × 物質 × 無音 の精密表現
        ===================================== */}
        <p
          className="
            text-white/50
            text-[1.02rem] md:text-[1.10rem]
            leading-[1.86] md:leading-[1.96]
            max-w-[560px]
          "
        >
          物質が持つ“線の緊張”を静かに整える部屋。  
          形・影・反射の境界を一点ずつ確かめながら、  
          工業的な精密さを、音のない空気の中で観察するための空間です。
        </p>

        {/* =====================================
            External Link — 金属線のUI（精度を最大化）
        ===================================== */}
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
          ▶ AXIS（デモサイトを見る）
        </a>
      </section>
    </main>
  );
}
