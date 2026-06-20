// src/components/ClientVoice.jsx

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  clientVoices,
  CLIENT_VOICE_MIN_COUNT,
} from "../data/clientVoices";
import styles from "./ClientVoice.module.css";

const DURATION = 7600;
const TURN_OUT = 340;
const TURN_IN = 260;

const WRITE_SPEED = 23;
const WRITE_START_DELAY = 420;
const WRITE_MIN_DURATION = 3200;
const WRITE_MAX_DURATION = 6200;
const WRITE_END_BUFFER = 1100;

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function formatVoiceNumber(index) {
  return `VOICE ${String(index + 1).padStart(2, "0")}`;
}

function buildMetaLine(item) {
  return [item.area, item.category, item.project].filter(Boolean).join(" / ");
}

function getTextLength(text = "") {
  return Array.from(text).length;
}

function getWritingDuration(quote = "", body = "") {
  const totalLength = getTextLength(quote) + getTextLength(body);

  return Math.min(
    WRITE_MAX_DURATION,
    Math.max(
      WRITE_MIN_DURATION,
      WRITE_START_DELAY + totalLength * WRITE_SPEED + WRITE_END_BUFFER
    )
  );
}

function renderInkText(text = "", startIndex = 0) {
  return Array.from(text).map((char, i) => {
    const delay = WRITE_START_DELAY + (startIndex + i) * WRITE_SPEED;
    const safeChar = char === " " ? "\u00A0" : char;

    return (
      <span
        key={`${char}-${i}`}
        className={styles.inkChar}
        style={{
          animationDelay: `${delay}ms`,
        }}
      >
        {safeChar}
      </span>
    );
  });
}

