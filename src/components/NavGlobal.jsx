import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/works",   label: "WORKS" },
  { to: "/price",   label: "PRICE" },
  { to: "/news",    label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
];

/* Gold accent colour shared across both views */
const GOLD        = "#c9a865";
const GOLD_DIM    = "rgba(201,168,101,0.22)";
const GOLD_BORDER = "rgba(201,168,101,0.32)";

export default function NavGlobal() {
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen,   setIsOpen]   = useState(false);

  const buttonRef    = useRef(null);
  const firstLinkRef = useRef(null);

  /* ── Scroll → solid ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body lock ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ── Close on route change ── */
  useEffect(() => { setIsOpen(false); }, [pathname]);

  /* ── Esc close ── */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setTimeout(() => buttonRef.current?.focus(), 0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  /* ── Focus first link ── */
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => firstLinkRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ═══════════════════════════════════════════
          NAV BAR
      ═══════════════════════════════════════════ */}
      <nav
        className="fixed left-0 top-0 z-[9998] w-full transition-all duration-500"
        style={{
          height: 68,
          background: scrolled
            ? "rgba(6,6,6,0.80)"
            : "rgba(0,0,0,0.12)",
          backdropFilter: scrolled
            ? "blur(18px) saturate(130%)"
            : "blur(10px) saturate(115%)",
          WebkitBackdropFilter: scrolled
            ? "blur(18px) saturate(130%)"
            : "blur(10px) saturate(115%)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.09)"
            : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled
            ? `0 1px 0 ${GOLD_DIM}, 0 12px 40px rgba(0,0,0,0.22)`
            : "none",
        }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-8">
          {/* Logo */}
          <Link
            to="/"
            translate="no"
            className="flex items-center gap-3 text-white/94 no-underline transition-opacity duration-300 hover:opacity-70
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a865]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded"
            style={{
              fontSize: "0.88rem",
              fontWeight: 300,
              letterSpacing: "0.26em",
            }}
          >
            GUSHIKEN DESIGN
            {/* Thin gold rule */}
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 1,
                height: 12,
                background: GOLD_BORDER,
                flexShrink: 0,
              }}
            />
            {/* Brand sub-label */}
            <span
              aria-hidden="true"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.76rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.38)",
              }}
            >
              Web Design
            </span>
          </Link>

          {/* ── PC Links ── */}
          <div className="hidden items-center gap-11 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group relative pb-3 no-underline transition-colors duration-300
                             focus-visible:outline-none focus-visible:rounded"
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 300,
                    letterSpacing: "0.22em",
                    color: active
                      ? "rgba(255,255,255,0.94)"
                      : "rgba(255,255,255,0.5)",
                    paddingTop: "6px",
                    position: "relative",
                  }}
                >
                  {/* Active dot */}
                  {active && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        background: GOLD,
                        opacity: 0.55,
                      }}
                    />
                  )}

                  <span className="transition-colors duration-300 group-hover:text-white/92">
                    {item.label}
                  </span>

                  {/* Gold underline */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px transition-all duration-500"
                    style={{
                      width: active ? "100%" : "0%",
                      opacity: active ? 0.75 : 0,
                      background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                    }}
                  />
                  {/* Hover underline */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-50"
                    style={{
                      background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── Hamburger ── */}
          <button
            ref={buttonRef}
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="global-mobile-navigation"
            onClick={() => setIsOpen((v) => !v)}
            className="relative z-[10000] flex h-[18px] w-[26px] flex-col justify-between md:hidden
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a865]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{ width: i === 2 && !isOpen ? "60%" : "100%", marginLeft: i === 2 && !isOpen ? "auto" : 0 }}
                className={`h-px rounded bg-white/85 transition-all duration-400
                  ${i === 0 && isOpen ? "translate-y-[8.5px] rotate-45" : ""}
                  ${i === 1 && isOpen ? "opacity-0" : ""}
                  ${i === 2 && isOpen ? "-translate-y-[8.5px] -rotate-45 !w-full !ml-0" : ""}
                `}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          MOBILE OVERLAY
      ═══════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[9996] transition-all duration-350 md:hidden
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        style={{
          background: "rgba(0,0,0,0.32)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
        onClick={close}
        aria-hidden={!isOpen}
      />

      {/* ═══════════════════════════════════════════
          MOBILE PANEL
      ═══════════════════════════════════════════ */}
      <div
        id="global-mobile-navigation"
        className={`fixed left-[14px] right-[14px] top-[84px] z-[9997]
          max-h-[calc(100svh-108px)] max-w-[400px] mx-auto
          overflow-y-auto rounded-[20px]
          transition-all duration-350 md:hidden
          ${isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        style={{
          background: "rgba(10,10,10,0.96)",
          border: `1px solid rgba(255,255,255,0.09)`,
          borderTop: `1px solid ${GOLD_DIM}`,
          boxShadow: `0 0 0 0.5px rgba(201,168,101,0.06), 0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col px-5 pb-[1.4rem] pt-[1.1rem]">
          {/* Panel header */}
          <div
            className="mb-3 flex items-center justify-between pb-[0.8rem]"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* "MENU" with gold rule */}
            <p
              className="m-0 flex items-center gap-[0.55rem]"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.36)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: 14,
                  height: 1,
                  background: GOLD,
                  opacity: 0.55,
                  flexShrink: 0,
                }}
              />
              MENU
            </p>

            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close navigation"
              className="relative h-8 w-8 rounded-full transition duration-300 hover:bg-white/5
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a865]/40"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="absolute left-[9px] top-[15px] h-px w-[14px] rotate-45 rounded bg-white/62" />
              <span className="absolute left-[9px] top-[15px] h-px w-[14px] -rotate-45 rounded bg-white/62" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            {navItems.map((item, i) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  ref={i === 0 ? firstLinkRef : null}
                  onClick={close}
                  className="flex items-center justify-between py-[15px] no-underline transition duration-300
                             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a865]/40 focus-visible:rounded"
                  style={{
                    borderBottom: i < navItems.length - 1
                      ? "1px solid rgba(255,255,255,0.055)"
                      : "none",
                    color: active
                      ? GOLD
                      : "rgba(255,255,255,0.72)",
                    transform: "translateX(0)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.transform = "translateX(3px)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.95)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = active
                      ? GOLD
                      : "rgba(255,255,255,0.72)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      letterSpacing: "0.14em",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: active
                        ? "rgba(201,168,101,0.55)"
                        : "rgba(255,255,255,0.28)",
                    }}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer tagline */}
          <div
            className="mt-4 pt-[0.9rem]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.68rem",
                lineHeight: 1.8,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              Quiet structure.&ensp;Clear direction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}