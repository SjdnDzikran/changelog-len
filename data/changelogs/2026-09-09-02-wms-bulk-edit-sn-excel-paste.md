---
date: "2026-09-09"
title: "Fix serial numbers in bulk with Excel copy-paste"
repo: ui-wms
product:
  - web
additions: 490
deletions: 111
---

A new Bulk Edit S/N workflow on Manage Serial Number lets staff correct label mismatches entirely on one screen, using the Excel sheets they already work with.

- **New "Bulk Edit S/N" button:** Select the rows to fix, click Bulk Edit S/N, and the existing table switches into editing mode showing only the selected rows with current and new S/N columns
- **Paste straight from Excel:** Copy a column of serial numbers from Excel and paste it into any "S/N baru" cell; values fill downward in order, and pasting mid-list anchors to that row
- **Per-row status badges:** Each row shows Belum diisi, Tidak berubah, or Siap disimpan so progress is visible at a glance, with a counter showing how many rows are selected
- **Warnings before saving:** Blank rows, duplicates, extra pasted values, and unchanged rows are flagged with counts, and Save stays disabled until every row is filled
- **Cleaner, responsive layout:** A guide banner explains the paste workflow, Cancel and Save sit in a fixed footer, and the controls stack neatly on smaller screens
