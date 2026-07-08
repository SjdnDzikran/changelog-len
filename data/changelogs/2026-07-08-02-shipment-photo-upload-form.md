---
date: "2026-07-08"
title: "Add photo upload and viewer to the shipment form"
repo: ui-wms
product:
  - web
additions: 902
deletions: 7
---

A new "Foto Pengiriman" section on the Shipment Form lets staff attach, preview, and manage photos for each delivery. The Goods Delivery Note preview updates automatically when photos change, so staff can verify the attachment page before printing.

- **"Foto Pengiriman" card:** A drag-and-drop upload area on the Shipment Form where staff can add up to 10 photos per shipment. Thumbnails display in a grid with a badge showing the count used out of the maximum
- **Full-screen image viewer:** Clicking any thumbnail opens an interactive viewer with zoom (mouse wheel or buttons), pan, rotate, and keyboard shortcuts for inspecting photos in detail
- **Instant document preview:** The Goods Delivery Note PDF preview refreshes automatically after photos are uploaded or deleted, showing the latest "Lampiran" page without a manual page reload
- **Smooth save experience:** The photo panel no longer shows an indefinite loading spinner after saving the shipment form, making the upload area immediately usable
