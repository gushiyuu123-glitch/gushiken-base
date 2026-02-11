// src/pages/PriceDetail.jsx
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
        <div className="hidden md:block absolute left-0 top-10 w-px h-[86%] bg-[rgba(217,185,138,0.25)]" />

        {/* Title */}
        <h1 className="pd-title">PRICE — Detail</h1>
        <p className="pd-sub">― 料金の詳細と制作の進め方 ―</p>

        {/* Lead */}
        <p className="pd-lead">
          Webサイトは、お店やブランドの「最初の印象」をつくる、とても大切な場所です。
          <br />
          ヒアリングでは、目的や雰囲気、こだわりをゆっくり伺いながら、
          <br />
          <span className="text-white/90">
            一緒に“どんな見せ方が最適か”を整理していきます。
          </span>
          <br />
          <br />
          ご依頼前に総額を必ずご提示し、途中で金額が変わることはありません。
        </p>

        {/* ========= PLANS ========= */}
        <SectionTitle main>プランと料金</SectionTitle>

        <div className="grid gap-10 md:grid-cols-3 mb-24">

          {/* PLAN 01 */}
          <PlanCard
            badge="PLAN 01"
            title="Landing Page"
            price="¥60,000〜"
            detail="1ページで魅力をわかりやすくまとめるLP。写真・余白・流れを整え、落ち着きのある高品質なページに仕上げます。"
            bestFor="まずはしっかり魅せたい方向け。"
          />

          {/* PLAN 02 */}
          <PlanCard
            badge="PLAN 02"
            title="Small Website"
            price="¥120,000〜"
            detail="トップ＋数ページ構成の小規模サイト。読みやすさと導線を整え、やさしい安心感のある公式サイトを制作します。"
            bestFor="店舗・サロン・小規模事業に最適。"
          />

          {/* PLAN 03 */}
          <PlanCard
            badge="PLAN 03"
            title="Brand Site"
            price="¥240,000〜"
            detail="写真・色・文字の表情まで統一し、ブランドの世界観を“ひとつの物語”として仕上げるプランです。"
            bestFor="世界観を大切にしたいブランド向け。"
          />

        </div>

{/* ====== PLAN 04 ====== */}
<SectionTitle main>運用・保守（Subscription）</SectionTitle>

<div className="pd-plan pd-plan-large mb-16">
  <p className="pd-plan-badge">PLAN 04</p>
  <h3 className="pd-plan-title">Maintenance / Subscription</h3>
  <p className="pd-plan-price">¥9,800 / 月</p>

  <p className="pd-plan-detail">
    日々の更新を“世界観を崩さず”やさしく整えていく運用プランです。
    文言・写真の差し替え、NEW情報の追加など、細かな更新をまとめてお任せいただけます。
  </p>

  {/* ▼ ２カラム構造 */}
  <div className="pd-detail-columns">

    {/* 左：含まれる内容 */}
    <div>
      <h4 className="pd-detail-title mt-4">【月額に含まれる内容】</h4>
      <ul className="pd-detail-list">
        <li>文言の調整・メニューの差し替え</li>
        <li>写真の軽いレタッチ・差し替え</li>
        <li>NEW情報・イベントの更新</li>
        <li>営業時間 / Google Map の更新</li>
        <li>バナーや見出しの軽い色調整</li>
      </ul>
    </div>

    {/* 右：含まれない内容 */}
    <div>
      <h4 className="pd-detail-title mt-4">【月額に含まれない内容】</h4>
      <ul className="pd-detail-list">
        <li>新ページ / 新セクションの追加</li>
        <li>大きなデザイン変更</li>
        <li>写真撮影</li>
        <li>長めのコピー制作</li>
        <li>大規模な仕様変更</li>
      </ul>
    </div>

  </div>
</div>

        {/* ========= Flow ========= */}
        <SectionTitle main>制作の流れ</SectionTitle>
        <TextBlock>
          <li>① ヒアリング（目的・雰囲気・強みを共有）</li>
          <li>② 世界観ボードの作成</li>
          <li>③ 着手金 50% → デザイン開始</li>
          <li>④ 初稿提出 → 微調整</li>
          <li>⑤ 実装 → 最終確認</li>
          <li>⑥ 残額お支払い → 公開</li>
        </TextBlock>

        {/* ========= Payment ========= */}
        <SectionTitle main>お支払いについて</SectionTitle>
        <TextBlock>
          <li>着手金：50%（制作開始前）</li>
          <li>残額：公開前にお支払いください。</li>
        </TextBlock>

        {/* ========= Notes ========= */}
        <SectionTitle main>注意事項</SectionTitle>
        <TextBlock>
          <li>制作前に総額を確定します。途中で金額が変わることはありません。</li>
          <li>納期目安：3〜6週間。</li>
          <li>短納期・最低価格重視のご依頼には対応していません。</li>
          <li>
            完成後のページ追加も柔軟に対応可能です。
            <span className="text-white/85">（追加料金は事前にご案内します）</span>
          </li>
        </TextBlock>

        {/* ========= Visual ========= */}
        <SectionTitle>写真・ビジュアルについて</SectionTitle>
        <TextBlock>
          <li>素材が不足している場合はこちらで雰囲気に合う画像を補完します。</li>
          <li>参考URLやイメージを共有いただくと、方向性がより明確になります。</li>
          <li className="text-white/75 text-[0.85rem] mt-2">
            ※ 参考サイトは方向性理解のみに使用し、模倣は行いません。
          </li>
        </TextBlock>

        {/* ========= SEO ========= */}
        <SectionTitle>SEO・初期設定</SectionTitle>
        <TextBlock>
          <li>タイトル・説明文・OGP画像の設定は標準対応です。</li>
          <li>画像軽量化・表示速度の最適化も含まれます。</li>
        </TextBlock>

        {/* ========= Option ========= */}
        <SectionTitle>追加オプション</SectionTitle>
        <TextBlock>
          <li>microCMS 導入：¥30,000〜</li>
          <li>ドメイン / サーバー設定代行：¥20,000〜</li>
          <li>高度レタッチ：¥10,000〜</li>
          <li>追加ページ：内容によりお見積もり</li>
        </TextBlock>

        {/* CTA */}
        <p className="pd-thanks">
          ここまでご覧いただき、ありがとうございます。<br />
          「少し気になっただけ」という段階でも、どうぞ気軽にご相談ください。
        </p>

        <div className="text-center">
          <Link to="/contact" className="pd-cta">
            CONTACT
          </Link>
        </div>
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

function PlanCard({ badge, title, price, detail, bestFor }) {
  return (
    <div className="pd-plan">
      <p className="pd-plan-badge">{badge}</p>
      <h3 className="pd-plan-title">{title}</h3>
      <p className="pd-plan-price">{price}</p>
      <p className="pd-plan-detail">{detail}</p>
      <p className="pd-plan-best">{bestFor}</p>
    </div>
  );
}

function TextBlock({ children }) {
  return <ul className="pd-textblock">{children}</ul>;
}
