---
date: "2026-08-08"
title: "Reduce mobile page gutters for more usable content width"
repo: ui-wms
product:
  - web
additions: 652
deletions: 80
---

All WMS pages on mobile devices now use narrower horizontal padding (8px instead of the previous wider gutters), giving tables, forms, and action buttons significantly more screen space on phones.

- **Consistent 8px mobile padding:** Every theme variant now uses the same compact mobile page padding, so content reaches closer to the screen edges on all phone sizes
- **Flattened page cards:** Presentation-only wrapper cards on routed pages are transparent on mobile, removing their background, border, shadow, and padding so content fills the available width
- **Compact action bars:** Refresh, Download, and create actions share a single compact row on phones instead of stacking vertically, and filter groups collapse behind a toggle button
- **Horizontally scrolling tabs:** Tab navigation on Tested Inventory and Occupancy pages scrolls within the viewport on phones instead of overflowing off-screen
