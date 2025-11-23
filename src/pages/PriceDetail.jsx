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
        transition-all duration-[1100ms]
        py-28 px-6
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* ====================== */}
        {/* TITLE */}
        {/* ====================== */}
        <h1 className="text-[2.6rem] tracking-[0.22em] font-light mb-8">
          PRICE — Detail
        </h1>

        <p className="text-white/70 text-[1rem] leading-[1.9] mb-16 max-w-3xl">
          制作料金の目安です。ページ数・写真素材の質、世界観演出の量により変動します。
          制作は、最初に方向性共有（世界観ボード）を行い、その後デザイン制作へと進みます。
          大きく「ランディングページ」「小規模サイト」「ブランドサイト」の3つのプランをご用意しています。
        </p>

        {/* ====================== */}
        {/* プランと料金 */}
        {/* ====================== */}
        <SectionTitle>プランと料金</SectionTitle>

        <div className="grid gap-10 md:gap-12 md:grid-cols-3 mb-24">
          <PlanCard
            badge="PLAN 01"
            title="Landing Page"
            price="¥80,000〜"
            summary="単ページ構成のランディングページ。"
            detail="キャンペーン告知・商品紹介・サービス説明など、1ページで完結する構成に適したプランです。"
            bestFor="まずは“試しにサイトを持ってみたい”方に。"
          />

          <PlanCard
            badge="PLAN 02"
            title="Small Website"
            price="¥150,000〜"
            summary="3〜5ページ構成の小規模サイト。"
            detail="店舗サイト・サロン・教室・個人事業など、必要な情報を整理して届けるための基本プランです。"
            bestFor="メニュー・プロフィール・アクセスなど、しっかり情報を載せたい方に。"
          />

          <PlanCard
            badge="PLAN 03"
            title="Brand Site"
            price="¥300,000〜"
            summary="世界観に特化したブランドサイト。"
            detail="写真・光・余白・タイポグラフィ・軽いアニメーションを組み合わせ、ブランドの“空気”を設計します。"
            bestFor="ブランドイメージや世界観をじっくり伝えたい方に。"
          />
        </div>

        {/* ====================== */}
        {/* 追加オプション */}
        {/* ====================== */}
        <SectionTitle>追加オプション</SectionTitle>
        <DetailBlock>
          <li>microCMS 導入：30,000円〜</li>
          <li>AI画像生成：相談可</li>
          <li>ドメイン / サーバー設定：20,000円〜</li>
        </DetailBlock>

        {/* ====================== */}
        {/* 制作の流れ */}
        {/* ====================== */}
        <SectionTitle>制作の流れ</SectionTitle>
        <DetailBlock>
          <li>① ヒアリング（目的・世界観・競合イメージの共有）</li>
          <li>② 構成案・方向性（世界観ボード）の提示</li>
          <li>③ 着手金（50%）のお支払い → 制作開始</li>
          <li>④ デザイン制作 → 修正</li>
          <li>⑤ コーディング・動作確認</li>
          <li>⑥ 残額のお支払い → 公開</li>
        </DetailBlock>

        {/* ====================== */}
        {/* お支払い・キャンセル */}
        {/* ====================== */}
        <SectionTitle>制作開始とお支払いについて</SectionTitle>
        <DetailBlock>
          <li>
            ヒアリング後、正式にご依頼いただいた段階で
            <strong> 着手金（制作費の 50%）</strong> をお支払い頂きます。
          </li>
          <li>着手金の確認後、サイト構成・デザイン制作に着手します。</li>
          <li>残り 50% は、サイト完成後・公開前にお支払いいただきます。</li>
        </DetailBlock>

        <SectionTitle>キャンセルについて</SectionTitle>
        <DetailBlock>
          <li>
            デザイン制作の性質上、
            <strong> 着手金（50%）は返金不可</strong> となります。
          </li>
          <li>制作途中のキャンセルの場合、残額は発生しません。</li>
          <li>
            キャンセルされた制作物の
            <strong> 著作権・利用権は当方に帰属</strong> します。
          </li>
        </DetailBlock>

        {/* ====================== */}
        {/* 写真素材について */}
        {/* ====================== */}
        <SectionTitle>写真素材について</SectionTitle>
        <DetailBlock>
          <li>
            より美しい仕上がりのため、写真素材は
            <strong> 明るい場所で、鮮明に撮影されたもの</strong>
            をご提供ください。
          </li>
          <li>写真の質は、デザイン全体の印象に大きく影響いたします。</li>
          <li>
            撮影が難しい場合は、
            <strong> AI補正・簡易撮影アドバイス</strong> も可能ですのでご相談ください。
          </li>
        </DetailBlock>

        {/* ====================== */}
        {/* 注意事項 */}
        {/* ====================== */}
        <SectionTitle>注意事項</SectionTitle>
        <DetailBlock>
          <li>記載の金額はすべて「税込・目安」です。</li>
          <li>ご要望・機能追加の内容により、料金が変動する場合があります。</li>
          <li>確定後の大幅な構成変更は、追加料金となる場合があります。</li>
          <li>素材提出が遅れた場合、納期も延長されます。</li>
          <li>納期目安：3〜6週間。</li>
        </DetailBlock>

        {/* ====================== */}
        {/* CTA */}
        {/* ====================== */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="
              inline-block px-12 py-3
              border border-gold text-gold
              hover:bg-gold hover:text-black
              transition-all duration-300
              tracking-[0.25em]
            "
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   共通パーツ
============================================ */

function SectionTitle({ children }) {
  return (
    <h2 className="text-[1.05rem] tracking-[0.18em] mb-4 text-white/80">
      {children}
    </h2>
  );
}

/* 単一プランカード（8万 / 15万 / 30万） */
function PlanCard({ badge, title, price, summary, detail, bestFor }) {
  return (
    <div
      className="
        bg-[#111]
        border border-white/12
        rounded-2xl
        p-7 md:p-8
        shadow-[0_0_26px_rgba(0,0,0,0.45)]
        flex flex-col
        gap-4
        hover:-translate-y-1
        hover:shadow-[0_0_34px_rgba(215,195,154,0.22)]
        transition-all duration-300
      "
    >
      <p className="text-[0.75rem] tracking-[0.22em] text-gold/80 mb-1">
        {badge}
      </p>

      <h3 className="text-[1.15rem] tracking-[0.08em] text-white">
        {title}
      </h3>

      <p className="text-[1.2rem] tracking-[0.03em] text-gold mb-1">
        {price}
      </p>

      <p className="text-[0.9rem] text-white/80 leading-relaxed">
        {summary}
      </p>

      <p className="text-[0.85rem] text-white/60 leading-relaxed">
        {detail}
      </p>

      <p className="text-[0.8rem] text-white/50 leading-relaxed mt-1">
        {bestFor}
      </p>
    </div>
  );
}

/* 横ラインで区切るブロック */
function DetailBlock({ children }) {
  return (
    <div className="my-6 md:my-8">
      <div className="w-full h-[1px] bg-[rgba(215,195,154,0.28)] mb-4"></div>
      <ul className="text-white/60 text-[0.95rem] leading-[1.85] space-y-1 pl-1">
        {children}
      </ul>
    </div>
  );
}
