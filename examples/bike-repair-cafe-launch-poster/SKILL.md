---
name: bike-repair-cafe-launch-poster
en_name: "Bike Repair Café Launch Poster"
description: "A 1080×1920 neon launch poster for a neighbourhood bike repair café. The main layout is a glowing line drawing of a bicycle with colour-coded callouts on the parts people bring in to fix (tyre, chain, saddle, brakes), a one-line promise with the launch date, and a Bring / Fix / Ride step panel with the time, venue and a QR code. Two alternative layouts are included: a split headline with a four-box grid, and a type-only serif headline over three numbered chapter bands."
en_description: "A 1080×1920 neon launch poster for a neighbourhood bike repair café. The main layout is a glowing line drawing of a bicycle with colour-coded callouts on the parts people bring in to fix (tyre, chain, saddle, brakes), a one-line promise with the launch date, and a Bring / Fix / Ride step panel with the time, venue and a QR code. Two alternative layouts are included: a split headline with a four-box grid, and a type-only serif headline over three numbered chapter bands."
category: marketing
tags: ["poster", "event", "launch", "community", "bike", "repair café", "neon", "story"]
od:
  mode: prototype
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "A launch poster for a neighbourhood bike repair café"
---

# Bike Repair Café Launch Poster

A vertical 1080×1920 poster (story size) announcing the opening of a community repair space. The subject itself, a bicycle, is the hero: a neon line diagram with callouts that name the everyday problems people can bring in.

## Files

- `example.html`: the main layout, an annotated bike diagram with a step panel.
- `variant-split-hero.html`: alternative layout, a split headline with bike and cup on the right, a volunteer quote, and a four-box grid of services.
- `variant-type-chapters.html`: alternative layout, an oversized centred serif headline ("Don't bin it. Fix it.") over three full-width numbered chapter bands.

## Workflow

1. **Collect the facts.** Get the venue name, launch date, opening hours, address, recurring schedule and any pricing (free, pay-what-you-can) from the user. Never invent them. Where a value is missing, write a clearly labelled placeholder such as `[Sat date]` or `[Venue address]`.
2. **Set the canvas.** Build a single `<main data-od-card>` at exactly 1080×1920 px with `overflow: hidden`. Keep all text at least 48px from every edge.
3. **Palette.** Use a dark surface (`#111126`) with neon accents: purple `#c084fc` for the main action, blue `#00BCFF` for line art, and green, yellow and pink (`#39ff88`, `#fff34d`, `#ff4d8d`) for one callout each. Make things glow with `text-shadow` or `drop-shadow`, never with gradient fills on text.
4. **Type.** Use system font stacks (`Roboto, "Helvetica Neue", Arial, sans-serif`, and a monospace stack for labels) so the poster renders from disk without network fonts. The serif variant uses `"STIX Two Text", serif`.
5. **Hero diagram (example.html).** Draw the bicycle as one inline SVG (two wheels, a diamond frame, saddle, handlebar and chainring) and scale it to roughly 950px wide. Place each callout pin on a real part of the bike, computing its position from the SVG's scale factor. Connect each pin to its label box with a short dashed line. Keep labels to a short question and one plain sentence.
6. **Promise and action.** Below the diagram, add one sentence and a solid primary button carrying the launch date.
7. **Steps panel.** End with Bring / Fix / Ride tabs (first one active) above a panel with a headline, a short description, the time and address in monospace, and a QR code. Use a real QR code for the user's link, or keep the placeholder clearly labelled.
8. **Check.** Render at 1080×1920 and confirm that no text is clipped or overlaps, the callouts point at the right parts, and everything sits inside the safe area.

## Adapting

- For other repair or community events (sewing café, tool library), swap the bike SVG for the relevant object and rewrite the callouts. Keep four callouts at most.
- For a different size, keep the same top-to-bottom structure (diagram, then promise, then steps) and recompute the callout positions.
