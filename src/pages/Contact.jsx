// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import styles from "../styles/contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkjyvly";

const PAGE_TITLE = "お問い合わせ｜GUSHIKEN DESIGN";
const PAGE_DESCRIPTION =
  "GUSHIKEN DESIGNへのお問い合わせ。沖縄を拠点に、店舗・サロン・ブランド向けのホームページ制作・LP制作・Webデザインのご相談を受け付けています。";
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
  "WORKSから近い雰囲気の作品を1つ選ぶ",
  "参考サイトは歓迎。完全再現ではなく最適化します",
  "制作前にトーンを整理してから進めます",
];

const FLOW = [
  {
    num: "01",
    title: "内容確認",
    text: "ご相談内容を確認し、目的や必要な情報を整理します。",
  },
  {
    num: "02",
    title: "方向整理",
    text: "構成・印象・必要なページ数の方向を整えます。",
  },
  {
    num: "03",
    title: "お見積もり",
    text: "制作範囲と費用感、進行スケジュールをご案内します。",
  },
];

function setMetaByName(name, content) {
  if (!content || typeof document === "undefined") return;

  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content || typeof document === "undefined") return;

  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href || typeof document === "undefined") return;

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
    errors.email = "メールアドレスの形式が正しくありません。";
  }

  if (!siteType) errors.siteType = "制作形式を選択してください。";
  if (!budget) errors.budget = "ご予算感を選択してください。";

  if (!detail) {
    errors.detail = "ご相談内容を入力してください。";
  } else if (detail.length < 12) {
    errors.detail = "もう少し詳しくお願いします（12文字以上）。";
  }

  return errors;
}

