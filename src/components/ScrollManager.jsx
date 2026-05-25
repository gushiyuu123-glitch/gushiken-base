// src/components/ScrollManager.jsx
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const STORAGE_KEY = "gushiken-scroll-positions-v3";

// ルート/履歴が増えても肥大化しないように上限
const MAX_KEYS = 90;

// sessionStorage書き込みを間引く（SPフリーズ対策）
const WRITE_DEBOUNCE_MS = 260;

// ほぼ同じ位置ならforceScrollを連打しない
const EPS = 1.25;

let _cache = null;
let _writeTimer = 0;

function safeParse(json) {
  try {
    const v = JSON.parse(json || "{}");
    return v && typeof v === "object" ? v : {};
  } catch {
    return {};
  }
}

function loadPositions() {
  if (_cache) return _cache;
  if (typeof window === "undefined") return (_cache = { __order: [] });

  const raw = (() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  })();

  const obj = safeParse(raw);
  if (!Array.isArray(obj.__order)) obj.__order = [];
  return (_cache = obj);
}

function flushPositionsNow() {
  if (typeof window === "undefined") return;
  const pos = loadPositions();
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
  } catch {
    // Safari private / quota / block でも落ちないように
  }
}

function scheduleFlush() {
  if (typeof window === "undefined") return;
  if (_writeTimer) return;

  _writeTimer = window.setTimeout(() => {
    _writeTimer = 0;
    flushPositionsNow();
  }, WRITE_DEBOUNCE_MS);
}

function touchKey(positions, key) {
  if (!key) return;
  const order = positions.__order || (positions.__order = []);

  const idx = order.indexOf(key);
  if (idx !== -1) order.splice(idx, 1);
  order.push(key);

  while (order.length > MAX_KEYS) {
    const old = order.shift();
    if (old && old in positions) delete positions[old];
  }
}

function getEntryKey(location) {
  return `entry:${location.key || `${location.pathname}${location.search}`}`;
}

function getRouteKey(location) {
  return `route:${location.pathname}${location.search}`;
}

function getScrollRoot() {
  return document.scrollingElement || document.documentElement;
}

/**
 * ✅ Lenis参照を統一
 * - 推奨: window.__gd_lenis__（Proxy API）
 * - 互換: window.lenis / window.__lenis
 */
function getLenis() {
  return window.__gd_lenis__ || window.lenis || window.__lenis || null;
}

function getCurrentScrollPosition(fallback = { x: 0, y: 0 }) {
  const body = document.body;
  const lenis = getLenis();

  // Lenisが生きてるならLenisのscroll値を優先
  const lenisY =
    lenis && typeof lenis.scroll === "number"
      ? lenis.scroll
      : lenis && typeof lenis.animatedScroll === "number"
        ? lenis.animatedScroll
        : null;

  if (typeof lenisY === "number") {
    return {
      x: window.scrollX || fallback.x || 0,
      y: lenisY,
    };
  }

  // body fixed（モーダル/FAQなど）時の復元
  if (body.style.position === "fixed" && body.style.top) {
    const fixedY = Math.abs(parseInt(body.style.top, 10));
    if (Number.isFinite(fixedY)) {
      return { x: fallback.x || 0, y: fixedY };
    }
  }

  return {
    x: window.scrollX || window.pageXOffset || fallback.x || 0,
    y:
      window.scrollY ||
      window.pageYOffset ||
      getScrollRoot().scrollTop ||
      fallback.y ||
      0,
  };
}

function savePosition(location, position) {
  if (!location || !position) return;

  const positions = loadPositions();
  const entryKey = getEntryKey(location);
  const routeKey = getRouteKey(location);

  positions[entryKey] = position;
  positions[routeKey] = position;

  touchKey(positions, entryKey);
  touchKey(positions, routeKey);

  scheduleFlush();
}

function getSavedPosition(location) {
  const positions = loadPositions();
  return positions[getEntryKey(location)] || positions[getRouteKey(location)] || null;
}

function isNear(a, b, eps = EPS) {
  return Math.abs((a ?? 0) - (b ?? 0)) <= eps;
}

function forceScrollTo(position) {
  if (!position) return;

  const x = position.x || 0;
  const y = position.y || 0;

  const current = getCurrentScrollPosition({ x, y });
  if (isNear(current.y, y) && isNear(current.x, x)) return;

  const root = getScrollRoot();
  const lenis = getLenis();

  const html = document.documentElement;
  const body = document.body;

  const prevHtmlBehavior = html.style.scrollBehavior;
  const prevBodyBehavior = body.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";

  // Lenisが使えるならLenis優先（window.scrollToは最終保険）
  if (lenis && typeof lenis.scrollTo === "function") {
    try {
      lenis.scrollTo(y, { immediate: true, force: true, lock: false });
    } catch {
      // ignore
    }
  }

  window.scrollTo({ left: x, top: y, behavior: "auto" });

  // 最後の保険（環境差でscrollingElementがズレても戻す）
  root.scrollTop = y;
  html.scrollTop = y;
  body.scrollTop = y;

  html.style.scrollBehavior = prevHtmlBehavior;
  body.style.scrollBehavior = prevBodyBehavior;
}

