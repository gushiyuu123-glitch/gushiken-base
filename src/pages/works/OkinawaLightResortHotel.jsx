import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function OkinawaLightResortHotel() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/okinawa-hotel-hero.png",        // ① HERO
      concept: "/works1/okinawa-hotel-concept.png", // ② CONCEPT
      room: "/works1/okinawa-hotel-room.png",       // ③ ROOM
      plan: "/works1/okinawa-hotel-plan1.png",      // ④ PLAN（代表1枚）
    }),
    []
  );

  return (
    <section className="bg-white text-[#1a1a1a] overflow-hidden">
      {/* =========================
         JSON-LD
      ========================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "OKINAWA LIGHT RESORT HOTEL｜Hotel Website Design",
            description:
              "沖縄の光と静けさをテーマに設計したリゾートホテルWebサイト。世界観と信頼性を両立するため、情報設計とUI構造を最優先に構築。",
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
          }),
        }}
      />

      {/* =========================
         HERO
      ========================== */}
      <div className="relative h-[88vh] overflow-hidden">
        <img
          src={assets.hero}
          alt="Okinawa Light Resort Hotel"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/90" />

        <div className="relative z-10 h-full flex items-end">
          <div className="px-6 md:px-24 pb-24 max-w-[760px]">
            <p className="text-[0.7rem] tracking-[0.34em] text-black/55">
              WORKS — HOTEL WEBSITE
            </p>

            <h1 className="mt-6 text-[2.4rem] md:text-[4.4rem] tracking-[0.18em] font-light leading-[1.15]">
              OKINAWA LIGHT
              <br />
              RESORT HOTEL
            </h1>

            <p className="mt-6 text-black/70 tracking-[0.28em] text-[0.82rem]">
              LIGHT / SILENCE / TRUST
            </p>

            <p className="mt-8 text-black/75 text-[1.02rem] leading-[2.3] max-w-[48ch]">
              沖縄の光に包まれる、穏やかな滞在体験。
              <br />
              非日常性と安心感を両立させるため、
              情報設計と余白を最優先に構築したホテルサイト。
            </p>
          </div>
        </div>
      </div>

      {/* =========================
         OUTLINE
      ========================== */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-28">
        <p className="text-[0.72rem] tracking-[0.34em] text-black/45 mb-6">
          PROJECT OUTLINE
        </p>

        <p className="text-[1.12rem] leading-[2.4] text-black/80 font-light">
          本サイトは、沖縄リゾートホテルの公式サイトを想定した
          コンセプトWebデザインです。
          <br />
          世界観の演出だけでなく、
          宿泊検討者が迷わず判断できる
          「信頼の導線設計」を重視しています。
        </p>

        <div className="mt-10 text-black/50 text-[0.85rem] tracking-[0.14em]">
          Role — UI Design / UX Structure / Frontend (React)
        </div>
      </div>

      {/* =========================
         CONCEPT
      ========================== */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-6">
          <p className="text-[0.72rem] tracking-[0.34em] text-black/45">
            CONCEPT
          </p>

          <h2 className="mt-6 text-[1.8rem] md:text-[2.4rem] font-light leading-[1.6]">
            光と静けさが、
            <br />
            安心感に変わる瞬間。
          </h2>

          <p className="mt-8 text-black/75 leading-[2.35]">
            情報量を抑え、
            視線の流れと余白で導く設計。
            <br />
            高級感よりも、
            「信じられる」感覚を優先しました。
          </p>
        </div>

        <div className="md:col-span-6">
          <img
            src={assets.concept}
            alt="Hotel concept"
            className="rounded-[8px] shadow-[0_40px_120px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>

      {/* =========================
         ROOM（統合セクション）
      ========================== */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-32 grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-6">
          <img
            src={assets.room}
            alt="Hotel room"
            className="rounded-[8px] shadow-[0_40px_120px_rgba(0,0,0,0.14)]"
          />
        </div>
        <div className="md:col-span-6">
          <p className="text-[0.72rem] tracking-[0.34em] text-black/45">
            ROOMS & FACILITIES
          </p>
          <p className="mt-6 text-black/75 leading-[2.35]">
            客室・設備情報は
            写真と文章を最小限に統合。
            <br />
            年齢層を問わず、
            直感的に安心できる構成を意識しました。
          </p>
        </div>
      </div>

      {/* =========================
         PLAN UI
      ========================== */}
      <div className="bg-[#fafafa] py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <p className="text-[0.72rem] tracking-[0.34em] text-black/45">
              PLAN UI
            </p>

            <h3 className="mt-6 text-[2rem] font-light">
              判断しやすさを
              <br />
              最優先にした設計。
            </h3>

            <p className="mt-8 text-black/75 leading-[2.35]">
              比較・選択に迷わないよう、
              情報の並びと強弱を整理。
              <br />
              UIそのものが
              「信頼材料」になる構成です。
            </p>
          </div>

          <div className="md:col-span-6">
            <img
              src={assets.plan}
              alt="Plan UI"
              className="rounded-[12px] shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>

      {/* =========================
         FOOTER
      ========================== */}
      <div className="text-center py-24">
        <a
          href="https://okinawa-hotel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-14 py-[15px] rounded-full bg-black text-white text-[0.82rem] tracking-[0.32em] shadow-[0_26px_90px_rgba(0,0,0,0.22)] hover:-translate-y-[2px] transition"
        >
          VISIT SITE →
        </a>

        <div className="mt-10">
          <Link
            to="/works"
            className="text-black/45 tracking-[0.26em] text-[0.75rem]"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
