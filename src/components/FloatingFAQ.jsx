// src/components/FloatingFAQ.jsx
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
    (el) => {
      if (el.closest("[inert]")) return false;
      if (el.closest('[aria-hidden="true"]')) return false;
      return el.getClientRects().length > 0;
    }
  );
}

function restoreScrollInstant(scrollY, scrollX = 0) {
  if (typeof window === "undefined") return;

  window.scrollTo({
    top: scrollY,
    left: scrollX,
    behavior: "auto",
  });
}

function focusWithoutScroll(el) {
  if (!el || typeof el.focus !== "function") return;

  if (typeof window === "undefined" || typeof document === "undefined") {
    el.focus();
    return;
  }

  const x = window.scrollX || document.documentElement.scrollLeft || 0;
  const y = window.scrollY || document.documentElement.scrollTop || 0;

  try {
    el.focus({ preventScroll: true });
  } catch {
    el.focus();
    restoreScrollInstant(y, x);
  }
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  );
}

function isCoarsePointer() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
}

function getLenisLike() {
  if (typeof window === "undefined") return null;

  const api = window.__gd_lenis__;

  if (api?.lenis) return api.lenis;
  if (api?.scrollTo || api?.stop || api?.start) return api;

  return null;
}

export default function FloatingFAQ({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const wrapRef = useRef(null);
  const panelRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const firstQuestionRef = useRef(null);

  const location = useLocation();

  const closePanel = useCallback((restoreFocus = false) => {
    setIsOpen(false);
    setActiveIndex(null);

    // iOS / タッチ端末はフォーカス移動でジャンプ・固まりが出やすいので戻さない
    if (restoreFocus && !isCoarsePointer()) {
      requestAnimationFrame(() => {
        focusWithoutScroll(toggleButtonRef.current);
      });
    }
  }, []);

  const openPanel = useCallback(() => {
    setIsOpen(true);
    setActiveIndex(null);
  }, []);

  const toggleItem = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  // ルート変更時に閉じる
  useEffect(() => {
    closePanel(false);
  }, [location.pathname, closePanel]);

  // Lenis がいる場合は、FAQを開いている間だけ背景スクロールを止める
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const lenis = getLenisLike();
    if (!lenis) return undefined;
    if (!isOpen) return undefined;

    try {
      lenis.stop?.();
    } catch {
      // noop
    }

    return () => {
      try {
        lenis.start?.();
      } catch {
        // noop
      }
    };
  }, [isOpen]);

  // スマホで開いた時、背景スクロール固定
  useLayoutEffect(() => {
    if (!isOpen) return undefined;
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return undefined;

    const html = document.documentElement;
    const body = document.body;

    const scrollY = window.scrollY || html.scrollTop || 0;
    const scrollX = window.scrollX || html.scrollLeft || 0;

    const previousHtmlOverflow = html.style.overflow;
    const previousHtmlScrollBehavior = html.style.scrollBehavior;

    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyWidth = body.style.width;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyScrollBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    html.style.overflow = "hidden";

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      html.style.scrollBehavior = "auto";
      body.style.scrollBehavior = "auto";

      html.style.overflow = previousHtmlOverflow;

      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.width = previousBodyWidth;
      body.style.overflow = previousBodyOverflow;

      restoreScrollInstant(scrollY, scrollX);

      requestAnimationFrame(() => {
        html.style.scrollBehavior = previousHtmlScrollBehavior;
        body.style.scrollBehavior = previousBodyScrollBehavior;
      });
    };
  }, [isOpen]);

  // 外側クリックで閉じる
  useEffect(() => {
    if (!isOpen) return undefined;

    const handler = (event) => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      if (!wrap.contains(event.target)) {
        closePanel(false);
      }
    };

    document.addEventListener("pointerdown", handler, { capture: true });

    return () => {
      document.removeEventListener("pointerdown", handler, { capture: true });
    };
  }, [isOpen, closePanel]);

  // Escで閉じる
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      closePanel(true);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closePanel]);

  // 開いたら最初の質問へ。タッチ端末ではやらない
  useEffect(() => {
    if (!isOpen) return undefined;
    if (isCoarsePointer()) return undefined;

    const raf = requestAnimationFrame(() => {
      focusWithoutScroll(firstQuestionRef.current);
    });

    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  // フォーカストラップ
  useEffect(() => {
    if (!isOpen) return undefined;

    const panel = panelRef.current;
    if (!panel) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== "Tab") return;

      const focusables = getFocusable(panel);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        focusWithoutScroll(last);
        return;
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        focusWithoutScroll(first);
      }
    };

    panel.addEventListener("keydown", onKeyDown);

    return () => {
      panel.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const panelProps = useMemo(() => {
    const props = {
      "data-open": isOpen ? "true" : "false",
      "data-reduced": prefersReducedMotion() ? "true" : "false",
    };

    // ✅ Reactでは boolean属性の inert に空文字を渡さない
    // 閉じている時だけ inert=true / aria-hidden=true
    // 開いている時は属性ごと消す
    if (!isOpen) {
      props["aria-hidden"] = "true";
      props.inert = true;
    }

    return props;
  }, [isOpen]);

  return (
    <div
      ref={wrapRef}
      className="floating-faq-wrap"
      data-open={isOpen ? "true" : "false"}
      data-variant={variant}
    >
      <button
        type="button"
        className={`floating-faq-backdrop ${isOpen ? "is-open" : ""}`}
        aria-label="FAQを閉じる"
        onClick={() => closePanel(true)}
      />

      <div
        ref={panelRef}
        id="floating-faq-panel"
        className={`floating-faq-panel ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal={isOpen ? "true" : undefined}
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
                  ご依頼前の不安を、整理します。
                </p>
              </div>

              <button
                type="button"
                className="floating-faq-close"
                onClick={() => closePanel(true)}
                aria-label="FAQを閉じる"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="floating-faq-list" role="list">
            {faqData.map((item, index) => {
              const expanded = activeIndex === index;

              return (
                <div
                  key={item.question}
                  className={`floating-faq-item ${
                    expanded ? "is-active" : ""
                  }`}
                  role="listitem"
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
              onClick={() => closePanel(false)}
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
        onClick={isOpen ? () => closePanel(true) : openPanel}
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