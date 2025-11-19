// src/pages/WorksList.jsx
import React, { useEffect, useRef } from "react";
import WorkItem from "../components/WorkItem";

// 🔹 ダミー画像（後で差し替え）
const placeholder = "https://placehold.co/800x600/f1f1f1/111?text=Preview";

export default function WorksList() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // セクション本体アニメ
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) root.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );
    sectionObserver.observe(root);

    // 各アイテムのアニメ
    const items = root.querySelectorAll(".work-item");
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((i) => itemObserver.observe(i));

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        bg-[#0b0b0b] min-h-screen
        opacity-0 translate-y-10
        transition-all duration-[1200ms]
        ease-[cubic-bezier(.25,.46,.45,.94)]
        py-24 px-5 md:px-10
      "
    >
      {/* 見出し */}
      <h1
        className="text-white text-[2.4rem] md:text-[2.8rem] tracking-[0.22em] font-light mb-12 md:mb-16"
        translate="no"
      >
        WORKS — Gallery
      </h1>

      <div className="space-y-20">

        {/* BRAND / IDENTITY */}
        <Category title="BRAND / IDENTITY">
          <WorkItem
            title="NEKOLOGY Branding"
            desc="猫の温もりと静寂から生まれたブランド設計。"
            link="https://example.com/nekology"
            img={placeholder}
          />

          <WorkItem
            title="Flow of Tea Aroma"
            desc="お茶の香りを可視化する世界観デザイン。"
            link="https://example.com/tea"
            img={placeholder}
          />

          <WorkItem
            title="琉海スニーカー（仮）"
            desc="沖縄の海の色から構築したスニーカーブランディング。"
            link="https://example.com/sneaker"
            img={placeholder}
          />
        </Category>

        {/* WEBSITE / SERVICE */}
        <Category title="WEBSITE / SERVICE">
          <WorkItem
            title="Okinawa Student Housing"
            desc="国際学生向けの上質な不動産サイト。"
            link="https://example.com/housing"
            img={placeholder}
          />

          <WorkItem
            title="FINE Okinawa Matchmaking"
            desc="40代向けの落ち着いたマッチングサービス。"
            link="https://example.com/fine"
            img={placeholder}
          />

          <WorkItem
            title="Cafe Lumina"
            desc="光 × 余白 × 香りをテーマにしたカフェサイト。"
            link="https://example.com/lumina"
            img={placeholder}
          />
        </Category>

        {/* ART / CREATIVE */}
        <Category title="ART / CREATIVE">
          <WorkItem
            title="NOAH Season Visual"
            desc="AI × 沖縄 × 静寂の象徴、NOAHビジュアルワーク。"
            link="https://example.com/noah"
            img={placeholder}
          />

          <WorkItem
            title="Sea Glass Diffusion"
            desc="海ガラスの光屈折を表現したアートワーク。"
            link="https://example.com/seaglass"
            img={placeholder}
          />

          <WorkItem
            title="Island Abstract"
            desc="島 × 影 × 抽象、Yuto流ミニマルアート。"
            link="https://example.com/abstract"
            img={placeholder}
          />
        </Category>
      </div>
    </section>
  );
}

/* ----------------------------------------
   カテゴリ（BRAND / ART など）
-----------------------------------------*/
function Category({ title, children }) {
  return (
    <div>
      <h2
        className="text-white text-lg md:text-xl tracking-[0.18em] mb-6"
        translate="no"
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {children}
      </div>
    </div>
  );
}
