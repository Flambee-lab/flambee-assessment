import {articles as original} from './articles';
export const articles=original.map(a=>a.title.startsWith('¿Cuánto cuesta automatizar')?{...a,title:'Cómo comparar presupuestos para automatizar un proceso'}:a);
export const articleCatalog=articles.map(({slug,title,description,category,flow})=>({slug,title,description,category,flow}));
