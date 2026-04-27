import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const STORAGE_KEY = "gushiken-scroll-positions-v3";

function getPositions() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function setPositions(positions) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
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

function getLenis() {
  return window.lenis || window.__lenis || null;
}

function getCurrentScrollPosition(fallback = { x: 0, y: 0 }) {
  const body = document.body;
  const lenis = getLenis();

  // Lenis を使っている場合の現在値
  if (lenis && typeof lenis.scroll === "number") {
    return {
      x: window.scrollX || fallback.x || 0,
      y: lenis.scroll,
    };
  }

  // body fixed 型 scroll-lock 対策
  if (body.style.position === "fixed" && body.style.top) {
    const fixedY = Math.abs(parseInt(body.style.top, 10));

    if (Number.isFinite(fixedY)) {
      return {
        x: fallback.x || 0,
        y: fixedY,
      };
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

  const positions = getPositions();

  positions[getEntryKey(location)] = position;
  positions[getRouteKey(location)] = position;

  setPositions(positions);
}

function getSavedPosition(location) {
  const positions = getPositions();

  return (
    positions[getEntryKey(location)] ||
    positions[getRouteKey(location)] ||
    null
  );
}

function forceScrollTo(position) {
  if (!position) return;

  const x = position.x || 0;
  const y = position.y || 0;
  const root = getScrollRoot();
  const lenis = getLenis();

  // CSS smooth の影響を一時的に切る
  const html = document.documentElement;
  const body = document.body;

  const prevHtmlBehavior = html.style.scrollBehavior;
  const prevBodyBehavior = body.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";

  if (lenis && typeof lenis.scrollTo === "function") {
    lenis.scrollTo(y, {
      immediate: true,
      force: true,
      lock: false,
    });
  }

  window.scrollTo({
    left: x,
    top: y,
    behavior: "auto",
  });

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

  /**
   * ページ高さがまだ足りない場合がある。
   * 画像・フォント・遅延描画で高さが伸びるまで何度か戻す。
   */
  const apply = () => {
    const maxY = getMaxScrollY();
    const safeY = Math.min(targetY, maxY);

    forceScrollTo({
      x: position.x || 0,
      y: safeY,
    });
  };

  apply();

  requestAnimationFrame(apply);

  const timers = [40, 90, 160, 280, 460, 700, 1000].map((delay) =>
    window.setTimeout(apply, delay)
  );

  // 画像読み込み後にも再補正
  const handleLoad = () => {
    apply();
  };

  window.addEventListener("load", handleLoad, { once: true });

  // レイアウト高さが変わった時にも短時間だけ追従
  let resizeObserver;
  let stopObserverTimer;

  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => {
      apply();
    });

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

  requestAnimationFrame(() => {
    forceScrollTo(top);
  });

  window.setTimeout(() => {
    forceScrollTo(top);
  }, 80);
}

function scrollToHash(hash) {
  if (!hash || hash.length <= 1) return false;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);

  if (!target) return false;

  target.scrollIntoView({
    behavior: "auto",
    block: "start",
  });

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

  /**
   * ブラウザ標準の復元を止める
   */
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

  /**
   * 現在の location を ref に保持
   */
  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  /**
   * スクロール位置を常時保存
   * 離れる瞬間だけに頼らない。
   */
  useEffect(() => {
    let ticking = false;

    const saveCurrent = () => {
      if (isProgrammaticScrollRef.current) return;

      latestScrollRef.current = getCurrentScrollPosition(latestScrollRef.current);
      savePosition(locationRef.current, latestScrollRef.current);
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        saveCurrent();
      });
    };

    const handleBeforeLeave = () => {
      saveCurrent();
    };

    saveCurrent();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("pagehide", handleBeforeLeave);
    window.addEventListener("beforeunload", handleBeforeLeave);

    // Linkクリック前に保存しておく
    document.addEventListener("click", handleBeforeLeave, true);
    window.addEventListener("popstate", handleBeforeLeave, true);

    return () => {
      saveCurrent();

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("pagehide", handleBeforeLeave);
      window.removeEventListener("beforeunload", handleBeforeLeave);
      document.removeEventListener("click", handleBeforeLeave, true);
      window.removeEventListener("popstate", handleBeforeLeave, true);
    };
  }, []);

  /**
   * スクロール制御本体
   * useLayoutEffect で描画前に戻す。
   */
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

    // 1. hash があるならアンカー優先
    if (hasHash) {
      const moved = scrollToHash(location.hash);

      if (!moved) {
        const hashTimer = window.setTimeout(() => {
          scrollToHash(location.hash);
        }, 120);

        restoreCleanupRef.current = () => {
          clearTimeout(hashTimer);
        };
      }

      window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 180);

      updatePreviousLocation();
      return;
    }

    // 2. ブラウザバック / 進むなら元位置へ
    if (navigationType === "POP") {
      const cleanup = restorePosition(location);

      if (!cleanup && !getSavedPosition(location) && !isSamePathname) {
        scrollToTop();
      }

      if (typeof cleanup === "function") {
        restoreCleanupRef.current = cleanup;
      }

      window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 1200);

      updatePreviousLocation();
      return;
    }

    // 3. 同じページ内の URL 変化は維持
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

    // 4. 通常の別ページ遷移はトップ
    scrollToTop();

    window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 220);

    updatePreviousLocation();

    return () => {
      restoreCleanupRef.current?.();
      restoreCleanupRef.current = null;

      const current = getCurrentScrollPosition(latestScrollRef.current);
      latestScrollRef.current = current;
      savePosition(location, current);
    };
  }, [
    location.key,
    location.pathname,
    location.search,
    location.hash,
    navigationType,
  ]);

  return null;
}