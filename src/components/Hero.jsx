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
            brightness-[1.06]
            scale-[1.015]
            animate-[heroFloat_22s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== Gold Ambient Light（Diorの奥行き） ===== */}
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

      {/* ===== 下グラデ ===== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[260px]
          bg-gradient-to-t from-[rgba(0,0,0,0.16)] to-transparent
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
        {/* タイトル */}
        <h1
          className="
            aq-fade delay-1
            text-white font-light leading-[1.12]
            text-[2.1rem] md:text-[4.2rem]
            tracking-[0.26em] md:tracking-[0.30em]
            mb-3
          "
          translate="no"
        >
          GUSHIKEN<br />DESIGN
        </h1>

        {/* ライン */}
        <div
          className="
            aq-fade delay-2
            w-20 h-[1px] bg-white/55 mb-5
          "
        ></div>

        {/* サブテキスト */}
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
          世界観と情報を、美しく整理するデザイン。
        </p>
      </div>

      {/* ===== Keyframes ===== */}
      <style>{`
        @keyframes heroFloat {
          0%   { transform: scale(1.015) translate(0, 0); }
          50%  { transform: scale(1.018) translate(4px, 8px); }
          100% { transform: scale(1.015) translate(0, 0); }
        }
      `}</style>
    </section>
  );
}
