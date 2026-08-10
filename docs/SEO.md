# SEO — factores implementados y cómo verificarlos

Este documento lista **qué está implementado**, dónde, y **cómo comprobarlo tú mismo** sin depender de que alguien te diga "confía en mí". Para el estudio de competencia que fundamentó estas decisiones, ver [BENCHMARK.md](BENCHMARK.md). Para el porqué de cada decisión concreta, ver [CHANGELOG.md](../CHANGELOG.md).

URL base de producción: **https://hago-tu-diligencia.vercel.app**

---

## 1. On-page SEO (title, meta description, H1)

Fórmula usada en páginas de servicio: `[Servicio] en Bogotá | Hago Tu Diligencia` para el title, y H1 = `[Servicio] en Bogotá` (patrón que en el benchmark era el que mejor posicionaba — ver BENCHMARK.md sección 9, capa Medellín).

| Página | Title | H1 |
|---|---|---|
| `/` | Trámites y Diligencias en Bogotá \| Hago Tu Diligencia | Hago trámites y diligencias POR TI en Bogotá |
| `/servicios/tramites-eps.html` | Trámites de EPS en Bogotá \| Hago Tu Diligencia | Trámites de EPS en Bogotá |
| `/servicios/diligencias-personales.html` | Diligencias Personales en Bogotá \| Hago Tu Diligencia | Diligencias personales en Bogotá |
| `/servicios/compras.html` | Compras y Mercado a Domicilio en Bogotá \| Hago Tu Diligencia | Compras a domicilio en Bogotá |
| `/servicios/cuidado-hogar-mascotas.html` | Cuidado de Hogar y Mascotas en Bogotá \| Hago Tu Diligencia | Cuidado de hogar y mascotas en Bogotá |
| `/servicios/limpieza-hogar.html` | Limpieza de Hogar y Oficinas en Bogotá \| Hago Tu Diligencia | Limpieza de hogar y oficinas en Bogotá |
| `/servicios/a-medida.html` | Diligencias a la Medida en Bogotá \| Hago Tu Diligencia | ¿Necesitas algo que no está en la lista? |
| `/zonas/bogota.html` | Diligencias en Bogotá — Cobertura por Localidad \| Hago Tu Diligencia | Diligencias en Bogotá |
| `/testimonios.html` | Testimonios \| Hago Tu Diligencia | Lo que dicen quienes ya confiaron en mí |
| `/faq.html` | Preguntas Frecuentes \| Hago Tu Diligencia | Preguntas frecuentes |
| `/sobre-mi.html` | Sobre Mí \| Hago Tu Diligencia | La persona detrás de Hago Tu Diligencia |
| `/contacto.html` | Contacto \| Hago Tu Diligencia | Hablemos de tu diligencia |

Cada página tiene también una `<meta name="description">` única (no genérica, no duplicada entre páginas) — ver el `<head>` de cada archivo `.html` directamente para el texto exacto.

