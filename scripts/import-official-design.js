// Import the manufacturer's actual product sections and layout, without its navigation,
// scripts, tracking or sales links. Generated files are served locally by this site.
const fs = require('node:fs');
const path = require('node:path');
const cheerio = require('./import-tools/node_modules/cheerio');
const postcss = require('./import-tools/node_modules/postcss');
const root = path.resolve(__dirname, '..');
const cache = path.join(__dirname, 'source-html');
const target = path.join(root, 'assets', 'design');
fs.mkdirSync(target, { recursive: true });
fs.mkdirSync(cache, { recursive: true });
const pages = [...fs.readdirSync(path.join(__dirname, 'source')).filter(f => f.endsWith('.json')).map(f => {
  const source = JSON.parse(fs.readFileSync(path.join(__dirname, 'source', f), 'utf8'));
  return { key: f.replace('slamtec-', '').replace('.json', ''), url: 'https://www.slamtec.com' + source.page };
})];
const manifest = new Map();
const cssFiles = new Set();
let cssPhase = false;
async function get(url, file) {
  if (fs.existsSync(file)) return fs.readFileSync(file);
  let response;
  for(let attempt=0;attempt<3;attempt++) {
    try { response = await fetch(url, { signal: AbortSignal.timeout(120000) }); break; }
    catch(error) { if(attempt===2) throw new Error(`Media download failed: ${url}`,{cause:error}); }
  }
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, bytes);
  return bytes;
}
function local(url, base) {
  const parsed = new URL(url, base);
  if (!/^(image\.)?slamtec\.com$/.test(parsed.hostname) && parsed.hostname !== 'www.slamtec.com') throw new Error(`Unexpected media host ${url}`);
  const relative = parsed.hostname.replaceAll('.', '-') + parsed.pathname;
  const originalPath=parsed.pathname.replace(/^\/images\//,'');
  const existingCandidates=[path.join(root,'assets','media',originalPath),path.join(root,'assets','official',originalPath.replaceAll('/','-'))];
  const file = existingCandidates.find(file=>fs.existsSync(file)) || path.join(target, relative);
  const resolved = `${parsed.origin}${parsed.pathname}${parsed.search}`;
  manifest.set(file, resolved);
  if(cssPhase) cssFiles.add(file);
  return path.relative(root,file).replaceAll('\\','/');
}
async function main() {
  const templates = {};
  const allClasses = new Set();
  const allIds = new Set();
  for (const page of pages) {
    const html = (await get(page.url, path.join(cache, page.key + '.html'))).toString();
    const $ = cheerio.load(html);
    const desktop = $('#fullpage');
    const mobile = $('.phone-body-box').first();
    if (!desktop.length) throw new Error(`No product root ${page.url}`);
    const boxes = [desktop, mobile];
    for (const box of boxes) {
      box.find('.header,.hd-title,.phone-nav-box,.phoneFixNavBox,script,noscript,iframe,.audio-toggle-btn').remove();
      box.find('[class*="footer"],.footer,.footer-box,.phone-footer').each((i, e) => {
        const section = $(e).closest('.section');
        if (section.length && section.find('[class*="footer"]').length) section.remove();
        else $(e).remove();
      });
      box.find('a').each((i,e) => $(e).attr('href', '#robotsepeti-product').attr('data-store-link', '').attr('target', '_blank').attr('rel', 'noopener noreferrer'));
      box.find('#youtubePlayer').replaceWith('<video class="official-intro-video" data-intro-video muted loop playsinline preload="none" width="1920" height="900"></video>');
      box.find('.swiper-slide-duplicate,.pagination').remove();
      box.find('video').each((i,e) => {
        $(e).removeAttr('controls autoplay').attr('muted', '').attr('loop', '').attr('playsinline', '').attr('preload', 'none');
      });
      box.find('*').addBack().each((i,e) => {
        for (const attribute of Object.keys(e.attribs || {})) if (attribute.startsWith('on')) $(e).removeAttr(attribute);
        $(e).removeClass('aos-init aos-animate').removeAttr('data-aos-duration data-aos-delay');
        if ($(e).attr('data-aos')) $(e).attr('data-reveal', '').removeAttr('data-aos');
        for (const attribute of ['src', 'poster', 'data-src']) {
          const value = $(e).attr(attribute);
          if (value && !value.startsWith('data:')) $(e).attr(attribute, local(value, page.url));
        }
        const style = $(e).attr('style');
        if (style?.includes('url(')) $(e).attr('style', style.replace(/url\(["']?([^)'"\s]+)["']?\)/g, (m,u) => `url('${local(u, page.url)}')`));
        if (e.tagName === 'img') $(e).attr('loading', 'lazy').attr('decoding', 'async');
        for (const c of ($(e).attr('class') || '').split(/\s+/)) if(c) allClasses.add(c);
        if ($(e).attr('id')) allIds.add($(e).attr('id'));
      });
    }
    desktop.find('img').first().attr('loading','eager').attr('fetchpriority','high');
    mobile.find('img').first().attr('loading','eager');
    templates[page.key] = { source: page.url, html: $.html(desktop) + (mobile.length ? $.html(mobile) : '') };
    console.log(`Sections imported: ${page.key}`);
  }
  const cssUrls = [
    'https://www.slamtec.com/lib/bootstrap/dist/css/bootstrap.min.css',
    'https://www.slamtec.com/style/css/main.css',
    'https://www.slamtec.com/style/css/lidar.css',
    'https://www.slamtec.com/style/css/swiper.min.css'
  ];
  let output = '';
  cssPhase = true;
  for (const url of cssUrls) {
    const input = (await get(url, path.join(cache, path.basename(url)))).toString();
    const ast = postcss.parse(input);
    ast.walkComments(c => c.remove());
    ast.walkAtRules('font-face', a => a.remove());
    ast.walkRules(rule => {
      if (rule.parent.type === 'atrule' && /keyframes$/.test(rule.parent.name)) return;
      const selectors = rule.selectors.filter(selector => {
        const classes = [...selector.matchAll(/\.([a-zA-Z_][\w-]*)/g)].map(m=>m[1]);
        const ids = [...selector.matchAll(/#([a-zA-Z_][\w-]*)/g)].map(m=>m[1]);
        return classes.every(c => allClasses.has(c)) && ids.every(id => allIds.has(id));
      });
      if (!selectors.length) { rule.remove(); return; }
      rule.selectors = selectors.map(selector => '#official-product ' + selector.replace(/^(html|body|:root)\s*/,'').trim()).map(s=>s.trim());
      rule.walkDecls(decl => {
        if (decl.value.includes('url(')) decl.value = decl.value.replace(/url\(["']?([^)'"\s]+)["']?\)/g, (m,u) => u.startsWith('data:') ? m : `url('${local(u, url)}')`);
      });
    });
    ast.walkAtRules(a => { if (a.nodes && !a.nodes.length) a.remove(); });
    output += ast.toString() + '\n';
  }
  fs.writeFileSync(path.join(root, 'official-design.css'), output);
  fs.writeFileSync(path.join(root, 'official-design.js'), `// Original SLAMTEC product structures; sales destinations are assigned by app.js.\nconst officialDesign = ${JSON.stringify(templates)};\n`);
  const assets = [...manifest];
  for(let i=0;i<assets.length;i+=8) {
    await Promise.all(assets.slice(i,i+8).map(async ([file,url]) => {
      if(!fs.existsSync(file)) {
        const originalPath = new URL(url).pathname.replace(/^\/images\//,'');
        const existing = path.join(root,'assets','media',originalPath);
        const flattened = path.join(root,'assets','official',originalPath.replaceAll('/','-'));
        fs.mkdirSync(path.dirname(file),{recursive:true});
        if(fs.existsSync(existing)) fs.copyFileSync(existing,file);
        else if(fs.existsSync(flattened)) fs.copyFileSync(flattened,file);
        else {
          try { await get(url,file); }
          catch(error) {
            if(!cssFiles.has(file)) throw error;
            const relative='assets/design/'+path.relative(target,file).replaceAll('\\','/');
            output=output.split(`url('${relative}')`).join('none');
            manifest.delete(file);
            console.log(`Removed unavailable source CSS background: ${url}`);
          }
        }
      }
    }));
    console.log(`Media ${Math.min(i+8,assets.length)}/${assets.length}`);
  }
  fs.writeFileSync(path.join(root, 'official-design.css'), output);
  fs.writeFileSync(path.join(__dirname,'official-design-assets.json'),JSON.stringify([...manifest].map(([file,url])=>({file:path.relative(root,file).replaceAll('\\','/'),url})),null,2));
}
main().catch(error=>{ console.error(error);process.exitCode=1; });
