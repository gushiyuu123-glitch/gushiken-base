import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getNewsList } from "../lib/microcms";
import SectionSvgTitle from "./SectionSvgTitle";
import styles from "../styles/newsSection.module.css";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const sectionRef = useRef(null);
  const mountedRef = useRef(false);
  const requestIdRef = useRef(0);
  const newsRef = useRef([]);

  useEffect(() => {
    newsRef.current = news;
  }, [news]);

  const formatDate = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return (dateStr) => {
      if (!dateStr) return "UPDATE";

      const date = new Date(dateStr);
      if (Number.isNaN(date.getTime())) return "UPDATE";

      return formatter.format(date);
    };
  }, []);

  const fetchNews = useCallback(async ({ silent = false } = {}) => {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    try {
      if (!silent || newsRef.current.length === 0) {
        setLoading(true);
      }

      setError(false);

      const res = await getNewsList({ limit: 3 });

      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;

      const items = Array.isArray(res?.contents) ? res.contents : [];

      setNews(items);
      setError(false);
    } catch (err) {
      console.error("❌ NEWS表示エラー:", err);

      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;

      if (newsRef.current.length === 0) {
        setNews([]);
        setError(true);
      }
    } finally {
      if (!mountedRef.current) return;
      if (requestId !== requestIdRef.current) return;

      setLoading(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    fetchNews();

    return () => {
      mountedRef.current = false;
    };
  }, [fetchNews]);

  useEffect(() => {
    const handleVisible = () => {
      if (document.visibilityState !== "visible") return;
      fetchNews({ silent: true });
    };

    const handlePageShow = (event) => {
      if (!event.persisted) return;
      fetchNews({ silent: true });
    };

    document.addEventListener("visibilitychange", handleVisible);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("visibilitychange", handleVisible);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [fetchNews]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll("[data-news-reveal]"));

    const reveal = (target) => {
      target.classList.add(styles.isIn);
    };

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [loading, error, news.length]);

  const hasNews = news.length > 0;

  return (
    <section
      ref={sectionRef}
      className={styles.wrapper}
      aria-labelledby="news-heading"
      aria-busy={loading ? "true" : "false"}
    >
      <div className={styles.inner}>
        <div
          className={cx(styles.sideLine, styles.reveal, styles.lineReveal)}
          data-news-reveal
          aria-hidden="true"
        />

        <header
          className={cx(styles.header, styles.reveal, styles.reveal1)}
          data-news-reveal
        >
          <SectionSvgTitle
            title="NEWS"
            sub="UPDATE / JOURNAL"
            className={styles.svgTitle}
          />

          <h2 id="news-heading" className={styles.hiddenHeading}>
            お知らせ
          </h2>

          <p className={styles.lead}>
            制作の更新や、お知らせをまとめています。
          </p>
        </header>

        <div
          className={cx(styles.panel, styles.reveal, styles.reveal2)}
          data-news-reveal
        >
          {loading && (
            <div className={styles.stateBox} aria-live="polite">
              <span className={styles.stateMark} aria-hidden="true" />
              <p className={styles.stateText}>読み込み中…</p>
            </div>
          )}

          {error && !loading && (
            <div className={styles.stateBox} aria-live="assertive">
              <span className={cx(styles.stateMark, styles.stateMarkError)} aria-hidden="true" />
              <p className={styles.stateText}>
                お知らせを読み込めませんでした。
              </p>
            </div>
          )}

          {!loading && !error && !hasNews && (
            <div className={styles.stateBox} aria-live="polite">
              <span className={styles.stateMark} aria-hidden="true" />
              <p className={styles.stateText}>
                現在、お知らせはありません。
              </p>
            </div>
          )}

          {!loading && !error && hasNews && (
            <div className={styles.list}>
              {news.map((item, index) => {
                const date = item.publishedAt || item.createdAt || null;
                const title = item.title || "無題のお知らせ";

                return (
                  <Link
                    to={`/news/${item.id}`}
                    key={item.id}
                    className={cx(styles.item, styles.itemReveal)}
                    aria-label={`お知らせ: ${title}`}
                    style={{ "--item-index": index }}
                    data-news-reveal
                  >
                    <span className={styles.itemMeta}>
                      <span className={styles.date}>{formatDate(date)}</span>

                      <span className={styles.number} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <h3 className={styles.itemTitle}>{title}</h3>

                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {!loading && !error && hasNews && (
          <div
            className={cx(styles.moreWrap, styles.reveal, styles.reveal3)}
            data-news-reveal
          >
            <Link to="/news" className={styles.more}>
              <span>もっと見る</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}