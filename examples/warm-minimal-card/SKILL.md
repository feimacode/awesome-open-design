---
name: warm-minimal-card
en_name: "Warm Minimal Business Card"
description: "A business card with a warm beige/cream base, a small drawn geometric corner mark standing in for a logo, and small-caps name typography."
en_description: "A business card with a warm beige/cream base, a small drawn geometric corner mark standing in for a logo, and small-caps name typography."
category: business-card
tags: ["business card", "minimal", "print", "warm palette"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a business card with a warm beige/cream base, a tiny geometric shape (e.g. a single drawn triangle or ring, not an icon font) tucked in one corner, and the name set in sans-serif small caps centered or left-aligned. Contact details in a smaller weight below. No logo placeholder box — the geometric mark stands in for a mark. No gradients, no card-with-shadow cliché."
---

Fixed 3.5×2in card (336×192px at 96dpi) centered on a slightly darker neutral page background, so the crop edge is visible without a drop shadow.

- Card surface: warm cream/beige (`#f4ede1`), 1px hairline border in a low-opacity ink tone — no shadow.
- Corner mark: a single drawn geometric shape (this example uses a thin outlined ring, inline SVG) top-right, in one muted accent color (terracotta/ochre range). Never an icon-font glyph, never a raster logo.
- Name: sans-serif, small caps via `text-transform: uppercase` + wide letter-spacing, left-aligned, the dominant type element.
- Title beneath the name in the same wide-tracked treatment, smaller and in the muted ink tone.
- Contact block (email / phone / web) below that, smaller still, with short muted labels.
- No gradients, no second accent color, no card-with-drop-shadow cliché.

Ask the user for their real name, title, and contact details before filling this in — use `—` placeholders (as in this example) rather than inventing an identity.
