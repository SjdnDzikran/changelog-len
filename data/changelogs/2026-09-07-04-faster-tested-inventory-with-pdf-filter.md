---
date: "2026-09-07"
title: "Faster tested inventory pages and a PDF evidence filter"
repo: ui-wms
product:
  - web
additions: 112
deletions: 10
---

The Tested Inventory Per S/N screen gains the new PDF filter and loads noticeably faster on large pages.

- **New PDF filter:** "Ada PDF" and "Belum Ada PDF" options sit next to the photo filter, and are included in the active filter chips and the reset control so they behave like every other filter.
- **Quicker page loads:** Rows that have no photos or PDFs no longer trigger a separate lookup for each one, which removes the loading lag when displaying 25, 50, 100, or 500 rows at once.
- **Consistent downloads:** The PDF selection travels with the report request, so the Excel export matches what the operator filtered on screen.
