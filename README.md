# awesome-open-design

Community-contributed remixable designs for [OpenDesign Agent Kit](https://github.com/feimacode/open-design-agent-kit).

This repo holds the **community** pool of remixable example designs — a second catalog alongside the curated, built-in examples that ship inside the extension itself. Anyone can contribute a design here; the extension fetches whichever tagged release you (or its default) point it at.

## How this gets consumed

Each tagged release of this repo is a snapshot the extension can fetch at runtime:

- The extension's `openDesign.communityContentRef` setting names a tag from this repo (defaults to the latest tag known at extension release time).
- Running **OpenDesign: Sync Community Designs** (or the extension's own first-run sync) downloads that tag's `examples/` folder into a local cache and merges it into the Gallery, tagged `community` so it's visually distinguishable from the built-in catalog.
- This content is **not reviewed the way the built-in catalog is** — it renders in a slightly more restrictive sandbox and is clearly labeled wherever it appears.

## Examples

<!-- THUMBNAILS:START -->
<table>
<tr>
<td align="center" width="33%">
<a href="examples/achievement-certificate-editorial"><img src="examples/achievement-certificate-editorial/thumbnail.png" width="280" alt="Achievement Certificate — Editorial"></a><br />
<sub><a href="examples/achievement-certificate-editorial">Achievement Certificate — Editorial</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/birthday-invitation-bold"><img src="examples/birthday-invitation-bold/thumbnail.png" width="280" alt="Birthday Invitation — Bold"></a><br />
<sub><a href="examples/birthday-invitation-bold">Birthday Invitation — Bold</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/claude-macos-notification-banner"><img src="examples/claude-macos-notification-banner/thumbnail.png" width="280" alt="Claude macOS Notification Banner"></a><br />
<sub><a href="examples/claude-macos-notification-banner">Claude macOS Notification Banner</a></sub>
</td>
</tr>
<tr>
<td align="center" width="33%">
<a href="examples/course-completion-certificate-minimal"><img src="examples/course-completion-certificate-minimal/thumbnail.png" width="280" alt="Course-Completion Certificate — Minimal"></a><br />
<sub><a href="examples/course-completion-certificate-minimal">Course-Completion Certificate — Minimal</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/editorial-serif-resume"><img src="examples/editorial-serif-resume/thumbnail.png" width="280" alt="Editorial Serif Resume"></a><br />
<sub><a href="examples/editorial-serif-resume">Editorial Serif Resume</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/field-notes-deck"><img src="examples/field-notes-deck/thumbnail.png" width="280" alt="Field Notes — Deck Opener"></a><br />
<sub><a href="examples/field-notes-deck">Field Notes — Deck Opener</a></sub>
</td>
</tr>
<tr>
<td align="center" width="33%">
<a href="examples/fracture-bloom-poster"><img src="examples/fracture-bloom-poster/thumbnail.png" width="280" alt="Fracture &amp; Bloom — Exhibition Poster"></a><br />
<sub><a href="examples/fracture-bloom-poster">Fracture &amp; Bloom — Exhibition Poster</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/grid-collage-announcement"><img src="examples/grid-collage-announcement/thumbnail.png" width="280" alt="Grid Collage Announcement Post"></a><br />
<sub><a href="examples/grid-collage-announcement">Grid Collage Announcement Post</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/liquid-bg-hero"><img src="examples/liquid-bg-hero/thumbnail.png" width="280" alt="Liquid Background Hero"></a><br />
<sub><a href="examples/liquid-bg-hero">Liquid Background Hero</a></sub>
</td>
</tr>
<tr>
<td align="center" width="33%">
<a href="examples/metrics-deck-dark"><img src="examples/metrics-deck-dark/thumbnail.png" width="280" alt="Dark Metrics — Single Stat Slide"></a><br />
<sub><a href="examples/metrics-deck-dark">Dark Metrics — Single Stat Slide</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/minimal-certificate"><img src="examples/minimal-certificate/thumbnail.png" width="280" alt="Minimal Course Completion Certificate"></a><br />
<sub><a href="examples/minimal-certificate">Minimal Course Completion Certificate</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/modern-wedding-invitation"><img src="examples/modern-wedding-invitation/thumbnail.png" width="280" alt="Modern Wedding Invitation"></a><br />
<sub><a href="examples/modern-wedding-invitation">Modern Wedding Invitation</a></sub>
</td>
</tr>
<tr>
<td align="center" width="33%">
<a href="examples/monogram-rule-card"><img src="examples/monogram-rule-card/thumbnail.png" width="280" alt="Monogram + Rule Business Card"></a><br />
<sub><a href="examples/monogram-rule-card">Monogram + Rule Business Card</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/nightlife-gig-flyer"><img src="examples/nightlife-gig-flyer/thumbnail.png" width="280" alt="Nightlife / Gig Flyer"></a><br />
<sub><a href="examples/nightlife-gig-flyer">Nightlife / Gig Flyer</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/now-page"><img src="examples/now-page/thumbnail.png" width="280" alt="Now Page"></a><br />
<sub><a href="examples/now-page">Now Page</a></sub>
</td>
</tr>
<tr>
<td align="center" width="33%">
<a href="examples/quote-carousel-card"><img src="examples/quote-carousel-card/thumbnail.png" width="280" alt="Quote Carousel Card"></a><br />
<sub><a href="examples/quote-carousel-card">Quote Carousel Card</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/two-column-mono-resume"><img src="examples/two-column-mono-resume/thumbnail.png" width="280" alt="Two-Column Monochrome Resume"></a><br />
<sub><a href="examples/two-column-mono-resume">Two-Column Monochrome Resume</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/warm-birthday-card"><img src="examples/warm-birthday-card/thumbnail.png" width="280" alt="Warm Birthday Card"></a><br />
<sub><a href="examples/warm-birthday-card">Warm Birthday Card</a></sub>
</td>
</tr>
<tr>
<td align="center" width="33%">
<a href="examples/warm-minimal-card"><img src="examples/warm-minimal-card/thumbnail.png" width="280" alt="Warm Minimal Business Card"></a><br />
<sub><a href="examples/warm-minimal-card">Warm Minimal Business Card</a></sub>
</td>
<td align="center" width="33%">
<a href="examples/workshop-meetup-flyer"><img src="examples/workshop-meetup-flyer/thumbnail.png" width="280" alt="Workshop / Meetup Flyer"></a><br />
<sub><a href="examples/workshop-meetup-flyer">Workshop / Meetup Flyer</a></sub>
</td>
<td></td>
</tr>
</table>
<!-- THUMBNAILS:END -->

## Structure

```
examples/
  <design-slug>/
    SKILL.md         # frontmatter + workflow instructions, same shape Claude Code skills use
    example.html     # the hand-built, rendered example — this is what gets remixed
    open-design.json # optional: carries the example's starter prompt (od.useCase.query.en)
    thumbnail.png    # auto-generated by CI from example.html — don't add this yourself
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Releasing

Maintainers cut a new tag (e.g. `v0.2.0`) whenever a meaningful batch of new/updated designs lands on `main`. Extension users track a specific tag, so nothing changes for them until they (or a future extension default) move to a newer one.

## License

[MIT](LICENSE). By contributing, you agree your contribution is licensed under the same terms — see CONTRIBUTING.md for the one exception (a design ported from elsewhere, which keeps its original license and attribution).
