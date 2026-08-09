---
date: "2026-08-09"
title: "Replace the Tested Inventory serial entry form with an Excel-like grid"
repo: ui-wms
product:
  - web
additions: 1432
deletions: 315
---

The Per-S/N serial entry dialog in Tested Inventory Per Material has been rebuilt from a sequential scan-and-queue list into a spreadsheet-style grid where every slot in the batch is visible as a row from the moment the dialog opens.

**Excel-style paste:** Paste a column of serial numbers directly into the grid and they fill the rows in order. Multi-column pastes work too: paste serial numbers with their Vendor, Category, and Type columns and everything fills in one action. Operators can paste serials first and fill in metadata columns later.

**Row selection and bulk actions:** Shift-click to select a range, use select-all, then apply toolbar metadata to the selection, copy values from one row down to the rest, or clear metadata in bulk.

**Live breakdown preview:** The dialog footer shows how the current entries will be split (for example "2 breakdown (2 + 1)"), grouped by the same attributes the system uses when carving, so operators know the outcome before confirming.

**Per-serial locking:** Only serials that have been fully resolved are locked. Saved but unresolved serials stay editable and automatically move to a different breakdown group when their metadata changes, preventing operators from getting stuck with incorrect groupings.

**Unresolved value handling:** If a pasted or typed value does not match any entry in the master list, it stays visible with an amber highlight and blocks saving until it is corrected, rather than being silently substituted with a similar-sounding match.
