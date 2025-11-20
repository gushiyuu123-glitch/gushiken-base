// src/pages/WorksList.jsx
import React, { useEffect, useRef } from "react";
import WorkItem from "../components/WorkItem";

// 🔥 画像をここで import（全部 PNG ）
import okinawa1 from "../assets/works/okinawa1.png";
import okinawa2 from "../assets/works/okinawa2.png";
import ryukaImg from "../assets/works/ryuka.png";
import teaImg from "../assets/works/tea.png";
import noahImg from "../assets/works/noah.png";

export default function WorksList() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    root.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        bg-[#0b0b0b]
        min-h-screen
        py-24
        px-6 md:px-12
      "
    >
      {/* Title */}
      <h1
        className="
          fade-up
          text-white
          text-[2.6rem] md:text-[3rem]
          tracking-[0.22em]
          font-light
          mb-20
        "
      >
        WORKS — Portfolio
      </h1>

      <div className="space-y-24">

        {/* HOTEL */}
        <Category title="HOTEL">
          <WorkItem
            title="Okinawa Resort Hotel"
            desc="光 × 余白 × 南国の高級ホテルサイト。"
            link="https://okinawa-hotel.vercel.app"
            img={okinawa1}
          />

          <WorkItem
            title="Horizon Blanc"
            desc="朝光が差し込む、静寂のリゾートLP。"
            link="https://okinawa-resort-hotel.vercel.app"
            img={okinawa2}
          />
        </Category>

        {/* BEAUTY / SALON */}
        <Category title="BEAUTY / SALON">
          {/* 追加予定 */}
        </Category>

        {/* FOOD */}
        <Category title="FOOD / RESTAURANT">
          {/* 追加予定 */}
        </Category>

        {/* BRAND */}
        <Category title="BRAND">
          <WorkItem
            title="RYUKA — Fragrance"
            desc="琉球の香りと光をテーマにしたブランドサイト。"
            link="https://ryuka-official.vercel.app"
            img={ryukaImg}
          />

          <WorkItem
            title="The Flow of Tea"
            desc="茶の香り・風景・静寂で構築した世界観サイト。"
            link="https://flow-of-tea.vercel.app"
            img={teaImg}
          />
        </Category>

        {/* ART */}
        <Category title="ART / CREATIVE">
          <WorkItem
            title="NOAH Visual Art"
            desc="AI × 静寂 × 沖縄の世界観アート。"
            link="https://gushiken-base.vercel.app"
            img={noahImg}
          />
        </Category>

      </div>
    </section>
  );
}

/* ===============================
   CATEGORY ボックス
================================ */
function Category({ title, children }) {
  return (
    <div className="fade-up">
      <h2
        className="
          text-white
          text-lg md:text-xl
          tracking-[0.18em]
          mb-7
          font-light
        "
      >
        {title}
      </h2>

      <div
        className="
          grid
          grid-cols-1 md:grid-cols-3
          gap-10
        "
      >
        {children}
      </div>
    </div>
  );
}
