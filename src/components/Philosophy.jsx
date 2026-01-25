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
          ― 制作の考え方 ―
        </p>

        {/* 導入文 */}
        <p className="philo-lead aq-fade delay-2">
          私が大切にしているのは、<br />
          <span className="text-white/95">
            「見やすさ」と「伝わりやすさ」を軸にしたデザインです。
          </span>
          <br />
          どれだけデザインが綺麗でも、<br />
          <strong className="text-white/90">
            必要な情報が迷わず理解できなければ意味がありません。
          </strong>
          <br /><br />
          店舗・サロン・ハイエンドECなど、<br />
          <span className="text-white/80 text-[0.95em]">
            初めて来る人にも “安心して選んでもらえる” ことを最優先に考えています。
          </span>
        </p>

        {/* 本文 */}
        <p className="philo-body aq-fade delay-3">
          情報をただ並べるだけでは、良さは伝わりません。<br />
          タイトルの強弱、行間、余白、視線の動き。<br />
          それらを丁寧に整えることで、<br />
          <span className="text-white/90">
            店舗やサービスの魅力がまっすぐ届く設計
          </span>
          ができます。
          <br /><br />

          派手な演出に頼らず、<br />
          <span className="text-white/90">基本を徹底して積み重ねること。</span><br />
          それが、時間が経っても価値の下がらないサイトをつくる一番の近道だと考えています。
        </p>

        {/* 三原則 */}
        <div className="space-y-5 mt-14">

          <div className="aq-fade delay-4">
            <h3 className="philo-subtitle">1. Order（秩序）</h3>
            <p className="philo-subtext">
              情報の優先順位を整理し、<br />
              はじめて訪れた人でも迷わず理解できる導線をつくります。
            </p>
          </div>

          <div className="aq-fade delay-5">
            <h3 className="philo-subtitle">2. Tension（緊張）</h3>
            <p className="philo-subtext">
              文字や余白のバランスを調整し、<br />
              画面に自然なリズムと集中しやすい流れを作ります。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h3 className="philo-subtitle">3. Silence（静けさ）</h3>
            <p className="philo-subtext">
              余白はただの空白ではなく、<br />
              見やすさと品のある印象を生むための重要な要素です。
            </p>
          </div>

        </div>

        {/* 締め */}
        <p className="philo-last aq-fade delay-7">
          <span className="text-white/95">
            見やすく、わかりやすく、安心して読めるデザインを。
          </span>
          <br />
          <span className="text-white/80">
            初めて訪れた人が「ここなら信頼できそう」と感じられるサイトを、<br className="hidden sm:block" />
            設計から丁寧にお作りしています。
          </span>
        </p>

      </div>
    </section>
  );
}
