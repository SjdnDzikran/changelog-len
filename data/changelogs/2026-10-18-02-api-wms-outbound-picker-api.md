---
date: "2026-10-18"
title: "Rebuild stock picking for outbound orders with filters"
repo: api-wms
product:
  - backend
additions: 525
deletions: 2
---

The back end behind picking stock for outbound shipments was rebuilt so every warehouse variant uses one consistent picker.

- **Pick stock in steps:** Staff choose a material, then see the exact locations and quantities available, with the same flow across Network, BNPB, XL Home, BL, and all seven Channel products
- **Filter chips:** Narrow the picker by location, unit, vendor, batch, or AWB number before choosing, instead of scrolling long stock lists
- **Trustworthy quantities:** The available stock shown always matches the warehouse's own numbers, including vendor-split stock for BNPB and box-level detail for BL shipments
- **Faster under load:** Counts and filter suggestions no longer load serial-number history, so the picker stays quick even for serialized inventory
