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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // 外側クリックで閉じる（pointerdown一本化 + capture で取りこぼし防止）
  useEffect(() => {
    if (!isOpen) return;

    const handler = (event) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      if (!wrap.contains(event.target)) closePanel();
    };

    document.addEventListener("pointerdown", handler, { capture: true });
    return () => document.removeEventListener("pointerdown", handler, { capture: true });
  }, [isOpen]);

  // Esc で閉じる
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePanel();
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // 開いたら最初の質問へ（フォーカスの事故防止で rAF）
  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => {
      firstQuestionRef.current?.focus();
    });
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  // フォーカストラップ（最低限）
  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    if (!panel) return;

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;

      const focusables = getFocusable(panel);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const panelProps = useMemo(() => {
    // inert は閉じている時にフォーカス/クリックをブロックするため（aria-hidden だけより安全）
    return {
      "data-open": isOpen ? "true" : "false",
      inert: isOpen ? undefined : "",
      "aria-hidden": !isOpen,
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
            <p className="floating-faq-label">FAQ</p>

            <div className="floating-faq-head-row">
              <p id="floating-faq-title" className="floating-faq-title">
                よくあるご質問
              </p>

              <button
                type="button"
                className="floating-faq-close"
                onClick={() => {
                  closePanel();
                  toggleButtonRef.current?.focus();
                }}
                aria-label="FAQを閉じる"
              >
                ×
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
                    <span>{item.question}</span>
                    <span className="floating-faq-icon" aria-hidden="true">
                      {expanded ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="floating-faq-answer-wrap"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="floating-faq-answer">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="floating-faq-footer">
            <p className="floating-faq-note">
              掲載していない内容は、お問い合わせフォームよりご相談ください。
            </p>

            <Link to="/contact" className="floating-faq-link" onClick={closePanel}>
              お問い合わせへ
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
          <svg viewBox="0 0 24 24" className="floating-faq-toggle-svg" fill="none">
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