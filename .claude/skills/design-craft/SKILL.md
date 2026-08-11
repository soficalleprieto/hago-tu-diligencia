---
name: design-craft
description: >
  Use when designing, redesigning, building, auditing, critiquing or polishing any
  frontend interface: landing pages, marketing sites, product UI, dashboards, app
  shells, components, forms, onboarding, empty states, emails, reports. Covers visual
  hierarchy, information architecture, color, contrast, typography, fonts, spacing,
  layout, motion, micro-interactions, easing, animation performance, accessibility,
  responsive behavior, UX copy, anti-patterns and "AI slop" avoidance. Also for bland
  designs that should become bolder, loud designs that should become quieter, and for
  deciding a design language from a brief (typology + brand colors + tone). Produces
  production-grade, non-templated, accessible interfaces with intentional motion.
license: Synthesis of impeccable (Apache-2.0, Paul Bakaus), taste-skill (MIT, Leonxlnx) and web-animation-design (Emil Kowalski). Use freely.
---

# Design Craft

One system distilled from three design skills plus field-tested practice. The goal:
ship interfaces nobody could look at and say "AI made that." Effective beats
decorative. Committed beats safe. Every decision earns its place.

## The loop (always, in this order)

1. **Read the room** — infer what this actually is before touching code.
2. **Decide** — register, color strategy, type pairing, layout, motion level. Commit.
3. **Build** — production-grade, responsive, accessible. No prototypes.
4. **Self-critique** — run it against the rules below. Find what's wrong or what's a
   better applicable choice. This is not optional; it's where good becomes great.
5. **Refine, then ship** — apply the fixes, verify in-browser, ship the final version.

Steps 4–5 are the part most skip. Don't. Screenshot it, squint at it, use it.

---

## ① Read the room (brief inference)

Most AI design is bad because the model jumps to a default aesthetic instead of
reading the brief. Before anything:

- **Page kind**: landing (SaaS / consumer / agency / event), portfolio, product UI,
  dashboard, dataviz, editorial, email, report. Design IS the product (brand) or
  SERVES the product (product). This single split changes everything downstream.
- **Vibe words** the user used: "minimal", "Linear-style", "editorial", "premium",
  "playful", "serious B2B", "warm", "brutalist". Honor them, but don't translate
  them into the obvious cliché (see the category-reflex check).
- **Reference signals**: URLs, screenshots, products or brands named.
- **Write one sentence of physical scene**: who uses this, where, under what light,
  in what mood. That sentence decides light vs dark, density, energy. If it doesn't
  force the answer, it isn't concrete enough yet.

### When generating per-business (the "design director" pattern)

If you're producing a design FROM data (a scraped business, an analysis), let the
analysis drive identity, not a fixed template:

- **Typology** → aesthetic lane. Trust/health/home services (dental, lawyer, plumber,
  cleaning) → almost always **light**, clean, ordered. Nightlife/grooming/craft
  (barber, tattoo, cocktail, gym, photo studio) → **dark** earns its place. Food/beauty
  → warm editorial. Never "dark because it looks cool."
- **Brand colors detected** → anchor the palette on them. If only black/white/gray were
  found, pick a palette that fits the trade, not a random default.
- **Tone of the copy** → motion level and density.

Output a small spec (mode, palette strategy, real colors, font pairing, radius,
density, motion level, hero style) and render from it. Different trades must look
different. Don't make everything dark or everything minimal.

## The three dials

Tune these explicitly per project. They're the difference between "fine" and "felt".

- **VARIANCE** — how much sections differ from each other. Low = uniform/systematic
  (product). High = each section has its own shape (brand/editorial).
- **MOTION** — none → subtle (product default, 150–250ms) → expressive (brand, earns
  attention). Pick one and apply it consistently.
- **DENSITY** — airy → balanced → compact. Match to content and audience.

---

## ② Decisions

### Color

- **Verify contrast.** Body text ≥ 4.5:1 against its background; large text (≥18px, or
  bold ≥14px) ≥ 3:1. Placeholder text needs the full 4.5:1 too. The single biggest
  reason AI designs feel hard to read: muted gray body text on a tinted near-white.
  If it's even close, push the body color toward the ink end. Light gray "for
  elegance" is the #1 readability killer.
- **Gray on a colored background looks washed out.** Use a darker shade of that
  background's own hue, or a transparency of the text color, never a neutral gray.
- **The cream / sand / beige near-white body is the saturated AI default.** The whole
  warm-neutral band (very light, low chroma, hue 40–100) reads as paper/parchment no
  matter what you name it. Token names like `--paper`, `--cream`, `--sand`, `--linen`,
  `--ivory` are tells in themselves. "Warm" in a brand is carried by accent +
  typography + imagery, **not** by a cream background.
- Use **OKLCH**. Tinted neutrals: add small chroma (0.005–0.015) toward the brand hue,
  not default-warm.
