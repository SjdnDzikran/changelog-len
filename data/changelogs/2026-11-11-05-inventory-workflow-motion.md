---
date: "2026-11-11"
title: "Gentle motion across inventory workflows"
repo: ui-wms
product:
  - web
additions: 553
deletions: 28
---

Everyday stock screens now respond with subtle motion when data arrives, filters change, or stock levels move.

- **Softer results arrival:** Inventory detail, serial detail, rack inventory, outbound stock selection, and transfer serial selection dialogs fade results in briefly once loaded, instead of appearing abruptly; values still show immediately
- **Stock change highlight:** When a stock row's quantity changes after a refresh, the row is briefly outlined so staff can spot exactly what moved, while the new quantity, any edited values, and keyboard focus are preserved untouched
- **Filter chips that stay put:** Adding another filter keeps the existing filter chips in place and focus intact; removing one takes effect immediately while the remaining chips settle smoothly
- **Still-mode respected:** All of this motion switches itself off automatically for users whose device requests reduced motion, and mid-animation changes are cancelled cleanly
