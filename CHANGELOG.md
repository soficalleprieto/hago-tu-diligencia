# Changelog

Registro cronológico de cambios del sitio, con el porqué de cada decisión. Se actualiza cada vez que se hace una tanda de cambios — sirve como memoria del proyecto y como referencia para construir webs similares (ver también [docs/PLAYBOOK.md](docs/PLAYBOOK.md) para los patrones reutilizables, no atados a este negocio).

## 2026-08-13

- **El mapa deja de ser una caja aparte: ahora vive detrás de los números reales.** Segunda corrección del cliente sobre esta misma sección: la versión anterior (mapa integrado en una tarjeta compartida, alineado en columnas con el texto) seguía sintiéndose como dos cosas — una mini-imagen de mapa arriba con sus propios 4 pines, y la lista de pasos abajo con otros 4 pines iguales. El cliente lo señaló de nuevo: "quiero que el mapa no esté a parte, sino que se vean los 4 puntos como un mapa". Solución: se elimina la caja de mapa independiente por completo. La textura (calles, manzanas) y la ruta punteada ahora se dibujan directamente detrás de la fila de números real (`.step .num`, ya con forma de pin) — solo hay un conjunto de 4 puntos, no dos. El caminante y la escena de entrega también se mueven a ese mismo lugar. Como flourish decorativo solo tiene sentido cuando los 4 pasos están en una sola fila, se oculta en tablet/mobile (`≤900px`, cuando la grilla pasa a 2 o 1 columna) y deja los números simples sin decoración ahí. Aplicado en home y en las 6 páginas de servicio.
- **El mapa de "Cómo funciona" se extiende a las 6 páginas de servicio.** Mismo tratamiento que en la home (mapa integrado con el texto, pines-número alineados con cada paso), aplicado a tramites-eps, diligencias-personales, compras, cuidado-hogar-mascotas, limpieza-hogar y a-medida — cada una con su propio contenido de 4 pasos, mismo mapa decorativo. A petición del cliente tras ver el resultado en la home.
- **Teléfono en grande en el CTA final, en las 9 páginas que lo tienen.** Se agrega "313 248 9177" en texto grande (clamp 2.2rem–3.4rem) entre el párrafo y el botón de WhatsApp de `.cta-final`, como enlace `tel:`. Esto también baja el botón, que es lo segundo que pidió el cliente. Aplica en home, faq, testimonios, servicios/index y las 5 páginas de servicio que usan este CTA (a-medida no tiene CTA final, se deja igual).

- **"Cómo funciona" se convierte en un mapa real, no solo una línea con paradas.** Primer intento: una línea punteada recta con 4 puntos numerados — el cliente lo corrigió ("te inventaste un nuevo camino, quiero que los 4 puntos se conviertan en un mapa"). Versión final: un panel tipo mapa con manzanas (bloques verdes), calles (líneas blancas) y una ruta curva punteada en naranja que conecta 4 pines numerados (1→2→3→4) con forma de pin de mapa real, no círculos. El caminante recorre la ruta deteniéndose en cada pin; al llegar al 4 aparece una segunda escena (alguien recibiendo una bolsa con una cruz, medicamentos) sincronizada con su llegada. Aprendizaje: cuando el cliente pide "un mapa", espera calles/manzanas/pines reconocibles, no una metáfora abstracta con el mismo nombre. Decorativo (`aria-hidden`), respeta `prefers-reduced-motion`.
- **Iconos de la fila de confianza del hero: más grandes y específicos.** Los 3 iconos (16px, genéricos: huella/rayo/corazón) se reemplazan por iconos de 22px dentro de una "chip" de color (mismo lenguaje visual que los iconos de las tarjetas de servicio), dibujados para representar literalmente cada frase: un mapa plegado con un pin para "Cobertura en toda Bogotá", una burbuja de chat con un rayo dentro para "Respuesta rápida por WhatsApp", y una medalla/sello con check para "Trato cercano y de confianza". Motivo: el cliente los encontró "muy pequeños y muy básicos" y pidió algo más ajustado al significado de cada frase.
- **El mapa de "Cómo funciona" pasa de imagen decorativa suelta a estar integrado con el texto.** El cliente lo pidió explícito: "quiero que funcione con el texto, no como una imagen aparte". Antes el mapa (con su propia numeración 1-4) flotaba separado de la lista de 4 pasos de abajo (que tenía círculos numerados distintos). Ahora ambos viven dentro de una sola tarjeta (`.how-block`), los pines del mapa quedan alineados en las mismas 4 columnas que los pasos de texto de abajo, y el número de cada paso reutiliza la misma forma de pin del mapa (en vez de un círculo genérico) — mismo color, misma forma, misma posición en columna. Queda claro que el pin 2 del mapa *es* el paso 2 del texto. Este estilo de número tipo pin se scopea a `.how-block .step .num` para no afectar los círculos numerados de "Cómo funciona" en las 6 páginas de servicio, que no tienen mapa y se quedan con el círculo simple.
- **Zonas de cobertura: se quita Bosa, se agregan Fontibón y Engativá** en la home y en `zonas/bogota.html`.

## 2026-08-11

