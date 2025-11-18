import React, { useEffect, useRef } from "react";
import "./about.css";

export default function About() {
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
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        about-section 
        opacity-0 translate-y-10
        transition-all duration-[1200ms]
        ease-[cubic-bezier(.25,.46,.45,.94)]
      "
    >
      <div className="max-w-4xl mx-auto px-6 relative">

        {/* 左の細金ライン */}
        <div className="about-gold-line"></div>

        {/* タイトル */}
        <h2
          className="text-[2.4rem] tracking-[0.22em] text-white font-light mb-14 pl-1"
          translate="no"
        >
          ABOUT
        </h2>

        {/* 導入文 */}
        <p className="about-lead">
          美しさは偶然ではありません。<br />
          光の方向、余白の緊張、配置の呼吸——  
          それらが整ったとき、画面は「作品」へと変わります。
        </p>

        {/* 世界観コンセプト */}
        <p className="about-body">
          私は、デザインを単なる制作物ではなく、  
          “空気をつくる行為” だと考えています。  
          情報を並べるのではなく、世界観を設計する。<br />
          見た瞬間に心が動く。  
          その「一瞬の体験」こそが、デザインの本質だと思っています。
        </p>

        {/* 制作者紹介 */}
        <div className="mb-16">
          <h3 className="about-name" translate="no">Gushiken Yuto</h3>
          <p className="about-text">
            Designer / Front-end Creator  
            沖縄を拠点に、世界観を重視したブランドサイトを制作しています。<br />
            写真、レイアウト、アニメーションを総合して  
            “空気のあるデザイン” を生み出すことを得意としています。
          </p>
        </div>

        {/* 制作スタイル */}
        <div className="space-y-8 mb-20">
          <div>
            <h4 className="about-style-title">・余白と整列を徹底する</h4>
            <p className="about-style-text">
              画面に存在する全てのライン・距離に理由をつくり、  
              デザイン全体の“秩序”を統一します。
            </p>
          </div>

          <div>
            <h4 className="about-style-title">・世界観と写真の整合性を最優先</h4>
            <p className="about-style-text">
              配色・光の方向・質感を揃えることで、  
              ブランドの空気を損なわずに伝えます。
            </p>
          </div>

          <div>
            <h4 className="about-style-title">・アニメーションは最小で美しく</h4>
            <p className="about-style-text">
              必要以上に動かさず、「深呼吸する画面」を意識して設計します。
            </p>
          </div>

          <div>
            <h4 className="about-style-title">・デザインとコードを一体で考える</h4>
            <p className="about-style-text">
              レイアウト・演出・技術の接続性から逆算して、  
              破綻のない美しい UI を構築します。
            </p>
          </div>
        </div>

        {/* ラスト → 遅れて浮上 */}
        <p className="about-last">
          あなたのブランドを、美しく設計します。
        </p>
      </div>
    </section>
  );
}
