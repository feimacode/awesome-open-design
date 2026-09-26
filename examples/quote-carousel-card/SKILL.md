---
name: quote-carousel-card
en_name: "Quote Carousel Card"
description: "A square Instagram carousel card built around one oversized pull-quote, a minimal frame, an attribution line, and a real swipe-indicator dot row (card 1 of N)."
en_description: "A square Instagram carousel card built around one oversized pull-quote, a minimal frame, an attribution line, and a real swipe-indicator dot row (card 1 of N)."
category: social-post
tags: ["instagram", "carousel", "quote card", "social media"]
od:
  mode: image
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design one square (1:1) Instagram carousel card, card 1 of a set: an oversized pull-quote as the dominant typographic element, a minimal thin frame or margin, a small attribution line, and a real swipe/page-indicator dot row at the bottom (first dot filled, rest outlined) showing this is card 1 of several. Muted jewel-tone background (pick one: deep teal, plum, or ochre). No stock photo behind the quote, no gradient overlay. Use `—` for the quote/attribution if I haven't given you real copy."
---

Single 1:1 square card (560px reference size, scales via `aspect-ratio: 1/1`).

- Background is one flat muted jewel tone — deep teal, plum, or ochre. No gradient, no photo behind the quote.
- A thin 1px inset frame (roughly 28px margin) reads as the card's only ornament.
- A large italic serif quotation mark sits top-right as the sole decorative type flourish — not a stock icon.
- The pull-quote is set in a large serif, vertically centered, left-aligned to the frame. Use `em` for any softened/secondary clause within the quote.
- A short attribution line (small mono type, preceded by a 32px hairline rule) sits above the dot row.
- The swipe-indicator dots are a real UI affordance: first dot filled, remaining dots outlined only — plus an explicit "01 / 04" counter, not decoration. Update both the filled dot and the counter/total together when adapting to a different position in a series.
- One small mono "eyebrow" label top-left (e.g. series name + card number) instead of a logo.

Ask the user for their real quote, attribution, and how many cards the series has (to size the dot row/counter correctly) rather than inventing a quote. Until given real copy, keep quote and attribution as `—`.
