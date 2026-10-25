---
name: recipe-carousel
en_name: "Recipe Carousel — Three Square Cards"
description: "A three-card square carousel for Instagram or LinkedIn that shares one recipe: a dark cover with a drawn illustration, the dish name and key numbers; an ingredients card with amounts aligned right; a numbered method card with a sign-off line. Warm cream, brown and butter-yellow."
en_description: "A three-card square carousel for Instagram or LinkedIn that shares one recipe: a dark cover with a drawn illustration, the dish name and key numbers; an ingredients card with amounts aligned right; a numbered method card with a sign-off line. Warm cream, brown and butter-yellow."
category: social
tags: ["carousel", "Instagram", "recipe", "food", "social post", "how-to"]
od:
  mode: image
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Turn my recipe into a 3-card square Instagram carousel. Card 1 is a dark brown cover with a simple flat illustration of the dish, the name in a chunky serif, one tempting line and three numbers (makes, prep, bake). Card 2 lists the ingredients with amounts aligned right and one tip. Card 3 is the numbered method with my handle at the bottom. Warm cream, brown and butter-yellow. Use my recipe exactly; don't change quantities or add steps."
---

A square carousel (`ig-square`, 1080 × 1080 per card, each card marked `data-od-card`) that walks through one recipe in three swipes. Works for any short how-to: a craft, a plant-care routine, a cocktail.

- **Card 1, cover:** dark brown background, a flat illustration of the dish bleeding off the top-right corner, a small kicker in butter yellow, the name in a heavy display serif, one line that ends with "Swipe →", and three key numbers on short yellow rules.
- **Card 2, ingredients:** a heading, then one row per ingredient with the amount right-aligned in bold and a dashed divider. One tip at the bottom with a yellow left rule.
- **Card 3, method:** numbered steps with yellow number dots, short sentences, and a sign-off line with the creator's handle.
- Cards 2 and 3 carry a small "n / 3" counter at the top right; the cover says "Swipe →" instead, so the illustration can own that corner.
- Keep text 48 px inside each card's edge at full size (the format's safe area); Instagram crops the grid preview to the centre.

Use the user's recipe word for word for quantities, temperatures and times; ask rather than guess when one is missing. The sample recipe here is a real, working one. For more steps, add a card rather than shrinking the type. Export with the `ig-square` format; `xhs-card` gives the taller Xiaohongshu version of the same cards.
