import React from "react";
import "./philosophy.css";

function VisualPrinciples() {
  return (
    <div className="aq-fade delay-7 mt-8 mb-16 sm:mt-10 sm:mb-20">
      <div className="relative pl-6 sm:pl-8">
        {/* 全体をつなぐ縦軸 */}
        <div
          className="absolute left-[10px] top-[34px] bottom-[14px] w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.16), rgba(255,255,255,0.05) 68%, transparent)",
          }}
        />

        <p className="text-white/18 text-[0.6rem] tracking-[0.24em] mb-10 uppercase">
          ― DESIGN IN PRACTICE ―
        </p>

        {/* 01 */}
        <div className="relative mb-10">
          <span
            className="absolute left-[-6px] top-[2px] text-[2.8rem] sm:text-[3rem] font-extralight tracking-[0.06em] select-none"
            style={{ color: "rgba(255,255,255,0.055)", lineHeight: 1 }}
            aria-hidden="true"
          >
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
              <div
                className="h-[1.5px] w-full"
                style={{ background: "rgba(255,255,255,0.48)" }}
              />
              <div
                className="h-px w-[76%]"
                style={{ background: "rgba(255,255,255,0.16)" }}
              />
              <div
                className="h-px w-[50%]"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
            </div>

            <p className="text-white/30 text-[0.67rem] tracking-[0.13em] leading-[1.9]">
              情報の優先順位を整え、
              <br />
              初めての方にも迷わず伝わる画面へ。
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="relative mb-10">
          <span
            className="absolute left-[-6px] top-[2px] text-[2.8rem] sm:text-[3rem] font-extralight tracking-[0.06em] select-none"
            style={{ color: "rgba(255,255,255,0.055)", lineHeight: 1 }}
            aria-hidden="true"
          >
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
              <div
                className="w-[3px] rounded-[1px]"
                style={{ background: "rgba(201,169,110,0.88)" }}
              />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div
                  className="h-px w-full"
                  style={{ background: "rgba(201,169,110,0.34)" }}
                />
                <div
                  className="h-px w-[68%]"
                  style={{ background: "rgba(201,169,110,0.16)" }}
                />
                <div
                  className="h-px w-[44%]"
                  style={{ background: "rgba(201,169,110,0.08)" }}
                />
              </div>
            </div>

            <p className="text-white/30 text-[0.67rem] tracking-[0.13em] leading-[1.9]">
              色・写真・余白を整え、
              <br />
              ブランドらしさが自然に伝わる印象へ。
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="relative">
          <span
            className="absolute left-[-6px] top-[2px] text-[2.8rem] sm:text-[3rem] font-extralight tracking-[0.06em] select-none"
            style={{ color: "rgba(255,255,255,0.055)", lineHeight: 1 }}
            aria-hidden="true"
          >
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
                <div
                  key={i}
                  className="flex-1 h-[1.5px]"
                  style={{ background: "rgba(255,255,255,0.28)" }}
                />
              ))}
            </div>

            <p className="text-white/30 text-[0.67rem] tracking-[0.13em] leading-[1.9]">
              デザインから実装まで一貫して整え、
              <br />
              細部までぶれない仕上がりへ。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="
        philo-section aq-fade aq-root
        bg-[#0b0b0b]
      "
    >
      <div className="relative mx-auto max-w-4xl px-6">
        <p
          className="
            mb-6
            select-none
            text-[0.7rem]
            tracking-[0.14em]
            text-white/25
          "
        >
          美容・EC・店舗・サロン向けWebデザインについて
        </p>

        <div className="philo-gold-line aq-fade delay-1"></div>

        <h2
          className="
            aq-fade delay-1
            mb-3 pl-1
            text-[2.6rem]
            font-light
            tracking-[0.20em]
            text-white
          "
          translate="no"
        >
          DESIGN POLICY
        </h2>

        <p
          className="
            aq-fade delay-1
            mb-10 pl-1
            text-[0.9rem]
            tracking-[0.12em]
            text-white/60
          "
        >
          ― 制作で大切にしていること ―
        </p>

        {/* PC */}
        <div className="hidden sm:block">
          <p className="philo-lead aq-fade delay-2">
            大切にしているのは、
            <br />
            <span className="text-white/95">
              見やすく、伝わりやすく、安心して読めること。
            </span>
            <br />
            そのうえで、業種ごとの雰囲気や魅力が
            <br />
            自然に伝わるデザインを心がけています。
          </p>

          <p className="philo-body aq-fade delay-3">
            Webサイトは、見た目が整っているだけではなく、
            <br />
            初めて訪れた方にも内容が伝わりやすく、
            <span className="text-white/90">
              安心して読み進めてもらえること
            </span>
            が大切だと考えています。
            <br />
            <br />
            そのために、文字の見やすさ、余白の取り方、
            <br />
            情報の流れまで丁寧に整えながら、
            <span className="text-white/90">
              サービスやブランドの魅力が自然に伝わる形
            </span>
            を目指しています。
            <br />
            <br />
            派手に見せるよりも、
            <br />
            きちんとして見えること、伝わること、
            <br />
            そして「ここなら安心できそう」と感じてもらえること。
            <br />
            そうした印象の積み重ねを大切にしています。
          </p>

          <VisualPrinciples />

          <p className="philo-last aq-fade delay-8">
            <span className="text-white/95">
              見た目を整えるだけでなく、
              <br />
              ブランドの価値まできちんと伝わるサイトを。
            </span>
            <br />
            <span className="text-white/80">
              ご相談いただく方にとって、
              <br />
              「お願いしやすい」と感じてもらえる安心感も大切にしています。
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
              安心して読めること。
            </span>
            <br />
            <br />
            そのうえで、
            <br />
            業種ごとの雰囲気や魅力が
            <br />
            自然に伝わるデザインを心がけています。
          </p>

          <p className="philo-body aq-fade delay-3">
            Webサイトは、
            <br />
            見た目が整っているだけではなく、
            <br />
            初めて訪れた方にも
            <br />
            内容が伝わりやすいことが大切です。
            <br />
            <br />
            そのために、
            <br />
            文字の見やすさや余白の取り方、
            <br />
            情報の流れまで丁寧に整えながら、
            <span className="text-white/90">
              魅力が自然に伝わる形
            </span>
            を目指しています。
            <br />
            <br />
            派手さよりも、
            <br />
            きちんとして見えること。
            <br />
            そして、
            <br />
            「ここなら安心できそう」と
            <br />
            感じてもらえることを大切にしています。
          </p>

          <VisualPrinciples />

          <p className="philo-last aq-fade delay-8">
            <span className="text-white/95">
              見た目を整えるだけでなく、
              <br />
              ブランドの価値まで
              <br />
              きちんと伝わるサイトを。
            </span>
            <br />
            <span className="text-white/80">
              「お願いしやすい」と
              <br />
              感じてもらえる安心感も
              <br />
              大切にしています。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}