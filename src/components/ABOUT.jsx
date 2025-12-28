import React from "react";
import "./about.css";

export default function About() {
  return (
    <section
      id="about"
      className="about-section aq-fade"
    >
      <div className="max-w-4xl mx-auto px-6 relative">

        {/* 左の細金ライン */}
        <div className="about-gold-line aq-fade delay-1"></div>

        {/* タイトル */}
        <h2
          className="
            aq-fade delay-1
            text-[2.2rem] sm:text-[2.4rem]
            tracking-[0.22em]
            text-white font-light
            pl-1 mb-2
          "
          translate="no"
        >
          ABOUT
        </h2>

        {/* 翻訳レイヤー */}
        <p
          className="
            aq-fade delay-1
            text-white/60
            text-[0.85rem] sm:text-[0.9rem]
            tracking-[0.12em]
            mb-10 sm:mb-12
            pl-1
          "
        >
          ― 制作者について（どんな人が作っているのか） ―
        </p>

        {/* 導入文 */}
        <p
          className="
            about-lead aq-fade delay-2
            text-[0.95rem] sm:text-[1rem]
            leading-[2.1] sm:leading-[2.2]
          "
        >
          「テンプレっぽいのは嫌。でも、ハイブランドほど固くしたくない。」
          <br className="hidden sm:block" />
          そんな<span className="text-white/95">“ちょうどいい上品さ”</span>を求める方へ向けて制作しています。
        </p>

        {/* 本文 */}
        <p
          className="
            about-body aq-fade delay-3
            text-[0.95rem] sm:text-[1rem]
            leading-[2.2] sm:leading-[2.3]
          "
        >
          大切にしているのは、  
          <span className="text-white/95">“見やすさ” と “印象の良さ” が自然に両立すること。</span><br />
          読み手が迷わず情報にたどり着けるよう、構造や余白を丁寧に整えています。
          <br /><br />

          そのうえで、写真・色・文字の雰囲気を揃え、  
          <span className="text-white/90">「なんかいい」</span>と感じてもらえる静かな世界観をつくっています。
        </p>

        {/* 制作者紹介 */}
        <div className="mb-14 sm:mb-16 aq-fade delay-4">
          <h3
            className="
              about-name
              text-[1.1rem] sm:text-[1.2rem]
            "
            translate="no"
          >
            Gushiken Yuto
          </h3>

          <p
            className="
              about-text
              text-[0.9rem] sm:text-[0.95rem]
              leading-[2.1] sm:leading-[2.2]
            "
          >
            Designer / Front-end Creator<br />
            沖縄を拠点に、ブランドサイト・カフェ・サロン・個人ビジネスなど、  
            上品で“伝わる”Webサイトを制作しています。
            <br /><br />

            デザインとコーディングを一体で考えることで、  
            見た目だけで終わらず、使いやすさまで含めた設計を心がけています。
          </p>
        </div>

        {/* 制作スタイル */}
        <div className="space-y-8 sm:space-y-9 mb-16 sm:mb-20">

          <div className="aq-fade delay-5">
            <h4 className="about-style-title">
              ・整列と余白を丁寧に扱う
            </h4>
            <p className="about-style-text">
              距離感・配置・視線の流れを細かく整え、迷わず読める画面に仕上げます。
            </p>
          </div>

          <div className="aq-fade delay-5">
            <h4 className="about-style-title">
              ・写真と色の一貫性を大切にする
            </h4>
            <p className="about-style-text">
              明るさ・色味・質感を揃え、ブランドの印象を自然に統一します。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h4 className="about-style-title">
              ・動きは最小限で静かに美しく
            </h4>
            <p className="about-style-text">
              過剰に動かさず、空気感を整えるためのアニメーションのみを使います。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h4 className="about-style-title">
              ・デザインと技術をつなげる
            </h4>
            <p className="about-style-text">
              コードで再現できる構造を前提に設計し、長く使えるサイトを作ります。
            </p>
          </div>

        </div>

        {/* ラスト */}
        <p
          className="
            about-last aq-fade delay-7
            text-[0.95rem] sm:text-[1rem]
            leading-[2.1] sm:leading-[2.2]
          "
        >
          あなたのブランドやお店の“らしさ”を、  
          <span className="text-white/95">
            上品で、伝わりやすい形
          </span>
          に整えます。
        </p>

      </div>
    </section>
  );
}
