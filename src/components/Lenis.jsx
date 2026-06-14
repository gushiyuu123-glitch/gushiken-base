// src/components/Lenis.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  const lenisRef = useRef(null);
  const tickRef = useRef(null);
  const refreshRafRef = useRef([]);

  const clearScheduledRefresh = () => {
    refreshRafRef.current.forEach((id) => cancelAnimationFrame(id));
    refreshRafRef.current = [];
  };

  const scheduleRefresh = (force = true) => {
    clearScheduledRefresh();

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        ScrollTrigger.refresh(force);
      });

      refreshRafRef.current.push(raf2);
    });

    refreshRafRef.current.push(raf1);
  };

  useEffect(() => {
    if (!enabled) return undefined;

    // StrictMode / dev の二重起動ガード
    if (lenisRef.current) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const coarse =
      window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

    // SP / reduce は完全OFF
    if (reduce || coarse) return undefined;

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

    // GSAP tickerでLenisを一元駆動
    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

    tickRef.current = onTick;
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // App.jsx / 各ページから触るためのグローバル窓口
    window.__gd_lenis__ = {
      // App側の getLenisLike() に合わせる
      lenis,
      instance: lenis,

      start: () => {
        try {
          lenis.start();
        } catch {}
      },

      stop: () => {
        try {
          lenis.stop();
        } catch {}
      },

      resize: () => {
        try {
          lenis.resize?.();
        } catch {}
      },

      scrollToTop: (opts = {}) => {
        try {
          lenis.scrollTo(0, {
            immediate: true,
            force: true,
            duration: 0,
            ...opts,
          });
        } catch {}
      },

      scrollTo: (target, opts = {}) => {
        try {
          lenis.scrollTo(target, opts);
        } catch {}
      },

      destroy: () => {
        clearScheduledRefresh();

        try {
          if (tickRef.current) {
            gsap.ticker.remove(tickRef.current);
          }
        } catch {}

        tickRef.current = null;

        try {
          lenis.destroy();
        } catch {}

        lenisRef.current = null;

        try {
          delete window.__gd_lenis__;
        } catch {}

        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      },
    };

    // 初回だけ、フォント・画像配置が落ち着いてからrefresh
    let cancelled = false;

    (async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {}

      if (cancelled) return;

      scheduleRefresh(true);
    })();

    return () => {
      cancelled = true;

      clearScheduledRefresh();

      try {
        if (tickRef.current) {
          gsap.ticker.remove(tickRef.current);
        }
      } catch {}

      tickRef.current = null;

      try {
        lenis.destroy();
      } catch {}

      lenisRef.current = null;

      try {
        delete window.__gd_lenis__;
      } catch {}

      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    };
  }, [enabled, lerp, smoothWheel, anchors, stopInertiaOnNavigate, syncTouch]);

  // ルート変更時のLenis / ScrollTrigger再同期
  useEffect(() => {
    if (!enabled) return undefined;

    const lenis = lenisRef.current;
    if (!lenis) return undefined;

    // hash遷移はアンカー挙動を優先
    if (location.hash) return undefined;

    let raf1 = 0;
    let raf2 = 0;

    try {
      lenis.stop();

      lenis.scrollTo(0, {
        immediate: true,
        force: true,
        duration: 0,
      });

      lenis.resize?.();
      ScrollTrigger.update();
    } catch {}

    raf1 = requestAnimationFrame(() => {
      try {
        lenis.scrollTo(0, {
          immediate: true,
          force: true,
          duration: 0,
        });

        lenis.resize?.();
        ScrollTrigger.refresh(true);
      } catch {}

      raf2 = requestAnimationFrame(() => {
        try {
          lenis.start();
        } catch {}
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [enabled, location.pathname, location.search, location.hash]);

  return null;
}