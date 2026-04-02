import React, { useMemo } from "react";
import hero from "../assets/hero3.png";

export default function Hero() {
  const dustParticles = useMemo(
    () =>
      [...Array(10)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 40 - 20}deg`,
        delay: `${Math.random() * 7.5}s`,
      })),
    []
  );

  return (
    <section className="relative w-full h-[92vh] overflow-hidden bg-black pb-[8rem] md:h-screen">
      {/* =====================
          BACKGROUND
      ===================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="美容・EC・店舗向けの高品質Webデザイン｜沖縄フリーランス GUSHIKEN DESIGN"
          className="
            h-full w-full object-cover
            brightness-[1.05]
            scale-[1.015]
            animate-[heroFloat_22s_ease-in-out_infinite]
            will-change-transform
          "
        />
      </div>

      {/* =====================
          AMBIENT LIGHTS
      ===================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-[12%] top-[30%]
            h-[430px] w-[430px]
            rounded-full
            bg-[rgba(220,190,140,0.085)]
            blur-[150px]
          "
        />
      </div>

      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div
          className="
            absolute right-[14%] top-[22%]
            h-[330px] w-[330px]
            rounded-full
            bg-[rgba(120,170,255,0.10)]
            blur-[160px]
          "
        />
      </div>

      {/* =====================
          BOTTOM GRADIENT
      ===================== */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          h-[240px] w-full
          bg-gradient-to-t
          from-[rgba(0,0,0,0.24)]
          to-transparent
        "
      />

      {/* =====================
          DUST PARTICLES
      ===================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {dustParticles.map((particle) => (
          <div
            key={particle.id}
            className="
              absolute h-[8px] w-[2px]
              rounded-full bg-white/25
              opacity-0
              animate-[dustFloat_9s_ease-in-out_infinite]
              will-change-[transform,opacity]
            "
            style={{
              left: particle.left,
              top: particle.top,
              transform: `rotate(${particle.rotate})`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* =====================
          TEXT BLOCK
      ===================== */}
      <div
        className="
          absolute
          left-8 right-6 bottom-20
          max-w-xl
          md:left-20 md:bottom-32
        "
      >
        {/* TITLE */}
        <h1
          className="
            stylish-title gpu-fix
            mb-5
            text-[2.15rem] font-light leading-[1.12]
            tracking-[0.28em] text-white
            md:text-[4.25rem]
          "
        >
          GUSHIKEN
          <br />
          DESIGN
        </h1>

        {/* UNDERLINE */}
        <div
          className="
            stylish-sub delay-[0.12s] gpu-fix
            mb-6 h-[1px] w-24 bg-white/60
          "
        />

        {/* COPY BLOCK */}
        <p
          className="
            stylish-sub delay-[0.28s] gpu-fix
            max-w-md
            text-[0.95rem] leading-relaxed tracking-wide text-white/90
            md:text-[1.12rem]
          "
        >
          {/* レイヤー1：カテゴリ補助 */}
          <span className="mb-3 block text-[0.82rem] tracking-[0.12em] text-white/60">
            沖縄のWebデザイン / ホームページ制作
          </span>

          {/* レイヤー2：主コピー */}
          <span className="block">
            店舗・サロン・ブランドの価値を、
          </span>
          <span className="mt-1 block">
            上品に、伝わりやすく整えるWeb制作
          </span>

          {/* レイヤー3：補助メリット */}
          <span
            className="
              mt-4 block
              text-[0.82em]
              tracking-[0.14em]
              text-white/58
            "
          >
            見やすさと高級感を両立し、
            <br />
            信頼感のある印象へ整えます。
          </span>
        </p>
      </div>

      {/* =====================
          STYLES
      ===================== */}
      <style>{`
        @keyframes heroFloat {
          0% {
            transform: scale(1.015) translate(0, 0);
          }
          50% {
            transform: scale(1.02) translate(4px, 8px);
          }
          100% {
            transform: scale(1.015) translate(0, 0);
          }
        }

        @keyframes dustFloat {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.8);
          }
          35% {
            opacity: 0.5;
            transform: translateY(-14px) scale(1);
          }
          70% {
            opacity: 0.25;
            transform: translateY(-24px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-36px) scale(0.9);
          }
        }

        .gpu-fix {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .stylish-title {
          opacity: 0;
          transform: translateY(22px);
          animation: titleReveal 1.35s cubic-bezier(.23,.7,.3,1) forwards;
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(22px);
            letter-spacing: 0.4em;
          }
          45% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.28em;
            text-shadow: 0 2px 8px rgba(0,0,0,0.22);
          }
        }

        .stylish-sub {
          opacity: 0;
          transform: translate(12px, 14px);
          animation: subFlow 1.15s cubic-bezier(.25,.46,.25,1) forwards;
        }

        .stylish-sub.delay-\\[0\\.12s\\] {
          animation-delay: 0.12s;
        }

        .stylish-sub.delay-\\[0\\.28s\\] {
          animation-delay: 0.28s;
        }

        @keyframes subFlow {
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
}