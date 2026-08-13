# SEO Competitive Benchmark Without Source HTML — dajula (Bogotá)

> **Nota:** este es el estudio de competencia que se hizo el 2026-08-10, **antes** de escribir una sola línea del sitio — es la base sobre la que se decidió la estructura, el menú, la arquitectura de URLs y buena parte del copy (ver [docs/PLAYBOOK.md](PLAYBOOK.md) sección 1). Es una fotografía de un momento concreto: los rankings de Google y el estado de los competidores analizados pueden haber cambiado desde entonces. Para ver qué se implementó realmente a partir de estos hallazgos, y cómo fue evolucionando, ver [CHANGELOG.md](../CHANGELOG.md). Para el estado actual de qué factores SEO están implementados en el sitio (y cómo verificarlos), ver [docs/SEO.md](SEO.md).

## 1. Starting Point: Business Idea (No Existing Website)

# Starting Point: Business Idea (No Existing Website)

## Detected Sector
Servicios personales de gestión de trámites, mandados y concierge doméstico ("servicio de diligencias / gestor de trámites y mandados a domicilio"). Sector afín: personal concierge / errand & task management services, con fuerte componente de trámites administrativos, salud (EPS) y cuidado del hogar.

## Detected Country, Language And Target Area
Colombia — Bogotá D.C. — Español (es-CO).

## Business Type
Servicio local B2C, prestado por una persona o pequeño equipo ("gestor/a de diligencias"), sin local físico — se opera a domicilio y en entidades públicas/privadas.

## Detected Services Or Products
- Trámites EPS: pedir citas, reclamar medicamentos, acompañamiento a citas médicas.
- Diligencias personales: registro civil (nacimiento, matrimonio, defunción), expedición de certificados, legalización de documentos académicos, partidas eclesiásticas, autenticaciones notariales.
- Compras: mercado, regalos, insumos para celebraciones.
- Cuidado del hogar y mascotas mientras el cliente está fuera.
- Limpieza de hogar.
- Servicio "a medida" para necesidades no listadas ("contáctame y vemos cómo puedo ayudarte").

## Main Search Intent
Transaccional/local: alguien sin tiempo o sin salud busca "quién me haga esto por mí" en Bogotá, con urgencia media-alta (cita EPS, trámite con fecha límite) o recurrente (mercado semanal, limpieza).

## Detected Conversion Goal
Contacto directo (WhatsApp/llamada) para cotizar y agendar la diligencia — no hay checkout de e-commerce.

## Reference Websites Provided
- https://www.soslohagoporti.cl/servicios/ (Santiago de Chile)
- https://www.tramitesbogota.com/servicios-de-diligencias#DOMICILIOS (Bogotá — coincide con un competidor orgánico verificado en Google, ver sección 4)

## Desired Tone Of Voice
No especificado explícitamente por el usuario. Se deduce, por el nombre de marca "dajula" y las referencias elegidas, una preferencia por un tono cercano, personal y en primera persona ("yo lo hago por ti"), similar al de soslohagoporti.cl y hagotutramite.cl (ver sección 10).

## Probable Keywords Detected
- Principal: `diligencias Bogotá`, `servicio de diligencias Bogotá`, `mandadero Bogotá`
- Secundarias: `trámites EPS a domicilio Bogotá`, `quién me hace mis diligencias Bogotá`, `gestor de trámites Bogotá`
- Locales: `diligencias [barrio/localidad] Bogotá`, `mandados Cundinamarca`
- Variaciones de servicio: `pedir citas EPS Bogotá`, `reclamar medicamentos EPS`, `legalización de documentos Bogotá`, `apostilla Bogotá`, `mercado a domicilio Bogotá`, `cuidado de mascotas mientras viajo Bogotá`, `limpieza de hogar Bogotá`

## Unclear Or Missing Information
- Nombre de marca definitivo: se asume "dajula" (del dominio `hagotudiligencia.com`), pero el dominio no resuelve todavía — no hay sitio activo. `Not detectable`.
- Estructura de precios (por servicio, por hora, tarifa plana). `Not detectable`.
- Si es una persona sola o un equipo. `Not detectable`.
- Localidades/barrios específicos de Bogotá donde ya tiene cobertura o clientela. `Not detectable`.
- Medios de pago aceptados. `Not detectable`.

---

## 2. Deduced Sector, Country, Language And Intent
Ver sección 1. Sector: servicios personales de trámites/mandados/concierge doméstico. País: Colombia. Idioma: español. Intención: transaccional local + informacional de soporte (FAQ sobre trámites EPS y notariales).

## 3. Detected Services / Products
Ver lista completa en sección 1. Nota estratégica: el negocio combina dos familias de intención muy distintas — **trámites/gestión documental** (alta fricción, alto valor percibido, competencia con empresas tipo "Diligencias y Trámites Express") y **tareas domésticas/cuidado** (compras, mascotas, limpieza — compite más con plataformas tipo "concierge" o servicios de asistente personal). Esto es clave para la arquitectura (sección 20).

---

## 4. Reference Websites Analysis (User-Provided)

| # | URL | Domain | Why The User Likes It | Also Ranks For A Benchmark Keyword |
|---|---|---|---|---|
| 1 | https://www.soslohagoporti.cl/servicios/ | soslohagoporti.cl | Not stated | No — no apareció en las búsquedas realizadas para el layer Santiago de Chile (`servicio de mandados y trámites a domicilio Santiago Chile`, `mandados a domicilio Santiago Chile servicio`) |
| 2 | https://www.tramitesbogota.com/servicios-de-diligencias | tramitesbogota.com | Not stated | Yes — aparece como resultado orgánico válido para `servicio de diligencias en Bogotá` y `servicio de diligencias Cundinamarca` (ver sección 5) |

### Reference Site Analysis: soslohagoporti.cl (User-Selected — Not Google-Verified For Its Own Market)

**Why The User Likes It:** Not stated.
**Also Ranks For A Benchmark Keyword:** No (no observado en los resultados de Google analizados para Santiago de Chile).

**Estructura y patrones (resumen — detalle completo obtenido por scraping):**
- H1 "Servicios", H2 "¡Haz tu vida más fácil ahora!", 8 categorías en H4 (S.O.S. Compras, Mascotas, Niños, Hogar, Auto, Trámites, Viajes, "Tu propio S.O.S.") — salto de jerarquía H2→H4 sin H3, un fallo semántico a evitar.
- Tono casual, cercano, con emojis ("Mándame un S.O.S. 😉"). Target: profesionales/familias con poco tiempo en Santiago.
- **Fallo estructural clave:** ninguno de los 8 servicios tiene URL propia — todos enlazan a `/contacto/`. Cero segmentación de keywords por servicio.
- Cero elementos de confianza: sin reseñas, testimonios, garantías, años de experiencia ni fotos de equipo.
- CTA repetido "PÍDELO AQUÍ" (8 veces) hacia contacto; teléfono clicable; WhatsApp mencionado en texto pero sin enlace funcional.
- Sin schema, sin breadcrumbs, sin blog.

**Patrón replicable:** el naming por categorías tipo "S.O.S. + [tarea]" es memorable y fácil de escanear — útil como inspiración de tono/menú, pero SEO-mente débil por la falta de páginas propias.

### Reference Site Analysis: tramitesbogota.com (User-Selected — Also Google-Verified Organic Competitor)

Ver análisis completo en sección 6 (Competitor Analysis: tramitesbogota.com), ya que este sitio es simultáneamente referencia del usuario y competidor orgánico real verificado en Google para Bogotá.

---

## 5. Benchmark Locations Selected

| Layer | Location | Country | Proposed Keyword | Language | Reason |
|---|---|---|---|---|---|
| Main city given | Bogotá | Colombia | servicio de diligencias en Bogotá | es | Ciudad principal indicada por el usuario |
| Province / region | Cundinamarca | Colombia | servicio de diligencias Cundinamarca | es | Departamento que rodea Bogotá; municipios de la Sabana son extensión natural de demanda |
| Competitive city in country | Medellín | Colombia | servicio de diligencias Medellín | es | Segunda ciudad más competitiva digitalmente de Colombia para este sector, con jugadores dedicados y activos |
| National | Colombia | Colombia | servicio de diligencias Colombia a domicilio | es | Validar jugadores con cobertura nacional y nivel de madurez SEO del sector a escala país |
| Same continent | Santiago | Chile | servicio de mandados y trámites a domicilio Santiago Chile | es | Mercado hispanohablante maduro en el mismo modelo de negocio; una de las referencias del propio usuario (soslohagoporti.cl) opera ahí, y aparece un competidor casi homónimo (hagotutramite.cl) |
| Other continent | Miami | Estados Unidos | personal concierge and errand service Miami | en | Mercado angloparlante/hispano de alta madurez digital en la categoría "personal concierge & errand services", con webs muy profesionalizadas de las que extraer patrones internacionales |

