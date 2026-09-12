import fs from 'node:fs';
const [,, file, maxDepth='12', ...keep] = process.argv;
const d = JSON.parse(fs.readFileSync(file,'utf8'));
const NOISE = { border:/^0px/, borderTop:/^0px/, borderBottom:/^0px/, borderLeft:/^0px/, borderRight:/^0px/, transition:/^all$/, objectFit:/^fill$/, flex:/^0 1 auto$/, opacity:/^1$/, textAlign:/^start$/, transform:/^matrix\(1, 0, 0, 1, 0, 0\)$/, outline:/none/, objectPosition:/^50% 50%$/, flexDirection:/^row$/, rowGap:/./, columnGap:/./, verticalAlign:/./, overflowX:/./, overflowY:/./, backgroundSize:/./, backgroundPosition:/./, flexWrap:/nowrap/,  listStyle:/outside none disc/, verticalAlign:/baseline/, cursor:/^auto$/, translate:/^none$/, scale:/^none$/, rotate:/^none$/, whiteSpace:/^normal$/, transformOrigin:/./, backgroundSize:/^auto$/, backgroundPosition:/^0% 0%$/, textDecoration:/^none solid/, fontStyle:/^normal$/, fontVariationSettings:/normal/, fontFeatureSettings:/normal/, contain:/none/, isolation:/auto/, willChange:/auto/, perspective:/none/, overflowX:/visible/, overflowY:/visible/, alignSelf:/auto/, order:/^0$/, gridColumn:/auto/, gridRow:/auto/, aspectRatio:/auto/, mixBlendMode:/normal/, minWidth:/^0px$/, minHeight:/^0px$/, maxHeight:/none/, maxWidth:/none/, pointerEvents:/^auto$/, animation:/^none/, rowGap:/normal/, columnGap:/normal/ };
const INHERIT = new Set(['fontSize','fontWeight','fontFamily','fontStyle','lineHeight','letterSpacing','color','textAlign','textTransform','whiteSpace','cursor','listStyle','pointerEvents','fontVariationSettings','fontFeatureSettings','textShadow']);
function fam(v){return v? v.replace(/,.*$/,'').replace(/"/g,''):v}
function p(n, depth, parentStyles){ if(depth>Number(maxDepth)) return;
  const s=n.styles||{}; const parts=[];
  for(const k of Object.keys(s)){ let v=s[k]; if(NOISE[k]&&NOISE[k].test(String(v))) continue; if(INHERIT.has(k)&&parentStyles&&parentStyles[k]===v) continue; if(k==='fontFamily')v=fam(v); if(typeof v==='object')v=JSON.stringify(v); if(k==='inset'&&s.top!=null&&s.left!=null) continue; parts.push(`${k}:${String(v).slice(0,110)}`);}
  const attrs=Object.keys(n).filter(k=>k.startsWith('@')&&k!=='@type').map(k=>`${k}=${n[k].slice(0,70)}`).join(' ');
  console.log(`${'  '.repeat(depth)}<${n.tag}${n.cls?' .'+n.cls.split(' ').slice(0,10).join('.'):''}> [${n.rect.join(',')}]${n.text?' "'+n.text.slice(0,140)+'"':''}${attrs?' '+attrs:''}${n.img?' IMG '+n.img.src.replace(/^https:\/\/www.corgi.insure/,'').replace(/&dpl=.*$/,'').slice(0,100)+' nat'+n.img.nw+'x'+n.img.nh:''}${n.svg?' SVG('+n.svg.length+'b) '+(n.svg.match(/viewBox="[^"]*"/)||[''])[0]:''}`);
  if(parts.length) console.log(`${'  '.repeat(depth)}  { ${parts.join('; ')} }`);
  (n.children||[]).forEach(c=>p(c,depth+1,{...(parentStyles||{}),...s}));
}
d.nodes.forEach(n=>p(n,0,null));
