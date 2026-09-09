import fs from 'node:fs';
const origin=process.env.PUBLIC_SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL:'');
if(origin){const u=new URL(origin);if(u.protocol!=='https:'||u.pathname!=='/')throw new Error('PUBLIC_SITE_URL debe ser un origen HTTPS sin rutas');}
const ga=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID||'';
if(ga&&!/^G-[A-Z0-9]+$/.test(ga))throw new Error('ID de GA4 inválido');
fs.writeFileSync('content/publication.json',JSON.stringify({published:true,indexable:process.env.VERCEL_ENV==='production'&&!!origin,siteUrl:origin,gaMeasurementId:ga,consultationUrl:'https://calendly.com/flambee_'},null,2)+'\n');
