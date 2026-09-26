---
name: birthday-invitation-bold
en_name: "Birthday Invitation — Bold"
description: "A bold, high-contrast birthday invitation: a huge typographic age numeral as the dominant graphic, a color-block background, and a clear date/time/location/RSVP info block. No balloon or confetti clipart."
en_description: "A bold, high-contrast birthday invitation: a huge typographic age numeral as the dominant graphic, a color-block background, and a clear date/time/location/RSVP info block. No balloon or confetti clipart."
category: invitation
tags: ["birthday invitation", "invitation", "bold type", "party"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a bold birthday party invitation (portrait card): high-contrast color-block background, the age/number set as a huge playful numeral as the dominant graphic element, the 'you're invited' headline beneath it, and a clear info block (date, time, location, RSVP) in a smaller consistent weight. One or two saturated accent colors, no gradients, no stock party-clipart (balloons/confetti icons). Use `—` placeholders for any details not given to you."
---

Portrait card, fixed 5:7-ish ratio (480×672 in the example), centered on a neutral surrounding page background — this is a print/share card, not a scrolling page.

- Split the card into two color blocks, hard edge, no gradient blend: an upper block (~60% of height) in one saturated accent color, and a lower block in a warm neutral (cream/off-white).
- Upper block: a small tracked-uppercase eyebrow ("Turning"), then the age set as a huge bold sans numeral (~230px, weight 900, tight negative letter-spacing) — this numeral is the single dominant graphic element, drawn as type, never a clipart number graphic. Below it, the "You're invited!" headline in a smaller bold weight, same ink-on-accent color as the eyebrow.
- Lower block: the honoree's name, then a label/value info list (Date, Time, Location, RSVP) — small-caps tracked labels in the accent color, values in dark ink, rows separated by thin hairline top-borders (not boxed cards, not icons).
- Exactly one saturated accent color plus a dark ink neutral and a cream neutral — do not add a second bright hue. No gradients, no balloon/confetti/party-clipart icons of any kind; the color-block layout and oversized numeral supply the celebratory energy on their own.
- Ask the user for the honoree's real name, age, date, time, location and RSVP details; until given, keep every one of those fields as a plain `—` placeholder rather than inventing party details.
