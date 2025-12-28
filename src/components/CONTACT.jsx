import React, { useEffect, useRef } from "react";
import "./contact.css";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        el.classList.add("aq-show");
        el.querySelectorAll(".aq-fade").forEach((item) => {
          item.classList.add("aq-show");
        });

        io.unobserve(el);
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section aq-fade"
    >
      <div className="contact-container">

        {/* 金ライン */}
        <div className="contact-gold-line" />

        {/* タイトル */}
        <h2 className="contact-title aq-fade delay-1" translate="no">
          CONTACT
        </h2>

        {/* リード */}
        <p className="contact-lead aq-fade delay-2">
          このサイトの雰囲気や考え方に、<br />
          少しでも共感いただけた方へ。
        </p>

        {/* サブリード */}
        <p className="contact-lead-sub aq-fade delay-3">
          まだ整理しきれていなくても構いません。<br />
          大まかなイメージや目的があれば十分です。
        </p>


        {/* CTA */}
        <div className="contact-cta aq-fade delay-3">
          <a href="/contact" className="contact-btn">
            お問い合わせフォームへ
          </a>
        </div>


        {/* サブ導線 */}
        <div className="contact-sub-links aq-fade delay-5">
          <a
            href="https://line.me/ti/p/gD5Aj8QPPJ"
            className="contact-sub-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINEで軽く相談する →
          </a>
        </div>

        {/* フッター注意 */}
        <p className="contact-footer aq-fade delay-6">
          ※ 内容によっては対応できない場合があります。
        </p>

      </div>
    </section>
  );
}
