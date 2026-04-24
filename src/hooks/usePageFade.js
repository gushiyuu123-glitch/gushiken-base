// src/hooks/usePageFade.js
import { useEffect } from "react";

/**
 * usePageFade
 * - .aq-fade / .aq-show 前提
 * - blur なし
 * - random delay なし
 * - scope 内だけ監視可能
 * - observer leak 防止
 * - reduced-motion 対応
 *
 * @param {string} selector
 * @param {Object} options
 * @param {React.RefObject<HTMLElement>|HTMLElement|Document|null} options.scope
 *   querySelectorAll の探索範囲。未指定なら document。
 * @param {Element|null} options.root
 *   IntersectionObserver の root。スクロールコンテナ監視用。
 * @param {number|number[]} options.threshold
 * @param {string} options.rootMargin
 * @param {boolean} options.once
 * @param {boolean} options.reset
 */
export default function usePageFade(
  selector = ".aq-fade",
  {
    scope = null,
    root = null,
    threshold = 0.14,
    rootMargin = "0px 0px -10% 0px",
    once = true,
    reset = false,
  } = {}
) {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const resolveTarget = (target, fallback) => {
      if (!target) return fallback;
      if ("current" in target) return target.current || fallback;
      return target;
    };

    const searchScope = resolveTarget(scope, document);
    const observerRoot = resolveTarget(root, null);

    if (!searchScope || !("querySelectorAll" in searchScope)) {
      return undefined;
    }

    const elements = Array.from(searchScope.querySelectorAll(selector));

    if (!elements.length) return undefined;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("aq-show"));
      return undefined;
    }

    if (reset) {
      elements.forEach((el) => el.classList.remove("aq-show"));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.add("aq-show");
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove("aq-show");
          }
        });
      },
      {
        root: observerRoot instanceof Element ? observerRoot : null,
        threshold,
        rootMargin,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector, scope, root, threshold, rootMargin, once, reset]);
}