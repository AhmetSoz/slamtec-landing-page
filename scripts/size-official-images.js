const fs=require('node:fs'),path=require('node:path');
const cheerio=require('./import-tools/node_modules/cheerio');
const {imageSize}=require('./import-tools/node_modules/image-size');
const root=path.resolve(__dirname,'..');
const file=path.join(root,'official-design.js');
const source=fs.readFileSync(file,'utf8');
const pages=JSON.parse(source.slice(source.indexOf('{'),source.lastIndexOf(';')));
const sizes=new Map();
let reserved=0;
for(const page of Object.values(pages)){
 const $=cheerio.load(page.html);
 $('img[src]').each((i,e)=>{
  const src=$(e).attr('src');
  if(!sizes.has(src))sizes.set(src,imageSize(fs.readFileSync(path.join(root,src))));
  const {width,height}=sizes.get(src);
  if(!width||!height)throw new Error(`Invalid image dimensions: ${src}`);
  // Authored dimensions also describe presentation size (especially feature icons).
  // Reserve natural dimensions only when the manufacturer did not specify a size.
  const authoredWidth=Number($(e).attr('width'));
  const authoredHeight=Number($(e).attr('height'));
  if(!authoredWidth)$(e).attr('width',String(width));
  if(!authoredHeight)$(e).attr('height',String(height));
  const ratioWidth=authoredWidth||width,ratioHeight=authoredHeight||height;
  const style=($(e).attr('style')||'').replace(/(?:^|;)\s*aspect-ratio\s*:[^;]*/g,'');
  $(e).attr('style',style+`;aspect-ratio:${ratioWidth}/${ratioHeight}`);
  reserved++;
 });
 page.html=$('body').html();
}
fs.writeFileSync(file,`// SLAMTEC product layouts with Turkish copy and reserved image dimensions.\nconst officialDesign = ${JSON.stringify(pages)};\n`);
console.log(`Reserved dimensions for ${reserved} images (${sizes.size} unique files).`);
