import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
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
  return Array.from(container.querySelectorAll(selectors.join(","))).filter((el) => {
    if (el.closest("[inert]")) return false;
    if (el.closest('[aria-hidden="true"]')) return false;
    return el.getClientRects().length > 0;
  });
}

function restoreScrollInstant(scrollY, scrollX = 0) {
  window.scrollTo({ top: scrollY, left: scrollX, behavior: "auto" });
}

function focusWithoutScroll(el) {
  if (!el || typeof el.focus !== "function") return;

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
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function FloatingFAQSP({ showAfter = 220 }) {
  const [isVisible, setIsVisible] = useState(false);
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
    if (restoreFocus) requestAnimationFrame(() => focusWithoutScroll(toggleButtonRef.current));
  }, []);

  const openPanel = useCallback(() => {
    setIsOpen(true);
    setActiveIndex(null);
  }, []);

  const toggleItem = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  // ✅ SPだけ表示（念のため。Homeで分岐してても保険になる）
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      if (!mq.matches) {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // route change → close
  useEffect(() => {
    closePanel(false);
  }, [location.pathname, location.search, closePanel]);

  // ✅ show/hide（Lenis対応）
  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = (y) => setIsVisible((y ?? window.scrollY) > showAfter);

    const lenis = window.__gd_lenis__;
    if (lenis && typeof lenis.on === "function") {
      let raf = 0;
      const onLenis = (e) => {
        const y = typeof e === "number" ? e : e?.scroll ?? e?.animatedScroll ?? window.scrollY;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => update(y));
      };

      update(window.scrollY);
      lenis.on("scroll", onLenis);
      return () => {
        if (raf) cancelAnimationFrame(raf);
        try { lenis.off?.("scroll", onLenis); } catch {}
      };
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update(window.scrollY);
        ticking = false;
      });
    };

    update(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  // ✅ Lenis：open中は stop（背景スクロール事故防止）
  useEffect(() => {
    const lenis = window.__gd_lenis__;
    if (!lenis) return;

    if (isOpen) {
      try { lenis.stop?.(); } catch {}
      return () => {
        try { lenis.start?.(); } catch {}
      };
    }
  }, [isOpen]);

  // ✅ SP：open中は body fixed（iOS系の背景スクロール事故を殺す）
  useLayoutEffect(() => {
    if (!isOpen) return;
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const body = document.body;

    const scrollY = window.scrollY || html.scrollTop || 0;
    const scrollX = window.scrollX || html.scrollLeft || 0;

    const prevHtmlOverflow = html.style.overflow;
    const prevHtmlScrollBehavior = html.style.scrollBehavior;

    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyLeft = body.style.left;
    const prevBodyRight = body.style.right;
    const prevBodyWidth = body.style.width;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyScrollBehavior = body.style.scrollBehavior;

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
      html.style.overflow = prevHtmlOverflow;

      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.left = prevBodyLeft;
      body.style.right = prevBodyRight;
      body.style.width = prevBodyWidth;
      body.style.overflow = prevBodyOverflow;

      restoreScrollInstant(scrollY, scrollX);

      requestAnimationFrame(() => {
        html.style.scrollBehavior = prevHtmlScrollBehavior;
        body.style.scrollBehavior = prevBodyScrollBehavior;
      });
    };
  }, [isOpen]);

  // outside click
  useEffect(() => {
    if (!isOpen) return;

    const handler = (event) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      if (!wrap.contains(event.target)) closePanel(false);
    };

    document.addEventListener("pointerdown", handler, { capture: true });
    return () => document.removeEventListener("pointerdown", handler, { capture: true });
  }, [isOpen, closePanel]);

  // esc
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      closePanel(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closePanel]);

  // focus first
  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => focusWithoutScroll(firstQuestionRef.current));
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  // focus trap
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
        focusWithoutScroll(last);
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        focusWithoutScroll(first);
      }
    };

    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const panelProps = useMemo(() => {
    return {
      "data-open": isOpen ? "true" : "false",
      "data-reduced": prefersReducedMotion() ? "true" : "false",
      "aria-hidden": !isOpen,
      ...(!isOpen ? { inert: true } : {}),
    };
  }, [isOpen]);

  // 表示されてない時は描画しない（余計なDOMを残さない）
  if (!isVisible) return null;

  return (
    <div
      ref={wrapRef}
      className="floating-faq-wrap"
      data-variant="sp"
      data-open={isOpen ? "true" : "false"}
    >
      {/* Backdrop（CSSで全画面化。タップで閉じる） */}
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
                <p className="floating-faq-subtitle">ご依頼前の不安を、整理します。</p>
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
                  className={`floating-faq-item ${expanded ? "is-active" : ""}`}
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
                    <span className="floating-faq-question-text">{item.question}</span>

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

            <Link to="/contact" className="floating-faq-link" onClick={() => closePanel(false)}>
              <span>お問い合わせへ</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Toggle（SPは左下固定。SHAREと干渉しない） */}
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