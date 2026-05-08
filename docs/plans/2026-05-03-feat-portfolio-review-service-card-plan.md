---
title: Add Portfolio Review service card to homepage
type: feat
status: completed
date: 2026-05-03
---

# Add Portfolio Review service card to homepage

## Overview

Introduce **Portfolio Review** as a third paid service on the Collectively Made homepage. The card uses the existing `.ops-card` primitive, carries a "Popular" tag inline with the card label, and opens a `mailto:` to `alex@collectivelymade.com` with a prefilled subject and body. Card 03 ships alongside a light restructuring of the existing two cards so all three sit in a consistent 3-up grid with parallel anatomy (label → title → body → analog row carrying price + format).

## Problem / Motivation

Today the homepage offers two ways to engage:

- `index.html:29` — `01 / Hire the collective` → `/operations/`
- `index.html:35` — `02 / Book a consultation` → cal.com discovery

Neither has a low-friction, low-commitment, async option. A $100 written portfolio review:

- Gives the collective a small wedge with designers/engineers in transition (a different audience than the Operations buyer).
- Generates artifacts (written feedback docs) that, with permission, become marketing material for the collective.
- Trades a paid intake for richer screening data than a 15-minute call.

The card needs to fit the Collectively Made aesthetic — monochrome ink, mono labels, serif titles, no marketing-y badges — while still signaling that this is the recommended on-ramp.

## Proposed Solution

Restructure the homepage Services grid from a 2-up to a 3-up of equal-depth cards. Each card grows an `.ops-card-analog` row showing price + format. The new card uses an inline `· POPULAR` suffix on its label rather than a corner badge.

### Card content

| # | Title | Body | Analog (price · format) | Destination |
|---|---|---|---|---|
| 01 | Hire the collective. | Currently building AI operations for small businesses. | `// From $3,500 · Retainer` | `/operations/` |
| 02 | Book a consultation. | Schedule a 15-minute project discovery call to see if there's a fit. | `// Free · 15 minutes` | `https://cal.com/collectively/discovery` |
| 03 · POPULAR | Portfolio Review. | Detailed, actionable feedback on your portfolio to help you land your next role. | `// $100 · Async` | `mailto:alex@collectivelymade.com?subject=…&body=…` |

The "What's included" detail (1,000+ word feedback doc, UX critique, content strategy, technical review) does **not** appear on the card itself — it lives in the prefilled email body so it's context for both the requester and Alex, and nothing on the homepage card needs to grow taller than the existing two.

### Markup sketch — `index.html`

Replace the existing `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">…</div>` (lines 28–40) with a 3-up grid that adds an analog row to each card:

```html
<!-- index.html — Services grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    <a href="/operations/" class="ops-card ops-card--link">
        <p class="ops-card-label">01</p>
        <h2 class="ops-card-title">Hire the collective.</h2>
        <p class="ops-card-body">Currently building AI operations for small businesses.</p>
        <p class="ops-card-analog">// From $3,500 · Retainer</p>
    </a>

    <a href="https://cal.com/collectively/discovery" target="_blank" rel="noopener noreferrer" class="ops-card ops-card--link">
        <p class="ops-card-label">02</p>
        <h2 class="ops-card-title">Book a consultation.</h2>
        <p class="ops-card-body">Schedule a 15-minute project discovery call to see if there's a fit.</p>
        <p class="ops-card-analog">// Free · 15 minutes</p>
    </a>

    <a
        href="mailto:alex@collectivelymade.com?subject=Portfolio%20review%20request&amp;body=Hi%20Alex%2C%0A%0AI%27d%20like%20to%20request%20a%20portfolio%20review%20%28%24100%2C%20async%29.%20Here%27s%20a%20bit%20of%20context%20about%20my%20role%20and%20where%20I%27m%20in%20my%20search%3A%0A%0A%0A%0APortfolio%20URL%3A%0A%0AWhat%27s%20included%20%28for%20reference%29%3A%0A-%20Written%20feedback%20document%20%281%2C000%2B%20words%29%0A-%20UX%20and%20design%20critique%0A-%20Content%20strategy%20suggestions%0A-%20Technical%20implementation%20review%0A"
        class="ops-card ops-card--link"
    >
        <p class="ops-card-label">03 <span class="sep">·</span> <span class="ops-card-tag">Popular</span></p>
        <h2 class="ops-card-title">Portfolio Review.</h2>
        <p class="ops-card-body">Detailed, actionable feedback on your portfolio to help you land your next role.</p>
        <p class="ops-card-analog">// $100 · Async</p>
    </a>
</div>
```

