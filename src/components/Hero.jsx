import React from "react";
import hero from "../assets/hero3.png";

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
            blur-[150px]
            rounded-full
          "
        />
      </div>

      {/* ===== Blue Ambient（右上だけ淡く） ===== */}
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

      {/* ===== 微細パーティクル（静かで高級） ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="
              absolute bg-white
              w-[2px] h-[2px] rounded-full
              opacity-[0.22]
              animate-[pcSpark_8s_ease-in-out_infinite]
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

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
        {/* タイトル：高級演出 */}
        <h1
          className="
            elegant-title
            text-white font-light
            leading-[1.12]
            text-[2.1rem] md:text-[4.2rem]
            tracking-[0.30em]
            mb-4
          "
        >
          GUSHIKEN<br/>DESIGN
        </h1>

        {/* ライン */}
        <div
          className="
            elegant-sub delay-[0.15s]
            w-20 h-[1px] bg-white/60 mb-5
          "
        />

        {/* コピー */}
        <p
          className="
            elegant-sub delay-[0.3s]
            text-white/90
            text-[0.9rem] md:text-[1.15rem]
            leading-relaxed
            tracking-wide
            max-w-md
          "
        >
          普通じゃ物足りない人のための、<br/>
          上品で“伝わるサイト制作”。
        </p>
      </div>

      {/* ===== Keyframes ===== */}
      <style>{`
        @keyframes heroFloat {
          0%   { transform: scale(1.015) translate(0,0); }
          50%  { transform: scale(1.020) translate(4px,8px); }
          100% { transform: scale(1.015) translate(0,0); }
        }

        @keyframes pcSpark {
          0%,100% { opacity: 0.0; transform: translateY(0) scale(0.5); }
          50%     { opacity: 0.35; transform: translateY(-20px) scale(1); }
        }

        /* ===== Title Fade（高級サイトの動き） ===== */
        .elegant-title {
          opacity: 0;
          transform: translateY(18px);
          letter-spacing: 0.38em;
          animation: titleFade 1.55s cubic-bezier(.25,.46,.25,1) forwards;
        }

        @keyframes titleFade {
          0% {
            opacity: 0;
            transform: translateY(18px);
            letter-spacing: 0.38em;
            text-shadow: none;
          }
          55% {
            opacity: 1;
            transform: translateY(0);
            text-shadow: 0 8px 22px rgba(0,0,0,0.38);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.30em;
            text-shadow: 0 4px 12px rgba(0,0,0,0.30);
          }
        }

        /* ===== Subtitle Fade（揺れなし・シャープ） ===== */
        .elegant-sub {
          opacity: 0;
          transform: translateY(12px);
          animation: subFade 1.1s cubic-bezier(.25,.46,.25,1) forwards;
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
            text-shadow: 0 2px 9px rgba(0,0,0,0.40);
          }
        }
      `}</style>
    </section>
  );
}
