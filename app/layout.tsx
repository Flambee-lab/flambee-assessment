import type {Metadata} from 'next';
import './globals.css';
import './v2.css';
import './v3.css';
import {indexable,absoluteUrl} from '../lib/publication';
import {Analytics} from '../components/analytics';
export const metadata:Metadata={title:'Evaluación de procesos: UX, automatización e IA | Flambee',description:'Descubrí qué procesos de tu empresa conviene revisar. Evaluación guiada de tareas, información y oportunidades de automatización, sin conocimientos técnicos.',alternates:{canonical:absoluteUrl('/')},robots:{index:indexable,follow:true},openGraph:{title:'Qué podrías mejorar en tu empresa | Flambee',description:'Evaluá cómo trabajan hoy y qué conviene comprobar antes de automatizar.',url:absoluteUrl('/'),type:'website',locale:'es_AR'},twitter:{card:'summary'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><div className="version-two version-three">{children}</div><Analytics/></body></html>}
