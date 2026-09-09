import {articles} from '../../content/articles-v3';
import {absoluteUrl,indexable} from '../../lib/publication';
export function GET(){const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\"/g,'&quot;');const paths=indexable?['/','/blog',...articles.map(a=>'/blog/'+a.slug)]:[];return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(p=>'<url><loc>'+escape(absoluteUrl(p)!)+'</loc></url>').join('')+'</urlset>',{headers:{'Content-Type':'application/xml; charset=utf-8'}})}
