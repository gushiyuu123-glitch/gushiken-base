// src/pages/PriceDetail.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function PriceDetail() {
  const rootRef = useRef(null);

  useEffect(() => {
    rootRef.current?.classList.add("show");
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
        {/* タイトル */}
        {/* ====================== */}
        <h1 className="text-[2.6rem] tracking-[0.22em] font-light mb-8">
          PRICE — Detail
        </h1>

        <p className="text-white/70 text-[1rem] leading-[1.9] mb-16 max-w-3xl">
          制作料金の目安です。ページ数・素材の質・世界観演出の量によって変動します。
        </p>

        {/* ====================== */}
        {/* 基本料金（カード2枚） */}
        {/* ====================== */}
        <SectionTitle>基本料金</SectionTitle>

        <div className="grid gap-12 md:grid-cols-2 mb-24">
          <PlanGroupCard
            label="LIGHT PLAN"
            caption="まずはサイトを持ちたい方向け"
            plans={[
              {
                name: "ランディングページ（1P）",
                price: "¥80,000〜",
                note: "1ページ完結のLP。軽量アニメーション構成。",
              },
              {
                name: "小規模サイト（3〜5P）",
                price: "¥150,000〜",
                note: "導線設計込みの店舗・サービス向けサイト。",
              },
            ]}
          />

          <PlanGroupCard
            label="BRAND / PREMIUM"
            caption="世界観・ブランド価値を重視する方向け"
            plans={[
              {
                name: "ブランドサイト",
                price: "¥250,000〜",
                note: "写真・光・余白を中心に構成する世界観サイト。",
              },
              {
                name: "プレミアムデザイン",
                price: "¥350,000〜",
                note: "GSAP演出を組み込んだ没入型のデザイン。",
              },
            ]}
          />
        </div>

        {/* ====================== */}
        {/* 追加オプション */}
        {/* ====================== */}
        <DetailBlock title="追加オプション">
          <li>microCMS 導入：30,000円〜</li>
          <li>AI画像生成：相談可</li>
        </DetailBlock>

        {/* ====================== */}
        {/* 修正・公開 */}
        {/* ====================== */}
        <DetailBlock title="修正・公開について">
          <li>軽微なデザイン修正：2回まで無料</li>
          <li>文章差し替え：1回無料</li>
          <li>大幅な再構成は追加料金が発生する場合があります</li>
          <li>クライアントの契約サーバーへアップロード可能</li>
          <li>公開〜動作確認までは無料サポート</li>
        </DetailBlock>

        {/* ====================== */}
        {/* 注意事項 */}
        {/* ====================== */}
        <DetailBlock title="注意事項">
          <li>写真の質は仕上がりに大きく影響します。</li>
          <li>確定後の大幅変更は追加料金となる場合があります。</li>
          <li>素材提出が遅れた場合、納期も延長されます。</li>
          <li>納期目安：3〜6週間。</li>
        </DetailBlock>

        {/* ====================== */}
        {/* CTA */}
        {/* ====================== */}
        <div className="text-center mt-10">
          <Link
            to="/#contact"
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
    <h2 className="text-[1.15rem] tracking-[0.18em] mb-6 text-white/90">
      {children}
    </h2>
  );
}

/* カード2枚 */
function PlanGroupCard({ label, caption, plans }) {
  return (
    <div
      className="
        bg-[#111]
        border border-white/12
        rounded-2xl
        p-8
        shadow-[0_0_28px_rgba(0,0,0,0.45)]
        hover:-translate-y-1
        hover:shadow-[0_0_38px_rgba(215,195,154,0.25)]
        transition-all duration-300
      "
    >
      <p className="text-[0.8rem] tracking-[0.22em] text-gold/80 mb-2">
        {label}
      </p>

      <p className="text-[1rem] text-white/90 mb-6">{caption}</p>

      <div className="border-t border-white/10 pt-4 space-y-6">
        {plans.map((p, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[1.05rem] text-white tracking-[0.05em]">
                {p.name}
              </h3>
              <span className="text-[1rem] text-gold whitespace-nowrap">
                {p.price}
              </span>
            </div>
            <p className="text-[0.85rem] text-white/60 leading-[1.7] mt-1">
              {p.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 横ラインで区切るラグジュアリーなブロック */
function DetailBlock({ title, children }) {
  return (
    <div className="my-16">
      <div className="w-full h-[1px] bg-[rgba(215,195,154,0.28)] mb-4"></div>

      <h3 className="text-[1.05rem] tracking-[0.18em] text-white/90 mb-3">
        {title}
      </h3>

      <ul className="text-white/60 text-[0.95rem] leading-[1.85] space-y-1 pl-1">
        {children}
      </ul>
    </div>
  );
}
