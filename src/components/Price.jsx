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
            Webサイトは、
            <span className="text-white/95">
              魅力を分かりやすく伝えるための窓口
            </span>
            です。
            <br />
            見た目だけでなく、伝わりやすさや使いやすさまで含めて整えています。
          </p>

          <p className="price-lead aq-fade delay-3">
            下記は制作費の目安です。
            <br />
            ご相談前に、
            <strong>「総額」「納品物」「進め方」</strong>
            を分かりやすくご案内します。
            <br />
            <span className="price-lead-note">
              初めての方でも進めやすいよう、公開準備まで含めてサポートしています。
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
            <span className="text-white/95">
              魅力を分かりやすく伝えるための窓口
            </span>
            です。
            <br />
            <br />
            見た目だけでなく、
            <br />
            伝わりやすさや使いやすさまで
            <br />
            丁寧に整えています。
          </p>

          <p className="price-lead aq-fade delay-3">
            下記は制作費の目安です。
            <br />
            <br />
            ご相談前に、
            <br />
            <strong>
              「総額」「納品物」
              <br />
              「進め方」
            </strong>
            を分かりやすくご案内します。
            <br />
            <br />
            <span className="price-lead-note">
              公開準備まで含めて
              <br />
              サポートしています。
            </span>
          </p>
        </div>

        {/* PLAN 01〜03 */}
        <div className="price-grid top-plans aq-fade delay-4">
          <PriceCard
            label="PLAN 01"
            title="Landing Page（1ページ）"
            price="¥60,000〜"
            desc="商品やサービスの魅力を、1ページで分かりやすく伝えるためのプランです。"
            includes={[
              "オリジナルデザイン",
              "スマホ対応",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
          />

          <PriceCard
            label="PLAN 02"
            title="Small Website（小規模サイト）"
            price="¥120,000〜"
            desc="トップページと数ページで、お店やサービスをきちんと伝えたい方向けのプランです。"
            includes={[
              "トップ + 下層2〜4ページ",
              "スマホ対応",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
          />

          <PriceCard
            label="PLAN 03"
            title="Brand Site（世界観重視）"
            price="¥240,000〜"
            desc="写真・色・余白まで整えながら、ブランド全体の印象を丁寧につくるプランです。"
            includes={[
              "世界観設計",
              "複数ページ対応",
              "スマホ対応",
              "公開初期設定 / 接続サポート",
            ]}
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
              文言や写真の差し替え、軽微な修正など、
              <strong>サイトの雰囲気を保ちながら更新</strong>
              を行います。
            </p>
          </div>
        </div>

        {/* NOTE / PC */}
        <div className="hidden sm:block">
          <p className="price-note aq-fade delay-6">
            ドメイン代・サーバー代は実費です。
            <br />
            取得や接続のサポートは料金内で対応しています。
            <br />
            追加ページや機能追加も、内容に応じてご案内します。
          </p>
        </div>

        {/* NOTE / SP */}
        <div className="block sm:hidden">
          <p className="price-note aq-fade delay-6">
            ドメイン代・サーバー代は
            <br />
            実費です。
            <br />
            <br />
            取得や接続のサポートは
            <br />
            料金内で対応しています。
            <br />
            <br />
            追加ページや機能追加も
            <br />
            内容に応じてご案内します。
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
const PriceCard = React.memo(function PriceCard({
  label,
  title,
  desc,
  price,
  includes = [],
}) {
  return (
    <div className="price-card">
      <p className="price-card-label">{label}</p>
      <h3 className="price-card-title">{title}</h3>
      <p className="price-card-price">{price}</p>
      <p className="price-card-desc">{desc}</p>

      {includes.length > 0 && (
        <ul className="mt-5 space-y-2 text-[0.72rem] leading-[1.9] tracking-[0.08em] text-white/54">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[0.55em] h-[3px] w-[3px] rounded-full bg-[#cdbd8f]/65" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});