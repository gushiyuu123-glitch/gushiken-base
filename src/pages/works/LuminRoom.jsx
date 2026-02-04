// src/pages/works/LuminRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LuminRoom() {
  const containerRef = useRef(null);

  /* ============================================
       HERO：極薄パララックス（LÜMIN 呼吸）
  ============================================ */
  useEffect(() => {
    const img = document.querySelector(".lumin-entry-img");

    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".lumin-entry-hero",
          start: "top top",
          end: "bottom+=900 top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main
      ref={containerRef}
      className="
        relative min-h-screen
        bg-[#f6f8fb]
        text-[#0D0E11]
        overflow-hidden
        font-sans
      "
    >
      {/* =====================================================
          ★ 背景：白銀の“空気膜”（世界観レイヤー）
      ===================================================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-gradient-to-b
          from-white/90
          via-[#eef1f4]/78
          to-[#e6e9ec]/88
        "
      />

      {/* =====================================================
          ★ HERO：LÜMIN 前室（白銀のプロダクト空間）
      ===================================================== */}
      <section
        className="
          lumin-entry-hero
          relative w-full h-[68vh]
          flex items-center justify-center
          overflow-hidden
        "
      >
        <img
          src="/works1/lumin-main.png"
          alt="LÜMIN — Entry Visual"
          className="
            lumin-entry-img
            absolute inset-0 w-full h-full
            object-cover object-[50%_45%]
            opacity-[0.92]
            select-none pointer-events-none
          "
        />

        {/* ------------------- TEXT ------------------- */}
        <div className="relative z-10 text-center px-8">
          <h1
            className="
              text-[2.4rem] md:text-[2.8rem]
              tracking-[0.22em]
              font-light
              text-black/85
            "
          >
            LÜMIN — Entry
          </h1>

          <p
            className="
              mt-6
              text-[0.98rem] md:text-[1.1rem]
              tracking-[0.14em]
              text-black/55
              leading-[1.9]
              max-w-[720px] mx-auto
            "
          >
            研ぎ澄まれた質感と構造。  
            デバイスから伝わる“精度の美しさ”を軸にした  
            LÜMIN プロダクト世界への入口です。
          </p>
        </div>
      </section>

      {/* =====================================================
          ★ WORLD KEY（視線を留める小要素）
      ===================================================== */}
      <section className="relative z-10 py-[8vh] text-center px-8">
        <p
          className="
            text-[0.85rem]
            tracking-[0.22em]
            text-black/40
            leading-[2]
            max-w-[620px]
            mx-auto
          "
        >
          PRODUCT ACCURACY × AESTHETIC CALM × ENGINEERED MINIMALISM
        </p>
      </section>

      {/* =====================================================
          ★ ENTER：本編（ECサイト）への導線
      ===================================================== */}
      <section
        className="
          relative z-10 py-[10vh]
          text-center flex flex-col items-center
        "
      >
        <a
          href="https://lumin-audio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-[0.9rem]
            tracking-[0.24em]
            text-black/60
            border border-black/25
            px-8 py-3
            hover:bg-black/5
            hover:text-black/80
            transition-all
          "
        >
          ENTER LÜMIN
        </a>

        <p
          className="
            mt-3 text-[0.62rem]
            tracking-[0.22em]
            text-black/30
          "
        >
          SILVER × PRECISION × ACOUSTIC DESIGN
        </p>
      </section>

      {/* =====================================================
          ★ BACK TO WORKS
      ===================================================== */}
      <div className="relative z-10 py-[8vh] text-center">
        <Link
          to="/works"
          className="
            text-black/40
            tracking-[0.22em]
            text-[0.75rem]
            hover:text-black/70
            transition
          "
        >
          ← BACK TO WORKS
        </Link>
      </div>

      {/* =====================================================
          ★ SEO JSON-LD
      ===================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://gushikendesign.com/works/luminroom#webpage",
            "url": "https://gushikendesign.com/works/LuminRoom",
            "name": "LÜMIN — Entry Room | GUSHIKEN DESIGN",
            "description":
              "プロダクトの精度・構造・美しさを基軸にした LÜMIN の世界観前室。EC本編に入る前の“プロダクト空間”ページ。",
            "isPartOf": {
              "@id": "https://gushikendesign.com/#website",
            },
          }),
        }}
      />
    </main>
  );
}
