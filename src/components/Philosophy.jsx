import React, { useEffect, useRef } from "react";
import "./philosophy.css";

export default function Philosophy() {
  const sectionRef = useRef(null);

  // ✨ フェードイン
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="
        philo-section
        opacity-0 translate-y-10
        transition-all duration-[1200ms]
        ease-[cubic-bezier(.25,.46,.45,.94)]
        bg-[#0b0b0b]
      "
    >
      <div className="max-w-4xl mx-auto px-6 relative">

        {/* 左ライン（装飾） */}
        <div className="philo-gold-line"></div>

        {/* タイトル */}
        <h2
          className="
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
        <p className="philo-lead">
          デザインは、“伝わる形に整えること”だと考えています。<br />
          むずかしい演出ではなく、見る人が自然に理解できる設計を大切にしています。
        </p>

        {/* 本文 */}
        <p className="philo-body">
          サイトは、情報を並べただけでは魅力が伝わりません。<br />
          文字の強弱、写真の余白、視線の流れ。<br />
          そのひとつひとつが積み重なることで、はじめて世界観が生まれます。<br /><br />

          特別なテクニックより、基本を丁寧に。<br />
          その姿勢が「見やすさ」と「美しさ」を両立させる鍵だと思っています。
        </p>

        {/* 三原則 */}
        <div className="space-y-5 mt-14">
          <div>
            <h3 className="philo-subtitle">1. Order（秩序）</h3>
            <p className="philo-subtext">
              情報の優先順位を整理し、迷わず読める導線をつくります。
            </p>
          </div>

          <div>
            <h3 className="philo-subtitle">2. Tension（緊張）</h3>
            <p className="philo-subtext">
              わずかな“間”やコントラストが、画面にリズムと表情を与えます。
            </p>
          </div>

          <div>
            <h3 className="philo-subtitle">3. Silence（静寂）</h3>
            <p className="philo-subtext">
              余白はただ空いている部分ではなく、印象を整える大切な要素です。
            </p>
          </div>
        </div>

        {/* 締めの言葉 */}
        <p className="philo-last">
          見やすく、心地よく、長く使えるデザインを。<br />
          その思いを軸に、ひとつひとつ丁寧に制作しています。
        </p>

      </div>
    </section>
  );
}
