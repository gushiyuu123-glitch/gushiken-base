// src/pages/works/LuminRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LuminRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  /* ==========================================================
      HERO：白銀の“呼吸 × 微光パララックス”
  ========================================================== */
  useEffect(() => {
    const img = heroRef.current;

    if (!img) return;

    // 極薄パララックス
    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 1.045,
        ease: "none",
        scrollTrigger: {
          trigger: ".lumin-entry-hero",
          start: "top top",
          end: "bottom+=780 top",
          scrub: true,
        },
      }
    );

    // 微光の“呼吸”（質感演出）
    gsap.fromTo(
      img,
      { opacity: 0.9 },
      {
        opacity: 1,
        duration: 3.8,
        ease: "power2.out",
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
          ★ 背景：白銀膜（LÜMIN 空気レイヤー）
      ===================================================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-gradient-to-b
          from-white/95
          via-[#f0f3f6]/82
          to-[#e7eaed]/88
        "
      />

      {/* =====================================================
          ★ HERO：LÜMIN 前室（精度の入口）
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
          ref={heroRef}
          src="/works1/lumin-main.png"
          alt="LÜMIN — Entry Visual"
          className="
            absolute inset-0 w-full h-full
            object-cover object-[50%_46%]
            opacity-[0.94]
            select-none pointer-events-none
          "
        />

        {/* ------------------- TEXT ------------------- */}
        <div className="relative z-10 text-center px-8">
          <h1
            className="
              text-[2.4rem] md:text-[2.8rem]
              tracking-[0.24em]
              font-light
              text-black/85
            "
          >
            LÜMIN — Entry Room
          </h1>

          <p
            className="
              mt-6
              text-[0.98rem] md:text-[1.1rem]
              tracking-[0.12em]
              text-black/60
              leading-[1.9]
              max-w-[760px] mx-auto
            "
          >
            精度・質感・構造を軸に、  <br></br>
            プロダクトの美しさが最も“呼吸する位置”を切り取った前室です。  <br></br>
            EC本編へ進む前の、静かな白銀空間をお楽しみください。
          </p>
        </div>
      </section>

      {/* =====================================================
          ★ WORLD KEY：白銀世界の 3 要素
      ===================================================== */}
      <section className="relative z-10 py-[8vh] text-center px-8">
        <p
          className="
            text-[0.82rem]
            tracking-[0.22em]
            text-black/45
            leading-[2]
            max-w-[620px]
            mx-auto
          "
        >
          PRODUCT PRECISION × AESTHETIC CALM × ENGINEERED MINIMALISM
        </p>
      </section>

      {/* =====================================================
          ★ ENTER：EC本編への“静かな入口”
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
            text-[0.92rem]
            tracking-[0.26em]
            text-black/70
            border border-black/25
            px-9 py-3.5
            hover:bg-black/5
            hover:text-black/85
            transition-all
          "
        >
          ENTER LÜMIN
        </a>

        <p
          className="
            mt-3 text-[0.62rem]
            tracking-[0.20em]
            text-black/30
          "
        >
          SILVER ATMOSPHERE × ACOUSTIC PRECISION
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
            tracking-[0.20em]
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
            url: "https://gushikendesign.com/works/LuminRoom",
            name: "LÜMIN — Entry Room | GUSHIKEN DESIGN",
            description:
              "精度・質感・白銀構造を基軸にした LÜMIN の世界観前室。EC本編に入る前の“白銀プロダクト空間”ページ。",
            isPartOf: {
              "@id": "https://gushikendesign.com/#website",
            },
          }),
        }}
      />
    </main>
  );
}
