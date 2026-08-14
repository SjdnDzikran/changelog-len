---
date: "2026-08-14"
title: "Add storage location filter and column to Per S/N report"
repo: ui-wms
product:
  - backend
  - web
additions: 616
deletions: 36
---

**New SLOC column in the report table:** The Per S/N report now displays a storage location column directly in the grid. Previously, the location was only visible after exporting to Excel, so staff had to download the entire report just to check which warehouse location a serial was stored in. The column reads the same data field the export uses, so the table and the file always agree.

**Filter by storage location:** A new "Filter By SLOC" block appears alongside the existing status, condition, completeness, and photo filters. The options are loaded from the warehouse location master data, so they stay in sync whenever locations are added or renamed. If the master data cannot be loaded, the grid still works normally and the filter shows a "Daftar SLOC tidak tersedia" message instead of an empty box.

**Excel exports match the on-screen filters:** The download button now sends every active filter to the server, including the new storage location filter and the photo presence filter that was previously only applied on-screen. Before this fix, a user could filter the report to "Belum Ada Foto," click Download, and receive a file containing the exact rows they had just filtered away.