---

## 6. Keywords Created For Each Location

| Layer | Keyword | Country | Language | Search Intent |
|---|---|---|---|---|
| Main city | servicio de diligencias en Bogotá | Colombia | es | Transaccional local |
| Province / region | servicio de diligencias Cundinamarca | Colombia | es | Transaccional local/regional |
| Competitive city | servicio de diligencias Medellín | Colombia | es | Transaccional local |
| National | servicio de diligencias Colombia a domicilio | Colombia | es | Transaccional nacional |
| Same continent | servicio de mandados y trámites a domicilio Santiago Chile | Chile | es | Transaccional local |
| Other continent | personal concierge and errand service Miami | USA | en | Transaccional local |

---

## 7. Valid Organic Results Detected

| Layer | Keyword | Valid Pos. | Title | URL | Page Type | Reason Valid |
|---|---|---:|---|---|---|---|
| Bogotá | servicio de diligencias en Bogotá | 1 | Servicio De Diligencias \| Diligencias y Trámites en Bogotá | empresadediligencias.godaddysites.com | Homepage negocio real | Sitio de negocio real, no directorio |
| Bogotá | servicio de diligencias en Bogotá | 2 | Servicios de Diligencias | tramitesbogota.com/servicios-de-diligencias | Landing de servicio | Sitio de negocio real (también referencia del usuario) |
| Bogotá | servicio de diligencias en Bogotá | 3 | Diligencias Bogota | diligenciasbogota.com | Homepage negocio real | Sitio de negocio real |
| Bogotá | (excluido) | — | Diligencias En Bogota (Facebook) | facebook.com/DiligenciasEnBogota | Red social | Excluido — red social |
| Bogotá | (excluido) | — | Administrative Department of Security | en.wikipedia.org | Enciclopedia | Excluido — irrelevante/informacional |
| Cundinamarca | servicio de diligencias Cundinamarca | 1 | Inicio - TusMandados.Com | tusmandados.com | Homepage negocio real | Cobertura nacional incl. Cundinamarca, 20+ años declarados |
| Cundinamarca | servicio de diligencias Cundinamarca | 2 | Servicios de Diligencias | tramitesbogota.com | Landing de servicio | Cubre municipios de la Sabana de Bogotá (Cundinamarca) |
| Cundinamarca | servicio de diligencias Cundinamarca | 3 | A.M. Diligencias & Trámites | amdiligenciasytramites.com | Homepage negocio real | Cobertura nacional, sitio de negocio real |
| Cundinamarca | (excluido) | — | Gobernación de Cundinamarca / Rama Judicial | cundinamarca.gov.co / ramajudicial.gov.co | Institucional | Excluido — sitio gubernamental, no competidor comercial |
| Medellín | servicio de diligencias Medellín | 1 | Mandados en Medellín \| Vueltas y Diligencias a Domicilio | mensajeriamedellin.com/mandados/ | Landing de servicio | Sitio de negocio real, dedicado y optimizado |
| Medellín | servicio de diligencias Medellín | 2 | Enviurbanos — Mensajeros urbanos, diligencias personales | enviurbanos.com | Homepage negocio real | Sitio de negocio real dedicado a Medellín |
| Medellín | servicio de diligencias Medellín | 3 | Servicios a Domicilios, diligencias y outsourcing | messengers.com.co/tarifas | Página de tarifas | Sitio de negocio real |
| Medellín | (excluido) | — | Diligencias Y Tramites en Medellin — Páginas Amarillas | paginasamarillas.com.co | Directorio | Excluido — directorio |
| Medellín | (excluido) | — | Diligencias y mensajería en moto en Medellín | planetacolombia.com | Directorio/marketplace | Excluido — directorio |
| Medellín | (excluido) | — | Rapigo — Plataforma de domicilios y trámites express | rapigo.co | Agregador/plataforma | Excluido — agregador |
| Colombia (nacional) | servicio de diligencias Colombia a domicilio | 1 | Inicio - TusMandados.Com | tusmandados.com | Homepage negocio real | Cobertura nacional declarada, 20+ años |
| Colombia (nacional) | servicio de diligencias Colombia a domicilio | 2 | Mensajeros Expresos | mensajerosexpresos.com | Homepage negocio real | Sitio de negocio real |
| Colombia (nacional) | servicio de diligencias Colombia a domicilio | 3 | Servivueltas — vueltas y diligencias en Colombia | servivueltas.net | Homepage negocio real | Sitio de negocio real |
| Colombia (nacional) | (excluido) | — | Administrative Department of Security | en.wikipedia.org | Enciclopedia | Excluido — irrelevante |
| Santiago (Chile) | servicio de mandados y trámites a domicilio Santiago Chile | 1 | Hagotutramite.cl — Trámites presenciales en Santiago | hagotutramite.cl | Homepage/landing negocio real | Sitio de negocio real, modelo casi idéntico al del usuario |
| Santiago (Chile) | servicio de mandados y trámites a domicilio Santiago Chile | 2 | Notaría a Domicilio en Santiago — Notaría Gloria Ortiz | notariaortiz.cl | Landing de servicio | Negocio real de trámites (notariales) a domicilio |
| Santiago (Chile) | servicio de mandados y trámites a domicilio Santiago Chile | 3 | Servicios \| Mandados Y Diligenci | mandadosydiligencias.wixsite.com | Homepage negocio real (Wix) | Sitio de negocio real, aunque de baja inversión técnica |
| Santiago (Chile) | (excluido) | — | Ministerio de Desarrollo Social / Registro Civil / Santiago en Línea | *.gob.cl | Institucional | Excluido — gubernamental |
| Miami | personal concierge and errand service Miami | 1 | Admiral Home Watch & Personal Concierge/Errand Services LLC | vipadmiral.com | Sitio multi-página negocio real | Sitio de negocio real, muy estructurado |
| Miami | personal concierge and errand service Miami | 2 | Errand Girl Miami | errandgirlmiami.com | Homepage negocio real | Sitio de negocio real |
| Miami | personal concierge and errand service Miami | 3 | USA Concierge Services LLC | usaconciergeservices.com | Homepage negocio real | Sitio de negocio real, 7+ años declarados |
| Miami | (excluido) | — | Yelp — Concierge Service Miami (x2) | yelp.com | Directorio/reseñas | Excluido — directorio |

**Nota de acceso:** durante el análisis, varios de estos dominios (diligenciasbogota.com, empresadediligencias.godaddysites.com, amdiligenciasytramites.com, enviurbanos.com, messengers.com.co, mensajerosexpresos.com, servivueltas.net, errandgirlmiami.com, usaconciergeservices.com) no respondieron a la petición de scraping en el momento del análisis (fallo de conexión/DNS puntual). Se mantienen en la tabla porque su posición en el SERP y su naturaleza de negocio real están verificadas por la búsqueda; su contenido interno se marca `Not detectable` y no se ha analizado en profundidad en la sección 8 — no se ha inventado ningún dato sobre ellos.

---

## 8. Individual Competitor Analysis

### Competitor Analysis: tramitesbogota.com

#### Basic Data
| Field | Data |
|---|---|
| URL | tramitesbogota.com/servicios-de-diligencias |
| Domain | tramitesbogota.com |
| Layer | Bogotá / Cundinamarca |
| Keyword | servicio de diligencias en Bogotá |
| Page Type | Landing de servicio (homepage funciona como hub de servicios) |

#### Heading Structure
- H1 (marca): "DILIGENCIAS Y TRAMITES"
- H2: Servicios de Diligencias · Visas · Apostillado · Domicilios · Traducciones Oficiales · Trámites y Afiliaciones EPS · Trámites de Tránsito y Transporte
- H3: placeholders de plantilla sin optimizar ("Título de diapositiva") — señal de contenido sin terminar

