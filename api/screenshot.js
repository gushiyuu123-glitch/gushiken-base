// api/screenshot.js  or  pages/api/screenshot.js
// - playwright-core を使う前提（環境にChromiumが必要）
// - SSRF対策：ローカル/プライベート/リンクローカル/メタデータIP等を全面ブロック
// - リダイレクト/サブリクエストも route でブロック
// - 任意の token ガード（SCREENSHOT_TOKEN）
// - best-effort レート制限（メモリ。サーバレスではインスタンス単位）

import playwright from "playwright-core";
import dns from "node:dns/promises";
import net from "node:net";

const NAV_TIMEOUT_MS = 15_000;
const STEP_TIMEOUT_MS = 15_000;

// --- optional guards ---
const REQUIRE_TOKEN = !!process.env.SCREENSHOT_TOKEN; // tokenを設定したら必須化
const SCREENSHOT_TOKEN = process.env.SCREENSHOT_TOKEN || "";

// 80/443 以外のポートを許可したいなら "true" に（基本はfalse推奨）
const ALLOW_NON_STANDARD_PORTS = process.env.SCREENSHOT_ALLOW_ANY_PORT === "1";

// 許可ホスト限定モード（必要なら）: "example.com,sub.example.com"
const ALLOWLIST_HOSTS = (process.env.SCREENSHOT_ALLOWLIST_HOSTS || "")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

// --- best-effort rate limit (per instance) ---
const RL_WINDOW_MS = 60_000; // 1分
const RL_MAX = 20; // 1分あたり（目安）
const rl = new Map(); // ip -> { count, resetAt }

function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.length) return xff.split(",")[0].trim();
  if (Array.isArray(xff) && xff[0]) return String(xff[0]).trim();
  return (req.socket?.remoteAddress || "").trim();
}

function rateLimit(req, res) {
  const ip = getClientIp(req) || "unknown";
  const now = Date.now();

  const entry = rl.get(ip);
  if (!entry || now > entry.resetAt) {
    rl.set(ip, { count: 1, resetAt: now + RL_WINDOW_MS });
    return true;
  }

  entry.count += 1;
  if (entry.count > RL_MAX) {
    res.setHeader("Retry-After", String(Math.ceil((entry.resetAt - now) / 1000)));
    res.status(429).json({ error: "Too many requests" });
    return false;
  }

  return true;
}

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function isAllowedPort(urlObj) {
  const port = urlObj.port ? Number(urlObj.port) : null;
  if (!port) return true; // empty -> default 80/443
  if (ALLOW_NON_STANDARD_PORTS) return true;
  return port === 80 || port === 443;
}

function isAllowlistedHost(hostname) {
  if (!ALLOWLIST_HOSTS.length) return true;
  const host = hostname.toLowerCase();
  return ALLOWLIST_HOSTS.includes(host);
}

function isBlockedHostname(hostname) {
  const host = hostname.toLowerCase();

  // localhost / loopback
  if (host === "localhost" || host === "127.0.0.1" || host === "::1") return true;

  // 末尾 .local / .internal など（任意で広めに）
  if (host.endsWith(".local") || host.endsWith(".internal")) return true;

  return false;
}

// IPブロック（IPv4/IPv6）
function isBlockedIp(ip) {
  const kind = net.isIP(ip);
  if (!kind) return false;

  // IPv4
  if (kind === 4) {
    const parts = ip.split(".").map((n) => Number(n));
    const [a, b] = parts;

    // 0.0.0.0/8
    if (a === 0) return true;
    // 127.0.0.0/8 loopback
    if (a === 127) return true;
    // 10.0.0.0/8 private
    if (a === 10) return true;
    // 172.16.0.0/12 private
    if (a === 172 && b >= 16 && b <= 31) return true;
    // 192.168.0.0/16 private
    if (a === 192 && b === 168) return true;
    // 169.254.0.0/16 link-local（クラウドメタデータ事故）
    if (a === 169 && b === 254) return true;

    // 100.64.0.0/10 (CGNAT) は環境により内部扱いのこともあるのでブロック寄り
    if (a === 100 && b >= 64 && b <= 127) return true;

    // multicast 224.0.0.0/4
    if (a >= 224 && a <= 239) return true;

    return false;
  }

  // IPv6
  if (kind === 6) {
    const v = ip.toLowerCase();

    // loopback
    if (v === "::1") return true;

    // unspecified
    if (v === "::") return true;

    // link-local fe80::/10
    if (v.startsWith("fe80:") || v.startsWith("fe90:") || v.startsWith("fea0:") || v.startsWith("feb0:")) {
      return true;
    }

    // unique local fc00::/7
    if (v.startsWith("fc") || v.startsWith("fd")) return true;

    // multicast ff00::/8
    if (v.startsWith("ff")) return true;

    return false;
  }

  return false;
}

