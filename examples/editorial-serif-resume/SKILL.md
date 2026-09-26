---
name: editorial-serif-resume
en_name: "Editorial Serif Resume"
description: "A single-column editorial resume: a large serif name headline, small-caps tracked section labels, generous whitespace, no sidebar or photo, black/off-white only."
en_description: "A single-column editorial resume: a large serif name headline, small-caps tracked section labels, generous whitespace, no sidebar or photo, black/off-white only."
category: resume
tags: ["resume", "CV", "editorial", "serif", "single column"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Build a single-column, editorial-style resume: name set in a large serif headline, small-caps tracked section labels (Experience, Education, Skills), sans-serif body copy, generous whitespace, no sidebar, no photo, no color accent beyond black/off-white. Use my real content if provided, otherwise leave honest `—` placeholders instead of a fabricated resume."
---

Single A4 page (210mm × 297mm), print-ready, one column, no sidebar.

- Header: name set in a large serif headline (not bold sans), a smaller italic-serif role/title line beneath it, then a contact row (location · email · phone · portfolio/LinkedIn) separated by thin vertical rules, all in sans-serif at small size.
- Section labels ("Profile", "Experience", "Education", "Skills") are small-caps, letter-spaced, uppercase, sans-serif, each underlined with a single hairline rule — not colored, not boxed.
- Experience entries: job title (sans, semibold) + company name (italic serif) on one line, dates right-aligned on the same line in a muted tone; 1-3 plain bullet points beneath, no icons, no invented metrics.
- Education and any single-line facts use a simple two-column "meta row" (label left, detail right) separated by hairline top-borders — the same divider language as the now-page convention, not cards.
- One ink color only (near-black on off-white paper), one serif family (headline + italic accents) plus one sans family (body/labels). No color accent, no photo, no logo, no icon bullets — bullets are plain list markers.
- Footer: a single small-caps line ("References available on request"), top-bordered like the meta rows above it.

Ask the user for their real name, role, contact details, and work history before filling this in. Where they haven't given you something, write a clearly-labeled `—` placeholder (e.g. "— Job Title —", "— start — — end —") rather than inventing a career history, employer names, or metrics — this template's whole value is that it's true.
