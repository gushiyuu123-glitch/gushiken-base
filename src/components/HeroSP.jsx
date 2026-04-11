import React from "react";
import heroSP from "../assets/hero-sp33.png";

export default function HeroSP() {
  return (
    <section className="relative h-[92svh] w-full overflow-hidden bg-[#0a0a0a] md:hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroSP}
          alt="沖縄のWebデザイン・ホームページ制作｜美容・店舗・ブランド向け"
          className="
            hero-sp-image
            h-full w-full object-cover
            object-[50%_18%]
          "
        />
      </div>

      {/* TOP VEIL */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-[96px]
          bg-[linear-gradient(180deg,rgba(6,6,6,0.30)_0%,rgba(6,6,6,0.12)_48%,transparent_100%)]
        "
      />

      {/* GLOBAL DEPTH */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.02)_24%,rgba(0,0,0,0.10)_58%,rgba(0,0,0,0.34)_100%)]
        "
      />

      {/* LEFT TEXT SHADOW */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[82%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.08)_42%,transparent_100%)]
        "
      />

      {/* BOTTOM READABILITY */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-[1]
          h-[220px]
          bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.34)_100%)]
        "
      />

      {/* FILM NOISE */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.028]
          [background-image:radial-gradient(rgba(255,255,255,0.40)_0.42px,transparent_0.42px)]
          [background-size:4px_4px]
        "
      />

      {/* TEXT BLOCK */}
      <div className="absolute inset-x-0 bottom-[3.8rem] z-[2] px-6">
        <div className="max-w-[18.5rem]">
          <div className="hero-sp-fade hero-sp-fade-1">
            <p className="mb-2.5 text-[0.72rem] tracking-[0.12em] text-white/60">
              沖縄のWebデザイン / ホームページ制作
            </p>
          </div>

          <div className="hero-sp-fade hero-sp-fade-2 pl-[2px]">
            <p
              className="
                mb-3
                text-[0.88rem] font-light leading-[1.68]
                tracking-[0.06em] text-white/84
              "
            >
              整えることで、価値は伝わる。
            </p>
          </div>

          <h1
            className="
              hero-sp-fade hero-sp-fade-3
              mb-4
              text-[2.08rem] font-light leading-[1.01]
              tracking-[0.16em] text-white/97
            "
          >
            GUSHIKEN
            <br />
            DESIGN
          </h1>

          <div
            className="
              hero-sp-fade hero-sp-fade-4
              mb-4 h-px w-[52px] bg-white/56
            "
          />

          <div className="hero-sp-fade hero-sp-fade-5 pl-[8px]">
            <p
              className="
                max-w-[16.8rem]
                text-[0.92rem] leading-[1.78]
                tracking-[0.01em] text-white/90
              "
            >
              店舗・サロン・ブランドの価値を、
              <br />
              上品に、伝わりやすく整えるWeb制作

              <span className="mt-3 block text-[0.76rem] leading-[1.76] tracking-[0.07em] text-white/64">
                見やすさと高級感を両立し、
                <br />
                信頼感のある印象へ整えます。
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-[2] -translate-x-1/2">
        <div className="scroll-hint-sp" />
      </div>

      <style>{`
        .hero-sp-image {
          filter: brightness(0.98) saturate(0.92) contrast(1.01);
          transform: scale(1.015);
          animation: heroSPStill 18s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes heroSPStill {
          0% {
            transform: scale(1.015) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.022) translate3d(-1px, 4px, 0);
          }
          100% {
            transform: scale(1.015) translate3d(0, 0, 0);
          }
        }

        .hero-sp-fade {
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.995);
          animation: heroSPReveal 0.98s cubic-bezier(.22,.56,.18,1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .hero-sp-fade-1 { animation-delay: 0.06s; }
        .hero-sp-fade-2 { animation-delay: 0.14s; }
        .hero-sp-fade-3 { animation-delay: 0.22s; }
        .hero-sp-fade-4 { animation-delay: 0.30s; }
        .hero-sp-fade-5 { animation-delay: 0.38s; }

        @keyframes heroSPReveal {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .scroll-hint-sp {
          width: 1px;
          height: 28px;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0.52),
            rgba(255,255,255,0)
          );
          animation: scrollPulseSP 2.5s ease-in-out infinite;
        }

        @keyframes scrollPulseSP {
          0% { opacity: 0.18; }
          50% { opacity: 0.56; }
          100% { opacity: 0.18; }
        }

        @media (max-width: 380px) {
          .hero-sp-image {
            object-position: 52% 16%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-sp-image,
          .hero-sp-fade,
          .scroll-hint-sp {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}