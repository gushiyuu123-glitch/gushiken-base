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
          <br /><br />
          <span className="text-white/80 text-[0.95em]">
            それは結果として、
            <strong> お店やサービスの魅力が正しく伝わり、<br className="hidden sm:block" />
            判断しやすいサイト</strong>
            につながります。
          </span>
        </p>

        {/* 本文 */}
        <p className="philo-body aq-fade delay-3">
          情報をただ並べるだけでは、魅力は届きません。<br />
          文字の強弱、余白、視線の流れ。<br />
          それらを丁寧に整えることで、
          サイト全体に“落ち着いた空気”が生まれます。<br /><br />

          特別な装飾ではなく、
          <span className="text-white/90"> 基本の積み重ね</span>
          を大切にすること。<br />
          それが、時間が経っても価値の下がらないデザインにつながると考えています。
        </p>

        {/* 三原則 */}
        <div className="space-y-5 mt-14">

          <div className="aq-fade delay-4">
            <h3 className="philo-subtitle">1. Order（秩序）</h3>
            <p className="philo-subtext">
              情報の優先順位を整理し、<br />
              初めて訪れた人でも迷わず理解できる導線をつくる。
            </p>
          </div>

          <div className="aq-fade delay-5">
            <h3 className="philo-subtitle">2. Tension（緊張）</h3>
            <p className="philo-subtext">
              わずかな“間”やコントラストが、<br />
              画面に心地よいリズムと集中を生む。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h3 className="philo-subtitle">3. Silence（静寂）</h3>
            <p className="philo-subtext">
              余白は空白ではなく、<br />
              印象を整え、伝えたい部分を際立たせるための要素。
            </p>
          </div>

        </div>

        {/* 締め */}
        <p className="philo-last aq-fade delay-7">
          <span className="text-white/95">
            見やすく、静かで、長く愛されるデザインを。
          </span>
          <br />
          <span className="text-white/80">
            初めて訪れた人が「ここなら大丈夫そう」と感じられる空気を、<br className="hidden sm:block" />
            設計から丁寧につくっています。
          </span>
        </p>

      </div>
    </section>
  );
}
