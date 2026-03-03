// ============================================================================
// 🜁 ORIGIN ROOM — Artistic Draft v1.5（Deep Art Edition）
// 「光と影の境界線にある本質」を展示する部屋
// GUSHIKEN DESIGN × NOA
// ============================================================================

import React from "react";

export default function OriginRoom() {
  return (
    <section className="w-full min-h-screen bg-[#050607] text-white relative overflow-hidden">

      {/* ======================================================
          1) 背景：深層ノイズ × 干渉光膜（アート強化）
      ====================================================== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 28%, rgba(255,255,255,0.05), rgba(0,0,0,1) 80%)",
        }}
      />

      {/* 動く細粒ノイズ（超薄） */}
      <div
        className="absolute inset-0 opacity-[0.06] animate-[noiseMove_18s_linear_infinite]"
        style={{
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
        }}
      />

      {/* 斜め干渉光膜（アート性UP） */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          background:
            "linear-gradient(135deg, rgba(160,180,255,0.12), rgba(0,0,0,0))",
        }}
      />

      {/* 中央の縦スリット */}
      <div
        className="absolute left-1/2 top-0 w-[1.6px] h-full opacity-[0.22] mix-blend-screen pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(200,210,255,0.4), rgba(0,0,0,0) 80%)",
        }}
      />

      {/* ノイズ微動アニメーション */}
      <style>{`
        @keyframes noiseMove {
          0% { transform: translate(0,0); }
          100% { transform: translate(-400px, -400px); }
        }
      `}</style>

      {/* ======================================================
          2) HERO（光の箱庭）
      ====================================================== */}
      <div className="relative z-10 max-w-[920px] mx-auto px-8 pt-[260px] pb-[220px]">

        <p className="aq-fade text-[12px] tracking-[0.32em] text-white/40 mb-8">
          HUMAN STRUCTURE / VOID / SILENCE
        </p>

        <h1 className="aq-fade text-[46px] leading-[1.32] tracking-[0.14em] font-serif mb-12">
          ORIGIN ROOM
        </h1>

        {/* 光が滲むカード */}
        <div className="aq-fade relative max-w-[660px]">
          {/* 光のフレア */}
          <div className="absolute inset-0 blur-[28px] opacity-[0.11] bg-[#cfd8ff]"></div>

          <div className="relative bg-white/5 backdrop-blur-[1.4px] border border-white/10 p-8 shadow-[inset_0_0_25px_rgba(200,210,255,0.08)]">
            <p className="text-[15px] leading-[2] text-white/70">
              ここは “構造” が光と影で浮かび上がる展示室。
              <br />
              ダヴィンチの解析、ゴッホの感性、イーロンの因果思考…
              <br />
              その背後にある「見えない法則」を静かに照らす部屋。
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          3) CORE PHILOSOPHY
      ====================================================== */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[920px] mx-auto px-8 py-[180px]">

          <h2 className="aq-fade text-[22px] tracking-[0.22em] mb-4">
            核心思想 — CORE PHILOSOPHY
          </h2>

          {/* 光スリット */}
          <div className="aq-fade w-[80px] h-[1px] bg-white/20 mb-16" />

          <p className="aq-fade text-[15px] leading-[2.3] text-white/60 max-w-[650px]">
            ORIGIN は「天才の行動」を描くのではなく、
            <br />
            その奥で働いている “共通構造” を掘り出す試み。
            <br /><br />
            光＝意識の領域  
            影＝無意識の領域
            <br />
            この二つの呼吸を並べることで、
            <span className="text-white/80">洞察という現象</span>が生まれる。
            <br /><br />
            世界の見方は、光と影の“配置”で決まる。
          </p>
        </div>
      </div>

      {/* ======================================================
          4) LIGHT & SHADOW（展示パネル）
      ====================================================== */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[920px] mx-auto px-8 py-[190px]">

          <h2 className="aq-fade text-[22px] tracking-[0.22em] mb-6">
            光と影の展示 — LIGHT & SHADOW
          </h2>

          <div className="aq-fade w-[80px] h-[1px] bg-white/20 mb-20" />

          <div className="aq-fade border border-white/10 bg-white/5 backdrop-blur-[2px] p-12 shadow-[inset_0_0_25px_rgba(255,255,255,0.05)]">
            <p className="text-[14px] leading-[2.3] text-white/75">
              光は「意識の焦点」  
              影は「無意識の流れ」
              <br /><br />
              ORIGIN は、二つの境界線がどこで交わり、  
              どこで離れるのかを視覚化するプロジェクト。
              <br /><br />
              これは “構造の呼吸” をそのまま展示する試みでもある。
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          EXIT + BUTTONS（アート版）
      ====================================================== */}
      <div className="relative z-10 max-w-[820px] mx-auto px-8 py-[260px] text-center">
        <p className="aq-fade text-[14px] leading-[2.6] text-white/55 mb-16">
          「光があるから影が生まれる。  
          影があるから、構造が見える。」
          <br /><br />
          — ORIGIN ROOM
        </p>

        <a
          href="https://origin-gray.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            aq-fade
            inline-block
            text-[12px]
            tracking-[0.22em]
            text-white/75
            border-b border-white/25
            pb-[4px]
            hover:opacity-70
            transition-opacity
            mb-12
          "
        >
          https://origin-gray.vercel.app/
        </a>

        <div>
          <a
            href="/works"
            className="
              aq-fade
              inline-block
              text-[12px]
              tracking-[0.20em]
              text-white/60
              hover:text-white/90
              transition-colors
            "
          >
            ← WORKS へ戻る
          </a>
        </div>
      </div>

    </section>
  );
}