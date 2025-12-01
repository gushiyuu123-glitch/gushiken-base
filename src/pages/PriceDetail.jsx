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

        {/* 説明 */}
        <p
          className="
            text-white/70 text-[1rem] leading-[1.9]
            mb-16 max-w-3xl pl-4
          "
        >
          世界観・写真の質・ページ構成によって、最適なご提案をしています。
          初回ヒアリング後に「世界観ボード」を作成し、方向性を共有したうえでデザイン制作へ進みます。
        </p>

        {/* ============= プランと料金 ============= */}
        <SectionTitle>プランと料金</SectionTitle>

        <div className="grid gap-10 md:gap-12 md:grid-cols-3 mb-24">
          <PlanCard
            badge="PLAN 01"
            title="Landing Page"
            price="¥80,000〜"
            summary="1ページ構成のランディングページ。"
            detail="商品紹介・キャンペーン案内など、1ページで魅力を伝える構成です。"
            bestFor="まずはサイトを持ってみたい方に。"
          />

          <PlanCard
            badge="PLAN 02"
            title="Small Website"
            price="¥150,000〜"
            summary="3〜5ページの小規模サイト。"
            detail="店舗・サロン・個人サイトなど、必要な情報を丁寧に整理して設計します。"
            bestFor="メニュー・アクセスなどをしっかり載せたい方に。"
          />

          <PlanCard
            badge="PLAN 03"
            title="Brand Site"
            price="¥250,000〜"
            summary="世界観特化のブランドサイト。"
            detail="光・余白・写真を活かし、“空気”をデザインします。"
            bestFor="ブランドイメージを深く伝えたい方に。"
          />
        </div>

        {/* ============= 追加オプション ============= */}
        <SectionTitle>追加オプション</SectionTitle>
        <DetailBlock>
          <li>microCMS（記事投稿機能）：¥30,000〜</li>
          <li>AI画像生成：相談可</li>
          <li>独自ドメイン / サーバー設定：¥20,000〜</li>
        </DetailBlock>

        {/* ============= SEO・SNS ============= */}
        <SectionTitle>SEO・SNS について</SectionTitle>
        <DetailBlock>
          <li>
            タイトル設定・メタタグ・OGP・構造化など、
            <strong> 基本的なSEO対策はすべて制作料金に含まれています。</strong>
          </li>
          <li>デザイン性とSEOを両立し、検索に強い構造で仕上げます。</li>
          <li>Googleに正しく評価されるための設定もこちらで行います。</li>
       <li>
  SNS（特に Instagram）から訪れた方がお問い合わせへ進みやすいよう、
  <strong>サイト側の導線設計を最適化</strong>することも可能です。
  （※SNS運用代行は含まれません）
