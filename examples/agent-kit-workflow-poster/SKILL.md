---
name: agent-kit-workflow-poster
en_name: "Four Steps from Prompt to Published — Workflow Poster"
description: "A 1080×1350 vertical (4:5) social explainer poster for a developer-tool workflow, on a near-black technical canvas. Mono lime eyebrow with a glowing dot, an oversized serif headline with one italic cyan accent word, and a numbered four-step timeline — each step a grid row of glowing circle numeral, serif title plus muted copy, and a 'micro-UI' card mocking the step (design-system swatch bar with an active status line, a cyan-glowing prompt box with blinking caret, a comment-pin review thumbnail with a re-prompt chip, grouped publish-target chips). A dashed lime rail animates down the numeral column. Footer: serif CTA plus mono URL and an inline-SVG QR code. Roboto + STIX Two Text + Source Code Pro; lime #BBF351 and cyan #00BCFF accents; no photography, no emoji icons."
en_description: "A 1080×1350 vertical (4:5) social explainer poster for a developer-tool workflow, on a near-black technical canvas. Mono lime eyebrow with a glowing dot, an oversized serif headline with one italic cyan accent word, and a numbered four-step timeline — each step a grid row of glowing circle numeral, serif title plus muted copy, and a 'micro-UI' card mocking the step (design-system swatch bar with an active status line, a cyan-glowing prompt box with blinking caret, a comment-pin review thumbnail with a re-prompt chip, grouped publish-target chips). A dashed lime rail animates down the numeral column. Footer: serif CTA plus mono URL and an inline-SVG QR code. Roboto + STIX Two Text + Source Code Pro; lime #BBF351 and cyan #00BCFF accents; no photography, no emoji icons."
category: social-post
tags: ["social poster", "instagram post", "portrait", "1080x1350", "workflow", "how it works", "steps", "explainer", "dark mode", "qr code"]
od:
  mode: image
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Create a social media poster, vertical 1080\u00d71350 (4:5), demoing the main workflow: four steps from prompt to published. Dark technical aesthetic: near-black background with a faint 48px grid that fades out top and bottom via a linear mask, plus soft lime and cyan radial glows. Top: a mono lime eyebrow with a glowing dot, an ~84px serif headline \u2018Four steps from prompt to published.\u2019 with the last word italic in cyan. Middle: a vertical timeline of four equal step rows connected by an animated dashed lime rail \u2014 each row is a glowing circle numeral (the last one cyan, the rest lime), a serif step title with muted description, and a small micro-UI card on the right: (1) design system \u2014 four palette swatches and a status bar showing \u2018Design system: \u2026 \u00b7 active\u2019 with a glowing dot; (2) prompt \u2014 a cyan-glowing mono prompt box with a blinking caret plus small type/content chips; (3) review \u2014 a skeletal thumbnail with a numbered comment pin, a sample comment, and a re-prompt chip; (4) publish \u2014 rows of chips grouped as Social / Hosting / Design targets. Bottom: a CTA \u2014 serif line plus a mono URL \u2014 and a crisp inline-SVG QR code linking to the repo. Lime #BBF351 and cyan #00BCFF only; Roboto + STIX Two Text + Source Code Pro; disable all animation under prefers-reduced-motion."
---

# Four Steps from Prompt to Published — Workflow Poster

A fixed-canvas 1080×1350 portrait poster (the 4:5 social post size) that
explains a product workflow as a glowing numbered timeline. The gimmick that
makes it work: every step row pairs plain serif copy with a small **micro-UI
card** — a miniature mock of the thing that step produces (a design-system
panel, a prompt box, a review thumbnail, publish-target chips) — so the poster
demonstrates the workflow instead of just listing it. One self-contained HTML
file: Google Fonts, inline CSS, hand-built mini components, an inline-SVG QR
code. Exports to PNG/JPEG/PDF at 1080×1350 (1×).

