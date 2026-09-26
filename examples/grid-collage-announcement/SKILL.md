---
name: grid-collage-announcement
en_name: "Grid Collage Announcement Post"
description: "A square Instagram announcement post using an asymmetric 3-panel grid of solid color blocks and typography — one large panel plus two stacked smaller panels, a small-caps label tag, and the headline."
en_description: "A square Instagram announcement post using an asymmetric 3-panel grid of solid color blocks and typography — one large panel plus two stacked smaller panels, a small-caps label tag, and the headline."
category: social-post
tags: ["instagram", "grid layout", "announcement", "social media"]
od:
  mode: image
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a square (1:1) Instagram announcement post using an asymmetric 3-panel grid layout (e.g. one large panel + two stacked smaller panels) where panels are solid color blocks and typographic content, not photos. Include a small-caps label tag like 'NEW' or 'OUT NOW' in one panel, and the announcement headline in another. One accent color plus neutral blocks — no gradients, no stock imagery, no emoji in the label tag."
---

Square (1:1) post, built as a CSS grid with three panels — no photography, every panel is a solid color block plus type.

- **Grid**: two columns (roughly 1.65fr / 1fr), left column spans both rows as one large panel; right column splits into two stacked panels. A 2px gap (page background color) between panels reads as a deliberate seam, not a border.
- **Large panel (left)**: cream/neutral background, the announcement headline in serif display type, bottom-aligned, with a small monospace "eyebrow" label above it and a short accent-free rule beneath. This is where real headline copy goes — use a `— placeholder —` if the user hasn't given you real copy.
- **Top-right panel**: the one accent color as a solid fill, holding the small-caps tracked label tag ("NEW" / "OUT NOW" / similar — literal UI chrome, not a fabricated claim) plus a small index mark. This is the only accent block on the page.
- **Bottom-right panel**: near-black neutral, a thin hairline rule, a small tracked label ("Details"), and a serif placeholder line for date/location/link copy.
- No gradients anywhere, no icon/emoji in the label tag, no stock photography standing in for the panels — the panels' visual interest comes from the type and color-block contrast alone.

Ask the user for their real announcement headline and detail copy (date, link, product name) before finalizing — don't invent a product name or claim to fill the placeholders.
