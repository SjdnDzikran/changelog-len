---
date: "2026-07-17"
title: "Add shimmer loading animations to all dashboard charts and status cards"
repo: ui-wms
product:
  - web
additions: 555
deletions: 103
---

**Status card shimmers:** All number cards across the dashboard now display animated placeholder shapes while data loads. Users see a pulsing gray outline of the card instead of empty space or a sudden pop-in, giving a smoother, more professional feel during page load.

**Chart placeholder animations:** Pie charts now show a circular shimmer with a legend placeholder, and bar charts show animated placeholder columns with a Y-axis line. These cover all dashboard variants: Network, BL, BNPB, and XL Home.

**Faster error recovery:** If the data request fails, the shimmer disappears immediately and the dashboard shows its error or empty state without hanging on a loading animation.
