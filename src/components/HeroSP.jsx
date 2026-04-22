import React, { useState } from "react";
import heroSP from "../assets/hero-sp33.png";

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
          alt="沖縄のWebデザイン・ホームページ制作｜美容・店舗・ブランド向け"
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
          h-[230px]
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
      <div className="absolute inset-x-0 bottom-[4.2rem] z-[2] px-6">
        <div className="max-w-[19rem]">
          <div className="hero-sp-fade hero-sp-fade-1">
            <p className="mb-2.5 text-[0.72rem] leading-none tracking-[0.12em] text-white/58">
              沖縄のWebデザイン / ホームページ制作
            </p>
          </div>

          <div className="hero-sp-fade hero-sp-fade-2 pl-[2px]">
            <p className="mb-3 text-[0.88rem] font-light leading-[1.68] tracking-[0.06em] text-white/84">
              整えることで、価値は伝わる。
            </p>
          </div>

          <h1 className="hero-sp-fade hero-sp-fade-3 mb-4 text-[2.08rem] font-light leading-[1.01] tracking-[0.16em] text-white/97">
            GUSHIKEN
            <br />
            DESIGN
          </h1>

          <div className="hero-sp-fade hero-sp-fade-4 mb-4 h-px w-[54px] bg-white/54" />

          <div className="hero-sp-fade hero-sp-fade-5 pl-[8px]">
            <div className="max-w-[16.9rem] text-[0.92rem] leading-[1.8] tracking-[0.01em] text-white/90">
              <p className="mb-1.5">店舗・サロン・ブランドの価値を、</p>
              <p>上品に、伝わりやすく整えるWeb制作</p>

              <p className="mt-3 text-[0.76rem] leading-[1.76] tracking-[0.07em] text-white/64">
                見やすさと高級感を両立し、
                <br />
                信頼感のある印象へ整えます。
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
           ここだけ触ればいい
        ========================= */
        .hero-sp-root{
          --fx: 56%;
          --fy: 46%;
        }

        /* iPhone mini系：少しだけ上に寄せる例 */
        @media (max-width: 390px){
          .hero-sp-root{ --fx: 56%; --fy: 43%; }
        }
        @media (max-width: 370px){
          .hero-sp-root{ --fx: 57%; --fy: 41%; }
        }

        /* =========================
           画像：coverは維持、でも scale を消して “余計な切れ” を止める
        ========================= */
        .hero-sp-image{
          object-position: var(--fx) var(--fy);
          filter: brightness(0.968) saturate(0.92) contrast(1.015);
          opacity: 0;
          transform: translate3d(0, 10px, 0) scale(1.01); /* ←最小だけ */
          transition:
            opacity 1.42s cubic-bezier(0.18,0.62,0.2,1),
            transform 2.05s cubic-bezier(0.22,0.1,0.28,1),
            filter 1.6s cubic-bezier(0.22,0.1,0.28,1);
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
          transform-origin: center center;
        }
        .hero-sp-root[data-loaded="true"] .hero-sp-image{
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1); /* ←ここが重要（拡大しない） */
        }

        /* veil/bloom：元の“気配”は維持しつつ、loadedで薄く抜く */
        .hero-sp-image-veil{
          opacity: 1;
          background: linear-gradient(
            180deg,
            rgba(7,7,7,0.28) 0%,
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
          background: radial-gradient(
            72% 52% at 58% 34%,
            rgba(255,255,255,0.11) 0%,
            rgba(255,255,255,0.05) 32%,
            rgba(255,255,255,0.015) 56%,
            rgba(255,255,255,0) 78%
          );
          transition:
            opacity 1.9s cubic-bezier(.2,.62,.2,1),
            transform 2.2s cubic-bezier(.2,.62,.2,1);
          will-change: opacity, transform;
        }
        .hero-sp-root[data-loaded="true"] .hero-sp-image-bloom{
          opacity: 0.22;
          transform: scale(1);
        }

        /* テキストフェード：元の設計 그대로 */
        .hero-sp-fade{
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.995);
          animation: heroSPReveal 1.02s cubic-bezier(.22,.56,.18,1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .hero-sp-fade-1{ animation-delay: 0.18s; }
        .hero-sp-fade-2{ animation-delay: 0.28s; }
        .hero-sp-fade-3{ animation-delay: 0.38s; }
        .hero-sp-fade-4{ animation-delay: 0.48s; }
        .hero-sp-fade-5{ animation-delay: 0.60s; }

        @keyframes heroSPReveal{
          to{
            opacity: 1;
            transform: translate3d(0,0,0) scale(1);
          }
        }

        .scroll-hint-sp{
          width: 1px;
          height: 26px;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0.42),
            rgba(255,255,255,0)
          );
          animation: scrollPulseSP 2.9s ease-in-out infinite;
        }
        @keyframes scrollPulseSP{
          0%{ opacity: 0.14; }
          50%{ opacity: 0.42; }
          100%{ opacity: 0.14; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce){
          .hero-sp-image,
          .hero-sp-image-veil,
          .hero-sp-image-bloom,
          .hero-sp-fade,
          .scroll-hint-sp{
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: brightness(0.968) saturate(0.92) contrast(1.015) !important;
          }
          .hero-sp-image-veil,
          .hero-sp-image-bloom{
            opacity: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}