import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkjyvly";

export default function Contact() {
  const rootRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.classList.add(styles.show);
  }, []);

  useEffect(() => {
    const description =
      "GUSHIKEN DESIGN へのお問い合わせページ。サイト制作やブランド設計のご相談を、目的の整理から丁寧にサポートします。";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://gushikendesign.com/contact";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) throw new Error("送信エラー");

      setStatus("success");
      setMessage("送信が完了しました。お問い合わせありがとうございます。");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <section ref={rootRef} className={`${styles.contactSection} aq-fade`}>
      {/* Grain texture */}
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.container}>

        {/* Header */}
        <header className={`${styles.header} aq-fade delay-1`}>
          <p className={styles.eyebrow}>CONTACT</p>
          <h1 className={styles.title} translate="no">お問い合わせ</h1>
          <div className={styles.titleRule} aria-hidden="true" />
          <p className={styles.lead}>
            まだ内容が固まっていない段階でも大丈夫です。
            <br />
            <span className={styles.leadEm}>「こんな雰囲気にしたい」</span>
            など、
            <br />
            大まかなイメージからでもご相談いただけます。
          </p>
        </header>

        {/* Form */}
        <form
          className={`${styles.form} aq-fade delay-2`}
          onSubmit={handleSubmit}
          noValidate
        >
          <FormField label="お名前" required htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              className={styles.input}
              autoComplete="name"
            />
          </FormField>

          <FormField label="メールアドレス" required htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              autoComplete="email"
            />
          </FormField>

          <FormField label="電話番号（任意）" htmlFor="tel">
            <input
              id="tel"
              name="tel"
              type="tel"
              className={styles.input}
              autoComplete="tel"
            />
          </FormField>

          {/* Two-column row on wider screens */}
          <div className={styles.row}>
            <FormField label="ご希望のプラン" htmlFor="plan">
              <div className={styles.selectWrap}>
                <select
                  id="plan"
                  name="plan"
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="" disabled>未選択</option>
                  <option value="lp">ランディングページ</option>
                  <option value="small">小規模サイト（2〜4P）</option>
                  <option value="brand">ブランドサイト</option>
                  <option value="consult">相談しながら決めたい</option>
                </select>
                <span className={styles.selectArrow} aria-hidden="true" />
              </div>
            </FormField>

            <FormField label="写真素材について" htmlFor="photo">
              <div className={styles.selectWrap}>
                <select
                  id="photo"
                  name="photo"
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="" disabled>未選択</option>
                  <option value="have">写真あり</option>
                  <option value="will-shoot">これから撮影予定</option>
                  <option value="consult">相談したい</option>
                </select>
                <span className={styles.selectArrow} aria-hidden="true" />
              </div>
            </FormField>
          </div>

          <FormField label="ご予算感（任意）" htmlFor="budget">
            <div className={styles.selectWrap}>
              <select
                id="budget"
                name="budget"
                className={styles.select}
                defaultValue=""
              >
                <option value="" disabled>未選択</option>
                <option value="60">6万円前後</option>
                <option value="120">12万円前後</option>
                <option value="240">24万円前後</option>
                <option value="unknown">未定</option>
              </select>
              <span className={styles.selectArrow} aria-hidden="true" />
            </div>
          </FormField>

          <FormField label="ご相談内容" required htmlFor="detail">
            <textarea
              id="detail"
              name="detail"
              rows={6}
              required
              className={styles.textarea}
              placeholder="ご相談内容やイメージ、ご希望の雰囲気などを自由にご記入ください。"
            />
          </FormField>

          {/* Notes */}
          <ul className={styles.notes}>
            <li>写真がなくても問題ありません。内容に合わせて進め方をご案内します。</li>
            <li>通常 24 時間以内を目安にご返信しています。</li>
          </ul>

          {/* Submit */}
          <div className={styles.cta}>
            {/* Ornament */}
            <div className={styles.ornament} aria-hidden="true">
              <span className={styles.ornamentLine} />
              <span className={styles.ornamentDot} />
              <span className={`${styles.ornamentLine} ${styles.ornamentLineRight}`} />
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} ${
                status === "loading" ? styles.submitDisabled : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  送信中...
                </>
              ) : (
                <>
                  <span>送信する</span>
                  <svg
                    className={styles.submitArrow}
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.5 6.5H11.5M7 2L11.5 6.5L7 11"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>

            {message && (
              <p
                className={`${styles.statusMsg} ${
                  status === "success"
                    ? styles.statusSuccess
                    : styles.statusError
                }`}
                role="status"
              >
                {status === "success" ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "0.1em" }}>
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                    <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "0.1em" }}>
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                    <path d="M7 4.5V7.5M7 9.5v.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                  </svg>
                )}
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/* ─── FormField ──────────────────────────────────── */
function FormField({ label, children, required, htmlFor }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        {required && (
          <span className={styles.req} aria-hidden="true"> *</span>
        )}
      </label>
      {children}
    </div>
  );
}