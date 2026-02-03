import React from "react";
import "./philosophy.css";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="
        philo-section aq-fade aq-root
        bg-[#0b0b0b]
      "
    >
      <div className="max-w-4xl mx-auto px-6 relative">

        {/* ============================
             追加：SEO極薄リード（見た目違和感ゼロ）
        ============================ */}
        <p
          className="
            text-[0.7rem]
            tracking-[0.14em]
            text-white/25
            mb-6
            select-none
          "
        >
          美容・EC・店舗・サロン向けWebデザインの制作方針
        </p>
        {/* Google に伝えるための1行。UIでは単なる極薄テキストに見える。 */}

        {/* 左ライン */}
        <div className="philo-gold-line aq-fade delay-1"></div>

        {/* タイトル */}
        <h2
          className="
            aq-fade delay-1
            text-[2.6rem]
            tracking-[0.20em]
            text-white font-light
            mb-3 pl-1
          "
          translate="no"
        >
          PHILOSOPHY
        </h2>

        {/* サブタイトル */}
        <p
          className="
            aq-fade delay-1
            text-white/60
            tracking-[0.12em]
            text-[0.9rem]
            mb-10 pl-1
          "
        >
          ― 制作の考え方 ―
        </p>

        {/* 導入文 */}
      <p className="philo-lead aq-fade delay-2">
  私が大切にしているのは、<br />
  <span className="text-white/95">
    「見やすさ」と「伝わりやすさ」を軸にしたデザインです。
  </span>
  <br />
  これまでに、美容・EC・店舗・サロンなど、<br />
  <strong className="text-white/90">
    その業界に合わせた作品づくりを継続してきました。
  </strong>
  <br /><br />
  どれだけ綺麗に見えても、<br />
  <span className="text-white/80 text-[0.95em]">
    初めて訪れた人が “安心して読み進められること” を最優先にしています。
  </span>
</p>

<p className="philo-body aq-fade delay-3">
  デザインは、ただオシャレに整えるだけでは十分ではありません。<br />
  タイトルの強弱、行間、余白、視線の流れ。<br />
  それらを丁寧に積み重ねることで、<br />
  <span className="text-white/90">
    サイトの本質的な魅力がまっすぐ届く設計
  </span>
  が生まれます。
  <br /><br />

  派手な演出よりも、<br />
  <span className="text-white/90">“読み手の速度” に寄り添った設計。</span><br />
  それが、時間が経っても価値が下がらないサイトをつくる<br />
  一番の近道だと考えています。
</p>

<div className="space-y-5 mt-14">
  <div className="aq-fade delay-4">
    <h3 className="philo-subtitle">1. Order（秩序）</h3>
    <p className="philo-subtext">
      情報の優先順位を整え、<br />
      初めて訪れた人でも迷わず理解できる構造をつくります。
    </p>
  </div>

  <div className="aq-fade delay-5">
    <h3 className="philo-subtitle">2. Tension（緊張）</h3>
    <p className="philo-subtext">
      文字・余白・光のリズムを微調整し、<br />
      集中しやすい画面の緊張感を設計します。
    </p>
  </div>

  <div className="aq-fade delay-6">
    <h3 className="philo-subtitle">3. Silence（静けさ）</h3>
    <p className="philo-subtext">
      余白は “空白” ではなく、<br />
      品のある世界観をつくるための重要なレイヤーです。
    </p>
  </div>
</div>

<p className="philo-last aq-fade delay-7">
  <span className="text-white/95">
    迷わず読めて、安心して選べるデザインを。
  </span>
  <br />
  <span className="text-white/80">
    「ここなら任せられそう」と思ってもらえるよう、<br className="hidden sm:block" />
    設計から丁寧につくり込んでいます。
  </span>
</p>


      </div>
    </section>
  );
}
