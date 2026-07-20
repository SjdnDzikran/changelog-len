---
date: "2026-07-20"
title: "Show On Test status badge and Plant Transfer column in inventory management"
repo: ui-wms
product:
  - web
additions: 27
deletions: 7
---

Two improvements to the Inventory Under Restriction and Transfer History pages give warehouse staff clearer visibility into item movement status.

- **On Test badge:** Items that have already been sent to a Test Bin now display an "On Test" badge, and the Send to Test action is hidden to prevent duplicate attempts
- **Mandatory field validation:** The Send to Test button stays disabled until all required selections (destination location, bin, and test record) are filled, preventing incomplete submissions
- **Plant Transfer column:** Transfer History now includes a column showing source and destination Plant names, making it easy to see cross-plant movements at a glance
