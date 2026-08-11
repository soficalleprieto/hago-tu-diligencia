# Motion blueprint

Add motion that conveys state, gives feedback, and clarifies hierarchy. Cut motion
that exists only for decoration. Animation fatigue is real; spend the budget on the
moments that need it. One well-rehearsed entrance beats scattered micro-interactions.

## Easing — pick by what the element is doing

| Situation | Easing | Why |
|---|---|---|
| Entering or exiting the viewport (dropdown, modal, tooltip, toast, reveal) | **ease-out** | Fast start = instant, responsive feel; settles into place |
| On-screen element moving / morphing (slider handle, reordering, expand) | **ease-in-out** | Natural accel then brake, like a car |
| Hover / color transition | **ease** | Gentle, elegant for small changes |
| Constant motion (marquee, ticker, progress) | **linear** | Only place linear belongs |
| Anything UI | **never ease-in** | Slow start delays feedback, feels sluggish |
| Anything | **never bounce / elastic** | Dated; draws attention to the animation itself |

### Custom curves (built-in CSS curves are too weak)

```css
/* ease-out family — natural deceleration, use these */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);    /* smooth */
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);   /* snappier */
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);    /* confident, decisive */

/* ease-in-out family — for on-screen movement */
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);

/* AVOID */
/* bounce:  cubic-bezier(0.34, 1.56, 0.64, 1); */
/* elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6); */
```

Paired elements (modal + overlay, tooltip + arrow, drawer + backdrop) share the same
easing AND duration. If they move as a unit, they feel like a unit.

## Duration — the 100 / 300 / 500 rule

Timing matters more than easing for "feels right".

| Duration | Use |
|---|---|
| 100–150ms | Instant feedback: button press, toggle, color change |
| 150–300ms | State changes: menu, tooltip, hover, dropdown |
| 300–500ms | Layout: accordion, modal, drawer |
| 500–800ms | Entrances: page load, hero reveal |

Rules: UI animations stay **under 300ms**. Exits ~75% of entrance. Larger elements
animate slower than small ones. Match duration to distance.

The 80ms threshold: under ~80ms feels instant. Target it for micro-interactions.

## Non-gating reveals (the one that bites everyone)

A scroll reveal must **enhance an already-visible default**. If you hide content with
`opacity:0` and only reveal it via a class added by IntersectionObserver, then on a
headless render (PDF export, email client, prerender, background tab) the observer
never fires and the section ships **blank**.

Wrong (gates visibility):

```css
.reveal { opacity: 0; transform: translateY(20px); transition: .6s; }
.reveal.visible { opacity: 1; transform: none; }
```

Right (rest state is visible; the class only *replays* the entrance):

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal.visible { animation: rise .7s cubic-bezier(0.16,1,0.3,1) both; }
}
@keyframes rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
@media print { .reveal { opacity: 1 !important; transform: none !important; } }
```

```js
const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
// reduced-motion or no IO support → reveal everything immediately:
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.reveal').forEach(el => reduce ? el.classList.add('visible') : io.observe(el));
```

Without JS / in headless: content is already visible. With JS: it animates in. Safe.

## No uniform reflex

The saturated AI default is fade-and-rise on every scrolled section. That's a tell, not
choreography. Reserve scroll-triggered motion for moments that earn it:

- **Legitimate**: sibling stagger inside a real list (cards-in-a-grid, list items).
  Cap total stagger: 10 items × 50ms = 500ms; reduce per-item delay for more.
  ```css
  .stagger > *.visible { animation: rise .55s var(--ease-out-expo) both;
                         animation-delay: calc(var(--i, 0) * 50ms); }
  ```
  with `style="--i:0"`, `style="--i:1"` … on each item.
- **Not legitimate**: whole-section fade-on-scroll applied uniformly.

Each reveal should fit what it reveals. Bars grow (they convey magnitude). Numbers can
count. A hero rises once on load. Sections that don't need motion just appear.

## Spring animations

Springs feel natural because they simulate physics (no fixed duration) and keep velocity
when interrupted — ideal for drag/gesture that can change mid-motion.

```js
// Apple-style (easier to reason about): duration + bounce
{ type: 'spring', duration: 0.5, bounce: 0.2 }
```

Keep bounce subtle (0.1–0.3) and only for drag-to-dismiss / playful interactions. Avoid
bounce in most UI.

## Micro-interactions

- **Button press**: `transform: scale(0.97)` on `:active`. Hover: subtle scale (1.02–1.05)
  or lift + shadow, gated to `@media (hover: hover) and (pointer: fine)`.
- **Don't appear from `scale(0)`** — start from `scale(0.95)` + `opacity:0`. Elements
  should always have a visible shape, like a deflated balloon.
- **Hover flicker** (element moves out from under the cursor): animate a child, not the
  hovered element.
- **Subsequent tooltips**: first one delays + animates; while one is open, the rest are
  instant (`data-instant` / 0ms).
- **Origin-aware popovers**: scale from the trigger (`transform-origin: var(--origin)`),
  not center.
- **Shaky 1px jitter** at the start/end of transforms: add `will-change: transform` to
  keep the element on the GPU (sparingly, only while animating).

## Performance & materials

- Default to `transform` + `opacity` (skip layout/paint, run on GPU). Don't casually
  animate `width`/`height`/`top`/`left`/margins — use FLIP or `grid-template-rows` for
  reflow, `scaleX/scaleY` for bars (origin left/bottom) instead of width/height.
- Premium materials beyond transform/opacity: blur, backdrop-filter, clip-path/mask
  (wipes, reveals), shadow/glow (energy, focus). Keep expensive paint areas small and
  bounded; verify smoothness in-browser on target viewports.
- IntersectionObserver over scroll listeners; `unobserve` after firing once.
- Animate outside React's render where possible (refs, not state-per-frame).

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Better: per element, provide a real alternative (crossfade or instant), and disable
autoplay. Never ship the gated-blank failure to reduced-motion users.

## Perceived performance

Nobody cares how fast it *is*, only how fast it *feels*.
- Start transitions immediately while loading (skeletons, optimistic UI for low-stakes
  actions; never for payments/destructive ops).
- Show content progressively; don't wait for everything.
- A brief delay can *increase* perceived value for "real work" (search, analysis).

## Never

- Bounce/elastic easing. Durations >500ms for feedback. Animating without a reason.
- Ignoring `prefers-reduced-motion`. Animating everything (fatigue). Blocking interaction
  during animation unless intentional. Gating content visibility behind a transition.
