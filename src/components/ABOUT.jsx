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
  「テンプレの雰囲気は嫌だけど、ハイブランドほど固くしたくない」  
  <br className="hidden sm:block" />
  そんな<span className="text-white/95">“上品で落ち着いたデザイン”</span>を求める方へ向けて制作しています。
  <br /><br />
  美容・EC・店舗・サロンなど、  
  <span className="text-white/90">
    業界ごとの“伝わり方”に合わせた作品づくりを継続してきました。
  </span>
</p>

<p
  className="
    about-body aq-fade delay-3
    text-[0.95rem] sm:text-[1rem]
    leading-[2.2] sm:leading-[2.3]
  "
>
  私が一番大切にしているのは、  
  <span className="text-white/95">「見やすさ」と「安心感」が自然に感じられること。</span><br />
  どれだけデザインが綺麗でも、情報が読みづらければ意味がありません。
  <br /><br />

  写真・色・余白・文字の表情を揃え、  
  <span className="text-white/90">静かで雰囲気のある世界観</span>をつくります。  
  ガチャガチャしない、落ち着いた“やさしい強さ”のあるデザインを心がけています。
</p>

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
    沖縄を拠点に、ブランドサイト・サロン・カフェ・個人ビジネスなど、  
    上品で“伝わる”Webサイトを制作しています。
    <br /><br />

    デザインと実装を同じ視点で扱うことで、  
    <span className="text-white/90">
      見た目だけで終わらず「使いやすさ」まで含めて完成させる
    </span>
    ことを大切にしています。
  </p>

  <a
    href="https://note.com/noahgushi123"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block mt-6
      text-white/50 hover:text-white/80
      underline underline-offset-[4px]
      text-[0.85rem] tracking-[0.14em]
      transition
    "
  >
    note（制作の裏側はこちら）
  </a>
</div>

<div className="space-y-8 sm:space-y-9 mb-16 sm:mb-20">

  <div className="aq-fade delay-5">
    <h4 className="about-style-title">
      ・整列と余白を丁寧に扱う
    </h4>
    <p className="about-style-text">
      情報の“置き方”を整えることで、自然に読みやすく、落ち着いた画面になります。
    </p>
  </div>

  <div className="aq-fade delay-5">
    <h4 className="about-style-title">
      ・写真と色の一貫性を大切にする
    </h4>
    <p className="about-style-text">
      世界観を崩さないために、明るさ・色味・質感を揃えて統一感を作ります。
    </p>
  </div>

  <div className="aq-fade delay-6">
    <h4 className="about-style-title">
      ・動きは最小限で静かに美しく
    </h4>
    <p className="about-style-text">
      過度なアニメーションは使わず、  
      「呼吸するような自然な動き」だけを加えています。
    </p>
  </div>

  <div className="aq-fade delay-6">
    <h4 className="about-style-title">
      ・デザインと技術をつなげる
    </h4>
    <p className="about-style-text">
      コードで再現できる設計を前提に、  
      長く運用しやすい形で仕上げます。
    </p>
  </div>

</div>

<p
  className="
    about-last aq-fade delay-7
    text-[0.95rem] sm:text-[1rem]
    leading-[2.1] sm:leading-[2.2]
  "
>
  あなたのブランドやお店の“らしさ”を、  
  <span className="text-white/95">
    静かで上品なデザイン
  </span>
  へと丁寧に翻訳します。
</p>


      </div>
    </section>
  );
}
