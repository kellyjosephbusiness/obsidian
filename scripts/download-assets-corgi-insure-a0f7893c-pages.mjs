// Downloads assets for the five secondary corgi.insure pages into their page asset roots,
// reusing files already downloaded for the home page (matched by URL in the home manifest).
import fs from "node:fs";
import path from "node:path";
const SITE = "corgi-insure-a0f7893c";
const PAGES = ["for-brokers-4e828285", "press-releases--series-b-f1aae1d8", "ai-97ffa848", "startup-insurance-fc836df6", "directors-and-officers-f2860438"];
const home = JSON.parse(fs.readFileSync(`docs/research/${SITE}/root-8a5edab2/asset-manifest.json`, "utf8"));
const norm = (u) => u.replace(/&dpl=[^&]*/, "").replace(/\?dpl=[^&]*$/, "");
const known = new Map(home.map((e) => [norm(e.src), e.local.replace(/^public/, "")]));
const seen = new Map();
for (const page of PAGES) {
  const urls = JSON.parse(fs.readFileSync(`docs/research/${SITE}/${page}/asset-urls.json`, "utf8"));
  const manifest = [];
  for (const raw of urls) {
    const src = norm(raw);
    if (!/corgi\.insure|\.webp|\.png|\.svg|\.avif|\.jpg|\.jpeg|\.mp4|\.webm|\.gif/i.test(src)) continue;
    if (known.has(src)) { manifest.push({ src, local: known.get(src), shared: true }); continue; }
    if (seen.has(src)) { manifest.push({ src, local: seen.get(src), shared: true }); continue; }
    let u; try { u = new URL(raw); } catch { continue; }
    // next/image optimizer URLs: pull the original
    let fetchUrl = raw;
    if (u.pathname === "/_next/image") { const inner = u.searchParams.get("url"); fetchUrl = inner.startsWith("http") ? inner : `https://www.corgi.insure${inner}`; }
    const fu = new URL(fetchUrl);
    let name = path.basename(fu.pathname).replace(/\.[a-z0-9]{8,}(?=\.)/, "");
    if (!path.extname(name)) name += ".bin";
    const local = `/sites/${SITE}/${page}/${decodeURIComponent(name)}`;
    const dest = `public${local}`;
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (!fs.existsSync(dest)) {
      try {
        const res = await fetch(fetchUrl, { headers: { "user-agent": "Mozilla/5.0" } });
        if (!res.ok) { console.warn("skip", res.status, fetchUrl); continue; }
        fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
        console.log("saved", dest);
      } catch (e) { console.warn("fail", fetchUrl, e.message); continue; }
    }
    seen.set(src, local); manifest.push({ src, local });
  }
  fs.writeFileSync(`docs/research/${SITE}/${page}/asset-manifest.json`, JSON.stringify(manifest, null, 1));
  console.log(page, "manifest", manifest.length, "new", manifest.filter((m) => !m.shared).length);
}
