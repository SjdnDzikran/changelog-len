---
date: "2026-07-23"
title: "Attach evidence photos and choose stock outcome when resolving tested inventory"
repo: ui-wms
product:
  - web
additions: 511
deletions: 63
---

- **Resolve photos:** Evidence photos can now be uploaded directly in the resolve dialog, with preview thumbnails, drag-and-drop support, and the existing 5-photo, 10 MB per-photo limits.
- **Separate resolve buttons:** Two clear actions, "Semua Available" and "Semua ke Blocked," replace the single resolve button so operators can explicitly choose the final stock status for the whole batch.
- **Per-row stock outcome:** A new "Hasil Stok" dropdown appears on each serial number row, allowing mixed outcomes in one submission. A live summary bar shows the count of Available and Blocked items with color-coded badges.
- **"Resolve Pilihan" button:** When a mix of Available and Blocked items is selected, a dedicated button appears to submit the mixed resolve with a clear progress message showing how many items go to each status.
