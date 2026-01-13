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

        {/* ===== Lead（思想は1回だけ） ===== */}
        <p className="price-philosophy aq-fade delay-2">
          Webサイトは、<br />
          <span className="text-white/95">
            ただ作って終わりの「看板」ではありません。
          </span><br /><br />
          お店やブランドの空気と価値を、  
          静かに伝え続けるための大切な窓口です。
        </p>

        {/* ===== 安心文（短く・強く） ===== */}
        <p className="price-lead aq-fade delay-3">
          下記は制作料金の目安です。<br />
          <strong>
            制作前のヒアリングで内容を整理し、  
            必ず事前に総額をお伝えします。
          </strong>
          <span className="price-lead-note">
            ※ 現在はポートフォリオ強化期間のため、  
            初回の方は抑えた価格で対応しています。
          </span>
        </p>

        {/* ===== Price Cards ===== */}
        <div className="price-grid aq-fade delay-4">

          <PriceCard
            label="PLAN 01"
            title="Landing Page"
            price="¥60,000〜"
            desc="キャンペーンやブランド紹介など、1ページで魅力を伝えたい方向け。必要な情報を上品に整理します。"
          />

          <PriceCard
            label="PLAN 02"
            title="Small Website"
            price="¥120,000〜"
            desc="カフェ・サロン・個人事業向け。トップページ＋2〜4ページ程度を想定し、必要な情報を上品に整理します。"
          />

          <PriceCard
            label="PLAN 03"
            title="Brand Site"
            price="¥200,000〜"
            desc="写真・色・文字・余白を統一し、ブランド全体の世界観を丁寧に設計します。トップページ＋4〜6ページ程度を想定し、情報と印象が矛盾しない構成に仕上げます。"
          />

        </div>

        {/* ===== 最終安心文 ===== */}
        <p className="price-note aq-fade delay-5">
          ご相談内容に応じて、  
          目的やご予算に合った最適な形をご提案します。<br />
          <strong>制作途中で金額が変わることはありません。</strong>
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
