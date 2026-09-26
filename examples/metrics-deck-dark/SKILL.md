---
name: metrics-deck-dark
en_name: "Dark Metrics — Single Stat Slide"
description: "A dark-mode investor/all-hands metrics slide: near-black background, one dominant monochromatic-green headline stat, and a supporting-metrics row beneath it."
en_description: "A dark-mode investor/all-hands metrics slide: near-black background, one dominant monochromatic-green headline stat, and a supporting-metrics row beneath it."
category: presentation
tags: ["metrics slide", "dark mode", "investor deck", "KPI", "single stat"]
od:
  mode: deck
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a single dark-mode metrics slide for an investor/all-hands deck: near-black background, one large monochromatic-green headline stat dominating the slide, a short label beneath it, and 2-3 smaller supporting metrics in a row along the bottom in the same green at lower opacity. No chart-junk, no icon decoration. Since I haven't given you real numbers, render the stat as a clearly-labeled placeholder (e.g. `— %`), not a fabricated figure."
---

Single 16:9-ish slide, centered content block, generous side padding (~6vw), one column, no deck-navigation chrome — this is a standalone slide, not a multi-slide deck.

- Background: near-black (`#0a0a0a`). One accent hue only — a single green — used at two opacities: full for the headline stat, ~35-40% for the supporting row. No second or third accent color, no gradient background.
- Top: a small mono uppercase eyebrow line (context, not a number — e.g. "All-Hands · Metrics Review").
- Headline: one huge stat (`clamp(120px, 22vw, 280px)`, tabular-nums, tight letter-spacing) with a small mono label directly beneath it describing what it is.
- A single 1px hairline rule (green at low opacity) separates the headline from the supporting row.
- Bottom: 2-3 smaller metric/label pairs in a plain grid row, no card backgrounds, no borders, no icons — just value + small-caps mono label, at the dimmer green.
- Footer: an optional two-item mono meta line (left: deck/section name, right: "01 / 01") — skip it if it feels redundant with the eyebrow.

The whole point of this slide is restraint: no bar/line charts, no icon bullets, no card-with-shadow components. Since real metrics are never given up front, render every numeric value as a clearly-labeled `—` placeholder (e.g. `— %`, plain `—`) rather than inventing a number — swap in the user's real figures only once they give them.
