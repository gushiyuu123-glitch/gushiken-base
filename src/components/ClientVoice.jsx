import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

function formatVoiceNumber(index) {
  return `VOICE ${String(index + 1).padStart(2, "0")}`;
}

function buildMetaLine(item) {
  return [item.area, item.category, item.project].filter(Boolean).join(" / ");
}

function renderInkText(text = "", startIndex = 0) {
  return Array.from(text).map((char, i) => {
    const delay = WRITE_START_DELAY + (startIndex + i) * WRITE_SPEED;

    return (
      <span
        key={`${char}-${i}`}
        className={styles.inkChar}
        style={{
          animationDelay: `${delay}ms`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });
}

export default function ClientVoice({
  items = clientVoices,
  minItems = CLIENT_VOICE_MIN_COUNT,
}) {
  const voices = useMemo(
    () =>
      items.filter(
        (item) => item && item.client && (item.quote || item.body)
      ),
    [items]
  );

  const sectionRef = useRef(null);

  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("idle");
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState("next");
  const [hasEntered, setHasEntered] = useState(false);
  const [isWriting, setIsWriting] = useState(false);

  const autoTimerRef = useRef(null);
  const turnTimerRef = useRef(null);
  const resetTimerRef = useRef(null);

  const safeMinItems = Math.max(
    1,
    Math.min(Number(minItems) || 1, voices.length || 1)
  );

  const shouldRender = voices.length >= safeMinItems;
  const hasMultipleVoices = voices.length > 1;
  const current = voices[idx] ?? voices[0];

  const clearTimers = useCallback(() => {
    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }

    if (turnTimerRef.current) {
      window.clearTimeout(turnTimerRef.current);
      turnTimerRef.current = null;
    }

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (nextIndex, nextDirection = "next") => {
      if (!hasMultipleVoices) return;
      if (phase !== "idle") return;
      if (nextIndex === idx) return;
      if (nextIndex < 0 || nextIndex > voices.length - 1) return;

      clearTimers();
      setDirection(nextDirection);
      setPhase("turningOut");

      turnTimerRef.current = window.setTimeout(() => {
        setIdx(nextIndex);
        setPhase("turningIn");

        resetTimerRef.current = window.setTimeout(() => {
          setPhase("idle");
        }, TURN_IN);
      }, TURN_OUT);
    },
    [clearTimers, hasMultipleVoices, idx, phase, voices.length]
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
    const el = sectionRef.current;

    if (!el || typeof window === "undefined") {
      setHasEntered(true);
      setIsWriting(true);
      return undefined;
    }

    const startWriting = () => {
      setHasEntered(true);

      window.requestAnimationFrame(() => {
        setIsWriting(true);
      });
    };

    const fallbackTimer = window.setTimeout(() => {
      startWriting();
    }, 1200);

    if (!("IntersectionObserver" in window)) {
      window.clearTimeout(fallbackTimer);
      startWriting();
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        window.clearTimeout(fallbackTimer);
        startWriting();
        io.disconnect();
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    io.observe(el);

    return () => {
      window.clearTimeout(fallbackTimer);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    if (idx > voices.length - 1) {
      setIdx(0);
    }
  }, [idx, shouldRender, voices.length]);

  useEffect(() => {
    if (!shouldRender || !hasMultipleVoices || !hasEntered) {
      clearTimers();
      setPhase("idle");
      return;
    }

    if (paused || phase !== "idle") {
      clearTimers();
      return;
    }

    autoTimerRef.current = window.setTimeout(() => {
      goNext();
    }, DURATION);

    return clearTimers;
  }, [
    idx,
    paused,
    phase,
    shouldRender,
    hasMultipleVoices,
    hasEntered,
    goNext,
    clearTimers,
  ]);

  useEffect(() => clearTimers, [clearTimers]);

  if (!shouldRender || !current) return null;

  const metaLine = buildMetaLine(current);

  const quoteText = current.quote || "";
  const bodyText = current.body || "";

  const quoteLength = Array.from(quoteText).length;
  const bodyLength = Array.from(bodyText).length;

  const writeCount = quoteLength + bodyLength;

  const writingMs = Math.min(
    6200,
    Math.max(3200, WRITE_START_DELAY + writeCount * WRITE_SPEED + 1100)
  );

  const phaseClass =
    phase === "turningOut"
      ? styles.isTurningOut
      : phase === "turningIn"
        ? styles.isTurningIn
        : styles.isIdle;

  return (
    <section
      ref={sectionRef}
      className={`${styles.voice} ${
        hasEntered ? styles.hasEntered : ""
      } ${isWriting ? styles.isWriting : ""} aq-fade`}
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
            phaseClass,
            direction === "prev" ? styles.isPrev : styles.isNext,
          ].join(" ")}
          style={{
            "--write-duration": `${writingMs}ms`,
          }}
          aria-live="polite"
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