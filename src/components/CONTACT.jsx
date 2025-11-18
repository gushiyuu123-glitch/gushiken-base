import React, { useEffect, useRef } from "react";
import "./contact.css";

export default function Contact() {
  const sectionRef = useRef(null);

  // ✨ フェードイン
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-container">

        {/* 左ゴールドライン */}
        <div className="contact-gold-line"></div>

        {/* タイトル */}
        <h2 className="contact-title" translate="no">CONTACT</h2>

        {/* リード */}
        <p className="contact-lead">
          制作のご相談・お見積りは、下記よりお問い合わせください。<br />
          小さな内容でも構いません。まずはアイデアをお聞かせください。
        </p>

        {/* メールボックス */}
        <div className="contact-box">
          <p className="contact-box-label">メールでのお問い合わせ：</p>

          <a
            href="mailto:gushikendesign@gmail.com"
            className="contact-mail"
            translate="no"
          >
            gushikendesign@gmail.com
          </a>

          <p className="contact-box-note">
            ※ 通常 24 時間以内にご返信いたします。<br />
            ※ 迷惑メールフォルダに入る場合がありますのでご確認ください。
          </p>
        </div>
        {/* フッター */}
        <p className="contact-footer">
          ※ ご相談内容は秘密厳守にて取り扱います。
        </p>

      </div>
    </section>
  );
}
