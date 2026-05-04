---
date: "2026-05-04"
title: "AWB totals automatically calculated from item details"
repo: erp-len-api
product:
  - backend
---

- When creating or updating an AWB, the total item count, weight, volume, and heaviest item are now automatically recalculated from the item list.
- This prevents mismatches between the item breakdown and the AWB header totals, so shipment data stays consistent without manual adjustment.
