import React, { useEffect, useRef } from "react";
import "./contact.css";

const STARTERS = [
  "「まだ内容が決まっていないけど…」",
  "「予算の目安が知りたい」",
  "「どんなサイトが合うか相談したい」",
  "「今のサイトをリニューアルしたい」",
];

function ContactVisual() {
  return (
    <div className="aq-fade delay-4 mb-8 sm:mb-10">
      <p className="text-white/18 text-[0.58rem] tracking-[0.26em] mb-5 uppercase">
        ― こんなご相談から ―
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
            <span className="text-white/30 text-[0.68rem] sm:text-[0.7rem] tracking-[0.12em] leading-[1.6] text-left">
              {text}
            </span>
            <span className="text-white/30 text-[0.62rem] tracking-[0.08em] ml-4 flex-shrink-0">
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
        <p className="text-white/20 text-[0.6rem] tracking-[0.16em] whitespace-nowrap">
          まだ検討段階でも、お気軽にご相談ください。
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
              このサイトの雰囲気や考え方に
              <span className="text-white/95">共感してくださった方へ。</span>
            </p>

            <p className="contact-lead-sub aq-fade delay-3">
              まだ内容が固まっていなくても大丈夫です。
              <br />
              ご希望や目的を伺いながら、合う形を一緒に整えていきます。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p className="contact-lead aq-fade delay-2">
              このサイトの雰囲気や考え方に
              <br />
              <span className="text-white/95">共感してくださった方へ。</span>
            </p>

            <p className="contact-lead-sub aq-fade delay-3">
              まだ内容が固まっていなくても
              <br />
              大丈夫です。
              <br />
              <br />
              ご希望や目的を伺いながら、
              <br />
              合う形を一緒に
              <br />
              整えていきます。
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
              ※ 内容やスケジュールによっては、お受けできない場合があります。
              <br />
              その際も、できるだけ丁寧にご案内いたします。
            </p>
          </div>

          {/* SP */}
          <div className="block sm:hidden">
            <p className="contact-footer aq-fade delay-6">
              ※ 内容やスケジュールによっては
              <br />
              お受けできない場合があります。
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