// DNS解決してIP帯をブロック（hostname->ips）
async function resolveAndCheck(hostname) {
  // hostname が IP literal の場合
  if (net.isIP(hostname)) {
    if (isBlockedIp(hostname)) return { ok: false, reason: "Blocked IP" };
    return { ok: true };
  }

  let addrs = [];
  try {
    addrs = await dns.lookup(hostname, { all: true });
  } catch {
    // 解決不能は拒否（安全側）
    return { ok: false, reason: "DNS lookup failed" };
  }

  for (const a of addrs) {
    if (a?.address && isBlockedIp(a.address)) {
      return { ok: false, reason: "Blocked IP (resolved)" };
    }
  }
  return { ok: true };
}

export default async function handler(req, res) {
  // method guard
  if (req.method && req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // rate limit (best effort)
  if (!rateLimit(req, res)) return;

  // optional token guard
  if (REQUIRE_TOKEN) {
    const token =
      (req.headers.authorization || "").replace(/^Bearer\s+/i, "").trim() ||
      (Array.isArray(req.query.token) ? req.query.token[0] : req.query.token) ||
      "";

    if (token !== SCREENSHOT_TOKEN) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }

  const rawUrl = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
  if (!rawUrl) return res.status(400).json({ error: "Missing URL" });
  if (!isValidHttpUrl(rawUrl)) return res.status(400).json({ error: "Invalid URL" });

  const inputUrl = new URL(rawUrl);

  // allowlist mode
  if (!isAllowlistedHost(inputUrl.hostname)) {
    return res.status(400).json({ error: "Host not allowed" });
  }

  // hostname basic block
  if (isBlockedHostname(inputUrl.hostname)) {
    return res.status(400).json({ error: "Blocked host" });
  }

  // port block
  if (!isAllowedPort(inputUrl)) {
    return res.status(400).json({ error: "Blocked port" });
  }

  // DNS / IP block
  const firstCheck = await resolveAndCheck(inputUrl.hostname);
  if (!firstCheck.ok) {
    return res.status(400).json({ error: firstCheck.reason || "Blocked destination" });
  }

  // Route-level SSRF guard cache (per request)
  const hostSafetyCache = new Map(); // hostname -> { ok, reason }

  async function isSafeRequestUrl(u) {
    let parsed;
    try {
      parsed = new URL(u);
    } catch {
      return { ok: false, reason: "Bad URL" };
    }

    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return { ok: false, reason: "Bad protocol" };
    }

    if (!isAllowlistedHost(parsed.hostname)) {
      return { ok: false, reason: "Host not allowed" };
    }

    if (isBlockedHostname(parsed.hostname)) {
      return { ok: false, reason: "Blocked host" };
    }

    if (!isAllowedPort(parsed)) {
      return { ok: false, reason: "Blocked port" };
    }

    const key = parsed.hostname.toLowerCase();
    if (hostSafetyCache.has(key)) return hostSafetyCache.get(key);

    const r = await resolveAndCheck(parsed.hostname);
    hostSafetyCache.set(key, r);
    return r;
  }

  let browser;

  try {
    browser = await playwright.chromium.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
      // service workerが暴れるサイトで安定する
      serviceWorkers: "block",
      // 余計なDLを発生させない
      acceptDownloads: false,
    });

    // ✅ すべてのリクエストを監視して内側アクセスをブロック（リダイレクト/サブリクエスト含む）
    await context.route("**/*", async (route) => {
      const req = route.request();
      const u = req.url();

      const verdict = await isSafeRequestUrl(u);
      if (!verdict.ok) return route.abort();

      // 速度・安定のため、不要なものは落としてもOK（必要ならコメントアウト）
      const type = req.resourceType();
      if (type === "websocket" || type === "eventsource") return route.abort();
      // mediaは基本いらない（止まりやすい）
      if (type === "media") return route.abort();

      return route.continue();
    });

    const page = await context.newPage();
    page.setDefaultNavigationTimeout(NAV_TIMEOUT_MS);
    page.setDefaultTimeout(STEP_TIMEOUT_MS);

    // まずDOMが立ち上がるまで。networkidleは広告等で終わらないことがある
    await page.goto(inputUrl.toString(), {
      waitUntil: "domcontentloaded",
      timeout: NAV_TIMEOUT_MS,
    });

    // 余裕があれば軽く落ち着くまで待つ（失敗しても無視）
    await page.waitForLoadState("networkidle", { timeout: 2500 }).catch(() => {});
    await page.waitForTimeout(250).catch(() => {});

    // ✅ 最終URL（リダイレクト後）も再チェック
    const finalUrl = page.url();
    const finalVerdict = await isSafeRequestUrl(finalUrl);
    if (!finalVerdict.ok) {
      return res.status(400).json({ error: "Redirected to blocked destination" });
    }

    const screenshot = await page.screenshot({
      type: "jpeg",
      quality: 80,
      fullPage: false,
    });

    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(screenshot);
  } catch (err) {
    console.error("screenshot failed:", err);
    return res.status(500).json({ error: "screenshot failed" });
  } finally {
    if (browser) {
      await browser.close().catch(() => {});
    }
  }
}