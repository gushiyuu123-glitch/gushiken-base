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
          <h2 className="contact-title aq-fade delay-1" translate="no">
            CONTACT
          </h2>

          {/* PC */}
          <div className="hidden sm:block">
            <p className="contact-lead aq-fade delay-2">
              このサイトの雰囲気に
              <span className="text-white/95">少しでも合いそう</span>
              と感じていただけた方へ。
            </p>

            <p className="contact-lead-sub aq-fade delay-3">
              まだ内容が固まっていなくても大丈夫です。
              <br />
              「こんな雰囲気にしたい」くらいの段階からご相談いただけます。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p className="contact-lead aq-fade delay-2">
              このサイトの雰囲気に
              <br />
              <span className="text-white/95">
                少しでも合いそう
              </span>
              と感じていただけた方へ。
            </p>

            <p className="contact-lead-sub aq-fade delay-3">
              まだ内容が固まっていなくても
              <br />
              大丈夫です。
              <br />
              <br />
              「こんな雰囲気にしたい」
              <br />
              くらいの段階から
              <br />
              ご相談いただけます。
            </p>
          </div>

          <div className="contact-actions aq-fade delay-4">
            <a href="/contact" className="contact-btn">
              お問い合わせフォームへ
            </a>
          </div>

          {/* PC */}
          <div className="hidden sm:block">
            <p className="contact-footer aq-fade delay-5">
              ※ 内容やスケジュールによっては、お受けできない場合があります。
              <br />
              その際も、できるだけ丁寧にお返事いたします。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p className="contact-footer aq-fade delay-5">
              ※ 内容やスケジュールによっては
              <br />
              お受けできない場合があります。
              <br />
              <br />
              その際も、
              <br />
              できるだけ丁寧にお返事いたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}