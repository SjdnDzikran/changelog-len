---
date: "2026-11-03"
title: "Loading screens now preview the real page shape"
repo: len-attendance
product:
  - web
additions: 1986
deletions: 329
---

**Skeletons shaped like the page:** Every loading screen in the admin and employee apps now previews the actual layout it is about to show (tables with the right columns, forms, charts, detail drawers) instead of a couple of generic gray bars, so the page no longer jumps around when content arrives.

**Faster navigation between pages:** Clicking a sidebar link keeps the current page on screen until the next page's code is fully loaded, and the app quietly preloads the pages you are likely to open next while idle, so navigation feels instant instead of flashing a placeholder.

**A clear boot state:** While the app restores your session at startup, a clean loading spinner shows instead of an empty skeleton, and cached loading shapes are cleared when you sign out so the next user starts fresh.
