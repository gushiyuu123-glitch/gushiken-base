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
            text-[2.4rem]
            tracking-[0.22em]
            text-white font-light
            pl-1
            mb-2
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
            tracking-[0.12em]
            text-[0.9rem]
            mb-12
            pl-1
          "
        >
          ― 制作者について（どんな人が作っているのか） ―
        </p>

        {/* 導入文 */}
        <p className="about-lead aq-fade delay-2">
          「テンプレっぽいサイトは嫌だけど、高級ブランドみたいなギラついたデザインも違う」  
          そんな“ちょうどいい上品さ”を求める方へ向けて制作しています。
        </p>

        {/* 本文 */}
        <p className="about-body aq-fade delay-3">
          大切にしているのは、  
          <span className="text-white/95">“見やすさ” と “印象の良さ” が自然に両立したデザイン。</span><br />
          読み手が迷わず情報にたどり着けるよう、構造と余白を丁寧に整えています。<br /><br />

          そのうえで、写真・色・文字の雰囲気を揃え、  
          「なんかいい」と感じてもらえる静かな世界観をつくっています。
        </p>

        {/* 制作者紹介 */}
        <div className="mb-16 aq-fade delay-4">
          <h3 className="about-name" translate="no">Gushiken Yuto</h3>
          <p className="about-text">
            Designer / Front-end Creator<br />
            沖縄を拠点に、ブランドサイト・カフェ・サロン・個人ビジネスなど、  
            上品で“伝わる”デザイン制作を行っています。<br /><br />

            デザインとコーディングを一体で考えることで、  
            仕上がりの美しさだけでなく、使いやすさや更新しやすさにも配慮しています。
          </p>
        </div>

        {/* 制作スタイル 4項目 */}
        <div className="space-y-8 mb-20">
          <div className="aq-fade delay-5">
            <h4 className="about-style-title">・整列と余白を丁寧に扱う</h4>
            <p className="about-style-text">
              読み手が迷わないよう、距離感・配置・視線の流れを細かく調整します。
            </p>
          </div>

          <div className="aq-fade delay-5">
            <h4 className="about-style-title">・写真と色の一貫性を大切にする</h4>
            <p className="about-style-text">
              色味・明るさ・質感を揃え、ブランドの雰囲気を統一します。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h4 className="about-style-title">・動きは最小限で美しく</h4>
            <p className="about-style-text">
              動かしすぎず、サイト全体の“空気”を整える静かなアニメーションを使います。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h4 className="about-style-title">・デザインと技術をつなげる</h4>
            <p className="about-style-text">
              コードで再現できる設計を前提に作るため、見た目だけで終わらないサイトに仕上がります。
            </p>
          </div>
        </div>

        {/* ラスト */}
        <p className="about-last aq-fade delay-7">
          あなたのブランドやお店の“らしさ”を、  
          上品で伝わりやすい形に整えます。
        </p>
      </div>
    </section>
  );
}
