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
        <h2 className="price-title" translate="no">PRICE</h2>

        {/* リード文 */}
        <p className="price-lead">
          制作料金の目安です。ページ数・写真素材の質・世界観演出の量によって変動します。
          ご希望に合わせて、3つの基本プランをご用意しています。
        </p>

        {/* 3プランカード */}
        <div className="price-grid">

          <PriceCard
            label="PLAN 01"
            title="Landing Page（1ページ）"
            desc="ブランド紹介・キャンペーンなど、単ページで完結するサイト。世界観を崩さず必要な情報を美しくまとめます。"
            price="¥60,000〜"
          />

          <PriceCard
            label="PLAN 02"
            title="Small Website（3〜5ページ）"
            desc="サービス紹介・店舗サイト・ポートフォリオなど、しっかり構成されたWebサイトを制作します。"
            price="¥120,000〜"
          />

          <PriceCard
            label="PLAN 03"
            title="Brand Site（6ページ以上）"
            desc="写真・配色・タイポグラフィ・余白を統一し、“世界観のあるブランドサイト” を設計します。"
            price="¥180,000〜"
          />

        </div>

        {/* 注記 */}
        <p className="price-note">
          料金は、ページ数・素材（写真）・演出の量によって変動します。<br />
          明確なお見積りは、ヒアリング後にご提示いたします。
        </p>

        {/* CTA */}
        <div className="price-cta">
          <a href="/price" className="price-btn">料金の詳細を見る</a>
        </div>

      </div>
      {/* 事務系サイトへのサブ導線（世界観を壊さない控えめリンク） */}
<div className="flex justify-center mt-10 mb-4">
  <a
    href="https://office.gushikendesign.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block
      px-6 py-3
      border border-[#c9a166]
      text-[#c9a166]
      text-sm font-medium
      rounded-md
      whitespace-nowrap
      hover:bg-[#c9a166]/10
      transition
    "
  >
    事務所・企業向け Webプランのご案内はこちら
  </a>
</div>



    </section>
  );
}

/* -------------------------------------------------
   カードコンポーネント
--------------------------------------------------- */
function PriceCard({ label, title, desc, price }) {
  return (
    <div className="price-card">
      <p className="price-card-label">{label}</p>
      <h3 className="price-card-title">{title}</h3>
      <p className="price-card-price">{price}</p>
      <p className="price-card-desc">{desc}</p>

      {/* 光の縦ライン（ホバーで発光） */}
      <div className="price-card-glow"></div>
    </div>
  );
}
