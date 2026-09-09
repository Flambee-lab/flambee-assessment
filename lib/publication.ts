import config from '../content/publication.json';
export const publication=config;
export function absoluteUrl(path:string){
 if(!config.siteUrl)return undefined;
 const url=new URL(config.siteUrl);
 if(url.protocol!=='https:')return undefined;
 return new URL(path,url.origin).href;
}
export const indexable=config.indexable&&!!absoluteUrl('/');
export function jsonLd(value:unknown){return JSON.stringify(value).replace(/</g,'\\u003c')}