function getMaxScrollY() {
  const root = getScrollRoot();
  return Math.max(
    0,
    root.scrollHeight - window.innerHeight,
    document.documentElement.scrollHeight - window.innerHeight,
    document.body.scrollHeight - window.innerHeight
  );
}

function restorePosition(location) {
  const position = getSavedPosition(location);
  if (!position) return false;

  const targetY = position.y || 0;

  const apply = () => {
    const maxY = getMaxScrollY();
    const safeY = Math.min(targetY, maxY);
    forceScrollTo({ x: position.x || 0, y: safeY });
  };

  apply();
  requestAnimationFrame(apply);

  const timers = [60, 200, 520].map((delay) => window.setTimeout(apply, delay));

  const handleLoad = () => apply();
  window.addEventListener("load", handleLoad, { once: true });

  let resizeObserver;
  let stopObserverTimer;

  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => apply());
    resizeObserver.observe(document.body);
    stopObserverTimer = window.setTimeout(() => {
      resizeObserver?.disconnect();
    }, 1100);
  }

  return () => {
    timers.forEach(clearTimeout);
    window.removeEventListener("load", handleLoad);
    resizeObserver?.disconnect();
    clearTimeout(stopObserverTimer);
  };
}

function scrollToTop() {
  const top = { x: 0, y: 0 };
  forceScrollTo(top);
  requestAnimationFrame(() => forceScrollTo(top));
  window.setTimeout(() => forceScrollTo(top), 90);
}

function scrollToHash(hash) {
  if (!hash || hash.length <= 1) return false;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ behavior: "auto", block: "start" });
  return true;
}

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const locationRef = useRef(location);
  const latestScrollRef = useRef({ x: 0, y: 0 });
  const previousLocationRef = useRef(location);
  const restoreCleanupRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  // 保存（デバウンスflush）
  useEffect(() => {
    let ticking = false;

    const saveCurrent = () => {
      if (isProgrammaticScrollRef.current) return;

      latestScrollRef.current = getCurrentScrollPosition(latestScrollRef.current);
      savePosition(locationRef.current, latestScrollRef.current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        saveCurrent();
      });
    };

    const onBeforeLeave = () => {
      saveCurrent();
      flushPositionsNow(); // 離脱系は即flush
    };

    // 初回も保存
    saveCurrent();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    window.addEventListener("pagehide", onBeforeLeave);
    window.addEventListener("beforeunload", onBeforeLeave);

    // リンククリック直前の取りこぼし防止（ただし書き込みは即flushしない）
    document.addEventListener("click", saveCurrent, true);
    window.addEventListener("popstate", onBeforeLeave);

    return () => {
      saveCurrent();
      flushPositionsNow();

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      window.removeEventListener("pagehide", onBeforeLeave);
      window.removeEventListener("beforeunload", onBeforeLeave);

      document.removeEventListener("click", saveCurrent, true);
      window.removeEventListener("popstate", onBeforeLeave);

      if (_writeTimer) {
        clearTimeout(_writeTimer);
        _writeTimer = 0;
      }
    };
  }, []);

  // 復元
  useLayoutEffect(() => {
    restoreCleanupRef.current?.();
    restoreCleanupRef.current = null;

    const previousLocation = previousLocationRef.current;
    const isSamePathname = previousLocation.pathname === location.pathname;
    const hasHash = location.hash && location.hash.length > 1;

    const updatePreviousLocation = () => {
      previousLocationRef.current = location;
    };

    isProgrammaticScrollRef.current = true;

    // hash → 対象へ
    if (hasHash) {
      const moved = scrollToHash(location.hash);
      if (!moved) {
        const hashTimer = window.setTimeout(() => {
          scrollToHash(location.hash);
        }, 120);
        restoreCleanupRef.current = () => clearTimeout(hashTimer);
      }
      window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 180);
      updatePreviousLocation();
      return;
    }

    // 戻る/進む → 保存位置へ
    if (navigationType === "POP") {
      const cleanup = restorePosition(location);
      if (!cleanup && !getSavedPosition(location) && !isSamePathname) {
        scrollToTop();
      }
      if (typeof cleanup === "function") restoreCleanupRef.current = cleanup;

      window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 1200);

      updatePreviousLocation();
      return;
    }

    // 同一パス（クエリだけ等）→ 現在位置保持
    if (isSamePathname) {
      const current = getCurrentScrollPosition(latestScrollRef.current);
      latestScrollRef.current = current;
      savePosition(location, current);

      window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 180);

      updatePreviousLocation();
      return;
    }

    // 通常遷移 → top
    scrollToTop();
    window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 240);

    updatePreviousLocation();

    return () => {
      restoreCleanupRef.current?.();
      restoreCleanupRef.current = null;

      const current = getCurrentScrollPosition(latestScrollRef.current);
      latestScrollRef.current = current;
      savePosition(location, current);
    };
  }, [location.key, location.pathname, location.search, location.hash, navigationType]);

  return null;
}