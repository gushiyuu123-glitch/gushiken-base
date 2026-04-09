import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function OkinawaLightResortHotel() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/okinawa-hotel-hero.png",
      concept: "/works1/okinawa-hotel-concept.png",
      room: "/works1/okinawa-hotel-room.png",
      plan: "/works1/okinawa-hotel-plan1.png",
    }),
    []
  );

  return (
    <section className="bg-white text-[#1a1a1a] overflow-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "OKINAWA LIGHT RESORT HOTEL｜Hotel Website Design",
            description:
              "沖縄の光と静けさをテーマに、穏やかな滞在の印象が自然に伝わるようにまとめたリゾートホテルWebサイト。非日常感と安心感の両方を大切にした作品。",
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

      {/* HERO */}
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
              非日常感と安心感の両方を大切にしながら、
              落ち着いて見られるホテルサイトを目指しました。
            </p>
          </div>
        </div>
      </div>

      {/* OUTLINE */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-28">
        <p className="text-[0.72rem] tracking-[0.34em] text-black/45 mb-6">
          PROJECT OUTLINE
        </p>

        <p className="text-[1.12rem] leading-[2.4] text-black/80 font-light">
          本サイトは、沖縄リゾートホテルの公式サイトを想定した
          コンセプトWebデザインです。
          <br />
          世界観だけでなく、
          宿泊を検討する方にとっての見やすさや安心感も大切にしながら、
          全体をやわらかく上品にまとめています。
        </p>

        <div className="mt-10 text-black/50 text-[0.85rem] tracking-[0.14em]">
          Role — Web Design / Front-end Implementation
        </div>
      </div>

      {/* CONCEPT */}
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
            情報を詰め込みすぎず、
            落ち着いて見られることを大切にしました。
            <br />
            派手な高級感ではなく、
            やわらかく信頼できる印象を目指しています。
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

      {/* ROOM */}
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
            客室や設備の情報は、
            写真と文章のバランスを整えながら、
            無理なく把握できる見え方を意識しました。
            <br />
            年齢層を問わず、安心して見られることを大切にしています。
          </p>
        </div>
      </div>

      {/* PLAN UI */}
      <div className="bg-[#fafafa] py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <p className="text-[0.72rem] tracking-[0.34em] text-black/45">
              PLAN
            </p>

            <h3 className="mt-6 text-[2rem] font-light">
              比較しやすく、
              <br />
              落ち着いて選べること。
            </h3>

            <p className="mt-8 text-black/75 leading-[2.35]">
              宿泊プランは、
              情報の見え方を整理しながら、
              無理なく比較しやすい印象にまとめました。
              <br />
              見やすさそのものが安心感につながるよう意識しています。
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

      {/* FOOTER */}
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