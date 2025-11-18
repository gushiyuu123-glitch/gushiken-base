import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.jpg";

export default function Hero() {
  const textRef = useRef(null);

  // ✨ 静かなフェードイン
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

      {/* =======================
          背景画像（微パララックス）
      ======================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          className="
            w-full h-full object-cover
            brightness-[0.95]
            md:brightness-[0.92]
            scale-[1.03]
            md:scale-[1.06]
            transition-transform duration-[18000ms]
            will-change-transform
            animate-[heroFloat_18s_ease-in-out_infinite]
          "
        />
      </div>

      {/* =======================
          金色 × 柔光グラデ
      ======================== */}
      {/* 左上から柔らかいゴールド光 */}
      <div
        className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_18%_28%,rgba(230,200,150,0.18),transparent_60%)]
      "
      ></div>

      {/* 横方向の柔黒グラデ */}
      <div
  className="
    absolute inset-0 
    bg-gradient-to-t
    from-black/40 via-transparent to-transparent
  "
></div>


      {/* 下部の自然な引き締め */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t
          from-black/45 via-transparent to-transparent
          pointer-events-none
        "
      ></div>

      {/* =======================
          テキスト
      ======================== */}
    <div
  ref={textRef}
  className="
    absolute
    left-10 md:left-20 
    bottom-24 md:bottom-32   /* ←これだけ上げる！ */
    right-6
    max-w-xl
  "
>


        <h1
          className="
            text-white
            font-light
            leading-tight

            text-[2.2rem]
            md:text-[4rem]

            tracking-[0.32em]
            md:tracking-[0.38em]

            mb-2
          "
          translate="no"
        >
          GUSHIKEN
          <br />
          DESIGN
        </h1>

        {/* 金の細線 */}
        <div className="w-16 h-[1px] bg-white/40 mb-4"></div>

       <p
  className="
    text-white/85    /* ← 80% → 85% に強化 */
    text-sm md:text-lg
    tracking-wide
    leading-relaxed
  "
>

          美しさの再構築 — Reconstructing Beauty
        </p>
      </div>

      {/* =======================
          パララックス用キーフレーム
      ======================== */}
      <style>{`
        @keyframes heroFloat {
          0% { transform: scale(1.06) translateY(0px); }
          50% { transform: scale(1.07) translateY(8px); }
          100% { transform: scale(1.06) translateY(0px); }
        }
      `}</style>

    </section>
  );
}
