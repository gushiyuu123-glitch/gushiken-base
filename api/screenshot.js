// api/screenshot.js
import playwright from "playwright-core";

export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: "Missing URL" });
  }

  try {
    const browser = await playwright.chromium.launch({
      args: ["--no-sandbox"],
    });

    const page = await browser.newPage({
      viewport: { width: 1280, height: 800 },
    });

    await page.goto(url, { waitUntil: "domcontentloaded" });

    const screenshot = await page.screenshot({
      type: "jpeg",
      quality: 80,
    });

    await browser.close();

    res.setHeader("Content-Type", "image/jpeg");
    res.send(screenshot);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "screenshot failed" });
  }
}
