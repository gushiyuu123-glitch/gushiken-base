// src/pages/PriceDetail.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./priceDetail.css";

const PAGE_TITLE = "料金の詳細｜GUSHIKEN DESIGN";
const PAGE_DESCRIPTION =
  "GUSHIKEN DESIGNの料金詳細ページ。LP・小規模サイト・印象重視サイト・運用保守の料金目安、制作の流れ、お支払い、追加オプションについてご案内しています。";
const CANONICAL_URL = "https://gushikendesign.com/price";

const PLANS = [
  {
    badge: "01",
    title: "Landing Page",
    jp: "1ページ構成",
    price: "60,000",
    detail:
      "サービスや商品の魅力を、1ページで伝えるプランです。まず公開したい、費用を抑えたい、という段階に向いています。",
    bestFor: "「まだ詳しいページは不要。まず一枚、きちんと見せたい」という方へ。",
    includes: [
      "1ページ構成",
      "オリジナルデザイン",
      "スマホ対応",
      "写真の軽い補正（明るさ・色）",
      "公開初期設定",
      "ドメイン / サーバー接続サポート",
    ],
  },
  {
    badge: "02",
    title: "Small Website",
    jp: "小規模サイト",
    price: "120,000",
    detail:
      "トップページと下層ページで、お店やサービスをきちんと伝えるプランです。何をやっているか、どこに連絡するか、が迷わず伝わる構成を整えます。",
    bestFor: "「サービス内容・料金・アクセスをページ別にまとめたい」という方へ。",
    includes: [
      "トップ + 下層2〜4ページ",
      "サービス内容の整理",
      "スマホ対応",
      "写真の軽い補正（明るさ・色）",
      "公開初期設定",
      "ドメイン / サーバー接続サポート",
    ],
  },
  {
    badge: "03",
    title: "Impression Site",
    jp: "印象重視サイト",
    price: "240,000",
    detail:
      "写真・色・余白・文字・導線まで一つのトーンに整え、見た瞬間に「ここに頼みたい」と感じてもらえるサイトを作ります。価格ではなく、印象で選ばれたい方へ。",
    bestFor: "「安っぽく見せたくない。お店の雰囲気をちゃんと伝えたい」という方へ。",
    includes: [
      "印象設計（全体のトーン・空気感の設計）",
      "複数ページ対応",
      "写真 / 色 / 余白のトーン調整",
      "スマホ対応",
      "公開初期設定 / 接続サポート",
    ],
    featured: true,
    featuredLabel: "SIGNATURE",
  },
];

const FLOW_STEPS = [
  { n: "01", title: "ヒアリング", sub: "目的・雰囲気・予算感の確認" },
  { n: "02", title: "構成と進め方のご提案", sub: "LP / 複数ページ / 必要範囲の整理" },
  { n: "03", title: "お見積もり・着手金", sub: "内容確定後、着手金50%で制作開始" },
  { n: "04", title: "デザイン制作", sub: "見え方・情報整理・導線を設計" },
  { n: "05", title: "実装・確認", sub: "スマホ対応・表示調整・公開前確認" },
  { n: "06", title: "公開・納品", sub: "公開完了後、最終確認して納品" },
];

const OPTIONS = [
  { name: "お知らせ更新機能の導入", price: "¥30,000〜" },
  { name: "写真の個別補正（1枚）", price: "¥10,000〜" },
  { name: "追加ページ", price: "内容に応じてお見積もり" },
  { name: "ロゴ / 印刷物 / 撮影", price: "内容に応じてご相談" },
];

