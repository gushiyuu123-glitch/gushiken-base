import React, { useEffect, useMemo, useRef, useState } from "react";

/* ───────────────────────── icons ───────────────────────── */
function LinkIcon({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 13.5l3-3" />
      <path d="M7.2 15.8l-1.4 1.4a3.2 3.2 0 1 1-4.5-4.5l3.1-3.1a3.2 3.2 0 0 1 4.5 0" />
      <path d="M16.8 8.2l1.4-1.4a3.2 3.2 0 1 1 4.5 4.5l-3.1 3.1a3.2 3.2 0 0 1-4.5 0" />
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
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

/* ───────────────────────── styles ───────────────────────── */
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("fsb-styles")) return;

  const css = `
.fsb-root {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  transition:
    opacity 0.6s cubic-bezier(0.22,1,0.36,1),
    transform 0.6s cubic-bezier(0.22,1,0.36,1);
}
.fsb-root.hidden {
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

/* toast */
.fsb-toast {
  pointer-events: none;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(9,8,6,0.88);
  padding: 6px 14px;
  font-family: 'DM Mono', monospace;
  font-size: 0.575rem;
  letter-spacing: 0.22em;
  color: rgba(255,255,255,0.40);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.28);
  transition:
    opacity 0.38s cubic-bezier(0.22,1,0.36,1),
    transform 0.38s cubic-bezier(0.22,1,0.36,1);
}
.fsb-toast.hidden {
  opacity: 0;
  transform: translateY(6px);
}

/* panel */
.fsb-panel {
  width: 260px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(9,8,6,0.90);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 2px 0 rgba(255,255,255,0.03) inset,
    0 24px 72px rgba(0,0,0,0.46),
    0 4px 16px rgba(0,0,0,0.24);
  overflow: hidden;
  transform-origin: bottom right;
  transition:
    opacity 0.42s cubic-bezier(0.22,1,0.36,1),
    transform 0.42s cubic-bezier(0.22,1,0.36,1);
}
.fsb-panel.closed {
  opacity: 0;
  transform: scale(0.96) translateY(8px);
  pointer-events: none;
}

.fsb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.055);
}
.fsb-header-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.52rem;
  letter-spacing: 0.34em;
  color: rgba(255,255,255,0.22);
  margin-bottom: 3px;
}
.fsb-header-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.42);
  line-height: 1;
}
.fsb-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.07);
  background: transparent;
  color: rgba(255,255,255,0.26);
  cursor: pointer;
  transition: border-color 0.26s, color 0.26s, background 0.26s;
}
.fsb-close-btn:hover {
  border-color: rgba(255,255,255,0.14);
  color: rgba(255,255,255,0.66);
  background: rgba(255,255,255,0.03);
}

/* list */
.fsb-list {
  list-style: none;
  margin: 0;
  padding: 6px 0 8px;
}
.fsb-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 11px 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  position: relative;
  opacity: 0;
  transform: translateX(6px);
  transition:
    background 0.22s,
    opacity 0.38s cubic-bezier(0.22,1,0.36,1),
    transform 0.38s cubic-bezier(0.22,1,0.36,1);
}
.fsb-item::after {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 0;
  height: 1px;
  background: rgba(255,255,255,0.038);
}
.fsb-item:last-child::after {
  display: none;
}
.fsb-item:hover {
  background: rgba(255,255,255,0.025);
}
.fsb-panel:not(.closed) .fsb-item {
  opacity: 1;
  transform: translateX(0);
}
.fsb-panel:not(.closed) .fsb-item:nth-child(1) { transition-delay: 0.04s; }
.fsb-panel:not(.closed) .fsb-item:nth-child(2) { transition-delay: 0.07s; }
.fsb-panel:not(.closed) .fsb-item:nth-child(3) { transition-delay: 0.10s; }
.fsb-panel:not(.closed) .fsb-item:nth-child(4) { transition-delay: 0.13s; }
.fsb-panel:not(.closed) .fsb-item:nth-child(5) { transition-delay: 0.16s; }
.fsb-panel:not(.closed) .fsb-item:nth-child(6) { transition-delay: 0.19s; }
.fsb-panel:not(.closed) .fsb-item:nth-child(7) { transition-delay: 0.22s; }
.fsb-panel:not(.closed) .fsb-item:nth-child(8) { transition-delay: 0.25s; }

.fsb-item-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.64rem;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.48);
  transition: color 0.22s, letter-spacing 0.32s cubic-bezier(0.22,1,0.36,1);
}
.fsb-item-sub {
  font-family: 'DM Mono', monospace;
  font-size: 0.52rem;
  letter-spacing: 0.28em;
  color: rgba(255,255,255,0.18);
  transition: color 0.22s;
}
.fsb-item:hover .fsb-item-label {
  color: rgba(255,255,255,0.78);
  letter-spacing: 0.072em;
}
.fsb-item:hover .fsb-item-sub {
  color: rgba(255,255,255,0.32);
}

/* native row */
.fsb-native {
  margin: 4px 10px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.025);
  cursor: pointer;
  opacity: 0;
  transform: translateY(4px);
  transition:
    background 0.22s,
    border-color 0.22s,
    opacity 0.38s cubic-bezier(0.22,1,0.36,1),
    transform 0.38s cubic-bezier(0.22,1,0.36,1);
  transition-delay: 0.28s;
}
.fsb-native:hover {
  background: rgba(255,255,255,0.042);
  border-color: rgba(255,255,255,0.10);
}
.fsb-panel:not(.closed) .fsb-native {
  opacity: 1;
  transform: translateY(0);
}

/* trigger */
.fsb-trigger {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(9,8,6,0.72);
  padding: 9px 16px 9px 10px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.04) inset,
    0 12px 42px rgba(0,0,0,0.30);
  cursor: pointer;
  transition:
    border-color 0.32s,
    background 0.32s,
    box-shadow 0.32s,
    transform 0.32s cubic-bezier(0.22,1,0.36,1);
}
.fsb-trigger:hover {
  border-color: rgba(255,255,255,0.17);
  background: rgba(14,12,9,0.84);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.05) inset,
    0 16px 52px rgba(0,0,0,0.38);
  transform: translateY(-1px);
}
.fsb-trigger:active {
  transform: translateY(0);
}
.fsb-trigger.open {
  border-color: rgba(255,255,255,0.15);
  background: rgba(14,12,9,0.84);
}

.fsb-trigger-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.36);
  transition:
    color 0.26s,
    border-color 0.26s,
    transform 0.52s cubic-bezier(0.22,1,0.36,1);
}
.fsb-trigger:hover .fsb-trigger-icon,
.fsb-trigger.open .fsb-trigger-icon {
  color: rgba(255,255,255,0.68);
  border-color: rgba(255,255,255,0.14);
}
.fsb-trigger.open .fsb-trigger-icon {
  transform: rotate(135deg);
}

.fsb-trigger-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.60rem;
  letter-spacing: 0.30em;
  color: rgba(255,255,255,0.38);
  transition: color 0.26s, letter-spacing 0.36s cubic-bezier(0.22,1,0.36,1);
}
.fsb-trigger:hover .fsb-trigger-label,
.fsb-trigger.open .fsb-trigger-label {
  color: rgba(255,255,255,0.68);
  letter-spacing: 0.34em;
}

@media (max-width: 640px) {
  .fsb-root {
    bottom: 1rem;
    right: 1rem;
  }

  .fsb-panel {
    width: min(260px, calc(100vw - 2rem));
  }
}
`;

  const styleTag = document.createElement("style");
  styleTag.id = "fsb-styles";
  styleTag.textContent = css;
  document.head.appendChild(styleTag);
}

