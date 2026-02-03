import React from "react";
import hero from "../assets/hero3.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] md:h-screen overflow-hidden pb-[8rem] bg-black">

      {/* =====================
          BACKGROUND
      ===================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="美容・EC・店舗向けの高品質Webデザイン｜沖縄フリーランス GUSHIKEN DESIGN"
          className="
            w-full h-full object-cover
            brightness-[1.05]
            scale-[1.015]
            animate-[heroFloat_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* =====================
          AMBIENT LIGHTS
      ===================== */}
      {/* Gold */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[12%] top-[30%]
            w-[430px] h-[430px]
            bg-[rgba(220,190,140,0.085)]
            blur-[150px]
            rounded-full
          "
        />
      </div>

      {/* Blue */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[14%] top-[22%]
            w-[330px] h-[330px]
            bg-[rgba(120,170,255,0.10)]
            blur-[160px]
            rounded-full
          "
        />
      </div>

      {/* =====================
          BOTTOM GRADIENT
      ===================== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[240px]
          bg-gradient-to-t
          from-[rgba(0,0,0,0.24)]
          to-transparent
          pointer-events-none
        "
      />

      {/* =====================
          DUST PARTICLES
      ===================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="
              absolute bg-white/25 rounded-full
              w-[2px] h-[8px]
              opacity-0
              animate-[dustFloat_9s_ease-in-out_infinite]
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 40 - 20}deg)`,
              animationDelay: `${Math.random() * 7.5}s`,
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
          left-8 md:left-20
          bottom-20 md:bottom-32
          right-6
          max-w-xl
        "
      >
        {/* TITLE */}
        <h1
          className="
            stylish-title
            text-white font-light
            leading-[1.12]
            text-[2.15rem] md:text-[4.25rem]
            tracking-[0.28em]
            mb-5
          "
        >
          GUSHIKEN<br />DESIGN
        </h1>

        {/* UNDERLINE */}
        <div
          className="
            stylish-sub delay-[0.12s]
            w-24 h-[1px] bg-white/60 mb-6
          "
        />

        {/* =====================
            COPY BLOCK（←SEO強化ポイント）
        ===================== */}
        <p
          className="
            stylish-sub delay-[0.28s]
            text-white/90
            text-[0.95rem] md:text-[1.15rem]
            leading-relaxed
            tracking-wide
            max-w-md
            nowarp
          "
        >
          {/* ▼ レイヤー1：SEOワード（自然） */}
          <span className="block text-white/60 text-[0.82rem] tracking-[0.12em] mb-3">
            美容・EC・店舗向けの高品質Webデザインを沖縄から制作。
          </span>

          {/* ▼ レイヤー2：感情（WHY） */}
          <span className="block">
            他と同じデザインでは物足りない人へ。上品さと<br />
          </span>
          <span className="block mt-1">
            “伝わる構造”を両立させたWebサイトを制作します。
          </span>

          {/* ▼ レイヤー3：思想レイヤー */}
          <span
            className="
              block mt-4
              text-white/55
              text-[0.82em]
              tracking-[0.14em]
            "
          >
            静けさを設計し、構造で届ける。<br />
            ―― 高品質ブランドのためのWebデザイン。
          </span>
        </p>

        <style>{`
          .nowarp {
            will-change: transform, opacity;
            backface-visibility: hidden;
            transform: translateZ(0);
          }
        `}</style>
      </div>

      {/* =====================
          STYLES
      ===================== */}
      <style>{`
        @keyframes heroFloat {
          0%   { transform: scale(1.015) translate(0,0); }
          50%  { transform: scale(1.020) translate(4px,8px); }
          100% { transform: scale(1.015) translate(0,0); }
        }

        @keyframes dustFloat {
          0%   { opacity: 0; transform: translateY(0) scale(0.8); }
          35%  { opacity: 0.6; transform: translateY(-14px) scale(1); }
          70%  { opacity: 0.3; transform: translateY(-24px) scale(1); }
          100% { opacity: 0; transform: translateY(-36px) scale(0.9); }
        }

        .stylish-title {
          opacity: 0;
          transform: translateY(22px);
          filter: blur(6px);
          animation: titleReveal 1.4s cubic-bezier(.23,.7,.3,1) forwards;
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(22px);
            filter: blur(6px);
            letter-spacing: 0.40em;
          }
          40% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0.6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
            letter-spacing: 0.28em;
            text-shadow: 0 2px 8px rgba(0,0,0,0.22);
          }
        }

        .stylish-sub {
          opacity: 0;
          transform: translate(12px,14px);
          filter: blur(4px);
          animation: subFlow 1.25s cubic-bezier(.25,.46,.25,1) forwards;
        }
        .stylish-sub.delay-\[0\.12s\] { animation-delay: 0.12s; }
        .stylish-sub.delay-\[0\.28s\] { animation-delay: 0.28s; }

        @keyframes subFlow {
          to {
            opacity: 1;
            transform: translate(0,0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
