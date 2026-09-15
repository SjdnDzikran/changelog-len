---
date: "2026-09-15"
title: "Keep storage location records tied to the right warehouse"
repo: api-wms
product:
  - backend
additions: 211
deletions: 28
---

Several warehouses use the same storage location codes (N3, N4 and N31 exist in more than one warehouse). Location lookups matched by code only, so records could be filed under another warehouse's location without any error.

- **No more duplicate inventory records:** Uploading goods whose storage code exists in two warehouses could create two inventory records from a single row; matching is now limited to the uploading warehouse, and a scan of existing upload data found about 18,600 cases where this could have happened
- **Correct warehouse on manual entry:** Keying items in one by one with a shared code like N3 silently filed the item under another warehouse's location; each warehouse now resolves its own codes
- **Covers every entry path:** Standard inbound uploads, XL Home inbound and outbound uploads, tested-inventory uploads, and one-by-one entry all use the corrected matching
- **Guarded by automated checks:** New regression checks ensure the warehouse scoping cannot quietly disappear from these flows in future updates
