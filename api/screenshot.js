import playwright from "playwright-core";

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function isBlockedHost(hostname) {
  const host = hostname.toLowerCase();

  if (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1"
  ) {
    return true;
  }

  if (
    /^10\./.test(host) ||
    /^192\.168\./.test(host) ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
  ) {
    return true;
  }

  return false;
}

export default async function handler(req, res) {
  const rawUrl = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;

  if (!rawUrl) {
    return res.status(400).json({ error: "Missing URL" });
  }

  if (!isValidHttpUrl(rawUrl)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  const parsedUrl = new URL(rawUrl);

  if (isBlockedHost(parsedUrl.hostname)) {
    return res.status(400).json({ error: "Blocked host" });
  }

  let browser;

  try {
    browser = await playwright.chromium.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
    });

    page.setDefaultNavigationTimeout(15000);
    page.setDefaultTimeout(15000);

    await page.goto(parsedUrl.toString(), {
      waitUntil: "networkidle",
      timeout: 15000,
    });

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