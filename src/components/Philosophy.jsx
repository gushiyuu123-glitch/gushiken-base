import React from "react";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./philosophy.css";

const PRINCIPLES = [
  {
    number: "01",
    title: "見やすさ",
    en: "CLARITY",
    type: "clarity",
    text: (
      <>
        必要な情報が自然に目に入り、
        <br />
        迷わず読み進められる画面へ。
      </>
    ),
  },
  {
    number: "02",
    title: "印象づくり",
    en: "ATMOSPHERE",
    type: "atmosphere",
    text: (
      <>
        写真・色・余白の温度を合わせ、
        <br />
        サービスの魅力が伝わる空気へ。
      </>
    ),
  },
  {
    number: "03",
    title: "相談への流れ",
    en: "FLOW",
    type: "flow",
    text: (
      <>
        不安を減らし、問い合わせまで
        <br />
        無理なく進める導線へ。
      </>
    ),
  },
];

function PrincipleVisual({ type }) {
  if (type === "atmosphere") {
    return (
      <div className="vp-visual vp-visual--atmosphere" aria-hidden="true">
        <span className="vp-goldbar" />
        <div className="vp-lines">
          <span className="vp-goldline vp-goldline--strong" />
          <span className="vp-goldline vp-goldline--mid" />
          <span className="vp-goldline vp-goldline--thin" />
        </div>
      </div>
    );
  }

  if (type === "flow") {
    return (
      <div className="vp-visual vp-visual--flow" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className="vp-visual vp-visual--clarity" aria-hidden="true">
      <span className="vp-line vp-line--strong" />
      <span className="vp-line vp-line--mid" />
      <span className="vp-line vp-line--thin" />
    </div>
  );
}

function VisualPrinciples() {
  return (
    <div className="philo-principles aq-fade delay-6">
      <div className="philo-principles-inner">
        <div className="vp-axis" aria-hidden="true" />

        <p className="philo-principles-label">DESIGN IN PRACTICE</p>

        <div className="philo-principles-list">
          {PRINCIPLES.map((item) => (
            <article key={item.number} className="vp-item">
              <span className="vp-num" aria-hidden="true">
                {item.number}
              </span>

              <div className="vp-content">
                <div className="vp-heading">
                  <h3>{item.title}</h3>
                  <p>{item.en}</p>
                </div>

                <PrincipleVisual type={item.type} />

                <p className="vp-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="philo-section aq-root">
      <div className="philo-container">
        <div className="philo-side-line aq-fade delay-1" aria-hidden="true" />

        {/* HEADER */}
        <header className="philo-header aq-fade delay-1">
          <SectionSvgTitle
            title="POLICY"
            sub="DESIGN POLICY"
            className="philo-svg-title"
          />

          <p className="philo-sub">制作で大切にしていること</p>
        </header>

        {/* BODY */}
        <div className="philo-copy">
          <p className="philo-lead aq-fade delay-2">
            良いWebサイトは、派手さだけで選ばれません。
            <br />
            <span>
              見やすく、伝わりやすく、安心して相談できること。
            </span>
            <br />
            その土台があってこそ、写真や言葉の雰囲気が自然に届くと考えています。
          </p>

          <p className="philo-body aq-fade delay-3">
            Webサイトを見る人は、最初からじっくり読んでくれるとは限りません。
            <br />
            だからこそ、情報の順序・余白・文字量・写真の見え方を整え、
            <span>何をしているのか、誰に向いているのか</span>が自然に伝わる状態を目指します。
            <br />
            <br />
            見た目をきれいにするだけではなく、読み手の不安を減らし、
            <span>信頼と問い合わせにつながる流れ</span>まで整えることを大切にしています。
          </p>

          <VisualPrinciples />

          <p className="philo-last aq-fade delay-8">
            <span>
              見やすさと印象の両方を整え、
              <br />
              魅力がきちんと伝わるサイトを。
            </span>
            <br />
            <em>
              「ここなら相談しやすそう」と感じてもらえることも、
              制作の大切な役割だと考えています。
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}