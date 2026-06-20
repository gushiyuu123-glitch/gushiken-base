// src/components/Price.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "./Price.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const FLOW = [
  { num: "01", label: "ヒアリング", sub: "ご相談・要件確認" },
  { num: "02", label: "設計・デザイン", sub: "構成 / 見せ方の方向" },
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
      "商品・サービスの魅力を、1ページで伝えるプランです。まず公開したい方や、必要な情報を絞って見せたい段階に向いています。",
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
      "トップページと下層ページで、お店やサービスの情報を整理するプランです。事業内容・メニュー・アクセス・問い合わせなどを見やすくまとめます。",
    includes: [
      "トップ + 下層2〜4ページ",
      "サービス内容の構成",
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
      "写真・色・余白・言葉のトーンを合わせ、ブランドやサービスの見え方を深く整えるプランです。世界観で選ばれたい方へ。",
    includes: [
      "世界観 / トーン設計",
      "複数ページ対応",
      "写真 / 色 / 余白の整理",
      "スマホ対応",
      "公開初期設定 / 接続サポート",
    ],
    featured: true,
  },
];

function PriceVisual() {
  return (
    <div
      className={cx(styles.visual, styles.reveal)}
      data-reveal
      style={{ "--d": "220ms" }}
    >
      <div className={styles.flow}>
        <p className={styles.visualLabel}>制作の流れ</p>

        <div className={styles.flowTrack} aria-hidden="true" />

        <div className={styles.flowList}>
          {FLOW.map((item, index) => {
            const active = index === FLOW.length - 1;

            return (
              <div
                key={item.num}
                className={cx(styles.flowItem, active && styles.final)}
                style={{ "--flow-index": index }}
              >
                <span className={styles.flowDot} aria-hidden="true" />
                <p className={styles.flowNum}>{item.num}</p>
                <p className={styles.flowLabel}>{item.label}</p>
                <p className={styles.flowSub}>{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.visualDivider} />

      <div className={styles.includes}>
        <p className={styles.visualLabel}>全プラン共通</p>

        <div className={styles.includesList}>
          {INCLUDES.map((item, index) => (
            <div
              key={item.label}
              className={cx(
                styles.includeRow,
                item.optional ? styles.option : styles.included
              )}
              style={{ "--include-index": index }}
            >
              <span className={styles.includeCheck} aria-hidden="true">
                {item.optional ? "＋" : "✓"}
              </span>

              <span className={styles.includeLabel}>{item.label}</span>
              <span className={styles.includeState}>{item.state}</span>
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
      className={cx(
        styles.card,
        styles.reveal,
        featured && styles.cardFeatured
      )}
      data-reveal
      style={{ "--d": `${320 + revealIndex * 110}ms` }}
    >
      <span className={styles.cardLine} aria-hidden="true" />

      <div className={styles.cardHead}>
        <p className={styles.cardLabel}>{label}</p>

        {featured && (
          <span className={styles.badge} aria-label="おすすめプラン">
            RECOMMEND
          </span>
        )}
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardJp}>{jp}</p>

      <p className={styles.cardPrice}>{price}</p>

      <p className={styles.cardDesc}>{desc}</p>

      {includes.length > 0 && (
        <ul className={styles.cardList}>
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
    <div
      className={cx(styles.specialWrap, styles.reveal)}
      data-reveal
      style={{ "--d": "720ms" }}
    >
      <article className={cx(styles.card, styles.cardSpecial)}>
        <span className={styles.cardLine} aria-hidden="true" />

        <div className={styles.cardHead}>
          <p className={styles.cardLabel}>PLAN 04</p>
          <span className={cx(styles.badge, styles.badgeMuted)}>OPTIONAL</span>
        </div>

        <h3 className={styles.cardTitle}>Maintenance</h3>
        <p className={styles.cardJp}>運用・保守</p>

        <p className={styles.cardPrice}>¥9,800 / 月</p>

        <p className={styles.cardDesc}>
          公開後も、文章の差し替え・軽微な調整・表示確認などを継続できる運用プランです。
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

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const targets = Array.from(root.querySelectorAll("[data-reveal]"));
    const reveal = (el) => el.classList.add(styles.in);

    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((target) => io.observe(target));

    return () => io.disconnect();
  }, []);

  return (
    <section
      id="price"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="price-title"
    >
      <div className={styles.container}>
        <div
          className={cx(styles.sideLine, styles.reveal, styles.lineReveal)}
          data-reveal
          style={{ "--d": "40ms" }}
          aria-hidden="true"
        />

        <header
          className={cx(styles.header, styles.reveal)}
          data-reveal
          style={{ "--d": "40ms" }}
        >
          <h2 id="price-title" className={styles.srOnly}>
            料金プラン
          </h2>

          <SectionSvgTitle
            title="PRICE"
            sub="PLANS / ESTIMATE"
            className={styles.svgTitle}
          />

          <p className={styles.sectionTitle}>料金プラン / 制作プラン</p>
        </header>

        <div className={styles.intro}>
          <p
            className={cx(styles.philosophy, styles.reveal)}
            data-reveal
            style={{ "--d": "90ms" }}
          >
            制作範囲と費用感を、
            <br />
            先に確認できるように。
          </p>

          <p
            className={cx(styles.lead, styles.reveal)}
            data-reveal
            style={{ "--d": "130ms" }}
          >
            ご相談前に、
            <strong>総額・制作範囲・公開までの流れ</strong>
            を確認できるよう、目安価格を掲載しています。
            <br />
            <span className={styles.leadNote}>
              ※ 表示価格は税込の目安です。内容により正式なお見積もりをご案内します。
            </span>
          </p>
        </div>

        <PriceVisual />

        <div className={styles.grid}>
          {PLANS.map((plan, index) => (
            <PriceCard key={plan.label} {...plan} revealIndex={index} />
          ))}
        </div>

        <MaintenancePlan />

        <p
          className={cx(styles.note, styles.reveal)}
          data-reveal
          style={{ "--d": "820ms" }}
        >
          ドメイン代は実費です。
          <br />
          公開に必要な初期設定や接続サポートは、料金内で対応します。
          <br />
          内容の追加や変更がある場合は、事前にご相談のうえで調整します。
        </p>

        <div
          className={cx(styles.cta, styles.reveal)}
          data-reveal
          style={{ "--d": "920ms" }}
        >
          <Link to="/price" className={styles.btn}>
            <span>料金の詳細を見る</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}