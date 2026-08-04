---
date: "2026-08-04"
title: "Improve Tested Inventory draft management and export reliability"
repo: api-wms
product:
  - backend
additions: 201
deletions: 46
---

- **Draft snapshot:** Returns previously saved serial numbers for a detail row, so the UI can display saved entries when the draft dialog is reopened at partial progress.

- **Menunggu S/N filter:** Status filtering now correctly identifies items waiting for serial input (Menunggu S/N) in both the monitoring list and the exported report.

- **Metadata and resolve guards:** Operators can save mandatory pallet fields without adding new serials, and provisional items are blocked from resolution when Vendor, product category, or product type is still blank.

- **Export fixes:** Downloaded reports now include Kategori Produk Material, Type Product, and Pallet Remark columns. A crash caused by a missing column reference in the export query has also been fixed.
