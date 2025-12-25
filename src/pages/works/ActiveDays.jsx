// src/pages/works/ActiveDays.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function ActiveDays() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/active-days-hero.png",
      cut1: "/works1/active-days-1.png",
      cut2: "/works1/active-days-2.png",
      cut3: "/works1/active-days-3.png",
    }),
    []
  );

  return (
    <section className="min-h-screen bg-[#f7f8f9] text-[#0f1418] pb-32">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/active-days#creativework",
      "name": "ACTIVE DAYS｜24H Fitness Gym Website Design",
      "description":
        "24時間フィットネスジムを想定したWebサイトデザイン作品。都会的でクリーンな空気感と、無理なく続けられる静かなトレーニング体験を、ガラス表現と余白設計を軸にUIとして構築。",
      "genre": [
        "Fitness Gym Website Design",
        "Minimal Urban Web Design",
        "Service Landing Page"
      ],
      "keywords": [
        "24時間ジム Webデザイン",
        "フィットネス サイト デザイン",
        "ミニマル ジム UI",
        "都会的 クリーン デザイン",
        "サービス LP デザイン"
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
        "name": "ACTIVE DAYS Concept Site",
        "url": "https://active-days.vercel.app/"
      },
      "url": "https://gushikendesign.com/works/active-days"
    })
  }}
/>

      {/* =========================
          HERO
      ========================= */}
      <div className="relative w-full h-[92vh] overflow-hidden">
        <img
          src={assets.hero}
          alt="ACTIVE DAYS — 24h Fitness Gym"
          className="
            absolute inset-0 w-full h-full object-cover
            brightness-[0.92] contrast-[0.95]
            scale-[1.04] transform-gpu
          "
        />

        {/* Glass veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/35 backdrop-blur-[1px]" />

        {/* Text */}
        <div className="absolute bottom-[14vh] left-[clamp(24px,7vw,120px)] max-w-[760px]">
          <p className="text-[0.7rem] tracking-[0.42em] text-[#5f6b76]">
            WORKS — 24H FITNESS GYM WEBSITE
          </p>

          <h1 className="mt-6 text-[4rem] font-light tracking-[0.18em] leading-[1.02]">
            ACTIVE DAYS
          </h1>

          <p className="mt-5 text-[0.9rem] tracking-[0.32em] text-[#5f6b76]">
            CITY / GLASS / CLEAN
          </p>

          <p className="mt-8 text-[1.05rem] leading-[2.3] text-[#0f1418]/75 max-w-[46ch]">
            無理なく、続けられる。
            <br />
            都会の中で、静かに整う24時間ジム。
          </p>

          <div className="mt-14 flex items-center gap-8">
            <a
              href="https://active-days.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                px-14 py-[14px]
                rounded-full
                bg-black text-white
                text-[0.8rem] tracking-[0.32em]
                shadow-[0_26px_80px_rgba(0,0,0,0.22)]
                hover:-translate-y-[2px]
                transition
              "
            >
              ENTER THE SITE →
            </a>

            <div className="h-px w-28 bg-gradient-to-r from-black/50 to-transparent" />
            <span className="text-[0.7rem] tracking-[0.3em] text-[#5f6b76]">
              DETAIL PAGE
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          CONCEPT
      ========================= */}
      <div className="max-w-6xl mx-auto px-7 md:px-10 pt-32">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <p className="text-[0.72rem] tracking-[0.38em] text-[#5f6b76]">
              CONCEPT
            </p>

            <h2 className="mt-6 text-[2rem] font-light leading-[1.6]">
              都会的で、
              <br />
              静かなフィットネス体験。
            </h2>

            <p className="mt-8 text-[1rem] leading-[2.4] text-[#0f1418]/75">
              ACTIVE DAYS は「頑張らせない」設計を軸に、
              24時間使える安心感と、清潔で整った空間を両立。
              <br />
              日常に自然に溶け込むジム体験を目指しました。
            </p>
          </div>

          <div className="md:col-span-7">
            <img
              src={assets.cut1}
              alt="ACTIVE DAYS interior"
              className="rounded-[6px] shadow-[0_40px_120px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>

      {/* =========================
          GALLERY
      ========================= */}
      <div className="max-w-6xl mx-auto px-7 md:px-10 pt-32">
        <p className="text-[0.72rem] tracking-[0.38em] text-[#5f6b76]">
          SPACE DETAILS
        </p>

        <div className="mt-14 grid md:grid-cols-12 gap-14">
          <div className="md:col-span-6">
            <img
              src={assets.cut2}
              alt="training machines"
              className="rounded-[6px] shadow-[0_36px_110px_rgba(0,0,0,0.14)]"
            />
          </div>

          <div className="md:col-span-6 md:translate-y-16">
            <img
              src={assets.cut3}
              alt="locker & shower"
              className="rounded-[6px] shadow-[0_36px_110px_rgba(0,0,0,0.14)]"
            />
          </div>
        </div>
      </div>

      {/* =========================
          CTA
      ========================= */}
      <div className="mt-36 text-center">
        <a
          href="https://active-days.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center
            px-16 py-[15px]
            rounded-full
            bg-black text-white
            text-[0.82rem]
            tracking-[0.36em]
            shadow-[0_30px_90px_rgba(0,0,0,0.28)]
            hover:-translate-y-[2px]
            transition
          "
        >
          VISIT ACTIVE DAYS →
        </a>
      </div>

      {/* =========================
          BACK
      ========================= */}
      <div className="mt-28 text-center">
        <Link
          to="/works"
          className="text-[#5f6b76] hover:text-black text-[0.75rem] tracking-[0.3em]"
        >
          ← BACK TO WORKS
        </Link>
      </div>
    </section>
  );
}
