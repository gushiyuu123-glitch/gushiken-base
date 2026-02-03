// src/hooks/usePageFade.js
import { useEffect } from "react";

/**
 * Silent UI Fade-in Hook（Noah Pro Edition）
 * - Safari/iOS の初期 transform バグ修正
 * - observer leak 防止
 * - delay オプション（自然な呼吸）
 */
export default function usePageFade(
  selector,
  {
    y = 16,
    blur = false,
    duration = 0.8,
    ease = "cubic-bezier(0.21, 0.8, 0.32, 1)", // 視覚的にもっと自然
    start = 85,
    delayRandom = false,       // ← 追加
    delayMax = 180,            // ランダム最大（ms）
  } = {}
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    // ---------------------------
    // start の正規化
    // ---------------------------
    let startPercent = start;
    if (typeof start === "string") {
      const match = start.match(/(\d+)%/);
      if (match) startPercent = Number(match[1]);
    }

    const rootMargin = `0px 0px -${100 - startPercent}% 0px`;

    // ---------------------------
    // Observer
    // ---------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;

          // ---------------------------
          // ランダム Delay（自然な呼吸）
          // ---------------------------
          const delayValue = delayRandom
            ? Math.random() * delayMax
            : 0;

          el.style.transition = `
            opacity ${duration}s ${ease},
            transform ${duration}s ${ease},
            filter ${duration}s ${ease}
          `;

          el.style.transitionDelay = `${delayValue}ms`;

          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.filter = "blur(0px)";

          observer.unobserve(el);
        });
      },
      { rootMargin }
    );

    // ---------------------------
    // 初期状態を統一（Safari対策）
    // ---------------------------
    elements.forEach((el) => {
      el.style.opacity = "0";

      // Safari は translateY の初期値が反映されないバグがあるため強制 reflow
      el.style.transform = `translateY(${y}px)`;
      void el.offsetHeight; // reflow（重要）

      el.style.willChange = "opacity, transform, filter";

      if (blur) el.style.filter = "blur(4px)";
      observer.observe(el);
    });

    // ---------------------------
    // クリーンアップ（確実に破棄）
    // ---------------------------
    return () => {
      observer.disconnect();
    };
  }, [selector, y, blur, duration, ease, start, delayRandom, delayMax]);
}
