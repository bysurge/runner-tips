// Builds the offline demo: one self-contained HTML file (no internet needed) with a snapshot of the
// real tips and visitor numbers, the fonts embedded, and a phone frame + demo controls for presenting.
//
//   node tools/build-demo.mjs            -> demo/offline/runner-tips-demo.html
//
// Needs internet while building (live data, fonts). The moderator key for the visitor numbers is read
// from SECRETS.md, which is not in git.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = p => readFile(join(root, p), "utf8");

// ---------- live data ----------
const configJs = await read("site/config.js");
const pick = key => configJs.match(new RegExp(key + ':\\s*"([^"]+)"'))[1];
const url = pick("supabaseUrl"), key = pick("supabaseKey"), hubCode = pick("hubCode"), hubName = pick("hubName");
let adminKey = null;
if (existsSync(join(root, "SECRETS.md"))) adminKey = ((await read("SECRETS.md")).match(/Moderator key:\*\*\s*`([^`]+)`/) || [])[1] || null;

const rpc = async (fn, body) => {
  const r = await fetch(`${url}/rest/v1/rpc/${fn}`, { method: "POST", headers: { apikey: key, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`${fn}: ${r.status} ${await r.text()}`);
  return r.json();
};
const live = await rpc("get_tips", { p_code: hubCode, p_voter: "00000000-0000-4000-8000-000000000000" });
const stats = adminKey ? await rpc("get_stats", { p_admin: adminKey }) : null;

const extra = JSON.parse(await read("tools/demo-content.json"));
const tips = [];
for (const t of live.tips) {
  if (t.hidden || extra.exclude.includes(t.title)) continue;
  const tr = extra.translations[t.title] || {};
  let photo = null;
  if (extra.photos[t.title]) photo = "data:image/jpeg;base64," + (await readFile(join(root, extra.photos[t.title]))).toString("base64");
  else if (t.has_photo) photo = await rpc("get_photo", { p_code: hubCode, p_tip: t.id });
  tips.push({
    id: t.id, created_at: t.created_at, category: t.category, author: t.author, pin: t.pin || null,
    title: t.title, body: t.body, title_en: t.title_en || tr.title_en || null, body_en: t.body_en || tr.body_en || null,
    votes: Number(t.votes), photo,
    comments: t.comments.map(c => ({ id: c.id, created_at: c.created_at, author: c.author, body: c.body, body_en: extra.commentTranslations[c.body] || null, hidden: false }))
  });
}
for (const [i, x] of extra.extraTips.entries()) {
  tips.push({
    id: "demo-extra-" + i, created_at: new Date(Date.now() - x.daysAgo * 86400e3).toISOString(), category: x.category, author: x.author, pin: null,
    title: x.title, body: x.body, title_en: x.title_en, body_en: x.body_en, votes: x.votes, photo: null, comments: [],
    reports: x.reports.map((reason, n) => ({ voter: "demo-reporter-" + n, reason }))
  });
}

// ---------- fonts (embedded so nothing loads from the internet) ----------
const cacheDir = join(root, "tools", ".cache");
await mkdir(cacheDir, { recursive: true });
const cssUrl = "https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700;800;900&display=swap";
const fontCss = await (await fetch(cssUrl, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15" } })).text();
let embeddedFonts = "";
for (const block of fontCss.split("/*").slice(1)) {
  const subset = block.slice(0, block.indexOf("*/")).trim();
  if (subset !== "latin" && subset !== "latin-ext") continue; // Dutch, English, German and French need nothing else
  const face = block.slice(block.indexOf("@font-face"));
  const src = face.match(/url\((https:[^)]+)\)/)[1];
  const file = join(cacheDir, src.split("/").pop());
  if (!existsSync(file)) await writeFile(file, Buffer.from(await (await fetch(src)).arrayBuffer()));
  embeddedFonts += face.replace(src, "data:font/woff2;base64," + (await readFile(file)).toString("base64")) + "\n";
}
if (!embeddedFonts) throw new Error("Could not embed the fonts");

// ---------- assemble ----------
const indexHtml = await read("site/index.html");
const bodyMarkup = indexHtml.slice(indexHtml.indexOf("<body>") + 6, indexHtml.indexOf("<script")).trim();
const icon = "data:image/png;base64," + (await readFile(join(root, "site/icon-192.png"))).toString("base64");
const config = { supabaseUrl: "", demo: true, defaultLang: "en", hubCode, hubName, siteUrl: "https://runner-tips-hub.netlify.app" };
const demoData = { tips, stats };
const safeJson = o => JSON.stringify(o).replace(/</g, "\\u003c");
const builtAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/Amsterdam" });

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Runner Tips</title>
<link rel="icon" href="${icon}">
<style>
${embeddedFonts}
${await read("site/style.css")}
${await read("tools/demo.css")}
</style>
</head>
<body>
<div class="stage">
<div class="phone">
${bodyMarkup}
</div>
<aside class="demo-panel" aria-label="Demo controls">
  <h2>Demo</h2>
  <button data-demo-mod aria-pressed="false">Moderator mode: off</button>
  <button data-demo-reset>Start over</button>
  <p>Offline demo with a snapshot of Hub Dordrecht (${builtAt}). Nothing here touches the real site.</p>
</aside>
</div>
<script>window.RT_CONFIG = ${safeJson(config)};
window.RT_DEMO = ${safeJson(demoData)};</script>
<script>
${await read("site/app.js")}
</script>
</body>
</html>
`;
if (/https?:\/\/(?!runner-tips-hub\.netlify\.app|wa\.me)[^"'\s)]*\.(js|css|woff2?)/.test(html)) throw new Error("Demo still references an online file");
await mkdir(join(root, "demo", "offline"), { recursive: true });
const out = join(root, "demo", "offline", "runner-tips-demo.html");
await writeFile(out, html);
console.log(`Built ${out}`);
console.log(`${tips.length} tips, ${stats ? stats.visitors_total + " visitors" : "no visitor numbers (no SECRETS.md)"}, ${(html.length / 1024).toFixed(0)} KB`);
