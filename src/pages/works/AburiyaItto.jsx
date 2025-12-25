// src/pages/works/AburiyaItto.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function AburiyaItto() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/aburiya-hero.png",
      cut1: "/works1/aburiya-fire.png",
      cut2: "/works1/aburiya-interior.png",
    }),
    []
  );

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-[#f2efe9] pb-32">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/aburiya-itto#creativework",
      "name": "炭屋 一灯｜Izakaya Concept Website Design",
      "alternateName": "ABURIYA ITTO",
      "description":
        "炭火居酒屋を想定したコンセプトサイトのWebデザイン作品。炭の熱と闇の静けさを軸に、光量を抑えたUI設計と余韻を重視した構成で、料理と人の距離が自然に近づく体験を表現。",
      "genre": [
        "Izakaya Website Design",
        "Restaurant Concept Web Design",
        "Japanese Minimal Web Design"
      ],
      "keywords": [
        "居酒屋 Webデザイン",
        "飲食店 サイト デザイン",
        "和モダン UI",
        "炭火 居酒屋 デザイン",
        "レストラン LP デザイン"
      ],
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
      "isBasedOn": {
        "@type": "WebSite",
        "name": "Aburiya Itto Concept Site",
        "url": "https://aburiya-itto.vercel.app/"
      },
      "url": "https://gushikendesign.com/works/aburiya-itto"
    })
  }}
/>

      {/* =========================
          HERO
      ========================= */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <img
          src={assets.hero}
          alt="炭屋 一灯"
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
        />

        {/* Dark veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/85" />

        <div className="absolute bottom-[14vh] left-[clamp(24px,6vw,120px)] max-w-[720px]">
          <p className="text-[0.72rem] tracking-[0.38em] text-[#c8b08a]">
            WORKS — IZAKAYA CONCEPT SITE
          </p>

          <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.2rem)] font-light tracking-[0.18em]">
            炭屋 一灯
          </h1>

          <p className="mt-4 text-[#b24a3b] tracking-[0.32em] text-[0.82rem]">
            ABURIYA · ITTO
          </p>

          <p className="mt-6 text-[#e6e1d8]/80 text-[1.02rem] leading-[2.2] max-w-[42ch]">
            炭の香りが、夜を静かに満たす。
            <br />
            光と影の間に、人が集う。
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://aburiya-itto.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-10 py-[13px]
                rounded-full
                border border-[#c8b08a]/60
                text-[#c8b08a]
                text-[0.78rem]
                tracking-[0.30em]
                hover:bg-[#c8b08a]/10
                transition
              "
            >
              ENTER THE SITE →
            </a>

            <span className="text-[0.7rem] tracking-[0.32em] text-[#8a8175]">
              WORK DETAIL
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          CONCEPT
      ========================= */}
      <div className="max-w-5xl mx-auto px-7 md:px-10 pt-28">
        <div className="border-t border-[#c8b08a]/15 pt-16">
          <h2 className="text-[0.8rem] tracking-[0.34em] text-[#c8b08a]">
            CONCEPT
          </h2>

          <p className="mt-8 text-[#e6e1d8]/75 text-[1.05rem] leading-[2.4] max-w-[60ch] font-light">
            高級に寄せすぎず、日常に沈みすぎない。
            <br />
            炭火という原始的な熱を、静かな設計で包み込む。
            <br />
            「強さ」ではなく、「余韻」で記憶に残る店。
          </p>
        </div>

        {/* =========================
            IMAGE CUTS
        ========================= */}
        <div className="mt-24 grid md:grid-cols-2 gap-14 items-center">
          <img
            src={assets.cut1}
            alt="炭火"
            className="w-full rounded-[6px] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          />

          <div>
            <p className="text-[#b24a3b] tracking-[0.28em] text-[0.78rem]">
              FIRE & SILENCE
            </p>

            <p className="mt-6 text-[#e6e1d8]/80 leading-[2.3] text-[1.02rem]">
              火は主張しすぎない。
              <br />
              ただ、そこに在り続ける。
              <br />
              料理も、空間も、その延長線上にある。
            </p>
          </div>
        </div>

        <div className="mt-28 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#b24a3b] tracking-[0.28em] text-[0.78rem]">
              SPACE
            </p>

            <p className="mt-6 text-[#e6e1d8]/80 leading-[2.3] text-[1.02rem]">
              光量を抑え、視線を下げる。
              <br />
              人と料理の距離が、自然に近づく設計。
            </p>
          </div>

          <img
            src={assets.cut2}
            alt="店内"
            className="w-full rounded-[6px] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          />
        </div>

        {/* =========================
            CTA / BACK
        ========================= */}
        <div className="text-center mt-32">
          <a
            href="https://aburiya-itto.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-12 py-[14px]
              rounded-full
              bg-[#b24a3b]
              text-[#0b0b0b]
              text-[0.8rem]
              tracking-[0.32em]
              shadow-[0_30px_120px_rgba(178,74,59,0.35)]
              hover:brightness-110
              transition
            "
          >
            VISIT ABURIYA ITTO →
          </a>

          <div className="mt-12">
            <Link
              to="/works"
              className="text-[#8a8175] hover:text-[#c8b08a] tracking-[0.28em] text-[0.74rem]"
            >
              ← BACK TO WORKS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
