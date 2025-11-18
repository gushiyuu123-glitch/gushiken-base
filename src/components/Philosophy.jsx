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

        {/* 左ライン（ブランドの象徴） */}
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
          美しいものをつくることに、妥協はありません。<br />
          デザインの核心は年数ではなく、
          光・配置・余白に対する感覚だと考えています。
        </p>

        {/* 本文 */}
        <p className="philo-body">
          デザインは、情報を並べる行為ではなく、
          「空気」をつくる行為だと思っています。<br />
          光の方向、余白の緊張、配置の呼吸。
          それらが揃った瞬間、画面は作品へと変わる。<br />
          派手さではなく、静寂に美を宿す——
          その美しさこそ、人の感情を動かす力を持っています。
        </p>

        {/* 三原則 */}
        <div className="space-y-5 mt-14">
          <div>
            <h3 className="philo-subtitle">1. Order（秩序）</h3>
            <p className="philo-subtext">
              すべての配置に理由をつくり、画面に整合性を与える。
            </p>
          </div>

          <div>
            <h3 className="philo-subtitle">2. Tension（緊張）</h3>
            <p className="philo-subtext">
              わずかなズレと間隔が、視線の流れをつくり出す。
            </p>
          </div>

          <div>
            <h3 className="philo-subtitle">3. Silence（静寂）</h3>
            <p className="philo-subtext">
              余白に呼吸を与え、画面に深さと余韻を残す。
            </p>
          </div>
        </div>

        {/* 締めの言葉 → ゆっくり浮上 */}
        <p className="philo-last">美しさは偶然ではない。配置と光が、それを決める。</p>

      </div>
    </section>
  );
}
