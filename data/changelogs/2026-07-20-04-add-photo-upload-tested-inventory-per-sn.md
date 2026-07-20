---
date: "2026-07-20"
title: "Restore photo upload, drag-and-drop, and deletion on Tested Inventory Per S/N page"
repo: ui-wms
product:
  - web
additions: 205
deletions: 12
---

Warehouse staff can now attach and manage photos for each serial number directly from the Tested Inventory report table, replacing the previous view-only image display.

- **Inline photo gallery:** Thumbnail previews appear inside the table row, each clickable to open a full-size lightbox viewer
- **Upload and drag-and-drop:** Photos can be added via the file picker or by dragging files onto the row, with a limit of 5 images per serial number (up to 10 MB each)
- **Delete with confirmation:** Each thumbnail has a delete button that opens a confirmation dialog before removing the photo
- **Status-locked editing:** Once a serial number reaches Tested status, uploads and deletions are disabled to protect finalized inspection records
