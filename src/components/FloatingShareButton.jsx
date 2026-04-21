import React, { useEffect, useMemo, useRef, useState } from "react";

/* ───────────────────────── icons ───────────────────────── */
function LinkIcon({ className = "", style }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style}
      fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 13.5l3-3" />
      <path d="M7.2 15.8l-1.4 1.4a3.2 3.2 0 1 1-4.5-4.5l3.1-3.1a3.2 3.2 0 0 1 4.5 0" />
      <path d="M16.8 8.2l1.4-1.4a3.2 3.2 0 1 1 4.5 4.5l-3.1 3.1a3.2 3.2 0 0 1-4.5 0" />
    </svg>
  );
}

function CloseIcon({ className = "", style }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style}
      fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

/* ── プラットフォームアイコン ── */
function IconCopy({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconX({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L2.25 2.25h6.918l4.26 5.632 4.816-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function IconLINE({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.627.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function IconInstagram({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function IconFacebook({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconLinkedIn({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconWhatsApp({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IconTelegram({ s }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

/* アイコンマップ */
const PLATFORM_ICONS = {
  copy:      (s) => <IconCopy s={s} />,
  x:         (s) => <IconX s={s} />,
  line:      (s) => <IconLINE s={s} />,
  instagram: (s) => <IconInstagram s={s} />,
  facebook:  (s) => <IconFacebook s={s} />,
  linkedin:  (s) => <IconLinkedIn s={s} />,
  whatsapp:  (s) => <IconWhatsApp s={s} />,
  telegram:  (s) => <IconTelegram s={s} />,
};

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
  pointer-events: none;
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
    transform 0.42s cubic-bezier(0.22,1,0.36,1),
    visibility 0s linear;
  pointer-events: auto;
}
.fsb-panel.closed {
  opacity: 0;
  transform: scale(0.96) translateY(8px);
  pointer-events: none;
  visibility: hidden;
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
  pointer-events: auto;
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
  pointer-events: auto;
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

/* アイコン + ラベルの左側グループ */
.fsb-item-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.fsb-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.035);
  color: rgba(255,255,255,0.32);
  flex-shrink: 0;
  transition: color 0.22s, background 0.22s, border-color 0.22s;
}
.fsb-item:hover .fsb-item-icon {
  color: rgba(255,255,255,0.72);
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.13);
}

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
  pointer-events: auto;
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
  pointer-events: auto;
  touch-action: manipulation;
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
function buildItems(shareUrl, shareText, encode, openWin, closeMenu, copyFn, notify, setCopiedKey) {
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
        openWin(`https://twitter.com/intent/tweet?text=${encode(shareText)}&url=${encode(shareUrl)}`);
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
  shareText = "GUSHIKEN DESIGN — WORKS",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [copiedKey, setCopiedKey] = useState("");
  const wrapRef = useRef(null);

  useEffect(() => { injectStyles(); }, []);

  const shareUrl = useMemo(() => {
    if (url) return url;
    if (typeof window !== "undefined") return window.location.href;
    return "";
  }, [url]);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > showAfter);
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
    const onPointerDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setIsOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const encode   = (value) => encodeURIComponent(value || "");
  const openWin  = (targetUrl) => window.open(targetUrl, "_blank", "noopener,noreferrer");
  const notify   = (message) => setNotice(message);
  const closeMenu = () => setIsOpen(false);

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

  const canNative   = typeof navigator !== "undefined" && typeof navigator.share === "function";
  const preferNative = useMemo(() => {
    if (!canNative || typeof window === "undefined") return false;
    try { return window.matchMedia("(pointer: coarse)").matches; }
    catch { return false; }
  }, [canNative]);

  const handleNative = async () => {
    try {
      await navigator.share({ title, text: shareText, url: shareUrl });
      closeMenu();
    } catch (error) {
      if (error?.name !== "AbortError") console.error(error);
    }
  };

  const handleTrigger = async () => {
    if (preferNative) { await handleNative(); return; }
    setIsOpen((prev) => !prev);
  };

  const items = buildItems(shareUrl, shareText, encode, openWin, closeMenu, copyToClipboard, notify, setCopiedKey);

  const handleItemClick = async (item) => {
    try { await item.onClick(); }
    catch (error) { console.error(error); }
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
          <button type="button" className="fsb-close-btn"
            aria-label="Close share menu" onClick={() => setIsOpen(false)}>
            <CloseIcon style={{ width: 12, height: 12 }} />
          </button>
        </div>

        <ul className="fsb-list" role="list">
          {items.map((item) => (
            <li key={item.key}>
              <button type="button" className="fsb-item"
                onClick={() => handleItemClick(item)}>

                {/* 左：アイコン + ラベル */}
                <span className="fsb-item-left">
                  <span className="fsb-item-icon">
                    {PLATFORM_ICONS[item.key]?.(11)}
                  </span>
                  <span className="fsb-item-label">
                    {copiedKey === item.key ? "Copied" : item.label}
                  </span>
                </span>

                {/* 右：サブテキスト */}
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

      <button type="button" aria-label="Open share menu" aria-expanded={isOpen}
        onClick={handleTrigger} className={`fsb-trigger${isOpen ? " open" : ""}`}>
        <span className="fsb-trigger-icon">
          {isOpen
            ? <CloseIcon style={{ width: 11, height: 11 }} />
            : <LinkIcon  style={{ width: 12, height: 12 }} />
          }
        </span>
        <span className="fsb-trigger-label">{label}</span>
      </button>
    </div>
  );
}