// src/hooks/usePageFade.js
import { useEffect, useRef } from "react";

/**
 * usePageFade (Ultimate)
 * - .aq-fade / .aq-show 前提（showClass変更可）
 * - blurなし / random delayなし
 * - scope内だけ監視
 * - observer leak防止
 * - reduced-motion対応
 * - MutationObserver(任意)で動的DOM追加も拾う（取りこぼし防止）
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

    // extra
    showClass = "aq-show",
    observeMutations = true, // ←最強モード：後から追加される要素も拾う
    onEnter = null,
    onLeave = null,
  } = {}
) {
  const rafIdRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const resolveTarget = (target, fallback) => {
      if (!target) return fallback;
      if (typeof target === "object" && "current" in target) return target.current || fallback;
      return target;
    };

    const searchScope = resolveTarget(scope, document);
    const observerRoot = resolveTarget(root, null);

    if (!searchScope || typeof searchScope.querySelectorAll !== "function") {
      return undefined;
    }

    const isIOAvailable = "IntersectionObserver" in window;

    // 対象要素を拾う
    const pick = (base) => Array.from(base.querySelectorAll(selector));

    // class付与/剥奪をまとめる（微小だけど滑らか）
    const batch = (fn) => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = 0;
        fn();
      });
    };

    // reduced / IOなし → その場で全部表示
    const initial = pick(searchScope);
    if (!initial.length) return undefined;

    if (prefersReducedMotion || !isIOAvailable) {
      batch(() => {
        initial.forEach((el) => el.classList.add(showClass));
      });
      return undefined;
    }

    // reset 指定なら初期表示を剥がす
    if (reset) {
      initial.forEach((el) => el.classList.remove(showClass));
    }

    const observed = new WeakSet();

    const observeOne = (el, observer) => {
      if (!el || observed.has(el)) return;
      observed.add(el);
      observer.observe(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // まとめて処理（class操作を一気に）
        batch(() => {
          for (const entry of entries) {
            const el = entry.target;

            if (entry.isIntersecting) {
              el.classList.add(showClass);
              if (typeof onEnter === "function") onEnter(el, entry);

              if (once) observer.unobserve(el);
            } else if (!once) {
              el.classList.remove(showClass);
              if (typeof onLeave === "function") onLeave(el, entry);
            }
          }
        });
      },
      {
        root: observerRoot instanceof Element ? observerRoot : null,
        threshold,
        rootMargin,
      }
    );

    // 初期observe
    initial.forEach((el) => observeOne(el, observer));

    // 動的追加を拾う（任意）
    let mo = null;
    if (observeMutations && "MutationObserver" in window) {
      mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (!(node instanceof Element)) continue;

            // 追加されたノード自身が対象
            if (node.matches?.(selector)) observeOne(node, observer);

            // 追加ノード配下の対象も拾う
            const found = node.querySelectorAll?.(selector);
            if (found?.length) {
              found.forEach((el) => observeOne(el, observer));
            }
          }
        }
      });

      // scopeがDocumentでもElementでも動くように
      const moTarget =
        searchScope instanceof Document ? searchScope.documentElement : searchScope;

      if (moTarget) {
        mo.observe(moTarget, { childList: true, subtree: true });
      }
    }

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = 0;

      mo?.disconnect();
      observer.disconnect();
    };
  }, [
    selector,
    scope,
    root,
    threshold,
    rootMargin,
    once,
    reset,
    showClass,
    observeMutations,
    onEnter,
    onLeave,
  ]);
}