# HMCS Canada Project Documentation

This document serves as the project’s working technical and content reference. It should be updated whenever major design, architecture, content, or deployment decisions are made.

## 1. Project Overview

HMCS Canada is a Next.js marketing and research website for the HMCS Canada expedition. The project rebuild focuses on a clean editorial presentation, heritage storytelling, research sections, and a scalable route structure that preserves the original site’s content while using a modern design system.

Current implementation goal:
- preserve the legacy site’s messaging and navigation structure
- modernize the front-end architecture using App Router
- keep the site production-ready with reusable components and typed content data
- use placeholder media where final assets are not yet available

## 2. Stack and Tooling

- Next.js 16.3.2
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint
- App Router architecture

## 3. Project Structure

```text
src/
  app/
    about/
    blogs/
    contact/
    donation/
    expedition-diving/
    historical-research/
    history-of-the-hmcs-canada/
    marine-archaeology/
    marine-science/
    our-team/
    partners/
    projects/
    support/
    team/
    globals.css
    layout.tsx
    page.tsx
    sitemap.ts
  components/
    common/
    home/
    layout/
    research/
    team/
  data/
    navigation.ts
    research.ts
    team.ts
  styles/
    tokens.css
public/
  images/
  team/
```

## 4. Design System

The project uses a shared token file to define spacing, colors, borders, shadows, and layout width.

Key values:
- max content width: 1280px
- editorial accent colors in warm neutrals and deep navy
- serif headings with a heritage feel
- sans-serif body copy for readability

Typography:
- Titles: Libre Baskerville
- Paragraphs/UI: Rubik

Shared design tokens are defined in:
- [src/styles/tokens.css](../src/styles/tokens.css)

Global typography and font import are defined in:
- [src/app/globals.css](../src/app/globals.css)

## 5. Content and Data Pattern

The site keeps reusable copy and navigation in typed data files rather than embedding content in components.

Primary content sources:
- [src/data/navigation.ts](../src/data/navigation.ts)
- [src/data/research.ts](../src/data/research.ts)
- [src/data/team.ts](../src/data/team.ts)

This keeps routes, nav labels, research categories, and team metadata easy to update without major layout rewrites.

## 6. Route Architecture

The site uses app-based routing with a route-per-page structure. The current route map includes:
- / (homepage)
- /about
- /history-of-the-hmcs-canada
- /marine-archaeology
- /marine-science
- /historical-research
- /expedition-diving
- /support
- /donation
- /team
- /our-team
- /partners
- /projects
- /blogs
- /contact

## 7. Homepage Structure

The main homepage is built as a series of reusable editorial sections:
- Hero
- Intro / heritage section
- Research areas
- Expedition story section
- Video / media section
- Team preview
- CTA / support section

## 8. Placeholder Asset Policy

The project intentionally uses placeholder visuals until final assets are provided by the client or team.

Current rule:
- preserve production-ready structure
- avoid inventing final content that is not yet approved
- swap placeholders when official images, logos, or photography are delivered

## 9. Development Commands

Run the app locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## 10. Current Status

The project foundation is complete and production-ready in structure. The remaining work is primarily final content alignment, imagery replacement, and refinement against the original site.

## 11. Documentation Rule

This file must be kept current as the project evolves. Any time a significant change is made to the content model, route structure, design tokens, or implementation plan, update this document in the same pass.
