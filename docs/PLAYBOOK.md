# Playbook — cómo se construyó este sitio (para reutilizar en webs similares)

Este documento recoge los patrones y decisiones que **no son específicos de "dajula"**, sino reutilizables para construir otras webs de servicio local (un gestor, un negocio de mandados, un profesional independiente, etc.). Para el historial de cambios concretos de este proyecto, ver [CHANGELOG.md](../CHANGELOG.md).

## 1. Investigación antes de construir

No se empezó por el diseño. Se corrió primero un benchmark SEO competitivo (skill `seo-competitive-benchmark-sin-html-origen`) que:
- Dedujo sector, servicios y ubicaciones a partir de una idea de negocio sin web todavía.
- Buscó en Google competidores reales en 6 capas: ciudad principal, región, ciudad competitiva del país, nacional, mismo continente, otro continente.
- Analizó cada competidor en profundidad (SEO on-page, estructura, conversión, confianza, schema) para extraer patrones replicables y huecos de oportunidad.
- Terminó en una estructura, menú, arquitectura de URLs y plan de acción recomendados — eso es lo que se construyó después.

**Por qué importa para la próxima web:** evita diseñar a ciegas. El patrón más valioso que salió de este benchmark fue simple pero decisivo: casi todos los competidores del sector metían todos sus servicios en una sola página con anclas, sin URL propia por servicio — el negocio con URL propia por servicio siempre estaba mejor posicionado.

## 2. Stack técnico

**HTML + CSS + JS estático, sin build, sin framework.** Cada `.html` es una página completa que reutiliza `assets/css/style.css` y `assets/js/main.js`.

Por qué esta elección y no un framework:
- El sitio es pequeño (10-15 páginas), no necesita SSR ni componentes reactivos.
- Cero dependencias = cero mantenimiento de versiones, cero build roto.
- Despliegue en Vercel sin configuración (`framework preset: Other`, sin build command).
- Cualquier persona no técnica puede editar un `.html` directamente si hace falta.

Si el proyecto creciera mucho (30+ páginas de servicio/ubicación, por ejemplo con páginas por barrio), migrar a un generador estático (Astro, Eleventy) para no repetir header/footer a mano en cada archivo.

## 3. Arquitectura de contenido

```
/servicios/[servicio].html   — una URL propia por servicio (el patrón que mejor posiciona)
/zonas/[ciudad].html         — cobertura geográfica, solo para zonas realmente cubiertas
/testimonios.html
/faq.html
/sobre-mi.html
/contacto.html
```

Reglas seguidas:
- Nunca inventar cobertura geográfica, servicios o datos de contacto que el cliente no confirmó — marcar como `TODO` visible en vez de rellenar con placeholders creíbles que alguien podría publicar por error.
- Cada página de servicio: hero con foto real de fondo → qué incluye + a quién le sirve (columna doble) → cómo funciona (4 pasos, sección de ancho completo) → FAQ del servicio (sección de ancho completo, no en la columna angosta) → CTA final.
- Un banner naranja visible (`.todo-banner`) en cabecera mientras el sitio está en construcción, listando qué falta — se retira solo cuando cada pendiente se resuelve.

## 4. Conversión: WhatsApp-first

Todo CTA es un enlace `https://wa.me/[numero]?text=[mensaje precargado específico del contexto]`, no un formulario. Botón flotante fijo (`.wsp-float`) en todas las páginas. Nada de formularios de contacto con backend salvo que el cliente lo pida explícitamente (y en ese caso, avisar que un sitio estático necesita un servicio externo tipo Formspree o una función serverless).

## 5. Fotos: IA + optimización, nunca inventar identidad

- Se generaron con un modelo de imagen (GPT Image, Gemini, etc.) a partir de prompts diseñados para verse **documentales, no genéricos**: primeros planos de manos/proceso, luz natural, sin caras identificables salvo que sea explícitamente una foto real de la persona (ver punto siguiente).
- **Regla dura:** para la página "Sobre mí" — o cualquier lugar donde se implique "esta es la persona que te atiende" — nunca usar una cara generada por IA. Se pide foto real al cliente. Un testimonio o "sobre mí" con una cara falsa, si se descubre, destruye la confianza que se está tratando de construir.
- Pipeline de optimización: PNG de ~2MB generado → redimensionado (máx. 1000-1600px de ancho según uso) → JPEG calidad ~78 → 100-300KB. Los PNG originales se guardan en una carpeta `fotos/` **excluida de git** (`.gitignore`); solo se versiona la versión optimizada en `assets/img/`.
- Las fotos van como **fondo de banner** con overlay oscuro degradado (no como sección separada debajo del texto) — se ve más profesional y evita duplicar el espacio vertical.

