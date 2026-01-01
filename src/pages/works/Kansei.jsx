// src/pages/works/Kansei.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function Kansei() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/kansei-hero.png",
      shot1: "/works1/kansei-1.webp",
      shot2: "/works1/kansei-2.webp",
      shot3: "/works1/kansei-3.webp",
    }),
    []
  );

  const liveUrl = "https://example.com";

  usePageFade(".kansei-fade", {
    y: 12,
    blur: true,
    duration: 1.2,
    ease: "power2.out",
    start: "top 85%",
  });

  return (
    <article
      className="relative min-h-screen isolate"
      style={{
        background: "linear-gradient(180deg, #f7f5ef 0%, #f1eee6 100%)",
        color: "#2a2a2a",
      }}
    >
      {/* ===== Top bar ===== */}
      <header className="sticky top-0 z-40 bg-[rgba(247,245,239,0.88)] backdrop-blur border-b border-neutral-200">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12 h-[64px] md:h-[72px] flex items-center justify-between">
          <Link
            to="/works"
            className="text-[11px] md:text-[12px] tracking-[0.22em] opacity-65 hover:opacity-90 transition"
          >
            ← WORKS
          </Link>

          <p className="text-[10px] md:text-[11px] tracking-[0.32em] opacity-70">
            CONCEPT WORK
          </p>
        </div>
      </header>

      {/* ===== HERO ===== */}
{/* ===== HERO ===== */}
<section className="relative max-w-[1240px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-28 md:pb-36 overflow-hidden">

{/* 背景画像（画面フルワイド） */}
<div
  aria-hidden
  className="fixed inset-0 -z-10 bg-cover bg-center"
  style={{
    backgroundImage: "url(/works1/kansei-summer.webp)",
  }}
/>


  {/* 和紙ベール（文字保護＋空気） */}
<div
  aria-hidden
  className="fixed inset-0 -z-10"
  style={{
    background: `
      linear-gradient(
        180deg,
        rgba(247,245,239,0.70) 0%,
        rgba(247,245,239,0.50) 50%,
        rgba(247,245,239,0.60) 100%
      )
    `,
  }}
/>

  {/* 中身 */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
    <div className="kansei-fade">
      <p className="text-[10px] md:text-[11px] tracking-[0.34em] mb-6 md:mb-8 text-[#6f6f6f]">
        WAGASHI / CONCEPT
      </p>

      <h1
        className="text-[28px] md:text-[38px] tracking-[0.32em] md:tracking-[0.36em] mb-8 md:mb-12 text-[#1f1f1f]"
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        甘静
      </h1>

      <p
        className="text-[14px] md:text-[15px] leading-[2.6] md:leading-[2.8] max-w-[520px] text-[#2a2a2a]"
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        その日の気配を、
        <br />
        そっと菓子に写す。
      </p>
    </div>

    <div className="kansei-fade border border-neutral-200 bg-white overflow-hidden shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
      <img
        src={assets.hero}
        alt="Kansei hero"
        className="w-full h-[280px] md:h-[480px] object-cover"
      />
    </div>
  </div>
</section>


      {/* ===== CONCEPT ===== */}
      <section className="bg-[rgba(255,255,255,0.55)] border-y border-neutral-200">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="kansei-fade">
            <h2
              className="text-[16px] md:text-[18px] tracking-[0.28em] mb-8 md:mb-10"
              style={{ fontFamily: "var(--jp-serif)" }}
            >
              コンセプト
            </h2>
            <p className="text-[13px] md:text-[14px] leading-[2.6] md:leading-[2.8] text-[#5f5f5f]">
              甘静は、和菓子を「売る」ためのサイトではありません。
              <br /><br />
              季節、湿度、光のにじみ。
              日ごとに異なる空気を、
              言葉で固定せず、
              受け取る人の感覚に委ねます。
            </p>
          </div>

          <div className="kansei-fade">
            <p className="text-[13px] md:text-[14px] leading-[2.6] md:leading-[2.8] text-[#5f5f5f]">
              正解を示さず、
              判断を急がせず、
              余白に意味を残す。
              <br /><br />
              甘静は、
              和菓子の前に立つ
              「一拍の静けさ」そのものを
              Web体験として設計した
              コンセプトワークです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== VISUAL ===== */}
      <section className="max-w-[1120px] mx-auto px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {[assets.shot1, assets.shot2, assets.shot3].map((src, i) => (
            <div
              key={i}
              className="kansei-fade border border-neutral-200 bg-white overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.07)]"
            >
              <img
                src={src}
                alt="Kansei visual"
                className="w-full h-[260px] md:h-[360px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== EXIT ===== */}
      <section className="max-w-[1120px] mx-auto px-6 md:px-12 py-24 md:py-28 text-center">
       <div className="mt-14 md:mt-16">
          <Link
        to="https://kansei-nine.vercel.app/"
          className="inline-block text-[11px] md:text-[12px] tracking-[0.28em] border-b border-neutral-400 pb-1 opacity-75 hover:opacity-100 transition"
        >
          VIEW THE SITE →
        </Link>
        </div>
        <div className="mt-14 md:mt-16">
          <Link
            to="/works"
            className="text-[11px] md:text-[12px] tracking-[0.26em] opacity-60 hover:opacity-85 transition"
          >
            ← WORKSへ戻る
          </Link>
        </div>
      </section>
    </article>
  );
}
