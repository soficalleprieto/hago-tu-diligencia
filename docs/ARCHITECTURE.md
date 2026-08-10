# Arquitectura técnica

Este documento explica **cómo está construido** el sitio y **por qué**, a nivel técnico. Para el porqué de las decisiones de contenido/negocio, ver [CHANGELOG.md](../CHANGELOG.md). Para los patrones reutilizables en otros proyectos, ver [PLAYBOOK.md](PLAYBOOK.md).

## Resumen del stack

- **HTML + CSS + JS plano.** Sin framework (React, Vue, etc.), sin build step, sin gestor de paquetes, sin `node_modules`.
- **1 hoja de estilos** (`assets/css/style.css`) compartida por las 13 páginas.
- **1 archivo JS** (`assets/js/main.js`), ~15 líneas, solo para el menú móvil.
- **Hosting:** Vercel, desplegado directo desde GitHub, sin configuración de build.

## Por qué no un framework

Se evaluó implícitamente y se descartó, por estas razones concretas:

1. **Tamaño del sitio.** 13 páginas, contenido mayormente estático, sin estado de usuario, sin datos que cambien en tiempo real. No hay nada que un framework resuelva mejor que HTML plano a esta escala.
2. **Coste de mantenimiento cero.** Sin `package.json`, no hay versiones que actualizar, no hay build que se pueda romper por un cambio de dependencia, no hay que instalar nada para editar el sitio.
3. **Editable por cualquiera.** El cliente (o cualquier futuro colaborador) puede abrir un `.html` y cambiar un texto sin saber React ni tener Node instalado.
4. **Despliegue trivial.** Vercel sirve el directorio tal cual (`framework preset: Other`), sin build command ni output directory que configurar.

**Cuándo reconsiderar esto:** si el sitio creciera a decenas de páginas de servicio/ubicación (por ejemplo, una página por barrio de Bogotá — ver PLAYBOOK sección 7), repetir el header/footer a mano en cada archivo dejaría de ser razonable. En ese punto, migrar a un generador estático con partials/includes (Astro, Eleventy, Hugo) resolvería la duplicación sin renunciar a "sigue siendo HTML al final" — no hace falta saltar a un framework con estado de cliente (React/Vue) para eso.

## Estructura de archivos

```
/
  index.html                       — home
  servicios/
    tramites-eps.html
    diligencias-personales.html
    compras.html
    cuidado-hogar-mascotas.html
    limpieza-hogar.html
    a-medida.html
  zonas/
    bogota.html                    — cobertura geográfica
  testimonios.html
  faq.html
  sobre-mi.html
  contacto.html
  assets/
    css/style.css                  — única hoja de estilos del sitio
    js/main.js                     — menú móvil
    img/                           — fotos optimizadas (JPEG) + favicon.svg
  fotos/                           — fuente sin optimizar de las fotos (excluida de git, ver abajo)
  docs/
    ARCHITECTURE.md                — este archivo
    SEO.md
    BENCHMARK.md
  CHANGELOG.md
  README.md
  robots.txt
  sitemap.xml
  .gitignore
```

Cada `.html` es una página **completa e independiente**: no hay un layout compartido a nivel de archivo (no hay includes/partials), así que el header, el menú de navegación y el footer están **duplicados literalmente en los 13 archivos**. Es deuda técnica intencional — ver la sección "Por qué no un framework" arriba para el trade-off.

## CSS: una sola hoja, sin metodología estricta

`assets/css/style.css` sigue una convención informal, sin BEM estricto ni utility-first (no es Tailwind):

- **Variables CSS** (`:root { --verde-oscuro: ...; }`) para toda la paleta de color, espaciado clave y sombras — cambiar la marca es cambiar ~15 variables, no buscar-y-reemplazar colores por todo el archivo.
- **Clases por componente** (`.card-servicio`, `.page-hero`, `.faq-item`, `.steps`), reutilizadas entre páginas.
- **Breakpoints responsive:** `@media (max-width: 900px)` (tablet — también donde se activa el menú hamburguesa) y `@media (max-width: 640px)` (móvil, ajustes de una sola columna). Ver nota de bug conocido más abajo.
- **Estilos puntuales inline** (`style="..."` en el HTML) para casos de una sola vez que no ameritan una clase nueva (ej. `grid-template-columns` distinto en una sección concreta). Es una concesión deliberada a la velocidad de iteración, no un estándar a seguir en un proyecto más grande.

