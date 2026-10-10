---
name: editorial-forest-report-deck
en_name: "Editorial Forest — Quarterly Report Deck"
description: "An 8-slide quarterly business-review deck in a magazine-editorial style: cream paper, deep forest green and dusty pink, oversized Source Serif 4 headlines against uppercase JetBrains Mono labels, and a strict two-typeface system. Sequence: green cover with a circular mono mark, an asymmetric colored agenda tile grid, a full-bleed pull-quote, a two-column spread with an inline-SVG line figure and a plan/actual/variance meta row, a plan-vs-actual grouped bar chart in pure HTML/CSS, a four-step framework band, three KPI callouts, and a closing priorities/watch/decisions summary. Built on an inlined deck-stage runtime (fixed 1920×1080 canvas, keyboard navigation, hash deep-links, print-to-PDF). All figures are clearly-labeled illustrative placeholders."
en_description: "An 8-slide quarterly business-review deck in a magazine-editorial style: cream paper, deep forest green and dusty pink, oversized Source Serif 4 headlines against uppercase JetBrains Mono labels, and a strict two-typeface system. Sequence: green cover with a circular mono mark, an asymmetric colored agenda tile grid, a full-bleed pull-quote, a two-column spread with an inline-SVG line figure and a plan/actual/variance meta row, a plan-vs-actual grouped bar chart in pure HTML/CSS, a four-step framework band, three KPI callouts, and a closing priorities/watch/decisions summary. Built on an inlined deck-stage runtime (fixed 1920×1080 canvas, keyboard navigation, hash deep-links, print-to-PDF). All figures are clearly-labeled illustrative placeholders."
category: presentation
tags: ["report deck", "annual report", "quarterly review", "editorial", "magazine", "bar chart", "KPI", "business review"]
od:
  mode: deck
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Art direct a quarterly design-department report for an AI company like a magazine creative director. Make an 8-slide editorial deck in one self-contained HTML file on a fixed 1920×1080 stage: (1) a deep-green cover with an oversized serif headline, a circular mono monogram mark top-right, and an uppercase mono footline; (2) an agenda as an asymmetric tile grid of solid color blocks — one tall tile plus four smaller ones — with mono numbers and serif topic titles; (3) a full-bleed pull-quote statement slide with a serif blockquote and mono attribution row; (4) a two-column spread: a green panel holding a stroke-only inline-SVG line figure with a mono caption, against a headline, body paragraphs and a three-cell plan / actual / variance meta list under a hairline rule; (5) a plan-vs-actual grouped bar chart built in pure HTML/CSS with mono axis labels, value labels on each bar, a two-swatch legend and reconciling footnote; (6) a four-step framework band with PLAN / ACTUAL / GAP / NEXT cards; (7) three oversized KPI callouts with mono tag labels; (8) a green closing slide with three priorities/watch/decisions columns. Palette: forest green, dusty pink, cream paper, warm ink. Type: Source Serif 4 + JetBrains Mono only, no third typeface, no photography. All metrics are illustrative — label every one as sample data rather than presenting invented figures as real."
---

# Editorial Forest — Quarterly Report Deck

An 8-slide 16:9 quarterly review deck that borrows a magazine's art direction:
oversized serif display type, a locked print palette, and uppercase mono
furniture (labels, captions, footlines) doing all the structural signalling. No
gradients, no shadows, no photography — flat color fields and hairline rules
only. The whole thing is one self-contained HTML file: fonts from Google
Fonts, the `<deck-stage>` runtime inlined, everything else inline CSS and
inline SVG.

**Palette (locked):** forest green `#2e4a2a` (deep `#243a21`, lite `#3a5a36`),
dusty pink `#e89cb1` (deep `#d27e96`), cream paper `#efe7d4` (secondary
`#e6dcc4`), warm ink `#1a1a17`. Two typefaces only: Source Serif 4
(weight 500 for display, 400 for body) and JetBrains Mono (500, uppercase,
letter-spacing ≈ 0.12–0.18em for all labels/captions).

## Workflow

