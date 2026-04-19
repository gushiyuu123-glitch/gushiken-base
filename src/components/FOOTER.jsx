import React, { useEffect, useRef } from "react";
import "./footer.css";

export default function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("aq-show");
        observer.disconnect();
      },
      { threshold: 0.16 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="footer-section bg-[#0b0b0b]"
    >
      {/* ── トップアクセントライン ── */}
      <div className="footer-top-line" />

      <div className="max-w-6xl mx-auto px-6 pt-14 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ── ブランド ── */}
          <div>
            {/* 装飾マーク */}
            <div className="flex items-center gap-2 mb-[18px]">
              <div
                className="w-[18px] h-px"
                style={{ background: "rgba(201,169,110,0.45)" }}
              />
              <div
                className="w-[4px] h-[4px] rounded-full"
                style={{ background: "rgba(201,169,110,0.35)" }}
              />
            </div>

            <h3
              className="text-white text-xl tracking-[0.18em] font-light mb-[6px]"
              translate="no"
            >
              GUSHIKEN DESIGN
            </h3>

            <p className="text-white/35 text-[0.72rem] tracking-[0.12em] mb-5">
              Okinawa, Japan
            </p>

            <p className="text-white/28 text-[0.78rem] leading-[1.9] tracking-[0.04em] max-w-[18rem] mb-5">
              沖縄を拠点に、
              <br />
              伝わり方まで整えるWeb制作を行っています。
            </p>

            <a href="/layer0" className="footer-lab transition block">
              HIDDEN LABORATORY
            </a>
          </div>

          {/* ── ナビ ── */}
          <nav className="flex flex-col gap-3">
            <p className="footer-col-label">MENU</p>
            <a href="/#works"       className="footer-link">WORKS</a>
            <a href="/#about"       className="footer-link">ABOUT</a>
            <a href="/#philosophy"  className="footer-link">POLICY</a>
            <a href="/#price"       className="footer-link">PRICE</a>
            <a href="/#contact"     className="footer-link">CONTACT</a>
          </nav>

          {/* ── プロジェクト + SNS + 法務 ── */}
          <div className="flex flex-col gap-5 text-sm tracking-[0.12em]">
            <div className="flex flex-col gap-[10px]">
              <p className="footer-col-label">EXPERIMENTAL PROJECTS</p>
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

            <div className="w-full h-px bg-white/7" />

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-sns"
                translate="no"
              >
                Instagram
              </a>
              <a
                href="https://note.com/noahgushi123"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-sns"
                translate="no"
              >
                note
              </a>
            </div>

            <div className="w-full h-px bg-white/7" />

            <div className="flex flex-col gap-[6px] text-xs tracking-[0.14em]">
              <a href="/legal"   className="footer-legal">特商法表記</a>
              <a href="/terms"   className="footer-legal">利用規約</a>
              <a href="/refund"  className="footer-legal">返金規約</a>
              <a href="/privacy" className="footer-legal">PRIVACY</a>
            </div>
          </div>
        </div>

        {/* ── ボトム ── */}
        <div className="footer-bottom mt-12 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="footer-guide-text">
              このサイトのデザインや文章は、
              <span className="text-white/32">
                紹介・引用の範囲であれば歓迎しています。
              </span>
              <br />
              <span className="text-white/18">
                無断転載・複製・再配布・商用利用はご遠慮ください。
              </span>
            </p>
            <p
              className="footer-copyright whitespace-nowrap"
              translate="no"
            >
              © 2025 GUSHIKEN DESIGN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}