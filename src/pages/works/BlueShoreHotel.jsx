// src/pages/works/BlueShoreHotel.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function BlueShoreHotel() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/lux-hotel-lp1.png",
      visual1: "/works1/pool.png",
      visual2: "/works1/terrace.webp",
      detail: "/works1/dining.webp",
    }),
    []
  );

  return (
    <section className="bg-white text-[#0e0e0e]">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/blue-shore-hotel#creativework",
      "name": "BLUE SHORE HOTEL｜Luxury Hotel Landing Page Design",
      "description":
        "沖縄リゾートを想定したラグジュアリーホテルのランディングページデザイン。淡い水色の階調と余白を軸に、静かな滞在体験と上質なリゾート空気感をUIとして表現した作品。",
      "genre": [
        "Hotel Landing Page Design",
        "Luxury Resort Web Design",
        "Minimal Resort UI"
      ],
      "keywords": [
        "ホテル LP デザイン",
        "リゾート Webデザイン",
        "ラグジュアリーホテル UI",
        "沖縄 ホテル デザイン",
        "静寂 ミニマル Web"
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
        "name": "Blue Shore Hotel Concept LP",
        "url": "https://lux-hotel-lp.vercel.app/"
      },
      "url": "https://gushikendesign.com/works/blue-shore-hotel"
    })
  }}
/>

      {/* SEO HIDDEN HEADING */}
      <h2 className="sr-only">
        Hotel Landing Page Design – Blue Shore Hotel
      </h2>

      {/* ================= HERO ================= */}
      <div className="relative h-[88vh] md:h-[95vh] overflow-hidden">
        <img
          src={assets.hero}
          alt="Luxury hotel landing page design with light blue resort atmosphere"
          className="absolute inset-0 w-full h-full object-cover
                     brightness-[0.9] saturate-[1.05]"
        />

        {/* veil (SP / PC separated) */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b
                        from-[#d9ecff]/70 via-[#edf6ff]/55 to-white/25" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b
                        from-[#dff1ff]/55 via-[#eef7ff]/35 to-white/10" />

        <div className="relative z-10 h-full flex items-end">
          <div className="px-6 md:px-24 pb-16 md:pb-28 max-w-[720px]">
            <p className="text-black/55 text-[0.7rem] tracking-[0.28em] mb-3">
              WORKS — HOTEL LANDING PAGE
            </p>

            <h1 className="text-[2rem] md:text-[4.2rem]
                           leading-[1.2] tracking-[0.18em] md:tracking-[0.26em]
                           font-light">
              BLUE SHORE<br />HOTEL
            </h1>

            <p className="mt-3 text-black/55 tracking-[0.26em] text-[0.7rem] md:text-[0.9rem]">
              SEA × LIGHT × QUIET LUXURY
            </p>

            <p className="mt-6 md:mt-8 text-black/75
                          text-[0.95rem] md:text-[1.05rem]
                          leading-[2.1] max-w-[44ch]">
              Blue Shore Hotel は、沖縄リゾートを想定した
              ホテルランディングページのデザイン事例。
              淡い水色の階調と余白を用いて、
              静かな滞在体験をUIとして表現しています。
            </p>

            <div className="mt-9">
              <a
                href="https://lux-hotel-lp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-10 py-[14px]
                           rounded-full bg-[#0e0e0e] text-white
                           text-[0.8rem] tracking-[0.28em]
                           shadow-[0_22px_80px_rgba(0,0,0,0.18)]
                           hover:translate-y-[-1px] transition"
              >
                VISIT SITE →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONCEPT ================= */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <p className="text-[0.72rem] tracking-[0.34em] text-black/45 mb-6">
          CONCEPT
        </p>

        <h3 className="text-[1.6rem] md:text-[2.3rem]
                       tracking-[0.08em] font-light leading-[1.6]">
          静かなリゾート体験を、<br className="hidden md:block" />
          Webデザインに変換する。
        </h3>

        <p className="mt-8 text-black/70 leading-[2.15] max-w-[48ch]">
          本作品では、ホテル公式サイトを想定し、
          ファーストビューで世界観を伝え、
          詳細な体験は実サイトで感じてもらう構成を採用。
          作品詳細ページは、あくまで「予告編」として設計しています。
        </p>

        <ul className="mt-10 space-y-5 text-black/70 text-[0.95rem] leading-[2.1]">
          <li>・淡い水色による、光の透明感</li>
          <li>・余白が生む、滞在の静けさ</li>
          <li>・語りすぎない、上質なリゾートサービス感</li>
        </ul>
      </div>

      {/* ================= VISUAL ================= */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <img
            src={assets.visual1}
            alt="Infinity pool UI design for luxury resort hotel website"
            className="rounded-[6px] shadow-[0_30px_100px_rgba(0,0,0,0.12)]"
          />
          <p className="mt-4 text-black/60 text-[0.82rem] leading-[1.9]">
            朝の水面は、最も静かな青を映す。
          </p>
        </div>

        <div>
          <img
            src={assets.visual2}
            alt="Resort hotel terrace web design with calm atmosphere"
            className="rounded-[6px] shadow-[0_30px_100px_rgba(0,0,0,0.12)]"
          />
          <p className="mt-4 text-black/60 text-[0.82rem] leading-[1.9]">
            風が通るテラスは、時間の流れを緩める。
          </p>
        </div>
      </div>

      {/* ================= DETAIL ================= */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <img
          src={assets.detail}
          alt="Luxury hotel dining section web design detail"
          className="rounded-[6px] shadow-[0_40px_140px_rgba(0,0,0,0.14)]"
        />

        <p className="mt-8 text-black/70 leading-[2.15] max-w-[46ch]">
          食事は、体験の終点ではなく余韻。
          UIもまた、視線を止めず、
          静かに次のシーンへ流れるよう設計しています。
        </p>
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center pb-32">
        <a
          href="https://lux-hotel-lp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-14 py-[15px]
                     rounded-full border border-black/20
                     text-[0.85rem] tracking-[0.32em]
                     hover:border-black/40 transition"
        >
          VISIT SITE →
        </a>

        <div className="mt-10">
          <Link
            to="/works"
            className="text-black/45 tracking-[0.26em] text-[0.78rem]"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
