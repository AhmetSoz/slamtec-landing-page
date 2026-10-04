// Verify deployed media and document responses independently of browser layout checks.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const tasks = new Map();
function add(base, file) {
  const url = new URL(file, base).href;
  tasks.set(url, { url, file });
}
const base = process.argv[2] || 'https://slamtec.robotsepeti.com/';
const sources = ['index.html', 'app.js', 'official-design.js', 'official-design.css', 'styles.css', 'product-layout.css', 'product-videos.js'];
for (const file of sources) {
  const source = fs.readFileSync(path.join(root, file), 'utf8').replaceAll('\\"', '"');
  for (const match of source.matchAll(/assets\/[A-Za-z0-9_./-]+\.(?:webp|gif|png|jpg|svg|mp4|pdf|woff2)/g)) add(base, match[0]);
}
for (const entry of JSON.parse(fs.readFileSync(path.join(root, 'scripts/official-design-assets.json')))) add(base, entry.file);
for (const file of fs.readdirSync(path.join(root, 'assets/docs'))) if (file.endsWith('.pdf')) add(base, 'assets/docs/' + file);
const ufactory = process.argv[3];
if (ufactory) {
  function walk(directory) {
    for (const file of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, file.name);
      if (file.isDirectory()) walk(target);
      else add('https://ufactory.robotsepeti.com/', path.relative(path.join(ufactory, 'public'), target).split(path.sep).join('/'));
    }
  }
  walk(path.join(ufactory, 'public'));
}
const links = ['https://www.robotsepeti.com/', 'https://www.robotsepeti.com/ufactory', 'https://www.robotsepeti.com/arama?q=slamtec', 'https://github.com/xArm-Developer'];
links.forEach(url => tasks.set(url, {url, file:'link'}));
async function check({url, file}) {
  try {
    const pdf = file.endsWith('.pdf');
    const response = await fetch(url, { method: pdf ? 'GET' : 'HEAD', headers: pdf ? {Range:'bytes=0-15'} : {}, signal:AbortSignal.timeout(20000) });
    const type = response.headers.get('content-type') || '';
    const error = ![200,206].includes(response.status) || response.url !== url || (pdf && !type.includes('pdf')) || (/\.(webp|gif|png|jpg|svg)$/.test(file) && !type.startsWith('image/')) || (file.endsWith('.mp4') && !type.startsWith('video/'));
    if (error) return {url, status:response.status, final:response.url, type};
    if (pdf) {
      const reader = response.body.getReader();
      const {value} = await reader.read();
      await reader.cancel();
      if (Buffer.from(value || []).subarray(0,4).toString() !== '%PDF') return {url,error:'Invalid PDF signature'};
    }
    return null;
  } catch (error) { return {url,error:error.message}; }
}
(async()=>{
  const entries=[...tasks.values()], errors=[];
  for(let i=0;i<entries.length;i+=12){
    const results=await Promise.all(entries.slice(i,i+12).map(check));
    errors.push(...results.filter(Boolean));
  }
  console.log(JSON.stringify({checked:entries.length,errors},null,2));
  process.exitCode=errors.length?1:0;
})();
