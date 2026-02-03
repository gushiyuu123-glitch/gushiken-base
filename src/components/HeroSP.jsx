import React from "react";
import heroSP from "../assets/hero-sp3.png";

export default function HeroSP() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden md:hidden bg-black">

      {/* =====================
          BACKGROUND IMAGE
      ===================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroSP}
          alt="沖縄のフリーランスWebデザイナー｜美容・EC・店舗向けの高品質Web制作"
          className="
            w-full h-full object-cover
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
          absolute inset-0
          bg-gradient-to-b
          from-[rgba(0,0,0,0.08)]
          via-[rgba(0,0,0,0.02)]
          to-transparent
          pointer-events-none
        "
      />

      {/* =====================
          AMBIENT LIGHTS
      ===================== */}
      {/* Gold */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[18%] top-[34%]
            w-[240px] h-[240px]
            bg-[rgba(220,190,140,0.07)]
            blur-[120px]
            rounded-full
          "
        />
      </div>

      {/* Blue */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[14%] top-[28%]
            w-[220px] h-[220px]
            bg-[rgba(90,160,255,0.10)]
            blur-[130px]
            rounded-full
          "
        />
      </div>

      {/* =====================
          BOTTOM GRADIENT
      ===================== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[230px]
          bg-gradient-to-t
          from-[rgba(0,0,0,0.42)]
          to-transparent
          pointer-events-none
        "
      />

      {/* =====================
          PARTICLES
      ===================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-[particleRise_14s_linear_infinite] opacity-[0.35]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="
                absolute rounded-full bg-white
                w-[1.4px] h-[1.4px]
                opacity-[0.22]
                animate-[spark_7s_ease-in-out_infinite]
                will-change-[transform,opacity]
                [transform:translateZ(0)]
              "
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 7}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* =====================
          TEXT CONTENT
      ===================== */}
      <div className="absolute left-6 top-[96px] right-4">

        {/* Small SEO assist line（自然に1行だけ追加） */}
        <p
          className="
            text-white/60
            text-[0.78rem]
            tracking-[0.12em]
            mb-3
          "
        >
          沖縄発・美容/EC/店舗向けの高品質Webデザイン
        </p>

        {/* TITLE */}
        <h1
          className="
            elegant-title nowarp
            text-white/95
            font-normal
            leading-[1.04]
            text-[2rem]
            tracking-[0.22em]
            mb-3
          "
        >
          GUSHIKEN<br />DESIGN
        </h1>

        {/* LINE */}
        <div
          className="
            elegant-sub delay-[0.15s] nowarp
            w-12 h-[1px]
            bg-white/75
            mb-4
          "
        />

        {/* COPY */}
        <p
          className="
            elegant-sub delay-[0.3s] nowarp
            text-white/95
            text-[1rem]
            leading-[1.7]
            tracking-wide
            max-w-[88%]
          "
        >
          <span className="block nowarp">
            店舗・サロン・ブランドの魅力を、
          </span>
          <span className="block nowarp">
            上品に、分かりやすく伝えるWeb制作
          </span>

          <span
            className="
              block mt-4
              text-white/75
              text-[0.75rem]
              tracking-[0.14em]
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]
              nowarp
            "
          >
            流行よりも「ちゃんと伝わること」を  
            大切にしています
          </span>
        </p>
      </div>

      {/* =====================
          SCROLL HINT
      ===================== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="scroll-hint nowarp" />
      </div>

      {/* =====================
          STYLES
      ===================== */}
      <style>{`
        @keyframes heroFloatSP {
          0%   { transform: scale(1.02) translate(0,0); }
          50%  { transform: scale(1.025) translate(4px,6px); }
          100% { transform: scale(1.02) translate(0,0); }
        }

        @keyframes spark {
          0%,100% { opacity: 0; transform: translateY(0) scale(0.6); }
          50% { opacity: 0.35; transform: translateY(-18px) scale(1); }
        }

        @keyframes particleRise {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40px); }
        }

        .nowarp {
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
          0% { opacity: 0.2; }
          50% { opacity: 0.6; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
