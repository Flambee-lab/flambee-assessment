import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';
const root='.next/server/app';const origin='https://navigation.test';
const files=['index.html','blog.html','privacidad.html',...fs.readdirSync(root+'/blog').filter(x=>x.endsWith('.html')).map(x=>'blog/'+x)];
const routes=new Set(files.map(f=>f==='index.html'?'/':'/'+f.slice(0,-5)));
let links=0,ctas=0;
for(const file of files){const route=file==='index.html'?'/':'/'+file.slice(0,-5);const html=fs.readFileSync(path.join(root,file),'utf8');
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const m of html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)){
  links++;const href=m[1].replace(/&amp;/g,'&');const label=m[2].replace(/<[^>]*>/g,'');assert.ok(href,`Empty link in ${file}`);
  const url=new URL(href,origin+route);
  if(url.origin===origin){assert.ok(routes.has(url.pathname),`${file}: missing route ${url.pathname}`);if(url.hash&&url.pathname===route)assert.ok(ids.has(decodeURIComponent(url.hash.slice(1))),`${file}: missing anchor ${url.hash}`);}
  if(/Empezar la evaluación|Evaluar este proceso/.test(label)){
   ctas++;assert.equal(url.pathname,'/',`${file}: assessment CTA stays in article`);assert.ok(url.searchParams.get('actividad'));assert.ok(!href.startsWith('?'));
  }
 }
}
assert.equal(ctas,48);console.log(`${files.length} páginas: ${links} enlaces revisados, incluidos 48 CTA hacia la evaluación.`);