</li>

        </DetailBlock>

        {/* ============= イメージ共有 ============= */}
        <SectionTitle>イメージ共有について</SectionTitle>
        <DetailBlock>
          <li>
            デザインの方向性は、ポートフォリオ内で
            「この雰囲気が好き」という作品の
            <strong> タイトルをお知らせいただくだけ</strong>でも十分です。
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
          <li>
            言語化が難しい場合も、こちらで世界観を丁寧に整理し形に落とし込みます。
          </li>
        </DetailBlock>

        {/* ============= 制作の流れ ============= */}
        <SectionTitle>制作の流れ</SectionTitle>
        <DetailBlock>
          <li>① ヒアリング（目的・世界観・競合イメージ）</li>
          <li>② 世界観ボードの提示</li>
          <li>③ 着手金 50% → 制作開始</li>
          <li>④ デザイン制作 → 修正</li>
          <li>⑤ コーディング・動作確認</li>
          <li>⑥ 残額お支払い → 公開</li>
        </DetailBlock>

        {/* ============= お支払い ============= */}
        <SectionTitle>お支払いについて</SectionTitle>
        <DetailBlock>
          <li>
            ご依頼確定後、<strong>着手金 50%</strong> をお支払いいただきます。
          </li>
          <li>確認後、構成・デザイン制作を開始します。</li>
          <li>残金 50% は公開前にお支払いいただきます。</li>
        </DetailBlock>

        {/* ============= キャンセル ============= */}
        <SectionTitle>キャンセルについて</SectionTitle>
        <DetailBlock>
          <li>
            デザイン制作の性質上、
            <strong>着手金（50%）は返金不可</strong> です。
          </li>
          <li>制作途中のキャンセルの場合、残額は発生しません。</li>
          <li>
            キャンセルされた制作物の
            <strong> 著作権・利用権は当方に帰属</strong> します。
          </li>
        </DetailBlock>

        {/* ============= 写真素材 ============= */}
        <SectionTitle>写真素材について</SectionTitle>
        <DetailBlock>
          <li>仕上がりの美しさは、写真の質に大きく影響します。</li>
          <li>
            <strong>明るく鮮明な写真</strong> をご提供ください。
          </li>
          <li>必要に応じて AI補正・撮影アドバイスも可能です。</li>
        </DetailBlock>

        {/* ============= 更新 ============= */}
        <SectionTitle>運用・更新について</SectionTitle>
        <DetailBlock>
          <li>
            公開後の更新は、必要なタイミングでご依頼いただく
            <strong>単発対応</strong> です。
          </li>
          <li>内容に応じてお見積りをご提示します。</li>
        </DetailBlock>

        {/* ============= NG業務 ============= */}
        <SectionTitle>お受けしていない業務</SectionTitle>
        <DetailBlock>
          <li>SNS運用代行（毎日投稿）</li>
          <li>広告運用（Instagram / Google 広告）</li>
          <li>毎日更新が前提の継続タスク</li>
          <li>ブログ記事量産・SEO記事執筆</li>
        </DetailBlock>

        {/* ============= 注意事項 ============= */}
        <SectionTitle>注意事項</SectionTitle>
        <DetailBlock>
          <li>掲載金額はすべて税込・目安です。</li>
          <li>ご要望により料金が変動する場合があります。</li>
          <li>大幅な構成変更は追加料金となる場合があります。</li>
          <li>写真素材の提出が遅れると納期も延びます。</li>
          <li>
            納期目安：<strong>3〜6週間</strong>
          </li>
        </DetailBlock>

        {/* CTA */}
        <div className="text-center mt-12">
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
      </div>
    </section>
  );
}

/* ================================
   共通パーツ（距離調整版）
================================ */

function SectionTitle({ children }) {
  return (
    <h2
      className="
        text-[1.05rem]
        tracking-[0.18em]
        text-white/80
        pl-4
        mt-16   /* セクション始まりのトップ距離 */
        mb-2    /* タイトルと本文の距離を近く */
      "
    >
      {children}
    </h2>
  );
}

function PlanCard({ badge, title, price, summary, detail, bestFor }) {
  return (
    <div
      className="
        bg-white/5 border border-white/10 rounded-xl
        p-6 md:p-7 shadow-[0_0_24px_rgba(0,0,0,0.5)]
        flex flex-col gap-4
        transition-all duration-300
        hover:-translate-y-1.5 hover:border-[rgba(217,185,138,0.55)]
        hover:shadow-[0_0_32px_rgba(217,185,138,0.24)]
      "
    >
      <p className="text-[0.75rem] tracking-[0.22em] text-gold/80 mb-1">{badge}</p>
      <h3 className="text-[1.15rem] tracking-[0.08em] text-white">{title}</h3>
      <p className="text-[1.2rem] tracking-[0.03em] text-gold mb-1">{price}</p>
      <p className="text-[0.9rem] text-white/80 leading-relaxed">{summary}</p>
      <p className="text-[0.85rem] text-white/60 leading-relaxed">{detail}</p>
      <p className="text-[0.8rem] text-white/50 leading-relaxed mt-1">{bestFor}</p>
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