/* ───────────────────────── helpers ───────────────────────── */
function buildItems(
  shareUrl,
  shareText,
  encode,
  openWin,
  closeMenu,
  copyFn,
  notify,
  setCopiedKey
) {
  return [
    {
      key: "copy",
      label: "Copy Link",
      sub: "URL",
      onClick: async () => {
        await copyFn(shareUrl);
        setCopiedKey("copy");
        notify("Copied to clipboard");
      },
    },
    {
      key: "x",
      label: "X / Twitter",
      sub: "Post",
      onClick: () => {
        openWin(
          `https://twitter.com/intent/tweet?text=${encode(shareText)}&url=${encode(shareUrl)}`
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
        notify("Link copied — open Instagram");
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

/* ───────────────────────── component ───────────────────────── */
export default function FloatingShareButton({
  label = "SHARE",
  showAfter = 260,
  url,
  title = "WORKS",
  shareText = "NOAH — WORKS",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [copiedKey, setCopiedKey] = useState("");
  const wrapRef = useRef(null);

  useEffect(() => {
    injectStyles();
  }, []);

  const shareUrl = useMemo(() => {
    if (url) return url;
    if (typeof window !== "undefined") return window.location.href;
    return "";
  }, [url]);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 2000);
    return () => clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    if (!copiedKey) return;
    const timer = setTimeout(() => setCopiedKey(""), 1400);
    return () => clearTimeout(timer);
  }, [copiedKey]);

  useEffect(() => {
    if (!isOpen) return;

    const onDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const encode = (value) => encodeURIComponent(value || "");

  const openWin = (targetUrl) => {
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = async (text) => {
    if (!text) return;

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const notify = (message) => setNotice(message);
  const closeMenu = () => setIsOpen(false);

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

  const handleNative = async () => {
    try {
      await navigator.share({
        title,
        text: shareText,
        url: shareUrl,
      });
      closeMenu();
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error(error);
      }
    }
  };

  const handleTrigger = async () => {
    if (preferNative) {
      await handleNative();
      return;
    }
    setIsOpen((prev) => !prev);
  };

  const items = buildItems(
    shareUrl,
    shareText,
    encode,
    openWin,
    closeMenu,
    copyToClipboard,
    notify,
    setCopiedKey
  );

  const handleItemClick = async (item) => {
    try {
      await item.onClick();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div ref={wrapRef} className={`fsb-root${isVisible ? "" : " hidden"}`}>
      <div className={`fsb-toast${notice ? "" : " hidden"}`} aria-live="polite">
        {notice || "\u00a0"}
      </div>

      <div
        className={`fsb-panel${isOpen ? "" : " closed"}`}
        role="dialog"
        aria-modal="false"
        aria-hidden={!isOpen}
      >
        <div className="fsb-header">
          <div>
            <p className="fsb-header-eyebrow">SHARE THIS PAGE</p>
            <p className="fsb-header-title">quiet handoff</p>
          </div>

          <button
            type="button"
            className="fsb-close-btn"
            aria-label="Close share menu"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon style={{ width: 12, height: 12 }} />
          </button>
        </div>

        <ul className="fsb-list" role="list">
          {items.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className="fsb-item"
                onClick={() => handleItemClick(item)}
              >
                <span className="fsb-item-label">
                  {copiedKey === item.key ? "Copied" : item.label}
                </span>
                <span className="fsb-item-sub">
                  {copiedKey === item.key ? "DONE" : item.sub}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {canNative && !preferNative && (
          <button type="button" className="fsb-native" onClick={handleNative}>
            <span className="fsb-item-label">More options</span>
            <span className="fsb-item-sub">SYSTEM</span>
          </button>
        )}
      </div>

      <button
        type="button"
        aria-label="Open share menu"
        aria-expanded={isOpen}
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