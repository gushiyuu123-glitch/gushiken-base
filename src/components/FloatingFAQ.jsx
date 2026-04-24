import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faqData } from "../data/faqData";
import "./floating-faq.css";

function getFocusable(container) {
  if (!container) return [];

  const selectors = [
    'a[href]:not([tabindex="-1"])',
    'button:not([disabled]):not([tabindex="-1"])',
    'textarea:not([disabled]):not([tabindex="-1"])',
    'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])',
    'select:not([disabled]):not([tabindex="-1"])',
    '[tabindex]:not([tabindex="-1"])',
  ];

  return Array.from(container.querySelectorAll(selectors.join(","))).filter(
    (el) => !el.hasAttribute("inert")
  );
}

export default function FloatingFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const wrapRef = useRef(null);
  const panelRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const firstQuestionRef = useRef(null);

  const location = useLocation();

  const closePanel = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // ルート変更時に閉じる
  useEffect(() => {
    closePanel();
  }, [location.pathname]);

  // 外側クリックで閉じる
  useEffect(() => {
    if (!isOpen) return;

    const handler = (event) => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      if (!wrap.contains(event.target)) {
        closePanel();
      }
    };

    document.addEventListener("pointerdown", handler, { capture: true });

    return () => {
      document.removeEventListener("pointerdown", handler, { capture: true });
    };
  }, [isOpen]);

  // Escで閉じる
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      closePanel();
      toggleButtonRef.current?.focus();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // 開いたら最初の質問へ
  useEffect(() => {
    if (!isOpen) return;

    const raf = requestAnimationFrame(() => {
      firstQuestionRef.current?.focus();
    });

    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  // フォーカストラップ
  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    if (!panel) return;

    const onKeyDown = (event) => {
      if (event.key !== "Tab") return;

      const focusables = getFocusable(panel);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", onKeyDown);

    return () => {
      panel.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const panelProps = useMemo(() => {
    return {
      "data-open": isOpen ? "true" : "false",
      inert: isOpen ? undefined : "",
      "aria-hidden": isOpen ? "false" : "true",
    };
  }, [isOpen]);

  return (
    <div ref={wrapRef} className="floating-faq-wrap">
      <div
        ref={panelRef}
        id="floating-faq-panel"
        className={`floating-faq-panel ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal={isOpen ? "true" : "false"}
        aria-labelledby="floating-faq-title"
        {...panelProps}
      >
        <div className="floating-faq-panel-inner">
          <div className="floating-faq-head">
            <p className="floating-faq-label">FAQ / SUPPORT</p>

            <div className="floating-faq-head-row">
              <div>
                <p id="floating-faq-title" className="floating-faq-title">
                  よくあるご質問
                </p>
                <p className="floating-faq-subtitle">
                  ご依頼前の不安を、静かに整理します。
                </p>
              </div>

              <button
                type="button"
                className="floating-faq-close"
                onClick={() => {
                  closePanel();
                  toggleButtonRef.current?.focus();
                }}
                aria-label="FAQを閉じる"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="floating-faq-list">
            {faqData.map((item, index) => {
              const expanded = activeIndex === index;

              return (
                <div
                  key={item.question}
                  className={`floating-faq-item ${expanded ? "is-active" : ""}`}
                >
                  <button
                    ref={index === 0 ? firstQuestionRef : null}
                    type="button"
                    className="floating-faq-question"
                    onClick={() => toggleItem(index)}
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="floating-faq-question-text">
                      {item.question}
                    </span>

                    <span className="floating-faq-icon" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="floating-faq-answer-wrap"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="floating-faq-answer-inner">
                      <p className="floating-faq-answer">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="floating-faq-footer">
            <p className="floating-faq-note">
              掲載していない内容は、お問い合わせフォームよりご相談ください。
            </p>

            <Link
              to="/contact"
              className="floating-faq-link"
              onClick={closePanel}
            >
              <span>お問い合わせへ</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <button
        ref={toggleButtonRef}
        type="button"
        className={`floating-faq-toggle ${isOpen ? "is-open" : ""}`}
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-controls="floating-faq-panel"
        aria-haspopup="dialog"
        aria-label={isOpen ? "FAQを閉じる" : "FAQを開く"}
      >
        <span className="floating-faq-toggle-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            className="floating-faq-toggle-svg"
            fill="none"
          >
            <circle cx="12" cy="12" r="8.5" />
            <path d="M9.9 9.2a2.35 2.35 0 0 1 4.2 1.45c0 1.55-1.6 2.02-2.1 2.75-.22.32-.28.62-.28 1.1" />
            <circle cx="12" cy="17.1" r="0.7" fill="currentColor" stroke="none" />
          </svg>
        </span>

        <span className="floating-faq-toggle-text">FAQ</span>
      </button>
    </div>
  );
}