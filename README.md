# Hago Tu Diligencia — sitio web

Sitio estático (HTML + CSS + JS, sin build ni dependencias) para el negocio de trámites, diligencias, compras y cuidado del hogar a domicilio en Bogotá.

Basado en el benchmark competitivo SEO realizado previamente (estructura, menú, servicios y arquitectura de URLs recomendados a partir de competidores reales en Bogotá, Medellín, Colombia, Chile y Miami).

## Estructura

```
/
  index.html
  servicios/
    tramites-eps.html
    diligencias-personales.html
    compras.html
    cuidado-hogar-mascotas.html
    limpieza-hogar.html
    a-medida.html
  zonas/
    bogota.html
  testimonios.html
  faq.html
  sobre-mi.html
  contacto.html
  assets/
    css/style.css
    js/main.js
    img/favicon.svg
  robots.txt
  sitemap.xml
```

No hay build step: cada `.html` es una página completa e independiente que reutiliza `assets/css/style.css` y `assets/js/main.js`.

## Ver el sitio en local

Cualquier servidor estático sirve. Por ejemplo, con Python:

```bash
python -m http.server 8080
```

Y abrir `http://localhost:8080`.

## Pendientes antes de publicar (marcados como `TODO` en el propio HTML)

- **Fotos reales** — 8 de 9 ya están puestas. Falta solo la foto de "Sobre mí" (se recomienda que sea una foto real de Marta, no generada).
- **Texto de "Sobre mí"** — historia personal pendiente de escribir.
- **Correo de contacto** — `contacto.html` usa `TODO@hagotudiligencia.com` como placeholder.
- **Horario de atención** — pendiente de definir en `contacto.html`.

**Decidido:** no se publican precios (sección "¿Cuánto cuesta?" de la home invita a cotizar por WhatsApp). Testimonios ya son reales.

El número de WhatsApp/teléfono (313 248 9177) ya está configurado en todo el sitio.

## Despliegue

Sitio 100% estático — desplegable en Vercel sin configuración adicional (framework preset "Other"). Conectar el repo de GitHub a un proyecto de Vercel y cada `git push` a la rama principal genera un despliegue automático.
