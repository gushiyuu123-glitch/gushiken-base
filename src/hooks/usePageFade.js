// src/hooks/usePageFade.js
import { useEffect } from "react";

/**
 * usePageFade
 * - IntersectionObserver ベースの軽量フェード
 * - GSAP 風 start 指定も数値指定も両対応
 */
export default function usePageFade(
  selector,
  {
    y = 16,
    blur = false,
    duration = 0.8,
    ease = "ease-out", // CSS用に正規化
    start = 85,        // 85 = 画面下から15%入ったら
  } = {}
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    // ---- start の正規化 ----
    // "top 85%" → 85
    let startPercent = start;
    if (typeof start === "string") {
      const match = start.match(/(\d+)%/);
      if (match) startPercent = Number(match[1]);
    }

    const rootMargin = `0px 0px -${100 - startPercent}% 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;

          el.style.transition = `
            opacity ${duration}s ${ease},
            transform ${duration}s ${ease},
            filter ${duration}s ${ease}
          `;

          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.filter = "blur(0px)";

          observer.unobserve(el);
        });
      },
      { rootMargin }
    );

    elements.forEach((el) => {
      // ---- 初期状態（FOUC防止）----
      el.style.opacity = "0";
      el.style.transform = `translateY(${y}px)`;
      el.style.willChange = "opacity, transform, filter";
      if (blur) el.style.filter = "blur(4px)";

      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector, y, blur, duration, ease, start]);
}
