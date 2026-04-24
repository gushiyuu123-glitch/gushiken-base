// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "../styles/contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkjyvly";

const PAGE_TITLE = "お問い合わせ｜GUSHIKEN DESIGN";
const PAGE_DESCRIPTION =
  "GUSHIKEN DESIGN お問い合わせ。沖縄のWeb制作・Webデザイン。店舗・サロン・ブランド向けに、印象と伝わり方を整えるサイト制作のご相談を受け付けています。";
const CANONICAL_URL = "https://gushikendesign.com/contact";

const STARTERS = [
  "まだ内容が決まっていない",
  "LPか複数ページか相談したい",
  "予算に合う進め方を知りたい",
  "今のサイトの印象を整えたい",
];

const FLOW = [
  { num: "01", title: "内容確認", text: "ご相談内容を確認します。" },
  { num: "02", title: "整理・提案", text: "必要な構成や進め方を整理します。" },
  { num: "03", title: "お見積もり", text: "制作範囲と費用感をご案内します。" },
];

function setMetaByName(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;

  let tag = document.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm(formData) {
  const errors = {};

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const siteType = String(formData.get("siteType") || "").trim();
  const budget = String(formData.get("budget") || "").trim();
  const detail = String(formData.get("detail") || "").trim();

  if (!name) errors.name = "お名前を入力してください。";

  if (!email) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!isValidEmail(email)) {
    errors.email = "メールアドレスの形式を確認してください。";
  }

  if (!siteType) errors.siteType = "制作形式を選択してください。";
  if (!budget) errors.budget = "ご予算感を選択してください。";
  if (!detail) errors.detail = "ご相談内容を入力してください。";

  return errors;
}

