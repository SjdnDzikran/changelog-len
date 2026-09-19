---
date: "2026-09-19"
title: "Show loading feedback and continuous numbering on the app updates page"
repo: erp-len-ui
product:
  - web
additions: 62
deletions: 10
---

Improvements to the App Releases list on the app updates admin page, so it no longer looks empty or misnumbered while loading or paging.

- **Loading indicator:** The page now shows a spinner with a "Memuat data..." message while release data is being fetched, instead of briefly appearing empty
- **Continuous row numbers:** When the release list spans multiple pages, numbering continues from the previous page (e.g. page 2 starts at 11) instead of restarting at 1 on every page
