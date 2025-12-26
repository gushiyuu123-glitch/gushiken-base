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
            brightness-[0.98]
            scale-[1.03]
            animate-[heroFloatSP_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== 全体トーン調整（軽く） ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[rgba(0,0,0,0.08)]
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      {/* ===== Ambient Lights ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[18%] top-[34%] w-[240px] h-[240px] bg-[rgba(220,190,140,0.08)] blur-[120px] rounded-full" />
        <div className="absolute right-[12%] top-[28%] w-[210px] h-[210px] bg-[rgba(90,160,255,0.12)] blur-[130px] rounded-full mix-blend-screen" />
      </div>

      {/* ===== 下グラデ（安心） ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[240px]
          bg-gradient-to-t from-[rgba(0,0,0,0.45)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== TEXT ===== */}
      <div className="absolute left-6 top-[95px] right-4">

        {/* === 読むためのレイヤー（最重要） === */}
     <div
  className="
    absolute -left-6 -right-6 -top-8 -bottom-8
    bg-[linear-gradient(
      210deg,
      rgba(0,0,0,0.46)_0%,
      rgba(0,0,0,0.32)_38%,
      rgba(0,0,0,0.12)_62%,
      rgba(0,0,0,0.00)_100%
    )]
    backdrop-blur-[1.8px]
    pointer-events-none
  "
/>


        {/* ---- Title ---- */}
        <h1
          className="
            elegant-title
            relative
            text-[#f5f5f2]
            font-normal
            leading-[1.06]
            text-[2rem]
            tracking-[0.22em]
            mb-3
          "
        >
          GUSHIKEN<br />DESIGN
        </h1>

        <div
          className="
            elegant-sub delay-[0.15s]
            w-12 h-[1px]
            bg-white/70
            mb-4
            relative
          "
        />

        {/* ---- Subtitle ---- */}
        <p
          className="
            elegant-sub delay-[0.3s]
            relative
            text-[#f1f1ee]
            text-[1.05rem]
            leading-[1.7]
            tracking-wide
            max-w-[82%]
          "
        >
          普通じゃ物足りない人のための、<br />
          上品で“伝わるサイト制作”。

          <span
            className="
              block mt-3
              text-[#e3e1da]
              text-[0.85rem]
              tracking-[0.12em]
            "
          >
            ブランド・店舗・個人事業向け Webデザイン
          </span>
        </p>
      </div>

      {/* ===== Scroll Hint ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="scroll-hint" />
      </div>

      {/* ===== Animations ===== */}
      <style>{`
        @keyframes heroFloatSP {
          0%   { transform: scale(1.03) translate(0,0); }
          50%  { transform: scale(1.035) translate(4px,6px); }
          100% { transform: scale(1.03) translate(0,0); }
        }

        /* ==== Title ==== */
        .elegant-title {
          opacity: 0;
          transform: translateY(14px);
          animation: titleFade 1.4s cubic-bezier(.25,.46,.25,1) forwards;
        }

        @keyframes titleFade {
          0% {
            opacity: 0;
            transform: translateY(14px);
            letter-spacing: 0.32em;
            text-shadow: none;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.22em;
            text-shadow: 0 6px 18px rgba(0,0,0,0.55);
          }
        }

        /* ==== Subtitle ==== */
        .elegant-sub {
          opacity: 0;
          transform: translateY(12px);
          animation: subFade 1.05s cubic-bezier(.25,.46,.25,1) forwards;
        }

        .elegant-sub.delay-\\[0\\.15s\\] { animation-delay: 0.15s; }
        .elegant-sub.delay-\\[0\\.3s\\]  { animation-delay: 0.3s; }

        @keyframes subFade {
          to {
            opacity: 1;
            transform: translateY(0);
            text-shadow: 0 4px 14px rgba(0,0,0,0.45);
          }
        }
      `}</style>
    </section>
  );
}
