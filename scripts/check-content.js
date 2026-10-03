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
