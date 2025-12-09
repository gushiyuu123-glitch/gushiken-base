import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // #付きはページ内リンク → スクロールしない
    if (pathname.includes("#")) return;

    // ナビのscroll判定が終わってから実行（超重要）
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant", // iOSでもバグらない
      });
    }, 80); // ← 80ms が最も安定

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
