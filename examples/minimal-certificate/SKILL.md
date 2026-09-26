---
name: minimal-certificate
en_name: "Minimal Course Completion Certificate"
description: "A minimal, print-ready course completion certificate with an elegant serif layout on a landscape 11×8.5 inch sheet, featuring placeholder fields for recipient name, course title, issuer, date, and credential ID."
en_description: "A minimal, print-ready course completion certificate with an elegant serif layout on a landscape 11×8.5 inch sheet, featuring placeholder fields for recipient name, course title, issuer, date, and credential ID."
category: print
tags:
  - certificate
  - course
  - completion
  - minimal
  - print-ready
  - education
od:
  mode: prototype
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Create a minimal, print-ready course completion certificate on a landscape 11×8.5 inch sheet. Use a warm off-white background with elegant serif typography (Georgia) for the recipient name in large display size, a thin horizontal rule divider, the course name in italic below, and a metadata line at the bottom in small sans-serif uppercase text showing the issuer, date, and credential ID separated by dots. Include honest em-dash placeholders for all variable fields. Keep the design restrained — no borders, seals, or decorative elements. Make it print-friendly with @media print rules."
---

# Minimal Course Completion Certificate

1. Create a landscape `11in × 8.5in` sheet centered on a light gray background, with the certificate body using a warm off-white (`#fbfaf7`) color and generous `8%` padding.
2. Add a small uppercase eyebrow heading ("Certificate of Completion") in a sans-serif font with wide letter-spacing and muted gray color, positioned at the top.
3. Place the recipient name as a large serif heading (`clamp(2.6rem, 6vw, 4.6rem)`) in near-black, using honest `— Recipient Name —` placeholder dashes.
4. Draw a thin 64px horizontal rule below the name at reduced opacity as a subtle divider.
5. Below the rule, add the course name in italic serif text with a narrow `34ch` max-width, using `— Course Name —` as the placeholder.
6. At the bottom, place a small sans-serif metadata line in uppercase muted text with the issuer, date, and credential ID separated by dot separators, all using em-dash placeholders.
7. Add `@media print` rules setting `@page` to `11in 8.5in` with zero margins and fixing the body dimensions so the certificate prints exactly to a landscape letter sheet.
8. Use no images, no decorative borders, no seals — keep the design purely typographic and restrained.
