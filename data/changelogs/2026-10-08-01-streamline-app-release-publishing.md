---
date: "2026-10-08"
title: "Streamline app release publishing panel"
repo: erp-len-ui
product:
  - web
additions: 232
deletions: 145
---

- **Upload as a pop-up form:** Publishing a new app release now happens in a focused dialog (version, title, release notes, APK file) instead of a panel that pushed the page content down, and the button is reachable from the latest-release card, the empty state, and the table toolbar.
- **Clearer loading feedback:** The releases table shows a spinner overlay while data loads, and the refresh button spins and locks while reloading so it cannot be double-clicked.
- **Tidier table layout:** Download and delete actions are combined into a single "Aksi" column with hover tooltips, freeing a column for release information.
