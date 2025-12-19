// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkjyvly";

export default function Contact() {
  const rootRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle / loading / success / error
  const [message, setMessage] = useState("");

  /* ---------------------------------------------
     Page Fade-in（Silent UI v4.2）
  --------------------------------------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // ページ全体
    root.classList.add(styles.show);

    // 内側の aq-fade（段階表示）
    const innerFade = root.querySelectorAll(".aq-fade");
    innerFade.forEach((el) => el.classList.add("aq-show"));
  }, []);

  /* ---------------------------------------------
     Form Submit
  --------------------------------------------- */
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
    <section
      ref={rootRef}
      className={`${styles.contactSection} aq-fade`} // Silent UI v4.2
    >
      <div className={styles.container}>

        {/* 金ライン */}
        <div className={styles.goldLine} />

        {/* TITLE */}
        <h1 className={`${styles.title} aq-fade delay-1`} translate="no">
          CONTACT
        </h1>

        {/* LEAD */}
        <p className={`${styles.lead} aq-fade delay-2`}>
          制作のご相談・お見積りは、下記フォームよりお問い合わせください。<br />
          小さな内容でも構いません。まずはアイデアをお聞かせください。
        </p>

        {/* FORM */}
        <form className={`${styles.form} aq-fade delay-3`} onSubmit={handleSubmit}>

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

          <FormField label="ご希望のプラン" htmlFor="plan">
            <select id="plan" name="plan" className={styles.select} defaultValue="">
              <option value="" disabled>未選択</option>
              <option value="lp">ランディングページ</option>
              <option value="small">小規模サイト（3〜5P）</option>
              <option value="brand">ブランドサイト</option>
            </select>
          </FormField>

          <FormField label="写真素材について" htmlFor="photo">
            <select id="photo" name="photo" className={styles.select} defaultValue="">
              <option value="" disabled>未選択</option>
              <option value="have">写真あり</option>
              <option value="will-shoot">これから撮影予定</option>
              <option value="consult">相談したい</option>
            </select>
          </FormField>

          <FormField label="予算感（任意）" htmlFor="budget">
            <select id="budget" name="budget" className={styles.select} defaultValue="">
              <option value="" disabled>未選択</option>
              <option value="80">8万円</option>
              <option value="150">15万円</option>
              <option value="300">30万円</option>
              <option value="unknown">未定</option>
            </select>
          </FormField>

          <FormField label="詳細内容" required htmlFor="detail">
            <textarea
              id="detail"
              name="detail"
              rows={6}
              required
              className={styles.textarea}
            />
          </FormField>

          {/* 注意 */}
          <p className={`${styles.note} aq-fade delay-4`}>
            ※ 写真素材が明るいほど仕上がりが向上します。<br />
            ※ 通常 24 時間以内にご返信いたします。
          </p>

          {/* CTA */}
          <div className={`${styles.cta} aq-fade delay-5`}>
            <button
              type="submit"
              className={`${styles.submitBtn} ${
                status === "loading" ? styles.submitDisabled : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" ? "送信中..." : "送　信"}
            </button>

            {message && (
              <p
                className={`${styles.status} ${
                  status === "success"
                    ? styles.statusSuccess
                    : status === "error"
                    ? styles.statusError
                    : ""
                }`}
              >
                {message}
              </p>
            )}
          </div>

        </form>

        {/* その他の連絡方法 */}
        <div className={`${styles.altContacts} aq-fade delay-6`}>
          <p className={styles.altTitle}>その他のご連絡方法</p>

          <a
            href="https://line.me/ti/p/gD5Aj8QPPJ"
            className={styles.altLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINEで相談する（推奨）
          </a>
        </div>

      </div>
    </section>
  );
}

/* ---------------------------------------------
   共通フィールド
--------------------------------------------- */
function FormField({ label, children, required, htmlFor }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        {required && <span className={styles.req}> *</span>}
      </label>
      {children}
    </div>
  );
}
