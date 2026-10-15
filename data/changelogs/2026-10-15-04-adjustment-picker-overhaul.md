---
date: "2026-10-15"
title: "Rebuild the adjustment inventory picker"
repo: ui-wms
product:
  - web
  - backend
additions: 1269
deletions: 447
---

Picking inventory for a stock adjustment was rebuilt around a clearer two-step flow, replacing three separate popups with one guided dialog.

- **Guided two-step selection:** Instead of juggling three overlapping popups, staff now pick a material and then its storage location in one window, with a visible "1. Material > 2. Lokasi" progress trail and a back button between steps
- **Full filtering on both steps:** Plant, SLOC, Bin, Material and Unit of Measure filters are available when choosing a material, and location filters appear on the second step. Selections show as removable chips with counts, plus a "Reset all" option
- **Selections survive paging and closing:** Chosen rows and edited quantities persist while paging, filtering, switching steps, or closing and reopening the dialog, so nothing is lost mid-adjustment
- **Clear loading feedback:** Clicking "Lokasi" shows a spinner on the button, skeleton rows while lists load, and contextual messages like "Memuat lokasi inventory...", with buttons disabled during transitions to prevent double-clicks
- **Zero-stock materials stay visible:** Materials with no remaining stock still appear in the list so they can be adjusted, matching how the adjustment process actually works
