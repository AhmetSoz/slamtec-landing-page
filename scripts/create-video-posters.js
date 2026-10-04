// Extract a visible preview frame from each local product video.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {execFileSync}=require('node:child_process');
const ffmpeg=require('./import-tools/node_modules/ffmpeg-static');
const cheerio=require('./import-tools/node_modules/cheerio');
const root=path.resolve(__dirname,'..'),file=path.join(root,'official-design.js');
const source=fs.readFileSync(file,'utf8'),pages=JSON.parse(source.slice(source.indexOf('{'),source.lastIndexOf(';')));
const videos=new Map();
const videoData=vm.runInNewContext(fs.readFileSync(path.join(root,'product-videos.js'),'utf8')+';productVideos');
fs.mkdirSync(path.join(root,'assets','video-posters'),{recursive:true});
function posterFor(src){
  if(videos.has(src))return videos.get(src);
  const name=path.basename(src,'.mp4')+'.jpg',poster='assets/video-posters/'+name;
  if(!fs.existsSync(path.join(root,poster)))execFileSync(ffmpeg,['-hide_banner','-loglevel','error','-ss','3','-i',path.join(root,src),'-frames:v','1','-vf','scale=1280:-2','-q:v','3','-y',path.join(root,poster)],{stdio:'pipe'});
  videos.set(src,poster);return poster;
}
for(const [key,page]of Object.entries(pages)){
  const $=cheerio.load(page.html);
  $('video').each((i,e)=>{
    const src=$(e).attr('src')||$(e).find('source').attr('src')||videoData[key]?.src;
    if(src&&src.endsWith('.mp4'))$(e).attr('poster',posterFor(src));
  });
  page.html=$('body').html();
}
fs.writeFileSync(file,'// SLAMTEC product layouts with authored dimensions and local video previews.\nconst officialDesign = '+JSON.stringify(pages)+';\n');
console.log(`Created ${videos.size} local video previews.`);
