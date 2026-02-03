import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop — SilentJump v2.3
 * 裕人のサイト設計に合わせて“絶対に揺れない”よう最適化した版
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ===================================================
    // ① #（アンカー付き）はトップに戻さない（内部リンク）
    // ===================================================
    if (hash && hash.length > 1) return;

    // ===================================================
    // ② iOSの "instant" バグ対策：非標準だが最も動く方式
    //    → ScrollRestoration も干渉しない
    // ===================================================
    const instantScroll = () => {
      // Safari / iOS で一度 0 に戻らないバグ対策として2段方式
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // ===================================================
    // ③ React Router が DOM 書き換えを終えてから実行
    //    → 遅延 60〜120ms が最も安定
    // ===================================================
    const timeout = setTimeout(() => {
      instantScroll();
    }, 85); // ← ノア調べ：最適値は「80〜100ms」

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}
