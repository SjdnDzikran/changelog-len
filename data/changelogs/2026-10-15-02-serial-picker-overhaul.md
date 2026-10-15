---
date: "2026-10-15"
title: "Rebuild the serial number inventory picker"
repo: ui-wms
product:
  - web
  - backend
additions: 1176
deletions: 211
---

The dialog for choosing stock when entering serial numbers was rebuilt to be faster, easier to filter, and far easier to read.

- **Modern filter chips:** Plant, SLOC, Bin, Material and Unit of Measure filters replace the old category checkboxes. Each group shows a count of active selections, applied filters appear as removable chips, and everything resets with one click
- **Compact table:** The picker went from eleven columns to six by merging material code and name, location details, and the three serial capacity figures into clean stacked cells, so the table fits comfortably without horizontal scrolling
- **Clear capacity at a glance:** Available serial slots are highlighted in green when there is room, and unknown capacity now shows a clear dash instead of a misleading zero
- **Faster, tidier searches:** Filter suggestions load from the warehouse's own data as you type, outdated results are cancelled automatically, and failed loads offer a retry instead of leaving stale rows selectable
