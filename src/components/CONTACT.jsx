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
    <section ref={sectionRef} id="contact" className="contact-section aq-fade">
      <div className="contact-container">

        {/* 金ライン */}
        <div className="contact-gold-line"></div>

        {/* タイトル */}
        <h2 className="contact-title aq-fade delay-1" translate="no">
          CONTACT
        </h2>

        {/* リード */}
        <p className="contact-lead aq-fade delay-2">
          「まず相談だけ」でも大丈夫です。<br />
          お店の雰囲気や、なんとなくのイメージだけでも構いません。<br />
          世界観・目的・構成を一緒に整理しながら、最適な形をご提案します。
        </p>

        {/* CTA */}
        <div className="contact-cta aq-fade delay-3">
          <a href="/contact" className="contact-btn">
            お問い合わせフォームへ
          </a>
        </div>

        {/* サブ導線 */}
        <div className="contact-sub-links aq-fade delay-4">
          <p className="contact-sub-title">
            もっと気軽に相談したい方へ
          </p>

          <a
            href="https://line.me/ti/p/gD5Aj8QPPJ"
            className="contact-sub-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINEで気軽に相談する →
          </a>

          <p className="contact-sub-note">
            ※ まだ形になっていないアイデアでも大丈夫です。  
          </p>
        </div>

        {/* 注意 */}
        <p className="contact-footer aq-fade delay-5">
          ※ ご相談内容は秘密厳守で扱いますのでご安心ください。
        </p>
      </div>
    </section>
  );
}
