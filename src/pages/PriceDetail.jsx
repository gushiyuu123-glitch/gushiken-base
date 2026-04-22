import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./priceDetail.css";

export default function PriceDetail() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("pd-revealed");
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".pd-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pd-root">
      <div className="pd-grain" aria-hidden="true" />

      <div className="pd-container">
        {/* ── Header ── */}
        <header className="pd-header pd-reveal">
          <p className="pd-eyebrow">PRICE DETAIL</p>
          <h1 className="pd-title">料金の詳細と進め方</h1>
          <div className="pd-title-rule" />
          <p className="pd-lead">
            Webサイトは、
            <span className="pd-lead-em">魅力や信頼感を伝えるための窓口</span>
            です。
            <br />
            目的や雰囲気を伺いながら、
            <span className="pd-lead-em">どんな見せ方が合うかを整理</span>
            し、
            <br />
            料金は事前に総額をご案内したうえで進めています。
          </p>

          {/* ✅ 税の迷いを消す */}
          <p className="pd-taxnote">※ 表示価格はすべて税込の目安です（内容により変動します）</p>
        </header>

        {/* ── Plans ── */}
        <SectionTitle main>プランと料金</SectionTitle>
        <div className="pd-plans pd-reveal">
          <PlanCard
            badge="01"
            title="Landing Page"
            price="60,000"
            detail="商品やサービスの魅力を、1ページで分かりやすく伝えるためのプランです。"
            bestFor="まずは1ページでしっかり伝えたい方におすすめです。"
            includes={[
              "オリジナルデザイン",
              "スマホ対応",
              "写真の軽い補正（明るさ・色）",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
          />
          <PlanCard
            badge="02"
            title="Small Website"
            price="120,000"
            detail="トップページと数ページで、お店やサービスをきちんと伝えたい方向けのプランです。"
            bestFor="店舗・サロン・小規模事業のサイトにおすすめです。"
            includes={[
              "トップ + 下層2〜4ページ",
              "スマホ対応",
              "写真の軽い補正（明るさ・色）",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
            featured
          />
          <PlanCard
            badge="03"
            title="Impression Site"
            price="240,000"
            detail="写真・色・余白まで整えながら、全体の印象と信頼感が伝わるサイトを丁寧につくるプランです。"
            bestFor="見え方にこだわりたいサービスや店舗におすすめです。"
            includes={[
              "印象設計",
              "複数ページ対応",
              "スマホ対応",
              "写真の軽い補正（明るさ・色）",
              "公開初期設定 / 接続サポート",
            ]}
          />
        </div>

        {/* ── Maintenance ── */}
        <SectionTitle main>運用・保守</SectionTitle>
        <div className="pd-reveal">
          <MaintenanceCard />
        </div>

        {/* ── Flow ── */}
        <SectionTitle main>制作の流れ</SectionTitle>
        <div className="pd-reveal">
          <FlowTimeline />
        </div>

        {/* ── Payment ── */}
        <SectionTitle main>お支払いについて</SectionTitle>
        <div className="pd-reveal">
          <TextBlock>
            <li>着手金：50%（制作開始前）</li>
            <li>残額：公開前にお支払いをお願いしています。</li>
            <li>事前にご案内した総額から、大きく変わることはありません。</li>
          </TextBlock>
        </div>

        {/* ── Notes ── */}
        <SectionTitle main>ご確認いただきたいこと</SectionTitle>
        <div className="pd-reveal">
          <TextBlock>
            <li>納期の目安は 2〜5週間です。</li>
            <li>
              品質を保つため、
              <span className="pd-text-accent">
                短納期のみを優先するご依頼には合わない場合があります。
              </span>
            </li>
            <li>
              ドメイン代・サーバー代は実費ですが、
              <span className="pd-text-accent">
                取得や接続のサポートは料金内で対応しています。
              </span>
            </li>
            <li>
              完成後のページ追加も対応可能です。
              <span className="pd-text-muted">（追加料金は事前にご案内します）</span>
            </li>
          </TextBlock>
        </div>

        {/* ── Visual ── */}
        <SectionTitle>写真・ビジュアルについて</SectionTitle>
        <div className="pd-reveal">
          <TextBlock>
            <li>素材が不足している場合は、雰囲気に合う画像選定も行います。</li>

            {/* ✅ 線引き（これが超大事） */}
            <li>
              写真がある場合は、
              <span className="pd-text-accent">明るさ・色の軽い補正は料金内</span>
              です。
              <span className="pd-text-muted">（個別補正はオプション）</span>
            </li>

            <li>参考URLやイメージを共有いただくと、方向性を合わせやすくなります。</li>
            <li className="pd-note">※ 参考サイトは方向性確認のために使用し、模倣は行いません。</li>
          </TextBlock>
        </div>

        {/* ── SEO ── */}
        <SectionTitle>公開前の初期設定について</SectionTitle>
        <div className="pd-reveal">
          <TextBlock>
            <li>タイトル・説明文・OGP画像・favicon などの初期設定は標準対応です。</li>
            <li>画像軽量化・表示速度の最適化も含まれます。</li>
            <li>公開に必要な初期設定まで、分かりやすくサポートします。</li>
          </TextBlock>
        </div>

        {/* ── Options ── */}
        <SectionTitle>追加オプション</SectionTitle>
        <div className="pd-reveal">
          <OptionsGrid />
        </div>

        {/* ── CTA ── */}
        <div className="pd-cta-area pd-reveal">
          <div className="pd-cta-ornament" aria-hidden="true">
            <span />
            <span className="pd-cta-ornament-dot" />
            <span />
          </div>
          <p className="pd-thanks">
            ここまでご覧いただきありがとうございます。
            <br />
            まだ固まっていない段階でも、どうぞ気軽にご相談ください。
          </p>
          <Link to="/contact" className="pd-cta">
            <span>CONTACT</span>
            <svg className="pd-cta-arrow" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M1.5 6.5H11.5M7 2L11.5 6.5L7 11"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ─────────────────────────── */

function SectionTitle({ children, main }) {
  return (
    <h2 className={`pd-section-title ${main ? "is-main" : ""}`}>
      <span className="pd-section-rule" aria-hidden="true" />
      {children}
    </h2>
  );
}

function PlanCard({ badge, title, price, detail, bestFor, includes = [], featured }) {
  return (
    <div className={`pd-plan-card ${featured ? "is-featured" : ""}`}>
      {featured && <span className="pd-plan-popular">POPULAR</span>}
      <p className="pd-plan-num">PLAN {badge}</p>
      <h3 className="pd-plan-name">{title}</h3>

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
    </div>
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
    <div className="pd-maintenance">
      <div className="pd-maintenance-header">
        <div className="pd-maintenance-info">
          <p className="pd-maintenance-num">PLAN 04</p>
          <h3 className="pd-maintenance-name">Maintenance / Subscription</h3>
          <p className="pd-maintenance-detail">
            文言や写真の差し替え、最新情報の追加など、
            <strong>サイトの雰囲気を保ちながら整えるための運用プラン</strong>です。
          </p>
        </div>

        <div className="pd-maintenance-price-wrap">
          <p className="pd-maintenance-price-label">月額（税込）</p>
          <p className="pd-maintenance-price">
            <span className="pd-maintenance-currency">¥</span>9,800
            <span className="pd-maintenance-unit">&thinsp;/ 月</span>
          </p>
        </div>
      </div>

      <div className="pd-maintenance-cols">
        <div>
          <h4 className="pd-maintenance-col-title">月額に含まれる内容</h4>
          <ul className="pd-maintenance-list">
            {included.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="pd-maintenance-col-title pd-maintenance-col-title--extra">
            別途ご相談となる内容
          </h4>
          <ul className="pd-maintenance-list pd-maintenance-list--extra">
            {extra.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FlowTimeline() {
  const steps = [
    { n: "01", title: "ヒアリング", sub: "目的・雰囲気・方向性の整理" },
    { n: "02", title: "構成と進め方の共有", sub: null },
    { n: "03", title: "着手金 50% → デザイン開始", sub: null },
    { n: "04", title: "初稿提出 → 微調整", sub: null },
    { n: "05", title: "実装 → 最終確認", sub: null },
    { n: "06", title: "残額お支払い → 公開", sub: null },
  ];

  return (
    <div className="pd-flow">
      {steps.map((s, i) => (
        <div key={i} className="pd-flow-item">
          <div className="pd-flow-marker">
            <div className="pd-flow-dot">{s.n}</div>
            {i < steps.length - 1 && <div className="pd-flow-line" aria-hidden="true" />}
          </div>
          <div className="pd-flow-body">
            <p className="pd-flow-title">{s.title}</p>
            {s.sub && <p className="pd-flow-sub">{s.sub}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function OptionsGrid() {
  const options = [
    { name: "お知らせ更新機能の導入", price: "¥30,000〜" },

    // ✅ 変更：専門語をやめる
    { name: "写真の個別補正（1枚）", price: "¥10,000〜" },

    { name: "追加ページ", price: "内容に応じてお見積もり" },
    { name: "ロゴ / 印刷物 / 撮影", price: "内容に応じてご相談" },
  ];

  return (
    <div className="pd-options">
      {options.map((o, i) => (
        <div key={i} className="pd-option">
          <p className="pd-option-name">{o.name}</p>
          <p className="pd-option-price">{o.price}</p>
        </div>
      ))}
    </div>
  );
}

function TextBlock({ children }) {
  return <ul className="pd-textblock">{children}</ul>;
}