1. Start from the deck-stage contract: a fixed 1920×1080 stage with each slide
   a bare `<section>`, padded 96–140px, cream background, `overflow:hidden`.
   Declare the palette and the two font stacks as CSS custom properties on
   `:root` and never introduce a color or typeface outside them.
2. **Slide 1 — Cover.** Green field, pink type. Top bar: mono section label
   left, a circular 2px pink-outlined monogram mark right. Center a ~220px
   serif headline at line-height ≈ 0.92; pin a two-ended mono uppercase
   footline (org · period left, data disclaimer right) to the bottom.
3. **Slide 2 — Agenda tiles.** Cream ground, serif section title plus mono
   label in a split head. Below, a 1.5fr/1fr/1fr × 2-row grid where the first
   tile spans both rows; cycle tile fills green / pink / cream-with-green-border /
   green-lite, each carrying a mono number, a serif topic title and a mono
   foot label. Text color of each tile is the palette's contrasting ink.
4. **Slide 3 — Pull-quote statement.** Full-bleed pink with deep-green ink.
   A mono label on top, a ~140px serif blockquote (max-width ~1560px), and a
   bottom attribution row: serif name over mono role left, mono sign-off right.
5. **Slide 4 — Two-column spread.** Split the slide 880px / rest. Left: a
   rounded green panel centering a stroke-only inline-SVG figure (uniform
   stroke, round caps, single pink hue) with a mono uppercase caption pinned
   bottom. Right: mono eyebrow, ~96px serif headline, body paragraphs capped
   around 760px measure, and a three-cell definition-list meta row (PLAN /
   ACTUAL / VARIANCE) under a 2px rule, pushed to the slide bottom.
6. **Slide 5 — Plan-vs-actual chart.** Green field. Head row: pink mono label
   plus serif headline left, two-swatch mono legend right. Build the grouped
   bar chart in pure HTML/CSS — a mono y-axis column, bar heights as inline
   percentage `height` styles derived from the real numbers, value labels
   inside each bar, mono category labels beneath, and a mono footnote row that
   reconciles the totals. No charting library, no SVG needed.
7. **Slide 6 — Framework band.** Cream ground, mono labels, serif headline,
   then four equal step cards (PLAN / ACTUAL / GAP / NEXT): mono step name, a
   huge serif figure, a short serif paragraph, and a two-ended mono marker row
   under a hairline top border. Fill one or two cards with the palette colors
   to punctuate the rhythm.
8. **Slide 7 — KPI callouts.** Cream ground; three equal columns split by
   hairline rules, each stacking a mono tag, a ~180px serif number with a
   smaller unit glyph, and a short serif description.
9. **Slide 8 — Summary.** Green field with pink headline: a topbar of two mono
   labels, an oversized serif closing line, then three columns (PRIORITIES /
   WATCH / DECISIONS) under a pink hairline — mono heads, serif body.
10. Ship speaker notes: a `#speaker-notes` JSON array with one note per slide,
    and keep author-side slides static (guard future motion behind
    `prefers-reduced-motion`).

## Content rules

- Every number in the deck must be labeled as illustrative sample data in an
  on-slide label, footline, or caption — never present invented figures as
  real company results. When the user supplies real figures, swap them in and
  drop the disclaimers.
- Category variances must reconcile to the stated total (the sample chart's
  per-line deltas sum to the headline variance); recompute bar heights from
  the numbers rather than eyeballing them.
- Stock imagery, gradients, drop shadows, emoji icons and a third typeface are
  all out of scope by design.
- The inlined deck-stage runtime carries its own MIT license comment
  (deck-stage.js, © Zara Zhang) — keep that comment intact when copying this
  file.

## Runtime notes

The inlined `<deck-stage>` web component scales the 1920×1080 canvas to the
viewport (`transform: scale()`, letterboxed), supports ←/→/Space/Home/End/
number-key navigation plus `#<n>` deep links, and lays every slide out as one
page per sheet under `@media print` so Save-as-PDF just works. Slides are
hidden, not unmounted, so state survives navigation.
