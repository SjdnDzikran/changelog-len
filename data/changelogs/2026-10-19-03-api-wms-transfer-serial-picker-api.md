---
date: "2026-10-19"
title: "Faster, filtered serial number lookups for transfers"
repo: api-wms
product:
  - backend
additions: 355
deletions: 2
---

New backend support for the redesigned serial number picker used in Network and BNPB stock transfers.

- **Filtered picking:** Warehouse staff can narrow available serial numbers by condition, completeness, power-on test result, and whether the serial has been captured or is still blank
- **Search everything:** One search box matches serial number, MAC address, product code, and remarks
- **Faster responses:** Only the requested page of serials is read from stock, so picking stays quick even in bins holding thousands of units
- **Warehouse-safe:** Results are always limited to the signed-in user's assigned warehouse and the exact material, storage location, bin, and unit selected
