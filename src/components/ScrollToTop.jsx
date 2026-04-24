import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const previousRestoration = window.history.scrollRestoration;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = previousRestoration;
      }
    };
  }, []);

  useEffect(() => {
    // アンカー付き遷移は、Nav / ブラウザ / 個別処理側に任せる
    if (hash && hash.length > 1) return undefined;

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      // iOS / Safari 保険
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const raf = requestAnimationFrame(scrollToTop);

    const timeout = window.setTimeout(() => {
      scrollToTop();
    }, 90);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [pathname, search, hash]);

  return null;
}