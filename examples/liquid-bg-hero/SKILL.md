---
name: liquid-bg-hero
en_name: "Liquid Background Hero"
description: "A full-screen WebGL-powered animated liquid background hero section with simplex noise turbulence, time-shifting color palettes, and cinematic film grain, paired with gradient accent text and glass-morphism CTA buttons. Ideal for product landing pages, AI product showcases, and tech brand homepages."
en_description: "A full-screen WebGL-powered animated liquid background hero section with simplex noise turbulence, time-shifting color palettes, and cinematic film grain, paired with gradient accent text and glass-morphism CTA buttons. Ideal for product landing pages, AI product showcases, and tech brand homepages."
category: landing-page
tags: ["hero", "webgl", "animation", "liquid", "fluid", "background", "landing-page"]
od:
  mode: prototype
  surface: web
  preview:
    type: html
    entry: example.html
  design_system:
    requires: false
  example_prompt: "Create a hero section with an animated liquid/fluid WebGL background, featuring dynamic simplex noise displacement, a time-shifting deep blue/mint/purple color palette, film grain overlay, and a bold tagline with gradient accent text and glass-morphism call-to-action buttons."
---

# Liquid Background Hero — Reproduction Workflow

This skill produces a single-file HTML hero section with a real-time WebGL animated liquid background.

## Steps

1. **Create a single HTML file** with `<!DOCTYPE html>` and standard meta tags. Set `<title>` to match your hero headline context.

2. **Add a full-screen `<canvas>` element** (`id="fluid"`) styled as a fixed, full-viewport background with `z-index: 0`.

3. **Build the CSS overlay layer** (`z-index: 1`) containing:
   - A **badge/pill** element (uppercase, letter-spaced, semi-transparent glass background with `backdrop-filter: blur`)
   - A **headline** (`<p>`) using `clamp()` for responsive sizing, with a `<span>` or `<em>` for gradient accent text via `background: linear-gradient(...)` + `-webkit-background-clip: text`
   - A **byline** with muted color
   - A **CTA row** with two buttons: a primary gradient button and a ghost/glass button, both with hover transforms and shadow transitions
   - Apply `fadeUp` keyframe animations with staggered delays

4. **Write the WebGL shaders:**
   - **Vertex shader**: simple passthrough (`gl_Position = vec4(a_pos, 0, 1)`)
   - **Fragment shader** implementing:
     - A compact 2D simplex noise function (`snoise`)
     - A **fBM (fractal Brownian motion)** layer using 6 octaves with rotation matrix for turbulence
     - A **palette function** that mixes 6 color stops (deep base, dark blue, mid teal, mint, blue, purple) driven by time
     - Two noise displacement layers (`q` and `r`) for organic distortion
     - A **vignette**, **contrast boost**, and **film grain** pass

5. **Wire the WebGL render loop:**
   - Resize handler with `devicePixelRatio` clamped to 2
   - Full-screen quad buffer (two triangles)
   - `requestAnimationFrame` loop passing `u_res` and `u_time` uniforms

6. **Open the file in a browser** to verify the animation renders smoothly. Adjust the palette colors, noise scale, or animation speed as desired for your brand.

## Customization

- **Colors**: Edit the `palette()` function in the fragment shader — each `vec3` is an RGB triplet (0–1 range).
- **Animation speed**: Multiply `u_time` by a smaller/larger factor in the `main()` function (default `0.15`).
- **Noise complexity**: Change the `fbm()` octave count (default 6) for more/less detail.
- **Headline text**: Replace the content in `.quote` and `.byline` elements.
- **CTA buttons**: Update text, `href`, and add navigation wiring as needed.
