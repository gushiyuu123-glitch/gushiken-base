import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./contact.css";

const STARTERS = [
  "まだ内容が決まっていない",
  "予算の目安を知りたい",
  "どんなサイトが合うか相談したい",
  "今のサイトをリニューアルしたい",
  "見え方や印象を整えたい",
];

function ContactVisual() {
  return (
    <div className="contact-visual contact-reveal contact-reveal-4" data-contact-reveal>
      <p className="contact-visual-label">こんな段階から</p>

      <div className="contact-starter-list">
        {STARTERS.map((text, index) => (
          <div
            key={text}
            className="contact-starter-row"
            style={{ "--starter-index": index }}
          >
            <span className="contact-starter-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p>{text}</p>

            <span className="contact-starter-check" aria-hidden="true">
              ✓
            </span>
          </div>
        ))}
      </div>

      <div className="contact-visual-note">
        <span aria-hidden="true" />
        <p>まだ具体的でなくても、大丈夫です。</p>
        <span aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll("[data-contact-reveal]"));

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
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">
        <div
          className="contact-side-line contact-reveal contact-line-reveal contact-reveal-1"
          data-contact-reveal
          aria-hidden="true"
        />

        <header
          className="contact-header contact-reveal contact-reveal-1"
          data-contact-reveal
        >
          <SectionSvgTitle
            title="CONTACT"
            sub="CONTACT / REQUEST"
            className="contact-svg-title"
          />

          <h2 id="contact-heading" className="contact-hidden-heading">
            お問い合わせ
          </h2>

          <p className="contact-section-title">お問い合わせ / CONTACT FORM</p>
        </header>

        <div className="contact-intro">
          <p
            className="contact-lead contact-reveal contact-reveal-2"
            data-contact-reveal
          >
            このサイトの方向性が、
            <br />
            <span>あなたのサービスに合いそうなら。</span>
          </p>

          <p
            className="contact-lead-sub contact-reveal contact-reveal-3"
            data-contact-reveal
          >
            まだ内容が固まっていなくても大丈夫です。
            <br />
            要点はこちらで整理しながら、無理のない形で進めます。
          </p>
        </div>

        <ContactVisual />

        <div
          className="contact-actions contact-reveal contact-reveal-5"
          data-contact-reveal
        >
          <Link to="/contact" className="contact-btn">
            <span>お問い合わせはこちら</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p
          className="contact-footer contact-reveal contact-reveal-6"
          data-contact-reveal
        >
          ※ 時期や内容により、開始時期のご相談をお願いする場合があります。
          <br />
          その際も、できるだけ丁寧にご案内いたします。
        </p>
      </div>
    </section>
  );
}