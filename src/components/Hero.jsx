import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.jpg";

export default function Hero() {
  const textRef = useRef(null);

  // ✨ 静かなフェード + 浮きアニメ
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    el.style.opacity = 0;
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 1.6s ease, transform 1.6s ease";

    requestAnimationFrame(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative w-full h-[92vh] md:h-screen overflow-hidden">

      {/* 画像（パララックス風） */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          className="
            w-full h-full object-cover 
            brightness-[0.92] md:brightness-[0.88]
            will-change-transform
            hero-parallax
          "
        />
      </div>

      {/* グラデーション */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t from-black/55 via-black/20 to-transparent
          md:bg-gradient-to-r md:from-black/40 md:via-black/20 md:to-transparent
        "
      ></div>

      {/* テキスト */}
      <div
        ref={textRef}
        className="
          absolute 
          bottom-16 left-6 right-6
          md:left-16 md:bottom-24
          max-w-md md:max-w-xl
        "
      >
        <h1
          className="
            text-white 
            text-[2rem] tracking-[0.15em]
            md:text-5xl md:tracking-[0.25em]
            font-light
          "
          translate="no"
        >
          GUSHIKEN DESIGN
        </h1>

        <p
          className="
            mt-3 
            text-white/80 
            text-base leading-loose tracking-wide
            md:text-lg md:leading-relaxed
          "
        >
          美しさの再構築 — Reconstructing Beauty
        </p>
      </div>
    </section>
  );
}
