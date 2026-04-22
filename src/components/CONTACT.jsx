import React, { useEffect, useRef } from "react";
import "./contact.css";

const STARTERS = [
  "「まだ内容が決まっていないけど…」",
  "「予算の目安が知りたい」",
  "「どんなサイトが合うか知りたい」",
  "「今のサイトをリニューアルしたい」",
  "「見え方を整えたい」",
];

function ContactVisual() {
  return (
    <div className="aq-fade delay-4 mb-8 sm:mb-10">
      <p className="text-white/28 text-[0.7rem] sm:text-[0.72rem] tracking-[0.2em] mb-5 uppercase">
        ― こんな段階から ―
      </p>

      <div
        className="rounded-[4px] overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {STARTERS.map((text, i) => (
          <div
            key={text}
            className="flex items-center justify-between px-5 py-[13px]"
            style={{
              borderBottom:
                i < STARTERS.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
            }}
          >
            <span className="text-white/34 text-[0.72rem] sm:text-[0.74rem] tracking-[0.11em] leading-[1.65] text-left">
              {text}
            </span>

            {/* ✓ は白じゃなく “銀寄せ” */}
            <span
              className="text-[0.68rem] tracking-[0.08em] ml-4 flex-shrink-0"
              style={{ color: "rgba(220,226,235,0.40)" }}
            >
              ✓
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-[18px]">
        <div
          className="flex-1 h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <p className="text-white/24 text-[0.66rem] sm:text-[0.68rem] tracking-[0.14em] whitespace-nowrap">
          まだ具体的でなくても、大丈夫です。
        </p>
        <div
          className="flex-1 h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      </div>
    </div>
  );
}

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
        <div className="contact-gold-line" />

        <div className="contact-content">
          <h2 className="contact-title aq-fade delay-1" translate="no">
            CONTACT
          </h2>

          {/* PC */}
          <div className="hidden sm:block">
            <p className="contact-lead aq-fade delay-2">
              このサイトの方向性が
              <span className="text-white/95">合いそうなら。</span>
            </p>

            <p className="contact-lead-sub aq-fade delay-3">
              まだ内容が固まっていなくても大丈夫です。
              <br />
              要点はこちらで整理しながら、無理のない形で進めます。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p className="contact-lead aq-fade delay-2">
              このサイトの方向性が
              <br />
              <span className="text-white/95">合いそうなら。</span>
            </p>

            <p className="contact-lead-sub aq-fade delay-3">
              まだ内容が固まっていなくても
              <br />
              大丈夫です。
              <br />
              <br />
              要点はこちらで整理しながら、
              <br />
              無理のない形で
              <br />
              進めます。
            </p>
          </div>

          {/* ── Visual ── */}
          <ContactVisual />

          <div className="contact-actions aq-fade delay-5">
            <a href="/contact" className="contact-btn">
              お問い合わせはこちら
            </a>
          </div>

          {/* PC */}
          <div className="hidden sm:block">
            <p className="contact-footer aq-fade delay-6">
              ※ 時期や内容により、開始時期のご相談をお願いする場合があります。
              <br />
              その際も、できるだけ丁寧にご案内いたします。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p className="contact-footer aq-fade delay-6">
              ※ 時期や内容により
              <br />
              開始時期のご相談を
              <br />
              お願いする場合があります。
              <br />
              <br />
              その際も、
              <br />
              できるだけ丁寧に
              <br />
              ご案内いたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}