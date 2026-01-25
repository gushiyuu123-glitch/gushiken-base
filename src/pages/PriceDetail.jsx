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
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "GUSHIKEN DESIGN",
            "url": "https://gushikendesign.com/price",
            "description": "世界観と構造を重視したWebサイト制作サービス。",
            "areaServed": { "@type": "Country", "name": "Japan" },
            "serviceType": "Web Design / Frontend Development"
          })
        }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* 左ライン */}
        <div className="hidden md:block absolute left-0 top-10 w-px h-[86%] bg-[rgba(217,185,138,0.28)]" />

        {/* ===== TITLE ===== */}
        <h1
          className="
            text-[2.2rem] md:text-[2.6rem]
            tracking-[0.22em]
            font-light mb-4 pl-4
          "
        >
          PRICE — Detail
        </h1>

        <p className="text-white/60 tracking-[0.14em] text-[0.9rem] pl-4 mb-14">
          ― 料金の詳細と制作の進め方 ―
        </p>

        {/* ===== INTRO ===== */}
        <p className="text-white/75 leading-[1.9] mb-20 max-w-3xl pl-4">
          Webサイトは、お店やブランドの「空気」を最初に伝える場所です。<br />
       初回のヒアリングでは目的・方向性・参考イメージを丁寧に伺い、
          <span className="text-white/90">制作の判断基準を言葉とイメージで<br />共有しながら</span>進めていきます。<br /><br />
          制作前に必ず総額を確定し、途中で費用が変わることはありません。
        </p>

        {/* ===== MAIN SECTION ===== */}
        <SectionTitle main>プランと料金</SectionTitle>

        <div className="grid gap-10 md:grid-cols-3 mb-28">
          <PlanCard
            badge="PLAN 01"
            title="Landing Page"
            price="¥60,000〜"
            detail="キャンペーンやブランド紹介など、1ページで魅力を伝えたい方向け。"
            bestFor="まずはWebサイトを持ちたい方へ。"
          />
          <PlanCard
            badge="PLAN 02"
            title="Small Website"
            price="¥120,000〜"
            detail="構成と導線を整理し、トップページ＋2〜4ページ程度を想定した信頼感のあるサイトに仕上げます。"
            bestFor="店舗・サロン・教室など。"/>
     <PlanCard
  badge="PLAN 03"
  title="Brand Site"
  price="¥200,000〜"
  detail="写真・色・余白まで統一し、トップページ＋4〜6ページ程度を想定したブランド全体の世界観を丁寧に設計します。"
  bestFor="ブランド価値を重視したい方へ。"/>

        </div>

        <SectionTitle main>制作の流れ</SectionTitle>
        <DetailBlock>
          <li>① ヒアリング（目的・世界観）</li>
          <li>② 世界観ボード共有</li>
          <li>③ 着手金 50% → 制作開始</li>
          <li>④ 初稿提出・調整</li>
          <li>⑤ 実装・最終確認</li>
          <li>⑥ 残額お支払い → 公開</li>
        </DetailBlock>

        <SectionTitle main>お支払いについて</SectionTitle>
        <DetailBlock>
          <li>着手金：50%</li>
          <li>残額は公開前にお支払いください。</li>
        </DetailBlock>

{/* ===== 注意事項 ===== */}
<SectionTitle main>注意事項</SectionTitle>
<DetailBlock>
  <li>制作前に必ず総額を確定します。</li>
  <li>納期目安：3〜6週間</li>
  <li>短納期・価格最優先のご依頼には対応していません。</li>
<li>
  完成後に「ページを追加したくなった」「サービスを増やしたい」場合も  
  <span className="text-white/90">柔軟に対応できます。</span>
  その際は、事前に必ず内容と費用を確認いただいてから進めます。
</li>

</DetailBlock>

        {/* ===== SUB SECTION ===== */}
        <SectionTitle>写真・ビジュアルについて</SectionTitle>
        <DetailBlock dense>
          <li>素材が不足している場合も、世界観を壊さない補完ビジュアルを制作します。</li>
        </DetailBlock>

        <SectionTitle>SEO・初期設定</SectionTitle>
        <DetailBlock dense>
          <li>タイトル・OGP・構造化データは標準対応です。</li>
        </DetailBlock>

        <SectionTitle>追加オプション</SectionTitle>
        <DetailBlock dense>
          <li>microCMS：¥30,000〜</li>
          <li>ドメイン・サーバー設定：¥20,000〜</li>
        </DetailBlock>

        {/* ===== CTA ===== */}
        <p className="text-white/70 text-center mt-20 mb-8 text-[0.95rem]">
          ここまで読んでいただき、ありがとうございます。
        </p>

        <div className="text-center">
          <Link
            to="/contact"
            className="
              inline-block px-12 py-3 rounded-full
              border border-[rgba(217,185,138,0.85)]
              text-[rgba(217,185,138,0.94)]
              tracking-[0.2em] uppercase
              transition-all duration-300
              hover:bg-[rgba(217,185,138,0.92)]
              hover:text-black
            "
          >
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================= */

function SectionTitle({ children, main = false }) {
  return (
    <h2
      className={`
        pl-4 mt-16 mb-4
        tracking-[0.22em]
        ${main ? "text-white text-[1.05rem]" : "text-white/70 text-[0.95rem]"}
      `}
    >
      {children}
    </h2>
  );
}

function PlanCard({ badge, title, price, detail, bestFor }) {
  return (
    <div className="
      bg-white/5 border border-white/10 rounded-xl
      p-6 shadow-[0_0_24px_rgba(0,0,0,0.5)]
      transition-all duration-300
      hover:-translate-y-1 hover:border-[rgba(217,185,138,0.55)]
    ">
      <p className="text-[0.75rem] tracking-[0.22em] text-gold/80">{badge}</p>
      <h3 className="text-[1.15rem] mt-2">{title}</h3>
      <p className="text-[1.2rem] text-gold mt-1">{price}</p>
      <p className="text-white/70 text-[0.9rem] mt-3">{detail}</p>
      <p className="text-white/50 text-[0.8rem] mt-2">{bestFor}</p>
    </div>
  );
}

function DetailBlock({ children, dense = false }) {
  return (
    <div className="my-6">
      <div className="w-full h-px bg-[rgba(215,195,154,0.28)] mb-3" />
      <ul
        className={`
          pl-4 space-y-1 leading-[1.85]
          ${dense ? "text-[0.85rem] text-white/55" : "text-[0.95rem] text-white/65"}
        `}
      >
        {children}
      </ul>
    </div>
  );
}
