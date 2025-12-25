import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function NeutralObjectsTeaser() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/neutral-hero.png",
      cut1: "/works1/neutral-cut11.png",
      cut2: "/works1/neutral-cut2.png",
      cut3: "/works1/neutral-cut33.png",
    }),
    []
  );

  return (
    <section className="bg-[#f7f5f1] text-[#2f2a25]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/neutral-objects#teaser",
      "name": "NEUTRAL OBJECTS｜Quiet Objects Concept (Teaser)",
      "description":
        "語らない物、主張しないかたち。暮らしの速度を少し落とすために設計された、静かなオブジェクト群を扱うコンセプト・コマースサイトのティーザーページ。全体像ではなく断片のみを提示する予告作品。",
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
      "url": "https://gushikendesign.com/works/neutral-objects",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "NEUTRAL OBJECTS",
        "url": "https://neutral-objects.vercel.app/"
      },
      "isPartOf": {
        "@type": "CreativeWork",
        "name": "NEUTRAL OBJECTS｜Quiet Objects Concept"
      }
    })
  }}
/>

      {/* =========================
          HERO
      ========================= */}
      <div className="relative w-full h-[92vh] overflow-hidden">
        <img
          src={assets.hero}
          alt="Neutral Objects — Trailer"
          className="
            absolute inset-0 w-full h-full object-cover
            brightness-[0.96] contrast-[0.95]
            scale-[1.03]
          "
        />

        {/* veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/45 to-[#f7f5f1]/90" />

        <div className="absolute bottom-[14vh] left-[clamp(24px,6vw,120px)] max-w-[720px]">
          <p className="text-[0.7rem] tracking-[0.38em] text-[#6b645d]">
            WORKS — QUIET COMMERCE CONCEPT
          </p>

          <h1 className="mt-6 text-[3.6rem] tracking-[0.18em] font-light leading-[1.05]">
            NEUTRAL OBJECTS
          </h1>

          <p className="mt-6 text-[#6b645d] tracking-[0.32em] text-[0.9rem]">
            Objects that do not speak.
          </p>

          <p className="mt-8 text-[#2f2a25]/75 text-[1.05rem] leading-[2.3] max-w-[46ch]">
            ただ、そこにあるだけでいい。
            <br />
            暮らしの速度を、少し落とすためのかたち。
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://neutral-objects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-11 py-[14px]
                rounded-full
                border border-[#2f2a25]/25
                text-[#2f2a25]
                text-[0.78rem]
                tracking-[0.32em]
                hover:bg-[#2f2a25]
                hover:text-[#f7f5f1]
                transition-all duration-500
              "
            >
              ENTER THE SITE →
            </a>

            <span className="text-[0.7rem] tracking-[0.30em] text-[#8a837c]">
              A QUIET TRAILER PAGE
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          TRAILER CUTS
      ========================= */}
      <div className="max-w-6xl mx-auto px-7 md:px-10 py-28">
        <div className="border-t border-[#2f2a25]/10 pt-20">
          <p className="text-[0.72rem] tracking-[0.36em] text-[#6b645d]">
            TRAILER CUTS
          </p>

          <p className="mt-6 text-[#2f2a25]/70 text-[1.05rem] leading-[2.4] max-w-[60ch]">
            This page shows only fragments.
            <br />
            The rest is meant to be lived with.
          </p>

          <div className="mt-16 grid gap-14">
            {[assets.cut1, assets.cut2, assets.cut3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Neutral Objects trailer cut ${i + 1}`}
                className="
                  w-full rounded-[22px]
                  shadow-[0_40px_120px_rgba(0,0,0,0.08)]
                "
              />
            ))}
            
          </div>
<div className="text-center mt-24 flex flex-col items-center gap-8">
  {/* ENTER SITE（弱めCTA） */}
  <a
    href="https://neutral-objects.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-10 py-[12px]
      rounded-full
      border border-[#2f2a25]/18
      text-[#2f2a25]
      text-[0.74rem]
      tracking-[0.32em]
      hover:bg-[#2f2a25]
      hover:text-[#f7f5f1]
      transition-all duration-500
    "
  >
    ENTER THE SITE →
  </a>

  {/* BACK */}
  <Link
    to="/works"
    className="
      text-[#6b645d]
      hover:text-[#2f2a25]
      tracking-[0.28em]
      text-[0.75rem]
    "
  >
    ← BACK TO WORKS
  </Link>
</div>

          
        </div>
      </div>
    </section>
  );
}
