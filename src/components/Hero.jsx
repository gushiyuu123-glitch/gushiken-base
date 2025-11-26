import React, { useEffect, useRef } from "react";
import hero from "../assets/hero3.png";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    el.style.opacity = 0;
    el.style.transform = "translateY(22px)";
    el.style.transition =
      "opacity 1.6s ease-out, transform 1.6s ease-out";

    requestAnimationFrame(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative w-full h-[92vh] md:h-screen overflow-hidden">

      {/* ===== 背景（よりクリアに） ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="GUSHIKEN DESIGN — hero"
          className="
            w-full h-full object-cover
            scale-[1.015]
            brightness-[1.08]
            transition-transform duration-[20000ms]
            will-change-transform
            animate-[heroFloat_20s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== 超薄ホワイト層（濁りを完全除去） ===== */}
      <div
        className="
          absolute inset-0
          bg-[rgba(255,255,255,0.015)]
          pointer-events-none
        "
      />

      {/* ===== 下グラデ（透明 × 黒の影 → 立体感UP） ===== */}
      <div
        className="
          absolute left-0 bottom-0
          w-full h-[240px]
          bg-gradient-to-t
          from-[rgba(0,0,0,0.10)]
          to-[rgba(0,0,0,0)]
          pointer-events-none
        "
      />

      {/* ===== 透明空気層（ブラー削除 → 超クリア） ===== */}
      <div
        className="
          absolute inset-0
          bg-transparent
          pointer-events-none
        "
      />

      {/* ===== テキスト ===== */}
      <div
        ref={textRef}
        className="
          absolute
          left-8 md:left-20
          bottom-20 md:bottom-32
          right-6
          max-w-xl
        "
      >
        <h1
          className="
            text-white font-light leading-[1.12]
            text-[2rem] md:text-[4rem]
            tracking-[0.26em] md:tracking-[0.30em]
            mb-3
          "
          translate="no"
        >
          GUSHIKEN<br />DESIGN
        </h1>

        <div className="w-20 h-[1px] bg-white/55 mb-5"></div>

        <p
          className="
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
          0%   { transform: scale(1.015) translate(0px, 0px); }
          50%  { transform: scale(1.018) translate(5px, 4px); }
          100% { transform: scale(1.015) translate(0px, 0px); }
        }
      `}</style>
    </section>
  );
}
