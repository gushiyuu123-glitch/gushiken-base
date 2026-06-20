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
  anchors = false, // hash移動はScrollManagerに任せる
  stopInertiaOnNavigate = true,
  syncTouch = false, // PCでも基本false推奨
}) {
  const location = useLocation();

  const lenisRef = useRef(null);
  const tickRef = useRef(null);
  const refreshRafRef = useRef([]);

  const clearScheduledRefresh = () => {
    refreshRafRef.current.forEach((id) => {
      cancelAnimationFrame(id);
    });

    refreshRafRef.current = [];
  };

  const scheduleRefresh = (force = true) => {
    if (typeof window === "undefined") return;

    clearScheduledRefresh();

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh(force);
        } catch {
          // ignore
        }
      });

      refreshRafRef.current.push(raf2);
    });

    refreshRafRef.current.push(raf1);
  };

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!enabled) return undefined;

    // StrictMode / dev の二重起動ガード
    if (lenisRef.current) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const coarse =
      window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

    // SP / reduced motion は完全OFF
    if (reduce || coarse) return undefined;

    const lenis = new Lenis({
      lerp,
      smoothWheel,
      anchors,
      stopInertiaOnNavigate,
      syncTouch,
    });

    lenisRef.current = lenis;

    const onLenisScroll = () => {
      try {
        ScrollTrigger.update();
      } catch {
        // ignore
      }
    };

    lenis.on("scroll", onLenisScroll);

    // GSAP tickerでLenisを一元駆動
    const onTick = (time) => {
      try {
        lenis.raf(time * 1000);
      } catch {
        // ignore
      }
    };

    tickRef.current = onTick;

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    let destroyed = false;

    const destroyCurrent = () => {
      if (destroyed) return;
      destroyed = true;

      clearScheduledRefresh();

      try {
        lenis.off?.("scroll", onLenisScroll);
      } catch {
        // ignore
      }

      try {
        if (tickRef.current) {
          gsap.ticker.remove(tickRef.current);
        }
      } catch {
        // ignore
      }

      tickRef.current = null;

      try {
        lenis.destroy();
      } catch {
        // ignore
      }

      lenisRef.current = null;

      try {
        if (window.__gd_lenis__ === api) {
          delete window.__gd_lenis__;
        }
      } catch {
        // ignore
      }

      requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh(true);
        } catch {
          // ignore
        }
      });
    };

    // App.jsx / ScrollManager / 各ページから触るためのグローバル窓口
    const api = {
      lenis,
      instance: lenis,

      get scroll() {
        return typeof lenis.scroll === "number" ? lenis.scroll : 0;
      },

      get animatedScroll() {
        return typeof lenis.animatedScroll === "number"
          ? lenis.animatedScroll
          : this.scroll;
      },

      get isStopped() {
        return Boolean(lenis.isStopped);
      },

      start: () => {
        try {
          lenis.start();
        } catch {
          // ignore
        }
      },

      stop: () => {
        try {
          lenis.stop();
        } catch {
          // ignore
        }
      },

      resize: () => {
        try {
          lenis.resize?.();
        } catch {
          // ignore
        }
      },

      scrollToTop: (opts = {}) => {
        try {
          lenis.scrollTo(0, {
            immediate: true,
            force: true,
            duration: 0,
            ...opts,
          });
        } catch {
          // ignore
        }
      },

      scrollTo: (target, opts = {}) => {
        try {
          lenis.scrollTo(target, opts);
        } catch {
          // ignore
        }
      },

      refresh: (force = true) => {
        try {
          lenis.resize?.();
          ScrollTrigger.refresh(force);
        } catch {
          // ignore
        }
      },

      destroy: destroyCurrent,
    };

    window.__gd_lenis__ = api;

    // 初回だけ、フォント・画像配置が落ち着いてからrefresh
    let cancelled = false;

    (async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        // ignore
      }

      if (cancelled || destroyed) return;

      try {
        lenis.resize?.();
      } catch {
        // ignore
      }

      scheduleRefresh(true);
    })();

    return () => {
      cancelled = true;
      destroyCurrent();
    };
  }, [enabled, lerp, smoothWheel, anchors, stopInertiaOnNavigate, syncTouch]);

  // ルート変更時のLenis / ScrollTrigger再同期
  // ※ スクロール位置の決定はScrollManagerに任せる
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!enabled) return undefined;

    const lenis = lenisRef.current;
    if (!lenis) return undefined;

    let raf1 = 0;
    let raf2 = 0;
    let raf3 = 0;

    try {
      lenis.resize?.();
      ScrollTrigger.update();
    } catch {
      // ignore
    }

    raf1 = requestAnimationFrame(() => {
      try {
        lenis.resize?.();
        ScrollTrigger.refresh(true);
      } catch {
        // ignore
      }

      raf2 = requestAnimationFrame(() => {
        try {
          lenis.resize?.();
          ScrollTrigger.update();
        } catch {
          // ignore
        }

        raf3 = requestAnimationFrame(() => {
          try {
            lenis.resize?.();
          } catch {
            // ignore
          }
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(raf3);
    };
  }, [
    enabled,
    location.key,
    location.pathname,
    location.search,
    location.hash,
  ]);

  return null;
}