**Palette:** near-black canvas `#0a0e17` / ink `#111827`, white text at 94%/68%
opacity, hairline `rgba(255,255,255,.12)` borders, 4%-white card fills, and
exactly two accents — lime `#BBF351` (process/primary) and cyan `#00BCFF`
(prompt/publish/secondary). Three typefaces only: Roboto (body), STIX Two Text
(serif display), Source Code Pro (mono).

## Workflow

1. Start from a fixed 1080×1350 `.poster` centered on a `#0a0e17` page,
   `overflow:hidden`, padded 64/64/48, flex column with ~36px gaps: header,
   a flexible step list, footer above a hairline border. Lift everything above
   the background with `position:relative; z-index:1`.
2. Background: two soft radial glows (lime mid-left, cyan lower-right) over
   near-black, then a `::before` 48px grid from two perpendicular 1px
   linear-gradients, masked with a top-to-bottom linear gradient so the grid
   exists only across the middle band (`transparent → #000 30% → #000 70% →
   transparent`).
3. Header: mono uppercase eyebrow (letter-spacing ≈ 0.24em) in lime with a
   glowing dot `::before`; an ~84px serif headline at line-height ≈ 0.98 with
   one italic cyan softly-glowing accent word as the final word.
4. Step list: an `<ol>` whose `::before` draws the rail — a 3px dashed lime
   vertical line (repeating-linear-gradient, 10px dash / 10px gap) with a soft
   glow, animated by shifting `background-position` in a 1.4s infinite loop.
   Gate it — and any other animation — behind
   `@media (prefers-reduced-motion: reduce)`.
5. Each step row is a three-column grid (66px numeral / 1fr copy / ~380px
   visual), vertically centered, `flex:1` so four rows share the space evenly.
   The numeral is a 66px circle: ink fill, 3px lime stroke, outer glow plus a
   faint inset glow, mono bold number in lime. Recolor the **last** numeral's
   stroke, text and glows cyan to mark the journey's end.
6. Copy column: ~36px bold serif title over a ~19px muted description at
   line-height ≈ 1.4.
7. Micro-UI cards: a shared `.visual` shell — 16px radius, hairline border,
   4%-white fill, ~18px padding — then per-step content built from small
   primitives: rounded pill **chips** (mono 14px, hairline border, optional
   lime/cyan colored border+text), a mono uppercase **tag** micro-label, an
   8px-radius dark **statusbar** with a glowing-dot status indicator, swatch
   squares, and skeleton bars.
8. The four cards: (1) design system — row of palette swatches + status bar
   "◆ Design system: ⟨name⟩ · active"; (2) prompt — 1.5px cyan border box with
   a cyan glow and mono prompt text ending in a blinking-block caret
   (`steps(1)` keyframe), plus two small chips; (3) review — a 132px skeletal
   thumbnail (rounded bars, first bar highlighted with a dashed lime outline)
   wearing a teardrop numbered **pin** badge, beside a dark comment bubble and
   a lime "↺ re-prompt" chip; (4) publish — a two-column grid of mono tag +
   chip rows grouped Social / Hosting / Design, with the social chips in cyan.
9. Footer: a serif CTA line (~30px) over a mono lime URL on the left, a
   crisp inline-SVG QR code on a white tile on the right
   (`shape-rendering: crispEdges`, modules drawn as one `<path>` of `h/v` runs,
   `viewBox="-3 -3 39 39"` with a white backing rect for the quiet zone).
10. Export at 1080×1350 (1×) for Instagram/portrait feed use.

## Content rules

- Step titles, descriptions, prompt text, comment copy, brand name and the QR
  destination must come from the user — the QR must encode the actual URL,
  never a decorative fake. Unknown values get `—` rather than an invention.
- Claims in copy must be true of the product being advertised (e.g. "pick one
  of ~150 bundled systems" is a fact about that product, not filler) — verify
  or genericize before shipping.
- Everything is CSS/HTML: no screenshots, no downloaded brand assets, no emoji
  standing in for icons, no stock imagery.
- Exactly two accent colors; glows stay small and local (dots, strokes,
  borders). System/Google fonts only. One design per PR; do not add
  `thumbnail.png`.
