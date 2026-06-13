# AI Operations page revamp

**Date:** 2026-06-13
**Status:** Approved design, building

## Goal

Reposition `/operations` away from the narrow law-firm voicemail-automation pitch toward a
broader identity: an **AI-native studio** (a "lab of sorts") that builds **bespoke AI systems**
for companies, non-profits, and startups whose problem doesn't match anything off the shelf.

## Decisions (from the founder)

- **Law-firm content** → spun out to its own worked-example page at `/operations/inbound-practice/`.
- **Offer model** → bespoke, "scope it together," no fixed pricing on the main page. Primary CTA = "Start a conversation."
- **Lab framing** → AI-native studio, low-hype. The lab reads as a *method*, not a badge:
  "We build small, working things fast, then harden the ones that earn it."
- **Audience** → speak to all, organized by problem, never by audience type.
- **Capabilities** → focus on the one provable thing: *the system no vendor sells.* No multi-capability menu.
- **Naming** → generic ("the practitioner who builds your system"). No bios.
- **CTA target** → cal.com/collectively/review (book a call), email as the quiet secondary.
- **Proof** → client-logo strip for now; the worked example gets one quiet link (FAQ), not a featured teaser.

## Voice rules (anchor)

Plainspoken, declarative, anti-hype. Sentence-case headings ending in a period. Contrast
constructions ("X, not Y"). Honest to the point of self-disclosure. Concrete nouns and real
figures over adjectives. Mono `//` eyebrows + terminal-style analog footers. Avoid: AI-slop
modifiers (AI-powered, unlock, leverage, seamless, cutting-edge), negative-parallelism AI tell
("it's not X, it's Y"), tricolons, fixed pricing/tiers, fear/disruption framing, R&D cosplay.

## Page structure (`/operations`)

1. Hero — "We build the system no vendor sells." + single CTA.
2. Positioning blurb — cooperative + enterprise-UX proof + the lab method line.
3. What we build — "Most AI gets bought and never shipped." + an `ops-list` of the shapes the work takes.
4. Why us — 3 `ops-card`s: cooperative-not-agency / model-is-the-easy-part / we'll-tell-you-what-AI-shouldn't-do.
5. How it works — 4 `ops-steps`: conversation → written brief → build → handoff or care.
6. Selected clients — reuse the homepage logo carousel.
7. The honest answers — FAQ reframed off law-firm specifics (one quiet worked-example link here).
8. Final CTA — single "Start a conversation" path + quiet email whisper.

## Worked-example page (`/operations/inbound-practice/`)

Relocate the law-firm content, reframed as a story (problem → what we built → honest terms).
Pricing ($3,500 setup / $850 monthly) lives here, where it's a concrete example. Keeps the strong
receptionist lines. Becomes the template for future worked examples.

## Other changes

- Homepage card ([index.html]) — update "Hire the collective" body to the new positioning; retire the `// $3,500+ · Retainer` analog.
- Align "collective" → "cooperative" in body copy.
- `og_image` → `/img/main/lead.png` (the missing `/img/operations/og.png` referenced before doesn't exist).

## Reuse / build notes

- Everything reuses the existing `ops-*` component system; minimal new CSS (single-CTA whisper + inline link helpers).
- `ops-fade` scroll-reveal needs BOTH the CSS and the inline IntersectionObserver script on each page.
- Logo carousel duplicates 8 logos ×2 for the seamless `translateX(-50%)` loop — do not consolidate.
