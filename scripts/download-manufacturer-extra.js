const fs = require('node:fs');
const path = require('node:path');
const { Readable } = require('node:stream');
const { pipeline } = require('node:stream/promises');
const media = require('../manufacturer-extra.js');
const hero = require('../product-hero.js');

const root = path.resolve(__dirname, '..');
const directory = path.join(root, 'assets', 'media');
const entries = [...new Set([...Object.values(media).flat().map((item) => item.path), ...Object.values(hero).flatMap((item) => Object.values(item))])];

async function download(relativePath) {
  if (!/^[a-z0-9/_-]+\.(?:webp|gif|mp4)$/i.test(relativePath) || relativePath.includes('..')) {
    throw new Error(`Unsafe media path: ${relativePath}`);
  }
  const target = path.resolve(directory, relativePath);
  if (!target.startsWith(directory + path.sep)) throw new Error(`Outside media directory: ${relativePath}`);
  if (fs.existsSync(target) && fs.statSync(target).size > 1000) return;
  const url = `https://image.slamtec.com/images/${relativePath}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(90000) });
  if (!response.ok || !response.body) throw new Error(`${response.status} ${url}`);
  const contentType = response.headers.get('content-type') || '';
  if (!/^(image\/|video\/)/i.test(contentType)) throw new Error(`Unexpected content type ${contentType} for ${url}`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const temporary = `${target}.download`;
  try {
    await pipeline(Readable.fromWeb(response.body), fs.createWriteStream(temporary));
    if (fs.statSync(temporary).size < 1000) throw new Error(`Empty media: ${url}`);
    fs.renameSync(temporary, target);
    console.log(`${(fs.statSync(target).size / 1048576).toFixed(2)} MB ${relativePath}`);
  } finally {
    if (fs.existsSync(temporary)) fs.rmSync(temporary);
  }
}

(async () => {
  const failures = [];
  for (const entry of entries) {
    try { await download(entry); }
    catch (error) { failures.push({ entry, message: error.message }); console.error(`FAILED ${entry}: ${error.message}`); }
  }
  console.log(`Media: ${entries.length - failures.length}/${entries.length} available`);
  if (failures.length) process.exitCode = 1;
})();
