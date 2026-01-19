// src/pages/works/Still.jsx
import React, { useEffect } from "react";

export default function Still() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f7f7f8] text-[#0e0e0e] min-h-screen pb-44">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/still#creativework",
      "name": "STILL｜Minimal Fashion EC Design",
      "description":
        "黒・緊張・建築構図を軸に、ファッションの静かな強さをUIへ翻訳したミニマルECデザイン。光の入り方、陰影の角度、縦ラインのリズムを建築写真の原理で精密に設計したコンセプト作品。",
      "creator": {
        "@type": "Person",
        "name": "裕人 具志堅",
        "alternateName": "Yuto Gushiken",
        "url": "https://gushikendesign.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GUSHIKEN DESIGN",
        "url": "https://gushikendesign.com/"
      },
      "inLanguage": "ja",
      "url": "https://gushikendesign.com/works/still",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "STILL Fashion EC Site",
        "url": "https://still-ec.vercel.app/"
      }
    })
  }}
/>

      {/* =========================================================
          HERO — Black × Architecture × Mode Precision
      ========================================================= */}
      <div className="relative w-full overflow-hidden bg-[#050505] text-white">

        {/* ===== SP ===== */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/still-hero.png"
            alt="STILL — Minimal Fashion EC Design"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.90] scale-[1.06] transform-gpu"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/90" />

          <div className="absolute bottom-10 left-6">
            <h1 className="text-[2.3rem] tracking-[0.26em] font-light">
              STILL
            </h1>
            <p className="text-white/55 tracking-[0.32em] text-[0.72rem] mt-2">
              MODE MINIMAL × ARCHITECTURE
            </p>
            <p className="mt-4 text-white/40 text-[0.7rem] tracking-[0.18em]">
              A silent fashion EC designed like architecture.
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[100vh] relative">
          <img
            src="/works1/still-hero.png"
            alt="STILL Minimal Fashion EC"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.88] scale-[1.04]"
          />

          <img
            src="/works1/still-hero.png"
            alt="STILL Light Layer"
            className="absolute inset-0 w-full h-full object-cover brightness-[1.02] scale-[1.01] mix-blend-screen opacity-[0.18]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/22 to-black/92" />

          <div className="absolute bottom-[19vh] left-[clamp(48px,10vw,200px)] max-w-[640px]">
            <h1 className="text-[4.45rem] tracking-[0.28em] font-light leading-[1.12]">
              STILL
            </h1>
            <p className="text-white/55 tracking-[0.33em] text-[1.03rem] mt-4">
              MODE MINIMAL × ARCHITECTURE
            </p>
            <p className="mt-6 text-white/40 text-[0.78rem] tracking-[0.18em] leading-[2.0]">
              A minimal fashion EC concept inspired by architectural composition,
              vertical rhythm, and silent interaction design.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — Concept & Translation Layer
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-32 mb-32">

        <h2 className="text-[0.9rem] tracking-[0.30em] text-black/40 mb-10">
          PROJECT OUTLINE
        </h2>

<p className="text-[1.15rem] leading-[2.3] text-black/85 font-light tracking-[0.004em] whitespace-pre-line">
{`白を基調に、引き締まりのある建築的な構図で構成したECサイトです。

装飾的な演出に頼らず、
構図・余白・情報の強弱のみで、
画面が自然に成立するよう設計しています。

白は余白として使うのではなく、
視線を整理し、商品や世界観に自然と集中できる
背景として捉えています。
縦ラインのリズムや要素間の距離を細かく調整することで、
スクロール中も画面の密度が崩れない構成を意識しました。

派手さはありませんが、
商品と世界観を落ち着いて味わえる、
モード系ファッションECの体験設計を目指しています。`}
</p>

        {/* SEO / Explanation */}
        <p className="mt-12 text-black/55 text-[0.95rem] leading-[2.4] font-light">
          This project explores a minimal fashion EC design inspired by architectural UI principles.
          By controlling vertical layout, shadow density, and silent transitions,
          the interface creates a calm yet tense shopping experience for high-end fashion brands.
        </p>

        <div className="mt-10 text-black/45 text-[0.82rem] leading-relaxed tracking-[0.12em]">
          <p className="mt-10 text-black/45 text-[0.82rem] leading-relaxed tracking-[0.12em]">
  Tech — React / Modern Frontend
</p>
        </div>
      </div>

      {/* =========================================================
          VISUALS — Vertical Exhibition
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-8 md:px-0 mt-28 space-y-32">

        <div>
          <img
            src="/works1/still-visual1.jpg"
            alt="Architectural composition in fashion UI"
            className="w-full object-cover brightness-[0.95]"
          />
          <p className="mt-6 text-black/45 text-[0.78rem] tracking-[0.14em]">
            Vertical composition inspired by architectural photography.
          </p>
        </div>

        <div>
          <img
            src="/works1/still-visual2.png"
            alt="Fashion imagery treated as structure"
            className="w-full object-cover brightness-[0.94]"
          />
          <p className="mt-6 text-black/45 text-[0.78rem] tracking-[0.14em]">
            Fashion imagery treated as structure, not decoration.
          </p>
        </div>
      </div>

      {/* =========================================================
          CTA
      ========================================================= */}
      <div className="text-center mt-44">
        <a
          href="https://still-ec.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-14 py-4
            text-[0.9rem]
            tracking-[0.30em]
            border border-black/25
            rounded-full
            hover:border-black/55
            hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]
            hover:-translate-y-[2px]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>
      </div>
    </section>
  );
}
