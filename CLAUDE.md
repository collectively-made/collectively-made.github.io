# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing site for Collectively Made, a worker-owned cooperative. Hosted on GitHub Pages at collectivelymade.com.

## Development Commands

```bash
bundle install                # Install Ruby dependencies (vendored to vendor/bundle)
bundle exec jekyll serve      # Local dev server (http://localhost:4000)
bundle exec jekyll build      # Build static site to _site/
```

Ruby 3.3.7 is required (see `.ruby-version`).

## Architecture

This is a Jekyll site using the `github-pages` gem, deployed via GitHub Pages. There is no build pipeline beyond Jekyll itself.

**Styling approach:** Tailwind CSS loaded via CDN (`cdn.tailwindcss.com`) with Tailwind config inline in `_includes/head.html`. Custom design tokens (CSS custom properties using oklch color space) and component styles live in `css/main.css`. The site supports light/dark themes via a `.dark` class on `<html>`, toggled by the theme switcher in `_includes/footer.html`.

**Fonts:** Inter (sans), JetBrains Mono (monospace) from Google Fonts, plus a local custom font PP Mondwest (`fonts/PPMondwest-Regular.otf`) used for h1 elements.

**Layout structure:**
- `_layouts/default.html` — base layout: head, header, content, footer
- `_includes/head.html` — meta tags, Tailwind CDN + config, font loading, FOUC-preventing theme script
- `_includes/header.html` — fixed-position theme toggle UI (light/dark/auto buttons)
- `_includes/footer.html` — copyright, social links, theme toggle JS logic (reads/writes `localStorage('theme')`)
- `index.html` — single-page landing: logo, bio, services grid, consultation panel with cascade animation, client logo carousel

**Content is max-width 650px centered.** All pages follow this constraint.

## Gotchas

- **`text-primary` / `text-secondary` are custom CSS classes** defined in `css/main.css`, not Tailwind color utilities. They map to `--color-text-primary` / `--color-text-secondary`.
- **Logo carousel items are intentionally duplicated** in `index.html` (8 logos × 2). The CSS animation uses `translateX(-50%)` for a seamless loop — do not consolidate them.
- **`_config.yml` `url`** is set to `https://collectively-made.github.io` (not the custom domain). OG/meta image absolute URLs will resolve under that origin.

## Key Design Tokens

Defined in `css/main.css` as CSS custom properties on `:root` / `.dark`:
- `--color-bg-primary`, `--color-bg-secondary`
- `--color-text-primary`, `--color-text-secondary`
- `--color-accent` (orange: `#FF4000` light / `#FF6333` dark)
- `--color-border`

## Deployment

Pushes to `master` auto-deploy via GitHub Pages. The `CNAME` file points to `collectivelymade.com`.
