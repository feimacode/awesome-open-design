---
name: two-column-mono-resume
en_name: "Two-Column Monochrome Resume"
description: "An ATS-friendly two-column resume: a narrow left rail for contact/skills, a wider right column for a work-experience timeline with a thin vertical rule divider. Pure black-on-white, no photo, no color accent."
en_description: "An ATS-friendly two-column resume: a narrow left rail for contact/skills, a wider right column for a work-experience timeline with a thin vertical rule divider. Pure black-on-white, no photo, no color accent."
category: resume
tags: ["resume", "CV", "ATS-friendly", "two column", "monochrome"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Build a two-column resume: a narrow left rail (contact info, skills list, languages) separated from a wider right column (work experience as a timeline with a thin vertical rule) by a single hairline divider. Pure black-on-white, one sans-serif family, no photo, no icons, no color accent. Use my real name/role/experience if I give it to you, otherwise leave clearly labeled placeholders rather than inventing a career history."
---

Single A4 page, one sans-serif family (Inter or system sans), pure black ink on white — no accent color anywhere.

- Layout: a fixed-width left rail (~62mm) separated from a fluid right column by a single 1px hairline (`--hair: #d8d8d8`), not a bold divider or colored bar.
- Left rail, top to bottom: Contact (label/value pairs as a definition list), Skills (a plain list divided by hairline rules, no pill/chip backgrounds), Languages (label + level pairs), Education.
- Right column: a one-line Profile summary, then Experience as a timeline — a thin vertical rule (`border-left`) runs down the left edge of the list, with a small hollow-ring marker (`border-radius: 50%`, white fill) at each entry, connecting jobs top to bottom. Each entry has a title/company row with right-aligned dates, then 2-3 bullet achievements marked with an en-dash, not a bullet glyph or icon.
- No photo, no icon font, no skill-level bars/dots, no rounded "card" containers, no gradient or second color — restraint is the point.

Ask the user for their real name, target role, contact details, and work history before filling this in. Where they haven't given you something, keep the `—` placeholder exactly as in `example.html` rather than inventing a name, employer, or metric.
