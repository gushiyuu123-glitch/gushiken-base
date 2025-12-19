import React, { useEffect, useRef } from "react";
import "./footer.css";

export default function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("aq-show");
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="
        footer-section
        aq-section
        bg-[#0b0b0b]
        border-t border-white/10
        pt-16 pb-10
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-1 md:grid-cols-3
          gap-12
        "
      >
        {/* ブランド */}
        <div>
          <h3 className="text-white text-xl tracking-[0.18em] font-light mb-2" translate="no">
            GUSHIKEN DESIGN
          </h3>
          <p className="text-white/40 text-sm tracking-wide">
            Okinawa, Japan
          </p>
        </div>

        {/* ナビ */}
        <nav className="flex flex-col gap-3 text-sm tracking-[0.14em]">
          <a href="/#works" className="footer-link">WORKS</a>
          <a href="/#philosophy" className="footer-link">PHILOSOPHY</a>
          <a href="/#about" className="footer-link">ABOUT</a>
          <a href="/#price" className="footer-link">PRICE</a>
          <a href="/#contact" className="footer-link">CONTACT</a>
        </nav>

        {/* プロジェクト + SNS + 法務 */}
        <div className="flex flex-col gap-4 text-sm tracking-[0.12em]">
          <div className="flex flex-col gap-2">
            <p className="footer-project-label">EXPERIMENTAL PROJECTS</p>

            <a
              href="https://quiet-ai.gushikendesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-project-link"
              translate="no"
            >
              Quiet AI Image Library
            </a>

            <a
              href="https://atelierquiet.gushikendesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-project-link"
              translate="no"
            >
              Minimal Website Templates
            </a>
          </div>

          <div className="flex items-center gap-6 mt-3">
            <a href="#" className="footer-sns" translate="no">Instagram</a>
            <a href="#" className="footer-sns" translate="no">X (Twitter)</a>
          </div>

          <div className="flex flex-col gap-1 mt-3 text-xs tracking-[0.15em]">
            <a href="/legal"  className="footer-legal">特商法表記</a>
            <a href="/terms"  className="footer-legal">利用規約</a>
            <a href="/refund" className="footer-legal">返金規約</a>
            <a href="/privacy" className="footer-legal">PRIVACY</a>
          </div>
        </div>
      </div>

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
