import React, { useEffect, useRef } from "react";
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
    <div className="philo-principles">
      <div className="philo-principles-inner">
        <div className="vp-axis" aria-hidden="true" />

        <p className="philo-principles-label philo-principle-reveal">
          DESIGN IN PRACTICE
        </p>

        <div className="philo-principles-list">
          {PRINCIPLES.map((item, index) => (
            <article
              key={item.number}
              className="vp-item philo-principle-reveal"
              style={{ "--vp-index": index }}
            >
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(
      root.querySelectorAll(".philo-flow, .philo-principles")
    );

    const reveal = (target) => {
      target.classList.add("is-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="philo-section">
      <div className="philo-container">
        <div
          className="philo-side-line philo-flow philo-flow-line philo-flow-1"
          aria-hidden="true"
        />

        <header className="philo-header philo-flow philo-flow-1">
          <SectionSvgTitle
            title="POLICY"
            sub="DESIGN POLICY"
            className="philo-svg-title"
          />

          <p className="philo-sub">制作で大切にしていること</p>
        </header>

        <div className="philo-copy">
          <p className="philo-lead philo-flow philo-flow-2">
            良いWebサイトは、派手さだけで選ばれません。
            <br />
            <span>
              見やすく、伝わりやすく、安心して相談できること。
            </span>
            <br />
            その土台があってこそ、写真や言葉の雰囲気が自然に届くと考えています。
          </p>

          <p className="philo-body philo-flow philo-flow-3">
            Webサイトを見る人は、最初からじっくり読んでくれるとは限りません。
            <br />
            だからこそ、情報の順序・余白・文字量・写真の見え方を整え、
            <span>何をしているのか、誰に向いているのか</span>
            が自然に伝わる状態を目指します。
            <br />
            <br />
            見た目をきれいにするだけではなく、読み手の不安を減らし、
            <span>信頼と問い合わせにつながる流れ</span>
            まで整えることを大切にしています。
          </p>

          <div className="philo-flow philo-flow-4">
            <VisualPrinciples />
          </div>

          <p className="philo-last philo-flow philo-flow-5">
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