#### Heading Analysis
- H1 optimizado: **No** (es solo la marca, sin servicio+ciudad)
- Incluye keyword principal: Parcial (aparece en H2, no en H1)
- Incluye ciudad: No en encabezados principales
- Estructura semántica: Baja — placeholders sin rellenar

#### Image Analysis
| Element | Result |
|---|---|
| Nº aprox. de imágenes | 8-10 |
| Tipos | Fotos de logística/entrega, stock genérico (centros médicos), carrusel con placeholders sin terminar |
| Calidad profesional | Media |
| Refuerzan servicio | Parcial |
| Generan confianza | Parcial |

#### Tone Of Voice
| Factor | Evaluation |
|---|---|
| Tono principal | Urgente, insistente ("¡LLAME YA!" repetido 5+ veces) |
| Cliente objetivo aparente | Particulares y empresas colombianas que necesitan trámites/visas/EPS |
| Argumento de venta principal | Rapidez y disponibilidad 24/7 |
| Cercanía | Media |
| Autoridad | Media (menciona traductores oficiales inscritos ante Cancillería) |
| Intensidad comercial | Alta |

#### Landing Structure
| Orden | Sección | Contenido | Función |
|---:|---|---|---|
| 1 | Header | Logo + teléfono + menú | Navegación/conversión |
| 2 | Barra de contacto | Teléfono, email, WhatsApp, Maps | Conversión múltiple |
| 3 | Hero | Imagen de marca + CTA | Conversión |
| 4 | 7 secciones apiladas | Un bloque por servicio (diligencias, EPS, domicilios, tránsito, visas, apostillado, traducciones) | SEO on-page + información |
| 5 | Footer | Dirección, contacto, WhatsApp | Confianza/conversión |

#### Main Menu
| Orden | Ítem | Tipo | Observación |
|---:|---|---|---|
| 1 | Inicio | Página | — |
| 2 | Nuestros servicios (desplegable) | Submenú con 6 servicios | Diligencias, Trámites EPS, Domicilios, Trámites Tránsito, Visas, Apostillado, Traducciones |
| 3 | Contacto | Página | — |

#### Services / Products Detected
| Servicio | Dónde aparece | URL propia | Función aparente |
|---|---|---|---|
| Diligencias y trámites generales | Home + menú | No (ancla) | Captación general |
| Trámites y afiliaciones EPS | Home + menú | No (ancla) | Muy relevante para el modelo del usuario |
| Domicilios | Home + menú | No (ancla) | Compras/entregas |
| Trámites de tránsito | Home + menú | No (ancla) | Nicho específico |
| Visas | Home + menú | No (ancla) + PDF descargable | — |
| Apostillado/legalización | Home + menú | No (ancla) | Coincide con servicio del usuario |
| Traducciones oficiales | Home + menú | No (ancla) | Diferenciador de autoridad |

#### Conversion Elements
| Element | Present | Observation |
|---|---|---|
| Teléfono visible | Yes | +57 300 4706100, repetido 5+ veces |
| WhatsApp | Yes | Botón con mensaje prellenado |
| Formulario | No | — |
| CTA principal | "¡LLAME YA!" | Muy repetitivo |
| CTA fijo (sticky) | Not detectable | — |
| Cotización gratis | No | — |
| Urgencia | Yes | "No olvide... Llame ya...", "7 X 24" |
| Reseñas/testimonios | No | — |
| Garantía | No explícita | — |
| Dirección física | Yes | Calle 165A #54C-24, Bogotá |

#### Trust Elements
| Element | Present | Observation |
|---|---|---|
| Reseñas | No | — |
| Testimonios | No | — |
| Años de experiencia | No | No se menciona antigüedad |
| Certificaciones | Yes | Traductores inscritos ante MinRelaciones Exteriores |
| Fotos de equipo | No | — |
| Ejemplos de trabajo real | No | — |

#### Internal Linking
| Tipo | Detectado | Ejemplos |
|---|---|---|
| Servicios relacionados | Parcial | Anclas dentro de la misma página |
| Ubicaciones | Yes (texto) | Menciona zonas Bogotá + municipios de la Sabana (Cundinamarca) |
| Breadcrumbs | No | — |
| Enlaces SEO en footer | Parcial | Dirección + contacto |

#### Schema / Structured Data
Not detectable (sin evidencia visible de JSON-LD; plantilla de constructor de webs sin marcado aparente).

#### SEO Summary
**Por qué puede estar posicionando:** nombre de dominio con keyword exacta ("tramitesbogota"), antigüedad aparente del negocio, cobertura amplia de servicios de alta intención (EPS, apostillas, visas) y presencia de datos NAP (nombre-dirección-teléfono) reales.

**Fortalezas:** catálogo de servicios muy alineado con necesidades reales (EPS, apostillas, legalizaciones); múltiples canales de contacto; menciona cobertura en municipios de Cundinamarca.

**Debilidades:** cero páginas de servicio propias (todo en anclas de una sola página); cero prueba social; encabezados sin optimizar (placeholders sin rellenar); sin schema; tono repetitivo/agresivo que puede cansar.

**Patrones replicables:** agrupar "Trámites EPS" como categoría propia de alto valor; mencionar municipios de Cundinamarca para capturar el layer regional; multicanal de contacto (tel + WhatsApp + email + Maps).

**Cómo superar esta página:** crear página propia por servicio (no anclas) con H1 "servicio + ciudad", añadir testimonios reales, schema LocalBusiness + Service + FAQPage, y un tono más cercano y menos gritado.

---

### Competitor Analysis: tusmandados.com

#### Basic Data
| Field | Data |
|---|---|
| URL | tusmandados.com |
| Domain | tusmandados.com |
| Layer | Cundinamarca / Colombia (nacional) |
| Keyword | servicio de diligencias Cundinamarca / servicio de diligencias Colombia a domicilio |
| Page Type | Homepage con hub de servicios |

#### Heading Structure
- H1: "TusMandados.Com: expertos en trámites, apostillas y traducciones en Colombia"
- H2/H3: no claramente delimitados en el contenido accesible

#### Heading Analysis
- H1 optimizado: Parcial — incluye keyword ("trámites") y país, no ciudad específica
- Incluye ciudad/ubicación: Solo país (Colombia), no Bogotá/Cundinamarca explícito en H1
- Estructura semántica: Media

#### Image Analysis
| Element | Result |
|---|---|
| Nº aprox. de imágenes | 8-10 |
| Tipos | Logo, apostilla/legalización, envío internacional, mensajería municipal, mandados, WhatsApp |
| Calidad profesional | Media |
| Generan confianza | Parcial |

#### Tone Of Voice
| Factor | Evaluation |
|---|---|
| Tono principal | Profesional pero accesible |
| Cliente objetivo | Particulares y empresas colombianas con necesidad de trámites oficiales, traducciones y mensajería |
| Cercanía | Media |
| Autoridad | Alta — reclama "más de 20 años de experiencia" |
| Intensidad comercial | Media |

#### Landing Structure
| Orden | Sección | Contenido |
|---:|---|---|
| 1 | Menú (duplicado) | Navegación |
| 2 | Hero | 4 tarjetas de servicio principal |
| 3 | WhatsApp prompt | Conversión |
| 4 | Presentación de la empresa | Confianza |
| 5 | Compartir social | — |
| 6 | Aviso de cookies | Legal |
| 7 | Barra lateral de contacto | Conversión |
| 8 | Footer con redes | — |

#### Main Menu
Trámites especializados · Mandados · Reseñas · Contáctanos · Legal · Blog

#### Services / Products Detected
| Servicio | URL propia |
|---|---|
| Legalización/apostilla de documentos | Yes |
| Copias de registro civil | Yes |
| Trámites de movilidad (ventanilla única) | Yes |
| Legalización de documentos EAU | Yes |
| Traducciones oficiales | Yes |
| Mandados municipales | Yes |
| Compra/entrega de regalos (Bogotá) | Yes |
| Envíos internacionales | Yes |
| Mensajería outsourcing | Yes |

**Nota clave:** este competidor SÍ tiene página propia por cada servicio — el patrón más fuerte del benchmark entero, y el más importante a replicar.

