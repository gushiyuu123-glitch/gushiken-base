import React from "react";
import heroSP from "../assets/hero-sp33.png";

export default function HeroSP() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-[#0a0a0a]
        h-[92svh] min-h-[640px]
        md:hidden
      "
      aria-label="GUSHIKEN DESIGN スマートフォン ヒーローセクション"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroSP}
          alt="沖縄のWebデザイン・ホームページ制作｜美容・店舗・ブランド向け"
          className="
            hero-sp-image hero-sp-image-reveal
            h-full w-full object-cover
            object-[50%_18%]
            select-none
          "
          loading="eager"
          decoding="async"
          fetchpriority="high"
          draggable="false"
        />
      </div>

      {/* TOP VEIL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-[98px]
          bg-[linear-gradient(180deg,rgba(6,6,6,0.38)_0%,rgba(6,6,6,0.16)_46%,transparent_100%)]
        "
      />

      {/* GLOBAL DEPTH */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.03)_22%,rgba(0,0,0,0.10)_58%,rgba(0,0,0,0.36)_100%)]
        "
      />

      {/* LEFT SHADOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[84%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.26)_0%,rgba(0,0,0,0.09)_42%,transparent_100%)]
        "
      />

      {/* LEFT SOFT FOG */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[36%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.14)_0%,transparent_100%)]

        "
      />

      {/* BOTTOM READABILITY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-[1]
          h-[240px]
          bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.08)_26%,rgba(0,0,0,0.38)_100%)]
        "
      />

      {/* EDGE VIGNETTE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          [box-shadow:inset_0_0_80px_rgba(0,0,0,0.12)]
        "
      />

      {/* FILM NOISE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.03]
          [background-image:radial-gradient(rgba(255,255,255,0.40)_0.42px,transparent_0.42px)]
          [background-size:4px_4px]
        "
      />

      {/* TEXT BLOCK */}
      <div className="absolute inset-x-0 bottom-[4.55rem] z-[2] px-6">
        <div className="max-w-[19rem]">
          {/* LABEL */}
          <div className="hero-sp-fade hero-sp-fade-1">
            <p
              className="
                mb-2.5
                text-[0.72rem] leading-none
                tracking-[0.12em] text-white/58
              "
            >
              沖縄のWebデザイン / ホームページ制作
            </p>
          </div>

          {/* HOOK */}
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

          {/* TITLE */}
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

          {/* DIVIDER */}
          <div
            className="
              hero-sp-fade hero-sp-fade-4
              mb-4 h-px w-[54px] bg-white/54
            "
          />

          {/* BODY */}
          <div className="hero-sp-fade hero-sp-fade-5 pl-[8px]">
            <div
              className="
                max-w-[16.9rem]
                text-[0.92rem] leading-[1.8]
                tracking-[0.01em] text-white/90
              "
            >
              <p className="mb-1.5">店舗・サロン・ブランドの価値を、</p>
              <p>上品に、伝わりやすく整えるWeb制作</p>

              <p
                className="
                  mt-3
                  text-[0.76rem] leading-[1.76]
                  tracking-[0.07em] text-white/64
                "
              >
                見やすさと高級感を両立し、
                <br />
                信頼感のある印象へ整えます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-[2] -translate-x-1/2">
        <div className="scroll-hint-sp" />
      </div>

      <style>{`
        .hero-sp-image {
          filter: brightness(0.97) saturate(0.92) contrast(1.01);
          transform: scale(1.016);
          animation: heroSPStill 18s ease-in-out infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .hero-sp-image-reveal {
          opacity: 0;
          animation:
            heroSPImageReveal 1.1s cubic-bezier(.22,.56,.18,1) 0.02s forwards,
            heroSPStill 18s ease-in-out 1.1s infinite;
          will-change: transform, opacity, filter;
        }

        @keyframes heroSPStill {
          0% {
            transform: scale(1.016) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.023) translate3d(-1px, 4px, 0);
          }
          100% {
            transform: scale(1.016) translate3d(0, 0, 0);
          }
        }

        @keyframes heroSPImageReveal {
          0% {
            opacity: 0;
            transform: scale(1.026) translate3d(0, 6px, 0);
            filter: brightness(0.9) saturate(0.9) contrast(1.01);
          }
          100% {
            opacity: 1;
            transform: scale(1.016) translate3d(0, 0, 0);
            filter: brightness(0.97) saturate(0.92) contrast(1.01);
          }
        }

        .hero-sp-fade {
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.995);
          animation: heroSPReveal 0.98s cubic-bezier(.22,.56,.18,1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .hero-sp-fade-1 { animation-delay: 0.08s; }
        .hero-sp-fade-2 { animation-delay: 0.16s; }
        .hero-sp-fade-3 { animation-delay: 0.24s; }
        .hero-sp-fade-4 { animation-delay: 0.32s; }
        .hero-sp-fade-5 { animation-delay: 0.40s; }

        @keyframes heroSPReveal {
          0% {
            opacity: 0;
            transform: translate3d(0, 14px, 0) scale(0.995);
          }
          100% {
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
            rgba(255,255,255,0.5),
            rgba(255,255,255,0)
          );
          animation: scrollPulseSP 2.5s ease-in-out infinite;
        }

        @keyframes scrollPulseSP {
          0% { opacity: 0.18; }
          50% { opacity: 0.56; }
          100% { opacity: 0.18; }
        }

        @media (max-width: 390px) {
          .hero-sp-image {
            object-position: 52% 17%;
          }
        }

        @media (max-width: 370px) {
          .hero-sp-image {
            object-position: 53% 16%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-sp-image,
          .hero-sp-image-reveal,
          .hero-sp-fade,
          .scroll-hint-sp {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
            filter: brightness(0.97) saturate(0.92) contrast(1.01) !important;
          }
        }
      `}</style>
    </section>
  );
}