- **Pick a strategy before picking colors** (commitment axis):
  - **Restrained** — tinted neutrals + one accent ≤10%. Product default.
  - **Committed** — one saturated color carries 30–60% of the surface. Identity pages.
  - **Full palette** — 3–4 named roles, each used deliberately. Campaigns, dataviz.
  - **Drenched** — the surface IS the color. Heroes, campaigns.
- **Light vs dark is never a default.** Not dark "because tools look cool dark"; not
  light "to be safe." The scene sentence decides.

### Typography

- Cap **font families at 3** (display + body + optional mono). More reads as
  indecision. One well-tuned family in multiple weights usually beats three competing
  typefaces.
- **Pair on a contrast axis** (serif + sans, geometric + humanist). Never two
  similar-but-not-identical sans. Single family in multiple weights is always safe.
- Hierarchy through **scale + weight** (≥1.25 ratio between steps). Avoid flat scales.
- Cap body line length at **65–75ch**. Line height suits size and context.
- **No all-caps body copy.** Uppercase only for short labels (≤4 words) and badges.
- Display/hero ceiling: `clamp()` max **≤ 6rem** (~96px). Above that it's shouting.
- Display letter-spacing floor **≥ -0.04em**. Tighter and letters touch.
- `text-wrap: balance` on h1–h3; `text-wrap: pretty` on long prose.

### Layout & spacing

- **Cards are the lazy answer.** Use them only when they're genuinely the best
  affordance. **Nested cards are always wrong.** A price list, a definition list, or
  leading numbers/icons often beat a card grid.
- Vary spacing for rhythm. Don't apply one uniform gap everywhere.
- Flexbox for 1D, Grid for 2D. Don't reach for Grid when `flex-wrap` is simpler.
- Responsive grids without breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.
- Build a **semantic z-index scale** (dropdown → sticky → modal-backdrop → modal →
  toast → tooltip). Never `999` / `9999`.
- The viewport is part of the design. Test heading copy at every breakpoint; long
  words + large clamp + narrow grids = overflow.

### Motion

Full detail in [reference/MOTION.md](reference/MOTION.md). The non-negotiables:

- **Easing**: `ease-out` (exponential: quart/quint/expo) for things entering/exiting;
  `ease-in-out` for on-screen elements moving/morphing; `ease` for hover/color;
  `linear` only for constant motion (marquees, progress). **`ease-in` almost never.**
  **Never bounce or elastic** — they feel dated and draw attention to the animation.
- **Duration**: micro-feedback 100–150ms, UI state 150–300ms, layout 300–500ms,
  entrance 500–800ms. UI interactions stay **under 300ms**. Exits ~75% of entrance.
- **Reveals must enhance an already-visible default.** NEVER gate content visibility on
  a class-triggered transition: transitions pause on hidden tabs and headless renderers
  (PDF export, email, prerender), so the reveal never fires and the section ships
  **blank**. Rest state = visible; the `.in`/`.visible` class only *replays* the
  entrance. (Pattern + code in MOTION.md.)
- **No uniform reflex.** One identical fade-and-rise applied to every scrolled section
  is the AI tell, not choreography. Reserve scroll motion for moments that earn it.
  Sibling stagger within a real list is legitimate; whole-section fade-on-scroll is not.
- **Reduced motion is not optional.** Every animation needs a
  `@media (prefers-reduced-motion: reduce)` path (crossfade or instant).
- Only animate cheap properties by default (`transform`, `opacity`). Atmospheric
  materials (blur, backdrop-filter, clip-path, mask, shadow/glow) are part of the
  palette when they materially improve the effect and stay smooth — bounded to small
  areas. Avoid casually animating layout properties (`width`, `height`, `top`, margins).
- **Frequency rule**: something users trigger 100+ times a day should barely animate, or
  not at all. Speed beats smoothness there.

### Interaction

- Buttons: subtle scale on `:active` (`scale(0.97)`), lift/shadow on hover. Hover only
  on real pointers: `@media (hover: hover) and (pointer: fine)` (touch fires hover on
  tap). Min hit area 44px.
- Fix hover flicker by animating a **child**, not the element whose position changes.
- Dropdowns/popovers in `overflow:hidden`/`auto` containers get clipped — use native
  `<dialog>`/popover, `position: fixed`, or a portal. Scale popovers from their trigger
  (`transform-origin`), not center.

### Copy

- Every word earns its place. No restated headings, no intros that repeat the title.
- **No em dashes.** Use commas, colons, semicolons, periods, parentheses. Also not `--`.
- **No marketing buzzwords**: streamline / empower / supercharge / leverage / unleash /
  transform / seamless / world-class / enterprise-grade / next-generation / cutting-edge
  / game-changer / mission-critical. Pick a specific noun and a literal verb.
- Button labels = **verb + object** ("Save changes", "Delete project"), not "OK"/"Yes".
- Link text needs standalone meaning ("View pricing", not "Click here").
- No aphoristic cadence as a default voice (serious statement, then punchy negation,
  repeated). Be specific, not punchy.

