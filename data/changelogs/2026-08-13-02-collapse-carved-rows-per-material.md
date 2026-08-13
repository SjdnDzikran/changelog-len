---
date: "2026-08-13"
title: "Collapse duplicate Tested Inventory rows into expandable summaries with multi-member S/N editing"
repo: ui-wms
product:
  - web
additions: 836
deletions: 119
---

When a material is carved (split by hidden metadata like Site, WBS, or Tower), it creates multiple rows that look completely identical to the operator. The Per Material screen now folds those duplicate rows into a single summary row with combined totals, cleaning up the table and restoring the ability to edit all serial numbers in one dialog.

- **Collapsed rows:** Duplicate rows are automatically folded into one row with summed totals for quantity, good, broken, faulty, complete, on, and off counts. A small indicator shows how many metadata variants are hidden inside
- **Expand to inspect:** Click the chevron on a collapsed row to reveal each variant on its own sub-row, labelled with the exact metadata (Site, Site ID, WBS, Tower ID) that separates it from its siblings
- **Combined S/N dialog:** Opening the serial number editor from a collapsed row loads and merges serials from every member variant into one grid, so operators can paste, edit, and save all serials together instead of opening each variant separately
- **Partial failure reporting:** If a save or resolve only succeeds for some of the member rows (e.g., one row has locked stock), the dialog stays open and reports exactly how many succeeded and which one failed, instead of showing a generic error
- **Mixed status badge:** When member variants have different test statuses, the collapsed row shows a "Sebagian" (Partial) badge instead of a single misleading status
