import React from "react";
import heroSP from "../assets/hero-sp3.png";

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
            brightness-[0.97]     /* ← 1% 暗くして文字をクリアに */
            scale-[1.02]
            animate-[heroFloatSP_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== テキスト背面のクリアグラデ（濁りを消す） ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[rgba(0,0,0,0.06)]   /* ← ほぼ見えないがコントラストUP */
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      {/* ===== Ambient Light（弱め） ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[17%] top-[33%]
            w-[260px] h-[260px]
            bg-[rgba(220,190,140,0.07)]
            blur-[110px]
            rounded-full
          "
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[12%] top-[28%]
            w-[220px] h-[220px]
            bg-[rgba(90,160,255,0.10)]
            blur-[120px]
            rounded-full
          "
        ></div>
      </div>

      {/* ===== 下グラデ ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[230px]
          bg-gradient-to-t from-[rgba(0,0,0,0.40)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== High-end Particles（減らして上品に） ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-[particleRise_14s_linear_infinite] opacity-[0.45]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="
                absolute rounded-full bg-white
                w-[1.5px] h-[1.5px]
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

      {/* ===== TEXT ===== */}
      <div
        className="
          absolute
          left-6 top-[100px] right-3
        "
      >
        <h1
          className="
            aq-fade delay-1
            text-[rgba(255,255,255,0.92)]   /* 少し濃いオフホワイト */
            font-normal
            leading-[1.06]
            text-[2rem]
            tracking-[0.22em]
            mb-3
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]   /* シャープな影 */
          "
        >
          GUSHIKEN<br/>DESIGN
        </h1>

        <div
          className="
            aq-fade delay-2
            w-12 h-[1px]
            bg-white/75
            mb-4
          "
        />

        <p
          className="
            aq-fade delay-3
            text-white/90
            text-[1.05rem]
            leading-[1.7]
            tracking-wide
            drop-shadow-[0_2px_9px_rgba(0,0,0,0.55)]
            max-w-[82%]
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
