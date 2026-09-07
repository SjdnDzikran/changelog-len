---
date: "2026-09-07"
title: "Make newest-first sorting reliable in the tested inventory report"
repo: api-wms
product:
  - backend
additions: 121
deletions: 19
---

The Tested Inventory Per S/N report now sorts by "most recently changed" in a stable, predictable way.

- **No more shuffling or duplicates:** Serials that share the same timestamp no longer swap places or appear twice when paging through the report.
- **Evidence edits count as activity:** Uploading, deleting, or copying photos and test reports refreshes the serial's last-modified time, so recently worked-on serials rise to the top where staff expect to find them.
- **Consistent column sorting:** Sorting by serial number, test date, or other columns behaves the same on screen and across pages.
