import React, { useState } from "react";
import heroSP from "../assets/hero-sp33.png";

function HeroSPTitleSignature() {
  return (
    <img
      className="hero-sp-title-img"
      src="/typography/Gushiken Design222.svg"
      alt=""
      aria-hidden="true"
      draggable="false"
      loading="eager"
      decoding="async"
    />
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
          onError={() => setImgLoaded(true)}
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

          {/* TITLE (PC版ロゴ演出を移植) */}
          <h1 className="hero-sp-logoReveal hero-sp-title-wrap mb-5" aria-label="GUSHIKEN DESIGN">
            <span className="sr-only">GUSHIKEN DESIGN</span>
            <HeroSPTitleSignature />
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

        /* ========== text fades ========== */
        .hero-sp-fade{
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.995);
          animation: heroSPReveal 1.02s cubic-bezier(.22,.56,.18,1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .hero-sp-fade-1{ animation-delay: 0.16s; }
        .hero-sp-fade-2{ animation-delay: 0.26s; }
        .hero-sp-fade-4{ animation-delay: 0.50s; }
        .hero-sp-fade-5{ animation-delay: 0.62s; }

        @keyframes heroSPReveal{
          to{ opacity: 1; transform: translate3d(0,0,0) scale(1); }
        }
/* =========================
   TITLE (SP)
   - 左端は常に不透明
   - 右端だけ羽根
   - 最終 118% で羽根を画面外へ逃がす
========================= */
.hero-sp-title-wrap{
  position: relative;
  width: min(84vw, 304px);
  line-height: 1;
  isolation: isolate;

  padding-block: 8px;
  padding-top: 10px; /* +2px */
}

.hero-sp-title-wrap::before,
.hero-sp-title-wrap::after{ display:none; }

.hero-sp-logoReveal{
  opacity: 0;
  transform: translate3d(0, 10px, 0) scale(0.976);
  animation: heroSpLogoReveal 1.18s cubic-bezier(.22,.56,.18,1) 0.32s both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.hero-sp-title-img{
  display:block;
  width:100%;
  height:auto;

  /* 0.80 → 0.76（ほんの少しだけ薄く） */
  opacity: 0.74; /* 0.76 → 0.74 */

  filter:
    invert(1)
    brightness(1.03)
    saturate(0)
    contrast(1.04)
    drop-shadow(0 2px 14px rgba(0,0,0,0.16)) /* 0.18 → 0.16 */
    drop-shadow(0 0 0.45px rgba(255,255,255,0.07)); /* 0.08 → 0.07 */

  transform: translate3d(0,0,0);
  backface-visibility: hidden;

  will-change: -webkit-mask-size, mask-size, opacity;

  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 84%,
    rgba(0,0,0,0) 100%
  );
  mask-image: linear-gradient(
    90deg,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 84%,
    rgba(0,0,0,0) 100%
  );

  -webkit-mask-repeat:no-repeat;
  mask-repeat:no-repeat;
  -webkit-mask-position:left center;
  mask-position:left center;

  -webkit-mask-size: 0% 100%;
  mask-size: 0% 100%;

  animation: heroSpTitleMask 1.18s cubic-bezier(.22,.56,.18,1) 0.32s both;
}

@keyframes heroSpTitleMask{
  0%   { -webkit-mask-size: 0% 100%;  mask-size: 0% 100%; }
  100% { -webkit-mask-size: 118% 100%; mask-size: 118% 100%; }
}

/* reduced-motion */
@media (prefers-reduced-motion: reduce){
  .hero-sp-logoReveal{ animation: none; opacity: 1; transform: none; }
  .hero-sp-title-img{
    animation: none;
    -webkit-mask-size: 118% 100%;
    mask-size: 118% 100%;
    opacity: 0.88;
  }
}
        .hero-sp-logoReveal .hero-sp-title-img{
          animation:
            heroSpLogoWipe 1.22s cubic-bezier(.22,.56,.18,1) 0.38s both,
            heroSpLogoFocus 1.22s cubic-bezier(.18,.62,.2,1) 0.38s both;
        }

        @supports not (mask-image: linear-gradient(#000,#000)){
          .hero-sp-title-img{ clip-path: inset(0 100% 0 0); }
          .hero-sp-logoReveal .hero-sp-title-img{
            animation:
              heroSpLogoClip 1.22s cubic-bezier(.22,.56,.18,1) 0.38s both,
              heroSpLogoFocus 1.22s cubic-bezier(.18,.62,.2,1) 0.38s both;
          }
        }

        @keyframes heroSpLogoReveal{
          0%{ opacity:0; transform: translate3d(0,10px,0) scale(0.976); }
          100%{ opacity:1; transform: translate3d(0,0,0) scale(1); }
        }

        /* ← ここが “118%で逃がす” */
        @keyframes heroSpLogoWipe{
          0%{ -webkit-mask-size: 0% 100%; mask-size: 0% 100%; }
          100%{ -webkit-mask-size: 118% 100%; mask-size: 118% 100%; }
        }

        @keyframes heroSpLogoClip{
          0%{ clip-path: inset(0 100% 0 0); }
          100%{ clip-path: inset(0 0 0 0); }
        }

/* ③ “最終到達”を薄める（ここが体感いちばん効く） */
@keyframes heroSpLogoFocus{
  0%{
    opacity: 0.12;
    filter:
      invert(1)
      brightness(1.03)
      saturate(0)
      contrast(1.02)
      blur(0.20px)
      drop-shadow(0 2px 10px rgba(0,0,0,0.16));
  }
  55%{
    opacity: 0.64; /* 0.68 → 0.64 */
    filter:
      invert(1)
      brightness(1.04) /* 1.05 → 1.04 */
      saturate(0)
      contrast(1.02)  /* 1.03 → 1.02 */
      blur(0.08px)
      drop-shadow(0 2px 12px rgba(0,0,0,0.18)); /* 0.20 → 0.18 */
  }
  100%{
    opacity: 0.74; /* 0.78 → 0.74 */
    filter:
      invert(1)
      brightness(1.04)
      saturate(0)
      contrast(1.02)
      blur(0)
      drop-shadow(0 2px 12px rgba(0,0,0,0.18));
  }
}
        /* ========== divider(1.03)
              blur(0)
              drop-shadow(0 2px 12px rgba(0,0,0,0.20));
          }
        }

        /* / scroll hint ========== */
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
            rgba(220,226,235,0.48),
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
          .hero-sp-title-wrap{ width: min(88vw, 306px); }
        }

        @media (max-width: 370px){
          .hero-sp-title-wrap{ width: min(88vw, 292px); }
        }

        @media (prefers-reduced-motion: reduce){
          .hero-sp-image,
          .hero-sp-image-veil,
          .hero-sp-image-bloom,
          .hero-sp-fade,
          .scroll-hint-sp,
          .hero-sp-logoReveal,
          .hero-sp-logoReveal .hero-sp-title-img{
            animation: none !important;
            transition: none !important;
          }

          .hero-sp-image{
            opacity: 1 !important;
            transform: none !important;
            filter: brightness(0.935) saturate(0.88) contrast(1.035) !important;
          }

          .hero-sp-image-veil,
          .hero-sp-image-bloom{ opacity: 0 !important; }

          .hero-sp-fade{ opacity: 1 !important; transform: none !important; }

          .hero-sp-logoReveal{
            opacity: 1 !important;
            transform: none !important;
          }

          .hero-sp-title-img{
            -webkit-mask-size: 118% 100% !important;
            mask-size: 118% 100% !important;
            clip-path: inset(0 0 0 0) !important;

            opacity: 0.78 !important;
            filter:
              invert(1)
              brightness(1.05)
              saturate(0)
              contrast(1.03)
              drop-shadow(0 2px 12px rgba(0,0,0,0.20)) !important;
          }
        }
      `}</style>
    </section>
  );
}