---
date: "2026-11-21"
title: "Redesign stock displays, ship downloads, and dialog polish across WMS UI (v5.20.0)"
repo: ui-wms
product:
  - web
additions: 1009
deletions: 529
---

WMS web app release 5.20.0 makes available stock the clear focal point across reports and inventory pages, upgrades every file download dialog to show real progress and confirmation, and polishes confirmation dialogs, dark mode, and sorting throughout.

- **Available stock now stands out:** Stock figures on Reporting > Data WMS (Network, XLHome, BNPB, BL), Inventory Management, Testing Report, and stock picker dialogs are redesigned so the usable "Available" quantity is the primary highlighted number, while Total WMS, Received, and Live counts become quiet secondary details. Available stock is color-coded: green when in stock, muted at zero, and red when negative, so staff can spot stock problems at a glance.
- **Better download experience:** All 53 file download dialogs across Delivery, Inbound, Outbound, and other modules now show a proper progress bar with percentage, a clear "File ready" confirmation before the file opens, and correct error handling, so downloads no longer look frozen or falsely succeed when the server returns an error.
- **Safer delete confirmations:** Confirmation popups for deleting users, groups, shipments, and photos now carry a clear warning icon, name the exact item being deleted, state that the action cannot be undone, and use a red confirm button instead of a generic blue one, reducing accidental deletions.
- **Fixed inventory column sorting:** Sorting columns on the Inventory pages (Network, XLHome, BNPB, BL) previously jumped users out of their current drill-down level; sorting now stays in place, and only columns that actually support sorting are clickable.
- **Groups page modernized:** The admin Groups page now matches the Users page look with a standardized header, working search button, empty state, item count, and page summary, plus full dark-mode support.
- **Dark mode fixes:** Table headers, scanner wizard cards, disabled cards, and camera toggle screens no longer render with white backgrounds or washed-out text in dark mode, and broken camera icon images and garbled text were replaced with proper icons.
