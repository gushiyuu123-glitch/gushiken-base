// src/pages/works/NoirLux.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NoirLux() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#050505] text-white min-h-screen pb-36">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/noir-lux#creativework",
      "name": "NOIR & LUX｜Shadow Edition Luxury Brand EC Design",
      "description":
        "影を主役に据え、黒の静寂と光の縁のみで構成したミニマル・ラグジュアリーECデザイン。彫刻的な陰影、緊張感のある余白、超低速のパララックスによって『時間が止まるEC体験』を設計したコンセプト作品。",
      "creator": {
        "@type": "Person",
        "name": "裕人 具志堅",
        "alternateName": "Yuto Gushiken",
        "url": "https://gushikendesign.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GUSHIKEN DESIGN",
        "url": "https://gushikendesign.com/"
      },
      "inLanguage": "ja",
      "url": "https://gushikendesign.com/works/noir-lux",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "NOIR & LUX Official Site",
        "url": "https://noir-lux.vercel.app/"
      }
    })
  }}
/>

      {/* =========================================================
          HERO — Silent Shadow × Dior Glow Line
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

        {/* ------------------- SP HERO ------------------- */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/noir-lux-hero.webp"
            alt="Noir & Lux — Shadow Edition"
            className="
              absolute inset-0 w-full h-full
              object-cover object-center
              brightness-[0.78]
              scale-[1.03]
              transform-gpu
            "
          />

          {/* 3-layer gradient — 黒の彫刻用 */}
          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/55 via-black/20 to-black/85
          " />

          {/* Titles */}
          <div className="absolute bottom-10 left-6">
            <h1 className="text-[2.1rem] tracking-[0.28em] font-light mb-2">
              NOIR & LUX
            </h1>
            <p className="text-white/55 tracking-[0.30em] text-[0.72rem]">
              SHADOW EDITION — BRAND EC DESIGN
            </p>
          </div>
        </div>


        {/* ------------------- PC HERO ------------------- */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src="/works1/noir-lux-hero.webp"
            alt="Noir & Lux — Shadow Edition"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[0.75]
              scale-[1.06]
              transform-gpu
            "
          />

          {/* Dior Shadow Gradient */}
          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/60 via-black/20 to-black/88
          " />

          <div className="absolute bottom-20 left-[clamp(28px,9vw,160px)]">
            <h1 className="text-[4rem] tracking-[0.30em] font-light mb-4 leading-[1.10]">
              NOIR & LUX
            </h1>
            <p className="text-white/55 tracking-[0.34em] text-[0.95rem]">
              SHADOW EDITION — BRAND EC DESIGN
            </p>
          </div>
        </div>
      </div>


      {/* =========================================================
          OUTLINE — 彫刻影 × 精密静寂
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 mb-28">

        <h2 className="text-[0.95rem] tracking-[0.32em] text-white/35 mb-8">
          PROJECT OUTLINE
        </h2>

        <p
          className="
            text-[1.12rem]
            leading-[2.35]
            text-white/90
            font-light
            whitespace-pre-line
            tracking-[0.01em]
          "
        >
          影が主役となるブランドEC。
          
          {"\n"}
          Diorの“彫刻光”をベースに、
          黒の静寂と光の縁だけで構成されたミニマルラグジュアリー。
          
          {"\n\n"}
          静けさ・緊張感・造形のシャープさを、
          UIライン・余白・影の揺らぎで表現。
          
          {"\n\n"}
          GSAPによる超低速パララックスと影のドリフトで、
          “時間が止まるEC” を目指した構成。
        </p>

        <div className="mt-10 text-white/30 text-[0.82rem] leading-relaxed">
          <p>Tech — Vite / React / Tailwind / GSAP Drift Shadow / PC-SP Separation</p>
        </div>
      </div>


      {/* =========================================================
          VISUAL BLOCKS — 黒の彫刻 × 光の断面
      ========================================================= */}
      <div className="max-w-6xl mx-auto px-8 md:px-0 space-y-28">

        {/* VISUAL 1 */}
        <div className="relative overflow-hidden border border-white/5">
          <img
            src="/works1/noir-lux1.webp"
            className="
              w-full
              object-cover
              brightness-[0.90]
            "
            alt="Noir & Lux Visual"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>

        {/* VISUAL 2 */}
        <div className="relative overflow-hidden border border-white/5">
          <img
            src="/works1/noir-lux2.webp"
            className="
              w-full
              object-cover
              brightness-[0.95]
            "
            alt="Noir & Lux Visual Detail"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
        </div>
      </div>


      {/* =========================================================
          CTA — 黒の中に浮く光
      ========================================================= */}
      <div className="text-center mt-32">
        <a
          href="https://noir-lux.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-12 py-4
            text-[0.85rem]
            tracking-[0.32em]
            border border-white/25
            hover:border-white/60
            hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>
      </div>

    </section>
  );
}
