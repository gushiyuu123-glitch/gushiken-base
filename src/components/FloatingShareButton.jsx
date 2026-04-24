import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import "./floatingShareButton.css";

/* ───────────────── icons ───────────────── */

function LinkIcon({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 13.5l3-3" />
      <path d="M7.3 15.7l-1.45 1.45a3.15 3.15 0 0 1-4.46-4.46l3.02-3.02a3.15 3.15 0 0 1 4.46 0" />
      <path d="M16.7 8.3l1.45-1.45a3.15 3.15 0 0 1 4.46 4.46l-3.02 3.02a3.15 3.15 0 0 1-4.46 0" />
    </svg>
  );
}

function CloseIcon({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function IconCopy({ s }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconX({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L2.25 2.25h6.918l4.26 5.632 4.816-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function IconLINE({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.627.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function IconInstagram({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5.2"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle cx="12" cy="12" r="4.05" stroke="currentColor" strokeWidth="1.45" />
      <circle cx="17.2" cy="6.9" r="1.05" fill="currentColor" />
    </svg>
  );
}

function IconFacebook({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconLinkedIn({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconWhatsApp({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IconTelegram({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const PLATFORM_ICONS = {
  copy: (s) => <IconCopy s={s} />,
  x: (s) => <IconX s={s} />,
  line: (s) => <IconLINE s={s} />,
  instagram: (s) => <IconInstagram s={s} />,
  facebook: (s) => <IconFacebook s={s} />,
  linkedin: (s) => <IconLinkedIn s={s} />,
  whatsapp: (s) => <IconWhatsApp s={s} />,
  telegram: (s) => <IconTelegram s={s} />,
};

function buildItems({
  shareUrl,
  shareText,
  encode,
  openWin,
  closeMenu,
  copyFn,
  notify,
  setCopiedKey,
}) {
  return [
    {
      key: "copy",
      label: "Copy Link",
      sub: "URL",
      onClick: async () => {
        await copyFn(shareUrl);
        setCopiedKey("copy");
        notify("Copied");
      },
    },
    {
      key: "x",
      label: "X",
      sub: "Post",
      onClick: () => {
        openWin(
          `https://twitter.com/intent/tweet?text=${encode(shareText)}&url=${encode(
            shareUrl
          )}`
        );
        closeMenu();
      },
    },
    {
      key: "line",
      label: "LINE",
      sub: "Send",
      onClick: () => {
        openWin(`https://social-plugins.line.me/lineit/share?url=${encode(shareUrl)}`);
        closeMenu();
      },
    },
    {
      key: "instagram",
      label: "Instagram",
      sub: "Copy",
      onClick: async () => {
        await copyFn(shareUrl);
        setCopiedKey("instagram");
        notify("Copied for Instagram");
        openWin("https://www.instagram.com/");
        closeMenu();
      },
    },
    {
      key: "facebook",
      label: "Facebook",
      sub: "Share",
      onClick: () => {
        openWin(`https://www.facebook.com/sharer/sharer.php?u=${encode(shareUrl)}`);
        closeMenu();
      },
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      sub: "Post",
      onClick: () => {
        openWin(`https://www.linkedin.com/sharing/share-offsite/?url=${encode(shareUrl)}`);
        closeMenu();
      },
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      sub: "Send",
      onClick: () => {
        openWin(`https://wa.me/?text=${encode(`${shareText} ${shareUrl}`)}`);
        closeMenu();
      },
    },
    {
      key: "telegram",
      label: "Telegram",
      sub: "Send",
      onClick: () => {
        openWin(`https://t.me/share/url?url=${encode(shareUrl)}&text=${encode(shareText)}`);
        closeMenu();
      },
    },
  ];
}

export default function FloatingShareButton({
  label = "SHARE",
  showAfter = 260,
  url,
  title = "GUSHIKEN DESIGN",
  shareText = "GUSHIKEN DESIGN",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [copiedKey, setCopiedKey] = useState("");

  const wrapRef = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const firstItemRef = useRef(null);

  const location = useLocation();

  const shareUrl = useMemo(() => {
    if (url) return url;
    if (typeof window !== "undefined") return window.location.href;
    return "";
  }, [url, location.pathname, location.search, location.hash]);

  useEffect(() => {
    setIsOpen(false);
    setCopiedKey("");
    setNotice("");
  }, [location.pathname, location.search]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setIsVisible(window.scrollY > showAfter);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [showAfter]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(""), 2000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    if (!copiedKey) return undefined;
    const timer = window.setTimeout(() => setCopiedKey(""), 1400);
    return () => window.clearTimeout(timer);
  }, [copiedKey]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onPointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusables = Array.from(
        panel.querySelectorAll(
          'button:not([disabled]), a[href]:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, { capture: true });
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const raf = requestAnimationFrame(() => firstItemRef.current?.focus());
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  const encode = useCallback((value) => encodeURIComponent(value || ""), []);

  const openWin = useCallback((targetUrl) => {
    if (typeof window === "undefined") return;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  }, []);

  const notify = useCallback((message) => setNotice(message), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const copyToClipboard = useCallback(async (text) => {
    if (!text) return;

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }, []);

  const canNative =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  const preferNative = useMemo(() => {
    if (!canNative || typeof window === "undefined") return false;

    try {
      return window.matchMedia("(pointer: coarse)").matches;
    } catch {
      return false;
    }
  }, [canNative]);

  const handleNative = useCallback(async () => {
    if (!canNative) return;

    try {
      await navigator.share({ title, text: shareText, url: shareUrl });
      closeMenu();
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error(error);
      }
    }
  }, [canNative, title, shareText, shareUrl, closeMenu]);

  const handleTrigger = useCallback(async () => {
    if (preferNative) {
      await handleNative();
      return;
    }

    setIsOpen((prev) => !prev);
  }, [preferNative, handleNative]);

  const items = useMemo(
    () =>
      buildItems({
        shareUrl,
        shareText,
        encode,
        openWin,
        closeMenu,
        copyFn: copyToClipboard,
        notify,
        setCopiedKey,
      }),
    [shareUrl, shareText, encode, openWin, closeMenu, copyToClipboard, notify]
  );

  const handleItemClick = useCallback(async (item) => {
    try {
      await item.onClick();
    } catch (error) {
      console.error(error);
      setNotice("Failed");
    }
  }, []);

  return (
    <div ref={wrapRef} className={`fsb-root${isVisible ? "" : " hidden"}`}>
      <div
        className={`fsb-toast${notice ? "" : " hidden"}`}
        role="status"
        aria-live="polite"
      >
        {notice || "\u00a0"}
      </div>

  <div
  id="floating-share-panel"
  ref={panelRef}
  className={`fsb-panel${isOpen ? "" : " closed"}`}
  role="dialog"
  aria-modal="false"
  aria-label="Share this page"
  aria-hidden={!isOpen}
  {...(!isOpen ? { inert: true } : {})}
>
        <div className="fsb-header">
          <div>
            <p className="fsb-header-eyebrow">SHARE THIS PAGE</p>
            <p className="fsb-header-title">{title}</p>
          </div>

          <button
            type="button"
            className="fsb-close-btn"
            aria-label="Close share menu"
            onClick={() => {
              setIsOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <CloseIcon style={{ width: 12, height: 12 }} />
          </button>
        </div>

        <ul className="fsb-list" role="list">
          {items.map((item, index) => (
            <li key={item.key}>
              <button
                ref={index === 0 ? firstItemRef : null}
                type="button"
                className="fsb-item"
                onClick={() => handleItemClick(item)}
              >
                <span className="fsb-item-left">
                  <span className="fsb-item-icon">
                    {PLATFORM_ICONS[item.key]?.(11)}
                  </span>

                  <span className="fsb-item-text">
                    <span className="fsb-item-label">
                      {copiedKey === item.key ? "Copied" : item.label}
                    </span>
                    <span className="fsb-item-caption">
                      {copiedKey === item.key ? "DONE" : item.sub}
                    </span>
                  </span>
                </span>

                <span className="fsb-item-sub">
                  {copiedKey === item.key ? "OK" : "→"}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {canNative && !preferNative && (
          <button type="button" className="fsb-native" onClick={handleNative}>
            <span className="fsb-item-left">
              <span className="fsb-item-icon">
                <LinkIcon style={{ width: 11, height: 11 }} />
              </span>

              <span className="fsb-item-text">
                <span className="fsb-item-label">More options</span>
                <span className="fsb-item-caption">SYSTEM</span>
              </span>
            </span>

            <span className="fsb-item-sub">→</span>
          </button>
        )}
      </div>

      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close share menu" : "Open share menu"}
        aria-expanded={isOpen}
        aria-controls="floating-share-panel"
        onClick={handleTrigger}
        className={`fsb-trigger${isOpen ? " open" : ""}`}
      >
        <span className="fsb-trigger-icon">
          {isOpen ? (
            <CloseIcon style={{ width: 11, height: 11 }} />
          ) : (
            <LinkIcon style={{ width: 12, height: 12 }} />
          )}
        </span>

        <span className="fsb-trigger-label">{label}</span>
      </button>
    </div>
  );
}