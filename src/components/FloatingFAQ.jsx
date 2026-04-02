import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faqData } from "../data/faqData";
import "./floating-faq.css";

export default function FloatingFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const wrapRef = useRef(null);
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

    const handlePointerDown = (event) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      if (!wrap.contains(event.target)) {
        closePanel();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
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

  // 開いたら最初の質問へ
  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => {
      firstQuestionRef.current?.focus();
    }, 60);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return (
    <div ref={wrapRef} className="floating-faq-wrap">
      <div
        id="floating-faq-panel"
        className={`floating-faq-panel ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="floating-faq-panel-inner">
          <div className="floating-faq-head">
            <p className="floating-faq-label">FAQ</p>

            <div className="floating-faq-head-row">
              <p className="floating-faq-title">よくあるご質問</p>

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

            <Link
              to="/contact"
              className="floating-faq-link"
              onClick={closePanel}
            >
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
            <circle
              cx="12"
              cy="17.1"
              r="0.7"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </span>

        <span className="floating-faq-toggle-text">FAQ</span>
      </button>
    </div>
  );
}