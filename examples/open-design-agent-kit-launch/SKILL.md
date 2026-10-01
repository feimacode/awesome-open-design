---
name: open-design-agent-kit-launch
en_name: "Open Design Agent Kit — Launch Card"
description: "A fixed-canvas 1600×900 launch/social card (X/Twitter landscape post size) for a developer-tool product announcement. Near-black canvas with a subtle radially-masked grid texture, an oversized bold headline whose trailing clause is muted gray, a pill-outline eyebrow tag with mono author metadata, a row of three 'ships as' chips with inline line icons, a four-cell stats grid, a checkmark proof-point row, and a footer split between a mono install command and a community-catalog badge. Inter + JetBrains Mono only, one blue accent, no imagery."
en_description: "A fixed-canvas 1600×900 launch/social card (X/Twitter landscape post size) for a developer-tool product announcement. Near-black canvas with a subtle radially-masked grid texture, an oversized bold headline whose trailing clause is muted gray, a pill-outline eyebrow tag with mono author metadata, a row of three 'ships as' chips with inline line icons, a four-cell stats grid, a checkmark proof-point row, and a footer split between a mono install command and a community-catalog badge. Inter + JetBrains Mono only, one blue accent, no imagery."
category: marketing
tags: ["launch card", "social card", "og image", "promo", "developer tool", "dark mode", "announcement"]
od:
  mode: image
  surface: web
  platform: desktop
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Build a 1600×900 launch/social card (X/Twitter landscape post size) for the Open Design Agent Kit — pro-grade design built into the coding agent you already use. Dark technical aesthetic: near-black background, subtle grid texture that fades out via a radial mask, Inter + JetBrains Mono. Headline: 'Pro-grade design, built into the coding agent you already use.' with the second clause in muted gray. Subhead: skills, brand design systems and remixable examples running inside Copilot, Claude Code, Codex, Cursor and any MCP agent. A 'ships as' row of three pill chips with line icons: Agent skills (Claude Code · Codex), VS Code extension (Copilot Chat), MCP server (Cursor + any agent). Four stat cells: 163 skills, 114 design templates, 152 brand design systems, 167 remixable examples. Proof row of checkmarks: No desktop app, No daemon, No API keys, Plain files in your repo. Footer: '$ npx @feimacode/open-design-agent-kit init' on the left, an awesome-open-design community-designs badge on the right. Exactly one blue accent color, used only for the eyebrow tag and small highlights; no photos, no emoji icons."
---

# Open Design Agent Kit — Launch Card

A fixed-canvas 1600×900 launch card — the X/Twitter landscape post / OG-image size — for announcing a developer-tool product launch. It pairs a big two-tone claim headline with shipping-channel chips, a stats grid, proof points, and the install command, all on a dark technical canvas. The whole thing is one HTML file with inline CSS and inline stroke-only SVG icons; it exports to PNG/JPEG/PDF at 1600×900.

## Workflow

1. Start from a fixed 1600×900 stage (`data-od-card`), centered on a black page background, `overflow:hidden`, ~64px vertical / ~80px horizontal padding, flex column with `justify-content:space-between`-style spacing (headline block top, chips + stats middle, footer pinned low).
2. Add the grid texture as a `::before` layer: 64px linear-gradient grid lines in the hairline border color, masked with a radial-gradient ellipse centered around the upper-left third so it fades to nothing by the edges — never a flat full-bleed grid.
3. Typography: Inter (or `system-ui`) for headline/body, JetBrains Mono (or `ui-monospace`) for eyebrow tags, metadata, chips and commands. Headline ~80px at weight 800, letter-spacing ≈ −0.03em, with the trailing clause in muted gray at weight 700 — that two-tone split is the card's signature.
4. Top row: an outlined pill eyebrow tag in the single accent color (uppercase mono, letter-spaced, `border-radius:999px`) on the left; mono metadata such as author / repo in muted gray on the right.
5. Subhead: ~28px muted gray with key product/channel names bolder in the foreground color; cap the measure around 1200px.
6. "Ships as" row: a small uppercase mono label plus pill chips — surface background, hairline border, rounded-full, each carrying an inline 24–26px stroke-only SVG icon (`fill:none`, round caps/joins), the chip name at ~22px weight 600, and a mono `em` sub-label in muted gray.
7. Stats grid: four equal cells, surface background, ~16px radius, hairline border, big ~56px weight-800 numbers over ~20px muted labels. Use only real figures the user provides — never invent numbers.
8. Proof row: short checkmark claims (inline stroke SVG check, ~22px, foreground color), evenly spaced, plain text beside each.
9. Footer: top hairline border, split between a mono install command (`$` prompt in muted gray, command in foreground) and a muted community-catalog badge with a small filled star glyph.
10. Palette discipline: near-black background (~`#0f0f0f`), one surface tone (~`#171717`), foreground/muted grays, hairline `rgba(255,255,255,.08)` borders, and exactly one accent color used only for the eyebrow tag and small highlights.

## Content rules

- All numbers, channel names and commands must come from the user — if a value is unknown, write `—` or a clearly labeled placeholder rather than inventing one.
- Inline stroke-only SVG icons only; no emoji standing in for icons, no stock imagery, no gradients beyond the grid mask.
- System/Google fonts only, no un-licensed fonts.
- Export at 1600×900 (1×) for X/OG use.
