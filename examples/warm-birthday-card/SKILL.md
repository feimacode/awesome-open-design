---
name: warm-birthday-card
en_name: "Warm Birthday Card"
description: "A warm, colorful digital birthday card with a vibrant gradient background, SVG balloons, confetti dots, and a candle-lit cake illustration, plus a heartfelt message and blank To/From lines to personalize."
en_description: "A warm, colorful digital birthday card with a vibrant gradient background, SVG balloons, confetti dots, and a candle-lit cake illustration, plus a heartfelt message and blank To/From lines to personalize."
category: greeting-cards
tags:
  - birthday
  - card
  - greeting
  - celebration
  - colorful
  - svg
od:
  mode: prototype
  surface: vertical
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Create a warm, colorful digital birthday card in a vertical 4:5 aspect ratio with a rich gradient background in purple, pink, and blue tones. Include a cluster of three colorful SVG balloons (pink, gold, teal) at the top, scattered confetti dots and squares across the background, a bold white 'Happy Birthday!' headline where 'Birthday' is in a cursive script with a gold-to-pink gradient, a short heartfelt birthday message in white, and a white card panel at the bottom with dotted 'To:' and 'From:' lines. Add a small SVG cake with a flickering candle flame at the very bottom. Use Inter for body text, Caveat for the script accent, and JetBrains Mono for the To/From labels. Keep it print-friendly."
---

# Warm Birthday Card

1. Create a vertical card canvas with a `4:5` aspect ratio (`max-width: 620px`) using a rich layered gradient background blending purple, pink, and blue tones via radial and linear gradients.
2. Scatter decorative confetti elements (small circles and rotated squares in gold, teal, pink, purple, and blue) across the full card using an absolutely-positioned SVG overlay.
3. At the top of the card, place a cluster of three SVG balloons — one pink, one gold, one teal — each with a string line, a small triangular knot, and a white highlight ellipse for a glossy look.
4. Add the heading "Happy Birthday!" in bold white text, with "Birthday" rendered in a larger cursive script font (`Caveat`) featuring a horizontal gold-to-pink gradient fill via `background-clip: text`.
5. Below the heading, place a short heartfelt birthday message paragraph in semi-transparent white, centered, with a comfortable max-width of around 32 characters.
6. Add a spacer that pushes the following content toward the bottom, then place a white rounded card panel containing "To:" and "From:" labels (in monospace `JetBrains Mono` in the secondary purple color) each followed by a dotted underline for handwriting.
7. In a footer area below the panel, place a small SVG birthday cake illustration with stacked colored layers, white icing dots, and a single candle with an animated flickering flame (respect `prefers-reduced-motion`).
8. Ensure the entire layout is responsive using `clamp()` for sizes, supports `@media print` for clean output, and uses no external images — all visuals are inline SVG and CSS.
