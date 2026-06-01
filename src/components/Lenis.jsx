import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisManager({
  enabled = true,
  lerp = 0.085,
  smoothWheel = true,
  anchors = true,
  stopInertiaOnNavigate = true,
  syncTouch = false, // PCでも基本false推奨
}) {
  const lenisRef = useRef(null);
  const tickRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // ✅ 二重起動ガード（StrictMode/devでも安全）
    if (lenisRef.current) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const coarse =
      window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

    // ✅ SP/reduce は完全OFF（あなたの方針に合わせる）
    if (reduce || coarse) return;

    const lenis = new Lenis({
      lerp,
      smoothWheel,
      anchors,
      stopInertiaOnNavigate,
      syncTouch,
    });

    lenisRef.current = lenis;

    // ScrollTrigger同期
    lenis.on("scroll", ScrollTrigger.update);

    // ✅ GSAP ticker で一元駆動（rAF二重駆動を防ぐ）
    const onTick = (time) => lenis.raf(time * 1000);
    tickRef.current = onTick;

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // ✅ 外部から触る窓口（必要なら残す）
    window.__gd_lenis__ = {
      instance: lenis,
      start: () => lenis.start(),
      stop: () => lenis.stop(),
      scrollToTop: (opts = {}) => lenis.scrollTo(0, { duration: 0.9, ...opts }),
      scrollTo: (target, opts = {}) => lenis.scrollTo(target, opts),
      destroy: () => {
        try {
          if (tickRef.current) gsap.ticker.remove(tickRef.current);
        } catch {}
        tickRef.current = null;
        try {
          lenis.destroy();
        } catch {}
        lenisRef.current = null;
        delete window.__gd_lenis__;
        ScrollTrigger.refresh(true);
      },
    };

    // ✅ refreshは“落ち着いてから1回”
    let cancelled = false;
    (async () => {
      try {
        if (document.fonts?.ready) await document.fonts.ready;
      } catch {}
      if (cancelled) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) ScrollTrigger.refresh(true);
        });
      });
    })();

    return () => {
      cancelled = true;

      try {
        if (tickRef.current) gsap.ticker.remove(tickRef.current);
      } catch {}
      tickRef.current = null;

      try {
        lenis.destroy();
      } catch {}
      lenisRef.current = null;

      // グローバル掃除
      try {
        delete window.__gd_lenis__;
      } catch {}

      ScrollTrigger.refresh(true);
    };
  }, [enabled, lerp, smoothWheel, anchors, stopInertiaOnNavigate, syncTouch]);

  return null;
}