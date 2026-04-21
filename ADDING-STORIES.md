# Adding a New Data Story

## Quick Steps

1. **Create your dashboard** as a standalone HTML file
2. **Add the dashboard** to `public/dashboards/[slug]/index.html`
3. **Create a story file** at `src/content/stories/[slug].md`
4. **Add an OG image** to `public/og/[slug].png` (1200x630px recommended)
5. **Preview** with `npm run dev`
6. **Deploy** with `npm run deploy`

## Story Markdown Template

Create a new file at `src/content/stories/your-story-slug.md`:

```markdown
---
title: "Your Story Title"
industryLabel: "Industry Name"
statNumber: "123K"
statLabel: "what the number represents"
problemStatement: "2-3 sentences describing the business problem this data story addresses."
dashboardPath: "/dashboards/your-story-slug/index.html"
dashboardFallbackImage: "/og/your-story-slug.png"
dashboardAccessibleSummary: "A text description of what the visualisation shows, for screen readers."
processSteps:
  - "Step 1: How you started (emphasise speed)"
  - "Step 2: What you did (emphasise simplicity)"
  - "Step 3: What you found (emphasise the insight)"
  - "Step 4: How you made it explorable"
ogImage: "/og/your-story-slug.png"
metaDescription: "SEO description for this story (under 160 characters)."
publishedDate: 2026-04-21
sortOrder: 2
---

Optional body content (not currently displayed on story pages).
```

## Required Fields

| Field | Description |
|-------|-------------|
| `title` | Story headline (shown on story page and homepage preview) |
| `industryLabel` | Industry name: "Construction", "Sport", "Irish Business", etc. |
| `statNumber` | Big number that leads the story: "221K", "£4.2B", "86%" |
| `statLabel` | What the stat represents: "data points analysed" |
| `problemStatement` | 2-3 sentences about the business problem |
| `dashboardPath` | Path to dashboard HTML: `/dashboards/[slug]/index.html` |
| `dashboardFallbackImage` | Fallback image if dashboard fails to load |
| `dashboardAccessibleSummary` | Text summary for screen readers |
| `processSteps` | 3-5 bullet points for "See how this was made" (emphasise speed, simplicity) |
| `ogImage` | Social sharing preview image path |
| `metaDescription` | SEO description (under 160 characters) |
| `publishedDate` | Date in YYYY-MM-DD format |
| `sortOrder` | Number controlling story order (1 = first, 2 = second, etc.) |

## Process Steps Guidelines

The "See how this was made" content should:
- Lead with how fast it was done ("Built in an afternoon")
- Emphasise the approach, not the tools
- Never mention specific tools, AI, or technical stack
- Be 3-5 short bullet points
- Tone: a smart colleague explaining their process over coffee

## Dashboard Requirements

- Self-contained HTML file in `public/dashboards/[slug]/`
- Can use any technology (D3, Chart.js, Plotly, plain HTML/CSS)
- Should be responsive (works in an iframe on mobile)
- Data can be inline or in a separate JSON file in the same directory

## Commands

- `npm run dev` — Start local dev server at localhost:4321
- `npm run build` — Build the site
- `npm run deploy` — Build and deploy to Cloudflare Pages
