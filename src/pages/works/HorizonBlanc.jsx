// src/pages/works/HorizonBlanc.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function HorizonBlanc() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/horizon-hero.png",
      room: "/works1/horizon-room.jpg",
      access: "/works1/horizon-map.png",
    }),
    []
  );

  return (
    <section className="min-h-screen bg-[#f7f7f5] text-[#1c1c1c] pb-40">
      {/* =========================
         JSON-LD（信頼・SX）
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Horizon Blanc｜Resort Hotel Website Design",
            "description":
              "世界観訴求と信頼設計を分離し、予約判断を迷わせない構造で設計したリゾートホテルWebサイト。",
            "creator": {
              "@type": "Person",
              "name": "裕人 具志堅",
              "alternateName": "Yuto Gushiken",
              "url": "https://gushikendesign.com/",
            },
            "publisher": {
              "@type": "Organization",
              "name": "GUSHIKEN DESIGN",
              "url": "https://gushikendesign.com/",
            },
            "genre": ["Hotel Website Design", "SX Design", "Resort UI"],
            "inLanguage": "ja",
            "url": "https://gushikendesign.com/works/horizon-blanc",
          }),
        }}
      />

      {/* =========================
         HERO（感情）
      ========================= */}
      <div className="relative h-[88vh] w-full overflow-hidden">
        <img
          src={assets.hero}
          alt="Horizon Blanc hero"
          className="absolute inset-0 w-full h-full object-cover scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />

        <div className="absolute bottom-[14vh] left-[clamp(24px,6vw,120px)] max-w-[720px]">
          <p className="text-[0.7rem] tracking-[0.36em] text-white/70">
            WORKS — RESORT HOTEL
          </p>

          <h1 className="mt-6 text-[clamp(2.6rem,5vw,4.4rem)] font-light tracking-[0.16em] text-white">
            Horizon Blanc
          </h1>

          <p className="mt-6 text-white/80 leading-[2.2] text-[1.02rem] max-w-[44ch]">
            すべての朝が、海で始まる。
            <br />
            感情で惹き、構造で予約させるための
            SX設計リゾートサイト。
          </p>
        </div>
      </div>

      {/* =========================
         POSITIONING（SX宣言）
      ========================= */}
      <div className="max-w-5xl mx-auto px-8 pt-28">
        <h2 className="text-[0.78rem] tracking-[0.34em] text-[#8a8a8a]">
          STRUCTURE
        </h2>

        <p className="mt-8 text-[1.06rem] leading-[2.4] text-[#333] max-w-[60ch]">
          世界観（HERO）で感情を開き、
          <br />
          客室（ROOM）で滞在を想像させ、
          <br />
          アクセス（ACCESS）で不安を消す。
          <br />
          <strong>判断を前に進めるためだけの3枚構成。</strong>
        </p>
      </div>

      {/* =========================
         ROOM（信頼の核）
      ========================= */}
      <div className="max-w-6xl mx-auto px-8 mt-32 grid md:grid-cols-2 gap-14 items-center">
        <img
          src={assets.room}
          alt="Guest room"
          className="rounded-lg shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
        />

        <div>
          <p className="text-[0.74rem] tracking-[0.3em] text-[#777]">
            ROOMS
          </p>

          <p className="mt-6 text-[1.02rem] leading-[2.3]">
            客室は複雑に見せない。
            <br />
            写真と最低限の情報で、
            <br />
            「ここに泊まる自分」を即座に想像させる。
          </p>
        </div>
      </div>

      {/* =========================
         ACCESS（不安除去）
      ========================= */}
      <div className="max-w-6xl mx-auto px-8 mt-32 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[0.74rem] tracking-[0.3em] text-[#777]">
            ACCESS
          </p>

          <p className="mt-6 text-[1.02rem] leading-[2.3]">
            那覇空港からの距離・時間を明確に。
            <br />
            移動の不安を事前に消すことで、
            <br />
            予約判断を止めない設計。
          </p>
        </div>

        <img
          src={assets.access}
          alt="Hotel access map"
          className="rounded-lg shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* =========================
         CTA / BACK
      ========================= */}
      <div className="mt-36 text-center">
        <a
          href="https://okinawa-resort-hotel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-14 py-[15px]
            rounded-full
            bg-[#0b3558]
            text-white
            text-[0.82rem]
            tracking-[0.32em]
            shadow-[0_30px_120px_rgba(11,53,88,0.35)]
            hover:brightness-110
            transition
          "
        >
          VISIT SITE →
        </a>

        <div className="mt-14">
          <Link
            to="/works"
            className="text-[#777] hover:text-[#222] text-[0.74rem] tracking-[0.3em]"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
