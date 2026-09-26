#!/usr/bin/env node
// Renders examples/<slug>/example.html to examples/<slug>/thumbnail.png and
// refreshes the auto-generated grid in README.md between the THUMBNAILS markers.
"use strict";

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { chromium } = require("playwright");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const EXAMPLES_DIR = path.join(ROOT, "examples");
const README_PATH = path.join(ROOT, "README.md");
const START_MARKER = "<!-- THUMBNAILS:START -->";
const END_MARKER = "<!-- THUMBNAILS:END -->";
const COLUMNS = 3;
const THUMB_WIDTH = 280;
const VIEWPORT = { width: 1280, height: 800 };
const TRIM_PADDING = 32;
const MAX_OUTPUT_WIDTH = 960;

async function getCornerColor(buffer) {
  const { data, info } = await sharp(buffer)
    .extract({ left: 0, top: 0, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  return {
    r: data[0],
    g: data[1],
    b: data[2],
    alpha: info.channels === 4 ? data[3] / 255 : 1,
  };
}

// Designs are often a small card/poster centered on a large neutral page
// background (intentionally, so the crop edge reads clearly on its own). A
// raw full-page screenshot of those is mostly dead space, so trim the
// uniform background back to the content and pad with that same color for
// breathing room. A design that already fills the frame (e.g. a full-bleed
// poster) is left close to untouched since there's no uniform border to trim.
async function trimAndPad(pngBuffer) {
  const background = await getCornerColor(pngBuffer);
  const trimmed = await sharp(pngBuffer)
    .trim({ background, threshold: 10 })
    .png()
    .toBuffer();

  const padded = await sharp(trimmed)
    .extend({
      top: TRIM_PADDING,
      bottom: TRIM_PADDING,
      left: TRIM_PADDING,
      right: TRIM_PADDING,
      background,
    })
    .png()
    .toBuffer();

  const meta = await sharp(padded).metadata();
  if (meta.width > MAX_OUTPUT_WIDTH) {
    return sharp(padded).resize({ width: MAX_OUTPUT_WIDTH }).png().toBuffer();
  }
  return padded;
}

function parseFrontmatter(skillMd) {
  const match = skillMd.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return yaml.load(match[1]) || {};
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

async function renderThumbnails(slugs) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEWPORT });
  const entries = [];

  for (const slug of slugs) {
    const dir = path.join(EXAMPLES_DIR, slug);
    const htmlPath = path.join(dir, "example.html");
    if (!fs.existsSync(htmlPath)) continue;

    const skillPath = path.join(dir, "SKILL.md");
    const frontmatter = fs.existsSync(skillPath)
      ? parseFrontmatter(fs.readFileSync(skillPath, "utf8"))
      : {};
    const title = frontmatter.en_name || frontmatter.name || slug;

    await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
    const raw = await page.screenshot({ fullPage: true });
    const final = await trimAndPad(raw);
    fs.writeFileSync(path.join(dir, "thumbnail.png"), final);

    entries.push({ slug, title });
    console.log(`rendered ${slug}`);
  }

  await browser.close();
  return entries;
}

function buildGrid(entries) {
  const rows = [];
  for (let i = 0; i < entries.length; i += COLUMNS) {
    const chunk = entries.slice(i, i + COLUMNS);
    while (chunk.length < COLUMNS) chunk.push(null);
    rows.push(chunk);
  }

  const cell = (entry) => {
    if (!entry) return "<td></td>";
    const { slug, title } = entry;
    const alt = escapeHtml(title);
    return [
      `<td align="center" width="${Math.floor(100 / COLUMNS)}%">`,
      `<a href="examples/${slug}"><img src="examples/${slug}/thumbnail.png" width="${THUMB_WIDTH}" alt="${alt}"></a><br />`,
      `<sub><a href="examples/${slug}">${alt}</a></sub>`,
      "</td>",
    ].join("\n");
  };

  return [
    "<table>",
    ...rows.map((row) => "<tr>\n" + row.map(cell).join("\n") + "\n</tr>"),
    "</table>",
  ].join("\n");
}

function updateReadme(entries) {
  const table = buildGrid(entries);
  const block = `${START_MARKER}\n${table}\n${END_MARKER}`;
  const readme = fs.readFileSync(README_PATH, "utf8");
  const pattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`);
  if (!pattern.test(readme)) {
    throw new Error(`README.md is missing ${START_MARKER} / ${END_MARKER} markers`);
  }
  fs.writeFileSync(README_PATH, readme.replace(pattern, block));
}

async function main() {
  const slugs = fs
    .readdirSync(EXAMPLES_DIR)
    .filter((name) => fs.statSync(path.join(EXAMPLES_DIR, name)).isDirectory())
    .sort();

  const entries = await renderThumbnails(slugs);
  updateReadme(entries);
  console.log(`updated README.md with ${entries.length} thumbnails`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
