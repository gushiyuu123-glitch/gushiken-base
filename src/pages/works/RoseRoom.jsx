// src/pages/works/RoseRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoseRoom() {
  const containerRef = useRef(null);

  useEffect(() => {
    const img = document.querySelector(".rv-hero-img");

    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".rv-hero-section",
          start: "top top",
          end: "bottom+=1000 top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-hidden font-sans"
    >

      {/* ===== ① Dior乳白ベースグラデ ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-gradient-to-b
          from-[rgba(255,255,255,1)]
          via-[rgba(255,253,253,0.97)]
          to-[rgba(245,240,242,0.92)]
        "
      />

      {/* ===== ② Rose Veil ピンクの気配（極薄） ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-[radial-gradient(circle_at_50%_15%,rgba(255,205,215,0.18),transparent_70%)]
          mix-blend-lighten
        "
      />

      {/* ===== ③ Dior的薄い影（下部をわずかに締める） ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-gradient-to-b
          from-transparent
          to-[rgba(200,200,200,0.22)]
        "
      />

      {/* ===== ④ 最薄ノイズ ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 opacity-[0.03]
          bg-[url('/grain/noise-light.png')] bg-cover bg-center
        "
      />

      {/* ===== HERO ===== */}
      <section className="rv-hero-section relative h-[200vh] flex items-center justify-center">

        {/* ★ タイトルを最前面に移動（z-index:20） */}
        <div
          className="
            absolute z-20 bottom-[20vh] left-1/2 -translate-x-1/2
            text-center font-serif
          "
        >
          <h1 className="text-[2.8rem] md:text-[3.6rem] tracking-[0.22em] font-light text-[rgba(55,55,55,0.88)] mb-6">
            ROSE VEIL — ROOM
          </h1>

          <p className="text-[rgba(75,75,75,0.70)] text-[1rem] leading-relaxed max-w-xl mx-auto font-sans">
            あえて飾らず、  
            ただそこに咲く花のように。  
            光と空気が、最初の気配だけを描く部屋。
          </p>
        </div>

        {/* 自然光写真（タイトルより後ろ：z-10） */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-10">
          <img
            src="/works1/rose-vein.png"
            alt="Rose Veil Room Visual"
            className="
              rv-hero-img
              w-[40vw] max-w-[1050px] h-[82vh]
              object-cover rounded-xl
              opacity-[0.98]
            "
          />
        </div>

      </section>

      {/* ===== CTA ===== */}
      <div className="relative z-20 px-8 lg:px-32 py-32 flex justify-center gap-14 items-center">
        <Link
          to="/works"
          className="text-[rgba(90,90,90,0.55)] text-[0.75rem] tracking-[0.30em] hover:text-[rgba(60,60,60,0.9)] transition"
        >
          ◀ 作品一覧へ戻る
        </Link>

        <a
          href="https://rose-veil.vercel.app/"
          target="_blank"
          className="text-[rgba(90,90,90,0.65)] text-[0.8rem] tracking-[0.30em] hover:text-[rgba(40,40,40,0.9)] transition"
        >
          香りの世界は、こちらから ▶
        </a>
      </div>

    </main>
  );
}