- **Personalidad propia en la home: iconos temáticos + animación de "caminante".** Los 3 checks genéricos de la fila de confianza del hero se cambian por iconos con más carácter (huella, rayo, corazón). En "Cómo funciona" se agrega una pequeña figura animada caminando sobre una línea punteada (CSS puro, sin librerías), con copy de apoyo ("Yo camino Bogotá por ti..."). Motivo: el cliente notó que el sitio "podría ser de cualquier gestoría" y pidió algo que refuerce visualmente que el servicio es alguien caminando la ciudad por ti. Se respeta `prefers-reduced-motion`.
- **Quita "Inicio" del menú** (el logo ya cumple esa función) y **"Servicios" deja de ser un enlace muerto**: apunta a la nueva página hub `servicios/index.html`.
- **Nueva página `servicios/index.html`** como hub que agrupa los 6 servicios con foto, pensada para quien todavía no sabe qué servicio exacto necesita; suma al sitemap y actualiza breadcrumbs (visibles + schema) de las 6 páginas de servicio.
- **Quita el badge "Diligencias en Bogotá" del hero** de la home (a petición del cliente, vía captura anotada).
- **Contacto: corrige padding de las tarjetas WhatsApp/Teléfono/Correo** (texto pegado a los bordes desde que se agregaron fotos a las tarjetas de servicio) y **agrega un formulario real** (nombre, servicio, mensaje) que arma el mensaje y abre WhatsApp prellenado — sin backend ni cuenta externa. Se quita la nota que explicaba por qué no había formulario. Se define horario de atención: lunes a sábado, 8:00 a.m. a 8:00 p.m.

## 2026-08-10

- **Schema: `telephone` en LocalBusiness.** Se agrega el teléfono real; no se agrega `sameAs` (sin perfiles externos todavía) ni `openingHours` (sin horario fijo definido).
- **Schema: `BreadcrumbList` + `Review`/`AggregateRating`.** BreadcrumbList en las 11 páginas con migas de pan visibles (reflejando la ruta ya mostrada en pantalla). AggregateRating (5.0, 4 reseñas) y los 4 testimonios reales como `Review` en el `LocalBusiness` de la home.
- **Corrige dominio en `sitemap.xml`, `robots.txt` y schema de la home.** Apuntaban a `hagotudiligencia.com` (dominio no desplegado) en vez de la URL real en Vercel.
- **Reescribe los 4 pasos de "Así de simple" en la home.** Copy más completo por paso.

## 2026-08-09

- **Fotos reales de cada servicio en las tarjetas de la home.** Sustituye iconos por fotos como imagen de cabecera de cada tarjeta.
- **Amplía "Limpieza de hogar" a "Limpieza de hogar y oficinas".** Renombrado en todo el sitio (menú, footer, tarjetas) + reescritura completa de la página de servicio (título, meta, schema, hero, listas, pasos, FAQ, CTA) para cubrir oficinas explícitamente.
- **Ajustes de copy en cuidado de hogar y mascotas, compras y diligencias personales**, a partir de correcciones puntuales del cliente sobre cómo describir cada paso/FAQ.
- **"Cuánto cuesta": decisión de no publicar precios.** El benchmark mostraba que publicar precios (como hace el competidor chileno hagotutramite.cl) genera más confianza, pero el cliente prefirió no hacerlo — se documenta como decisión consciente, no como pendiente.
- **"Trámites EPS" → "Trámites de EPS"** en todo el sitio (wording).
- **Se agrega "Etc." al final de cada lista "Qué incluye el servicio"** en las 6 páginas de servicio, para no sonar exhaustivo/cerrado.
- **Testimonios de ejemplo reemplazados por 4 reseñas reales** de clientes (Sofía, Angela Prieto, María, Andrés), en home y en `testimonios.html`.
- **FAQ de la home y de servicios ajustadas** con matices reales del negocio (llamada como alternativa a WhatsApp, pago siempre por adelantado, etc.).
- **"Cómo funciona" y "Preguntas frecuentes de este servicio" pasan de la columna angosta a secciones propias de ancho completo** en las páginas de servicio — estaban apretadas junto al box lateral.
- **Fix de menú en tablet**: `nav.menu ul` (sin `>`) afectaba también al submenú anidado, forzándolo siempre visible en fila horizontal. Se limita a `nav.menu > ul`.
- **Ajuste de cobertura a solo Bogotá** (se elimina la mención/página de Cundinamarca — el negocio no cubre esa zona) y **menú principal simplificado** (Zonas y Testimonios salen del menú, siguen accesibles desde home/footer).

## 2026-08-08

- **Primera versión del sitio**, construida a partir del benchmark SEO competitivo previo (ver skill `seo-competitive-benchmark-sin-html-origen`): estructura, menú, arquitectura de URLs y servicios recomendados a partir de competidores reales en Bogotá, Medellín, Colombia, Chile y Miami.
- **13 páginas estáticas** (home, 6 servicios, 2 zonas, testimonios, FAQ, sobre mí, contacto), sin build ni dependencias, con schema `LocalBusiness`/`Service`/`FAQPage` desde el día uno.
- **WhatsApp real conectado** como CTA principal en todas las páginas.
- **Fotos generadas con IA** (ChatGPT/GPT Image) a partir de prompts diseñados para verse documentales y no genéricas, optimizadas de PNG (~2MB) a JPEG (100-300KB) antes de subir. Los PNG originales se excluyen de git (`.gitignore`) — solo se versionan las versiones optimizadas.
- **Fotos como fondo de banner** en vez de sección separada debajo del hero de texto, en las páginas de servicio.
- **Repo conectado a GitHub** (`soficalleprieto/hago-tu-diligencia`) y **desplegado en Vercel** (`hago-tu-diligencia.vercel.app`) con deploy automático en cada `git push` a `main`.
