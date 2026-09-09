# Flambee · Evaluación y guías

Versión pública de la V3: 12 recorridos, recomendaciones según las respuestas y 24 guías. Preparada para Next.js y el equipo Pro de Flambee en Vercel.

## Publicar

1. En Vercel, seleccionar el equipo Pro de Flambee.
2. Add New → Project → importar `Flambee-lab/flambee-assessment`.
3. Nombre del proyecto: `flambee`. Framework: Next.js. Directorio raíz: `./`. Las órdenes se detectan desde vercel.json.
4. El dominio solicitado es `flambee.vercel.app`; su disponibilidad se comprueba en Vercel. No se presupone que esté reservado.
5. Variables opcionales: `PUBLIC_SITE_URL` (origen HTTPS definitivo, sin ruta; por defecto se toma VERCEL_PROJECT_PRODUCTION_URL), `NEXT_PUBLIC_GA_MEASUREMENT_ID` (G-…). No poner claves privadas en variables públicas.
6. Deploy. Verificar acceso sin iniciar sesión, un artículo, la evaluación y Calendly.

La publicación de producción habilita indexación si el dominio está configurado; las previews permanecen noindex. El build genera configuración pública desde las variables de Vercel. No hace falta comprar otro dominio ni configurar flambee.co.

## Analytics y SEO

Sin ID GA4 no se carga Analytics. Con ID válido se solicita consentimiento antes de cargar la etiqueta. Se registran visitas e inicio/finalización de evaluación, preparación de consulta y clic a Calendly; no se envían respuestas individuales ni el resumen.

En GA4, desactivar los pageviews automáticos por cambios de historial en Medición mejorada: el sitio los envía manualmente para evitar duplicación. Verificar en Realtime/DebugView antes de dar por terminada la integración.

Enviar `/sitemap.xml` a Search Console tras verificar la propiedad de prefijo URL del dominio asignado. El sitemap incluye evaluación, índice y 24 artículos. Los artículos tienen canonical, metadatos y datos estructurados. No hay garantía de indexación o ranking.

`consultation_click` significa abrir Calendly; no confirma una reserva. El resumen permanece en pantalla y no se transmite a Calendly.

## Desarrollo

Node 22 o posterior. `npm ci`, `npm run dev`. Validación: `npm run check` y `npm run build`.

Este repositorio contiene solo la versión de publicación. El prototipo local conserva V1/V2/V3 para comparación; cambios posteriores se incorporan deliberadamente a este repositorio.
