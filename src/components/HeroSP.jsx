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
            brightness-[0.99]
            scale-[1.02]
            animate-[heroFloatSP_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== テキスト背面クリアグラデ ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[rgba(0,0,0,0.05)]
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      {/* ===== Gold Ambient ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[17%] top-[33%]
            w-[240px] h-[240px]
            bg-[rgba(220,190,140,0.07)]
            blur-[110px]
            rounded-full
          "
        />
      </div>

      {/* ===== Blue Ambient ===== */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div
          className="
            absolute right-[12%] top-[28%]
            w-[210px] h-[210px]
            bg-[rgba(90,160,255,0.10)]
            blur-[120px]
            rounded-full
          "
        />
      </div>

      {/* ===== 下グラデ ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[230px]
          bg-gradient-to-t from-[rgba(0,0,0,0.40)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== Particles（極小・控えめ） ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-[particleRise_14s_linear_infinite] opacity-[0.45]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="
                absolute rounded-full bg-white
                w-[1.4px] h-[1.4px]
                opacity-[0.24]
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
      <div className="absolute left-6 top-[100px] right-3">

        {/* ---- Main Title ---- */}
        <h1
          className="
            elegant-title
            text-[rgba(255,255,255,0.92)]
            font-normal
            leading-[1.06]
            text-[2rem]
            tracking-[0.22em]
            mb-3
          "
        >
          GUSHIKEN<br/>DESIGN
        </h1>

        <div
          className="
            elegant-sub delay-[0.15s]
            w-12 h-[1px]
            bg-white/75
            mb-4
          "
        />
{/* ---- Subtitle ---- */}
<p
  className="
    elegant-sub delay-[0.3s]
    text-white/90
    text-[1.05rem] md:text-[1.1rem]
    leading-[1.7]
    tracking-wide
    max-w-[82%]
  "
>
  普通じゃ物足りない人のための、<br />
  上品で“伝わるサイト制作”。

  {/* SP用サブコピー */}
  <span
    className="
      block md:hidden
      mt-5
      text-white/65
      text-[0.85rem]
      tracking-[0.12em]
    "
  >
    ブランド・店舗<br></br>個人事業向け Webデザイン
  </span>
</p>


      </div>
{/* ===== SP Scroll Hint ===== */}
<div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
  <div className="scroll-hint" />
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

        /* ==== Elegant Title Fade ==== */
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
            text-shadow: none;
          }
          60% {
            opacity: 1;
            transform: translateY(0);
            text-shadow: 0 4px 14px rgba(0,0,0,0.42);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.22em;
            text-shadow: 0 2px 8px rgba(0,0,0,0.28);
          }
        }

        /* ==== Subtitle (行ズレしないフェード) ==== */
        .elegant-sub {
          opacity: 0;
          transform: translateY(12px);
          animation: subFade 1.05s cubic-bezier(.25,.46,.25,1) forwards;
        }

        .elegant-sub.delay-\\[0\\.15s\\] { animation-delay: 0.15s; }
        .elegant-sub.delay-\\[0\\.3s\\]  { animation-delay: 0.3s; }

        @keyframes subFade {
          0% {
            opacity: 0;
            transform: translateY(12px);
            text-shadow: none;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            text-shadow: 0 2px 9px rgba(0,0,0,0.45);
          }
        }

      `}</style>

    </section>
  );
}
