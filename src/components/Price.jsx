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
      <div className="relative mx-auto max-w-5xl px-6">
        {/* 中央軸ゴールドライン */}
        <div className="price-gold-line" />

        {/* ===== PAGE TITLE ===== */}
        <h2
          translate="no"
          className="
            price-title aq-fade delay-1
            text-[2.2rem] sm:text-[2.4rem]
            tracking-[0.22em]
            text-white font-light
          "
        >
          PRICE
        </h2>

        {/* ===== SECTION TITLE ===== */}
        <h3
          className="
            price-section-title aq-fade delay-1
            mb-10
            text-[1.05rem]
            tracking-[0.18em]
            text-white/80
          "
        >
          料金プラン / PRICING PLANS
        </h3>

        {/* ===== Sub Lead ===== */}
        <p
          className="
            aq-fade delay-1
            mb-10
            text-[0.85rem] sm:text-[0.9rem]
            tracking-[0.12em]
            text-white/60
          "
        >
          ― 料金について（制作費の目安） ―
        </p>

        {/* =====================
            LEAD / PC
        ===================== */}
        <div className="hidden sm:block">
          <p className="price-philosophy aq-fade delay-2">
            Webサイトは、サービスやお店の魅力を
            <span className="text-white/95">分かりやすく伝えるための窓口</span>
            です。
            <br />
            見た目だけでなく、伝わりやすさや使いやすさも含めて丁寧に設計しています。
          </p>

          <p className="price-lead aq-fade delay-3">
            下記はあくまで目安の料金です。
            <br />
            制作前にヒアリングを行い、
            <strong>「総額」「納品物」「進め方」</strong>
            を事前にお伝えします。
            <br />
            <span className="price-lead-note">
              ※ 現在はポートフォリオ強化期間のため、
              初回の方には控えめな価格で制作しています。
            </span>
          </p>
        </div>

        {/* =====================
            LEAD / SP
        ===================== */}
        <div className="block sm:hidden">
          <p className="price-philosophy aq-fade delay-2">
            Webサイトは、
            <br />
            サービスやお店の魅力を
            <br />
            <span className="text-white/95">
              分かりやすく伝えるための窓口
            </span>
            です。
            <br />
            <br />
            見た目だけでなく、
            <br />
            伝わりやすさや使いやすさも含めて
            <br />
            丁寧に設計しています。
          </p>

          <p className="price-lead aq-fade delay-3">
            下記はあくまで
            <br />
            目安の料金です。
            <br />
            <br />
            制作前にヒアリングを行い、
            <br />
            <strong>
              「総額」「納品物」
              <br />
              「進め方」
            </strong>
            を事前にお伝えします。
            <br />
            <br />
            <span className="price-lead-note">
              ※ 現在はポートフォリオ強化期間のため、
              <br />
              初回の方には控えめな価格で
              <br />
              制作しています。
            </span>
          </p>
        </div>

        {/* PLAN 01〜03 */}
        <div className="price-grid top-plans aq-fade delay-4">
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
            desc="カフェ・サロン・美容・個人事業向け。トップ＋2〜4ページを想定した、小さくても伝わりやすいサイト設計です。"
          />

          <PriceCard
            label="PLAN 03"
            title="Brand Site（世界観重視）"
            price="¥240,000〜"
            desc="写真・色・余白・文字の統一を前提に、ブランド全体の世界観を丁寧に構築。トップ＋4〜10ページほどを想定しています。"
          />
        </div>

        {/* PLAN 04 */}
        <div className="special-plan aq-fade delay-5">
          <div className="price-card price-card-special">
            <p className="price-card-label">PLAN 04</p>
            <h3 className="price-card-title">
              Maintenance / Subscription（運用・保守）
            </h3>
            <p className="price-card-price">¥9,800 / 月</p>
            <p className="price-card-desc">
              文言・写真・料金の差し替え、
              バナーの軽微な修正、
              イベント情報の追加など、
              <strong>世界観を崩さない更新</strong>
              を代行します。
            </p>
          </div>
        </div>

        {/* NOTE */}
        <div className="hidden sm:block">
          <p className="price-note aq-fade delay-6">
            追加ページや機能追加もご相談可能です。
            <br />
            <strong>内容に応じて、事前に分かりやすくご案内します。</strong>
          </p>
        </div>

        <div className="block sm:hidden">
          <p className="price-note aq-fade delay-6">
            追加ページや機能追加も
            <br />
            ご相談可能です。
            <br />
            <br />
            <strong>
              内容に応じて、
              <br />
              事前に分かりやすくご案内します。
            </strong>
          </p>
        </div>

        {/* CTA */}
        <div className="price-cta aq-fade delay-7 mt-16">
          <Link to="/price" className="price-btn">
            料金の詳細を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===== Price Card ===== */
const PriceCard = React.memo(function PriceCard({ label, title, desc, price }) {
  return (
    <div className="price-card">
      <p className="price-card-label">{label}</p>
      <h3 className="price-card-title">{title}</h3>
      <p className="price-card-price">{price}</p>
      <p className="price-card-desc">{desc}</p>
    </div>
  );
});