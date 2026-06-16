// src/components/ClientVoice.jsx

import { useEffect, useMemo, useRef, useState } from "react";
import {
  clientVoices,
  CLIENT_VOICE_MIN_COUNT,
} from "../data/clientVoices";
import styles from "./ClientVoice.module.css";

const DURATION = 5600;

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
  const timeoutRef = useRef(null);

  const shouldRender = voices.length >= minItems;
  const q = voices[idx];

  useEffect(() => {
    if (!shouldRender || paused || voices.length <= 1) return;

    timeoutRef.current = window.setTimeout(() => {
      setVisible(false);

      timeoutRef.current = window.setTimeout(() => {
        setIdx((current) => (current + 1) % voices.length);
        setVisible(true);
      }, 420);
    }, DURATION);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [idx, paused, shouldRender, voices.length]);

  useEffect(() => {
    if (idx > voices.length - 1) setIdx(0);
  }, [idx, voices.length]);

  if (!shouldRender || !q) return null;

  const goTo = (nextIndex) => {
    if (nextIndex === idx) return;

    setVisible(false);

    window.setTimeout(() => {
      setIdx(nextIndex);
      setVisible(true);
    }, 280);
  };

  return (
    <section
      className={styles.voice}
      aria-labelledby="client-voice-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={styles.bgShapeLeft} aria-hidden="true" />
      <div className={styles.bgShapeRight} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>CLIENT VOICE</p>

        <div className={styles.rule} aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <h2 id="client-voice-title" className={styles.title}>
          お客様の声
        </h2>

        <div className={styles.card}>
          <p className={styles.project}>{q.project}</p>

          <div
            className={`${styles.quoteWrap} ${
              visible ? styles.isVisible : styles.isHidden
            }`}
          >
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>

            <blockquote className={styles.quote}>
              <p>{q.quote}</p>
              {q.body && <p>{q.body}</p>}
            </blockquote>

            <p className={styles.client}>{q.client}</p>

            <div className={styles.links}>
              {q.siteUrl && (
                <a href={q.siteUrl} target="_blank" rel="noopener noreferrer">
                  公式サイト
                </a>
              )}

              {q.articleUrl && <a href={q.articleUrl}>制作記事</a>}
            </div>
          </div>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span key={`${q.id}-${idx}`} />
        </div>

        <div
          className={styles.dots}
          role="tablist"
          aria-label="お客様の声を切り替える"
        >
          {voices.map((voice, i) => (
            <button
              key={voice.id}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`${voice.client} の声を表示`}
              className={i === idx ? styles.activeDot : ""}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}