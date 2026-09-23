# awesome-open-design

Community-contributed remixable designs for [OpenDesign Agent Kit](https://github.com/feimacode/open-design-agent-kit).

This repo holds the **community** pool of remixable example designs — a second catalog alongside the curated, built-in examples that ship inside the extension itself. Anyone can contribute a design here; the extension fetches whichever tagged release you (or its default) point it at.

## How this gets consumed

Each tagged release of this repo is a snapshot the extension can fetch at runtime:

- The extension's `openDesign.communityContentRef` setting names a tag from this repo (defaults to the latest tag known at extension release time).
- Running **OpenDesign: Sync Community Designs** (or the extension's own first-run sync) downloads that tag's `examples/` folder into a local cache and merges it into the Gallery, tagged `community` so it's visually distinguishable from the built-in catalog.
- This content is **not reviewed the way the built-in catalog is** — it renders in a slightly more restrictive sandbox and is clearly labeled wherever it appears.

## Structure

```
examples/
  <design-slug>/
    SKILL.md         # frontmatter + workflow instructions, same shape Claude Code skills use
    example.html     # the hand-built, rendered example — this is what gets remixed
    open-design.json # optional: carries the example's starter prompt (od.useCase.query.en)
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Releasing

Maintainers cut a new tag (e.g. `v0.2.0`) whenever a meaningful batch of new/updated designs lands on `main`. Extension users track a specific tag, so nothing changes for them until they (or a future extension default) move to a newer one.

## License

[MIT](LICENSE). By contributing, you agree your contribution is licensed under the same terms — see CONTRIBUTING.md for the one exception (a design ported from elsewhere, which keeps its original license and attribution).
