---
date: "2026-07-15"
title: "Improve quality inspection dialogs with search, pagination, and Test Bin filtering"
repo: ui-wms
product:
  - web
additions: 114
deletions: 26
---

The quality inspection dialogs in Inventory Under Restriction now have their own independent search and pagination, and the Test Bin selector only shows valid locations.

- **Independent dialog pagination:** The Restricted Serial Number List dialog now has its own search box, page-size selector (10/25/50/100), and correctly numbered rows per page, fully independent from the main inventory restriction list. Empty search results display a "Belum ada data" message
- **Filtered Test Bin selection:** The "Send QI to Test Bin" dialog only shows storage locations and bins that are registered as Test Bins for the user's warehouse. Invalid options are removed entirely from the dropdowns, preventing accidental transfers to non-test locations
- **Empty-state guidance:** When no Test Bins are registered for the warehouse, the dialog displays a warning message in Bahasa Indonesia and disables the Send button, guiding the user to register Test Bins first
- **Clean dialog state:** The "Send QI to Test Bin" dialog now opens with all fields cleared, avoiding stale selections from a previous use