export default function Contact() {
  const rootRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const isLoading = status === "loading";

  useEffect(() => {
    document.body.classList.add("is-contact-detail");

    return () => {
      document.body.classList.remove("is-contact-detail");
    };
  }, []);

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

    setStatus("idle");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

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

      if (!res.ok) {
        throw new Error(`Formspree error: ${res.status}`);
      }

      setStatus("success");
      setMessage("送信が完了しました。お問い合わせありがとうございます。");
      setFieldErrors({});
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
      className={styles.cdRoot}
      aria-labelledby="contact-heading"
    >
      <div className={styles.cdContainer}>
        <div className={styles.cdSideLine} aria-hidden="true" />

        <header className={`${styles.cdHeader} ${styles.reveal} ${styles.d1}`}>
          <h1 id="contact-heading" className={styles.hiddenHeading}>
            お問い合わせ
          </h1>

          <SectionSvgTitle
            title="CONTACT"
            sub="CONTACT / REQUEST"
            className={styles.cdSvgTitle}
          />

          <p className={styles.pageTitle}>お問い合わせ / CONTACT FORM</p>

          <p className={styles.lead}>
            まだ内容が固まっていない段階でも大丈夫です。
            <br />
            <span>LPか複数ページか、予算に合う進め方から整理できます。</span>
            <br />
            近い雰囲気があれば、{" "}
            <Link to={WORKS_PATH} className={styles.inlineLink}>
              WORKS
            </Link>{" "}
            を参考にしながら方向性を合わせます。
          </p>

          <p className={styles.taxNote}>
            返信目安：24時間以内 / 沖縄県内・全国オンライン対応
          </p>
        </header>

        <div className={styles.cdLayout}>
          <aside
            className={`${styles.guidePanel} ${styles.reveal} ${styles.d2}`}
            aria-label="相談前のご案内"
          >
            <div className={styles.panelInner}>
              <GuideBlock label="相談できる段階" items={STARTERS} />

              <GuideBlock label="方向性の合わせ方" items={ALIGN} />

              <div className={styles.guideBlock}>
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
            </div>
          </aside>

          <form
            className={`${styles.formPanel} ${styles.reveal} ${styles.d3}`}
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="hidden"
              name="_subject"
              value="GUSHIKEN DESIGN｜お問い合わせ"
            />

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

            <div className={styles.formHead}>
              <p className={styles.formLabel}>REQUEST FORM</p>
              <p className={styles.formLead}>
                必須項目は最小限にしています。分かる範囲でご入力ください。
              </p>
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
                  aria-describedby={
                    fieldErrors.email ? "email-error" : undefined
                  }
                />
              </FormField>
            </div>

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
                  <option value="LP（1ページ）">LP（1ページ）</option>
                  <option value="複数ページサイト">複数ページサイト</option>
                  <option value="既存サイトのリニューアル">
                    既存サイトのリニューアル
                  </option>
                  <option value="相談しながら決めたい">
                    相談しながら決めたい
                  </option>
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
              <FormField label="公開希望時期（任意）" htmlFor="timeline">
                <Select id="timeline" name="timeline">
                  <option value="" disabled>
                    未選択
                  </option>
                  <option value="なるべく早く">なるべく早く</option>
                  <option value="1ヶ月前後">1ヶ月前後</option>
                  <option value="2〜3ヶ月以内">2〜3ヶ月以内</option>
                  <option value="未定">未定</option>
                </Select>
              </FormField>

              <FormField label="素材の有無（任意）" htmlFor="materials">
                <Select id="materials" name="materials">
                  <option value="" disabled>
                    未選択
                  </option>
                  <option value="写真・文章あり">写真・文章あり</option>
                  <option value="一部あり">一部あり</option>
                  <option value="まだ揃っていない">まだ揃っていない</option>
                  <option value="相談したい">相談したい</option>
                </Select>
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
                      className={styles.worksLink}
                    >
                      （WORKS）
                    </a>
                  </>
                }
                htmlFor="works1"
                hint="任意ですが、近い作品があると方向性を合わせやすくなります。"
              >
                <input
                  id="works1"
                  name="works1"
                  type="text"
                  className={styles.input}
                  placeholder="作品名 または URL（任意）"
                />
              </FormField>

              <FormField label="参考サイト（任意）" htmlFor="refUrl">
                <input
                  id="refUrl"
                  name="refUrl"
                  type="text"
                  className={styles.input}
                  placeholder="参考サイトのURLなど"
                />
              </FormField>
            </div>

            <FormField
              label="ご相談内容"
              required
              htmlFor="detail"
              error={fieldErrors.detail}
              hint="目的・現状・入れたい内容など、書ける範囲で大丈夫です。"
            >
              <textarea
                id="detail"
                name="detail"
                rows={7}
                required
                className={styles.textarea}
                placeholder="例：美容室のLPを作りたい / 今のサイトを上質に見せたい / 予約につながる導線を整えたい"
                aria-invalid={Boolean(fieldErrors.detail)}
                aria-describedby={
                  fieldErrors.detail ? "detail-error" : undefined
                }
              />
            </FormField>

            <ul className={styles.notes}>
              <li>
                参考サイトの共有は歓迎です。完全再現ではなく、目的に合わせて最適化します。
              </li>
              <li>
                制作前に方向性を整理し、イメージ違いが起きにくい進め方をします。
              </li>
              <li>
                デザイン案の作成は制作業務のため、正式なご依頼後に開始します。
              </li>
            </ul>

            <div className={styles.actions}>
              <button
                type="submit"
                className={`${styles.submitBtn} ${
                  isLoading ? styles.submitDisabled : ""
                }`}
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
                    status === "success"
                      ? styles.statusSuccess
                      : styles.statusError
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

function GuideBlock({ label, items }) {
  return (
    <div className={styles.guideBlock}>
      <p className={styles.panelLabel}>{label}</p>

      <div className={styles.rowList}>
        {items.map((item, index) => (
          <div key={item} className={styles.guideRow}>
            <span className={styles.rowNo}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className={styles.rowText}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormField({ label, children, required = false, htmlFor, error, hint }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        {required && <span className={styles.req}> *</span>}
      </label>

      {hint && <p className={styles.hint}>{hint}</p>}

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