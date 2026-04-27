import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./price.css";

const FLOW = [
  { num: "01", label: "ヒアリング", sub: "ご相談・要件確認" },
  { num: "02", label: "設計・デザイン", sub: "構成 / 見え方の整理" },
  { num: "03", label: "実装・確認", sub: "制作 / 修正 / 調整" },
  { num: "04", label: "納品・公開", sub: "公開設定サポート" },
];

const INCLUDES = [
  { label: "オリジナルデザイン", state: "含む", optional: false },
  { label: "スマホ対応", state: "含む", optional: false },
  { label: "写真の軽い補正", state: "含む", optional: false },
  { label: "公開初期設定", state: "含む", optional: false },
  { label: "ドメイン接続サポート", state: "含む", optional: false },
  { label: "運用・保守", state: "任意", optional: true },
];

const PLANS = [
  {
    label: "PLAN 01",
    title: "Landing Page",
    jp: "1ページ構成",
    price: "¥60,000〜",
    desc:
      "サービスや商品の魅力を、1ページで伝えるプランです。「まず公開したい」「費用を抑えたい」という段階に向いています。",
    includes: [
      "1ページ構成",
      "オリジナルデザイン",
      "スマホ対応",
      "公開初期設定",
      "ドメイン / サーバー接続サポート",
    ],
  },
  {
    label: "PLAN 02",
    title: "Small Website",
    jp: "小規模サイト",
    price: "¥120,000〜",
    desc:
      "トップページと下層ページで、お店やサービスをきちんと伝えるプランです。何をやっているか、どこに連絡するか、が迷わず伝わる構成を整えます。",
    includes: [
      "トップ + 下層2〜4ページ",
      "サービス内容の整理",
      "スマホ対応",
      "公開初期設定",
      "ドメイン / サーバー接続サポート",
    ],
  },
  {
    label: "PLAN 03",
    title: "Impression Site",
    jp: "印象重視サイト",
    price: "¥240,000〜",
    desc:
      "写真・色・余白・導線まで一つのトーンに整え、見た瞬間に「ここに頼みたい」と感じてもらえるサイトを作ります。価格ではなく、印象で選ばれたい方へ。",
    includes: [
      "印象設計（全体のトーン・空気感の設計）",
      "複数ページ対応",
      "写真 / 色 / 余白のトーン調整",
      "スマホ対応",
      "公開初期設定 / 接続サポート",
    ],
    featured: true,
  },
];

function PriceVisual() {
  return (
    <div className="price-visual price-reveal price-reveal-4">
      <div className="price-flow">
        <p className="price-visual-label">制作の流れ</p>

        <div className="price-flow-track" aria-hidden="true" />

        <div className="price-flow-list">
          {FLOW.map((item, index) => {
            const active = index === FLOW.length - 1;

            return (
              <div
                key={item.num}
                className={`price-flow-item ${active ? "is-final" : ""}`}
                style={{ "--flow-index": index }}
              >
                <span className="price-flow-dot" />
                <p className="price-flow-num">{item.num}</p>
                <p className="price-flow-label">{item.label}</p>
                <p className="price-flow-sub">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="price-visual-divider" />

      <div className="price-includes">
        <p className="price-visual-label">全プラン共通</p>

        <div className="price-includes-list">
          {INCLUDES.map((item, index) => (
            <div
              key={item.label}
              className={`price-include-row ${
                item.optional ? "is-option" : "is-included"
              }`}
              style={{ "--include-index": index }}
            >
              <span className="price-include-check" aria-hidden="true">
                {item.optional ? "＋" : "✓"}
              </span>

              <span className="price-include-label">{item.label}</span>

              <span className="price-include-state">{item.state}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const PriceCard = React.memo(function PriceCard({
  label,
  title,
  jp,
  desc,
  price,
  includes = [],
  featured = false,
  revealIndex = 0,
}) {
  return (
    <article
      className={`price-card price-card-reveal ${
        featured ? "price-card-featured" : ""
      }`}
      style={{ "--price-card-index": revealIndex }}
    >
      <span className="price-card-line" aria-hidden="true" />

      <div className="price-card-head">
        <p className="price-card-label">{label}</p>

        {featured && (
          <span className="price-card-badge" aria-label="おすすめ">
            RECOMMEND
          </span>
        )}
      </div>

      <h3 className="price-card-title">{title}</h3>
      <p className="price-card-jp">{jp}</p>

      <p className="price-card-price">{price}</p>

      <p className="price-card-desc">{desc}</p>

      {includes.length > 0 && (
        <ul className="price-card-list">
          {includes.map((item) => (
            <li key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
});

function MaintenancePlan() {
  return (
    <div className="special-plan price-reveal price-reveal-6">
      <article className="price-card price-card-special">
        <span className="price-card-line" aria-hidden="true" />

        <div className="price-card-head">
          <p className="price-card-label">PLAN 04</p>

          <span className="price-card-badge price-card-badge-muted">
            OPTIONAL
          </span>
        </div>

        <h3 className="price-card-title">Maintenance / Subscription</h3>
        <p className="price-card-jp">運用・保守</p>

        <p className="price-card-price">¥9,800 / 月</p>

        <p className="price-card-desc">
          公開後も、サイトの印象を保ちながら継続的に整えるための運用プランです。
          <strong>月管理は必須ではなく、必要な時だけの都度対応も可能</strong>
          です。
        </p>
      </article>
    </div>
  );
}

export default function Price() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(
      root.querySelectorAll(".price-reveal, .price-card-reveal")
    );

    const reveal = (target) => {
      target.classList.add("is-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="price" ref={sectionRef} className="price-section">
      <div className="price-container">
        <div
          className="price-side-line price-reveal price-line-reveal price-reveal-1"
          aria-hidden="true"
        />

        <header className="price-header price-reveal price-reveal-1">
          <SectionSvgTitle
            title="PRICE"
            sub="PLANS / ESTIMATE"
            className="price-svg-title"
          />

          <p className="price-section-title">
            料金プラン / 制作プラン + 任意の運用サポート
          </p>
        </header>

        <div className="price-intro">
          <p className="price-philosophy price-reveal price-reveal-2">
            はじめての方にも、
            <br />
            内容が固まっていない段階でも相談しやすいよう案内しています。
          </p>

          <p className="price-lead price-reveal price-reveal-3">
            ご相談前に、
            <strong>「総額」「制作範囲」「公開までの流れ」</strong>
            を事前にご確認いただけます。
            <br />
            <span className="price-lead-note">
              ※ 表示価格は税込の目安です。内容により正式なお見積もりをご案内します。
            </span>
          </p>
        </div>

        <PriceVisual />

        <div className="price-grid top-plans">
          {PLANS.map((plan, index) => (
            <PriceCard key={plan.label} {...plan} revealIndex={index} />
          ))}
        </div>

        <MaintenancePlan />

        <p className="price-note price-reveal price-reveal-7">
          ドメイン代・サーバー代は実費です。
          <br />
          公開に必要な初期設定や接続サポートは、料金内で対応します。
          <br />
          内容の追加や変更がある場合は、事前にご相談のうえで調整します。
        </p>

        <div className="price-cta price-reveal price-reveal-8">
          <Link to="/price" className="price-btn">
            <span>料金の詳細を見る</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}