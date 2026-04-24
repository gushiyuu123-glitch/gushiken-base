import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // アンカー付き遷移はブラウザ側のスクロールに任せる
    if (hash && hash.length > 1) return;

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // 描画後に1回
    const raf = requestAnimationFrame(() => {
      scrollToTop();
    });

    // iOS/Safari系の保険
    const timeout = window.setTimeout(() => {
      scrollToTop();
    }, 90);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [pathname, hash]);

  return null;
}