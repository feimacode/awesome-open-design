---
name: achievement-certificate-editorial
en_name: "Achievement Certificate — Editorial"
description: "An editorial-style achievement certificate: a thin double-rule border, a serif title, a centered recipient line, a restrained inline-SVG seal, and two signature-line placeholders. No gold gradients, no clipart laurel wreath."
en_description: "An editorial-style achievement certificate: a thin double-rule border, a serif title, a centered recipient line, a restrained inline-SVG seal, and two signature-line placeholders. No gold gradients, no clipart laurel wreath."
category: certificate
tags: ["certificate", "achievement", "editorial", "print"]
od:
  mode: template
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Design an achievement certificate, editorial style: a thin double-rule border around the full page, a serif title ('Certificate of Achievement'), a centered recipient-name line, a short body line describing the achievement, and a restrained seal/mark drawn as inline SVG (simple geometric seal, not a stock badge graphic or emoji ribbon), plus two signature-line placeholders at the bottom. No gold-gradient border, no clipart laurel wreath. Use — for recipient name/achievement text I haven't given you."
---

Landscape print page (~11×8.5in), cream paper on a slightly darker page background so the sheet edge reads clearly on screen.

- Two concentric hairline borders (1px, solid ink color) inset a few pixels apart — the "double rule," not a single thick frame.
- Centered content column: a small monospace eyebrow line for the issuing organization, a restrained inline-SVG seal (concentric circles + crossed lines, one ink-blue accent — drawn geometry, never a stock badge/ribbon graphic or emoji), the serif title "Certificate of Achievement," a "presented to" line, the recipient name set large and italic with a bottom rule beneath it, one short achievement sentence, and a small monospace certificate-number/issue-date line.
- Two signature lines anchored at the bottom corners, each a hairline rule with a small-caps label beneath (e.g. "— Signature — · Program Lead", "— Signature — · Date").
- Palette: cream paper, near-black ink text, exactly one accent (a restrained ink-blue) used only for the seal and the recipient name — never a gold gradient, never more than this one accent.

Ask the user for the real recipient name, the achievement being recognized, the issuing organization, and the date. Until given, keep every one of those as a clearly-labeled `—` placeholder rather than inventing a name or accomplishment — a certificate's whole value is that its facts are real.
