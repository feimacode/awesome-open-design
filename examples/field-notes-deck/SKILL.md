---
name: field-notes-deck
en_name: "Field Notes — Deck Opener"
description: "A two-slide pitch-deck opener: cream/charcoal cover with an oversized serif title, and a numbered agenda spread with thin rule dividers. No gradients, no stock photography."
en_description: "A two-slide pitch-deck opener: cream/charcoal cover with an oversized serif title, and a numbered agenda spread with thin rule dividers. No gradients, no stock photography."
category: presentation
tags: ["pitch deck", "cover slide", "agenda", "editorial", "minimalist"]
od:
  mode: deck
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a two-slide pitch deck opener called 'Field Notes' — slide one is a cover with an oversized serif title, a one-line subtitle, and a small presenter/date line bottom-left; slide two is a numbered agenda (4-6 items) using a thin horizontal rule between each entry. Cream background, near-black charcoal text, no accent color beyond the rule lines. No gradients, no stock photography, no icon bullets — numerals only. Use `—` placeholders for any presenter name/date/agenda copy I haven't given you."
---

Two 16:9 slides, 1280×720+ responsive via `clamp()`, cream paper (`#FBFBFA`) on near-black charcoal ink (`#1A1A19`). One serif display face (Instrument Serif) for headings, a grotesque sans for body/meta, a monospace for the tiny uppercase meta rows — no fourth typeface, no accent color beyond the hairline rule (`#E5E3DE`).

- **Slide 1 — Cover.** Oversized serif title (`clamp(72px, 9vw, 132px)`), an italic serif one-line subtitle beneath it, a small monospace "presenter · date" signature bottom-left, page counter bottom-right. Vertically centered, generous margins (72px/96px).
- **Slide 2 — Agenda.** Serif section title, then a numbered list (4-6 items) laid out as a two-column grid per row (number, title) with a hairline `border-bottom` between each row and a `border-top` opening the list — no bullets, no icons, numerals only. Footer hairline rule + page counter.

Ask the user for their actual deck title, presenter name, date, and agenda items rather than inventing them — this deck is a shell meant to carry real content. Where you don't have real copy yet, keep the `—` placeholders exactly as in `example.html` rather than filling in invented names, dates, or agenda topics.
