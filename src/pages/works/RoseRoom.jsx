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
      {/* 背景：白のグラデーション */}
     {/* ====== 背景：ほぼ白（超ナチュラル） ====== */}
<div
  aria-hidden
  className="
    absolute inset-0 z-0 pointer-events-none
    bg-gradient-to-b
    from-[rgba(255,255,255,1)]
    via-[rgba(255,255,255,0.97)]
    to-[rgba(245,245,245,0.94)]
  "
/>

{/* 最小の白膜（上だけ光らせる） */}
<div
  aria-hidden
  className="
    absolute inset-0 z-0 pointer-events-none
    bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.65),transparent_65%)]
    mix-blend-soft-light
  "
/>

{/* ノイズは超薄く */}
<div
  aria-hidden
  className="
    absolute inset-0 z-0 opacity-[0.04]
    bg-[url('/grain/noise-light.png')] bg-cover bg-center
  "
/>

      {/* HERO */}
      <section className="rv-hero-section relative h-[200vh] flex items-center justify-center">
        <div className="sticky top-0 h-screen flex items-center justify-center">
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

        {/* TEXT */}
        <div className="absolute bottom-[16vh] left-1/2 -translate-x-1/2 text-center font-serif">
          <h1 className="text-[2.6rem] md:text-[3.5rem] tracking-[0.22em] font-light text-[rgba(60,60,60,0.88)] mb-6">
            ROSE VEIL — ROOM
          </h1>

          <p className="text-[rgba(85,85,85,0.72)] text-[1rem] leading-relaxed max-w-xl mx-auto font-sans">
            あえて飾らず、  
            ただそこに咲く花のように。  
            光と空気が、最初の気配だけを描く部屋。
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="relative z-10 px-8 lg:px-32 py-32 flex justify-center gap-14 items-center">
        <Link
          to="/works"
          className="text-[rgba(70,70,70,0.55)] text-[0.75rem] tracking-[0.30em] hover:text-[rgba(60,60,60,0.9)] transition"
        >
          ◀ 作品一覧へ戻る
        </Link>

        <a
          href="https://rose-veil.vercel.app/"
          target="_blank"
          className="text-[rgba(70,70,70,0.65)] text-[0.8rem] tracking-[0.30em] hover:text-[rgba(50,50,50,0.9)] transition"
        >
          香りの世界は、こちらから ▶
        </a>
      </div>
    </main>
  );
}
