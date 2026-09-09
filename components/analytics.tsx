'use client';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {publication} from '../lib/publication';
type AnalyticsWindow=Window&{dataLayer?:unknown[];gtag?:(...args:unknown[])=>void;flambeeAnalyticsReady?:boolean};
export function trackUsage(name:'assessment_start'|'assessment_complete'|'consultation_prepare'|'consultation_click',params:Record<string,string>={}){
 const w=window as AnalyticsWindow;
 if(w.flambeeAnalyticsReady)w.gtag?.('event',name,params);
}
export function Analytics(){
 const path=usePathname();const lastView=useRef<string|null>(null);const [consent,setConsent]=useState<string|null>(null);
 const enabled=publication.published&&/^G-[A-Z0-9]+$/.test(publication.gaMeasurementId);
 useEffect(()=>{if(enabled){try{setConsent(localStorage.getItem('flambee:analytics-consent')||'unset')}catch{setConsent('unset')}}},[enabled]);
 useEffect(()=>{
  if(!enabled||consent!=='accepted')return;
  const w=window as AnalyticsWindow;
  if(!w.flambeeAnalyticsReady){
   w.dataLayer=w.dataLayer||[];
   w.gtag=function(){w.dataLayer!.push(arguments)};
   w.gtag('js',new Date());
   w.gtag('config',publication.gaMeasurementId,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});
   const script=document.createElement('script');script.src='https://www.googletagmanager.com/gtag/js?id='+publication.gaMeasurementId;script.async=true;document.head.appendChild(script);
   w.flambeeAnalyticsReady=true;
  }
  // Manual route views; disable history-based pageviews in GA4 Enhanced Measurement.
  if(lastView.current!==path){lastView.current=path;let referrer='';try{const ref=new URL(document.referrer);referrer=ref.origin+ref.pathname}catch{}w.gtag?.('event','page_view',{page_location:window.location.origin+path,page_title:document.title,page_referrer:referrer});}
 },[enabled,consent,path]);
 function choose(value:string){try{localStorage.setItem('flambee:analytics-consent',value)}catch{}setConsent(value)}
 if(!enabled||!consent)return null;
 return consent==='unset'?<aside className="analytics-consent" aria-label="Medición de uso"><p>¿Nos permitís medir el uso de la web con Google Analytics? Nos ayuda a mejorar el recorrido. No enviamos tus respuestas.</p><button onClick={()=>choose('accepted')}>Aceptar</button><button onClick={()=>choose('declined')}>Rechazar</button><a href="/privacidad">Privacidad</a></aside>:<button className="analytics-settings" onClick={()=>{(window as AnalyticsWindow).flambeeAnalyticsReady=false;choose('unset');window.location.reload()}}>Preferencias de medición</button>;
}
