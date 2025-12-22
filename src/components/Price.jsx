import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./price.css";

export default function Price() {
  const sectionRef = useRef(null);

  // Dior Fade v4 — Observer
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // section 自体
        el.classList.add("aq-show");

        // 内側全ての aq-fade
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

        <h2
          translate="no"
          className="
            price-title aq-fade delay-1
            text-[2.4rem] tracking-[0.22em]
            text-white font-light mb-4 pl-1
          "
        >
          PRICE
        </h2>

        {/* 翻訳レイヤー */}
        <p
          className="
            aq-fade delay-1
            text-white/60
            tracking-[0.12em]
            text-[0.9rem]
            mb-12
            pl-1
          "
        >
          ― 料金について（制作費の目安） ―
        </p>

        {/* 導入文 */}
        <p className="price-philosophy aq-fade delay-2">
          Webサイトは、<br />
          ただ “作って終わりの看板” ではありません。<br /><br />
          あなたのお店やブランドの「空気」と「価値」を、  
          24時間静かに伝え続ける窓口です。
        </p>

        {/* リード文（安心感と分かりやすさ） */}
        <p className="price-lead aq-fade delay-3">
          下記は制作料金の目安です。<br />
          ページ数や内容によって調整しますが、  
          <strong>制作前のヒアリングで内容を整理し、必ず総額をお伝えします。</strong><br />
          <span className="price-lead-note">
            現在はポートフォリオ強化期間のため、  
            初回のお客様は通常よりも抑えた価格で対応しています。
          </span>
        </p>

        {/* 価格表 */}
        <div className="price-grid aq-fade delay-4">

          <PriceCard
            label="PLAN 01"
            title="Landing Page（1ページ）"
            price="¥60,000〜"
            desc={
              <>
                キャンペーン・ブランド紹介など、  
                <strong>1ページで魅力をまとめたい方向け。</strong><br />
                必要な情報だけを上品に整理し、  
                「読みやすく伝わる」構成で仕上げます。
              </>
            }
          />

          <PriceCard
            label="PLAN 02"
            title="Small Website（3〜5ページ）"
            price="¥120,000〜"
            desc={
              <>
                カフェ・サロン・スタジオ・個人事業など、  
                <strong>テンプレでは物足りない方に最適。</strong><br />
                構成と導線を丁寧に整理し、  
                初めての方でも使いやすいサイトに仕上げます。
              </>
            }
          />

          <PriceCard
            label="PLAN 03"
            title="Brand Site（6ページ以上）"
            price="¥180,000〜"
            desc={
              <>
                写真・色・文字・余白を統一した、  
                <strong>ブランド全体の世界観を届けるサイト。</strong><br />
                「雰囲気」や「らしさ」を大事にしたい方へ。
              </>
            }
          />

        </div>

        {/* まとめ・安心文 */}
        <p className="price-note aq-fade delay-5">
          ご相談内容をヒアリングし、  
          目的やご予算に合わせて最適な形をご提案します。<br />
          <strong>制作途中で金額が変わることはありませんのでご安心ください。</strong>
        </p>

        {/* CTA */}
        <div className="price-cta aq-fade delay-6">
          <div className="mb-4 text-center">
            <Link
              to="/price"
              className="
                inline-block text-sm tracking-wider
                text-[#d9c8a6]/70 transition-colors duration-300
                hover:text-[#d9c8a6]
              "
            >
              料金の詳細を見る →
            </Link>
          </div>

          <Link to="/contact" className="price-btn">
            制作の相談をする
          </Link>
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

      {/* glow (背面固定) */}
      <div className="price-card-glow" />
    </div>
  );
});
