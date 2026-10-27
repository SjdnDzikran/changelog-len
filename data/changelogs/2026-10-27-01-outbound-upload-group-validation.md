---
date: "2026-10-27"
title: "Clearer Indonesian error messages for outbound Excel uploads"
repo: api-wms
product:
  - backend
additions: 540
deletions: 34
---

- **New validation for item groups:** If the ordered quantity (QtyOrder) of an item group does not match the sum of its delivery breakdown (QtyDelivery), the upload is rejected outright. The rejected Excel case where 1+1 rows looked balanced but created a wrong item is now caught before anything is saved.
- **Clearer, friendlier error messages:** Rejection messages are now written in full Indonesian sentences. They state which material, unit, WBS, plant, warehouse and bin group is affected, explain how to fill in QtyOrder correctly (only once per group, with the following rows left blank), and confirm that no data from the upload was saved.
- **Nothing slips through:** Even groups whose errors cancel each other out at document level are now rejected, so stock and serial number records are never created from a broken file.
