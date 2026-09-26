---
name: workshop-meetup-flyer
en_name: "Workshop / Meetup Flyer"
description: "A practical, reusable event flyer: a solid color-block header band with a bold headline, a structured date/time/location info list, and an RSVP line. One accent color plus black/white."
en_description: "A practical, reusable event flyer: a solid color-block header band with a bold headline, a structured date/time/location info list, and an RSVP line. One accent color plus black/white."
category: flyer
tags: ["event flyer", "workshop", "meetup", "poster"]
od:
  mode: poster
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design an event flyer (portrait, letter-ish ratio) for a workshop or meetup: a solid color-block band across the top holding a bold sans-serif headline, then below it a structured info list (date, time, location, one-line description) with clear label/value pairs, and a simple RSVP/link line at the bottom. One accent color plus black/white. No fine-art gradient background, no stock photo, no invented attendee count. Use `—` placeholders for any details I haven't given you."
---

Portrait, US-letter proportioned flyer (`aspect-ratio: 8.5/11`), single self-contained HTML file.

- **Header band**: a solid-color block (one accent color, no gradient) spanning the top ~35–40% of the page. Contains a small tracked monospace eyebrow ("Workshop · In Person"), a bold oversized sans-serif headline, and a one-line description beneath it.
- **Info list**: below the band, a stack of label/value rows (Date / Time / Location) each separated by a thin top rule, with the last row also closed by a bottom rule. Labels are small tracked monospace in the accent color; values are bold and right-aligned.
- **Supporting note**: one short line of practical logistics copy (what to bring, capacity, etc.) — this is real usable copy, not filler.
- **Footer**: an RSVP label/value pair (link or email) plus a small "01 / SESSION" tag, useful if this flyer is one of a numbered series.
- One accent color total, used for the band background, the info labels, and nothing else. Pure black text/rules on white otherwise. No drop shadows on inner elements, no rounded "card" chrome, no icon bullets.

The headline, description, date/time/location, and RSVP value in `example.html` are deliberately rendered as `—` placeholders — this flyer is a fill-in-the-blanks template, not a fabricated event. When an agent reproduces this for a real request, ask the user for their actual event name, date, time, location, and RSVP details, and keep the `—` placeholder styling for anything they don't supply rather than inventing plausible-sounding specifics (a fake date, a made-up venue, a fabricated attendee count).