#### Conversion Elements
| Element | Present | Observation |
|---|---|---|
| Teléfono | Yes | +57 300 561 2886 |
| WhatsApp | Yes | Botón directo wa.me con mensaje prellenado, muy visible |
| Email | Yes | tusmandados.com@gmail.com |
| Dirección física | Yes | Calle 71 Bis #92-13, Bogotá |
| Barra de contacto fija | Yes | Multicanal |
| Urgencia | Yes | "¡Contáctanos al instante!" |

#### Trust Elements
| Element | Present | Observation |
|---|---|---|
| Años de experiencia | Yes | "Más de 20 años de experiencia" |
| Garantías | Yes | "Transparencia, cumplimiento y resultados efectivos" |
| Red de aliados | Yes | Mencionada explícitamente |
| Reseñas | Yes (sección "Reseñas" existe, contenido no accesible) | — |
| Fotos de equipo | No | — |

#### Internal Linking
Enlazado interno extenso entre páginas de servicio; blog enlazado; páginas legales accesibles. El patrón de interlinking más maduro del benchmark.

#### Schema / Structured Data
Not detectable explícitamente, aunque la estructura de datos de contacto está marcada como elementos clicables.

#### SEO Summary
**Por qué puede estar posicionando:** páginas de servicio dedicadas (segmentación real de keywords), 20+ años de experiencia declarados, blog activo, cobertura nacional con foco Bogotá/Cundinamarca.

**Fortalezas:** arquitectura de servicios ejemplar (una URL por servicio); WhatsApp como canal prioritario; blog para SEO informacional; aviso de cookies (cumplimiento).

**Debilidades:** H1 no incluye ciudad específica; sin fotos de equipo; sin schema visible.

**Patrones replicables:** estructura `/servicios/[servicio-especifico]/` es el patrón nº1 a copiar; sección de blog para contenido informacional (ej. "cómo pedir cita EPS", "requisitos apostilla").

**Cómo superar esta página:** añadir H1 con ciudad + servicio, sumar schema LocalBusiness/Service/FAQPage, incorporar reseñas reales visibles (no solo la sección vacía) y fotos reales del/la gestor/a.

---

### Competitor Analysis: mensajeriamedellin.com

#### Basic Data
| Field | Data |
|---|---|
| URL | mensajeriamedellin.com/mandados/ |
| Domain | mensajeriamedellin.com |
| Layer | Medellín |
| Keyword | servicio de diligencias Medellín |
| Page Type | Landing de servicio dedicada |

#### Heading Structure
- H1: "Mandados en Medellín" (con subtítulo descriptivo)
- H2: ¿Qué mandados hacemos? · ¿Listo para delegar tus vueltas? · Zonas de cobertura de mandados en Medellín · Preguntas frecuentes sobre mandados en Medellín
- H3: tipos de servicio individuales ("Recoger Llaves") y preguntas de FAQ ("¿Cuánto cuesta un mandado en Medellín?")

#### Heading Analysis
- H1 optimizado: **Sí** — incluye servicio + ciudad
- Incluye keyword principal: Yes
- Incluye ciudad: Yes
- Estructura semántica: Alta — el mejor H1 del benchmark completo

#### Tone Of Voice
| Factor | Evaluation |
|---|---|
| Tono principal | Conversacional, orientado a beneficio/tiempo ahorrado |
| Cliente objetivo | Residentes de Medellín y Valle de Aburrá sin tiempo para hacer vueltas |
| Cercanía | Alta |
| Intensidad comercial | Media |

#### Landing Structure
Navegación → Hero con H1 optimizado → "¿Qué mandados hacemos?" (lista de servicios) → CTA "Pedir Mandado" → Zonas de cobertura (barrios específicos) → FAQ con schema-friendly Q&A → Testimonios (referenciados) → Footer

#### Main Menu
Inicio · Servicios · Cobertura · Preguntas · Contacto (+ variante Inicio Empresas · Servicios · Testimonios · Contacto)

#### Services / Products Detected
Recoger llaves · Pagar facturas · Hacer compras · Radicación y trámites — todos dentro de la misma landing, sin URLs propias por servicio individual (a diferencia de tusmandados.com).

#### Conversion Elements
| Element | Present | Observation |
|---|---|---|
| CTA principal | "Pedir Mandado" | Repetido 3+ veces |
| WhatsApp | Yes | +57 333 281 5872 con mensajes prellenados por servicio |
| Urgencia | Yes | "en menos de 30 minutos", "60 a 90 minutos" — promesa de tiempo de respuesta |
| Email | Yes | info@mensajeriamedellin.com |

#### Trust Elements
| Element | Present | Observation |
|---|---|---|
| Calificación | Yes | "4.9/5.0 ⭐" mostrado de forma prominente |
| Testimonios | Referenciados | Sección existe |
| Zonas de cobertura | Yes | El Poblado, Laureles, Belén, Centro — muy específico |
| Horario de atención | Yes | Lun-Vie 7am-6pm, Sáb 8am-1pm |

#### Internal Linking
Enlaces a mensajería empresarial y "trabaja con nosotros"; footer con servicios relacionados.

#### Schema / Structured Data
Not detectable explícitamente, pero la estructura de FAQ (pregunta+respuesta clara) está lista para FAQPage schema.

#### SEO Summary
**Por qué puede estar posicionando:** H1 perfecto (servicio+ciudad), promesas de tiempo de respuesta muy concretas, calificación visible, zonas de cobertura hiperlocales listadas explícitamente (señal fuerte de relevancia local).

**Fortalezas:** el mejor ejemplo de H1/heading del benchmark; FAQ bien estructurada; cobertura por barrio explícita; calificación destacada.

**Debilidades:** sin URLs de servicio individuales; testimonios no verificables en el contenido accesible.

**Patrones replicables:** fórmula de H1 "[Servicio] en [Ciudad]"; listar barrios de cobertura explícitamente; mostrar promesa de tiempo de respuesta ("en menos de X minutos"); mostrar calificación numérica visible cerca del hero.

**Cómo superar esta página:** añadir páginas propias por servicio, sumar testimonios con nombre/foto reales y schema FAQPage + AggregateRating (si la calificación es real y verificable).

---

### Competitor Analysis: hagotutramite.cl

#### Basic Data
| Field | Data |
|---|---|
| URL | hagotutramite.cl |
| Domain | hagotutramite.cl |
| Layer | Santiago (Chile) — mismo continente |
| Keyword | servicio de mandados y trámites a domicilio Santiago Chile |
| Page Type | Homepage/landing completa con precios |

**Nota importante:** este es el competidor más relevante de todo el benchmark para el modelo de negocio del usuario — nombre casi idéntico ("Hago Tu Trámite" vs. "dajula"), mismo concepto de "yo hago el trámite presencial por ti", y con una estructura de página mucho más madura que la de cualquier competidor colombiano encontrado.

#### Heading Structure
- H1: "Hacemos tu trámite por ti"
- H2: "Una forma simple de resolver trámites presenciales" · "Ahorra tiempo y dinero" · "Cuentas claras" · "¿Cómo funciona?" · "Trámites disponibles" · "Testimonios" · "Preguntas frecuentes" · "Un asistente personal para hacer tus trámites"

#### Heading Analysis
- H1 optimizado: Parcial — fuerte en propuesta de valor, sin ciudad
- Estructura semántica: Alta — cobertura completa del funnel (qué es → cómo funciona → precio → prueba social → FAQ)

#### Image Analysis
~12-15 imágenes/SVG, mayormente iconografía de proceso; logo repetido 3 veces.

#### Tone Of Voice
| Factor | Evaluation |
|---|---|
| Tono principal | Profesional-cercano |
| Cliente objetivo | Chilenos de regiones y personas que no pueden desplazarse a Santiago |
| Cercanía | Alta |
| Autoridad | Media-alta (transparencia de precios genera confianza) |

#### Landing Structure
Menú (7 ítems + icono WhatsApp) → Hero con CTA → Resumen del servicio → **Estadísticas** ("100+ tipos de trámites", "100% verificable", valor inicial de $25.000) → 3 secciones de capacidades → **Tabla de precios por niveles** (4 niveles + adicionales) → Proceso en 5 pasos → Carrusel de testimonios (4 visibles) → FAQ acordeón (5 preguntas) → Footer

#### Main Menu
Servicios a la medida · Precios · ¿Cómo funciona? · Preguntas frecuentes · Trámites migratorios (URL propia `/migratorio`) · Contacto

