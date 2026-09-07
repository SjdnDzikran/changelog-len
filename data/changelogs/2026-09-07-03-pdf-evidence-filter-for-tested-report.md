---
date: "2026-09-07"
title: "Filter the tested inventory report by PDF evidence"
repo: api-wms
product:
  - backend
additions: 82
deletions: 6
---

The Tested Inventory Per S/N report can now be filtered by whether each serial has its PDF test report attached.

- **Two new filter options:** "Ada PDF" shows only serials that already carry a PDF test result, while "Belum Ada PDF" surfaces the ones still missing documentation, making follow-up easy to track down.
- **Combines with existing filters:** Works alongside the photo, status, condition, and warehouse location filters for precise lists.
- **Downloads agree with the screen:** The Excel export applies the same PDF filter, so a filtered view and its downloaded file can no longer show different rows.
