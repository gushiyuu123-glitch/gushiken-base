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
          デザインは、“見やすさと世界観のバランス”だと考えています。<br />
          光・余白・配置の関係を整えることで、情報は自然と伝わりやすくなります。
        </p>

        {/* 世界観コンセプト */}
        <p className="about-body">
          ただ装飾するのではなく、読み手がストレスなく理解できる構造をつくること。<br />
          その上で、写真・タイポグラフィ・レイアウトを組み合わせ、  
          ブランドの空気を丁寧に形にしていきます。<br /><br />
          「派手ではないのに、印象に残る」  
          そんなデザインを目指しています。
        </p>

        {/* 制作者紹介 */}
        <div className="mb-16">
          <h3 className="about-name" translate="no">Gushiken Yuto</h3>
          <p className="about-text">
            Designer / Front-end Creator<br />
            沖縄を拠点に、ブランドサイト・サロン・ショップなど  
            世界観を重視したデザイン制作を行っています。<br /><br />
            理解しやすい構成と、静かで深い印象を与えるビジュアル。  
            その両方を両立させるため、デザインとコーディングを一体で考えています。
          </p>
        </div>

        {/* 制作スタイル */}
        <div className="space-y-8 mb-20">

          <div>
            <h4 className="about-style-title">・整列と余白を丁寧に扱う</h4>
            <p className="about-style-text">
              情報の優先度に合わせて距離やレイアウトを調整し、
              ストレスなく読み進められる画面をつくります。
            </p>
          </div>

          <div>
            <h4 className="about-style-title">・世界観と写真の一貫性を大切に</h4>
            <p className="about-style-text">
              明るさ・色味・質感を揃えることで、ブランドの印象が太く伝わります。
            </p>
          </div>

          <div>
            <h4 className="about-style-title">・アニメーションは最小限で美しく</h4>
            <p className="about-style-text">
              動きすぎない“静かな演出”を意識し、サイト全体の空気を整えます。
            </p>
          </div>

          <div>
            <h4 className="about-style-title">・デザインと技術の接続まで意識</h4>
            <p className="about-style-text">
              コードで再現できる構造を前提に設計し、破綻のない UI に仕上げます。
            </p>
          </div>

        </div>

        {/* ラスト */}
        <p className="about-last">
          ブランドの“らしさ”を、美しく分かりやすく形にします。
        </p>
      </div>
    </section>
  );
}
