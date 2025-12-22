import React from "react";
import heroSP from "../assets/hero-sp1.png";

export default function HeroSP() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden md:hidden">

      {/* ===== 背景 ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroSP}
          alt="GUSHIKEN DESIGN — hero"
          className="
            w-full h-full object-cover
            brightness-[1.06]
            scale-[1.02]
            animate-[heroFloatSP_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== Gold Ambient Light（柔らかい光） ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[17%] top-[30%]
            w-[320px] h-[320px]
            bg-[rgba(220,190,140,0.10)]
            blur-[130px]
            rounded-full
          "
        ></div>
      </div>

      {/* ===== Blue Ambient（沖縄の青） ===== */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[10%] top-[26%]
            w-[260px] h-[260px]
            bg-[rgba(90,160,255,0.13)]
            blur-[140px]
            rounded-full
          "
        ></div>
      </div>

      {/* ===== 下グラデ ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[260px]
          bg-gradient-to-t from-[rgba(0,0,0,0.36)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== PartiGlow（派手な演出・上品） ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-[particleRise_14s_linear_infinite] opacity-[0.6]">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="
                absolute rounded-full bg-white
                w-[2px] h-[2px]
                opacity-[0.25]
                animate-[spark_7s_ease-in-out_infinite]
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

      {/* ===== Text（最適配置） ===== */}
      <div
        className="
          absolute
          left-6
          top-[78px]
          right-3
        "
      >
        {/* ---- Main Title ---- */}
        <h1
          className="
            aq-fade delay-1
            text-white/95 font-normal
            leading-[1.07]
            text-[2rem]
            tracking-[0.23em]
            mb-3
            drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)]
          "
        >
          GUSHIKEN<br/>DESIGN
        </h1>

        <div
          className="
            aq-fade delay-2
            w-12 h-[1px]
            bg-white/70
            mb-4
          "
        />

        {/* ---- Subtitle ---- */}
        <p
          className="
            aq-fade delay-3
            text-white/90
            text-[1.05rem]
            leading-[1.7]
            tracking-wide
            drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]
            max-w-[80%]
          "
        >
          普通じゃ物足りない人のための、<br />
          上品で“伝わるサイト制作”。
        </p>
      </div>

      {/* ===== Animations ===== */}
      <style>{`
        @keyframes heroFloatSP {
          0%   { transform: scale(1.02) translate(0,0); }
          50%  { transform: scale(1.025) translate(4px,6px); }
          100% { transform: scale(1.02) translate(0,0); }
        }

        @keyframes spark {
          0%, 100% { opacity: 0.0; transform: translateY(0) scale(0.6); }
          50% { opacity: 0.35; transform: translateY(-18px) scale(1); }
        }

        @keyframes particleRise {
          0% { opacity: 0.4; transform: translateY(0); }
          100% { opacity: 0.4; transform: translateY(-40px); }
        }
      `}</style>
    </section>
  );
}
