import {articleCatalog as original} from './catalog';
export const articleCatalog=original.map(a=>a.title.startsWith('¿Cuánto cuesta automatizar')?{...a,title:'Cómo comparar presupuestos para automatizar un proceso'}:a);