export default function ClientVoice({
  items = clientVoices,
  minItems = CLIENT_VOICE_MIN_COUNT,
}) {
  const titleId = useId();

  const sectionRef = useRef(null);
  const hasStartedWritingRef = useRef(false);

  const autoTimerRef = useRef(null);
  const turnTimerRef = useRef(null);
  const resetTimerRef = useRef(null);

  const voices = useMemo(
    () =>
      items.filter(
        (item) => item && item.client && (item.quote || item.body)
      ),
    [items]
  );

  const voiceCount = voices.length;

  const safeMinItems = Math.max(
    1,
    Math.min(Number(minItems) || 1, voiceCount || 1)
  );

  const shouldRender = voiceCount >= safeMinItems;
  const hasMultipleVoices = voiceCount > 1;

  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("idle");
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState("next");
  const [hasEntered, setHasEntered] = useState(false);
  const [isWriting, setIsWriting] = useState(false);

  const current = voices[idx] ?? voices[0];

  const clearAutoTimer = useCallback(() => {
    if (typeof window === "undefined") return;

    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const clearTurnTimers = useCallback(() => {
    if (typeof window === "undefined") return;

    if (turnTimerRef.current) {
      window.clearTimeout(turnTimerRef.current);
      turnTimerRef.current = null;
    }

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  const clearAllTimers = useCallback(() => {
    clearAutoTimer();
    clearTurnTimers();
  }, [clearAutoTimer, clearTurnTimers]);

  const pause = useCallback(() => {
    setPaused(true);
  }, []);

  const resume = useCallback(() => {
    setPaused(false);
  }, []);

  const goTo = useCallback(
    (nextIndex, nextDirection = "next") => {
      if (!hasMultipleVoices) return;
      if (phase !== "idle") return;
      if (nextIndex === idx) return;
      if (nextIndex < 0 || nextIndex > voiceCount - 1) return;
      if (typeof window === "undefined") return;

      clearAllTimers();

      setDirection(nextDirection);
      setPhase("turningOut");

      turnTimerRef.current = window.setTimeout(() => {
        setIdx(nextIndex);
        setPhase("turningIn");

        turnTimerRef.current = null;

        resetTimerRef.current = window.setTimeout(() => {
          setPhase("idle");
          resetTimerRef.current = null;
        }, TURN_IN);
      }, TURN_OUT);
    },
    [clearAllTimers, hasMultipleVoices, idx, phase, voiceCount]
  );

  const goNext = useCallback(() => {
    if (!hasMultipleVoices) return;

    goTo((idx + 1) % voiceCount, "next");
  }, [goTo, hasMultipleVoices, idx, voiceCount]);

  const goPrev = useCallback(() => {
    if (!hasMultipleVoices) return;

    goTo((idx - 1 + voiceCount) % voiceCount, "prev");
  }, [goTo, hasMultipleVoices, idx, voiceCount]);

  useEffect(() => {
    if (!shouldRender) return;

    if (idx > voiceCount - 1) {
      setIdx(0);
    }
  }, [idx, shouldRender, voiceCount]);

  useEffect(() => {
    const el = sectionRef.current;

    const startWriting = () => {
      if (hasStartedWritingRef.current) return;

      hasStartedWritingRef.current = true;
      setHasEntered(true);

      if (typeof window === "undefined") {
        setIsWriting(true);
        return;
      }

      window.requestAnimationFrame(() => {
        setIsWriting(true);
      });
    };

    if (typeof window === "undefined") {
      startWriting();
      return undefined;
    }

    if (!el) {
      const raf = window.requestAnimationFrame(() => {
        startWriting();
      });

      return () => {
        window.cancelAnimationFrame(raf);
      };
    }

    if (!("IntersectionObserver" in window)) {
      startWriting();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        startWriting();
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    clearAutoTimer();

    if (!shouldRender) return undefined;
    if (!hasMultipleVoices) return undefined;
    if (!hasEntered) return undefined;
    if (paused) return undefined;
    if (phase !== "idle") return undefined;

    autoTimerRef.current = window.setTimeout(() => {
      goNext();
    }, DURATION);

    return clearAutoTimer;
  }, [
    idx,
    paused,
    phase,
    shouldRender,
    hasMultipleVoices,
    hasEntered,
    goNext,
    clearAutoTimer,
  ]);

  useEffect(() => {
    return clearAllTimers;
  }, [clearAllTimers]);

  if (!shouldRender || !current) return null;

  const metaLine = buildMetaLine(current);

  const quoteText = current.quote || "";
  const bodyText = current.body || "";

  const quoteLength = getTextLength(quoteText);
  const writingMs = getWritingDuration(quoteText, bodyText);

  const phaseClass =
    phase === "turningOut"
      ? styles.isTurningOut
      : phase === "turningIn"
        ? styles.isTurningIn
        : "";

const sectionClassName = cx(
  styles.voice,
  hasEntered && styles.hasEntered,
  isWriting && styles.isWriting
);
  const stageClassName = cx(
    styles.stage,
    phaseClass,
    direction === "prev" ? styles.isPrev : styles.isNext
  );

  return (
    <section
      ref={sectionRef}
      className={sectionClassName}
      aria-labelledby={titleId}
      onPointerEnter={pause}
      onPointerLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
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

          <h2 id={titleId} className={styles.title}>
            いただいたお客様の声
          </h2>

          <p className={styles.lead}>
            実際にWebサイトを制作させていただいたお客様から、
            掲載許可をいただいた感想を紹介しています。
          </p>
        </header>

        <div
          className={stageClassName}
          style={{
            "--write-duration": `${writingMs}ms`,
          }}
          aria-live="polite"
          aria-atomic="true"
          data-voice-id={current.id}
        >
          <div className={styles.tornPaper} aria-hidden="true" />
          <div className={styles.noteSheet} aria-hidden="true" />

          <div className={styles.handNoteLeft} aria-hidden="true">
            <span>project note</span>
            <strong>{current.id}</strong>
            <em>web site</em>
            <small>2026.06</small>
          </div>

          <div className={styles.handNoteRight} aria-hidden="true">
            <span>thank you.</span>
            <small>{formatVoiceNumber(idx).toLowerCase()}</small>
          </div>

          <figure
            key={`pencil-${current.id}-${idx}`}
            className={`${styles.pencil} ${styles.writingPencil}`}
            aria-hidden="true"
          >
            <img
              src="/images/client-voice/pencil.png"
              alt=""
              loading="eager"
              decoding="async"
            />
          </figure>

          {current.previewImage && (
            <figure className={styles.preview}>
              <img
                src={current.previewImage}
                alt={
                  current.previewAlt ||
                  `${current.client} Webサイトのプレビュー`
                }
                loading="lazy"
                decoding="async"
              />
            </figure>
          )}

          <article className={styles.mainPaper}>
            <div className={styles.paperFold} aria-hidden="true" />

            <div className={styles.quoteArea}>
              <blockquote
                key={`quote-${current.id}-${idx}`}
                className={styles.quote}
              >
                {quoteText && (
                  <p className={styles.inkLine}>
                    {renderInkText(quoteText, 0)}
                  </p>
                )}

                {bodyText && (
                  <p className={styles.inkLine}>
                    {renderInkText(bodyText, quoteLength + 10)}
                  </p>
                )}
              </blockquote>

              {(current.siteUrl || current.articleUrl) && (
                <div className={styles.links}>
                  {current.siteUrl && (
                    <a
                      href={current.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${current.client} の公式サイトを新しいタブで開く`}
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

              <span
                key={`trace-${current.id}-${idx}`}
                className={styles.writeTrace}
                aria-hidden="true"
              >
                checked / direction
              </span>
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
                disabled={phase !== "idle"}
              >
                PREV
              </button>

              <button
                type="button"
                className={`${styles.pageNav} ${styles.nextVoice}`}
                onClick={goNext}
                aria-label="次のお客様の声を表示"
                disabled={phase !== "idle"}
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
                  animationPlayState:
                    paused || phase !== "idle" ? "paused" : "running",
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
                  disabled={phase !== "idle"}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}