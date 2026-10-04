const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const urls = [...new Set([...source.matchAll(/url:\s*'(https:\/\/www\.robotsepeti\.com\/[^']+)'/g)].map((match) => match[1]))];
const docs = [...new Set([...source.matchAll(/pdf\('[^']+',\s*'([^']+)'\)/g)].map((match) => match[1]))];
const media = require('../manufacturer-extra.js');
const heroes = require('../product-hero.js');
const storiesSource = fs.readFileSync(path.join(root, 'manufacturer-stories.js'), 'utf8');
const videoSource = fs.readFileSync(path.join(root, 'product-videos.js'), 'utf8');
const errors = [];

const localAssets = [
  ...[...source.matchAll(/(?:image|gallery):\s*(?:\[\s*)?'([^']+)'/g)].map((match) => `assets/images/${match[1]}`),
  ...[...storiesSource.matchAll(/file:\s*'([^']+)'/g)].map((match) => `assets/images/official/${match[1]}`),
  ...[...videoSource.matchAll(/src:\s*'(assets\/videos\/[^']+)'/g)].map((match) => match[1])
];
for (const file of new Set(localAssets)) {
  const target = path.join(root, file);
  if (!fs.existsSync(target) || fs.statSync(target).size < 1000) errors.push(`Missing local asset: ${file}`);
}

for (const file of docs) {
  const target = path.join(root, 'assets', 'docs', file);
  if (!fs.existsSync(target) || fs.statSync(target).size < 1000) errors.push(`Missing PDF: ${file}`);
}
for (const [model, assets] of Object.entries(media)) {
  for (const item of assets) {
    const target = path.join(root, 'assets', 'media', item.path);
    if (!fs.existsSync(target) || fs.statSync(target).size < 1000) errors.push(`Missing media for ${model}: ${item.path}`);
  }
}
for (const [model, variants] of Object.entries(heroes)) {
  for (const file of Object.values(variants)) {
    const target = path.join(root, 'assets', 'media', file);
    if (!fs.existsSync(target) || fs.statSync(target).size < 1000) errors.push(`Missing hero for ${model}: ${file}`);
  }
}
if (urls.length !== 16) errors.push(`Expected 16 RobotSepeti products, found ${urls.length}`);
const designAssets = JSON.parse(fs.readFileSync(path.join(root,'scripts','official-design-assets.json'),'utf8'));
for(const {file} of designAssets){
  const target=path.join(root,file);
  if(!fs.existsSync(target)||fs.statSync(target).size===0)errors.push(`Missing official design media: ${file}`);
}
console.log(`Checked ${designAssets.length} official design media files`);
const designSource=fs.readFileSync(path.join(root,'official-design.js'),'utf8');
const designPages=JSON.parse(designSource.slice(designSource.indexOf('{'),designSource.lastIndexOf(';')));
let posterCount=0;
for(const [model,page]of Object.entries(designPages)){
  for(const match of page.html.matchAll(/(?:src|poster)="(assets\/[^\"]+)"/g)){
    const file=path.join(root,match[1]);
    if(!fs.existsSync(file)||fs.statSync(file).size===0)errors.push(`Missing rendered media for ${model}: ${match[1]}`);
  }
  for(const match of page.html.matchAll(/<video\b[^>]*>/g)){
    if(!/poster="assets\/video-posters\/[^\"]+"/.test(match[0]))errors.push(`Video has no preview for ${model}`);
    else posterCount++;
  }
  for(const match of page.html.matchAll(/<img\b[^>]*auroras-section1-icon[^>]*>/g)){
    const width=Number(match[0].match(/width="(\d+)"/)?.[1]),height=Number(match[0].match(/height="(\d+)"/)?.[1]);
    if(!width||!height||width>100||height>70)errors.push(`Oversized Aurora S feature icon: ${match[0].slice(0,130)}`);
  }
}
console.log(`Checked ${posterCount} video previews and authored feature icon dimensions`);

(async () => {
  for (let i = 0; i < urls.length; i += 4) {
    await Promise.all(urls.slice(i, i + 4).map(async (url) => {
      try {
        const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
        if (response.status !== 200 || response.url !== url) errors.push(`Product link ${response.status}: ${url} -> ${response.url}`);
        if (process.argv.includes('--titles')) {
          const html = await response.text();
          const title = (html.match(/<title[^>]*>([^<]+)/i) || [])[1] || '(başlık bulunamadı)';
          console.log(`${new URL(url).pathname} :: ${title}`);
        }
      } catch (error) { errors.push(`Product link ${url}: ${error.message}`); }
    }));
  }
  console.log(`Checked ${urls.length} products, ${docs.length} PDFs, ${new Set(localAssets).size} existing assets, ${[...new Set(Object.values(media).flat().map((item) => item.path))].length} chapter media files and ${[...new Set(Object.values(heroes).flatMap(Object.values))].length} hero files`);
  errors.forEach((error) => console.error(error));
  if (errors.length) process.exitCode = 1;
})();