#### Services / Products Detected
| Servicio | URL propia |
|---|---|
| Trámites migratorios | Yes (`/migratorio`) |
| Resto de trámites (banco, notaría, salud, certificados) | No — dentro de la misma página por anclas |

#### Conversion Elements
| Element | Present | Observation |
|---|---|---|
| WhatsApp | Yes | 2 botones prominentes, números distintos |
| Teléfono | Yes | +569 45171530 |
| Email | Yes | cotizaciones@hagotutramite.cl |
| Precios visibles | **Yes** | 4 niveles de tarifa + adicionales — transparencia total |
| Urgencia | No | Sin lenguaje de escasez |

#### Trust Elements
| Element | Present | Observation |
|---|---|---|
| Testimonios | Yes | 4 testimonios con nombre y ubicación |
| Garantía | Yes | "Cuentas claras" como pilar de marca |
| Estadísticas de volumen | Yes | "100+ tipos de trámites" |
| Fotos de equipo | No | — |
| Años de operación | No | — |

#### Internal Linking
Navegación por anclas (`#ed-...`); solo `/migratorio` como página propia; redes sociales enlazadas sin URL visible.

#### Schema / Structured Data
Not detectable explícitamente.

#### SEO Summary
**Por qué puede estar posicionando:** propuesta de valor clarísima desde el H1, transparencia de precios (poco común en el sector), testimonios reales, FAQ bien estructurada para featured snippets.

**Fortalezas:** funnel completo en una sola página (qué–cómo–cuánto–prueba–dudas); precios públicos como diferenciador de confianza; WhatsApp-first.

**Debilidades:** solo una página de servicio propia (migración); sin ciudad en H1; sin años de experiencia declarados; sin schema.

**Patrones replicables — los más importantes de todo el benchmark:**
1. Mostrar tabla de precios/niveles públicamente.
2. Sección "¿Cómo funciona?" en pasos numerados.
3. Testimonios con nombre y ubicación real.
4. FAQ como bloque propio y visible (candidato directo a FAQPage schema).
5. Estadística de volumen ("100+ tipos de trámites") como prueba de capacidad.

**Cómo superar esta página:** añadir páginas de servicio propias para cada categoría (no solo migración), sumar ciudad al H1, y sumar schema (LocalBusiness + FAQPage + Service).

---

### Competitor Analysis: vipadmiral.com

#### Basic Data
| Field | Data |
|---|---|
| URL | vipadmiral.com |
| Domain | vipadmiral.com |
| Layer | Miami — otro continente |
| Keyword | personal concierge and errand service Miami |
| Page Type | Sitio multi-página completo |

#### Heading Structure
- H1 (de marca): "Admiral Home Watch & Personal Concierge/Errand Services LLC"
- H2: Home Watch Services · Corporate Courier Services · Personal Concierge and Errand Services · Personal Errand Concierge services · Our commitment and mission statement · Why Choose Us? · Get Started!
- H3: "Contact Us:"

#### Heading Analysis
- H1 optimizado: No — es solo el nombre de marca, sin ciudad ni keyword clara
- Estructura semántica: Media — múltiples H2 sin jerarquía clara

#### Image Analysis
Logo repetido 3x, gráfico de métodos de pago (tarjetas + PayPal), 3 fotos de stock de escenas de concierge/mensajería.

#### Tone Of Voice
| Factor | Evaluation |
|---|---|
| Tono principal | Profesional, tranquilizador ("Peace of Mind All the Way") |
| Cliente objetivo | Propietarios de segunda vivienda, profesionales ocupados en el sur de Florida |
| Autoridad | Alta — menciona personal "ex law enforcement" y estándares éticos estrictos |

#### Landing Structure & Menu
Menú: Home · Home Watch · Concierge Services (submenú: Errands/Concierge, Corporate Courier) · Rates and Fees · Contact Us · About (submenú: Why Choose Us, FAQs) — **arquitectura multi-página real**, la más completa del benchmark en cuanto a jerarquía de menú.

#### Services / Products Detected
| Servicio | URL propia |
|---|---|
| Home Watch | Yes `/home-watch/` |
| Errands & Concierge | Yes `/errands-and-concierge/` |
| Corporate Courier | Yes `/corporate-courier/` |
| Rates and Fees | Yes `/rates-and-fees/` |
| About / Why Choose Us / FAQs | Yes, páginas propias |

#### Conversion Elements
| Element | Present | Observation |
|---|---|---|
| Teléfono | Yes | Principal + secundario + fax |
| Email | Yes | admin@vipadmiral.com |
| Precio de entrada | Yes | "$40 simple flat fee" |
| Zona de cobertura | Yes | Naples, Marco Island, Bonita Springs, Fort Myers, Miami, Fort Lauderdale |
| Métodos de pago | Yes | Tarjetas + PayPal mostrados como logos |
| Horario | Yes | Lun-Vie 7am-6pm, Sáb 1pm-5pm |

#### Trust Elements
| Element | Present | Observation |
|---|---|---|
| Reseñas/testimonios | No | Ausentes — hueco notable |
| Credenciales | Yes | Personal "ex law enforcement" |
| Estándares éticos | Yes | Mencionados explícitamente |
| Página "Why Choose Us" dedicada | Yes | — |

#### Internal Linking
Buena — cada servicio y sección institucional tiene su propia URL; sin breadcrumbs detectados.

#### Schema / Structured Data
Not detectable explícitamente.

#### SEO Summary
**Por qué puede estar posicionando:** arquitectura de sitio multi-página con URL propia por servicio (a diferencia de casi todos los competidores colombianos), tarifa de entrada transparente, zona de cobertura multi-ciudad explícita.

**Fortalezas:** arquitectura de menú y URLs la más profesional del benchmark; página dedicada de tarifas; página dedicada de FAQs; múltiples métodos de pago visibles.

**Debilidades:** cero prueba social (ni una reseña ni testimonio); H1 sin optimizar a keyword; sin schema.

**Patrones replicables:** estructura de menú con submenús por familia de servicio (Home Watch / Concierge / Corporate); página de tarifas dedicada; página "Why Choose Us" independiente; página de FAQs independiente (no solo acordeón en home).

**Cómo superar esta página:** sumar testimonios reales con nombre, optimizar H1 a "servicio + ciudad", añadir schema LocalBusiness + Service + Review.

---

## 9. Analysis By Competition Layer

### Layer: Bogotá (ciudad principal)
**Keyword:** servicio de diligencias en Bogotá
**URLs analizadas:** empresadediligencias.godaddysites.com (no accesible), tramitesbogota.com (analizado), diligenciasbogota.com (no accesible)
**Tipo de página dominante:** Homepage/landing única que actúa como hub de todos los servicios (anclas, no URLs propias).
**Patrones SEO repetidos:** dominio con keyword exacta ("tramitesbogota", "diligenciasbogota"); cero segmentación por servicio en URLs propias; contacto multicanal (tel + WhatsApp).
**Patrones de estructura repetidos:** menú corto (Inicio, Servicios desplegable, Contacto); todo el contenido de servicio vive en la home.
**Patrones de conversión repetidos:** tono de urgencia ("llame ya"); WhatsApp como canal preferente.
**Nivel de competencia:** Medio — hay pocos jugadores realmente optimizados; la mayoría tiene webs básicas de constructor (godaddysites, Wix) sin páginas propias por servicio.
**Oportunidades:** ser el primero en Bogotá con páginas de servicio propias, H1 optimizado (servicio+Bogotá), testimonios reales y schema — ningún competidor de este layer lo hace bien.
**Qué debe aprender la nueva web de este layer:** el dominio y el H1 con keyword exacta importan; el listado de servicios EPS+trámites+domicilios es el que genera más intención de búsqueda.

