import React, { useState } from "react";
import heroSP from "../assets/hero-sp33.png";

function HeroSPTitleSvg() {
  return (
    <svg
      className="hero-sp-title-svg"
      viewBox="0 0 720 210"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="heroSpTitleStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.54)" />
          <stop offset="48%" stopColor="rgba(255,255,255,0.98)" />
          <stop offset="100%" stopColor="rgba(217,185,138,0.74)" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="76"
        className="hero-sp-svg-text hero-sp-svg-text-1"
        stroke="url(#heroSpTitleStroke)"
      >
        GUSHIKEN
      </text>

      <text
        x="0"
        y="166"
        className="hero-sp-svg-text hero-sp-svg-text-2"
        stroke="url(#heroSpTitleStroke)"
      >
        DESIGN
      </text>
    </svg>
  );
}

export default function HeroSP() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      className="
        hero-sp-root
        relative w-full overflow-hidden bg-[#0a0a0a]
        h-[100svh] min-h-[520px]
        md:hidden
      "
      aria-label="GUSHIKEN DESIGN スマートフォン ヒーローセクション"
      data-loaded={imgLoaded ? "true" : "false"}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroSP}
          alt="沖縄のWeb制作・Webデザイン｜GUSHIKEN DESIGN"
          className="
            hero-sp-image
            h-full w-full object-cover
            select-none
          "
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      {/* IMAGE REVEAL VEIL */}
      <div
        aria-hidden="true"
        className="hero-sp-image-veil pointer-events-none absolute inset-0 z-[1]"
      />

      {/* IMAGE LIGHT BLOOM */}
      <div
        aria-hidden="true"
        className="hero-sp-image-bloom pointer-events-none absolute inset-0 z-[1]"
      />

      {/* TOP VEIL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-[108px]
          bg-[linear-gradient(180deg,rgba(6,6,6,0.48)_0%,rgba(6,6,6,0.20)_48%,transparent_100%)]
        "
      />

      {/* GLOBAL DEPTH */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.04)_24%,rgba(0,0,0,0.13)_58%,rgba(0,0,0,0.46)_100%)]
        "
      />

      {/* LEFT SHADOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[90%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.14)_44%,transparent_100%)]
        "
      />

      {/* LEFT SOFT FOG */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[42%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.18)_0%,transparent_100%)]
        "
      />

      {/* BOTTOM READABILITY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-[1]
          h-[290px]
          bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.12)_24%,rgba(0,0,0,0.50)_100%)]
        "
      />

      {/* EDGE VIGNETTE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          [box-shadow:inset_0_0_92px_rgba(0,0,0,0.18)]
        "
      />

      {/* FILM NOISE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.032]
          [background-image:radial-gradient(rgba(255,255,255,0.40)_0.42px,transparent_0.42px)]
          [background-size:4px_4px]
        "
      />

      {/* TEXT BLOCK */}
      <div className="absolute inset-x-0 bottom-[clamp(3.8rem,7.8svh,5.2rem)] z-[2] px-6">
        <div className="max-w-[20.4rem]">
          {/* LABEL */}
          <div className="hero-sp-fade hero-sp-fade-1">
            <p className="mb-2.5 text-[0.61rem] leading-none tracking-[0.25em] text-white/50 uppercase">
              OKINAWA / WEB DESIGN / IMPRESSION
            </p>
          </div>

          {/* HOOK */}
          <div className="hero-sp-fade hero-sp-fade-2 pl-[2px]">
            <p className="mb-3 text-[0.88rem] font-light leading-[1.68] tracking-[0.07em] text-white/86">
              整えることで、価値は伝わる。
            </p>
          </div>

          {/* TITLE / SVG SIGNATURE */}
          <h1
            className="hero-sp-fade hero-sp-fade-3 hero-sp-title-wrap mb-5"
            aria-label="GUSHIKEN DESIGN"
          >
            <span className="sr-only">GUSHIKEN DESIGN</span>
            <HeroSPTitleSvg />
          </h1>

          {/* DIVIDER */}
          <div className="hero-sp-fade hero-sp-fade-4 hero-sp-divider mb-4" />

          {/* BODY */}
          <div className="hero-sp-fade hero-sp-fade-5 pl-[7px]">
            <div className="max-w-[18rem] text-[0.92rem] leading-[1.84] tracking-[0.01em] text-white/90">
              <p className="mb-2 text-[0.725rem] leading-[1.65] tracking-[0.10em] text-white/58">
                沖縄のWeb制作・Webデザイン｜美容・店舗・EC
              </p>

              <p className="mb-1.5">余白、写真、言葉、導線まで。</p>
              <p>価値が自然に伝わるWebサイトへ。</p>

              <p className="mt-3 text-[0.755rem] leading-[1.78] tracking-[0.07em] text-white/66">
                見やすく、迷わず、安っぽくならない。
                <br />
                信頼感のある第一印象を設計します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-[2] -translate-x-1/2">
        <div className="scroll-hint-sp" />
      </div>

      <style>{`
        /* =========================
           核：SPで“切れ方”を制御する重心
        ========================= */
        .hero-sp-root{
          --fx: 56%;
          --fy: 45%;
          isolation: isolate;
        }

        @media (max-width: 390px){
          .hero-sp-root{ --fx: 56%; --fy: 43%; }
        }

        @media (max-width: 370px){
          .hero-sp-root{ --fx: 57%; --fy: 41%; }
        }

        .hero-sp-image{
          object-position: var(--fx) var(--fy);
          filter: brightness(0.935) saturate(0.88) contrast(1.035);
          opacity: 0;
          transform: translate3d(0, 10px, 0) scale(1.012);
          transition:
            opacity 1.42s cubic-bezier(0.18,0.62,0.2,1),
            transform 2.08s cubic-bezier(0.22,0.1,0.28,1),
            filter 1.6s cubic-bezier(0.22,0.1,0.28,1);
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
          transform-origin: center center;
        }

        .hero-sp-root[data-loaded="true"] .hero-sp-image{
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        .hero-sp-image-veil{
          opacity: 1;
          background: linear-gradient(
            180deg,
            rgba(7,7,7,0.32) 0%,
            rgba(7,7,7,0.18) 32%,
            rgba(7,7,7,0.08) 58%,
            rgba(7,7,7,0.02) 100%
          );
          transition: opacity 1.7s cubic-bezier(.2,.62,.2,1);
          will-change: opacity;
        }

        .hero-sp-root[data-loaded="true"] .hero-sp-image-veil{
          opacity: 0;
        }

        .hero-sp-image-bloom{
          opacity: 0;
          transform: scale(1.04);
          background:
            radial-gradient(
              76% 54% at 58% 32%,
              rgba(255,255,255,0.10) 0%,
              rgba(217,185,138,0.04) 34%,
              rgba(255,255,255,0.012) 58%,
              rgba(255,255,255,0) 80%
            ),
            radial-gradient(
              52% 40% at 12% 76%,
              rgba(217,185,138,0.035) 0%,
              rgba(217,185,138,0.012) 42%,
              rgba(217,185,138,0) 72%
            );
          transition:
            opacity 1.9s cubic-bezier(.2,.62,.2,1),
            transform 2.2s cubic-bezier(.2,.62,.2,1);
          will-change: opacity, transform;
        }

        .hero-sp-root[data-loaded="true"] .hero-sp-image-bloom{
          opacity: 0.25;
          transform: scale(1);
        }

        .hero-sp-fade{
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.995);
          animation: heroSPReveal 1.02s cubic-bezier(.22,.56,.18,1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .hero-sp-fade-1{ animation-delay: 0.16s; }
        .hero-sp-fade-2{ animation-delay: 0.26s; }
        .hero-sp-fade-3{ animation-delay: 0.36s; }
        .hero-sp-fade-4{ animation-delay: 0.50s; }
        .hero-sp-fade-5{ animation-delay: 0.62s; }

        @keyframes heroSPReveal{
          to{
            opacity: 1;
            transform: translate3d(0,0,0) scale(1);
          }
        }

        /* =========================
           SVG Title Signature
           - SP版 GUSHIKEN DESIGN
        ========================= */
        .hero-sp-title-wrap{
          position: relative;
          width: min(88vw, 323px);
          line-height: 1;
          isolation: isolate;
        }

        .hero-sp-title-wrap::before{
          content: "";
          position: absolute;
          left: -4%;
          top: 47%;
          z-index: -1;
          width: 82%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(217,185,138,0),
            rgba(217,185,138,0.18),
            rgba(255,255,255,0.08),
            rgba(217,185,138,0)
          );
          opacity: 0;
          transform: scaleX(0.46);
          transform-origin: left center;
          animation: heroSpTitleAura 1.35s cubic-bezier(.22,.56,.18,1) 0.86s forwards;
        }

        .hero-sp-title-wrap::after{
          content: "";
          position: absolute;
          left: -5%;
          top: 33%;
          z-index: 2;
          width: 44%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0),
            rgba(255,255,255,0.56),
            rgba(217,185,138,0.42),
            rgba(255,255,255,0)
          );
          opacity: 0;
          transform: translateX(-36px) scaleX(0.25);
          transform-origin: left center;
          filter: drop-shadow(0 0 10px rgba(217,185,138,0.12));
          animation: heroSpTitleFlash 0.76s cubic-bezier(.22,.56,.18,1) 0.96s forwards;
          pointer-events: none;
        }

        .hero-sp-title-svg{
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .hero-sp-svg-text{
          font-family: "Cormorant Garamond", serif;
          font-size: 76px;
          font-weight: 300;
          letter-spacing: 0.172em;

          fill: rgba(255,255,255,0);
          stroke-width: 0.84;
          stroke-linecap: round;
          stroke-linejoin: round;

          stroke-dasharray: 960;
          stroke-dashoffset: 960;

          filter:
            drop-shadow(0 0 8px rgba(255,255,255,0.04))
            drop-shadow(0 0 18px rgba(217,185,138,0.052));

          animation:
            heroSpSvgDraw 1.1s cubic-bezier(0.22,0.1,0.28,1) forwards,
            heroSpSvgFill 0.84s cubic-bezier(0.22,0.1,0.28,1) forwards,
            heroSpSvgSettle 1.6s cubic-bezier(.22,.56,.18,1) forwards;

          will-change: stroke-dashoffset, fill, stroke, filter;
          backface-visibility: hidden;
          text-rendering: geometricPrecision;
        }

        .hero-sp-svg-text-1{
          animation-delay: 0.04s, 0.78s, 1.10s;
        }

        .hero-sp-svg-text-2{
          animation-delay: 0.16s, 0.94s, 1.22s;
        }

        @keyframes heroSpSvgDraw{
          to{
            stroke-dashoffset: 0;
          }
        }

        @keyframes heroSpSvgFill{
          to{
            fill: rgba(255,255,255,0.93);
            stroke: rgba(255,255,255,0.18);
          }
        }

        @keyframes heroSpSvgSettle{
          0%{
            filter:
              drop-shadow(0 0 10px rgba(255,255,255,0.06))
              drop-shadow(0 0 22px rgba(217,185,138,0.08));
          }

          100%{
            filter:
              drop-shadow(0 0 4px rgba(255,255,255,0.018))
              drop-shadow(0 0 12px rgba(217,185,138,0.03));
          }
        }

        @keyframes heroSpTitleAura{
          0%{
            opacity: 0;
            transform: scaleX(0.46);
          }

          100%{
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes heroSpTitleFlash{
          0%{
            opacity: 0;
            transform: translateX(-36px) scaleX(0.25);
          }

          24%{
            opacity: 0.78;
          }

          100%{
            opacity: 0;
            transform: translateX(170px) scaleX(1);
          }
        }

        .hero-sp-divider{
          height: 1px;
          width: 58px;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.56),
            rgba(217,185,138,0.48),
            rgba(255,255,255,0)
          );
          box-shadow:
            0 0 12px rgba(217,185,138,0.06),
            0 0 20px rgba(255,255,255,0.035);
        }

        .scroll-hint-sp{
          width: 1px;
          height: 27px;
          background: linear-gradient(
            to bottom,
            rgba(220,226,235,0),
            rgba(220,226,235,0.30),
            var(--subaccent, rgba(220,226,235,0.48)),
            rgba(217,185,138,0.22),
            rgba(220,226,235,0)
          );
          opacity: 0.26;
          box-shadow:
            0 0 0 0.5px rgba(220,226,235,0.08),
            0 0 16px rgba(217,185,138,0.035);
          animation: scrollPulseSP 3.2s ease-in-out infinite;
          will-change: opacity, transform;
        }

        @keyframes scrollPulseSP{
          0%{ opacity: 0.16; transform: scaleY(0.96); }
          50%{ opacity: 0.42; transform: scaleY(1); }
          100%{ opacity: 0.16; transform: scaleY(0.96); }
        }

        @media (max-width: 390px){
          .hero-sp-title-wrap{
            width: min(88vw, 306px);
          }

          .hero-sp-svg-text{
            font-size: 74px;
            letter-spacing: 0.155em;
          }
        }

        @media (max-width: 370px){
          .hero-sp-title-wrap{
            width: min(88vw, 292px);
          }

          .hero-sp-svg-text{
            font-size: 72px;
            letter-spacing: 0.142em;
          }
        }

        @media (prefers-reduced-motion: reduce){
          .hero-sp-image,
          .hero-sp-image-veil,
          .hero-sp-image-bloom,
          .hero-sp-fade,
          .scroll-hint-sp,
          .hero-sp-svg-text,
          .hero-sp-title-wrap::before,
          .hero-sp-title-wrap::after{
            animation: none !important;
            transition: none !important;
          }

          .hero-sp-image{
            opacity: 1 !important;
            transform: none !important;
            filter: brightness(0.935) saturate(0.88) contrast(1.035) !important;
          }

          .hero-sp-image-veil,
          .hero-sp-image-bloom{
            opacity: 0 !important;
          }

          .hero-sp-fade{
            opacity: 1 !important;
            transform: none !important;
          }

          .hero-sp-svg-text{
            fill: rgba(255,255,255,0.93) !important;
            stroke: rgba(255,255,255,0.18) !important;
            stroke-dashoffset: 0 !important;
          }

          .hero-sp-title-wrap::before,
          .hero-sp-title-wrap::after{
            opacity: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}