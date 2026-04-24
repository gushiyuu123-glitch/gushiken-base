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
    <div className="contact-visual aq-fade delay-4">
      <p className="contact-visual-label">こんな段階から</p>

      <div className="contact-starter-list">
        {STARTERS.map((text, index) => (
          <div key={text} className="contact-starter-row">
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
    const el = sectionRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        el.classList.add("aq-show");
        el.querySelectorAll(".aq-fade").forEach((item) => {
          item.classList.add("aq-show");
        });

        io.unobserve(el);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="contact-section aq-fade">
      <div className="contact-container">
        <div className="contact-side-line" aria-hidden="true" />

        {/* HEADER */}
        <header className="contact-header aq-fade delay-1">
          <SectionSvgTitle
            title="CONTACT"
            sub="CONTACT / REQUEST"
            className="contact-svg-title"
          />

          <p className="contact-section-title">お問い合わせ / CONTACT FORM</p>
        </header>

        {/* LEAD */}
        <div className="contact-intro">
          <p className="contact-lead aq-fade delay-2">
            このサイトの方向性が、
            <br />
            <span>あなたのサービスに合いそうなら。</span>
          </p>

          <p className="contact-lead-sub aq-fade delay-3">
            まだ内容が固まっていなくても大丈夫です。
            <br />
            要点はこちらで整理しながら、無理のない形で進めます。
          </p>
        </div>

        <ContactVisual />

        <div className="contact-actions aq-fade delay-5">
          <Link to="/contact" className="contact-btn">
            <span>お問い合わせはこちら</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="contact-footer aq-fade delay-6">
          ※ 時期や内容により、開始時期のご相談をお願いする場合があります。
          <br />
          その際も、できるだけ丁寧にご案内いたします。
        </p>
      </div>
    </section>
  );
}