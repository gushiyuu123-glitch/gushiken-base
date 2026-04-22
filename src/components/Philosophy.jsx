import React from "react";
import "./philosophy.css";

function VisualPrinciples() {
  return (
    <div className="aq-fade delay-7 mt-8 mb-16 sm:mt-10 sm:mb-20">
      <div className="relative pl-6 sm:pl-8">
        {/* 全体をつなぐ縦軸（subaccent寄せ） */}
        <div className="vp-axis" aria-hidden="true" />

        <p className="text-white/18 text-[0.6rem] tracking-[0.24em] mb-10 uppercase">
          ― DESIGN IN PRACTICE ―
        </p>

        {/* 01 */}
        <div className="relative mb-10">
          <span className="vp-num" aria-hidden="true">
            01
          </span>

          <div className="ml-10 sm:ml-12">
            <div className="flex items-baseline gap-4 flex-wrap mb-3">
              <span className="text-[1.52rem] sm:text-[1.7rem] font-light tracking-[0.16em] text-white/84">
                見やすさ
              </span>
              <span className="text-[0.62rem] tracking-[0.2em] text-white/20 font-light pb-[2px]">
                CLARITY
              </span>
            </div>

            <div className="flex flex-col gap-[5px] mb-3">
              <div className="vp-line vp-line--strong" />
              <div className="vp-line vp-line--mid w-[76%]" />
              <div className="vp-line vp-line--thin w-[50%]" />
            </div>

            <p className="text-white/30 text-[0.67rem] tracking-[0.13em] leading-[1.9]">
              情報が探しやすく、
              <br />
              迷わず読み進められる画面へ。
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="relative mb-10">
          <span className="vp-num" aria-hidden="true">
            02
          </span>

          <div className="ml-10 sm:ml-12">
            <div className="flex items-baseline gap-4 flex-wrap mb-3">
              <span className="text-[1.52rem] sm:text-[1.7rem] font-light tracking-[0.16em] text-white/84">
                雰囲気づくり
              </span>
              <span className="text-[0.62rem] tracking-[0.2em] text-white/20 font-light pb-[2px]">
                ATMOSPHERE
              </span>
            </div>

            <div className="flex gap-[10px] items-stretch mb-3">
              <div className="vp-goldbar" aria-hidden="true" />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div className="vp-goldline vp-goldline--strong" />
                <div className="vp-goldline vp-goldline--mid w-[68%]" />
                <div className="vp-goldline vp-goldline--thin w-[44%]" />
              </div>
            </div>

            <p className="text-white/30 text-[0.67rem] tracking-[0.13em] leading-[1.9]">
              業種やサービスに合った、
              <br />
              空気感のある印象へ。
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="relative">
          <span className="vp-num" aria-hidden="true">
            03
          </span>

          <div className="ml-10 sm:ml-12">
            <div className="flex items-baseline gap-4 flex-wrap mb-3">
              <span className="text-[1.52rem] sm:text-[1.7rem] font-light tracking-[0.16em] text-white/84">
                一貫した制作
              </span>
              <span className="text-[0.62rem] tracking-[0.2em] text-white/20 font-light pb-[2px]">
                CONSISTENCY
              </span>
            </div>

            <div className="flex gap-[6px] mb-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex-1 h-[1.5px] vp-line vp-line--mid" />
              ))}
            </div>

            <p className="text-white/30 text-[0.67rem] tracking-[0.13em] leading-[1.9]">
              ご相談から公開まで、
              <br />
              安心して進められる形へ。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="philo-section aq-root">
      <div className="relative mx-auto max-w-4xl px-6">
        {/* ✅ 上の小ラベル：SEO用にWeb制作は残すが、カテゴリ列挙は削る */}
        <p className="philo-kicker aq-fade delay-1">
          Web制作（印象設計）の考え方
        </p>

        <div className="philo-gold-line aq-fade delay-1" />

        <h2 className="philo-title aq-fade delay-1" translate="no">
          DESIGN POLICY
        </h2>

        <p className="philo-sub aq-fade delay-1">
          ― 制作で大切にしていること ―
        </p>

        {/* PC */}
        <div className="hidden sm:block">
          <p className="philo-lead aq-fade delay-2">
            大切にしているのは、
            <br />
            <span className="text-white/95">
              見やすく、伝わりやすく、安心して見てもらえること。
            </span>
            <br />
            そのうえで、写真や言葉の雰囲気が自然に伝わることを目指しています。
          </p>

          <p className="philo-body aq-fade delay-3">
            Webサイトは、見た目が整っているだけでなく、
            <br />
            初めて訪れた方にも内容が伝わりやすく、
            <span className="text-white/90">不安なく読み進めてもらえること</span>
            が大切だと考えています。
            <br />
            <br />
            写真や文章の見え方を整えながら、全体をすっきりまとめ、
            <span className="text-white/90">信頼につながる印象</span>
            を作っていきます。
            <br />
            <br />
            派手さよりも、きちんとして見えること、伝わること。
            <br />
            そして「ここなら相談しやすそう」と思ってもらえることを大切にしています。
          </p>

          <VisualPrinciples />

          <p className="philo-last aq-fade delay-8">
            <span className="text-white/95">
              見やすさと印象の両方を整え、
              <br />
              魅力がきちんと伝わるサイトを。
            </span>
            <br />
            <span className="text-white/80">
              「お願いしやすい」と感じてもらえることも大切にしています。
            </span>
          </p>
        </div>

        {/* SP */}
        <div className="block sm:hidden">
          <p className="philo-lead aq-fade delay-2">
            大切にしているのは、
            <br />
            <span className="text-white/95">
              見やすく、
              <br />
              伝わりやすく、
              <br />
              安心して見てもらえること。
            </span>
            <br />
            <br />
            そのうえで、
            <br />
            写真や言葉の雰囲気が
            <br />
            自然に伝わることを
            <br />
            目指しています。
          </p>

          <p className="philo-body aq-fade delay-3">
            Webサイトは、
            <br />
            見た目が整っているだけでなく、
            <br />
            初めて訪れた方にも
            <br />
            内容が伝わりやすく、
            <br />
            不安なく見てもらえることが大切です。
            <br />
            <br />
            写真や文章の見え方を整えながら、
            <br />
            全体をすっきりまとめ、
            <span className="text-white/90">信頼につながる印象</span>
            を作っていきます。
            <br />
            <br />
            派手さよりも、
            <br />
            きちんとして見えること。
            <br />
            そして、
            <br />
            「ここなら相談しやすそう」と
            <br />
            思ってもらえることを
            <br />
            大切にしています。
          </p>

          <VisualPrinciples />

          <p className="philo-last aq-fade delay-8">
            <span className="text-white/95">
              見やすさと印象の両方を整え、
              <br />
              魅力がきちんと伝わるサイトを。
            </span>
            <br />
            <span className="text-white/80">
              「お願いしやすい」と
              <br />
              感じてもらえることも
              <br />
              大切にしています。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}