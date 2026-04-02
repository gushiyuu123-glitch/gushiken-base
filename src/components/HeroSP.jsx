import React, { useMemo } from "react";
import heroSP from "../assets/hero-sp3.png";

export default function HeroSP() {
  const particles = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 7}s`,
      })),
    []
  );

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black md:hidden">
      {/* =====================
          BACKGROUND IMAGE
      ===================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroSP}
          alt="沖縄のWebデザイン・ホームページ制作｜美容・店舗・ブランド向け"
          className="
            h-full w-full object-cover
            brightness-[0.99]
            scale-[1.02]
            animate-[heroFloatSP_22s_ease-in-out_infinite]
            will-change-[transform,opacity]
            [transform:translateZ(0)]
          "
        />
      </div>

      {/* =====================
          TEXT PROTECTION GRADIENT
      ===================== */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-b
          from-[rgba(0,0,0,0.08)]
          via-[rgba(0,0,0,0.02)]
          to-transparent
        "
      />

      {/* =====================
          AMBIENT LIGHTS
      ===================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-[18%] top-[34%]
            h-[240px] w-[240px]
            rounded-full
            bg-[rgba(220,190,140,0.07)]
            blur-[120px]
          "
        />
      </div>

      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div
          className="
            absolute right-[14%] top-[28%]
            h-[220px] w-[220px]
            rounded-full
            bg-[rgba(90,160,255,0.10)]
            blur-[130px]
          "
        />
      </div>

      {/* =====================
          BOTTOM GRADIENT
      ===================== */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          h-[230px] w-full
          bg-gradient-to-t
          from-[rgba(0,0,0,0.42)]
          to-transparent
        "
      />

      {/* =====================
          PARTICLES
      ===================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-[particleRise_14s_linear_infinite] opacity-[0.35]">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="
                absolute h-[1.4px] w-[1.4px]
                rounded-full bg-white
                opacity-[0.22]
                animate-[spark_7s_ease-in-out_infinite]
                will-change-[transform,opacity]
                [transform:translateZ(0)]
              "
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* =====================
          TEXT CONTENT
      ===================== */}
      <div className="absolute left-6 right-4 top-[96px]">
        {/* SEO / category assist */}
        <p
          className="
            mb-3
            text-[0.78rem]
            tracking-[0.12em]
            text-white/60
          "
        >
          沖縄のWebデザイン / ホームページ制作
        </p>

        {/* TITLE */}
        <h1
          className="
            elegant-title no-warp-gpu
            mb-3
            text-[2rem]
            font-normal
            leading-[1.04]
            tracking-[0.22em]
            text-white/95
          "
        >
          GUSHIKEN
          <br />
          DESIGN
        </h1>

        {/* LINE */}
        <div
          className="
            elegant-sub delay-[0.15s] no-warp-gpu
            mb-4
            h-[1px] w-12
            bg-white/75
          "
        />

        {/* COPY */}
        <p
          className="
            elegant-sub delay-[0.3s] no-warp-gpu
            max-w-[88%]
            text-[1rem]
            leading-[1.7]
            tracking-wide
            text-white/95
          "
        >
          <span className="block no-warp-gpu">
            店舗・サロン・ブランドの価値を、
          </span>
          <span className="block no-warp-gpu">
            上品に、伝わりやすく整えるWeb制作
          </span>

          <span
            className="
              no-warp-gpu
              mt-4 block
              text-[0.75rem]
              tracking-[0.14em]
              text-white/75
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]
            "
          >
            見やすさと高級感を両立した設計
          </span>
        </p>
      </div>

      {/* =====================
          SCROLL HINT
      ===================== */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="scroll-hint no-warp-gpu" />
      </div>

      {/* =====================
          STYLES
      ===================== */}
      <style>{`
        @keyframes heroFloatSP {
          0% {
            transform: scale(1.02) translate(0, 0);
          }
          50% {
            transform: scale(1.025) translate(4px, 6px);
          }
          100% {
            transform: scale(1.02) translate(0, 0);
          }
        }

        @keyframes spark {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0.6);
          }
          50% {
            opacity: 0.35;
            transform: translateY(-18px) scale(1);
          }
        }

        @keyframes particleRise {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-40px);
          }
        }

        .no-warp-gpu {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .elegant-title,
        .elegant-sub {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .elegant-title {
          opacity: 0;
          transform: translateY(14px);
          letter-spacing: 0.32em;
          animation: titleFade 1.4s cubic-bezier(.25,.46,.25,1) forwards;
        }

        @keyframes titleFade {
          0% {
            opacity: 0;
            transform: translateY(14px);
            letter-spacing: 0.32em;
          }
          60% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.22em;
            text-shadow: 0 2px 8px rgba(0,0,0,0.28);
          }
        }

        .elegant-sub {
          opacity: 0;
          transform: translateY(12px);
          animation: subFade 1.05s cubic-bezier(.25,.46,.25,1) forwards;
        }

        @keyframes subFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-hint {
          width: 1px;
          height: 42px;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0.6),
            rgba(255,255,255,0)
          );
          animation: scrollPulse 2.4s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}