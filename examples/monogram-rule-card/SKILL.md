---
name: monogram-rule-card
en_name: "Monogram + Rule Business Card"
description: "A business card built around a single bold typographic monogram, a thin full-width rule, and a right-aligned contact block in one accent color on a neutral ground."
en_description: "A business card built around a single bold typographic monogram, a thin full-width rule, and a right-aligned contact block in one accent color on a neutral ground."
category: business-card
tags: ["business card", "monogram", "print", "minimal"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a business card (standard 3.5×2in ratio, shown front-only): a single bold monogram/initial mark top-left, a thin full-width rule beneath it, and a right-aligned contact block (name, title, email, phone) in one accent color on a neutral off-white ground. No logo image, no gradient, no drop shadow — the monogram is drawn typographically, not a placeholder image."
---

Fixed 3.5×2in card (rendered at 336×192px, 96dpi) centered on a neutral surrounding page so its edges read clearly — the card itself has a 1px hairline border instead of a drop shadow.

- Top-left: a single large serif letterform as the monogram, drawn with `stroke` + `stroke-dasharray` (outlined/dashed, not solid-filled) rather than a logo image — this reads as an intentional placeholder until the agent swaps in the person's real initial.
- Beneath it: one thin full-width rule (a 1px div, not a decorative border).
- Bottom-right: a right-aligned contact block — name (bold), title (small caps, in the one accent color), then email/phone on one line — everything else in ink, not accent.
- One accent color only, used on the monogram stroke and the title line. No gradient, no drop shadow, no logo image.

Ask the user for their real initial, name, title, email, and phone before filling this in — until then, keep the monogram dashed/outlined and the contact fields as `—` rather than inventing an identity.
