---
date: "2026-08-04"
title: "Redesign Tested Inventory pages with grouped layout and draft saving"
repo: ui-wms
product:
  - web
additions: 410
deletions: 40
---

- **Grouped Per Material table:** Rows are now organized under material batch headers and pallet remark sub-headers, with each group showing its batch reference and pallet count. Duplicate columns that previously repeated on every child row have been removed.

- **Pallet fields in draft dialog:** Operators fill in Vendor, Kategori Produk Material, and Type Product once per pallet group, with required dropdown validation and optional fields (Wbs, Tower ID, Site, Site ID).

- **Excel-style serial paste:** Multiple serial numbers can be pasted from a spreadsheet at once and are automatically split into individual entries, matching the workflow of the Manage Serial Number page.

- **Save as Draft for test results:** A new button in the Per S/N resolve dialog saves Condition, Completeness, Power On Test, and Remark without finalizing. Drafted values pre-fill when the operator returns to the dialog.
