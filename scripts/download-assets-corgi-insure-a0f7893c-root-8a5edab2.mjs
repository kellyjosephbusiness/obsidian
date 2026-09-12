// Downloads every asset used by https://corgi.insure/ into the namespaced public folder.
// Source list: docs/research/corgi-insure-a0f7893c/root-8a5edab2/asset-urls.json (recorded via Playwright).
import fs from 'node:fs';
import path from 'node:path';
const SITE = 'corgi-insure-a0f7893c', PAGE = 'root-8a5edab2';
const ORIGIN = 'https://www.corgi.insure';
const list = JSON.parse(fs.readFileSync(`docs/research/${SITE}/${PAGE}/asset-urls.json`, 'utf8'));
const pageRoot = `public/sites/${SITE}/${PAGE}`;
const sharedRoot = `public/sites/${SITE}/shared`;
const targets = new Map(); // local path -> source url
for (const { url } of list) {
  let u; try { u = new URL(url); } catch { continue; }
  if (!/corgi\.insure$/.test(u.hostname)) continue;
  let p = u.pathname;
  if (p === '/_next/image') { const inner = u.searchParams.get('url'); if (!inner) continue; p = inner; }
  if (p.startsWith('/_next/static/chunks')) continue;
  p = decodeURIComponent(p);
  let local;
  if (p.startsWith('/_next/static/media/')) {
    const base = path.basename(p);
    const clean = base.replace(/\.(woff2)$/, '').replace(/-s\.p\.[a-z0-9_-]+$|-s\.[a-z0-9_-]+$|\.[a-z0-9_-]{10,}$/, '') + path.extname(base);
    local = `${sharedRoot}/fonts/${clean}`;
  } else if (p === '/api/og') { local = `${sharedRoot}/seo/og-image.png`; }
  else if (/^\/(favicon|apple-icon|icon\.svg|manifest\.webmanifest)/.test(p)) { local = `${sharedRoot}/seo/${path.basename(p)}`; }
  else if (/^\/images\/corgi logo vector\.svg$/.test(p)) { local = `${sharedRoot}/images/corgi-logo-vector.svg`; }
  else { local = `${pageRoot}${p.replace(/\s+/g, '-')}`; }
  const src = p === '/api/og' ? url : ORIGIN + p.split('/').map(encodeURIComponent).join('/');
  if (!targets.has(local)) targets.set(local, src);
}
console.log('unique assets', targets.size);
const entries = [...targets.entries()];
let ok = 0; const fail = [];
const dl = async ([local, src]) => {
  try {
    if (fs.existsSync(local) && fs.statSync(local).size > 0) { ok++; return; }
    const res = await fetch(src, { headers: { 'user-agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.mkdirSync(path.dirname(local), { recursive: true }); fs.writeFileSync(local, buf); ok++;
  } catch (e) { fail.push({ local, src, err: e.message }); }
};
for (let i = 0; i < entries.length; i += 4) await Promise.all(entries.slice(i, i + 4).map(dl));
console.log('downloaded', ok, 'failed', fail.length); fail.forEach(f => console.log('FAIL', f.src, f.err));
fs.writeFileSync(`docs/research/${SITE}/${PAGE}/asset-manifest.json`, JSON.stringify(entries.map(([local, src]) => ({ local, src })), null, 1));
