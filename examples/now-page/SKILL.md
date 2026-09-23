---
name: now-page
en_name: "Now Page"
description: "A minimalist personal 'now page' — what you're currently focused on, reading, and learning. Single column, restrained type, no imagery required."
en_description: "A minimalist personal 'now page' — what you're currently focused on, reading, and learning. Single column, restrained type, no imagery required."
category: personal
tags: ["now page", "personal site", "about page", "portfolio"]
od:
  mode: prototype
  surface: web
  platform: desktop
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Build a 'now page' for me — a single-page personal site section listing what I'm currently focused on, reading, and learning. Keep it to one restrained accent color, system fonts, no stock photography or generic icons, and use my real content instead of placeholder text."
---

Single-column layout, max-width ~640px, generous vertical rhythm.

- Header: name, one-line role/description, a small "updated \<date\>" line linking to the now-page-movement convention.
- Body sections ("Now", "Reading", "Learning", etc.), each with a small uppercase eyebrow heading in the one accent color used on the page.
- Lists use a plain top-border-divided style, not cards — no shadows, no rounded-corner boxes, no left-border accent stripes.
- One accent color only, used sparingly (eyebrow headings, links). System font stack. No stock imagery, no emoji icons, no invented statistics.
- Footer: one line of real contact info / links, top-bordered like the list dividers above it.

Ask the user for their actual current focuses, reading list, and any other sections they want (e.g. "Listening", "Watching", "Working on") rather than inventing content — this is a personal page, its whole value is that it's true.