### Layer: Cundinamarca (provincia/región)
**Keyword:** servicio de diligencias Cundinamarca
**URLs analizadas:** tusmandados.com (analizado), tramitesbogota.com (analizado), amdiligenciasytramites.com (no accesible)
**Tipo de página dominante:** Homepage con hub de servicios, con mención textual (no landing dedicada) a municipios de la Sabana/Cundinamarca.
**Patrones SEO repetidos:** ningún competidor tiene una landing dedicada solo a "Cundinamarca" — se menciona como extensión de cobertura de Bogotá.
**Patrones de estructura repetidos:** páginas de servicio propias (tusmandados.com) superan claramente a las de ancla única (tramitesbogota.com).
**Nivel de competencia:** Bajo-medio — es un hueco real: nadie tiene contenido dedicado a Cundinamarca como región propia.
**Oportunidades:** crear una página `/ubicaciones/cundinamarca/` o por municipio (Chía, Zipaquirá, Soacha, Fusagasugá, etc.) — ningún competidor lo hace, es una oportunidad de SEO local casi vacía.
**Qué debe aprender la nueva web:** replicar el patrón de URL-por-servicio de tusmandados.com, y ser la primera en tener contenido propio para la región.

### Layer: Medellín (ciudad competitiva del país)
**Keyword:** servicio de diligencias Medellín
**URLs analizadas:** mensajeriamedellin.com (analizado), enviurbanos.com (no accesible), messengers.com.co (no accesible)
**Tipo de página dominante:** Landing de servicio dedicada, con el mejor nivel de optimización on-page de todo el benchmark colombiano.
**Patrones SEO repetidos:** H1 "[Servicio] en [Ciudad]"; FAQ estructurada; zonas de cobertura por barrio explícitas.
**Patrones de conversión repetidos:** promesa de tiempo de respuesta concreta ("en menos de 30 minutos"); calificación numérica visible.
**Nivel de competencia:** Medio-alto — este es el layer más maduro en cuanto a SEO on-page de todo el benchmark en Colombia.
**Oportunidades:** Bogotá aún no tiene ningún competidor con el nivel de mensajeriamedellin.com — replicar ese estándar en Bogotá sería una ventaja competitiva directa.
**Qué debe aprender la nueva web:** el H1 óptimo, el listado de barrios de cobertura y la promesa de tiempo de respuesta son las tres tácticas más fuertes observadas en cualquier layer.

### Layer: Colombia (nacional)
**Keyword:** servicio de diligencias Colombia a domicilio
**URLs analizadas:** tusmandados.com (analizado), mensajerosexpresos.com (no accesible), servivueltas.net (no accesible)
**Tipo de página dominante:** Homepage con hub de servicios + blog.
**Patrones repetidos:** cobertura nacional se comunica como "años de experiencia" + red de aliados en varias ciudades, no como páginas propias por ciudad.
**Nivel de competencia:** Medio.
**Oportunidades:** nadie combina cobertura nacional con páginas de ciudad propias (`/ubicaciones/bogota/`, `/ubicaciones/medellin/`) — hueco de arquitectura.
**Qué debe aprender la nueva web:** el blog y las páginas de servicio propias (tusmandados.com) son el estándar a igualar antes de pensar en expansión nacional.

### Layer: Santiago (Chile) — mismo continente
**Keyword:** servicio de mandados y trámites a domicilio Santiago Chile
**URLs analizadas:** hagotutramite.cl (analizado en profundidad), notariaortiz.cl (listado, no analizado en profundidad), mandadosydiligencias.wixsite.com (listado, no analizado en profundidad)
**Tipo de página dominante:** Landing completa tipo funnel (qué–cómo–precio–prueba–FAQ).
**Patrones repetidos:** transparencia de precios; testimonios con nombre; FAQ como bloque de confianza.
**Nivel de competencia:** Medio, pero con un jugador (hagotutramite.cl) claramente por encima del resto del benchmark en madurez de conversión.
**Oportunidades:** ningún competidor de este layer (ni tampoco los colombianos) publica precios — hacerlo sería un diferenciador fuerte y poco común en el sector, aunque debe evaluarse si el modelo de precio variable del usuario lo permite (ver conflicto en sección 10.13, ya que soslohagoporti.cl, referencia del propio usuario, no publica precios).
**Qué debe aprender la nueva web:** la estructura "cómo funciona en N pasos" + "testimonios con nombre y ciudad" + FAQ es el patrón de conversión más fuerte de todo el benchmark.

### Layer: Miami (otro continente)
**Keyword:** personal concierge and errand service Miami
**URLs analizadas:** vipadmiral.com (analizado en profundidad), errandgirlmiami.com (listado, no analizado), usaconciergeservices.com (listado, no analizado)
**Tipo de página dominante:** Sitio multi-página con arquitectura de menú profesional.
**Patrones repetidos:** página propia por servicio y por sección institucional (About, FAQs, Rates); tarifa de entrada visible; zona de cobertura multi-ciudad.
**Nivel de competencia:** Alto — el mercado angloparlante de "concierge/errand services" está mucho más profesionalizado en arquitectura de sitio que el mercado colombiano, aunque más débil en prueba social.
**Oportunidades:** combinar la arquitectura multi-página de este layer con la prueba social del layer chileno sería más fuerte que cualquier competidor visto en ambos mercados por separado.
**Qué debe aprender la nueva web:** páginas institucionales propias (About, Why Choose Us, FAQs, Rates) además de las de servicio — ningún competidor colombiano las tiene todas juntas.

### Layer: User References (independiente de la geografía)
**Keyword:** N/A — capa de inspiración, no de búsqueda
**URLs analizadas:** soslohagoporti.cl (analizado), tramitesbogota.com (analizado — también aparece como competidor orgánico verificado)
**Tipo de página dominante:** Landing de servicios con categorías tipo tarjeta.
**Patrones repetidos:** naming amigable por categoría ("S.O.S. + tarea"); tono cercano/informal; todo el contenido apunta a una sola página de contacto.
**Nivel de "competencia":** No aplica — soslohagoporti.cl no se verificó posicionando orgánicamente para los keywords de benchmark probados.
**Oportunidades:** el naming amigable de soslohagoporti.cl puede convivir con URLs propias por servicio (que soslohagoporti.cl no tiene) — no son mutuamente excluyentes.
**Qué debe aprender la nueva web de este layer:** el tono y el naming por categoría son útiles como capa de marca, siempre que cada categoría tenga también su propia URL indexable (lo que ninguna referencia del usuario hace del todo bien).

---

## 10. Global Patterns Detected

### 1. On-Page SEO Patterns
- El dominio con keyword exacta (tramitesbogota, diligenciasbogota, tusmandados) es común en Colombia — señal de que el nicho local aún compite mucho a nivel de dominio.
- Casi ningún competidor colombiano usa páginas de servicio propias — la mayoría usa anclas dentro de una sola página. Excepción clara: tusmandados.com.

### 2. Heading Patterns
- El mejor patrón de H1 observado: **"[Servicio] en [Ciudad]"** (mensajeriamedellin.com). La mayoría de competidores solo pone el nombre de marca en el H1, sin keyword ni ciudad.

### 3. Landing Structure Patterns
- Estructura ganadora repetida: Hero → Qué hacemos (lista de servicios) → Cómo funciona (opcional) → Zonas de cobertura → FAQ → Testimonios → CTA final.
- Los sitios más débiles (soslohagoporti.cl, tramitesbogota.com) carecen de la sección "cómo funciona".

### 4. Menu Patterns
- Menús cortos (4-6 ítems) dominan en Colombia; el mercado de Miami usa menús con submenús por familia de servicio.

### 5. Service / Product Patterns
- Las categorías más repetidas entre competidores: trámites EPS/salud, apostillas/legalizaciones, compras/mercado, mensajería general. Coinciden casi 1:1 con los servicios ya definidos por el usuario.

### 6. Image Patterns
- Predominan íconos/ilustraciones sobre fotografía real en casi todos los competidores — ninguno usa fotos reales del equipo o de "trabajo en curso" de forma sistemática. Es un hueco de confianza generalizado en todo el sector.

### 7. Tone Patterns
- Dos tonos dominantes: (a) urgente/gritado ("¡LLAME YA!" — tramitesbogota.com) y (b) cercano/tranquilizador (hagotutramite.cl, mensajeriamedellin.com). El segundo tono coincide con sitios mejor estructurados.

### 8. Conversion Patterns
- WhatsApp es el canal de conversión dominante en todos los competidores hispanohablantes, por encima de formularios (que casi nadie usa).
- Promesas de tiempo de respuesta concretas ("en menos de 30 minutos") aparecen solo en el competidor mejor optimizado (mensajeriamedellin.com).

