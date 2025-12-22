// src/pages/PriceDetail.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function PriceDetail() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.classList.add("aq-show");
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        aq-fade 
        bg-[#0b0b0b] min-h-screen text-white
        py-24 md:py-32 px-6
      "
    >
      <div className="max-w-5xl mx-auto relative">

        {/* gold line */}
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
            text-[2.2rem] md:text-[2.6rem]
            tracking-[0.22em]
            font-light
            mb-4
            pl-4
          "
        >
          PRICE — Detail
        </h1>

        <p
          className="
            text-white/60
            tracking-[0.14em]
            text-[0.9rem]
            pl-4
            mb-12
          "
        >
          ― 料金の詳細と制作の進め方 ―
        </p>

        {/* Intro */}
        <p
          className="
            text-white/75
            text-[0.95rem] md:text-[1rem]
            leading-[1.9]
            mb-14 md:mb-16
            max-w-3xl
            pl-4
          "
        >
          Webサイトは、お店やブランドの「空気」を最初に伝える場所です。<br />
          そのため、初回のヒアリングでは目的・世界観・参考イメージを丁寧にお伺いし、  
          <strong className="text-white/90">方向性を共有するための“世界観ボード”を作成します。</strong><br /><br />
          制作前に必ず総額を確定し、途中で費用が変わることはありません。
        </p>

        {/* SECTION：プラン */}
        <SectionTitle>プランと料金</SectionTitle>

        <div className="grid gap-10 md:gap-12 md:grid-cols-3 mb-24">
          <PlanCard
            badge="PLAN 01"
            title="Landing Page"
            price="¥60,000〜"
            summary="1ページ構成のランディングページ。"
            detail="ブランド紹介・キャンペーンなど、1ページで魅力を伝えたい方向け。必要な情報を上品に整理し、美しく読みやすい構成にします。"
            bestFor="まずはWebサイトを持ちたい方へ。"
          />

          <PlanCard
            badge="PLAN 02"
            title="Small Website"
            price="¥120,000〜"
            summary="3〜5ページ構成のWebサイト。"
            detail="サービス内容や導線を丁寧に整理し、読みやすさと信頼感を重視した構成に仕上げます。"
            bestFor="店舗・サロン・教室などに最適。"
          />

          <PlanCard
            badge="PLAN 03"
            title="Brand Site（6ページ以上）"
            price="¥180,000〜"
            summary="世界観重視のブランドサイト。"
            detail="写真・色・余白・動きまで統一し、ブランドの“空気”をデザインに落とし込みます。"
            bestFor="世界観そのものを届けたい方へ。"
          />
        </div>

        {/* 写真について */}
        <SectionTitle>写真素材・ビジュアルについて</SectionTitle>
        <DetailBlock>
          <li>写真の質はサイト全体の印象に大きく影響します。</li>
          <li>
            素材が不足している場合でも、  
            <strong>世界観を壊さない高品質な補完ビジュアル</strong>を制作します。
          </li>
          <li>統一感・明るさ・色味を揃え、自然に馴染む表現を重視します。</li>
        </DetailBlock>

        {/* オプション */}
        <SectionTitle>追加オプション</SectionTitle>
        <DetailBlock>
          <li>microCMS（記事投稿機能）：¥30,000〜</li>
          <li>独自ドメイン / サーバー設定：¥20,000〜</li>
        </DetailBlock>

        {/* SEO */}
        <SectionTitle>SEO・初期設定について</SectionTitle>
        <DetailBlock>
          <li>
            タイトル・OGP・構造化データなど、  
            <strong>基本的なSEO設定はすべて標準で含まれています。</strong>
          </li>
          <li>検索エンジンが理解しやすい構造で設計します。</li>
        </DetailBlock>

        {/* イメージ共有 */}
        <SectionTitle>イメージ共有について</SectionTitle>
        <DetailBlock>
          <li>
            「この作品が近い」と  
            <strong>ポートフォリオ内の作品を指定するだけ</strong>でも問題ありません。
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
          <li>言語化が苦手な方は、こちらで形にします。</li>
        </DetailBlock>

        {/* 流れ */}
        <SectionTitle>制作の流れ</SectionTitle>
        <DetailBlock>
          <li>① ヒアリング（目的・世界観・参考イメージ）</li>
          <li>② 世界観ボードの共有</li>
          <li>③ 着手金 50% → 制作開始</li>
          <li>④ デザイン初稿提出</li>
          <li>⑤ 修正 → 実装 → 最終確認</li>
          <li>⑥ 残額お支払い → 公開</li>
        </DetailBlock>

        {/* 支払い */}
        <SectionTitle>お支払いについて</SectionTitle>
        <DetailBlock>
          <li><strong>着手金：50%</strong></li>
          <li>残額は公開前にお支払いください。</li>
        </DetailBlock>

        {/* キャンセル */}
        <SectionTitle>キャンセルについて</SectionTitle>
        <DetailBlock>
          <li><strong>着手金の返金はできません。</strong></li>
          <li>初稿提出後のキャンセルは全額請求となります。</li>
        </DetailBlock>

        {/* 注意事項 */}
        <SectionTitle>注意事項</SectionTitle>
        <DetailBlock>
          <li>記載金額はすべて税込の目安です。</li>
          <li>制作前に必ず総額を確定します。</li>
          <li>納期目安：<strong>3〜6週間</strong></li>
        </DetailBlock>

        {/* 対応不可 */}
        <SectionTitle>対応できないこと</SectionTitle>
        <DetailBlock>
          <li>短納期最優先・価格のみ重視のご依頼には対応していません。</li>
        </DetailBlock>

        {/* CTA */}
        <div className="text-center mt-16">
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

        {/* 事務所向け 導線 */}
        <div className="text-center mt-8 md:mt-10">
          <a
            href="https://office.gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              text-[0.8rem] md:text-sm
              tracking-wider
              text-[#d9c8a6]/50
              transition-colors duration-300
              hover:text-[#d9c8a6]
            "
          >
            事務所・企業向けのシンプルWebプランはこちら →
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
