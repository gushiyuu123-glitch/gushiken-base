import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./price.css";

export default function Price() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("aq-show");
        el.querySelectorAll(".aq-fade").forEach((x) => {
          x.classList.add("aq-show");
        });
        io.unobserve(el);
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="price" ref={sectionRef} className="price-section aq-fade">
      <div className="max-w-5xl mx-auto px-6 relative">

        {/* gold line */}
        <div className="price-gold-line" />

        {/* ===== Title ===== */}
        <h2
          translate="no"
          className="
            price-title aq-fade delay-1
            text-[2.2rem] sm:text-[2.4rem]
            tracking-[0.22em]
            text-white font-light mb-3 pl-1
          "
        >
          PRICE
        </h2>

        <p
          className="
            aq-fade delay-1
            text-white/60
            tracking-[0.12em]
            text-[0.85rem] sm:text-[0.9rem]
            mb-10 pl-1
          "
        >
          ― 料金について（制作費の目安） ―
        </p>

        {/* ===== Lead（思想） ===== */}
<p className="price-philosophy aq-fade delay-2">
  Webサイトは、<br />
  <span className="text-white/95">
    ただ作って終わりの“置物”ではありません。
  </span>
  <br /><br />
  お店やサービスの良さを、  
  <strong>誠実に・分かりやすく・長く伝え続ける窓口</strong>です。
  そのために、見た目と構造の両方を丁寧に設計しています。
</p>

<p className="price-lead aq-fade delay-3">
  下記はあくまで「目安の料金」です。<br />
  <strong>
    制作前のヒアリングで内容を整理し、  
    必ず「総額」「納品物」「進め方」を事前にお伝えします。
  </strong>
  <span className="price-lead-note">
    ※ 現在はポートフォリオ強化期間のため、  
    初回の方には控えめな価格で制作しています。
  </span>
</p>

<div className="price-grid aq-fade delay-4">

  <PriceCard
    label="PLAN 01"
    title="Landing Page（1ページ）"
    price="¥60,000〜"
    desc="商品紹介・サービス紹介・ブランド紹介など、1ページで魅力を伝えるための構成。情報を上品に、分かりやすくまとめます。"
  />

  <PriceCard
    label="PLAN 02"
    title="Small Website（小規模サイト）"
    price="¥120,000〜"
    desc="カフェ・サロン・美容・個人事業向け。トップ＋2〜4ページを想定した、小さくても“伝わりやすい”サイト設計です。"
  />

  <PriceCard
    label="PLAN 03"
    title="Brand Site（世界観重視）"
    price="¥240,000〜"
    desc="写真・色・余白・文字の統一を前提に、ブランド全体の世界観を丁寧に構築。トップ＋4〜10ページほどを想定しています。"
  />

</div>

<p className="price-note aq-fade delay-5">
  追加ページ・機能追加も、<br />
  <strong>制作途中でも遠慮なくご相談ください。</strong><br />
  ご希望に合わせて最適な構成をご提案します。
  <br />
  <strong>※ 理由なく金額が変わることは絶対にありません。</strong>
</p>


        {/* CTA */}
        <div className="price-cta aq-fade delay-6">
          <div className="mb-4 text-center">
            <Link
              to="/price"
              className="
                inline-block text-sm tracking-wider
                text-[#d9c8a6]/70 transition-colors duration-300
                hover:text-[#d9c8a6]  price-btn
              "
            >
              料金の詳細を見る →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

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
