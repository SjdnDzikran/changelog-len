---
date: "2026-10-15"
title: "Rebuild the transfer inventory picker"
repo: ui-wms
product:
  - web
  - backend
additions: 1109
deletions: 224
---

Choosing stock for an inventory transfer got the same overhaul as the other pickers: smarter filters, a compact layout, and noticeably faster loading.

- **Modern filter chips:** Plant, SLOC, Bin, Material and Unit of Measure filters replace the old scattered checkboxes. Active counts appear on each filter button, selections show as removable chips, and "Reset all" clears everything in one click
- **Compact five-column table:** The picker now shows just No, Material, Location, Stock and Actions. Material code and description, the full location hierarchy (SLOC, bin, plant), and available stock with On Test, Blocked, In Transit and Issued indicators are grouped into neat stacked cells
- **Faster stock lookups:** The picker now talks to dedicated fast endpoints that find transferable stock directly instead of scanning serial history, so results appear much sooner on large warehouses
- **Reliable searching:** Typed filter searches are debounced and outdated requests cancelled, with clear retry messages if a lookup fails
