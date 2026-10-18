---
date: "2026-10-18"
title: "Rebuild stock picker for outbound with filters and safety checks"
repo: ui-wms
product:
  - web
additions: 1042
deletions: 1779
---

The screen staff use to pick inventory when creating outbound orders was rebuilt into a single modern picker for every warehouse type.

- **Guided picking:** Choose material, then location and quantity, in clear steps that work identically across Network, BNPB, XL Home, BL, and all seven Channel products
- **Filter chips:** Searchable filters narrow the stock list before choosing, and selected items stay saved when you page, filter, or step back
- **Fewer mistakes:** Quantities are checked against available stock before saving, unavailable stock cannot be picked, and duplicate saves are blocked
- **BL helpers kept:** Bulk copy to Excel, select-a-page, and per-box weight and dimension entry all carry over into the new picker
- **Phone friendly:** Pagination and buttons are sized for touch, in both Light and Dark themes
