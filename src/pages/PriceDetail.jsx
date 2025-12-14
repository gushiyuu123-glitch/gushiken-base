// src/pages/PriceDetail.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function PriceDetail() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.classList.add("show");
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        price-section
        bg-[#0b0b0b] min-h-screen text-white
        opacity-0 translate-y-8
        transition-all duration-[1100ms] ease-[cubic-bezier(.25,.46,.45,.94)]
        py-28 md:py-32 px-6
      "
    >
      <div className="max-w-5xl mx-auto relative">

        {/* 左ゴールドライン */}
        <div
          className="
            hidden md:block
            absolute left-0 top-10
            w-px h-[86%]
            bg-[rgba(217,185,138,0.28)]
          "
        />

        {/* TITLE */}
        <h1
          className="
            text-[2.6rem]
            tracking-[0.22em]
            font-light
            mb-8
            pl-4
          "
        >
          PRICE — Detail
        </h1>

        {/* 導入文（安心版） */}
      <p
  className="
    text-white/70 text-[1rem] leading-[1.9]
    mb-12 md:mb-16 max-w-3xl pl-4
    md:text-[1rem] text-[0.95rem]
  "
>

          世界観・写真の質・ページ構成に合わせて、最適な形をご提案しています。<br />
          初回ヒアリング後は「世界観ボード」を作成し、
          方向性を共有したうえでデザイン制作へ進みます。<br />
          <strong className="text-white/85">
            制作前に内容と金額を確定し、途中で費用が変わることはありません。
          </strong>
        </p>

        {/* プラン */}
        <SectionTitle>プランと料金</SectionTitle>

        <div className="grid gap-10 md:gap-12 md:grid-cols-3 mb-24">
          <PlanCard
            badge="PLAN 01"
            title="Landing Page"
            price="¥60,000〜"
            summary="1ページ構成のランディングページ。"
            detail="商品紹介・キャンペーン案内など、1ページで魅力を伝える構成です。"
            bestFor="まずはWebサイトを持ってみたい方に。"
          />

          <PlanCard
            badge="PLAN 02"
            title="Small Website"
            price="¥120,000〜"
            summary="3〜5ページ構成のWebサイト。"
            detail="店舗・サロン・個人サイトなど、必要な情報を丁寧に整理して設計します。"
            bestFor="サービス内容やアクセス情報をしっかり伝えたい方に。"
          />

          <PlanCard
            badge="PLAN 03"
            title="Brand Site（6ページ以上）"
            price="¥180,000〜"
            summary="世界観重視のブランドサイト。"
            detail="光・余白・写真を活かし、空気感まで含めてデザインします。"
            bestFor="ブランドイメージを深く伝えたい方に。"
          />
        </div>

        {/* 追加オプション */}
        <SectionTitle>追加オプション</SectionTitle>
        <DetailBlock>
          <li>microCMS（記事投稿機能）：¥30,000〜</li>
          <li>AI画像生成・補正：内容に応じてご相談</li>
          <li>独自ドメイン / サーバー設定：¥20,000〜</li>
        </DetailBlock>

        {/* SEO */}
        <SectionTitle>SEO・SNS について</SectionTitle>
        <DetailBlock>
          <li>
            タイトル・メタタグ・OGP・構造化など、
            <strong> 基本的なSEO初期設定はすべて制作料金に含まれています。</strong>
          </li>
          <li>検索に正しく評価される設計を前提に制作します。</li>
          <li>SNSからの導線設計も可能です（運用代行は含みません）。</li>
        </DetailBlock>

        {/* イメージ共有 */}
        <SectionTitle>イメージ共有について</SectionTitle>
        <DetailBlock>
          <li>
            「この作品の雰囲気が好き」と
            <strong> ポートフォリオの作品名をお伝えいただくだけ</strong>
            でも問題ありません。
          </li>
          <li>
            ポートフォリオ：
            <a
              href="https://gushiken-base.vercel.app/works"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline ml-1"
            >
              GUSHIKEN BASE — Works Collection
            </a>
          </li>
          <li>言語化が難しい場合はこちらで整理します。</li>
        </DetailBlock>

        {/* 制作の流れ */}
        <SectionTitle>制作の流れ</SectionTitle>
        <DetailBlock>
          <li>① ヒアリング（目的・世界観・参考イメージ）</li>
          <li>② 世界観ボードの共有</li>
          <li>③ 着手金 50% → 制作開始</li>
          <li>④ デザイン初稿提出</li>
          <li>⑤ 修正・コーディング・最終確認</li>
          <li>⑥ 残額お支払い → 公開</li>
        </DetailBlock>

        {/* 支払い */}
        <SectionTitle>お支払いについて</SectionTitle>
        <DetailBlock>
          <li>
            ご依頼確定後、<strong>着手金 50%</strong> をお支払いいただきます。
          </li>
          <li>残額は公開前にお支払いください。</li>
        </DetailBlock>

        {/* キャンセル */}
        <SectionTitle>キャンセルについて</SectionTitle>
        <DetailBlock>
          <li>
            着手後のキャンセルについては、
            <strong> 着手金の返金はできません。</strong>
          </li>
          <li>
            初稿提出後は制作工程が進行しているため、
            <strong> 全額のご請求</strong> となります。
          </li>
        </DetailBlock>

        {/* 注意 */}
        <SectionTitle>注意事項</SectionTitle>
        <DetailBlock>
          <li>記載金額はすべて税込・目安です。</li>
          <li>制作前に必ず総額を確定します。</li>
          <li>納期目安：<strong>3〜6週間</strong></li>
        </DetailBlock>

        {/* CTA */}
  <div className="text-center mt-16 md:mt-12">

          <Link
            to="/contact"
            className="
              inline-block px-12 py-3 rounded-full
              border border-[rgba(217,185,138,0.85)]
              text-[rgba(217,185,138,0.94)]
              bg-[rgba(255,255,255,0.02)]
              tracking-[0.2em] uppercase
              transition-all duration-300
              shadow-[0_0_18px_rgba(217,185,138,0.06)]
              hover:bg-[rgba(217,185,138,0.92)]
              hover:text-black
              hover:border-[rgba(217,185,138,1)]
              hover:-translate-y-[2px]
              hover:shadow-[0_12px_24px_rgba(217,185,138,0.30)]
            "
          >
            CONTACT
          </Link>
        </div>
    {/* ▼▼ ここが移設したボタン（超重要） ▼▼ */}
<div className="text-center mt-8 md:mt-10">
  <a
    href="https://office.gushikendesign.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block
      text-[0.8rem] md:text-sm
      tracking-wider
      text-[#d9c8a6]/45 md:text-[#d9c8a6]/55
      transition-colors duration-300
      hover:text-[#d9c8a6]
    "
  >
    事務所・企業向けのシンプルWebプランをご検討の方はこちら →
  </a>
</div>

      </div>
    </section>
  );
}

/* ============================= */

function SectionTitle({ children }) {
  return (
    <h2
      className="
        text-[1rem] md:text-[1.05rem]
        tracking-[0.22em] md:tracking-[0.18em]
        text-white/85
        pl-4
        mt-14 md:mt-16
        mb-3
      "
    >
      {children}
    </h2>
  );
}


function PlanCard({ badge, title, price, summary, detail, bestFor }) {
  return (
    <div className="
      bg-white/5 border border-white/10 rounded-xl
      p-6 md:p-7 shadow-[0_0_24px_rgba(0,0,0,0.5)]
      flex flex-col gap-4
      transition-all duration-300
      hover:-translate-y-1.5 hover:border-[rgba(217,185,138,0.55)]
      hover:shadow-[0_0_32px_rgba(217,185,138,0.24)]
    ">
      <p className="text-[0.75rem] tracking-[0.22em] text-gold/80">{badge}</p>
      <h3 className="text-[1.15rem] tracking-[0.08em]">{title}</h3>
      <p className="text-[1.2rem] text-gold">{price}</p>
      <p className="text-[0.9rem] text-white/80">{summary}</p>
      <p className="text-[0.85rem] text-white/60">{detail}</p>
      <p className="text-[0.8rem] text-white/50">{bestFor}</p>
    </div>
  );
}

function DetailBlock({ children }) {
  return (
    <div className="my-4 md:my-6">
      <div className="w-full h-px bg-[rgba(215,195,154,0.28)] mb-3" />
      <ul className="text-white/60 text-[0.95rem] leading-[1.85] space-y-1 pl-4">
        {children}
      </ul>
    </div>
  );
}
