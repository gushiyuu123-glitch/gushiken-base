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
            brightness-[1.05]
            scale-[1.01]
            animate-[heroFloat_26s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== Gold Ambient Light ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[10%] top-[32%]
            w-[340px] h-[340px]
            bg-[rgba(220,190,140,0.06)]
            blur-[120px]
            rounded-full
          "
        />
      </div>

      {/* ===== Blue Ambient Light ===== */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[15%] top-[22%]
            w-[260px] h-[260px]
            bg-[rgba(100,170,255,0.10)]
            blur-[130px]
            rounded-full
          "
        />
      </div>

      {/* ===== 高級粒子（白＋黒） ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="
              absolute rounded-full
              w-[2px] h-[2px]
            "
            style={{
              background: Math.random() > 0.5 ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.18)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ===== 下グラデ（黒文字用：白〜透明） ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[230px]
          bg-gradient-to-t from-[rgba(255,255,255,0.45)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== Text ===== */}
      <div
        className="
          absolute
          left-7 md:left-20
          bottom-[22%] md:bottom-[30%]
          pr-6
          max-w-lg
        "
      >
        {/* ==== タイトル：黒の上品版 ==== */}
   <h1
  className="
    aq-fade delay-1
    font-light
    text-[rgba(0,0,0,0.68)]
    leading-[1.22]
    text-[2rem] md:text-[4.2rem]
    tracking-[0.36em]
    mb-5
    relative
    refined-title
  "
  translate="no"
>
  GUSHIKEN<br/>DESIGN
</h1>


        {/* ==== ライン ==== */}
        <div className="aq-fade delay-2 w-14 h-[1px] bg-[rgba(0,0,0,0.38)] mb-4" />

        {/* ==== コピー ==== */}
   <p
  className="
    aq-fade delay-3
    text-[rgba(0,0,0,0.65)]
    text-[0.87rem] md:text-[1.1rem]
    leading-relaxed
    tracking-[0.05em]
    max-w-sm
  "
>
  普通じゃ物足りない人のための、<br/>
  上品で“伝わるサイト制作”。
</p>

      </div>

      {/* ===== Keyframes ===== */}
      <style>{`
        /* 背景ゆらぎ */
        @keyframes heroFloat {
          0%   { transform: scale(1.01) translate(0, 0); }
          50%  { transform: scale(1.015) translate(3px, 4px); }
          100% { transform: scale(1.01) translate(0, 0); }
        }

        /* 黒文字専用シャイン */
        .shine-dark:before {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.20) 45%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-15deg);
          animation: shineMove 10s ease-in-out infinite;
        }

        @keyframes shineMove {
          0%   { left: -150%; }
          45%  { left: 150%; }
          100% { left: 150%; }
        }

        /* 黒文字の“呼吸光” */
        .soft-glow-dark {
          animation: softGlowDark 7s ease-in-out infinite;
        }
        @keyframes softGlowDark {
          0%, 100% { text-shadow: 0 0 4px rgba(0,0,0,0.06); }
          50%      { text-shadow: 0 0 7px rgba(0,0,0,0.10); }
        }
          .refined-title::before {
  content: "";
  position: absolute;
  inset: 0;
  left: -140%;
  width: 140%;
  background: linear-gradient(
    120deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.18) 45%,
    rgba(255,255,255,0) 100%
  );
  transform: skewX(-15deg);
  animation: refinedShine 9s ease-in-out infinite;
}

@keyframes refinedShine {
  0%   { left: -140%; }
  50%  { left: 140%; }
  100% { left: 140%; }
}

      `}</style>
    </section>
  );
}
