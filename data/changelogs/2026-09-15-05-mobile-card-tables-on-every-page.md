---
date: "2026-09-15"
title: "Bring labeled card-style tables to every page on mobile"
repo: erp-len-ui
product:
  - web
additions: 266
deletions: 89
---

Until now only the AWB list rendered as readable stacked cards on phones; other pages still showed wide tables with bare values. Every table in the TMS web app now gets the same mobile card treatment automatically.

- **App-wide mobile cards:** All tables across the app now collapse into stacked cards on small screens, with no per-page setup needed
- **Field labels beside values:** Each card line shows the field name, taken from the table's own header, next to its value
- **Bulk selection stays usable:** Where a list supports select-all, that control remains visible above the cards
