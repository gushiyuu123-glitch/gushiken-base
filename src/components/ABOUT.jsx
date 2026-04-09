import React from "react";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section aq-fade">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="about-gold-line aq-fade delay-1"></div>

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
          ― 制作者について ―
        </p>

        {/* PC */}
        <div className="hidden sm:block">
          <p
            className="
              about-lead aq-fade delay-2
              text-[0.95rem] sm:text-[1rem]
              leading-[2.1] sm:leading-[2.2]
            "
          >
            「テンプレのような雰囲気は避けたい。
            <br />
            でも、ハイブランドのように固すぎる印象にもしたくない」
            <br />
            <br />
            そんな
            <span className="text-white/95">
              上品で落ち着いたデザイン
            </span>
            を求める方へ向けて制作しています。
            <br />
            美容・EC・店舗・サロンなど、
            <span className="text-white/90">
              業種に合わせた見せ方
            </span>
            を大切にしています。
          </p>

          <p
            className="
              about-body aq-fade delay-3
              text-[0.95rem] sm:text-[1rem]
              leading-[2.2] sm:leading-[2.3]
            "
          >
            大切にしているのは、
            <span className="text-white/95">
              見やすさと安心感が自然に伝わること。
            </span>
            <br />
            どれだけ見た目が整っていても、内容が伝わりにくければ意味がありません。
            <br />
            <br />
            写真・色・余白・文字のバランスを丁寧に整えながら、
            <span className="text-white/90">
              サービスやブランドの魅力が伝わる形
            </span>
            に仕上げています。
            <br />
            ガチャガチャしすぎず、落ち着きがあり、
            <br />
            「ちゃんとしている」と感じてもらえる印象を大切にしています。
          </p>
        </div>

        {/* SP */}
        <div className="block sm:hidden">
          <p
            className="
              about-lead aq-fade delay-2
              text-[0.95rem]
              leading-[2.1]
            "
          >
            「テンプレっぽい雰囲気は避けたい。
            <br />
            でも、ハイブランドほど
            <br />
            固くしたくない」
            <br />
            <br />
            そんな
            <span className="text-white/95">
              上品で落ち着いたデザイン
            </span>
            を求める方へ向けて制作しています。
            <br />
            美容・EC・店舗・サロンなど、
            <br />
            <span className="text-white/90">
              業種に合わせた見せ方
            </span>
            を大切にしています。
          </p>

          <p
            className="
              about-body aq-fade delay-3
              text-[0.95rem]
              leading-[2.15]
            "
          >
            大切にしているのは、
            <br />
            <span className="text-white/95">
              見やすさと安心感
            </span>
            が自然に伝わること。
            <br />
            <br />
            どれだけ綺麗に見えても、
            <br />
            内容が伝わりにくければ意味がありません。
            <br />
            <br />
            写真・色・余白・文字を整えながら、
            <br />
            <span className="text-white/90">
              魅力が伝わる形
            </span>
            に仕上げています。
          </p>
        </div>

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

          {/* PC */}
          <div className="hidden sm:block">
            <p
              className="
                about-text
                text-[0.9rem] sm:text-[0.95rem]
                leading-[2.1] sm:leading-[2.2]
              "
            >
              Designer / Front-end Creator
              <br />
              沖縄を拠点に、ブランドサイト・サロン・カフェ・個人ビジネスなどの
              Webサイトを制作しています。
              <br />
              <br />
              デザインから実装まで一貫して対応することで、
              <span className="text-white/90">
                見た目だけで終わらず、使いやすさまで含めて整える
              </span>
              ことを大切にしています。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p
              className="
                about-text
                text-[0.9rem]
                leading-[2.1]
              "
            >
              Designer / Front-end Creator
              <br />
              沖縄を拠点に、
              <br />
              ブランドサイト・サロン・カフェ・
              <br />
              個人ビジネスなどの
              <br />
              Webサイトを制作しています。
              <br />
              <br />
              デザインから実装まで一貫して対応し、
              <br />
              <span className="text-white/90">
                見た目だけでなく
                <br />
                使いやすさまで整える
              </span>
              ことを大切にしています。
            </p>
          </div>

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
            note（制作の背景はこちら）
          </a>
        </div>

        <div className="space-y-8 sm:space-y-9 mb-16 sm:mb-20">
          <div className="aq-fade delay-5">
            <h4 className="about-style-title">・見やすく整理する</h4>
            <p className="about-style-text">
              情報を整え、初めて訪れた方にも伝わりやすい画面を目指します。
            </p>
          </div>

          <div className="aq-fade delay-5">
            <h4 className="about-style-title">・雰囲気をそろえる</h4>
            <p className="about-style-text">
              写真や色のトーンを整え、ブランドらしさが伝わる印象にまとめます。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h4 className="about-style-title">・動きは控えめに使う</h4>
            <p className="about-style-text">
              過度な演出に頼らず、見やすさや印象を損なわない範囲で整えます。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h4 className="about-style-title">・デザインから実装まで対応する</h4>
            <p className="about-style-text">
              完成後の見え方まで含めて、全体の印象がぶれないよう制作しています。
            </p>
          </div>
        </div>

        {/* PC */}
        <div className="hidden sm:block">
          <p
            className="
              about-last aq-fade delay-7
              text-[0.95rem] sm:text-[1rem]
              leading-[2.1] sm:leading-[2.2]
            "
          >
            あなたのブランドやお店のらしさを、
            <span className="text-white/95">
              落ち着きと品のあるWebサイト
            </span>
            として丁寧に形にします。
          </p>
        </div>

        {/* SP */}
        <div className="block sm:hidden">
          <p
            className="
              about-last aq-fade delay-7
              text-[0.95rem]
              leading-[2.1]
            "
          >
            あなたのブランドやお店のらしさを、
            <br />
            <span className="text-white/95">
              落ち着きと品のあるWebサイト
            </span>
            として丁寧に形にします。
          </p>
        </div>
      </div>
    </section>
  );
}