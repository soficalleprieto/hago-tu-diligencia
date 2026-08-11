# Patterns — copy-paste implementations

Field-tested building blocks that encode the rules. Adapt colors/fonts to the brief.

## Design tokens (start every project here)

```css
:root {
  /* commit a strategy, then fill in. OKLCH preferred. */
  --bg: #ffffff; --surface: #f7f8fb; --ink: #0f1623; --muted: #5b6472; --line: #e6e9f0;
  --brand: #2563eb; --accent: #2563eb;
  --display: 'Fraunces', Georgia, serif;       /* heading family */
  --font: 'Inter', system-ui, sans-serif;       /* body family */
  --radius: 16px; --radius-sm: 10px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  /* semantic z-index — never 999 */
  --z-dropdown: 100; --z-sticky: 200; --z-backdrop: 300; --z-modal: 400; --z-toast: 500; --z-tooltip: 600;
}
body { background: var(--bg); color: var(--ink); font-family: var(--font); line-height: 1.6; }
h1,h2,h3 { font-family: var(--display); letter-spacing: -0.02em; text-wrap: balance; }
p { text-wrap: pretty; }
```

Contrast check before shipping: body `--ink` on `--bg` ≥ 4.5:1, `--muted` on `--bg` ≥ 4.5:1.

## Decide a design from a brief/analysis (the "design director")

When generating per-business, compute identity instead of hardcoding it. A small spec
drives the render:

```jsonc
{
  "mode": "light | dark",                 // scene sentence decides; trust/health → light
  "palette_strategy": "restrained | committed | drenched",
  "bg": "#…", "surface": "#…", "ink": "#…", "muted": "#…", "line": "#…",
  "brand": "#…",   // anchor on detected brand colors
  "accent": "#…",  // fits the trade (pink for beauty, etc.)
  "font_pair": "editorial_serif | clean_grotesk | warm_serif | technical | neutral",
  "radius": "small | medium | large",
  "density": "airy | balanced | compact",
  "motion": "subtle | expressive",
  "hero_style": "image | editorial | split"
}
```

Font pairs (display + body, on a contrast axis):

```js
const FONT_PAIRS = {
  editorial_serif: { display: 'Fraunces',         body: 'Inter' },
  warm_serif:      { display: 'Playfair Display',  body: 'Inter' },
  clean_grotesk:   { display: 'Space Grotesk',     body: 'Inter' },
  technical:       { display: 'Sora',              body: 'Inter' },
  bold_display:    { display: 'Bricolage Grotesque', body: 'Inter' },
  neutral:         { display: 'Inter',             body: 'Inter' }, // one family, weights
};
```

Rules the director enforces: light vs dark from the scene (not "dark looks cool"); anchor
on detected brand colors; never the cream default; contrast ≥4.5:1 guaranteed (clamp
ink/muted if the model picks low-contrast values); motion subtle for trust/product,
expressive only for bold brands. Different trades must look different.

## Non-gating reveal (PDF/email/headless-safe)

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal.in { animation: rise .7s var(--ease-out) both; }
  .stagger > *.in { animation: rise .55s var(--ease-out) both; animation-delay: calc(var(--i,0) * 50ms); }
}
@keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
@media print { .reveal, .stagger > * { animation: none !important; opacity: 1 !important; transform: none !important; } }
```

```js
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = [...document.querySelectorAll('.reveal'), ...document.querySelectorAll('.stagger > *')];
document.querySelectorAll('.stagger').forEach(g => [...g.children].forEach((c,i) => c.style.setProperty('--i', i)));
if (reduce || !('IntersectionObserver' in window)) els.forEach(e => e.classList.add('in'));
else { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15, rootMargin: '0px 0px -6% 0px' }); els.forEach(e => io.observe(e)); }
```

Rest state = visible. Headless/no-JS shows everything. `.in` only replays.

## Bar that grows by GPU (not width/height)

```css
.bar { transform-origin: left center; }            /* origin: bottom for vertical */
.bar.in { animation: grow .7s var(--ease-out) both; }
@keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
```
Set the fill's layout `width:X%` for the target; `scaleX` animates 0→that, GPU-only.
Rest = full (correct value if motion disabled).

## Button & card feedback

```css
.btn { transition: transform .12s var(--ease-out), box-shadow .12s ease; }
.btn:active { transform: scale(0.97); }
@media (hover: hover) and (pointer: fine) {
  .btn:hover { transform: translateY(-1px); }
  .lift { transition: transform .2s var(--ease-out), box-shadow .2s ease; }
  .lift:hover { transform: translateY(-3px); box-shadow: 0 14px 34px -16px rgba(2,6,23,.22); }
}
```

## SVG line-icon system (replace emoji)

One family, single stroke weight, `currentColor`. Never emoji as UI icons.

```jsx
const ICON = {
  pin:   ["M12 21c4-4.6 6.5-7.8 6.5-11A6.5 6.5 0 1 0 5.5 10c0 3.2 2.5 6.4 6.5 11Z", "M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  search:["M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z", "M16 16l4 4"],
  bolt:  ["M13 3.5L6 13h5l-1 7.5L18 11h-5l0-7.5Z"],
  star:  ["M12 4.5l2.3 4.7 5.2.8-3.75 3.65.9 5.15L12 16.9l-4.65 2.4.9-5.15L4.5 10l5.2-.8L12 4.5Z"],
  // add: calendar, mobile, phone, mail, document, image, globe, lock, trendUp, target …
};
function Icon({ name, className = "", style }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
         strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      {(ICON[name] || []).map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
```

Size with a class (`w-4 h-4`), color with `currentColor`. Same metrics everywhere.

## List instead of a lazy card grid

When items are name + detail + value (services, pricing, features), a list reads more
premium than a card grid:

```html
<div class="menu">
  <div class="row">
    <div><span class="name">Corte clásico</span><p class="desc">Lavado, corte y peinado.</p></div>
    <span class="price">16 €</span>
  </div>
  <!-- … -->
</div>
```
```css
.row { display:grid; grid-template-columns:1fr auto; gap:.4rem 1.5rem; align-items:baseline;
       padding:1.25rem 1rem; border-top:1px solid var(--line); border-radius:14px; transition:background .25s; }
.row:last-child { border-bottom:1px solid var(--line); }
@media (hover:hover){ .row:hover { background: var(--surface); padding-inline:1.4rem; } }
.name { font-family:var(--display); font-weight:600; } .price { font-family:var(--display); font-weight:900; color:var(--brand); }
```

## Dark hero + light body (works for light-mode brands)

A dark hero (with a framed/overlaid image, white text) over a light body is a strong,
common premium pattern. You don't have to flip the hero to match a light page; keep the
hero dark with the image, restyle the body to the palette. Avoid setting a `background`
shorthand on the hero if an image is layered in (it wipes the image).

## Real map, not a fake SVG grid

If a location is involved, embed a real map. Keyless option:

```html
<iframe title="Map" loading="lazy" style="width:100%;height:100%;border:0"
  src="https://www.openstreetmap.org/export/embed.html?bbox=LON1,LAT1,LON2,LAT2&layer=mapnik&marker=LAT,LON"></iframe>
```
Frame it (rounded, border, overflow hidden). A fake street-grid SVG reads as filler.

## Self-critique prompt (the refine step)

After building, ask literally: *"What's the single best applicable improvement I'm not
making here?"* Common answers: a list instead of cards; a serif display instead of a
second sans; a committed color instead of a timid neutral; non-gating instead of gated
reveals; one icon family instead of emoji; a real map instead of a placeholder. Apply
it, verify in-browser, then ship.
