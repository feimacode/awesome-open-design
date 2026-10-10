---
name: west-lake-travel-cards
en_name: "West Lake Travel Guide — Xiaohongshu Cards"
description: "A seven-card Xiaohongshu (RED) travel-guide carousel, each card a 1080×1440 (3:4) vertical canvas in Chinese with bilingual titles, one self-contained HTML file. Warm cream paper with rose and sage accents and brown ink: a centered cover with a collect-me pill tag and a huge two-line title; a highlights card of white icon rows; four identical spot templates (rose overline, CN+EN name, location pill, white description card, two sage-gradient stat chips) for three pools, the Su Causeway, Leifeng Pagoda and Broken Bridge; and a closing card with a route-flow of pill stops plus a rose-gradient like/save/follow CTA. Decorative color blobs, per-card page badges and a watermark handle. CJK system fonts, no webfonts, no photography."
en_description: "A seven-card Xiaohongshu (RED) travel-guide carousel, each card a 1080×1440 (3:4) vertical canvas in Chinese with bilingual titles, one self-contained HTML file. Warm cream paper with rose and sage accents and brown ink: a centered cover with a collect-me pill tag and a huge two-line title; a highlights card of white icon rows; four identical spot templates (rose overline, CN+EN name, location pill, white description card, two sage-gradient stat chips) for three pools, the Su Causeway, Leifeng Pagoda and Broken Bridge; and a closing card with a route-flow of pill stops plus a rose-gradient like/save/follow CTA. Decorative color blobs, per-card page badges and a watermark handle. CJK system fonts, no webfonts, no photography."
category: social-post
tags: ["xiaohongshu", "red note", "travel guide", "carousel", "cards", "hangzhou", "west lake", "chinese", "3:4", "itinerary"]
od:
  mode: image
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Make a Xiaohongshu travel-guide card carousel for Hangzhou West Lake \u2014 seven vertical 1080\u00d71440 (3:4) cards in Chinese, all in one self-contained HTML file. Warm cream paper (#FBF2EA) with rose and sage accents and brown ink, rounded 40px card corners, soft shadows, decorative blurred color blobs, and CJK system fonts (PingFang SC / Microsoft YaHei). Card 1 is a centered cover: a rose \u2018\u5efa\u8bae\u6536\u85cf\u2019 pill tag, a short rose divider, a huge two-line Chinese title with an English subtitle, and a rose-deep eyebrow line. Card 2 lists two highlights as white rows with emoji icon tiles (free admission all year; best sunrise/sunset times). Cards 3\u20136 use one identical spot template for \u4e09\u6f6d\u5370\u6708, \u82cf\u5802, \u96f7\u5cf0\u5854, \u65ad\u6865 \u2014 a page-number badge, a rose overline, the CN+EN spot name, a \ud83d\udccd location pill, a white description card, and two sage-gradient stat chips carrying the real facts (distance, walking time, opening hours, ticket facts). Card 7 closes with a two-day route flow of pill stops joined by arrows and a rose-gradient CTA box asking readers to like, save and follow, with three action buttons. Every card carries a small page badge and a watermark handle (a placeholder the user swaps for their own). All facts \u2014 prices, hours, distances, addresses \u2014 must come from me or be verified; never invent them. Emoji are fine as decoration, this is for Xiaohongshu."
---

# West Lake Travel Guide — Xiaohongshu Cards

A seven-card travel-guide carousel in the Xiaohongshu (RED) idiom: each card is
a 1080×1440 (3:4) portrait canvas, stacked vertically in one HTML file for
screenshotting or exporting as PNGs. The design language is warm and soft —
cream paper, rose and sage pastels, 32–40px corner radii, diffuse brown
shadows, white content cards floating on the tinted background — deliberately
opposite to the dark technical posters elsewhere in this catalog. Content is
Chinese with bilingual (CN+EN) spot names. No webfonts (CJK system stack), no
photography: everything is CSS boxes, emoji and text.

**Palette:** paper `#FBF2EA` on stage `#EFE4DA`, white surfaces, brown ink
`#3A2A24`, muted `#8C7A6B`, rose `#E3A79A` / deep `#C97B63`, sage `#9FAF8E` /
deep `#748A64`, hairline `rgba(58,42,36,.10)`, soft shadow
`0 18px 40px rgba(58,42,36,.10)`.

## Workflow

1. Build a vertical `.stage` (page bg `#EFE4DA`, 48px gaps) holding seven
   `.card` sections — each 1080×1440, `border-radius:40px`, `overflow:hidden`,
   paper background, padded 88/80/72, flex column. Tag each card with
   `data-od-card` so per-card image export works.
2. Shared furniture on every card: a rounded translucent **page badge**
   ("02 / 07" style) pinned top-left on cards 2–7, and a small muted
   **watermark handle** bottom-right. The cover instead gets two big
   half-opacity color **blobs** bleeding off opposite corners (rose top-right,
   sage bottom-left) as its decoration.
3. **Cover (1):** a centered column — a rose pill tag with a pushpin emoji and
   a drop shadow, a 120×6 rounded rose divider, the huge (~118px, weight 800)
   two-line Chinese title, a muted English subtitle, and a rose-deep eyebrow
   with 6px letter-spacing (the hook line: how many spots, how many days).
4. **Highlights (2):** a ~72px weight-800 title, then two white 32px-radius
   rows, each a flex of a 96px rounded emoji tile over a text block (bold ~44px
   headline, ~30px muted sub-line).
5. **Spot cards (3–6) share one template:** rose-deep overline ("0N · 必游
   景点"), a title row of ~84px Chinese name + muted English name, a white
   location pill (📍 + text), a white description card (~38px, line-height
   1.7), then a flex spacer and a row of two **stat chips** — sage
   135°-gradient, centered, big number over a small label. Write the four spots
   by filling the same markup with different facts; do not restyle per spot.
6. **Summary (7):** a ~68px title with a map emoji, a white **route-flow**
   card — pill stops in soft rose-tinted chips joined by muted arrows — a flex
   spacer, then a rose-gradient **CTA box**: weight-800 call-to-action title,
   a sub-line, and three equal translucent action buttons (follow / save /
   comment).
7. Type scale is large and CJK-safe: display 68–118px, body 30–44px, line
   heights 1.3–1.7; emoji are load-bearing decoration (icons, pins, stat
   glyphs) per platform convention — keep them in the default build.
8. Export: screenshot each `[data-od-card]` at 1080×1440 (1×), in order, as
   the carousel upload set.

## Content rules

- Every fact on a card — prices, opening hours, distances, addresses, transit
  notes — must come from the user or be verified against a current source;
  never invent one. The sample West Lake facts in `example.html` (free scenic
  area, ¥1 stone pagodas reachable only by boat, Su Causeway 2.8km / 40–50min
  walk, Leifeng Pagoda 8:00–20:00 at 南山路15号, route 断桥 → 苏堤 → 三潭印月 →
  雷峰塔看日落) were the user-supplied content for this instance.
- The watermark handle (e.g. `@西湖攻略局 · 2026`) is a placeholder — swap it
  for the user's real handle and year before shipping.
- No photography and no webfonts: the look depends on flat color, rounded
  white cards and emoji, and the CJK system-font stack keeps the file
  dependency-free.
- Keep all seven cards on the shared token set; new card types should reuse
  the existing primitives (pill, white card, stat chip, badge, blob).