### Icons & imagery

- **One icon family.** Consistent line (or solid) SVG set, single stroke weight,
  `currentColor`. **Don't use emoji as UI icons** — they render differently per OS and
  read as unpolished in anything B2B or premium. A small inline SVG set beats emoji.
- Images earn their place. For trades/products where users expect to see the thing
  (salons, restaurants, real estate), use real or generated imagery; frame it, give it
  width/height to avoid CLS, lazy-load below the fold, and let it sit in the palette
  (a soft gradient overlay) rather than as a pasted stock rectangle. For abstract/AI
  tools, editorial-typographic + SVG can be stronger than stock photos.

---

## ③ Absolute bans + the AI-slop test

Match-and-refuse. If you're about to write any of these, restructure the element.

- **Side-stripe borders** (a colored `border-left/right` > 1px as accent on cards,
  callouts, alerts). Use full borders, background tints, leading icons/numbers, or
  nothing.
- **Gradient text** (`background-clip: text` over a gradient). Use one solid color;
  emphasis via weight/size.
- **Glassmorphism as a default.** Rare and purposeful, or not at all.
- **The hero-metric template** (big number, small label, supporting stats, gradient
  accent). SaaS cliché.
- **Identical card grids** (same-size cards, icon + heading + text, repeated endlessly).
- **A tiny uppercase tracked eyebrow above every section.** One named kicker as a
  deliberate system is voice; an eyebrow on every section is AI grammar.
- **Numbered section markers as default scaffolding** (`01 / 02 / 03` above every
  section). Numbers earn their place only when the section IS a real sequence.
- **Text that overflows its container** at any breakpoint.

**The AI-slop test.** Run at two altitudes:
- *First-order*: could someone guess the theme + palette from the category alone? Then
  it's the first training-data reflex. Rework.
- *Second-order*: could someone guess it from category-plus-anti-reference ("AI tool
  that's not SaaS-cream → editorial-typographic"; "fintech that's not navy-and-gold →
  terminal-dark")? That's the trap one tier deeper. Rework until neither is obvious.

---

## ④ Self-critique checklist (run before shipping)

Detector/QA output is defect evidence only; a clean script is never proof the design is
strong. Gather browser evidence and walk the real path. Then check:

- [ ] Brief honored; not the category reflex (first- and second-order).
- [ ] Contrast: all text meets WCAG AA. No gray-on-tint body. No gray-on-color.
- [ ] Color strategy committed (not "restrained by accident / undecided").
- [ ] ≤3 font families; paired on a contrast axis; clear scale + weight hierarchy.
- [ ] No lazy/nested card grids where a list or different structure is better.
- [ ] Spacing has rhythm; aligns to a scale; works at every breakpoint; no overflow.
- [ ] Motion: ease-out (no bounce); under 300ms for UI; non-gating reveals; reduced
      motion path; no uniform fade-on-every-section.
- [ ] Every interactive element has hover/focus/active/disabled/loading states. Focus
      visible. Touch targets ≥44px. Hover gated to real pointers.
- [ ] Copy: no em dashes, no buzzwords, verb+object buttons, links with meaning.
- [ ] One icon family; no emoji as icons. Images framed, sized (no CLS), in-palette.
- [ ] None of the absolute bans present.
- [ ] Code clean: no console logs, dead code, `any`, hardcoded values that should be
      tokens.

**Then ask the refine question**: is there a *better applicable* choice here than what I
shipped? (A list instead of cards. A serif display instead of another sans. A committed
color instead of timid neutral. A real map instead of a fake one.) Apply it. Show the
final, well-crafted version.

---

## Accessibility & performance guardrails

- Semantic HTML + ARIA where needed. Keyboard nav works; focus order logical; focus
  indicators never removed without replacement.
- Reduced motion respected everywhere. `prefers-reduced-motion: reduce` ⇒ crossfade or
  instant, never the gated-blank failure.
- No layout shift on load (CLS): images/embeds get explicit dimensions or aspect-ratio.
- Lazy-load below-fold media; `fetchpriority="high"` on the LCP/hero image.
- 60fps target; `will-change` only on the element about to animate, never page-wide.
- Print/PDF safety: if a design will be exported, ensure animated/revealed content is
  visible under `@media print` (`opacity:1; transform:none`).

---

## Sources

Distilled and reconciled from three skills, plus field practice:
- **impeccable** (Paul Bakaus, Apache-2.0) — the design language, bans, registers, slop test.
- **taste-skill** (Leonxlnx, MIT) — brief inference, the three dials, anti-slop lanes.
- **web-animation-design** (Emil Kowalski, animations.dev) — the easing/timing blueprint.

See [reference/MOTION.md](reference/MOTION.md) for the full motion blueprint and
[reference/PATTERNS.md](reference/PATTERNS.md) for copy-paste implementations
(non-gating reveal, icon system, button feedback, list-not-cards, design spec).
