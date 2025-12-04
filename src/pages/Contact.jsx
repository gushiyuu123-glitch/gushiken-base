// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkjyvly";

export default function Contact() {
  const rootRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle / loading / success / error
  const [message, setMessage] = useState("");

  // --- フェードイン ---
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.classList.add(styles.show);
  }, []);

  // --- フォーム送信 ---
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
    <section ref={rootRef} className={styles.contactSection}>
      <div className={styles.container}>

        {/* 左ゴールドライン */}
        <div className={styles.goldLine} />

        {/* タイトル */}
        <h1 className={styles.title} translate="no">CONTACT</h1>

        {/* リード */}
        <p className={styles.lead}>
          制作のご相談・お見積りは、下記フォームよりお問い合わせください。<br />
          小さな内容でも構いません。まずはアイデアをお聞かせください。
        </p>

        {/* フォーム */}
        <form className={styles.form} onSubmit={handleSubmit}>
          
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

          {/* 注意書き */}
          <p className={styles.note}>
            ※ 写真素材は、できるだけ明るく鮮明なものをご用意いただけると仕上がりが大きく向上します。<br />
            ※ 通常 24 時間以内にご返信いたします。
          </p>

          {/* CTA */}
          <div className={styles.cta}>
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
        {/* 直接のご連絡 */}
<div className={styles.altContacts}>
  <p className={styles.altTitle}>その他のご連絡方法</p>

  <a
    href="https://line.me/ti/p/gD5Aj8QPPJ"
    className={styles.altLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    LINEで相談する（推奨）
  </a>

  <a href="tel:09019452830" className={styles.altLink}>
    090-1945-2830（お急ぎの方はこちら）
  </a>
</div>

      </div>
    </section>
  );
}

/* 共通フィールドコンポーネント */
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