### 9. Trust Patterns
- La prueba social es el punto más débil de casi todo el sector, tanto en Colombia como en Miami. Solo hagotutramite.cl y (parcialmente) mensajeriamedellin.com muestran testimonios reales.
- Ningún competidor combina reseñas + años de experiencia + fotos de equipo a la vez.

### 10. Internal Linking Patterns
- Solo tusmandados.com y vipadmiral.com tienen arquitectura de enlazado interno real entre páginas de servicio propias. El resto depende de anclas.

### 11. Technical / Schema Patterns
- Schema estructurado: no detectable en ningún competidor analizado. Es una oportunidad SEO técnica abierta para toda la categoría.

### 12. International Patterns Worth Adapting
- De Miami (vipadmiral.com): arquitectura de menú con submenús por familia + páginas institucionales (About, Why Choose Us, FAQs, Rates) independientes.
- De Chile (hagotutramite.cl): transparencia de precios por niveles + proceso en pasos numerados + testimonios con nombre y ciudad.

### 13. User Taste Vs. What Actually Ranks

| Patrón del usuario (referencias) | Patrón que realmente posiciona (layers geográficos) | Veredicto |
|---|---|---|
| Naming cercano por categoría tipo "S.O.S. + tarea" (soslohagoporti.cl) | No hay evidencia de que el naming afecte el ranking; es una decisión de marca | **Neutral** — adóptalo libremente como capa de tono/branding |
| Todos los servicios apuntan a una sola página de contacto, sin URL propia (soslohagoporti.cl y, parcialmente, tramitesbogota.com) | El patrón que consistentemente mejor posiciona en todos los layers (tusmandados.com, vipadmiral.com, mensajeriamedellin.com) es tener **una URL propia por servicio** | **Conflicting** — no se debe copiar la estructura de una sola página de soslohagoporti.cl. Recomendación por defecto: página propia por servicio (SEO-comprobado). El estilo de tarjeta/categoría de soslohagoporti.cl puede mantenerse como diseño visual del listado de servicios en la home, siempre que cada tarjeta enlace a su propia URL indexable en vez de solo a "/contacto/". |
| tramitesbogota.com (referencia del usuario) no publica precios ni testimonios | hagotutramite.cl (el competidor más fuerte del benchmark) sí publica precios por niveles y testimonios con nombre | **Conflicting** — si el usuario prefiere no mostrar precios (como su propia referencia tramitesbogota.com), debe saber que el competidor mejor estructurado del benchmark sí lo hace y eso parece asociarse a mayor madurez de conversión. Recomendación por defecto: mostrar al menos un rango de precios o "desde $X"; ofrecer "sin precios públicos" como variante a testear más adelante si el usuario tiene razones comerciales para no publicarlos (ej. cotización muy variable por trámite). |

---

## 11. Starting Point Assessment

### What Competitors Do That We Must Match
- Contacto multicanal con WhatsApp como canal prioritario (100% de los competidores lo usan).
- Listado claro de servicios agrupados por categoría (EPS/salud, trámites/legalizaciones, compras, hogar/mascotas).
- Zona de cobertura explícita (barrios/localidades de Bogotá, como hace mensajeriamedellin.com por comuna en Medellín).
- FAQ visible respondiendo dudas típicas (qué es, cómo funciona, cuánto cuesta, cuánto tarda).

### What Competitors Do That We Can Skip
- Tono "gritado"/urgente tipo "¡LLAME YA!" repetido (tramitesbogota.com) — genera desconfianza más que conversión.
- Placeholders de plantilla sin rellenar (tramitesbogota.com) — nunca publicar contenido a medio terminar.
- Depender de constructores de sitios gratuitos sin dominio propio optimizado (godaddysites, Wix) — el usuario ya tiene ventaja aquí porque partirá con dominio propio (hagotudiligencia.com).

### Structural Requirements From Day One
- Página propia por cada servicio principal (no anclas de una sola página) — es el patrón que más diferencia a los competidores fuertes de los débiles en todo el benchmark.
- H1 con fórmula "[Servicio] en Bogotá" en cada página de servicio.
- Sección "Cómo funciona" en pasos numerados (patrón ganador de hagotutramite.cl).

### Menu Requirements From Day One
- Menú corto con desplegable de Servicios (siguiendo el patrón dominante en Colombia) — ver menú recomendado en sección 15.

### Content Requirements From Day One
- FAQ dedicada a las dudas más frecuentes de EPS y trámites notariales/legalizaciones (intención informacional de alto valor, ningún competidor lo cubre en profundidad).
- Textos con tono cercano, en primera persona ("yo hago tu diligencia por ti"), evitando el estilo "LLAME YA" gritado.

### Image Requirements From Day One
- Fotos reales del/la gestor/a y del proceso (recogiendo un pedido, en una fila, entregando medicamentos) — ningún competidor lo hace bien; es la oportunidad de confianza más clara de todo el benchmark.

### Conversion Requirements From Day One
- Botón de WhatsApp fijo/sticky en todas las páginas.
- Rango de precios o "desde $X" visible (ver conflicto sección 10.13) — al menos para 1-2 servicios de ejemplo si no se quiere publicar tarifa completa.

### Technical / Schema Requirements From Day One
- Schema LocalBusiness + Service + FAQPage desde el lanzamiento — ningún competidor lo implementa, es terreno libre.

### New Pages To Build
- `/servicios/tramites-eps/`
- `/servicios/diligencias-personales/` (registro civil, certificados, legalizaciones, partidas eclesiásticas, autenticaciones)
- `/servicios/compras/`
- `/servicios/cuidado-hogar-mascotas/`
- `/servicios/limpieza-hogar/`
- `/servicios/a-medida/` (para "si no está en la lista, contáctame")
- `/ubicaciones/bogota/` + páginas por localidad relevante
- `/faq/`
- `/sobre-mi/` (o "sobre nosotros")
- `/contacto/`

---

## 12. SEO Opportunities
- Ser el primer negocio de diligencias en Bogotá con páginas de servicio propias bien optimizadas (patrón que solo tusmandados.com hace bien a nivel nacional).
- Cubrir el hueco de contenido dedicado a Cundinamarca/municipios de la Sabana — nadie tiene una landing propia para esa región.
- Implementar schema (LocalBusiness, Service, FAQPage) desde el día uno — cero competidores lo hacen.

## 13. Content Opportunities
- Blog/FAQ con contenido informacional de alto valor: "cómo pedir cita EPS sin hacer fila", "requisitos para apostillar un título en Bogotá", "cómo sacar el registro civil de nacimiento" — intención informacional no cubierta por ningún competidor con profundidad.
- Página "Cómo funciona" en pasos numerados (inspirada en hagotutramite.cl) adaptada a trámites EPS y notariales.

## 14. Conversion Opportunities
- Publicar al menos un rango de precios (diferenciador raro en el sector, ver sección 10.13).
- Promesa de tiempo de respuesta concreta tipo mensajeriamedellin.com ("respuesta en menos de X minutos por WhatsApp").
- Testimonios reales con nombre y localidad (patrón hagotutramite.cl) — ningún competidor colombiano lo hace bien.

## 15. Visual Opportunities
- Fotografía real del proceso y de la persona gestora, en vez de solo íconos — diferenciador de confianza inmediato frente a toda la competencia.
- Diseño de tarjetas por categoría de servicio (inspirado en el estilo de soslohagoporti.cl) pero cada tarjeta enlazando a su propia URL, no solo a contacto.

## 16. Technical / Schema Opportunities
- LocalBusiness + Service + FAQPage + BreadcrumbList desde el lanzamiento.
- Review/AggregateRating schema en cuanto existan reseñas reales verificables (no antes — nunca inventar reseñas).

## 17. International Opportunities To Adapt
- De Miami (vipadmiral.com): páginas institucionales propias — "Sobre mí", "Por qué elegirme", "Tarifas", "Preguntas frecuentes" — como páginas independientes, no solo secciones de la home.
- De Chile (hagotutramite.cl): tabla de precios por niveles + proceso en 5 pasos + testimonios con nombre y comuna/localidad.

---

## 18. Recommended Ideal Structure

