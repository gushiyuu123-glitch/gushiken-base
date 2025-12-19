// src/pages/Contact.jsx
import React, { useEffect, useRef } from "react";
import "./contact.css";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // セクション本体
            el.classList.add("aq-show");

            // 内側のフェード対象
            el.querySelectorAll(".aq-fade").forEach((item) => {
              item.classList.add("aq-show");
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section aq-section"
    >
      <div className="contact-container">

        {/* 中央ゴールドライン */}
        <div className="contact-gold-line aq-fade delay-1"></div>

        {/* タイトル */}
        <h2
          className="
            contact-title aq-fade delay-1
          "
          translate="no"
        >
          CONTACT
        </h2>

        {/* リード */}
        <p className="contact-lead aq-fade delay-2">
          制作のご相談・お見積りは、お問い合わせページより受け付けております。<br />
          小さな内容でも構いません。まずはアイデアをお聞かせください。
        </p>

        {/* CTA */}
        <div className="contact-cta aq-fade delay-3">
          <a href="/contact" className="contact-btn">
            お問い合わせページへ
          </a>
        </div>

        {/* サブ導線（LINE・電話） */}
        <div className="contact-sub-links aq-fade delay-4">
          <p className="contact-sub-title">その他のご連絡方法</p>

          <a
            href="https://line.me/ti/p/gD5Aj8QPPJ"
            className="contact-sub-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINEで相談する
          </a>
        </div>

        {/* 注意 */}
        <p className="contact-footer aq-fade delay-5">
          ※ ご相談内容は秘密厳守にて取り扱います。
        </p>
      </div>
    </section>
  );
}