**Cómo verificar:** abrir cualquier URL del sitio y ver el código fuente (clic derecho → "Ver código fuente" / Ctrl+U), o revisar cómo se ve en buscadores con la [Google Search Console](https://search.google.com/search-console) una vez el sitio esté indexado (sección "Rendimiento" → clic en una URL → "Inspeccionar URL").

## 2. Arquitectura de URLs: una URL propia por servicio

A diferencia de casi todos los competidores analizados en el benchmark (que meten todos los servicios en una sola página con anclas — ver BENCHMARK.md sección 10), cada servicio tiene su propia URL indexable:

```
/servicios/tramites-eps.html
/servicios/diligencias-personales.html
/servicios/compras.html
/servicios/cuidado-hogar-mascotas.html
/servicios/limpieza-hogar.html
/servicios/a-medida.html
```

**Por qué importa:** permite que cada página posicione para su propia keyword específica ("trámites EPS Bogotá", "limpieza de oficinas Bogotá", etc.) en vez de competir todas por la misma keyword genérica de la home.

**Cómo verificar:** cada URL de arriba carga directamente en el navegador y tiene su propio `<title>`, meta description y H1 (ver tabla de la sección 1).

## 3. Datos estructurados (Schema.org / JSON-LD)

| Tipo de schema | Dónde | Qué contiene |
|---|---|---|
| `LocalBusiness` | `/` (home) | Nombre, descripción, `areaServed`, `telephone`, `priceRange`, `aggregateRating`, `review` (4 reseñas reales) |
| `Service` | Las 6 páginas de servicio | `serviceType`, `provider` (apunta al `LocalBusiness`), `areaServed`, `description` |
| `FAQPage` | `/faq.html` | Las 6 preguntas/respuestas visibles en la página, marcadas también en schema |
| `BreadcrumbList` | Las 11 páginas con migas de pan visibles | Ruta completa reflejando exactamente lo que se ve en pantalla |

**Cómo verificar (dos formas):**

1. **Ver el código fuente** de cualquier página y buscar `<script type="application/ld+json">` — hay uno o dos bloques por página según corresponda.
2. **[Google Rich Results Test](https://search.google.com/test/rich-results)** — pegar la URL completa de cualquier página del sitio (ej. `https://hago-tu-diligencia.vercel.app/servicios/tramites-eps.html`) y Google valida el schema y muestra si es elegible para resultados enriquecidos.
3. Alternativa sin depender de Google: **[Schema Markup Validator](https://validator.schema.org/)** — mismo proceso, pegar la URL.

**Nota importante:** el `review`/`aggregateRating` de la home usa **únicamente las 4 reseñas reales** de clientes (Sofía, Angela Prieto, María, Andrés — ver CHANGELOG 2026-08-09). Si se agregan reseñas nuevas en el futuro, hay que sumarlas ahí y recalcular `reviewCount` — nunca dejar un número que no corresponda a reseñas reales existentes (Google penaliza schema de reseñas falso o no verificable).

## 4. SEO técnico: sitemap y robots

- **`/sitemap.xml`** — lista las 12 páginas indexables del sitio (no incluye `/zonas/cundinamarca.html` porque esa página se eliminó cuando se acotó la cobertura a solo Bogotá — ver CHANGELOG 2026-08-09).
- **`/robots.txt`** — permite el rastreo completo (`Allow: /`) y apunta al sitemap.

**Cómo verificar:**
- Abrir directamente `https://hago-tu-diligencia.vercel.app/sitemap.xml` y `https://hago-tu-diligencia.vercel.app/robots.txt` en el navegador — deben cargar sin error 404 y sin mostrar el dominio viejo (`hagotudiligencia.com`, que no existe todavía).
- Una vez el sitio esté dado de alta en [Google Search Console](https://search.google.com/search-console), enviar el sitemap ahí (Sitemaps → "Añadir sitemap nuevo" → `sitemap.xml`) para que Google confirme que lo puede leer.

## 5. Imágenes

- **`alt` descriptivo** en cada imagen de servicio y del hero (no genérico tipo "imagen1.jpg" — describe lo que se ve, ej. `alt="Haciendo fila con documentos en un punto de atención EPS en Bogotá"`).
- **Peso optimizado:** todas las fotos pasaron de PNG (~2MB) a JPEG comprimido (100-300KB) antes de subirse — ver ARCHITECTURE.md sección "Imágenes" para el pipeline exacto. Menos peso = carga más rápida = mejor señal de Core Web Vitals.

**Cómo verificar:**
- Ver código fuente y confirmar que cada `<img>` tiene un atributo `alt` no vacío y descriptivo.
- Revisar el peso real de las imágenes: [PageSpeed Insights](https://pagespeed.web.dev/) — pegar la URL del sitio y revisar la sección de "Oportunidades" relacionada con imágenes (no debería aparecer como problema, dado que ya están comprimidas).

## 6. Enlazado interno

Cada página de servicio enlaza a: la página de otro servicio relacionado (ej. Trámites de EPS ↔ Diligencias personales), la página de cobertura (`/zonas/bogota.html`), y el CTA de WhatsApp. El footer de las 13 páginas enlaza a todos los servicios, la cobertura, testimonios, FAQ, sobre mí y contacto — no hay páginas huérfanas (sin ningún enlace interno apuntando a ellas).

**Cómo verificar:** [Rastreo con Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) (versión gratis hasta 500 URLs, de sobra para este sitio) apuntando a `https://hago-tu-diligencia.vercel.app` — la pestaña "Internal" muestra todas las URLs encontradas; ninguna debería aparecer con 0 enlaces entrantes.

## 7. SEO local

- **`areaServed: "Bogotá, Colombia"`** en el schema `LocalBusiness` y en cada `Service` — refleja la cobertura real (no se infla a "toda Colombia" ni se deja "Cundinamarca" después de haberse retirado esa cobertura — ver CHANGELOG 2026-08-09).
- **`telephone`** real en el schema `LocalBusiness` (agregado 2026-08-10).
- **Sin dirección física publicada** — decisión correcta para un negocio a domicilio sin local propio; no se debe inventar una dirección solo para "completar" el schema.
- **Pendiente, fuera del código:** Perfil de Negocio de Google (Google Business Profile), configurado como "negocio de área de servicio". Es la pieza de SEO local de mayor impacto que falta, y no se puede hacer desde el repo — requiere que el dueño del negocio lo cree y verifique con su propia cuenta de Google. Ver conversación del 2026-08-10 en el historial de chat para el razonamiento completo.

**Cómo verificar `areaServed`/`telephone`:** igual que la sección 3 (ver código fuente o Rich Results Test en la home).

## 8. Rendimiento y mobile-friendly

- Sin JavaScript pesado (~15 líneas totales, solo para el menú móvil) — nada que bloquee el render.
- CSS responsive con dos breakpoints (900px, 640px) — layout de una sola columna en móvil, menú hamburguesa por debajo de 900px (ver ARCHITECTURE.md para el bug de especificidad ya corregido en el menú).
- Imágenes optimizadas (sección 5).

**Cómo verificar:** [PageSpeed Insights](https://pagespeed.web.dev/) con la URL del sitio, revisando tanto la puntuación de "Mobile" como la de "Desktop". También se puede probar el menú/layout responsive manualmente cambiando el tamaño de la ventana del navegador o con las herramientas de desarrollador (F12 → icono de móvil/tablet).

---

## Pendiente / no implementado todavía

- [ ] Perfil de Negocio de Google (ver sección 7) — acción fuera del código, la debe hacer el dueño del negocio.
- [ ] `sameAs` en el schema — se omite a propósito hasta que existan perfiles externos reales a los que enlazar (redes sociales, el propio Google Business Profile una vez creado).
- [ ] `openingHours` en el schema — se omite hasta que exista un horario fijo real definido (ver pendiente de "Horario de atención" en `contacto.html`).
- [ ] Envío del sitemap a Google Search Console — requiere dar de alta la propiedad primero.
- [ ] Dominio propio (`hagotudiligencia.com` u otro) — si se conecta en el futuro, hay que actualizar `sitemap.xml`, `robots.txt` y el `url`/`telephone` del schema en `index.html` para que apunten al dominio nuevo en vez de `hago-tu-diligencia.vercel.app`.
