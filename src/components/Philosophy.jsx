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
          ABOUT DESIGN
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
          ― 大切にしていること ―
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
            そのために、文字の見やすさや余白の取り方、
            <br />
            情報の見せ方まで丁寧に整えながら、
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

          <div className="mt-14 space-y-5">
            <div className="aq-fade delay-4">
              <h3 className="philo-subtitle">見やすさ</h3>
              <p className="philo-subtext">
                情報を整理し、
                <br />
                初めて訪れた方にも内容が伝わりやすい形に整えます。
              </p>
            </div>

            <div className="aq-fade delay-5">
              <h3 className="philo-subtitle">雰囲気づくり</h3>
              <p className="philo-subtext">
                業種やブランドに合った印象を大切にしながら、
                <br />
                落ち着きのある画面に仕上げます。
              </p>
            </div>

            <div className="aq-fade delay-6">
              <h3 className="philo-subtitle">一貫した制作</h3>
              <p className="philo-subtext">
                デザインだけでなく実装まで含めて、
                <br />
                全体の印象がぶれないよう丁寧にまとめています。
              </p>
            </div>
          </div>

          <p className="philo-last aq-fade delay-7">
            <span className="text-white/95">
              伝わりやすく、印象に残り、安心して見られるサイトを。
            </span>
            <br />
            <span className="text-white/80">
              ご相談いただく方にとって、
              <br />
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
            情報の見せ方まで丁寧に整えながら、
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

          <div className="mt-12 space-y-5">
            <div className="aq-fade delay-4">
              <h3 className="philo-subtitle">見やすさ</h3>
              <p className="philo-subtext">
                情報を整理し、
                <br />
                内容が伝わりやすい形に整えます。
              </p>
            </div>

            <div className="aq-fade delay-5">
              <h3 className="philo-subtitle">雰囲気づくり</h3>
              <p className="philo-subtext">
                業種やブランドに合った印象を大切にし、
                <br />
                落ち着きのある画面に仕上げます。
              </p>
            </div>

            <div className="aq-fade delay-6">
              <h3 className="philo-subtitle">一貫した制作</h3>
              <p className="philo-subtext">
                デザインから実装まで、
                <br />
                全体の印象がぶれないようまとめています。
              </p>
            </div>
          </div>

          <p className="philo-last aq-fade delay-7">
            <span className="text-white/95">
              伝わりやすく、
              <br />
              印象に残り、
              <br />
              安心して見られるサイトを。
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