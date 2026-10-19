---
date: "2026-10-19"
title: "Rebuild the serial number picker for stock transfers"
repo: ui-wms
product:
  - web
additions: 634
deletions: 432
---

The "Pilih S/N" dialog for Network and BNPB transfers has been rebuilt into one shared, much more capable picker.

- **Source context up front:** The dialog header shows the source material, plant, storage location, bin, and exactly how many units are available before picking
- **Filter chips:** Searchable Condition, Completeness, Power-on test, and filled/blank serial filters, with removable applied chips and a Reset filter button
- **Selections that survive:** Chosen serials stay selected while paging, searching, filtering, and reopening the dialog, and stale choices clear automatically when a different source stock is selected
- **Bulk select:** Pick or release the entire visible page in one pass, with a "Hapus pilihan" button to clear everything
- **Readable details:** Serial, MAC, product code, test results, and remarks are combined into compact columns, with phone-friendly cards and proper Light/Dark theme colors
