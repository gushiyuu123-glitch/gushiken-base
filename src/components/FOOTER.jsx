import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const LOGO_SRC = "/logo-gd.png";

const MENU_LINKS = [
  { label: "WORKS", href: "/#works" },
  { label: "ABOUT", href: "/#about" },
  { label: "POLICY", href: "/#philosophy" },
  { label: "PRICE", href: "/#price" },
  { label: "CONTACT", href: "/#contact" },
];

const PROJECT_LINKS = [
  {
    label: "Quiet AI Image Library",
    href: "https://quiet-ai.gushikendesign.com/",
  },
  {
    label: "Minimal Website Templates",
    href: "https://atelierquiet.gushikendesign.com/",
  },
];

const LEGAL_LINKS = [
  { label: "特商法表記", to: "/legal" },
  { label: "利用規約", to: "/terms" },
  { label: "返金規約", to: "/refund" },
  { label: "PRIVACY", to: "/privacy" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-sns-icon">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" />
      <circle cx="12" cy="12" r="4.15" />
      <circle cx="17.2" cy="6.9" r="1.05" className="footer-sns-dot" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="footer-sns-icon footer-sns-icon--note"
    >
      <rect x="3.2" y="4.1" width="17.6" height="15.8" rx="3.2" />
      <path d="M7.2 15.8V8.2h2.1l3.8 5.1V8.2h2v7.6H13l-3.8-5.1v5.1z" />
      <path d="M6.6 18.3h10.8" className="footer-sns-note-line" />
    </svg>
  );
}

export default function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll("[data-footer-reveal]"));

    const reveal = (target) => {
      target.classList.add("is-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="footer-section"
      aria-label="サイトフッター"
    >
      <div
        className="footer-top-line footer-reveal footer-line-reveal"
        data-footer-reveal
        aria-hidden="true"
      />



      <div className="footer-container">
        <div className="footer-grid">
          {/* BRAND */}
          <section
            className="footer-brand footer-reveal footer-reveal-1"
            data-footer-reveal
            aria-label="GUSHIKEN DESIGN"
          >
            <Link
              to="/"
              className="footer-logo-link"
              aria-label="GUSHIKEN DESIGN ホームへ"
            >
              <span className="footer-logo-frame" aria-hidden="true">
                <img
                  src={LOGO_SRC}
                  alt=""
                  className="footer-logo"
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <span className="footer-brand-text">
                <span className="footer-brand-name" translate="no">
                  GUSHIKEN DESIGN
                </span>
                <span className="footer-brand-place" translate="no">
                  Web Design / Okinawa
                </span>
              </span>
            </Link>

            <p className="footer-brand-copy">
              沖縄を拠点に、
              <br />
              伝わり方まで整えるWeb制作を行っています。
            </p>

            <Link to="/layer0" className="footer-lab">
              HIDDEN LABORATORY
            </Link>
          </section>

          {/* MENU */}
          <nav
            className="footer-nav footer-reveal footer-reveal-2"
            data-footer-reveal
            aria-label="フッターメニュー"
          >
            <p className="footer-col-label">MENU</p>

            <div className="footer-link-list">
              {MENU_LINKS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="footer-link"
                  style={{ "--link-index": index }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* PROJECTS / SOCIAL / LEGAL */}
          <section
            className="footer-side footer-reveal footer-reveal-3"
            data-footer-reveal
            aria-label="関連リンク"
          >
            <div className="footer-projects">
              <p className="footer-col-label">EXPERIMENTAL PROJECTS</p>

              <div className="footer-project-list">
                {PROJECT_LINKS.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-project-link"
                    translate="no"
                    style={{ "--link-index": index }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-divider" aria-hidden="true" />

            <div className="footer-sns-row" aria-label="SNSリンク">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-sns footer-sns--with-icon"
                translate="no"
                aria-label="Instagramを開く"
                style={{ "--link-index": 0 }}
              >
                <span className="footer-sns-icon-wrap" aria-hidden="true">
                  <InstagramIcon />
                </span>
                <span className="footer-sns-label">Instagram</span>
              </a>

              <a
                href="https://note.com/noahgushi123"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-sns footer-sns--with-icon"
                translate="no"
                aria-label="noteを開く"
                style={{ "--link-index": 1 }}
              >
                <span className="footer-sns-icon-wrap" aria-hidden="true">
                  <NoteIcon />
                </span>
                <span className="footer-sns-label">note</span>
              </a>
            </div>

            <div className="footer-divider" aria-hidden="true" />

            <nav className="footer-legal-list" aria-label="法務リンク">
              {LEGAL_LINKS.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="footer-legal"
                  style={{ "--link-index": index }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>
        </div>

        {/* BOTTOM */}
        <div
          className="footer-bottom footer-reveal footer-reveal-4"
          data-footer-reveal
        >
          <p className="footer-guide-text">
            このサイトのデザインや文章は、
            <span>紹介・引用の範囲であれば歓迎しています。</span>
            <br />
            <em>無断転載・複製・再配布・商用利用はご遠慮ください。</em>
          </p>

          <p className="footer-copyright" translate="no">
            © 2025 GUSHIKEN DESIGN
          </p>
        </div>
      </div>
    </footer>
  );
}