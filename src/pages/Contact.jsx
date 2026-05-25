// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "../styles/contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkjyvly";

const PAGE_TITLE = "お問い合わせ｜GUSHIKEN DESIGN";
const PAGE_DESCRIPTION =
  "GUSHIKEN DESIGN お問い合わせ。沖縄のWeb制作・Webデザイン。店舗・サロン・ブランド向けに、印象と伝わり方を整えるサイト制作のご相談を受け付けています。";
const CANONICAL_URL = "https://gushikendesign.com/contact";

const WORKS_PATH = "/works";
const WORKS_URL = "https://gushikendesign.com/works";

const STARTERS = [
  "まだ内容が決まっていない",
  "LPか複数ページか相談したい",
  "予算に合う進め方を知りたい",
  "今のサイトの印象を整えたい",
];

const ALIGN = [
  "まずWORKSから、近い雰囲気の作品を1〜2つ選ぶ",
  "参考サイトは歓迎（完全再現ではなく最適化）",
  "方向性（トーン）を1案で確定してから本制作へ",
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
  const decision = String(formData.get("decision") || "").trim();

  const works1 = String(formData.get("works1") || "").trim();
  const detail = String(formData.get("detail") || "").trim();

  if (!name) errors.name = "お名前を入力してください。";

  if (!email) errors.email = "メールアドレスを入力してください。";
  else if (!isValidEmail(email)) errors.email = "メールアドレスの形式が正しくありません。";

  if (!siteType) errors.siteType = "制作形式を選択してください。";
  if (!budget) errors.budget = "ご予算感を選択してください。";
  if (!decision) errors.decision = "決裁者の状況を選択してください。";

  if (!works1) errors.works1 = "近い作品（WORKSのURL or 作品名）を入力してください。";

  if (!detail) errors.detail = "ご相談内容を入力してください。";
  else if (detail.length < 12) errors.detail = "もう少し詳しくお願いします（12文字以上）。";

  return errors;
}

export default function Contact() {
  const rootRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const isLoading = status === "loading";

  // ✅ this page only: index.css の膜やトーンの副作用を殺す
  useEffect(() => {
    document.body.classList.add("is-contact");
    return () => document.body.classList.remove("is-contact");
  }, []);

  // reveal
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const raf = requestAnimationFrame(() => root.classList.add(styles.show));
    return () => cancelAnimationFrame(raf);
  }, []);

  // SEO
  useEffect(() => {
    document.title = PAGE_TITLE;

    setMetaByName("description", PAGE_DESCRIPTION);
    setCanonical(CANONICAL_URL);

    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://gushikendesign.com";

    setMetaByProperty("og:title", PAGE_TITLE);
    setMetaByProperty("og:description", PAGE_DESCRIPTION);
    setMetaByProperty("og:url", `${origin}/contact`);
    setMetaByProperty("og:type", "website");

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", PAGE_TITLE);
    setMetaByName("twitter:description", PAGE_DESCRIPTION);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("idle");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // honeypot
    if (String(formData.get("website") || "").trim()) return;

    const errors = validateForm(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setMessage("入力内容を確認してください。");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) throw new Error(`Formspree error: ${res.status}`);

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
            <br />
            まずは{" "}
            <Link to={WORKS_PATH} className={styles.inlineLink}>
              WORKS
            </Link>{" "}
            から近い雰囲気を選んでいただくと、方向性が揃って進行が早いです。
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
              <p className={styles.panelLabel}>方向性の合わせ方</p>

              <div className={styles.starterList}>
                {ALIGN.map((item, index) => (
                  <div key={item} className={styles.starterItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
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
                <Select
                  id="siteType"
                  name="siteType"
                  required
                  error={fieldErrors.siteType}
                >
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
                <Select
                  id="budget"
                  name="budget"
                  required
                  error={fieldErrors.budget}
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="〜6万円">〜6万円</option>
                  <option value="〜15万円">〜15万円</option>
                  <option value="〜30万円">〜30万円</option>
                  <option value="30万円以上">30万円以上</option>
                  <option value="未定・相談したい">未定・相談したい</option>
                </Select>
              </FormField>
            </div>

            <div className={styles.formGrid}>
              <FormField
                label="決裁者の状況"
                required
                htmlFor="decision"
                error={fieldErrors.decision}
              >
                <Select
                  id="decision"
                  name="decision"
                  required
                  error={fieldErrors.decision}
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="決裁者（または同等）">決裁者（または同等）</option>
                  <option value="社内確認が必要">社内確認が必要</option>
                  <option value="未定">未定</option>
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

              <FormField label="備考（任意）" htmlFor="note">
                <input
                  id="note"
                  name="note"
                  type="text"
                  className={styles.input}
                  placeholder="（任意）"
                />
              </FormField>
            </div>

            <div className={styles.formGrid}>
              <FormField
                label={
                  <>
                    近い作品{" "}
                    <a
                      href={WORKS_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="WORKSを新しいタブで開く"
                      title="WORKS（新しいタブ）"
                      className={styles.worksLink}
                    >
                      （WORKS）
                    </a>
                  </>
                }
                required
                htmlFor="works1"
                error={fieldErrors.works1}
              >
                <input
                  id="works1"
                  name="works1"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="WORKSのURL または 作品名（必須）"
                  aria-invalid={Boolean(fieldErrors.works1)}
                  aria-describedby={fieldErrors.works1 ? "works1-error" : undefined}
                />
              </FormField>

              <FormField label="参考サイト（任意）" htmlFor="refUrl">
                <input
                  id="refUrl"
                  name="refUrl"
                  type="text"
                  className={styles.input}
                  placeholder="参考サイトのURL または 作品名（任意）"
                />
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
                placeholder="目的・現状・入れたい内容など、書ける範囲で大丈夫です。"
                aria-invalid={Boolean(fieldErrors.detail)}
                aria-describedby={fieldErrors.detail ? "detail-error" : undefined}
              />
            </FormField>

            <ul className={styles.notes}>
              <li>
                参考サイトの共有は歓迎です。ただし完全な再現ではなく、「どこが良いか」を読み、目的に合わせて最適化します。
              </li>
              <li>
                “イメージ違い”を防ぐため、制作前に方向性（トーン）を1案で確定してから本制作へ進みます。
              </li>
              <li>
                デザイン案（ラフを含む）の作成は制作業務のため、着手金の入金確認後に開始します。
              </li>
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

function FormField({ label, children, required = false, htmlFor, error, hint }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        {required && <span className={styles.req}> *</span>}
      </label>

      {hint && <div className={styles.hint}>{hint}</div>}

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