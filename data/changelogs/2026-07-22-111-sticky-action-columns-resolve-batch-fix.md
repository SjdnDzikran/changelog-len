---
date: "2026-07-22"
title: "Pin action columns while scrolling and fix resolve button visibility"
repo: ui-wms
product:
  - web
additions: 64
deletions: 14
---

- **Sticky action columns:** The Aksi (Action) column now stays pinned to the right edge of the table while scrolling horizontally on the Tested Inventory Per S/N list, Rekap list, Shipment Form list, and Shipment Form detail outbound picker. This keeps action buttons always reachable without scrolling back to the right
- **Resolve Batch on Draft batches:** The Resolve Batch button on the Tested Inventory Detail page is now correctly shown for Draft batches that already have uploaded serial numbers. Previously the button was hidden because the visibility check required a status higher than Draft, even though the backend allows resolving Draft batches
