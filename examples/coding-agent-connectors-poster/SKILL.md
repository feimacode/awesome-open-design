---
name: coding-agent-connectors-poster
en_name: "One Agent, Every Canvas — Connectors Poster"
description: "A 1080×1350 vertical (4:5) social poster for a developer-tool product announcement, on a near-black technical canvas. Mono lime eyebrow with a glowing dot, an oversized serif headline with one italic cyan accent word, and a centered animated SVG orbit diagram: a glowing 'Coding Agent + kit' core node, design tools (Figma, Canva) on an inner lime orbit, social platforms (X, Instagram, LinkedIn, YouTube, Xiaohongshu) on an outer cyan orbit, with dashed connectors that flow toward the core. Footer carries three mono-labeled value points and a brand lockup with an inline-SVG QR code. Roboto + STIX Two Text + Source Code Pro; lime #BBF351 and cyan #00BCFF accents; every glyph is hand-drawn stroke-only inline SVG, no photography."
en_description: "A 1080×1350 vertical (4:5) social poster for a developer-tool product announcement, on a near-black technical canvas. Mono lime eyebrow with a glowing dot, an oversized serif headline with one italic cyan accent word, and a centered animated SVG orbit diagram: a glowing 'Coding Agent + kit' core node, design tools (Figma, Canva) on an inner lime orbit, social platforms (X, Instagram, LinkedIn, YouTube, Xiaohongshu) on an outer cyan orbit, with dashed connectors that flow toward the core. Footer carries three mono-labeled value points and a brand lockup with an inline-SVG QR code. Roboto + STIX Two Text + Source Code Pro; lime #BBF351 and cyan #00BCFF accents; every glyph is hand-drawn stroke-only inline SVG, no photography."
category: social-post
tags: ["social poster", "instagram post", "portrait", "1080x1350", "orbit diagram", "connector", "dark mode", "qr code", "product launch"]
od:
  mode: image
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Create a social media poster, vertical 1080\u00d71350 (4:5). The content is the Open Design Agent Kit \u2014 \u2018One agent. Every canvas.\u2019 Dark technical aesthetic: near-black background with a faint 48px grid that fades out via a radial mask, plus soft lime and cyan radial glows. Top: a mono lime eyebrow \u2018Open Design Agent Kit\u2019 with a glowing dot, a ~92px serif headline \u2018One agent. Every canvas.\u2019 with \u2018canvas\u2019 italic in cyan, and a muted subhead: your coding agent designs it, then ships it to Figma, Canva and every social feed \u2014 through connectors, not copy-paste. Center: an animated SVG orbit diagram \u2014 a glowing \u2018Coding Agent + OPEN DESIGN AGENT KIT\u2019 core node at the center, an inner dashed orbit with Figma and Canva nodes in lime, an outer dashed orbit with X, Instagram, LinkedIn, YouTube and Xiaohongshu nodes in cyan, and dashed connector lines flowing from the core to every node with a soft glow underlay (disable all animation under prefers-reduced-motion). Footer: three value points with mono cyan labels \u2014 01 \u00b7 PULL: turn Figma frames into working pages; 02 \u00b7 PUSH: send finished artifacts to Canva; 03 \u00b7 POST: export sized for every social feed \u2014 and, on the right, the \u2018open-design agent kit\u2019 lockup plus a crisp inline-SVG QR code linking to the repo. Lime #BBF351 and cyan #00BCFF only; Roboto + STIX Two Text + Source Code Pro; stroke-only inline-SVG glyphs, no photos, no emoji."
---

# One Agent, Every Canvas — Connectors Poster

A fixed-canvas 1080×1350 portrait poster (the 4:5 social post size) that sells a
"one agent, many destinations" story through a single orbit diagram: the coding
agent sits glowing at the center, design tools orbit close in lime, social
platforms orbit further out in cyan, and dashed connectors visibly flow from the
core to every node. Everything is one self-contained HTML file — Google Fonts,
inline CSS, hand-drawn stroke-only inline SVG — and exports to PNG/JPEG/PDF at
1080×1350 (1×).

