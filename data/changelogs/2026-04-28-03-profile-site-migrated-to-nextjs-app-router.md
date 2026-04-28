---
date: "2026-04-28"
title: "Profile website migrated from Vite to Next.js App Router"
repo: len-react
product:
  - web
---

The LEN Logistics public-facing profile website has been rewritten from Vite/React to Next.js App Router.

Key changes in this migration:

- **App Router architecture:** All page routes now live under the `app/` directory with server-rendered entrypoints, including the homepage, news, activity, clients, contact, and trace pages.
- **Shared layout system:** A single `app/layout.tsx` provides the site frame, with dedicated `site-navbar` and `site-footer` components inherited across all routes.
- **Component restructure:** Shared UI components, utilities, and data-fetching logic have been reorganized into `components/`, `lib/`, `types/`, and `hooks/` directories.
- **Updated tooling:** Build configuration, linting, and formatting have been migrated to the Next.js ecosystem, including `next.config.mjs`, PostCSS config, and Prettier setup.
- **News and activity pages:** New dedicated components for article cards, activity grids, and client page layouts with loading and not-found states.
- **CMS integration:** Content fetching has been updated to work within the Next.js server component model.

All existing surfaces (marketing, news, activity, contact, clients, and trace) are preserved under the new architecture.
