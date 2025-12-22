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
          ― 制作の考え方（デザインの方針） ―
        </p>

        {/* 導入文 */}
        <p className="philo-lead aq-fade delay-2">
          私が大切にしているのは、<br />
          <span className="text-white/95">
            “見やすさ” と “美しさ” が自然に両立したデザイン。
          </span>
          <br />
          派手さよりも、読み手に素直に伝わる構造を重視しています。
        </p>

        {/* 本文 */}
        <p className="philo-body aq-fade delay-3">
          情報をただ並べるだけでは魅力は届きません。<br />
          文字の強弱、余白、視線の流れ。<br />
          それらを丁寧に整えることで、サイト全体に“落ち着いた雰囲気”が生まれます。<br /><br />

          特別な装飾ではなく、<span className="text-white/90">基本の積み重ね</span>を大切にすること。<br />
          それが、長く愛されるデザインにつながると考えています。
        </p>

        {/* 三原則 */}
        <div className="space-y-5 mt-14">

          <div className="aq-fade delay-4">
            <h3 className="philo-subtitle">1. Order（秩序）</h3>
            <p className="philo-subtext">
              情報の優先順位を整理し、迷わず読める導線をつくる。
            </p>
          </div>

          <div className="aq-fade delay-5">
            <h3 className="philo-subtitle">2. Tension（緊張）</h3>
            <p className="philo-subtext">
              わずかな“間”やコントラストが、画面に表情とリズムを与える。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h3 className="philo-subtitle">3. Silence（静寂）</h3>
            <p className="philo-subtext">
              余白は空白ではなく、印象を整えるための大切な要素。
            </p>
          </div>

        </div>

        {/* 締め */}
        <p className="philo-last aq-fade delay-7">
          <span className="text-white/95">
            見やすく、静かで、長く愛されるデザインを。
          </span>
          <br />
          その想いを軸に、ひとつひとつ丁寧に制作しています。
        </p>

      </div>
    </section>
  );
}
