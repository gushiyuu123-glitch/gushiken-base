import React, { useEffect, useState } from "react";
import { getNewsDetail } from "../lib/microcms";
import { useParams, Link } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    getNewsDetail(id)
      .then((res) => {
        if (!mounted) return;
        setArticle(res);
      })
      .catch(() => {
        if (!mounted) return;
        setError(true);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (error) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-32">
        <p className="text-white/50 tracking-[0.18em] text-sm">
          記事を読み込めませんでした
        </p>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-32">
        <p className="text-white/50 tracking-[0.18em] text-sm">読み込み中…</p>
      </main>
    );
  }

  const date =
    article.publishedAt ||
    article.createdAt ||
    article.updatedAt ||
    null;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-28">
      <article className="max-w-4xl mx-auto aq-fade">

        {/* ===== HEADER ===== */}
        <header className="mb-16">
          {/* 小ライン */}
          <div className="w-14 h-px bg-gradient-to-r from-white/20 to-transparent mb-6" />

          {/* タイトル */}
          <h1
            className="
              text-[2rem] md:text-[2.6rem]
              leading-[1.25]
              tracking-[0.18em]
              font-light text-white mb-4
            "
          >
            {article.title}
          </h1>

          {/* 日付 */}
          {date && (
            <p className="text-white/40 text-[0.8rem] tracking-[0.18em]">
              {new Date(date).toLocaleDateString("ja-JP")}
            </p>
          )}
        </header>

        {/* ===== EYE CATCH ===== */}
        {article.eyecatch?.url && (
          <figure
            className="
              rounded-[16px] overflow-hidden mb-14
              border border-white/10 bg-black
              relative
            "
          >
            <img
              src={article.eyecatch.url}
              alt={article.title}
              className="
                w-full object-cover brightness-[0.9]
                transition-all duration-700
              "
            />

            {/* 極薄光 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(255,240,210,0.14), transparent 65%)",
              }}
            />
          </figure>
        )}

        {/* ===== BODY（microCMS HTML） ===== */}
        <div
          className="
            prose prose-invert max-w-none
            text-white/85 leading-[1.95]
            prose-p:mb-6 prose-h2:mb-4 prose-h3:mb-3
            prose-img:rounded-[14px] prose-img:border prose-img:border-white/10
          "
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* ===== BACK LINK ===== */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <Link
            to="/news"
            className="
              text-white/60 hover:text-white
              transition tracking-[0.22em]
              text-xs
            "
          >
            ← BACK TO NEWS LIST
          </Link>
        </div>

      </article>
    </main>
  );
}
