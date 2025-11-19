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
       <PriceCard
  title="ランディングページ（1ページ）"
  desc="ブランド紹介やキャンペーンなど、単ページで完結するサイト。世界観を崩さず、必要な情報を魅力的にまとめます。"
  price="¥80,000〜"
/>

<PriceCard
  title="小規模サイト（3〜5ページ）"
  desc="サービス紹介・店舗サイト・ポートフォリオなど、しっかり構成されたWebサイトを制作します。"
  price="¥150,000〜"
/>

<PriceCard
  title="ブランドサイト"
  desc="写真・文章・配色・世界観設計まで含めて、ブランド全体の“印象”をつくり込みます。"
  price="¥250,000〜"
/>

<PriceCard
  title="プレミアムデザイン"
  desc="高度なアニメーション・体験設計・高級感ある演出を施した、唯一無二のデザインに仕上げます。"
  price="¥350,000〜"
/>

        {/* 注記 */}
    {/* 注記 */}
<p className="price-note">
  料金は、ページ数・素材（写真）・演出・機能によって変動します。<br />
  明確なお見積りは、ヒアリング後にご提示いたします。
</p>

{/* ★ 料金ページへボタン */}
<div className="price-cta">
  <a href="/price" className="price-btn">料金ページへ</a>
</div>


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
