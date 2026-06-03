---
date: "2026-06-03"
title: "Fix BL Outbound item data accuracy for warehouse operations"
repo: api-wms
product:
  - backend
---

Sub-location detail and plan source values are now correctly saved when creating or editing outbound items, preventing "stock not found" errors during goods issue processing. Previously, the system was silently clearing the exact warehouse sub-location on every save, causing downstream validation to fail when operators tried to release goods.

- **Accurate sub-location tracking:** The exact storage location (`DetailLocationNo`) is now preserved from the form input instead of being erased, so goods issue validation can match the correct stock record
- **Consistent plan values:** Plan codes now come from the package ID, matching what is stored in inventory, which eliminates mismatches that blocked goods issue processing
- **Bulk upload fix:** Excel uploads automatically pull the sub-location from inventory records, so operators do not need to fill it in manually for each row
- **Edit protection:** Editing an existing item no longer overwrites the sub-location with a blank value, keeping the data intact across revisions
