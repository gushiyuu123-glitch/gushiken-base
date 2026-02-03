import React, { useEffect, useState } from "react";
import { getNewsList } from "../lib/microcms";
import styles from "../styles/newsList.module.css";
import { Link } from "react-router-dom";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getNewsList({ limit: 50 })
      .then((res) => {
        if (!mounted) return;
        setNews(Array.isArray(res?.contents) ? res.contents : []);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-28">
      <section className="max-w-5xl mx-auto aq-fade">

        {/* タイトル */}
        <h1
          className="
            text-[2.2rem] md:text-[2.6rem]
            tracking-[0.22em]
            font-light mb-10
          "
        >
          NEWS
        </h1>

        {/* 下ライン（Dior感） */}
        <div className="w-full h-px bg-gradient-to-r from-white/15 to-transparent mb-16" />

        {/* ローディング */}
        {loading && (
          <p className="text-white/40 tracking-[0.18em] text-sm">
            Loading…
          </p>
        )}

        {/* リスト */}
        {!loading && (
          <div className="flex flex-col divide-y divide-white/10">
            {news.map((item) => {
              const date = item.publishedAt || item.createdAt;
              const formatted = date
                ? new Date(date).toLocaleDateString("ja-JP")
                : "";

              return (
                <Link
                  to={`/news/${item.id}`}
                  key={item.id}
                  className="
                    group py-8 flex flex-col sm:flex-row gap-6
                    transition-colors
                  "
                >
                  {/* サムネ（あれば） */}
                  {item.eyecatch?.url && (
                    <div className="w-full sm:w-48 flex-shrink-0">
                      <img
                        src={item.eyecatch.url}
                        alt=""
                        loading="lazy"
                        className="
                          w-full h-32 sm:h-28 object-cover rounded-[10px]
                          opacity-90 group-hover:opacity-95
                          transition
                        "
                      />
                    </div>
                  )}

                  {/* テキスト */}
                  <div className="flex flex-col justify-center">
                    <p className="text-white/40 text-[0.8rem] tracking-[0.18em] mb-2">
                      {formatted}
                    </p>
                    <h2
                      className="
                        text-[1rem] sm:text-[1.15rem]
                        font-light tracking-[0.12em]
                        text-white/85 group-hover:text-white
                        transition
                      "
                    >
                      {item.title}
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* 何もない場合 */}
        {!loading && news.length === 0 && (
          <p className="text-white/40 tracking-[0.18em] text-sm">
            投稿がありません
          </p>
        )}
      </section>
    </main>
  );
}
