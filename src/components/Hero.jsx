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

      {/* ===== 純粋な背景画像 only ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          className="
            w-full h-full object-cover
            brightness-[1]
            scale-[1.02]
            transition-transform duration-[18000ms]
            will-change-transform
            animate-[heroFloat_18s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ===== テキスト ===== */}
      <div
        ref={textRef}
        className="
          absolute
          left-10 md:left-20
          bottom-24 md:bottom-32
          right-6
          max-w-xl
        "
      >
        <h1
          className="
            text-white font-light leading-tight
            text-[2.2rem] md:text-[4rem]
            tracking-[0.32em] md:tracking-[0.38em]
            mb-2
          "
          translate="no"
        >
          GUSHIKEN<br />DESIGN
        </h1>

        <div className="w-16 h-[1px] bg-white/40 mb-4"></div>

        <p
          className="
            text-white/85
            text-sm md:text-lg
            tracking-wide
            leading-relaxed
          "
        >
          美しさの再構築 — Reconstructing Beauty
        </p>
      </div>

      {/* ===== パララックス ===== */}
      <style>{`
        @keyframes heroFloat {
          0% { transform: scale(1.02) translateY(0px); }
          50% { transform: scale(1.025) translateY(6px); }
          100% { transform: scale(1.02) translateY(0px); }
        }
      `}</style>

    </section>
  );
}
