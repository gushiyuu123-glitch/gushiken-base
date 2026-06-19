// src/components/ClientVoice.jsx

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  clientVoices,
  CLIENT_VOICE_MIN_COUNT,
} from "../data/clientVoices";
import styles from "./ClientVoice.module.css";

const DURATION = 7200;
const PAGE_TURN_DURATION = 520;

function formatVoiceNumber(index) {
  return `VOICE ${String(index + 1).padStart(2, "0")}`;
}

function buildMetaLine(item) {
  return [item.area, item.category, item.project].filter(Boolean).join(" / ");
}

export default function ClientVoice({
  items = clientVoices,
  minItems = CLIENT_VOICE_MIN_COUNT,
}) {
  const voices = useMemo(
    () => items.filter((item) => item && item.client && item.quote),
    [items]
  );

  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [turning, setTurning] = useState(false);
  const [direction, setDirection] = useState("next");

  const timerRef = useRef(null);
  const turnTimerRef = useRef(null);

  const shouldRender = voices.length >= minItems;
  const hasMultipleVoices = voices.length > 1;
  const current = voices[idx] ?? voices[0];

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (turnTimerRef.current) {
      window.clearTimeout(turnTimerRef.current);
      turnTimerRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (nextIndex, nextDirection = "next") => {
      if (!hasMultipleVoices) return;
      if (nextIndex === idx) return;
      if (nextIndex < 0 || nextIndex > voices.length - 1) return;

      clearTimers();
      setDirection(nextDirection);
      setTurning(true);
      setVisible(false);

      turnTimerRef.current = window.setTimeout(() => {
        setIdx(nextIndex);
        setVisible(true);

        turnTimerRef.current = window.setTimeout(() => {
          setTurning(false);
        }, 160);
      }, PAGE_TURN_DURATION);
    },
    [clearTimers, hasMultipleVoices, idx, voices.length]
  );

  const goNext = useCallback(() => {
    if (!hasMultipleVoices) return;
    goTo((idx + 1) % voices.length, "next");
  }, [goTo, hasMultipleVoices, idx, voices.length]);

  const goPrev = useCallback(() => {
    if (!hasMultipleVoices) return;
    goTo((idx - 1 + voices.length) % voices.length, "prev");
  }, [goTo, hasMultipleVoices, idx, voices.length]);

  useEffect(() => {
    if (!shouldRender) return;

    if (idx > voices.length - 1) {
      setIdx(0);
    }
  }, [idx, shouldRender, voices.length]);

  useEffect(() => {
    if (!shouldRender || !hasMultipleVoices) {
      setVisible(true);
      setTurning(false);
      clearTimers();
      return;
    }

    if (paused || turning) {
      clearTimers();
      return;
    }

    timerRef.current = window.setTimeout(() => {
      goNext();
    }, DURATION);

    return clearTimers;
  }, [
    idx,
    paused,
    turning,
    shouldRender,
    hasMultipleVoices,
    goNext,
    clearTimers,
  ]);

  useEffect(() => {
    return clearTimers;
  }, [clearTimers]);

  if (!shouldRender || !current) return null;

  const metaLine = buildMetaLine(current);

  return (
    <section
      className={`${styles.voice} aq-fade`}
      aria-labelledby="client-voice-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={styles.texture} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>CLIENT VOICE</p>

          <div className={styles.rule} aria-hidden="true">
            <span />
            <i />
            <span />
          </div>

          <h2 id="client-voice-title" className={styles.title}>
            いただいたお客様の声
          </h2>

          <p className={styles.lead}>
            実際にWebサイトを制作させていただいたお客様から、
            掲載許可をいただいた感想を紹介しています。
          </p>
        </header>

        <div
          className={[
            styles.stage,
            visible ? styles.isVisible : styles.isHidden,
            turning ? styles.isTurning : "",
            direction === "prev" ? styles.isPrev : styles.isNext,
          ].join(" ")}
          aria-live="polite"
        >
          <div className={styles.tornPaper} aria-hidden="true" />

          <div className={styles.handNoteLeft} aria-hidden="true">
            <span>project note</span>
            <strong>{current.id || "case"}</strong>
            <em>web site</em>
            <small>2026.06</small>
          </div>

          <div className={styles.handNoteRight} aria-hidden="true">
            <span>thank you.</span>
            <small>{formatVoiceNumber(idx).toLowerCase()}</small>
          </div>

          {current.previewImage && (
            <figure className={styles.preview}>
              <img
                src={current.previewImage}
                alt={
                  current.previewAlt ||
                  `${current.client} Webサイトのプレビュー`
                }
                loading="lazy"
              />
            </figure>
          )}

          <article className={styles.mainPaper}>
            <div className={styles.quoteArea}>
              <blockquote className={styles.quote}>
                <p>{current.quote}</p>
                {current.body && <p>{current.body}</p>}
              </blockquote>

              {(current.siteUrl || current.articleUrl) && (
                <div className={styles.links}>
                  {current.siteUrl && (
                    <a
                      href={current.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${current.client} の公式サイトを開く`}
                    >
                      公式サイト
                    </a>
                  )}

                  {current.articleUrl && (
                    <a
                      href={current.articleUrl}
                      aria-label={`${current.client} の制作記事を開く`}
                    >
                      制作記事
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className={styles.stamp} aria-hidden="true">
              <span>GD</span>
            </div>
          </article>

          <aside className={styles.sidePaper}>
            <span className={styles.clip} aria-hidden="true" />

            <p className={styles.voiceNo}>{formatVoiceNumber(idx)}</p>

            <div className={styles.sideLine} aria-hidden="true" />

            <h3 className={styles.client}>{current.client}</h3>

            {metaLine && <p className={styles.meta}>{metaLine}</p>}

            <div className={styles.sideMark} aria-hidden="true" />

            <p className={styles.permission}>
              掲載許可をいただいた
              <br />
              お客様の声です。
            </p>
          </aside>

          {hasMultipleVoices && (
            <>
              <button
                type="button"
                className={`${styles.pageNav} ${styles.prevVoice}`}
                onClick={goPrev}
                aria-label="前のお客様の声を表示"
              >
                PREV
              </button>

              <button
                type="button"
                className={`${styles.pageNav} ${styles.nextVoice}`}
                onClick={goNext}
                aria-label="次のお客様の声を表示"
              >
                NEXT
              </button>
            </>
          )}
        </div>

        {hasMultipleVoices && (
          <div className={styles.controls}>
            <div className={styles.progress} aria-hidden="true">
              <span
                key={`${current.id}-${idx}`}
                style={{
                  animationDuration: `${DURATION}ms`,
                  animationPlayState: paused || turning ? "paused" : "running",
                }}
              />
            </div>

            <div className={styles.dots} aria-label="お客様の声を切り替える">
              {voices.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`${item.client} の声を表示`}
                  aria-current={i === idx ? "true" : undefined}
                  className={i === idx ? styles.activeDot : ""}
                  onClick={() => goTo(i, i > idx ? "next" : "prev")}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}