---
name: nightlife-gig-flyer
en_name: "Nightlife / Gig Flyer"
description: "A high-contrast gig/nightlife flyer: near-black background, one neon accent color, and the event name in large stacked/overlapping bold type as the dominant graphic."
en_description: "A high-contrast gig/nightlife flyer: near-black background, one neon accent color, and the event name in large stacked/overlapping bold type as the dominant graphic."
category: flyer
tags: ["event flyer", "gig poster", "nightlife", "neon", "bold type"]
od:
  mode: poster
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a nightlife/gig event flyer (portrait): near-black background, a single neon accent color (pick one: acid green, electric pink, or cyan), and the event name set in large stacked/overlapping bold type as the dominant visual element. Include a smaller structured line for date/venue/lineup beneath it. No gradient glow effects standing in for real design, no stock photography, no emoji. Use `—` placeholders for lineup/date details not given to you."
---

Portrait card, 9:16, near-black canvas (`#050505`). Pick exactly **one** neon accent color (this example uses electric pink, `#ff2f7e`) and never mix in a second — no gradient glow standing in for design.

- A thin bordered "doors time" eyebrow tag, top-left, monospace, in the accent color.
- The event name is the whole show: set in a heavy grotesk (Archivo Black or similar), all caps, two stacked words with tight negative leading so they nearly overlap. The second word is outlined (not filled) in the accent color against the near-black background — a text-stroke effect, not a glow/blur.
- A short mono tagline beneath the title.
- A details grid (Date / Venue / Lineup) below a hairline rule — label in accent color small-caps mono, value in the body sans. Lineup spans the full width.
- A footer bar with age restriction, a single accent-colored bullet, and ticket info — all mono, all hairline-divided.

Ask the user for the real event name, date, venue, lineup, and ticket link. Until given, keep the structural fields (date/venue/lineup/ticket) as `—` placeholders — do not invent real venue names or a real lineup. The event title itself ("Afterglow") is a demo concept name illustrating the stacked-type treatment; swap it for the user's real event name once given, keeping the same overlapping two-line composition.
