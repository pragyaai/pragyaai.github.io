# Design System: The Spatial Academic

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Curator"

This design system is not a utility; it is an exhibition. It moves away from the dense, cluttered aesthetic of traditional academic portals toward a **"High-Tech Academic"** atmosphere—one that feels airy, intentional, and spatial. Inspired by the sprawling clarity of World Labs, this system treats information as art.

To break the "template" look, we employ **intentional asymmetry**. Primary content is often offset, leaving generous "breathing zones" that allow the eye to rest. By utilizing high-contrast typography scales (extra-large, thin display heads against tiny, precise labels), we create an editorial rhythm that feels premium and authoritative.

---

## 2. Colors

The palette is rooted in a stark, clinical white, punctuated by deep, intellectual blues.

- **Surface Hierarchy & Nesting:** We avoid flat grids. Depth is created by nesting containers.
  - `surface` (#F9F9F9) acts as our gallery floor.
  - `surface-container-low` (#F3F3F4) defines secondary regions.
  - `surface-container-lowest` (#FFFFFF) is reserved for the highest level of focus, such as a research paper card or an active code block.
- **The "No-Line" Rule:** 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined by background shifts or tonal transitions.
- **The "Glass & Gradient" Rule:** Navigation and floating panels should utilize Glassmorphism. Use `surface_container_lowest` at 70% opacity with a `20px` backdrop-blur.
- **Signature Textures:** Use subtle linear gradients for primary actions, transitioning from `primary` (#004F82) to `primary_container` (#2A679C) at a 135-degree angle to provide a "spectral" depth.

---

## 3. Typography

Our typography mimics high-end scientific journals. It is wide-set, airy, and unapologetically lowercase-heavy for headers to maintain a "modern-academic" approach.

- **Display & Headlines (Plus Jakarta Sans):** These are the "art pieces." Used for titles, they should be `light` (300 weight) or `extra-light` (200), with `letter-spacing: -0.02em`.
- **Body & Labels (Inter/Geist):** These provide the "technical precision." Inter is chosen for its high legibility in dense research text.
- **The Editorial Scale:** A massive `display-lg` (3.5rem) title may sit directly above a tiny `label-sm` (0.6875rem) metadata tag. This extreme contrast is what gives the system its signature "World Labs" feel.

---

## 4. Elevation & Depth

We reject the heavy, muddy shadows of standard UI. We convey hierarchy through **Tonal Layering**.

- **The Layering Principle:** Instead of a shadow, place a `#FFFFFF` card on a `#F3F3F4` background. The natural contrast creates a "soft lift."
- **Ambient Shadows:** If a floating effect is required (e.g., a modal), use a shadow with a 40px blur, 0px offset, and 5% opacity of the `on_surface` color (#1A1C1C). This mimics natural laboratory lighting.
- **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` (#C1C7D1) at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** Navigation rails should feel like suspended sheets of glass.
  - _Tokens:_ `surface_container_lowest` (Alpha 0.6) + Backdrop Blur: 12px.

---

## 5. Components

### Buttons

- **Primary:** Gradient fill (`primary` to `primary_container`), `rounded-md` (0.375rem), white text. No shadow.
- **Secondary:** `surface_container_highest` background with `primary` text.
- **Tertiary:** Ghost style. No background. `primary` text with a 1px "Ghost Border" that only appears on hover.

### Cards & Lists

- **Constraint:** Forbid divider lines. Use `spacing-8` (2.75rem) to separate vertical content.
- **Research Cards:** A `#FFFFFF` container with a subtle `primary` accent bar (2px wide) on the far left. Use `body-md` for abstracts with a line-height of 1.6 to ensure "Airy" readability.

### Input Fields

- **Styling:** Minimalist bottom-border only (using the Ghost Border rule). When focused, the border transitions to `primary` and a subtle `surface_tint` glow appears behind the input.

### Specialized Component: The "Data-Veil"

- For data visualizations (thin-line charts), use a background of `surface_container_low` with a subtle mesh gradient overlay. Lines should be `primary` at 1px thickness—no heavy grids, only `label-sm` axis markers.

---

## 6. Do's and Don'ts

### Do

- **Do** use lowercase for `display-md` titles to evoke a high-tech, approachable aesthetic.
- **Do** favor wide margins. If in doubt, increase the spacing token by one level (e.g., from `spacing-10` to `spacing-12`).
- **Do** use asymmetrical layouts where the left 60% is content and the right 40% is "negative space" or metadata labels.

### Don't

- **Don't** use pure black (#000000) for body text. Use `on_surface` (#1A1C1C) to maintain a softer, premium feel.
- **Don't** use standard "drop shadows." If it looks like a 2010s app, it's too heavy.
- **Don't** use 100% opaque dividers. If you must divide, use `spacing-px` with 10% opacity.
- **Don't** use "bold" weights for titles. Use `light` weights at larger sizes to convey authority.

---

_Director's Note: This design system succeeds when the interface feels like it's "breathing." Every element must have a reason to exist. If a border doesn't add clarity, remove it. Let the typography and the tonal shifts do the work._
