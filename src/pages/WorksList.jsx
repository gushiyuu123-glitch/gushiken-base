// src/pages/WorksList.jsx
import React, { useEffect, useRef } from "react";
import WorkItem from "../components/WorkItem";

/* ============================
   ★ Works Thumbnails Import
============================ */
import spaImg from "../assets/works/spa.webp";
import lucentImg from "../assets/works/lucent.webp";
import oriettaImg from "../assets/works/orietta.webp";
import lueurpinkImg from "../assets/works/lueurpink.webp";

import okinawa1 from "../assets/works/okinawa1.webp";
import okinawa2 from "../assets/works/okinawa2.webp";
import calmImg from "../assets/works/calm.webp";

import ittoImg from "../assets/works/itto.webp";
import kotiImg from "../assets/works/koti.webp";
import activedaysImg from "../assets/works/activedays.webp";
import ryukaImg from "../assets/works/ryuka.webp";

import teaImg from "../assets/works/tea.webp";
import rayImg from "../assets/works/ray.webp";

/* ★ OkiLato（新作） */
import okilatoImg from "../assets/works/okilato.webp";

export default function WorksList() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.18 }
    );

    root.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#070604] min-h-screen py-24 px-6 md:px-10 lg:px-16">
      <div ref={rootRef} className="max-w-6xl lg:max-w-7xl mx-auto">

        {/* === Title Block === */}
        <div className="fade-up mb-20">
          <p className="text-[0.7rem] md:text-xs tracking-[0.28em] text-white/40 mb-4">
            SELECTED WORKS
          </p>

          <h1 className="text-white text-[2.4rem] md:text-[3rem] tracking-[0.22em] font-light">
            WORKS — Portfolio
          </h1>

          <p className="mt-6 text-sm md:text-[0.95rem] text-white/55 leading-relaxed max-w-xl">
            沖縄 × 光 × 静寂 を軸にしたセレクション。
            用途ごとに世界観を切り替えながらも統一トーンで構築。
          </p>
        </div>

        <div className="fade-up w-16 h-px bg-white/12 mb-20" />

        <div className="space-y-32">

          {/* =============================== */}
          {/*     BEAUTY / SALON             */}
          {/* =============================== */}
          <Category title="BEAUTY / SALON">
            <WorkItem title="Okinawa White Spa" desc="白 × 静寂 × 上質な余白。" link="https://okinawa-white-spa.vercel.app" img={spaImg} />
            {/* ↓ Lucentはスマホ特化へ移動したためここから削除 ↓ */}
            <WorkItem
              title="LUEUR PINK"
              desc="透明感×上品ピンク。若い層向け美容室。"
              link="https://lueur-pink.vercel.app"
              img={lueurpinkImg}
            />
            <WorkItem title="BLACK ORIETTA" desc="黒 × 金 × 高級香水。" link="https://black-orietta.vercel.app" img={oriettaImg} />
          </Category>

          {/* =============================== */}
          {/*   ★ SMARTPHONE DESIGN 新設      */}
          {/* =============================== */}
          <Category title="SMARTPHONE / MOBILE DESIGN">
            <WorkItem
              title="OkiLato — Island Freshness"
              desc="南国 × ターコイズ × スマホ特化設計。"
              link="https://oki-lato.vercel.app"
              img={okilatoImg}
            />

            <WorkItem
              title="Lucent Salon"
              desc="透明光 × スマホ最適化ミニマル。"
              link="https://lucent-salon.vercel.app"
              img={lucentImg}
            />
          </Category>

          {/* =============================== */}
          {/*           HOTEL                */}
          {/* =============================== */}
          <Category title="HOTEL">
            <WorkItem title="Okinawa Resort Hotel" desc="光と青のホテルLP。" link="https://okinawa-hotel.vercel.app" img={okinawa1} />
            <WorkItem title="Horizon Blanc" desc="朝光 × 静寂。" link="https://okinawa-resort-hotel.vercel.app" img={okinawa2} />
            <WorkItem title="The Calm Okinawa" desc="海 × 透明感 × 静寂。" link="https://the-calm-okinawa.vercel.app" img={calmImg} />
          </Category>

          {/* =============================== */}
          {/*  FOOD / FURNITURE / BRAND       */}
          {/* =============================== */}
          <Category title="FOOD / FURNITURE / BRAND">
            <WorkItem title="Aburiya Itto" desc="和 × 炙り × ラグジュアリー。" link="https://aburiya-itto.vercel.app" img={ittoImg} />
            <WorkItem title="Koti — Furniture" desc="北欧の光 × 木の温度。" link="https://koti-beta.vercel.app" img={kotiImg} />
            <WorkItem
              title="ACTIVE DAYS"
              desc="黒 × スポーティ × 都会的ジムブランド。"
              link="https://active-days.vercel.app"
              img={activedaysImg}
            />
            <WorkItem title="RYUKA — Fragrance" desc="自然光 × 琉球の香り。" link="https://ryuka-official.vercel.app" img={ryukaImg} />
          </Category>

          {/* =============================== */}
          {/*        ART / CREATIVE           */}
          {/* =============================== */}
          <Category title="ART / CREATIVE">
            <WorkItem title="The Flow of Tea" desc="茶 × 余白 × 世界観。" link="https://flow-of-tea.vercel.app" img={teaImg} />
            <WorkItem title="Ray of Silence" desc="光と影の静寂アート。" link="https://ray-of-silence.vercel.app" img={rayImg} />
          </Category>

        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CATEGORY（スマホ横スクロール＋PC2→3カラム最適化）
============================================================ */
function Category({ title, children }) {
  return (
    <section className="fade-up">

      {/* 見出し */}
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="category-title text-white text-[0.95rem] md:text-[1.05rem] font-light">
          {title}
        </h2>
        <div className="hidden md:block w-32 h-px bg-white/8" />
      </div>

      {/* スマホ横スクロール */}
      <div className="relative sm:hidden mb-4">
        <div className="scroll-hint absolute">→</div>

        <div className="fade-left"></div>
        <div className="fade-right"></div>

        <div
          className="
            flex gap-6 overflow-x-auto px-1 py-2
            scroll-x-snap scroll-x-hide
          "
        >
          {React.Children.map(children, (child) => (
            <div className="min-w-[85%] snap-start">{child}</div>
          ))}
        </div>
      </div>

      {/* PC：2 → 3 カラム */}
      <div
        className="
          hidden sm:grid
          grid-cols-2
          xl:grid-cols-3
          gap-10 md:gap-12
        "
      >
        {children}
      </div>

    </section>
  );
}
