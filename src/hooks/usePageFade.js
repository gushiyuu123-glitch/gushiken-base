// src/hooks/usePageFade.js
import { useEffect } from "react";

/**
 * usePageFade
 * - aq-fade / aq-show 前提
 * - blur なし
 * - random delay なし
 * - scope 内だけ監視可能
 * - observer leak 防止
 */
export default function usePageFade(
  selector = ".aq-fade",
  {
    root = null,
    threshold = 0.14,
    rootMargin = "0px 0px -10% 0px",
    once = true,
    reset = false,
  } = {}
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scope =
      root && "current" in root ? root.current : root instanceof Element ? root : document;

    if (!scope) return;

    const elements = Array.from(scope.querySelectorAll(selector));
    if (!elements.length) return;

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
        root: null,
        threshold,
        rootMargin,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector, root, threshold, rootMargin, once, reset]);
}