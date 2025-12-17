import React, { useEffect, useRef } from "react";
import "./footer.css";

export default function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="
        footer-section
        opacity-0 translate-y-10
        transition-all duration-[1200ms]
        ease-[cubic-bezier(.25,.46,.45,.94)]
        bg-[#0b0b0b]
        border-t border-white/10
        pt-16 pb-10
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col md:flex-row
          justify-between
          items-start md:items-center
          gap-10 md:gap-6
        "
      >
        {/* ─ 左：ブランドロゴ＆ロケーション ─ */}
        <div>
          <h3
            className="text-white text-xl tracking-[0.18em] font-light mb-2"
            translate="no"
          >
            GUSHIKEN DESIGN
          </h3>
          <p className="text-white/40 text-sm tracking-wide">
            Okinawa, Japan
          </p>
        </div>

        {/* ─ 中央：ミニマルナビ ─ */}
        <nav
          className="
            flex flex-col md:flex-row
            gap-3 md:gap-9
            text-sm tracking-[0.10em]
          "
        >
          <a href="/#works"      className="footer-link">WORKS</a>
          <a href="/#philosophy" className="footer-link">PHILOSOPHY</a>
          <a href="/#about"      className="footer-link">ABOUT</a>
          <a href="/#price"      className="footer-link">PRICE</a>
          <a href="/#contact"    className="footer-link">CONTACT</a>
        </nav>

        {/* ─ 右：SNS + 法務リンク ─ */}
        <div className="flex flex-col items-start gap-4">
          {/* SNS */}
          <div className="flex items-center gap-6">
            <a href="#" className="footer-sns" translate="no">
              Instagram
            </a>
            <a href="#" className="footer-sns" translate="no">
              X (Twitter)
            </a>
          </div>

          {/* 下層ページ（LEGAL / TERMS / REFUND） */}
          <div className="flex flex-col gap-1 mt-2 text-xs tracking-[0.15em]">
            <a href="/legal"  className="text-white/40 hover:text-white/80 transition-colors">
              特商法表記
            </a>
            <a href="/terms"  className="text-white/40 hover:text-white/80 transition-colors">
              利用規約
            </a>
            <a href="/refund" className="text-white/40 hover:text-white/80 transition-colors">
              返金規約
            </a>
            <a href="/privacy" className="footer-link">PRIVACY</a>

          </div>
          <p className="footer-project-label mb-1">
  EXPERIMENTAL PROJECT
</p>
<a
  href="https://quiet-ai.gushiken.design/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-project-link"
  translate="no"
>
  Quiet AI Image Library
</a>

        </div>
        
      </div>

      {/* ─ コピーライト ─ */}
      <p
        className="
          text-center text-white/30
          text-[0.75rem]
          tracking-[0.15em]
          mt-10
        "
        translate="no"
      >
        © 2025 GUSHIKEN DESIGN — All Rights Reserved.
      </p>
    </footer>
  );
}