## 6. Schema (JSON-LD), de menos a más

Orden de implementación, del más al menos crítico:
1. `LocalBusiness` en la home (nombre, descripción, área servida, teléfono, rango de precio).
2. `Service` en cada página de servicio, con `provider` apuntando al `LocalBusiness`.
3. `FAQPage` en la página de FAQ (y replicar las mismas preguntas visibles en `<details>`).
4. `BreadcrumbList` en cada página con migas de pan visibles — debe reflejar exactamente la ruta que se ve en pantalla, ítem por ítem, con URL absoluta.
5. `Review` + `AggregateRating` — **solo con reseñas reales ya recibidas**, nunca inventadas ni "de ejemplo" dejadas en producción.
6. `sameAs` — solo cuando existan perfiles externos reales (redes sociales, Google Business Profile) a los que enlazar. No dejar un array vacío ni inventar URLs.
7. `openingHours` — solo si el negocio tiene un horario fijo real definido.

## 7. Decisiones de negocio que hay que preguntar, no asumir

Cosas donde la opción "obviamente mejor" según benchmark no siempre es la que el cliente quiere — preguntar explícitamente y documentar la decisión (ver CHANGELOG):
- **Publicar precios o no.** El dato de benchmark: los competidores que sí publican precios transmiten más confianza. Aun así, el cliente puede preferir cotizar caso por caso — es una decisión válida, no un pendiente a "corregir".
- **Alcance geográfico real.** No asumir que "cobertura en toda la ciudad" es cierto — puede que el negocio real solo cubra una parte, y hay que corregir tanto el contenido como el schema (`areaServed`) para reflejarlo.
- **Ficha de Google Business Profile.** Muy recomendable para negocios locales sin mucha competencia digital establecida (es habitualmente el mayor impacto gratuito posible), pero la verificación la debe hacer el propio dueño del negocio con su cuenta — no es algo que se pueda automatizar por él.
- **Páginas por barrio/localidad.** Tentador por SEO local, pero contraproducente si se generan en bloque sin contenido realmente diferenciado (Google penaliza contenido delgado/duplicado). Mejor esperar a tener datos reales de qué zonas concentran demanda y crear solo esas, con contenido específico de verdad.

## 8. Flujo de trabajo con el cliente

- Cambios pequeños y frecuentes, cada uno con su propio commit descriptivo (qué cambió y **por qué**, no solo qué).
- El cliente a veces manda una captura de pantalla anotada a mano (círculos, tachones, texto escrito encima) en vez de describir el cambio en palabras — hay que interpretar la anotación en contexto de lo que se ve en la imagen, no pedir que lo reescriba.
- Verificar cada cambio de layout/CSS en el navegador antes de dar por hecho que se ve bien — un cambio de CSS puede tener efectos colaterales no obvios (ejemplo real: un selector `nav.menu ul` sin `>` rompió el submenú porque también aplicaba al `<ul>` anidado).
- Cuidado con la caché del navegador al verificar cambios de CSS/HTML en local — usar un query string de cache-busting (`?v=123`) al navegar durante la verificación.

## 9. Despliegue

GitHub (repo del cliente, no uno propio) → Vercel (importado directo desde GitHub, sin CLI, sin tocar credenciales del cliente). Una vez conectado, cada `git push` a `main` dispara un deploy automático — no hace falta volver a tocar Vercel para publicar cambios futuros.

**Nunca iniciar sesión en cuentas del cliente (GitHub, Vercel, Google) en su nombre.** Guiarlo paso a paso o, si ya está autenticado en el navegador de la sesión, ejecutar los clics de la UI en su nombre solo cuando lo pida explícitamente.