### Bug conocido y resuelto: selector de menú demasiado amplio

`nav.menu ul { display:flex; ... }` (sin `>`) afectaba también al `<ul>` anidado del submenú de Servicios, forzándolo a mostrarse siempre en fila horizontal en vez de ocultarse como dropdown. Se corrigió a `nav.menu > ul` (solo hijo directo). Documentado aquí porque es el tipo de bug de especificidad CSS fácil de reintroducir si se copia el patrón en otro proyecto sin cuidado.

## JavaScript: mínimo a propósito

`assets/js/main.js` solo hace dos cosas: alternar la clase `.open` del menú móvil al tocar el botón hamburguesa, y expandir/colapsar el submenú de Servicios en móvil. No hay JS para nada más — ni siquiera para el acordeón de FAQ, que usa `<details>/<summary>` nativo de HTML (cero JS, funciona sin JavaScript habilitado, y es accesible por defecto).

## Imágenes: pipeline manual IA → optimización

1. Se generan con un modelo de imagen (GPT Image, Gemini) a partir de prompts diseñados para verse documentales, no genéricos (ver PLAYBOOK sección 5).
2. Se guardan sin editar en `fotos/` — esta carpeta está en `.gitignore`, **no se sube a git** porque son PNG de ~2MB cada una y solo son el insumo, no lo que el sitio sirve.
3. Se optimizan con Pillow (Python): redimensionar a un ancho máximo (1000-1600px según el uso) + reexportar como JPEG calidad 78. Resultado: 100-300KB por imagen, ~90% más ligero que el original.
4. Solo la versión optimizada vive en `assets/img/`, que sí está versionada.

## Despliegue

```
GitHub (soficalleprieto/hago-tu-diligencia, rama main)
        │  git push
        ▼
Vercel (import directo del repo, framework preset "Other", sin build command)
        │  deploy automático en cada push a main
        ▼
https://hago-tu-diligencia.vercel.app
```

No hay entornos de staging ni preview separados configurados — cada push a `main` va directo a producción. Para un negocio de este tamaño es una decisión consciente (velocidad de iteración por encima de un flujo de revisión formal), no un descuido; reconsiderar si el sitio empieza a recibir tráfico real y los cambios necesitan probarse antes de publicarse.

## Desarrollo local

Cualquier servidor estático sirve, por ejemplo:

```bash
python -m http.server 8080
```

**Nota de caché:** al verificar cambios de CSS/HTML en el navegador durante el desarrollo, el navegador puede servir una versión cacheada del `.css` o del `.html` aunque el archivo en disco ya esté actualizado. Si un cambio no se refleja, forzar recarga sin caché (Ctrl+Shift+R) o añadir un query string de cache-busting a la URL (`?v=2`).

## Deuda técnica conocida (a propósito, no por descuido)

- **Header/footer duplicados en los 13 HTML** — ver "Por qué no un framework" arriba.
- **Sin formulario de contacto funcional** — el sitio es estático sin backend; los 3 canales de `contacto.html` (WhatsApp, teléfono, correo) sí funcionan de verdad. Un formulario con envío automático necesitaría un servicio externo (Formspree) o una función serverless de Vercel.
- **Sin tests automatizados** — la verificación de cada cambio se hace manualmente en el navegador (ver PLAYBOOK sección 8). Razonable a este tamaño; no lo sería si el sitio creciera mucho más.
- **Sin CMS** — todo el contenido vive directamente en el HTML. Si en el futuro alguien no técnico necesita editar contenido con frecuencia (precios, testimonios nuevos) sin pasar por git, valdría la pena evaluar un headless CMS o migrar a un generador estático con contenido en Markdown.
