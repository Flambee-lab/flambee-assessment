import {absoluteUrl,indexable} from '../../lib/publication';
export function GET(){return new Response(indexable?'User-agent: *\nAllow: /\nSitemap: '+absoluteUrl('/sitemap.xml')+'\n':'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}})}
