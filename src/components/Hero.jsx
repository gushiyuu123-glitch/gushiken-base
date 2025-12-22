import React from "react";
import hero from "../assets/hero4.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] md:h-screen overflow-hidden">

      {/* ===== 背景 ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="GUSHIKEN DESIGN — hero"
          className="
            w-full h-full object-cover
            brightness-[1.06]
            scale-[1.015]
            animate-[heroFloat_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== Gold Ambient Light ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[12%] top-[28%]
            w-[420px] h-[420px]
            bg-[rgba(220,190,140,0.085)]
            blur-[140px]
            rounded-full
          "
        ></div>
      </div>

      {/* ===== Blue Ambient Light（沖縄の青） ===== */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[10%] top-[22%]
            w-[350px] h-[350px]
            bg-[rgba(100,170,255,0.13)]
            blur-[150px]
            rounded-full
          "
        ></div>
      </div>

      {/* ===== 高級粒子（高級ノイズ） ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-[particleRise_16s_linear_infinite] opacity-[0.55]">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="
                absolute rounded-full bg-white
                w-[2px] h-[2px]
                opacity-[0.22]
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

      {/* ===== 下グラデ ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[260px]
          bg-gradient-to-t from-[rgba(0,0,0,0.18)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== Text ===== */}
      <div
        className="
          absolute
          left-8 md:left-20
          bottom-20 md:bottom-32
          right-6
          max-w-xl
        "
      >

        {/* ==== タイトル ==== */}
        <h1
          className="
            aq-fade delay-1
            text-white font-light
            leading-[1.12]
            text-[2.1rem] md:text-[4.2rem]
            tracking-[0.26em] md:tracking-[0.30em]
            mb-3
            relative
            overflow-hidden
            shine-text
            soft-glow
          "
          translate="no"
        >
          GUSHIKEN<br/>DESIGN
        </h1>

        {/* ==== ライン ==== */}
        <div
          className="
            aq-fade delay-2
            w-20 h-[1px]
            bg-white/55 mb-5
          "
        ></div>

        {/* ==== コピー ==== */}
        <p
          className="
            aq-fade delay-3
            text-white/90
            text-[0.9rem] md:text-[1.15rem]
            leading-relaxed
            tracking-wide
            max-w-md
          "
        >
          普通じゃ物足りない人のための、<br />
          上品で“伝わるサイト制作”。
        </p>
      </div>

      {/* ===== Keyframes ===== */}
      <style>{`
        /* 背景ゆらぎ */
        @keyframes heroFloat {
          0%   { transform: scale(1.015) translate(0, 0); }
          50%  { transform: scale(1.020) translate(4px, 8px); }
          100% { transform: scale(1.015) translate(0, 0); }
        }

        /* 光の縦筋（リフレクション） */
        .shine-text:before {
          content: "";
          position: absolute;
          top: 0;
          left: -130%;
          width: 130%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.45) 45%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-15deg);
          animation: shineMove 8s ease-in-out infinite;
        }

        @keyframes shineMove {
          0%   { left: -130%; }
          55%  { left: 130%; }
          100% { left: 130%; }
        }

        /* タイトルの呼吸する発光 */
        .soft-glow {
          animation: softGlow 7s ease-in-out infinite;
        }
        @keyframes softGlow {
          0%, 100% { text-shadow: 0 0 7px rgba(255,255,255,0.30); }
          50%      { text-shadow: 0 0 18px rgba(255,255,255,0.55); }
        }

        /* 高級粒子 */
        @keyframes spark {
          0%, 100% { opacity: 0.0; transform: translateY(0) scale(0.6); }
          50%      { opacity: 0.35; transform: translateY(-18px) scale(1); }
        }
        @keyframes particleRise {
          0% { opacity: 0.4; transform: translateY(0); }
          100% { opacity: 0.4; transform: translateY(-40px); }
        }
      `}</style>
    </section>
  );
}
