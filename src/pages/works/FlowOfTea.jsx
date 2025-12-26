import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

/**
 * FLOW OF TEA
 * Concept Detail Page — SX 3 Visual Edition
 */

export default function FlowOfTea() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/flow-tea-hero.png",
      visual1: "/works1/tea_steam.png",
      visual2: "/works1/tea_shadow.png",
    }),
    []
  );

  return (
    <section className="bg-[#f6f3ee] text-[#2f2a25] overflow-hidden">

      {/* =========================
         JSON-LD
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Flow of Tea｜Concept Website",
            description:
              "茶の香りと静けさ、時間の流れをテーマにしたコンセプトWebサイト。体験演出は本サイトに委ね、詳細ページでは構造と余韻に集中したSX設計。",
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
            },
            inLanguage: "ja",
            url: "https://flow-of-tea.vercel.app/",
          }),
        }}
      />

      {/* =========================
         HERO — 世界観の入口
      ========================= */}
      <div className="relative h-[92vh] w-full overflow-hidden">
        <img
          src={assets.hero}
          alt="Flow of Tea"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[#f6f3ee]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-[clamp(2.4rem,6vw,4.2rem)] tracking-[0.22em] font-light">
            FLOW OF TEA
          </h1>
          <p className="mt-6 text-white/75 tracking-[0.32em] text-[0.8rem]">
            静けさ × 温度 × 和モダン
          </p>
        </div>
      </div>

      {/* =========================
         CONCEPT — テキストのみ
      ========================= */}
      <div className="max-w-4xl mx-auto px-8 pt-32">
        <p className="text-[0.72rem] tracking-[0.34em] text-[#8a837c]">
          CONCEPT
        </p>

        <h2 className="mt-6 text-[1.8rem] tracking-[0.18em] font-light">
          香りが、時の流れを開く。
        </h2>

        <p className="mt-10 text-[#2f2a25]/70 leading-[2.6] max-w-[56ch]">
          茶葉が湯に触れ、香りが立ちのぼる一瞬。
          <br />
          その「待ち」の時間こそが、体験の本質。
          <br /><br />
          Flow of Tea は、
          <br />
          行為ではなく「間」を設計する
          コンセプトサイトです。
        </p>
      </div>

      {/* =========================
         VISUAL 01
      ========================= */}
      <div className="max-w-6xl mx-auto px-8 pt-40">
        <img
          src={assets.visual1}
          alt="Tea steam moment"
          className="rounded-[20px] shadow-[0_24px_90px_rgba(0,0,0,0.12)]"
        />
      </div>

      {/* =========================
         VISUAL 02
      ========================= */}
      <div className="max-w-6xl mx-auto px-8 pt-32">
        <img
          src={assets.visual2}
          alt="Tea shadow moment"
          className="rounded-[20px] shadow-[0_24px_90px_rgba(0,0,0,0.12)]"
        />
      </div>

      {/* =========================
         CTA / BACK
      ========================= */}
      <div className="text-center pt-40 pb-32">
        <a
          href="https://flow-of-tea.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-14 py-[15px]
            rounded-full
            border border-[#2f2a25]/25
            text-[#2f2a25]
            text-[0.74rem]
            tracking-[0.32em]
            hover:bg-[#2f2a25]
            hover:text-[#f6f3ee]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>

        <div className="mt-14">
          <Link
            to="/works"
            className="text-[#8a837c] hover:text-[#2f2a25] tracking-[0.28em] text-[0.72rem]"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
