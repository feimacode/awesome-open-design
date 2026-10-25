---
name: fantasy-trading-card
en_name: "Fantasy Trading Card — Front and Back"
description: "A fantasy trading-card front and a shared card back at 2.5 × 3.5 in with rounded corners: a name bar with a cost gem, a framed art window, a type line, a rules box with flavour text, and stats, all inside the printer's safe area. Ready for card sets made from a spreadsheet."
en_description: "A fantasy trading-card front and a shared card back at 2.5 × 3.5 in with rounded corners: a name bar with a cost gem, a framed art window, a type line, a rules box with flavour text, and stats, all inside the printer's safe area. Ready for card sets made from a spreadsheet."
category: cards
tags: ["trading card", "game card", "TCG", "card back", "print", "card set", "fantasy"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a fantasy trading card at the trading-card size (2.5 × 3.5 in, rounded corners), front and back. Dark slate frame with brass trim and parchment text boxes: a name bar with a round cost gem, a framed art window for my artwork, a type line, a rules box with an italic flavour line, and attack / health stats in the bottom corner. The back is one shared emblem design. Keep all text inside the safe area. Use my card list if I give you one; otherwise make one sample card and mark the set name, number and artist as `—`."
---

A playing-card-sized game card (`trading-card`, 63.5 × 88.9 mm, 3.175 mm corner radius) with a front and one shared back, in the classic fantasy TCG layout. Works as the template for a whole set: each spreadsheet row fills one front.

- **Frame:** dark slate with thin brass borders around every box. Parchment fills for the name bar, type line and rules box, so text is always dark on light.
- **Name bar:** card name in a small-caps display serif (Cinzel), with a round cost gem on the right.
- **Art window:** a fixed-height framed box for the artist's image, with a small artist credit inside it. Without art, use a simple flat silhouette scene as a marked stand-in, never a generated imitation of a known artist.
- **Type line:** card type on the left, faction or colour on the right.
- **Rules box:** ability names in bold, then rules text; a hairline rule above one italic flavour line pinned to the bottom of the box.
- **Footer:** set name and collector number on the left, a stats plate on the right.
- **Back** (`data-od-side="back"`): one emblem centred on the frame colour, a brass inner border, the set name. One back for the whole set.
- Keep every word at least 3.2 mm (about 18 px here) inside the cut, and away from the rounded corners; the kit's check warns when text sits where the printer cuts round.

For a set, give each card's name, cost, type, rules, flavour and stats as one row of a spreadsheet and export with `data`. Export with the `trading-card` format and, for a printer, `printHouse`, which writes each face at the printer's upload size with `-front` and `-back` files. Don't invent a set name, numbering or artist: mark them `—` until the user gives them.
