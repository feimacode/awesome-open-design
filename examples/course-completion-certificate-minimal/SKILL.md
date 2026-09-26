---
name: course-completion-certificate-minimal
en_name: "Course-Completion Certificate — Minimal"
description: "A deliberately unornamented course-completion certificate: no border, no seal, generous whitespace, a very large centered recipient name, and a small-caps metadata row (issuer · date · credential id)."
en_description: "A deliberately unornamented course-completion certificate: no border, no seal, generous whitespace, a very large centered recipient name, and a small-caps metadata row (issuer · date · credential id)."
category: certificate
tags: ["certificate", "course completion", "minimal", "print"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design a course-completion certificate with deliberate restraint: no border, no ornament, no seal. Just generous whitespace, the recipient's name set very large and centered, the course name beneath it in a smaller weight, and a single small-caps metadata row at the bottom (issuer · date · credential id). One typeface family only, one ink color. Use `—` placeholders for any specifics not given to you rather than inventing a course/issuer name."
---

Landscape print page (11×8.5in), centered content, generous margins (~8% of page on every side). The whole design is one restraint move: nothing surrounds the content but whitespace.

- No border, no rule frame, no seal, no ribbon, no badge icon. If you're tempted to add a decorative flourish, don't — the absence of ornament is the point.
- One serif typeface family for everything (display and body); no second family, no mono accent.
- One ink color only (a near-black, not pure `#000`) on an off-white/cream page background — no accent color anywhere.
- Vertical stack, centered: a small tracked uppercase eyebrow ("Certificate of Completion") → the recipient's name set very large (the single dominant element on the page) → a thin 1px hairline rule, short and centered, as the only separator → the course name in a smaller italic weight → generous space → a small-caps metadata row at the very bottom: issuer · date · credential id, separated by a middle dot.

Ask the user for the real recipient name, course name, issuing organization, completion date, and credential ID. Use `—` placeholders for anything they haven't given you rather than inventing a name, course title, or issuer — this is a certificate; fabricated content is worse than an honest blank.
