---
date: "2026-08-05"
title: "Show testing progress and serial status for restricted inventory"
repo: api-wms
product:
  - backend
  - web
additions: 126
deletions: 50
---

- **Progress counter on each restriction row:** The Inventory Under Restriction list now shows how many serials have been tested out of the total (e.g., "On Test · 3/5 Tested"), giving warehouse managers a quick snapshot of inspection progress
- **"Test Complete" badge:** When all serials in a restriction have been tested, the row displays a green "Test Complete" badge instead of the yellow "On Test" indicator
- **Per-serial status and disposition columns:** The restricted serial number detail table now has Status (Pending or Tested) and Disposition (Available, Blocked, or Pending) columns with color-coded badges, replacing the previously hidden status field
- **Pagination fix:** The serial number list now correctly applies the user's selected page size when navigating between pages
