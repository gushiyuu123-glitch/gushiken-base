import React from "react";
import hero from "../assets/hero3.png";

export default function Hero() {
  return (
<section className="relative w-full h-[92vh] md:h-screen overflow-hidden pb-[8rem]">


      {/* ===== 背景 ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="GUSHIKEN DESIGN — hero"
          className="
            w-full h-full object-cover
            brightness-[1.05]
            scale-[1.015]
            animate-[heroFloat_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== Gold Ambient ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[12%] top-[28%]
            w-[420px] h-[420px]
            bg-[rgba(220,190,140,0.085)]
            blur-[150px]
            rounded-full
          "
        />
      </div>

      {/* ===== Blue Ambient ===== */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[14%] top-[20%]
            w-[320px] h-[320px]
            bg-[rgba(120,170,255,0.10)]
            blur-[160px]
            rounded-full
          "
        />
      </div>

      {/* ===== 下グラデ ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[260px]
          bg-gradient-to-t from-[rgba(0,0,0,0.18)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== 映画的 Dust Particles ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* ===== TEXT ===== */}
      <div
        className="
          absolute
          left-8 md:left-20
          bottom-20 md:bottom-32
          right-6
          max-w-xl
        "
      >
        {/* ---- Title ---- */}
        <h1
          className="
            stylish-title
            text-white font-light
            leading-[1.12]
            text-[2.1rem] md:text-[4.2rem]
            tracking-[0.30em]
            mb-5
          "
        >
          GUSHIKEN<br/>DESIGN
        </h1>

        {/* ---- Line ---- */}
        <div
          className="
            stylish-sub delay-[0.15s]
            w-20 h-[1px] bg-white/60 mb-5
          "
        />
{/* ---- Copy ---- */}
<p
  className="
    stylish-sub delay-[0.32s]
    text-white/90
    text-[0.9rem] md:text-[1.15rem]
    leading-relaxed
    tracking-wide
    max-w-md
  "
>
  普通じゃ物足りない人のための、<br />
  上品で“伝わるサイト制作”。

  {/* PC用：思想タグライン */}
  <span
    className="
      hidden md:block
      mt-4
      text-white/60
      text-[0.82em]
      tracking-[0.14em]
    "
  >
    世界観を設計し、構造で届けるWebデザイン
  </span>
</p>

      </div>

      {/* ===== Keyframes ===== */}
      <style>{`
        /* 背景ゆらぎ */
        @keyframes heroFloat {
          0%   { transform: scale(1.015) translate(0,0); }
          50%  { transform: scale(1.020) translate(4px,8px); }
          100% { transform: scale(1.015) translate(0,0); }
        }

        /* Dust floating */
        @keyframes dustFloat {
          0%   { opacity: 0; transform: translateY(0) scale(0.8); }
          35%  { opacity: 0.6; transform: translateY(-18px) scale(1); }
          70%  { opacity: 0.3; transform: translateY(-28px) scale(1); }
          100% { opacity: 0; transform: translateY(-40px) scale(0.9); }
        }

        /* ======================================
           タイトル：スタイリッシュフェード
        ====================================== */
/* ===== Stylish Title (PC) ===== */
.stylish-title {
  opacity: 0;
  transform: translateY(22px);
  filter: blur(6px);
  letter-spacing: 0.42em; /* ← アニメ開始時は広く */
  animation: titleReveal 1.4s cubic-bezier(.23, .7, .3, 1) forwards;
}

/* ディレイ */
.stylish-title.delay-1 {
  animation-delay: 0.2s;
}

/* ===== Keyframes ===== */
@keyframes titleReveal {
  0% {
    opacity: 0;
    transform: translateY(22px);
    filter: blur(6px);
    letter-spacing: 0.42em;
    text-shadow: none;
  }
  40% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0.6px);  /* ← 一瞬だけ軽く残すことで “にじませ” 抑制 */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);       /* ← 完全にシャープになる */
    letter-spacing: 0.30em; /* ← 最終値は tracking-[0.30em] と一致 */
    text-shadow: 0 2px 8px rgba(0,0,0,0.22);
  }
}

        /* ======================================
           サブ：右下からの流線フェード
        ====================================== */
        .stylish-sub {
          opacity: 0;
          transform: translate(14px, 14px);
          filter: blur(4px);
          animation: subFlow 1.25s cubic-bezier(.25,.46,.25,1) forwards;
        }

        .stylish-sub.delay-\\[0\\.15s\\] { animation-delay: 0.15s; }
        .stylish-sub.delay-\\[0\\.32s\\] { animation-delay: 0.32s; }

        @keyframes subFlow {
          0% {
            opacity: 0;
            transform: translate(14px, 14px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
            filter: blur(0px);
          }
        }
      `}</style>
      
    </section>
  );
}