**Palette:** near-black canvas `#0a0e17` / ink `#111827`, white text at 94%/68%
opacity, hairline `rgba(255,255,255,.10)` borders, and exactly two accents —
lime `#BBF351` (design / primary) and cyan `#00BCFF` (publish / secondary).
Three typefaces only: Roboto (body), STIX Two Text (serif display), Source Code
Pro (mono labels).

## Workflow

1. Start from a fixed 1080×1350 `.poster` centered on a `#0a0e17` page,
   `overflow:hidden`, padded 64/64/56, laid out as a flex column: header on
   top, a flexible diagram band in the middle, footer pinned to the bottom
   above a hairline border.
2. Build the background as layers, never a flat fill: three soft radial glows
   (lime centered low-middle, cyan bottom-left and top-right) over near-black,
   then a `::before` 48px grid from two perpendicular 1px linear-gradients,
   masked with a radial gradient centered on the headline so it dissolves to
   nothing by the edges.
3. Header: a mono uppercase eyebrow (letter-spacing ≈ 0.24em) in lime with a
   small glowing dot `::before`; a ~92px serif headline at line-height ≈ 0.98
   whose single accent word is italic, cyan, and softly glowing — that
   two-typeface contrast plus one italic word is the poster's signature; a
   ~24px muted subhead capped around 820px measure.
4. Diagram: a square 1000×1000 SVG (aria-labeled) with two dashed orbit
   circles — inner r=220, outer r=380 — in 16% white, 1.5px strokes with a
   2/10 dasharray.
5. Core node: r=132 circle with a radial lime-to-ink fill, a 4px lime stroke
   and a Gaussian glow filter; inside it a mono `>_` prompt glyph, the serif
   "Coding Agent" title, and a lime pill reading "+ OPEN DESIGN AGENT KIT" in
   tiny mono ink text. Add a slightly larger pulsing halo circle around it.
6. Nodes: design tools (Figma, Canva) on the inner orbit in lime; social
   platforms (X, Instagram, YouTube, Xiaohongshu, LinkedIn) on the outer orbit
   in cyan. Each node is an ink-filled circle with a 3px colored stroke and a
   glow filter, carrying a 48-viewBox stroke-only glyph via `<use href="#g-…">`
   and a mono uppercase label beneath. Draw every platform glyph yourself as
   simple geometric strokes — never embed downloaded brand assets.
7. Connectors: for each node, one 10px blurred glow underlay plus a 2.5px
   dashed line (`stroke-dasharray: 10 12`) animating `stroke-dashoffset` in an
   infinite 1.6s linear loop — lime lines to design nodes, cyan to social
   nodes. Add a two-swatch legend ("design" / "publish") at the diagram's foot.
   Gate every animation behind `@media (prefers-reduced-motion: reduce)`.
8. Footer: left, three ~220px value points, each a tiny mono cyan micro-label
   (`01 · PULL`, `02 · PUSH`, `03 · POST`) over 18px body copy; right, the
   mono brand lockup plus a crisp inline-SVG QR code on a white tile
   (`shape-rendering: crispEdges`, module paths drawn as `<rect>`s).
9. Export at 1080×1350 (1×) for Instagram/portrait feed use.

## Content rules

- Headline, subhead, value points, brand name and the QR destination must all
  come from the user — the QR must encode the actual URL, never a decorative
  fake. If a platform list or copy point is unknown, use `—` rather than
  inventing one.
- Platform icons are geometric approximations drawn as stroke-only SVG with
  `currentColor`; no downloaded trademarks, no emoji standing in for icons, no
  stock imagery.
- Exactly two accent colors; glows and gradients stay inside the background
  layer and the accent word — no rainbow connector rainbow-coding beyond the
  lime/cyan design/publish split.
- System/Google fonts only, no un-licensed fonts. One design per PR; do not add
  `thumbnail.png`.
