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
      <div className="relative mx-auto max-w-4xl px-6">
        {/* SEO極薄リード */}
        <p
          className="
            mb-6
            select-none
            text-[0.7rem]
            tracking-[0.14em]
            text-white/25
          "
        >
          美容・EC・店舗・サロン向けWebデザインの制作方針
        </p>

        {/* 左ライン */}
        <div className="philo-gold-line aq-fade delay-1"></div>

        {/* タイトル */}
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
          PHILOSOPHY
        </h2>

        {/* サブタイトル */}
        <p
          className="
            aq-fade delay-1
            mb-10 pl-1
            text-[0.9rem]
            tracking-[0.12em]
            text-white/60
          "
        >
          ― 制作の考え方 ―
        </p>

        {/* =====================
            PC
        ===================== */}
        <div className="hidden sm:block">
          <p className="philo-lead aq-fade delay-2">
            私が大切にしているのは、
            <br />
            <span className="text-white/95">
              「見やすさ」と「伝わりやすさ」を軸にしたデザインです。
            </span>
            <br />
            美容・EC・店舗・サロンなど、
            <br />
            業種ごとの空気感を大切にしながら、
            <strong className="text-white/90">
              安心して読み進められる構造
            </strong>
            を整えています。
          </p>

          <p className="philo-body aq-fade delay-3">
            デザインは、ただ整って見えれば良いわけではありません。
            <br />
            タイトルの強弱、行間、余白、視線の流れ。
            <br />
            そうした細部を丁寧に積み重ねることで、
            <span className="text-white/90">
              サービスの魅力や価値が自然に伝わる設計
            </span>
            が生まれると考えています。
            <br />
            <br />
            派手さよりも、読み手が迷わず理解できること。
            <br />
            そして、
            <span className="text-white/90">
              見た人が「ちゃんとしている」と感じられること。
            </span>
            <br />
            それが、信頼につながるWebデザインの土台だと思っています。
          </p>

          <div className="mt-14 space-y-5">
            <div className="aq-fade delay-4">
              <h3 className="philo-subtitle">1. Order（秩序）</h3>
              <p className="philo-subtext">
                情報の優先順位を整え、
                <br />
                初めて訪れた人でも迷わず理解できる構造をつくります。
              </p>
            </div>

            <div className="aq-fade delay-5">
              <h3 className="philo-subtitle">2. Tension（緊張）</h3>
              <p className="philo-subtext">
                文字・余白・光のリズムを微調整し、
                <br />
                画面に品のある集中感をつくります。
              </p>
            </div>

            <div className="aq-fade delay-6">
              <h3 className="philo-subtitle">3. Silence（静けさ）</h3>
              <p className="philo-subtext">
                余白は空白ではなく、
                <br />
                世界観と安心感を支えるための大切な要素です。
              </p>
            </div>
          </div>

          <p className="philo-last aq-fade delay-7">
            <span className="text-white/95">
              迷わず読めて、安心して選べるデザインを。
            </span>
            <br />
            <span className="text-white/80">
              「ここなら任せられそう」と思ってもらえるよう、
              <br />
              設計から丁寧につくり込んでいます。
            </span>
          </p>
        </div>

        {/* =====================
            SP
        ===================== */}
        <div className="block sm:hidden">
          <p className="philo-lead aq-fade delay-2">
            私が大切にしているのは、
            <br />
            <span className="text-white/95">
              「見やすさ」と
              <br />
              「伝わりやすさ」
            </span>
            を軸にしたデザインです。
            <br />
            <br />
            業種ごとの空気感を大切にしながら、
            <br />
            <strong className="text-white/90">
              安心して読み進められる構造
            </strong>
            を整えています。
          </p>

          <p className="philo-body aq-fade delay-3">
            デザインは、ただ整って見えれば
            <br />
            良いわけではありません。
            <br />
            <br />
            タイトルの強弱、行間、余白、
            <br />
            視線の流れ。
            <br />
            そうした細部を重ねることで、
            <span className="text-white/90">
              魅力や価値が自然に伝わる設計
            </span>
            が生まれると考えています。
            <br />
            <br />
            派手さよりも、
            <br />
            読み手が迷わず理解できること。
            <br />
            それが信頼につながる
            <br />
            デザインの土台だと思っています。
          </p>

          <div className="mt-12 space-y-5">
            <div className="aq-fade delay-4">
              <h3 className="philo-subtitle">1. Order（秩序）</h3>
              <p className="philo-subtext">
                情報の優先順位を整え、
                <br />
                迷わず理解できる構造をつくります。
              </p>
            </div>

            <div className="aq-fade delay-5">
              <h3 className="philo-subtitle">2. Tension（緊張）</h3>
              <p className="philo-subtext">
                文字・余白・光を微調整し、
                <br />
                品のある集中感をつくります。
              </p>
            </div>

            <div className="aq-fade delay-6">
              <h3 className="philo-subtitle">3. Silence（静けさ）</h3>
              <p className="philo-subtext">
                余白は空白ではなく、
                <br />
                世界観と安心感を支える要素です。
              </p>
            </div>
          </div>

          <p className="philo-last aq-fade delay-7">
            <span className="text-white/95">
              迷わず読めて、
              <br />
              安心して選べるデザインを。
            </span>
            <br />
            <span className="text-white/80">
              「ここなら任せられそう」と
              <br />
              思ってもらえるよう、
              <br />
              設計から丁寧につくり込んでいます。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}