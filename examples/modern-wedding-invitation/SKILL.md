---
name: modern-wedding-invitation
en_name: "Modern Wedding Invitation"
description: "A portrait wedding invitation: serif display type for the couple's names, a muted sage-green and terracotta palette, a ceremony/reception detail block, and a simple RSVP line. No floral clipart or gradients."
en_description: "A portrait wedding invitation: serif display type for the couple's names, a muted sage-green and terracotta palette, a ceremony/reception detail block, and a simple RSVP line. No floral clipart or gradients."
category: invitation
tags: ["wedding invitation", "invitation", "print", "editorial"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a modern wedding invitation (portrait card): serif display type for the couple's names, a muted sage-green and terracotta palette, a short ceremony/reception detail block (date, time, venue), and a simple RSVP line at the bottom. No floral clipart, no gradient background, no stock photography — decorative elements should be simple drawn linework (e.g. a thin botanical line sketch) if used at all. Use `—` placeholders for names/date/venue I haven't given you."
---

Fixed portrait card, 5:7 aspect ratio, centered on a neutral surrounding page — this is a print piece, not a scrolling layout.

- Palette: warm paper background (`#f7f4ee`), sage-green (`#8a9a7e` / deeper `#5f6f54`) and terracotta (`#c17a56`) as the only two accents. No gradients, no third color.
- A single restrained line-sketch motif at the top — two mirrored leaf/branch curves drawn as thin inline SVG `<path>` strokes (`stroke-width` 0.75–1), not a floral clipart wreath. Keep it small and quiet; it's a flourish, not an illustration.
- Couple's names set large in a serif display face (Georgia/Charter/Iowan Old Style), separated by an italic ampersand on its own line. A thin hairline rule beneath them.
- A short mono-spaced "eyebrow" line above the names ("Together with their families") in terracotta, tracked wide and uppercase — the one place all-caps tracking is used.
- Ceremony/reception detail block (date, time, venue) in body serif, generous line-height; the venue name set in italic sage.
- RSVP line pinned to the bottom in small tracked mono type, with the RSVP deadline/contact in terracotta.

Ask the couple for their real names, date, time, venue, and RSVP contact rather than inventing them — use `—` for anything not given, exactly as in the shipped example.
