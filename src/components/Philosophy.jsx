import React from "react";
import "./philosophy.css";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="
        philo-section aq-fade
        bg-[#0b0b0b]
      "
    >
      <div className="max-w-4xl mx-auto px-6 relative">

        {/* 左ライン（装飾） */}
        <div className="philo-gold-line aq-fade delay-1"></div>

        {/* タイトル */}
        <h2
          className="
            aq-fade delay-1
            text-[2.6rem]
            tracking-[0.20em]
            text-white
            font-light
            mb-10
            pl-1
          "
        >
          PHILOSOPHY
        </h2>

        {/* 導入文 */}
        <p className="philo-lead aq-fade delay-2">
          デザインは、“情報を美しく整理すること”だと考えています。<br />
          派手な演出よりも、自然に理解できる設計を大切にしています。
        </p>

        {/* 本文 */}
        <p className="philo-body aq-fade delay-3">
          ただ情報を並べただけでは魅力は伝わりません。<br />
          文字の強弱、写真の余白、視線の流れ。<br />
          そのひとつひとつが重なり合うことで、世界観が立ち上がります。<br /><br />

          特別なテクニックではなく、基本を丁寧に整えること。<br />
          それが「見やすさ」と「美しさ」を両立させる鍵だと考えています。
        </p>

        {/* 三原則 */}
        <div className="space-y-5 mt-14">

          <div className="aq-fade delay-4">
            <h3 className="philo-subtitle">1. Order（秩序）</h3>
            <p className="philo-subtext">
              情報の優先順位を整え、迷わず読める導線をつくります。
            </p>
          </div>

          <div className="aq-fade delay-5">
            <h3 className="philo-subtitle">2. Tension（緊張）</h3>
            <p className="philo-subtext">
              わずかな“間”やコントラストが、画面にリズムと表情を与えます。
            </p>
          </div>

          <div className="aq-fade delay-6">
            <h3 className="philo-subtitle">3. Silence（静寂）</h3>
            <p className="philo-subtext">
              余白はただの空白ではなく、印象を整える大切な要素です。
            </p>
          </div>

        </div>

        {/* 締め */}
        <p className="philo-last aq-fade delay-7">
          見やすく、心地よく、長く愛されるデザインを。<br />
          その思いを軸に、ひとつひとつ丁寧に制作しています。
        </p>

      </div>
    </section>
  );
}
