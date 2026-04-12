import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./priceDetail.css";

export default function PriceDetail() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (el) el.classList.add("aq-show");
  }, []);

  return (
    <section
      ref={rootRef}
      className="aq-fade bg-[#0b0b0b] min-h-screen text-white py-24 md:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Left Line */}
        <div className="hidden md:block absolute left-0 top-10 w-px h-[86%] bg-white/10" />

        {/* Title */}
        <h1 className="pd-title">PRICE DETAIL</h1>
        <p className="pd-sub">― 料金の詳細と進め方 ―</p>

        {/* Lead */}
        <p className="pd-lead">
          Webサイトは、
          <span className="text-white/90">魅力を分かりやすく伝えるための窓口</span>
          です。
          <br />
          ご相談前に、目的や雰囲気を伺いながら、
          <span className="text-white/90">
            どんな見せ方が合うかを一緒に整理
          </span>
          していきます。
          <br />
          <br />
          料金は事前に総額をご案内し、
          <span className="text-white/90">
            途中で大きく変わることはありません。
          </span>
        </p>

        {/* ========= PLANS ========= */}
        <SectionTitle main>プランと料金</SectionTitle>

        <div className="grid gap-10 md:grid-cols-3 mb-24">
          <PlanCard
            badge="PLAN 01"
            title="Landing Page"
            price="¥60,000〜"
            detail="商品やサービスの魅力を、1ページで分かりやすく伝えるためのプランです。"
            bestFor="まずは1ページでしっかり伝えたい方向け。"
            includes={[
              "オリジナルデザイン",
              "スマホ対応",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
          />

          <PlanCard
            badge="PLAN 02"
            title="Small Website"
            price="¥120,000〜"
            detail="トップページと数ページで、お店やサービスをきちんと伝えたい方向けのプランです。"
            bestFor="店舗・サロン・小規模事業におすすめ。"
            includes={[
              "トップ + 下層2〜4ページ",
              "スマホ対応",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
          />

          <PlanCard
            badge="PLAN 03"
            title="Brand Site"
            price="¥240,000〜"
            detail="写真・色・余白まで整えながら、ブランド全体の印象を丁寧につくるプランです。"
            bestFor="世界観を大切にしたいブランド向け。"
            includes={[
              "世界観設計",
              "複数ページ対応",
              "スマホ対応",
              "公開初期設定 / 接続サポート",
            ]}
          />
        </div>

        {/* ====== PLAN 04 ====== */}
        <SectionTitle main>運用・保守</SectionTitle>

        <div className="pd-plan pd-plan-large mb-16">
          <p className="pd-plan-badge">PLAN 04</p>
          <h3 className="pd-plan-title">Maintenance / Subscription</h3>
          <p className="pd-plan-price">¥9,800 / 月</p>

          <p className="pd-plan-detail">
            文言や写真の差し替え、最新情報の追加など、
            <strong>サイトの雰囲気を保ちながら更新</strong>
            を行うプランです。
          </p>

          <div className="pd-detail-columns">
            <div>
              <h4 className="pd-detail-title mt-4">月額に含まれる内容</h4>
              <ul className="pd-detail-list">
                <li>文言の調整・メニューの差し替え</li>
                <li>写真の軽い調整・差し替え</li>
                <li>お知らせ・イベント情報の更新</li>
                <li>営業時間 / Google Map の更新</li>
                <li>バナーや見出しの軽微な調整</li>
              </ul>
            </div>

            <div>
              <h4 className="pd-detail-title mt-4">月額に含まれない内容</h4>
              <ul className="pd-detail-list">
                <li>新ページ / 新セクションの追加</li>
                <li>大きなデザイン変更</li>
                <li>写真撮影</li>
                <li>長文のコピー制作</li>
                <li>大規模な仕様変更</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========= Flow ========= */}
        <SectionTitle main>制作の流れ</SectionTitle>
        <TextBlock>
          <li>① ヒアリング（目的・雰囲気・方向性の整理）</li>
          <li>② 構成と進め方の共有</li>
          <li>③ 着手金 50% → デザイン開始</li>
          <li>④ 初稿提出 → 微調整</li>
          <li>⑤ 実装 → 最終確認</li>
          <li>⑥ 残額お支払い → 公開</li>
        </TextBlock>

        {/* ========= Payment ========= */}
        <SectionTitle main>お支払いについて</SectionTitle>
        <TextBlock>
          <li>着手金：50%（制作開始前）</li>
          <li>残額：公開前にお支払いをお願いしています。</li>
          <li>事前にご案内した総額から、大きく変わることはありません。</li>
        </TextBlock>

        {/* ========= Notes ========= */}
        <SectionTitle main>ご確認いただきたいこと</SectionTitle>
        <TextBlock>
          <li>納期の目安は 2〜5週間です。</li>
          <li>短納期・最低価格重視のご依頼には対応していません。</li>
          <li>
            ドメイン代・サーバー代は実費ですが、
            <span className="text-white/85">
              取得や接続のサポートは料金内で対応しています。
            </span>
          </li>
          <li>
            完成後のページ追加も対応可能です。
            <span className="text-white/85">
              （追加料金は事前にご案内します）
            </span>
          </li>
        </TextBlock>

        {/* ========= Visual ========= */}
        <SectionTitle>写真・ビジュアルについて</SectionTitle>
        <TextBlock>
          <li>素材が不足している場合は、雰囲気に合う画像選定も行います。</li>
          <li>参考URLやイメージを共有いただくと、方向性を合わせやすくなります。</li>
          <li className="text-white/75 text-[0.85rem] mt-2">
            ※ 参考サイトは方向性確認のために使用し、模倣は行いません。
          </li>
        </TextBlock>

        {/* ========= SEO ========= */}
        <SectionTitle>SEO・初期設定</SectionTitle>
        <TextBlock>
          <li>タイトル・説明文・OGP画像の設定は標準対応です。</li>
          <li>画像軽量化・表示速度の最適化も含まれます。</li>
          <li>公開に必要な初期設定まで、分かりやすくサポートします。</li>
        </TextBlock>

        {/* ========= Option ========= */}
        <SectionTitle>追加オプション</SectionTitle>
        <TextBlock>
          <li>microCMS 導入：¥30,000〜</li>
          <li>高度レタッチ：¥10,000〜</li>
          <li>追加ページ：内容に応じてお見積もり</li>
          <li>ロゴ / 印刷物 / 撮影まわり：内容に応じてご相談</li>
        </TextBlock>

        {/* CTA */}
        <p className="pd-thanks">
          ここまでご覧いただきありがとうございます。
          <br />
          まだ固まっていない段階でも、どうぞ気軽にご相談ください。
        </p>

        <div className="text-center">
          <Link to="/contact" className="pd-cta">
            CONTACT
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Price Detail",
              url: "https://gushikendesign.com/price",
              description:
                "LP制作・小規模サイト・ブランドサイト・運用プランの詳細。目的や雰囲気を伺いながら、最適な見せ方を整理して制作します。",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://gushikendesign.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Price",
                    item: "https://gushikendesign.com/price",
                  },
                ],
              },
              mainEntity: [
                {
                  "@type": "Service",
                  name: "Landing Page",
                  price: "60000 JPY",
                  description:
                    "1ページで魅力を分かりやすく伝えるLPプラン。オリジナルデザイン・スマホ対応・公開初期設定まで含みます。",
                },
                {
                  "@type": "Service",
                  name: "Small Website",
                  price: "120000 JPY",
                  description:
                    "トップ＋数ページの小規模サイト。読みやすく安心感のある構成を丁寧に整えます。",
                },
                {
                  "@type": "Service",
                  name: "Brand Site",
                  price: "240000 JPY",
                  description:
                    "写真・色・余白まで整えながら、ブランド全体の印象を丁寧につくるプランです。",
                },
                {
                  "@type": "Service",
                  name: "Maintenance / Subscription",
                  price: "9800 JPY (Monthly)",
                  description:
                    "文言・写真の差し替えや最新情報の更新などを行う運用プラン。サイトの雰囲気を保ちながら整えます。",
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}

/* ============================= */
/* Components */
/* ============================= */

function SectionTitle({ children, main }) {
  return (
    <h2 className={`pd-section-title ${main ? "is-main" : ""}`}>
      {children}
    </h2>
  );
}

function PlanCard({ badge, title, price, detail, bestFor, includes = [] }) {
  return (
    <div className="pd-plan">
      <p className="pd-plan-badge">{badge}</p>
      <h3 className="pd-plan-title">{title}</h3>
      <p className="pd-plan-price">{price}</p>
      <p className="pd-plan-detail">{detail}</p>
      <p className="pd-plan-best">{bestFor}</p>

      {includes.length > 0 && (
        <ul className="pd-plan-includes pd-plan-includes-list">
          {includes.map((item) => (
            <li key={item} className="pd-plan-includes-item">
              <span className="pd-plan-includes-dot" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TextBlock({ children }) {
  return <ul className="pd-textblock">{children}</ul>;
}