Notes on the markup:

- `lg:grid-cols-3` keeps the 2-up at `sm` (a 3-up would be cramped at the 650px content width on tablet) and goes 3-up at `lg`. Validate visually — if 3-up reads better at `md` (768px), use that breakpoint instead.
- The container itself currently caps at `max-w-[650px]` (`index.html:6`). Three cards at 650px give ~200px each, which is tight but workable for this short copy. If 3-up at the existing width feels cramped, widen this row only (e.g., `max-w-3xl` on the grid wrapper) without changing the rest of the page.
- `mailto:` links should **not** carry `target="_blank"` or `rel="noopener noreferrer"` — those make some browsers open a blank tab before handing off to the mail client. Compare `operations.html:202`, which omits them correctly.
- The existing `.sep` class (`css/main.css:520`) already styles a separator dot inside `.ops-card-label`. Reuse it for the `· Popular` divider.

### CSS additions — `css/main.css`

One new modifier class for the inline tag, slotted next to the existing `.ops-card-label .sep` rule:

```css
/* css/main.css — inline tag inside an .ops-card-label */
.ops-card-tag {
    color: var(--color-text-primary);
    font-weight: 600;
}
```

That's it. No new card variant, no badge component, no color override. The "Popular" cue is just the `· Popular` text rendered in primary ink against the secondary-ink label, picked up by the existing label typography.

If the inline tag reads too quietly in dark mode during visual review, escalate to a 1px outlined pill (still inside `.ops-card-label`) before reaching for color.

### Mailto template (decoded)

```
To:      alex@collectivelymade.com
Subject: Portfolio review request
Body:
Hi Alex,

I'd like to request a portfolio review ($100, async). Here's a bit of context about my role and where I'm in my search:



Portfolio URL:

What's included (for reference):
- Written feedback document (1,000+ words)
- UX and design critique
- Content strategy suggestions
- Technical implementation review
```

Two blank lines after the lead-in invite the requester to drop in a paragraph; the "Portfolio URL:" prompt makes the most-needed field obvious; the included list at the bottom serves as receipt-of-offer for both parties.

### Cleanup

