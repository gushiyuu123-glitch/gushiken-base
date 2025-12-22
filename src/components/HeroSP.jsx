import React from "react";
import heroSP from "../assets/hero-sp.png";

export default function HeroSP() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden md:hidden">

      {/* ===== 背景 ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroSP}
          alt="GUSHIKEN DESIGN — hero"
          className="
            w-full h-full object-cover
            brightness-[1.05]
            scale-[1.02]
            animate-[heroFloatSP_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== Gold Ambient Light ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute left-[18%] top-[32%]
            w-[300px] h-[300px]
            bg-[rgba(220,190,140,0.10)]
            blur-[110px]
            rounded-full
          "
        ></div>
      </div>

      {/* ===== 下グラデ（SP強め） ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[240px]
          bg-gradient-to-t from-[rgba(0,0,0,0.32)] to-transparent
          pointer-events-none
        "
      />

      {/* ===== Text ===== */}
<div
  className="
    absolute
    left-6
    top-[65px]   /* ← 少し下げて光源から外す。かなり効く */
    right-1
  "
>
  <h1
    className="
      aq-fade delay-1
      text-white/95 font-normal   /* ← font-weightを微調整 */
      leading-[1.1]
      text-[2rem]
      tracking-[0.23em]
      mb-2
      drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]  /* ← 精度UP */
    "
  >
    GUSHIKEN<br/>DESIGN
  </h1>

  <div
    className="
      aq-fade delay-2
      w-14 h-[1px] bg-white/60 mb-3
    "
  />

  <p
    className="
      aq-fade delay-3
      text-white/95
      text-[1.05rem]
      leading-[1.65]
      tracking-wide
      drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]  /* ← 文字の視認性UP */
      max-w-[85%]
    "
  >
    普通じゃ物足りない人のための、<br/>
    上品で“伝わるサイト制作”。
  </p>
</div>


      <style>{`
        @keyframes heroFloatSP {
          0%   { transform: scale(1.02) translate(0, 0); }
          50%  { transform: scale(1.025) translate(3px, 7px); }
          100% { transform: scale(1.02) translate(0, 0); }
        }
      `}</style>
    </section>
  );
}
