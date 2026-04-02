import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { faqData } from "../data/faqData";
import "./floating-faq.css";

export default function FloatingFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const items = useMemo(() => faqData, []);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="floating-faq-wrap">
      <div className={`floating-faq-panel ${isOpen ? "is-open" : ""}`}>
        <div className="floating-faq-panel-inner">
          <div className="floating-faq-head">
            <p className="floating-faq-label">FAQ</p>
            <p className="floating-faq-title">よくあるご質問</p>
          </div>

          <div className="floating-faq-list">
            {items.map((item, index) => {
              const expanded = activeIndex === index;

              return (
                <div
                  key={item.question}
                  className={`floating-faq-item ${expanded ? "is-active" : ""}`}
                >
                  <button
                    type="button"
                    className="floating-faq-question"
                    onClick={() => toggleItem(index)}
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{item.question}</span>
                    <span className="floating-faq-icon">{expanded ? "−" : "+"}</span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="floating-faq-answer-wrap"
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

            <Link to="/contact" className="floating-faq-link">
              お問い合わせへ
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`floating-faq-toggle ${isOpen ? "is-open" : ""}`}
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-label={isOpen ? "FAQを閉じる" : "FAQを開く"}
      >
        <span className="floating-faq-toggle-text">FAQ</span>
      </button>
    </div>
  );
}