- The commented-out **Consultation tiers** block in `index.html:42–71` is partially superseded by this card (a paid, tiered offering with a "Tier" label pattern). Leave the comment for now (it's harmless), but call it out in the PR description so the user can decide whether to delete it in a follow-up.
- `_site/` is gitignored (per recent commit `aebce5e`), so no build artifact needs to ship in this PR.

## Technical Considerations

- **Mailto URL encoding.** Subject and body must be percent-encoded. Most importantly: `$` → `%24`, `,` → `%2C`, `'` → `%27`, `(` `)` → `%28` `%29`, newline → `%0A`, space → `%20`. Avoid `+` for spaces in mailto bodies — some clients render literal `+`.
- **HTML entity in href.** Use `&amp;` for the `&` that separates `subject` and `body` in the `href` attribute (HTML attribute escaping), as `operations.html:202` does.
- **No JS.** This is purely markup + CSS. No new event handlers, no toast, no analytics hook (we don't track elsewhere on the site).
- **Breakpoint check.** The site uses Tailwind via CDN with config inline in `_includes/head.html`. Standard `lg:` (`1024px`) is available; no config change needed.
- **Dark mode.** The `.ops-card-tag` rule above relies on `--color-text-primary`, which already swaps under `.dark` — no separate dark-mode rule required. Verify by toggling.
- **Reduced motion / animation.** The homepage cards do not use `.ops-fade`, so no animation considerations. Keep it that way.

## System-Wide Impact

- **Interaction graph.** A click on the new card triggers the OS mail client via `mailto:`. No JS observer fires. The existing `showToast()` and consultation toggle handlers in `index.html:108–130` are untouched.
- **Error propagation.** A user without a configured mail client may see nothing happen, or a browser prompt to choose one. There is no graceful in-page fallback today (the Operations email CTA at `operations.html:202` has the same characteristic). Document as known limitation; do not add a fallback in this PR.
- **State lifecycle risks.** None — no persisted state.
- **API surface parity.** The `mailto:` pattern matches the Operations final CTA (`operations.html:202`). The two should stay aligned in URL-encoding style and copy tone.
- **Cross-page scenarios:**
  - Visitor lands on `/`, picks card 03 → mail client opens with prefilled draft → sends → Alex receives.
  - Visitor lands on `/`, picks card 03 with no mail client → nothing visible happens. Acceptable.
  - Visitor on mobile picks card 03 → iOS/Android mail app opens with the draft. Verify on at least one mobile device.
  - Visitor copies the email address from the mailto rather than sending — works because the address is plain text in the `href`.

## Acceptance Criteria

### Functional

- [ ] Homepage Services grid renders three cards: `01 Hire`, `02 Book`, `03 Portfolio Review`.
- [ ] Card 03's label reads `03 · POPULAR` (mono, primary ink for "POPULAR").
- [ ] Card 03 links to `mailto:alex@collectivelymade.com` with subject `Portfolio review request` and the body template above (URL-encoded).
- [ ] Each card carries an `.ops-card-analog` row: `// From $3,500 · Retainer`, `// Free · 15 minutes`, `// $100 · Async`.
- [ ] All three cards remain visually equal in height at every breakpoint.
- [ ] Hover/focus states behave identically across all three cards (existing `.ops-card--link` rules).
- [ ] Mailto opens the OS mail client with the draft prefilled (verified manually).

### Layout

- [ ] 1-up at mobile (`< 640px`).
- [ ] 2-up at small (`sm`, `≥ 640px`) — or whichever breakpoint testing confirms reads cleanly.
- [ ] 3-up at large (`lg`, `≥ 1024px`) — or `md` if testing supports it.
- [ ] Container width adjusted only if 3-up is uncomfortably tight at the current 650px cap.

### Quality

- [ ] Light and dark themes verified (POPULAR tag legible in both; analog row dashed border visible).
- [ ] Lighthouse accessibility score does not regress.
- [ ] No console errors on `/`.
- [ ] `bundle exec jekyll build` completes cleanly.

## Success Metrics

- Inbound `Portfolio review request` emails / month (manual count by Alex).
- Homepage click-through ratio between cards 01/02/03 (subjective; no analytics installed).
- Qualitative: at least one written feedback doc shipped to a paying requester within 30 days of launch.

## Dependencies & Risks

- **Width constraint.** The existing `max-w-[650px]` rule in `index.html:6` may make a 3-up grid feel cramped. Mitigation: widen only the Services row, or stay 2-up + stack the third card below at `md` and only go 3-up at `lg`.
- **"Popular" tag legibility.** An inline mono tag is the lightest treatment that fits the brand; if it disappears in visual review, escalate to a 1px outlined pill (still monochrome) before introducing color.
- **Mailto reliability.** Some users (corporate webmail without a desktop client) may experience nothing happening on click. Acceptable today (matches the Operations email CTA). Re-evaluate if requests don't materialize.
- **Pricing collision with `/operations/`.** The Operations page advertises `Setup from $3,500. Monthly care from $850.` (`operations.html:82`). Make sure card 01's analog (`From $3,500 · Retainer`) reads consistently; if Alex prefers to keep the homepage card pricing-agnostic, swap to `// Custom · Retainer`.

## Sources & References

### Internal

- `index.html:27–40` — current Services grid (the structural change site).
- `index.html:42–71` — commented-out Consultation tiers block (potential cleanup target post-launch).
- `operations.html:202` — existing mailto CTA pattern to mirror.
- `operations.html:96–122` — `.ops-card` + `.ops-card-analog` usage reference (Step 01–04 cards).
- `css/main.css:471–561` — `.ops-card`, `.ops-card--link`, `.ops-card-label`, `.ops-card-analog` definitions.
- `css/main.css:520–523` — existing `.ops-card-label .sep` rule reused for the `·` divider.
- `CLAUDE.md` — design tokens, theming, content max-width constraint.

### Conventions in CLAUDE.md to honor

- `text-primary` / `text-secondary` are custom CSS classes, not Tailwind utilities.
- Theme switching reads/writes `localStorage('theme')`; no theme-related JS changes here.
- Tailwind is loaded via CDN; class names are produced just-in-time by the CDN runtime — no build step.