1. Header — Logo, menú, WhatsApp visible, teléfono
2. Hero — H1 "Hago tus diligencias y trámites por ti en Bogotá", propuesta de valor, CTA WhatsApp, imagen real
3. Resumen de servicios — Las 6 categorías del usuario, cada una con enlace a su propia página
4. Cómo funciona — 3-5 pasos numerados (pedir → cotizar → confirmar → hacer la diligencia → entregar/confirmar)
5. Servicios detallados — Trámites EPS, Diligencias personales, Compras, Hogar/mascotas, Limpieza, A medida
6. Por qué elegirme — Cercanía, confiabilidad, rapidez, cobertura por localidad
7. Zonas de cobertura — Localidades de Bogotá (y municipios de Cundinamarca si aplica)
8. Precios — Rango o "desde $X" por tipo de servicio
9. Testimonios — Reales, con nombre y localidad
10. FAQ — Dudas de EPS, trámites notariales, tiempos, pagos
11. CTA final — WhatsApp, teléfono, formulario simple
12. Footer — Servicios, zonas, contacto, legal

---

## 19. Recommended Menu

| Orden | Ítem | Propósito | Notas |
|---:|---|---|---|
| 1 | Inicio | Navegación/marca | — |
| 2 | Servicios | SEO/conversión | Desplegable con las 6 categorías, cada una con su propia URL |
| 3 | Zonas de cobertura | SEO local | Localidades de Bogotá + Cundinamarca |
| 4 | Cómo funciona | Conversión | Página o sección ancla |
| 5 | Testimonios | Confianza | — |
| 6 | Preguntas frecuentes | SEO informacional | — |
| 7 | Contacto | Conversión | — |
| 8 | Botón WhatsApp | Conversión | Fijo/sticky en todas las páginas |

---

## 20. Recommended Services / Products

### Main Service
- Trámites EPS (citas, medicamentos, acompañamiento a citas médicas)

### Secondary Services
- Diligencias personales (registro civil, certificados, legalizaciones, partidas eclesiásticas, autenticaciones)
- Compras (mercado, regalos, insumos de celebración)

### Urgent / High-Intent Services
- Reclamo de medicamentos EPS
- Legalización/apostilla con fecha límite

### Specialized Services
- Acompañamiento a citas médicas (target: personas mayores o con movilidad reducida — coincide con el cliente objetivo declarado por el usuario)

### Location-Based Services
- Cobertura por localidad de Bogotá; posible expansión a municipios de Cundinamarca (Chía, Zipaquirá, Soacha, etc.) como hueco de contenido detectado en el benchmark

### Related Services
- Cuidado de hogar y mascotas
- Limpieza de hogar
- Servicio a medida ("si no está en la lista, contáctame")

---

## 21. Concrete SEO Recommendations

### Recommended Title Formula
[Servicio] en Bogotá | dajula

### Recommended H1
Hago tus trámites y diligencias por ti en Bogotá

### Recommended H2s
- ¿Qué diligencias hago por ti?
- ¿Cómo funciona?
- Zonas donde tengo cobertura en Bogotá
- Lo que dicen quienes ya confiaron en mí

### Recommended H3s
- Trámites EPS: citas, medicamentos, acompañamiento
- Registro civil, certificados y legalizaciones
- Compras y mercado
- Cuidado de hogar y mascotas
- Limpieza de hogar
- ¿Necesitas algo más? Hablemos

### Recommended Word Count
800-1.200 palabras en home; 400-600 palabras por página de servicio individual.

### Recommended Number Of Images
6-10 en home (mezcla de fotos reales + iconografía por categoría); 2-4 por página de servicio.

### Recommended Image Types
- Fotos reales del/la gestor/a en acción (recogiendo, entregando, en fila).
- Iconografía simple por categoría de servicio (siguiendo el estilo de tarjetas de soslohagoporti.cl, pero cada una enlazando a su propia URL).

### Recommended Tone
Cercano, en primera persona, tranquilizador — evitar el tono "gritado" tipo "¡LLAME YA!" observado en tramitesbogota.com; inspirarse en el tono profesional-cercano de hagotutramite.cl.

### Recommended CTAs
- "Escríbeme por WhatsApp"
- "Cuéntame qué necesitas"
- "Pide tu diligencia ahora"

### Recommended Schema
- LocalBusiness
- Organization
- Service (uno por página de servicio)
- FAQPage
- BreadcrumbList
- Review / AggregateRating (solo cuando existan reseñas reales y verificables)

### Recommended Internal Linking
- Páginas de servicio → página de zonas de cobertura
- Página de zonas de cobertura → páginas de servicio
- Blog/FAQ → páginas de servicio comerciales
- Footer → todos los servicios y zonas principales

---

## 22. Recommended Website Architecture

```
/
  /servicios/
    /servicios/tramites-eps/
    /servicios/diligencias-personales/
    /servicios/compras/
    /servicios/cuidado-hogar-mascotas/
    /servicios/limpieza-hogar/
    /servicios/a-medida/
  /zonas/
    /zonas/bogota/
    /zonas/cundinamarca/ (o por municipio, si hay demanda: /zonas/chia/, /zonas/soacha/, etc.)
  /testimonios/
  /faq/
    /faq/tramites-eps/
    /faq/legalizaciones-y-apostillas/
  /sobre-mi/
  /contacto/
```

---

## 23. 30 / 60 / 90 Day Action Plan

### Primeros 30 días
- Definir títulos, metas y H1 de las primeras páginas (home + 6 páginas de servicio).
- Construir la estructura de landing principal (sección 18).
- Añadir WhatsApp como CTA fijo/sticky en todas las páginas.
- Redactar y publicar "Cómo funciona" en pasos numerados.
- Sumar schema LocalBusiness + Service desde el lanzamiento.
- Conseguir y producir fotos reales del proceso (aunque sean pocas al inicio) y escribir sus atributos alt.
- Publicar páginas de los 2-3 servicios de mayor intención (Trámites EPS, Diligencias personales, Compras).

### Días 31-60
- Publicar el resto de páginas de servicio (Cuidado hogar/mascotas, Limpieza, A medida).
- Crear página(s) de zona de cobertura para Bogotá y, si aplica, para municipios de Cundinamarca.
- Construir enlazado interno entre servicios y zonas.
- Añadir FAQ con schema FAQPage, priorizando dudas de EPS y legalizaciones.
- Publicar los primeros testimonios reales (con nombre y localidad) en cuanto existan clientes que los confirmen.

### Días 61-90
- Publicar contenido de blog/FAQ informacional (ej. "cómo pedir cita EPS sin hacer fila", "requisitos para apostillar en Bogotá").
- Evaluar publicar un rango de precios o "desde $X" por servicio (ver conflicto de la sección 10.13) y testear su impacto en conversión.
- Expandir cobertura de zonas si hay demanda real fuera de Bogotá.
- Añadir schema Review/AggregateRating en cuanto existan reseñas reales verificables.
- Revisar SEO técnico (velocidad, mobile, breadcrumbs) y monitorizar posiciones para las keywords de este benchmark.

---

## Final Strategic Conclusion

El sector de "diligencias y trámites a domicilio" en Colombia está, en términos de SEO y estructura web, notablemente por debajo de su equivalente en Chile (hagotutramite.cl) y en el mercado angloparlante de "concierge/errand services" de Miami (vipadmiral.com). La mayoría de competidores directos en Bogotá y a nivel nacional colombiano cometen el mismo error estructural: todo su catálogo de servicios vive en una sola página con anclas, sin URLs propias indexables por servicio — el patrón que, cuando aparece (tusmandados.com, mensajeriamedellin.com, vipadmiral.com), se asocia a la mejor optimización on-page de todo el benchmark.

Para "dajula" esto es una ventaja de partida clara: no hay que superar una web robusta y bien indexada, sino un conjunto de webs de constructor gratuito (godaddysites, Wix) o de plantilla sin terminar. Con una arquitectura de página propia por servicio, un H1 con fórmula "servicio + Bogotá", zonas de cobertura explícitas, "cómo funciona" en pasos, testimonios reales y schema desde el día uno —ninguno de los cuales está bien resuelto por la competencia colombiana actual— el sitio puede posicionarse por encima del estándar local del sector desde el lanzamiento.

El mayor punto de fricción a resolver con el propio usuario es el de precios y estructura de página única: sus dos referencias (soslohagoporti.cl y tramitesbogota.com) repiten precisamente el patrón que peor posiciona (todo a una sola página de contacto, sin precios visibles). Se recomienda adoptar su tono y naming cercano, pero no su arquitectura de página única.
