import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./price.css";

export default function Price() {
  const sectionRef = useRef(null);

  // フェードイン（初回のみ）
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observer.unobserve(el);
        }
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
        <div className="price-gold-line" />

        {/* タイトル */}
        <h2 className="price-title" translate="no">PRICE</h2>

        {/* リード文 */}
        <p className="price-lead">
          制作料金の目安です。<br />
          ページ数や構成、演出内容に応じて調整しますが、
          <strong> 制作前のヒアリングで内容を整理し、必ず総額をお伝えします。</strong>
          <br />
          <span className="price-lead-note">
            現在はポートフォリオ拡充フェーズのため、
            初回のお客様向けに価格を抑えています。
          </span>
        </p>

        {/* プラン */}
        <div className="price-grid">
          <PriceCard
            label="PLAN 01"
            title="Landing Page（1ページ）"
            desc="ブランド紹介・キャンペーンなど、単ページで完結するWebサイト。世界観を崩さず、必要な情報を美しく整理します。"
            price="¥60,000〜"
          />

          <PriceCard
            label="PLAN 02"
            title="Small Website（3〜5ページ）"
            desc="サービス紹介・店舗サイト・ポートフォリオなど、構成を重視したWebサイト。初めての方にも安心な設計です。"
            price="¥120,000〜"
          />

          <PriceCard
            label="PLAN 03"
            title="Brand Site（6ページ以上）"
            desc="写真・配色・タイポグラフィ・余白を統一し、世界観そのものを伝えるブランドサイトを設計します。"
            price="¥180,000〜"
          />
        </div>

        {/* 注記 */}
        <p className="price-note">
          ご相談時にご要望やご予算をお伺いし、
          制作内容を整理したうえで総額をご提示します。<br />
          <strong>
            制作途中で金額が変わることはありませんので、安心してご相談ください。
          </strong>
        </p>

        {/* CTA */}
<div className="price-cta">

  {/* メイン導線：価格詳細（先に理解） */}
  <div className="mb-4 text-center">
    <Link
      to="/price"
      className="
        inline-block
        text-sm tracking-wider
        text-[#d9c8a6]/70
        transition-colors duration-300
        hover:text-[#d9c8a6]
      "
    >
      料金の詳細を見る →
    </Link>
  </div>

  {/* サブ導線：相談（決断） */}
  <Link to="/contact" className="price-btn">
    制作の相談をする
  </Link>

</div>


      </div>
    </section>
  );
}

/* -----------------------------
   Card
----------------------------- */
const PriceCard = React.memo(function PriceCard({ label, title, desc, price }) {
  return (
    <div className="price-card">
      <p className="price-card-label">{label}</p>
      <h3 className="price-card-title">{title}</h3>
      <p className="price-card-price">{price}</p>
      <p className="price-card-desc">{desc}</p>
      <div className="price-card-glow" />
    </div>
  );
});