export default function Contact() {
  const rootRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const isLoading = status === "loading";

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const raf = requestAnimationFrame(() => {
      root.classList.add(styles.show);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLE;

    setMetaByName("description", PAGE_DESCRIPTION);
    setCanonical(CANONICAL_URL);

    setMetaByProperty("og:title", PAGE_TITLE);
    setMetaByProperty("og:description", PAGE_DESCRIPTION);
    setMetaByProperty("og:url", CANONICAL_URL);
    setMetaByProperty("og:type", "website");

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", PAGE_TITLE);
    setMetaByName("twitter:description", PAGE_DESCRIPTION);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // honeypot
    if (String(formData.get("website") || "").trim()) {
      setStatus("success");
      setMessage("送信が完了しました。お問い合わせありがとうございます。");
      form.reset();
      return;
    }

    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setMessage("入力内容をご確認ください。");
      return;
    }

    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    formData.append("_subject", "GUSHIKEN DESIGN お問い合わせ");
    formData.append("_replyto", String(formData.get("email") || ""));

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setMessage("送信が完了しました。お問い合わせありがとうございます。");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <section
      ref={rootRef}
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.inner}>
        <div className={styles.sideLine} aria-hidden="true" />

        <header className={styles.header}>
          <SectionSvgTitle
            title="CONTACT"
            sub="CONTACT / REQUEST"
            className={styles.svgTitle}
          />

          <h1 id="contact-heading" className={styles.hiddenHeading}>
            お問い合わせ
          </h1>

          <p className={styles.sectionTitle}>お問い合わせ / CONTACT FORM</p>

          <p className={styles.lead}>
            まだ内容が固まっていない段階でも大丈夫です。
            <br />
            <span>LPか複数ページか、予算に合う進め方から整理できます。</span>
          </p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.guidePanel} aria-label="相談前のご案内">
            <p className={styles.panelLabel}>相談できる段階</p>

            <div className={styles.starterList}>
              {STARTERS.map((item, index) => (
                <div key={item} className={styles.starterItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className={styles.flowBlock}>
              <p className={styles.panelLabel}>送信後の流れ</p>

              <div className={styles.flowList}>
                {FLOW.map((item) => (
                  <div key={item.num} className={styles.flowItem}>
                    <span className={styles.flowNum}>{item.num}</span>
                    <div>
                      <p className={styles.flowTitle}>{item.title}</p>
                      <p className={styles.flowText}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <form className={styles.formPanel} onSubmit={handleSubmit} noValidate>
            <div className={styles.hp} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className={styles.formGrid}>
              <FormField
                label="お名前"
                required
                htmlFor="name"
                error={fieldErrors.name}
              >
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={styles.input}
                  autoComplete="name"
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
              </FormField>

              <FormField
                label="メールアドレス"
                required
                htmlFor="email"
                error={fieldErrors.email}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={styles.input}
                  autoComplete="email"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
              </FormField>
            </div>

            <FormField label="電話番号（任意）" htmlFor="tel">
              <input
                id="tel"
                name="tel"
                type="tel"
                className={styles.input}
                autoComplete="tel"
              />
            </FormField>

            <div className={styles.formGrid}>
              <FormField
                label="制作形式"
                required
                htmlFor="siteType"
                error={fieldErrors.siteType}
              >
                <Select id="siteType" name="siteType" required error={fieldErrors.siteType}>
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="lp">LP（1ページ）</option>
                  <option value="multi">複数ページサイト</option>
                  <option value="renewal">既存サイトのリニューアル</option>
                  <option value="consult">相談しながら決めたい</option>
                </Select>
              </FormField>

              <FormField
                label="ご予算感"
                required
                htmlFor="budget"
                error={fieldErrors.budget}
              >
                <Select id="budget" name="budget" required error={fieldErrors.budget}>
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="under-60">〜6万円</option>
                  <option value="under-150">〜15万円</option>
                  <option value="under-300">〜30万円</option>
                  <option value="over-300">30万円以上</option>
                  <option value="undecided">未定・相談したい</option>
                </Select>
              </FormField>
            </div>

            <div className={styles.formGrid}>
              <FormField label="素材の有無（任意）" htmlFor="materials">
                <Select id="materials" name="materials">
                  <option value="" disabled>
                    未選択
                  </option>
                  <option value="have">写真・文章あり</option>
                  <option value="partial">一部あり</option>
                  <option value="none">まだ揃っていない</option>
                  <option value="consult">相談したい</option>
                </Select>
              </FormField>

              <FormField label="公開希望時期（任意）" htmlFor="timeline">
                <Select id="timeline" name="timeline">
                  <option value="" disabled>
                    未選択
                  </option>
                  <option value="soon">なるべく早く</option>
                  <option value="1month">1ヶ月前後</option>
                  <option value="2-3months">2〜3ヶ月以内</option>
                  <option value="undecided">未定</option>
                </Select>
              </FormField>
            </div>

            <FormField
              label="ご相談内容"
              required
              htmlFor="detail"
              error={fieldErrors.detail}
            >
              <textarea
                id="detail"
                name="detail"
                rows={7}
                required
                className={styles.textarea}
                placeholder="目的・現状・参考サイト・入れたい内容など、書ける範囲で大丈夫です。"
                aria-invalid={Boolean(fieldErrors.detail)}
                aria-describedby={fieldErrors.detail ? "detail-error" : undefined}
              />
            </FormField>

            <ul className={styles.notes}>
              <li>まだ内容が固まっていなくてもご相談いただけます。</li>
              <li>写真がある場合、明るさ・色の軽い補正は料金内です。</li>
              <li>内容確認後、制作範囲と費用感をご案内します。</li>
            </ul>

            <div className={styles.cta}>
              <button
                type="submit"
                className={`${styles.submitBtn} ${isLoading ? styles.submitDisabled : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    <span>送信中</span>
                  </>
                ) : (
                  <>
                    <span>送信する</span>
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>

              {message && (
                <p
                  className={`${styles.statusMsg} ${
                    status === "success" ? styles.statusSuccess : styles.statusError
                  }`}
                  role={status === "error" ? "alert" : "status"}
                >
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children, required = false, htmlFor, error }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        {required && <span className={styles.req}> *</span>}
      </label>

      {children}

      {error && (
        <p id={`${htmlFor}-error`} className={styles.fieldError}>
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ id, name, children, required = false, error }) {
  return (
    <div className={styles.selectWrap}>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className={styles.select}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        {children}
      </select>
      <span className={styles.selectArrow} aria-hidden="true" />
    </div>
  );
}