function setMetaByName(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;

  let tag = document.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

export default function PriceDetail() {
  const rootRef = useRef(null);

  useEffect(() => {
    document.title = PAGE_TITLE;

    setMetaByName("description", PAGE_DESCRIPTION);
    setCanonical(CANONICAL_URL);

    setMetaByProperty("og:title", PAGE_TITLE);
    setMetaByProperty("og:description", PAGE_DESCRIPTION);
    setMetaByProperty("og:url", CANONICAL_URL);
    setMetaByProperty("og:type", "website");

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", PAGE_TITLE);
    setMetaByName("twitter:description", PAGE_DESCRIPTION);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll(".pd-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("pd-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="pd-root" aria-labelledby="price-heading">
      <div className="pd-grain" aria-hidden="true" />

      <div className="pd-container">
        <div className="pd-side-line" aria-hidden="true" />

        <header className="pd-header pd-reveal">
          <SectionSvgTitle
            title="PRICE"
            sub="PRICE / DETAIL"
            className="pd-svg-title"
          />

          <h1 id="price-heading" className="pd-hidden-heading">
            料金の詳細と進め方
          </h1>

          <p className="pd-page-title">料金の詳細と進め方</p>

          <p className="pd-lead">
            はじめてのご相談でも、内容が固まっていなくても大丈夫です。
            <br />
            <span>目的・雰囲気・予算感をお聞きしながら</span>、
            どのプランが合うかを一緒に整理していきます。
            <br />
            料金は事前に総額をご案内したうえで進めています。
          </p>

          <p className="pd-taxnote">
            ※ 表示価格はすべて税込の目安です。内容により正式なお見積もりをご案内します。
          </p>
        </header>

        <SectionTitle main>プランと料金</SectionTitle>

        <div className="pd-plans pd-reveal">
          {PLANS.map((plan) => (
            <PlanCard key={plan.badge} {...plan} />
          ))}
        </div>

        <SectionTitle main>運用・保守</SectionTitle>

        <div className="pd-reveal">
          <MaintenanceCard />
        </div>

        <SectionTitle main>制作の流れ</SectionTitle>

        <div className="pd-reveal">
          <FlowTimeline />
        </div>

        <SectionTitle main>お支払いについて</SectionTitle>

        <div className="pd-reveal">
          <TextBlock>
            <li>着手金：50%（制作開始前）</li>
            <li>残金：公開完了・最終確認後、7日以内のお支払いをお願いしています。</li>
            <li>内容の追加や変更がある場合は、必ず事前にご相談のうえで調整します。</li>
          </TextBlock>
        </div>

        <SectionTitle main>ご確認いただきたいこと</SectionTitle>

        <div className="pd-reveal">
          <TextBlock>
            <li>納期の目安は内容により2〜5週間前後です。</li>
            <li>
              素材のご提出が遅れた場合は、
              <span className="pd-text-accent">納期も同じ日数分スライド</span>
              します。
            </li>
            <li>
              修正は回数と範囲を事前にご案内します。
              <span className="pd-text-muted">
                （1回＝まとめて1回分の修正指示）
              </span>
            </li>
            <li>
              丁寧な仕上がりを優先しているため、
              <span className="pd-text-accent">
                急ぎのみを優先されるご依頼とは合わない場合があります。
              </span>
            </li>
          </TextBlock>
        </div>

        <SectionTitle>写真・ビジュアルについて</SectionTitle>

        <div className="pd-reveal">
          <TextBlock>
            <li>写真素材が不足している場合は、雰囲気に合う画像の選定も行います。</li>
            <li>
              お持ちの写真は、
              <span className="pd-text-accent">明るさ・色の軽い補正は料金内</span>
              で対応します。
              <span className="pd-text-muted">（個別補正はオプション）</span>
            </li>
            <li>参考URLやイメージ画像を共有いただくと、方向性を合わせやすくなります。</li>
            <li className="pd-note">
              ※ 参考サイトは方向性確認のみに使用します。デザインの模倣は行いません。
            </li>
          </TextBlock>
        </div>

        <SectionTitle>公開前の初期設定について</SectionTitle>

        <div className="pd-reveal">
          <TextBlock>
            <li>タイトル・説明文・OGP画像・favicon などの初期設定は標準対応です。</li>
            <li>画像の軽量化・表示速度の最適化も含まれます。</li>
            <li>ドメイン・サーバー接続など、公開に必要な設定までサポートします。</li>
          </TextBlock>
        </div>

        <SectionTitle>追加オプション</SectionTitle>

        <div className="pd-reveal">
          <OptionsGrid />
        </div>

        <div className="pd-cta-area pd-reveal">
          <div className="pd-cta-ornament" aria-hidden="true">
            <span />
            <span className="pd-cta-ornament-dot" />
            <span />
          </div>

          <p className="pd-thanks">
            まだ内容が決まっていなくても、予算の目安だけ知りたい段階でも構いません。
            <br />
            気軽にご連絡ください。要点はこちらで整理しながら進めます。
          </p>

          <Link to="/contact" className="pd-cta">
            <span>CONTACT</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children, main = false }) {
  return (
    <h2 className={`pd-section-title ${main ? "is-main" : ""} pd-reveal`}>
      <span className="pd-section-rule" aria-hidden="true" />
      {children}
    </h2>
  );
}

function PlanCard({
  badge,
  title,
  jp,
  price,
  detail,
  bestFor,
  includes = [],
  featured = false,
  featuredLabel = "RECOMMEND",
}) {
  return (
    <article className={`pd-plan-card ${featured ? "is-featured" : ""}`}>
      {featured && <span className="pd-plan-popular">{featuredLabel}</span>}

      <p className="pd-plan-num">PLAN {badge}</p>
      <h3 className="pd-plan-name">{title}</h3>
      <p className="pd-plan-jp">{jp}</p>

      <div className="pd-plan-price-wrap">
        <p className="pd-plan-price-label">料金（税込）</p>
        <p className="pd-plan-price">
          <span className="pd-plan-currency">¥</span>
          {price}
          <span className="pd-plan-suffix">〜</span>
        </p>
      </div>

      <p className="pd-plan-detail">{detail}</p>
      <p className="pd-plan-best">{bestFor}</p>

      {includes.length > 0 && (
        <ul className="pd-plan-includes">
          {includes.map((item) => (
            <li key={item}>
              <span className="pd-plan-dot" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function MaintenanceCard() {
  const included = [
    "文言の調整・メニューの差し替え",
    "写真の軽い調整・差し替え",
    "お知らせ・イベント情報の更新",
    "営業時間 / Google Map の更新",
    "バナーや見出しの軽微な調整",
  ];

  const extra = [
    "新ページ / 新セクションの追加",
    "大きなデザイン変更",
    "写真撮影",
    "長文のコピー制作",
    "大規模な仕様変更",
  ];

  return (
    <article className="pd-maintenance">
      <div className="pd-maintenance-header">
        <div className="pd-maintenance-info">
          <p className="pd-maintenance-num">PLAN 04</p>
          <h3 className="pd-maintenance-name">Maintenance / Subscription</h3>

          <p className="pd-maintenance-detail">
            公開後も、サイトの印象を保ちながら継続的に整えるための運用プランです。
            <strong>月管理は必須ではなく、必要な時だけの都度対応も可能</strong>
            です。更新のたびに連絡する手間を減らしたい方に向いています。
          </p>
        </div>

        <div className="pd-maintenance-price-wrap">
          <p className="pd-maintenance-price-label">月額（税込）</p>
          <p className="pd-maintenance-price">
            <span className="pd-maintenance-currency">¥</span>
            9,800
            <span className="pd-maintenance-unit"> / 月</span>
          </p>
        </div>
      </div>

      <div className="pd-maintenance-cols">
        <div>
          <h4 className="pd-maintenance-col-title">月額に含まれる内容</h4>

          <ul className="pd-maintenance-list">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="pd-maintenance-col-title pd-maintenance-col-title--extra">
            別途ご相談となる内容
          </h4>

          <ul className="pd-maintenance-list pd-maintenance-list--extra">
            {extra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function FlowTimeline() {
  return (
    <div className="pd-flow">
      {FLOW_STEPS.map((step, index) => (
        <div key={step.n} className="pd-flow-item">
          <div className="pd-flow-marker">
            <div className="pd-flow-dot">{step.n}</div>
            {index < FLOW_STEPS.length - 1 && (
              <div className="pd-flow-line" aria-hidden="true" />
            )}
          </div>

          <div className="pd-flow-body">
            <p className="pd-flow-title">{step.title}</p>
            <p className="pd-flow-sub">{step.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function OptionsGrid() {
  return (
    <div className="pd-options">
      {OPTIONS.map((option) => (
        <div key={option.name} className="pd-option">
          <p className="pd-option-name">{option.name}</p>
          <p className="pd-option-price">{option.price}</p>
        </div>
      ))}
    </div>
  );
}

function TextBlock({ children }) {
  return <ul className="pd-textblock">{children}</ul>;
}