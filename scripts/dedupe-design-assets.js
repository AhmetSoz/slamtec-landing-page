const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const assetRoot=path.join(root,'assets','design');
const manifestFile=path.join(__dirname,'official-design-assets.json');
const manifest=JSON.parse(fs.readFileSync(manifestFile,'utf8'));
const files=['official-design.js','official-design.css'];
const texts=files.map(f=>fs.readFileSync(path.join(root,f),'utf8'));
let count=0,bytes=0;
const digest=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
for(const item of manifest){
 const parsed=new URL(item.url);
 const relative=parsed.pathname.replace(/^\/images\//,'');
 const candidates=[path.join(root,'assets','media',relative),path.join(root,'assets','official',relative.replaceAll('/','-'))];
 const current=path.resolve(root,item.file);
 if(!current.startsWith(assetRoot+path.sep))continue;
 const existing=candidates.find(f=>fs.existsSync(f)&&fs.statSync(f).size===fs.statSync(current).size&&digest(f)===digest(current));
 if(existing){
   const replacement=path.relative(root,existing).replaceAll('\\','/');
   for(let i=0;i<texts.length;i++)texts[i]=texts[i].split(item.file).join(replacement);
   bytes+=fs.statSync(current).size;fs.unlinkSync(current);item.file=replacement;count++;
 }
}
files.forEach((f,i)=>fs.writeFileSync(path.join(root,f),texts[i]));
fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2));
console.log(`Reused ${count} existing files; removed ${Math.round(bytes/1024/1024)} MB of duplicated media.`);
