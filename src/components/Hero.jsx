import React from "react";
import heroRoom from "../assets/hero-room.png";

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#0a0a0a] pb-[8rem] md:h-screen">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroRoom}
          alt="沖縄のWebデザイン / ホームページ制作｜GUSHIKEN DESIGN"
          className="
            hero-image
            h-full w-full object-cover
            object-[58%_center]
            md:object-center
          "
        />
      </div>

      {/* TOP VEIL : ヘッダーとの馴染み */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-[120px]
          bg-[linear-gradient(180deg,rgba(6,6,6,0.34)_0%,rgba(6,6,6,0.16)_46%,transparent_100%)]
        "
      />

      {/* GLOBAL DEPTH */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.06)_34%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.34)_100%)]
        "
      />

      {/* LEFT SOFT SHADOW FOR TEXT LEGIBILITY */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[54%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.10)_42%,transparent_100%)]
        "
      />

      {/* SUBTLE NOISE / FILM FEEL */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.045]
          [background-image:radial-gradient(rgba(255,255,255,0.42)_0.45px,transparent_0.45px)]
          [background-size:4px_4px]
        "
      />

      {/* TEXT BLOCK */}
      <div
        className="
          absolute bottom-16 left-7 right-6 z-[2]
          max-w-[560px]
          md:bottom-24 md:left-16
          lg:bottom-28 lg:left-20
        "
      >
        <div className="hero-fade hero-fade-1">
          <p
            className="
              mb-4
              text-[0.72rem] tracking-[0.26em]
              text-white/52
              md:mb-5
            "
          >
            OKINAWA / WEB DESIGN / BRAND SITE
          </p>
        </div>

        <h1
          className="
            hero-fade hero-fade-2
            mb-5
            text-[2.3rem] font-light leading-[1.04]
            tracking-[0.22em] text-white
            md:mb-6 md:text-[4.1rem]
            lg:text-[4.6rem]
          "
        >
          GUSHIKEN
          <br />
          DESIGN
        </h1>

        <div
          className="
            hero-fade hero-fade-3
            mb-6 h-px w-24 bg-white/50
            md:mb-7
          "
        />

        <p
          className="
            hero-fade hero-fade-4
            max-w-[31rem]
            text-[0.95rem] leading-[2.05]
            tracking-[0.02em] text-white/84
            md:text-[1.05rem] md:leading-[2.1]
          "
        >
          <span className="mb-3 block text-[0.8rem] tracking-[0.12em] text-white/58 md:text-[0.84rem]">
            沖縄のWebデザイン / ホームページ制作
          </span>

          <span className="block">
            店舗・サロン・ブランドの価値を、
          </span>
          <span className="mt-1 block">
            上品に、伝わりやすく整えるWeb制作
          </span>

          <span className="mt-4 block text-[0.84em] leading-[1.9] tracking-[0.08em] text-white/56">
            見やすさと高級感を両立し、
            <br />
            信頼感のある印象へ整えます。
          </span>
        </p>
      </div>

      {/* BOTTOM BREATH */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-[1]
          h-[180px]
          bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.10)_36%,rgba(0,0,0,0.28)_100%)]
        "
      />

      <style>{`
        .hero-image {
          filter: brightness(0.92) saturate(0.9) contrast(1.02);
          transform: scale(1.01);
          animation: heroStill 16s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes heroStill {
          0% {
            transform: scale(1.01) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.022) translate3d(-2px, 4px, 0);
          }
          100% {
            transform: scale(1.01) translate3d(0, 0, 0);
          }
        }

        .hero-fade {
          opacity: 0;
          transform: translate3d(0, 18px, 0) scale(0.995);
          animation: heroReveal 1.05s cubic-bezier(.22,.56,.18,1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .hero-fade-1 { animation-delay: 0.08s; }
        .hero-fade-2 { animation-delay: 0.16s; }
        .hero-fade-3 { animation-delay: 0.24s; }
        .hero-fade-4 { animation-delay: 0.34s; }

        @keyframes heroReveal {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .hero-image {
            animation-duration: 18s;
            filter: brightness(0.9) saturate(0.88) contrast(1.02);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-fade {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}