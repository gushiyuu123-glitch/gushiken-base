import React, { useEffect, useRef } from "react";
import "./price.css";

export default function Price() {
  const sectionRef = useRef(null);

  // ✨ フェードイン
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="price" ref={sectionRef} className="price-section">
      <div className="max-w-5xl mx-auto px-6 relative">

        {/* 左ゴールドライン */}
        <div className="price-gold-line"></div>

        {/* タイトル */}
        <h2 className="price-title" translate="no">
          PRICE
        </h2>

        {/* 料金カード */}
        <div className="price-grid">
          <PriceCard
            title="Landing Page"
            desc="1ページ構成のシンプルなサイト。"
            price="¥80,000〜"
          />

          <PriceCard
            title="Small Website"
            desc="3〜5ページ。ブランド性を重視した構成。"
            price="¥150,000〜"
          />

          <PriceCard
            title="Brand Site"
            desc="写真・構成・世界観を含めて総合的に制作。"
            price="¥250,000〜"
          />

          <PriceCard
            title="Premium Design"
            desc="こだわり抜いたビジュアル・演出・体験設計。"
            price="¥350,000〜"
          />
        </div>

        {/* 注記 */}
        <p className="price-note">
          料金は、ページ数・素材（写真）・演出・機能によって変動します。<br />
          明確なお見積りは、ヒアリング後にご提示いたします。
        </p>

      </div>
    </section>
  );
}

/* -------------------------------------------------
   カードコンポーネント
--------------------------------------------------- */
function PriceCard({ title, desc, price }) {
  return (
    <div className="price-card">
      <h3 className="price-card-title">{title}</h3>
      <p className="price-card-desc">{desc}</p>
      <p className="price-card-price">{price}</p>

      {/* 光の縦ライン（PCのみ） */}
      <div className="price-card-glow"></div>
    </div>
  );
}
