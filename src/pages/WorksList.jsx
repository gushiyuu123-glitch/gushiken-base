// src/pages/WorksList.jsx
import React, { useEffect, useRef } from "react";
import Category from "../components/Category";

import WorkItem from "../components/WorkItem";

// === 画像 import ===
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

import teaImg from "../assets/works/aziwau.webp";
import rayImg from "../assets/works/ray.webp";

import okilatoImg from "../assets/works/okilato.webp";
import fineImg from "../assets/works/fine.webp";
import stillimg from "../assets/works/still-ec.webp";
import neutralObjectsImg from "../assets/works/neutral-objects.webp";
import OkinawaSelectImg from "../assets/works/OkinawaSelect.webp";
// 画像 import 追加
import resonanceImg from "../assets/works/resonance.webp";
// 画像 import 追加
import capeOkinawaImg from "../assets/works/cape-okinawa.webp";

export default function WorksList() {
  const rootRef = useRef(null);

  /* -------------------------------------------------------
     Silent UI v4.2 — aq-fade (Dior/SANKOU Exhibition)
  -------------------------------------------------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".aq-fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("aq-show");
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------
     SP slide-in
  -------------------------------------------------------- */
  useEffect(() => {
    const items = document.querySelectorAll(".sp-slide-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#070604] min-h-screen py-24 px-6 md:px-10 lg:px-16">
      <div className="ambient-glow"></div>

      {/* ★ rootRef → aq-fade が全部ここから発火 */}
      <div ref={rootRef} className="max-w-6xl lg:max-w-7xl mx-auto">

        {/* ===== TOP BLOCK ===== */}
        <div className="aq-fade mb-28">
          <div className="w-12 h-px bg-gradient-to-r from-white/20 to-white/5 mb-6" />

          <p className="text-[0.65rem] md:text-[0.75rem] tracking-[0.32em] text-white/30 mb-3">
            SELECTED WORKS
          </p>

          <h1 className="text-white text-[2.6rem] md:text-[3.4rem] tracking-[0.28em] font-light leading-[1.2] aq-fade delay-1">
            WORKS —<br className="md:hidden" />
            Portfolio
          </h1>

          <p className="mt-7 text-[0.9rem] md:text-[1rem] text-white/45 leading-relaxed max-w-xl tracking-[0.04em] aq-fade delay-2">
            沖縄 × 光 × 静寂 を軸にしたセレクション。<br />
            用途ごとに世界観を切り替えながらも、統一された静かなトーンで構築。
          </p>
        </div>

        <div className=" w-16 h-px bg-white/12 mb-20 aq-fade" />

        <div className="space-y-32 ">

          {/* ===== CATEGORY ===== */}
          {/* すべて aq-fade 内で動くので Category 内も発火する */}
          <Category title="BEAUTY / SALON" subtitle="美容・サロン向けの上質な余白デザイン">
            <WorkItem title="Okinawa White Spa" desc={`白 × 静寂 × 上質な余白。\n非日常の白を設計したリラクゼーションUI。`} link="https://okinawa-white-spa.vercel.app" img={spaImg}/>
            <WorkItem title="LUEUR PINK" desc={`透明感 × 上品ピンク。\n若年層向けに最適化した軽量モーションUI。`} link="https://lueur-pink.vercel.app" img={lueurpinkImg}/>
            <WorkItem title="BLACK ORIETTA" desc={`黒 × 金 × 高級香水。\n重厚なラグジュアリートーンの演出設計。`} link="https://black-orietta.vercel.app" img={oriettaImg}/>
          </Category>

          {/* === SMARTPHONE === */}
          <Category
            title="SMARTPHONE / MOBILE DESIGN"
            subtitle="スマホでの体験を最優先したUI設計"
          >
            <WorkItem
              title="OkiLato — Island Freshness"
              desc={`南国 × ターコイズ。\nスマホ特化レイアウトで体験を最適化。`}
              link="https://oki-lato.vercel.app"
              img={okilatoImg}
            />
            <WorkItem
              title="Lucent Salon"
              desc={`透明な光 × ミニマル。\n美容 × 透明感をUIへ落とし込んだ設計。`}
              link="https://lucent-salon.vercel.app"
              img={lucentImg}
            />
          </Category>


          {/* === HOTEL === */}
          <Category
            title="HOTEL"
            subtitle="沖縄の光と空気感をUIに落とし込んだホテルデザイン"
          >
            <WorkItem
              title="Okinawa Resort Hotel"
              desc={`光と青のホテルLP。\n沖縄の朝光を再現したビジュアル設計。`}
              link="https://okinawa-hotel.vercel.app"
              img={okinawa1}
            />
            <WorkItem
              title="Horizon Blanc"
              desc={`朝光 × 静寂。\n白の階調を活かした余白デザイン。`}
              link="https://okinawa-resort-hotel.vercel.app"
              img={okinawa2}
            />
            <WorkItem
              title="The Calm Okinawa"
              desc={`海 × 透明感 × 静寂。\n水面の光をUIへ抽象化した構成。`}
              link="https://the-calm-okinawa.vercel.app"
              img={calmImg}
            />
          </Category>


          {/* === EC BRAND === */}
          <Category
            title="EC / BRAND DESIGN"
            subtitle="世界観 × 技術を統合したECデザイン"
          >
            <WorkItem
              title="Neutral Objects — Lifestyle Brand"
              desc={`光 × 余白 × 静けさ。\nオブジェ写真を中心に据えた編集型EC。`}
              link="https://neutral-objects.vercel.app"
              img={neutralObjectsImg}
            />

            <WorkItem
              title="STILL — Minimal EC"
              desc={`静寂 × 緊張感 × ファッション。\nストイックな構成美を追求したEC。`}
              link="https://still-ec.vercel.app"
              img={stillimg}
            />

            <WorkItem
              title="Okinawa Select — Modern Okinawan Objects"
              desc={`沖縄素材 × 上質ミニマル。\n右スライドCart・ContextAPI管理・PC/SP完全分離など最新EC技術を統合したプロトタイプ。`}
              link="https://okinawa-select.vercel.app"
              img={OkinawaSelectImg}
            />
          </Category>


          {/* === FOOD / BRAND === */}
        <Category
  title="FOOD / FURNITURE / BRAND"
  subtitle="飲食・家具・ブランドUIに最適化した世界観設計"
>
  {/* === RÉSONANCE（最上段・象徴） === */}
  <WorkItem
    title="RÉSONANCE — Restaurant"
    desc={`時間 × 熱 × 静寂。\nスクロールを通して“一夜の体験”を設計したシネマティック・レストランUI。`}
    link="https://resonance-restaurant.vercel.app/"
    img={resonanceImg}
  />
{/* === CAPE. OKINAWA（Cafe / Portfolio Work） === */}
<WorkItem
  title="CAPE. OKINAWA — Cafe"
  desc={`海 × 光 × 静寂。\n体験の流れそのものを設計した、展示型カフェWeb。`}
  link="https://cape-okinawa.vercel.app/"
  img={capeOkinawaImg}
/>

  <WorkItem
    title="Aburiya Itto"
    desc={`和 × 炙り × ラグジュアリー。\n和の陰影を活かした料理ブランディング。`}
    link="https://aburiya-itto.vercel.app"
    img={ittoImg}
  />

  <WorkItem
    title="Koti — Furniture"
    desc={`北欧の光 × 木の温度。\n柔らかな北欧光をUIに落とし込んだ家具ブランド。`}
    link="https://koti-beta.vercel.app"
    img={kotiImg}
  />

  <WorkItem
    title="ACTIVE DAYS"
    desc={`黒 × スポーティ × 都会的。\nフィットネス特有の動感をUIへ構築。`}
    link="https://active-days.vercel.app"
    img={activedaysImg}
  />
</Category>

          {/* === REAL PROJECT === */}
          <Category
            title="MATCHING / REAL BUSINESS PROJECT"
            subtitle="実際の事業で使用されているUI/UXデザイン"
          >
            <WorkItem
              title="FINE — Okinawa Edition"
              desc={`40代からの穏やかな出会い。\n安心感を設計した大人向けUI。`}
              link="https://www.fine-okinawa.com/"
              img={fineImg}
            />
          </Category>


          {/* === ART === */}
        <Category
  title="ART / CREATIVE"
  subtitle="光・影・静寂をテーマにしたアート表現"
>
  <WorkItem
    title="RYUKA — Fragrance"
    desc={`自然光 × 琉球の香り。\n香りの余韻を“余白”で可視化した抽象的ブランド表現。`}
    link="https://ryuka-official.vercel.app"
    img={ryukaImg}
  />

  <WorkItem
    title="The Flow of Tea"
    desc={`茶 × 余白 × 世界観。\n茶の所作を静かに伝える構成美。`}
    link="https://flow-of-tea.vercel.app"
    img={teaImg}
  />

  <WorkItem
    title="Ray of Silence"
    desc={`光 × 影 × 静寂。\nミニマル光学のアート表現。`}
    link="https://ray-of-silence.vercel.app"
    img={rayImg}
  />
</Category>

        </div>
      </div>
    </section>
  );
}
