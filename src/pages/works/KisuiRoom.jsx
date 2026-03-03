import React, { useEffect, useMemo } from "react";
import usePageFade from "../../hooks/usePageFade";

export default function KisuiRoom() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/kisui-hero-room1.png",
      water1: "/works1/kisui-water-soft.png",
      water2: "/works1/kisui-ripple.png",
      glow: "/works1/kisui-light.png",
    }),
    []
  );

  /* ================= FADE ================= */
  usePageFade(".lux-fade", {
    y: 16,
    duration: 1.05,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".lux-fade-soft", {
    y: 8,
    duration: 0.85,
    ease: "power2.out",
    start: "top 90%",
  });

  return (
    <section className="min-h-screen bg-[#f5f8fb] text-[#1a1a1a] relative overflow-hidden">

      {/* ======================================================
          ★ 背景：水膜（より柔らかい高級感へ最適化）
      ====================================================== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.50]"
        style={{
          background: `
            radial-gradient(circle at 50% 26%, rgba(255,255,255,0.95), rgba(214,230,245,0.45)),
            linear-gradient(180deg, rgba(220,234,245,0.35), transparent 60%)
          `,
        }}
      />

      {/* ======================================================
          ★ HERO — 世界観の入口（静 × 光）
      ====================================================== */}
      <div className="max-w-[1200px] mx-auto px-8 pt-[160px] pb-[200px] relative z-10">

        <div className="lux-fade max-w-[680px]">
          <p className="text-[12px] tracking-[0.28em] text-black/45 mb-7">
            WATER / SILENCE / LIGHT
          </p>

          <h1 className="text-[40px] leading-[1.35] tracking-[0.12em] font-serif text-[#0f0f0f]">
            KISUI ROOM
          </h1>

          <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.05em] text-black/65">
            “静けさの中にある、かすかな光。”  
            KISUI の思想・世界観・UI 構造を展示する、特別な部屋。
          </p>
        </div>

        {/* 透膜 × Dior-style 線の少ないカード */}
        <div className="lux-fade-soft mt-20 rounded-[6px] overflow-hidden border border-[#d6e4ef]/80 bg-white/55 backdrop-blur-[5px] shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <img
            src={assets.hero}
            className="w-full h-[460px] object-cover opacity-[0.92]"
          />
        </div>
      </div>

      {/* ======================================================
          ★ SECTION 1 — Philosophy（静けさの構造）
      ====================================================== */}
      <div className="bg-white/70 backdrop-blur-[2px] border-y border-[#d9e3ec]">
        <div className="max-w-[1120px] mx-auto px-8 py-32 grid grid-cols-2 gap-20">

          <div className="lux-fade">
            <h2 className="text-[22px] tracking-[0.16em] text-[#0f0f0f] mb-8">
              静けさの“構造”
            </h2>

            <p className="text-[14px] leading-[2.35] tracking-[0.05em] text-black/60 whitespace-pre-line">
              静けさとは、音がないことではなく  
              「ノイズを最小化し、意識が澄む構造」のこと。

              KISUI は水膜・光膜・余白で  
              人の思考速度に合わせた“やわらかい UI” を作る。
            </p>
          </div>

          <div className="lux-fade-soft border border-[#dbe7f0] bg-white/80 backdrop-blur-[3px] p-10 rounded-[6px]">
            <img
              src={assets.water1}
              className="w-full h-[340px] object-cover opacity-[0.9]"
            />
          </div>
        </div>
      </div>

      {/* ======================================================
          ★ SECTION 2 — UIの展示（呼吸 × 水膜 × 光膜）
      ====================================================== */}
      <div className="max-w-[1120px] mx-auto px-8 py-32">

        <h2 className="lux-fade text-[22px] tracking-[0.18em] text-[#0f0f0f] text-center mb-20">
          KISUI UI — 水膜 / 光膜 / 呼吸
        </h2>

        <div className="grid grid-cols-2 gap-20">

          {/* 水膜 */}
          <div className="lux-fade border border-[#d7e5f1] bg-[#fafdff]/90 p-12 rounded-[6px] shadow-[0_8px_28px_rgba(0,0,0,0.03)]">
            <p className="text-[12px] tracking-[0.20em] text-black/50 mb-6">
              水膜（Water Layer）
            </p>
            <p className="text-[14px] leading-[2.25] tracking-[0.05em] text-black/60 mb-10">
              0.2〜0.4px の極薄 blur と透明グラデ。  
              “水の静けさ” を UI に翻訳する基礎レイヤー。
            </p>

            <img
              src={assets.water2}
              className="w-full h-[320px] object-cover border border-[#d9e7f3]"
            />
          </div>

          {/* 光膜 */}
          <div className="lux-fade border border-[#d7e5f1] bg-[#fafdff]/90 p-12 rounded-[6px] shadow-[0_8px_28px_rgba(0,0,0,0.03)]">
            <p className="text-[12px] tracking-[0.20em] text-black/50 mb-6">
              光膜（Light Membrane）
            </p>
            <p className="text-[14px] leading-[2.25] tracking-[0.05em] text-black/60 mb-10">
              光を“線”ではなく“膜”で扱う。  
              Dior のようなやわらかい高級感の正体。
            </p>

            <img
              src={assets.glow}
              className="w-full h-[320px] object-cover border border-[#d9e7f3]"
            />
          </div>

        </div>
      </div>

      {/* ======================================================
          ★ FINAL EXHIBIT — Quiet Exit
      ====================================================== */}
      <div className="max-w-[880px] mx-auto px-8 py-40 text-center">

        {/* 余韻コピー */}
        <p className="lux-fade text-[14px] leading-[2.35] tracking-[0.05em] text-black/55 mb-16">
          KISUI の世界は “情報” ではなく、  
          “感じ方” をデザインすることで成立する。
        </p>

        {/* URL */}
        <a
          href="https://kisui.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            lux-fade
            inline-block
            text-[12px]
            tracking-[0.22em]
            text-black/70
            border-b border-[#c8d8e4]
            pb-[3px]
            hover:opacity-70
            transition-opacity
            mb-10
          "
        >
          https://kisui.vercel.app/
        </a>

        {/* 戻る */}
        <div className="mt-10">
          <a
            href="/works"
            className="
              lux-fade
              inline-block
              text-[12px]
              tracking-[0.20em]
              text-black/55
              hover:text-black/80
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