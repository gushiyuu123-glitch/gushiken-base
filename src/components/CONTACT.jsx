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
  <div className="contact-gold-line" />

  <div className="contact-content">
        {/* タイトル */}
        <h2 className="contact-title aq-fade delay-1" translate="no">
          CONTACT
        </h2>
<p className="contact-lead aq-fade delay-2">
  このサイトの世界観や考え方に、少しでも合いそうだと感じていただけた方へ。
</p>

<p className="contact-lead-sub aq-fade delay-3">
  まだ内容が固まっていなくても問題ありません。<br />
  「こんな雰囲気にしたい」「こう見せたい」など、  
  大まかな方向性だけでもお送りください。
</p>

<div className="contact-actions aq-fade delay-3">
  <a href="/contact" className="contact-btn">
    お問い合わせフォームへ
  </a>
</div>

<p className="contact-footer aq-fade delay-5">
  ※ 内容やスケジュールによっては、対応が難しい場合があります。<br />
  その際も、必ず理由を添えて丁寧にお返事いたします。
</p>

</div>
      </div>
    </section>
  );
}
