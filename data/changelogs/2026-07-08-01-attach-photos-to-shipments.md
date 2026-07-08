---
date: "2026-07-08"
title: "Attach photos to shipment records and include them in delivery documents"
repo: api-wms
product:
  - backend
additions: 544
deletions: 5
---

Staff can now attach up to 10 photos to each shipment record in the WMS. Photos are automatically compressed and stored in cloud storage with short-lived, read-only links for safe viewing.

- **Photo upload per shipment:** Staff can attach photos to any recorded shipment, supporting common image formats (JPEG, PNG, WebP, HEIC) with automatic compression for efficient storage
- **Delivery document appendix:** When a shipment has attached photos, the Goods Delivery Note PDF automatically appends a "Lampiran" (attachment) page in landscape orientation, displaying them in a two-per-row grid with numbered labels
- **Pagination fix:** Shipments with four or more photos now generate the PDF correctly, preventing a layout error that previously caused the entire document to fail
- **Secure storage and cleanup:** Photos are stored in cloud blob storage with short-lived read-only links. Deleting a photo removes both the file and its record
