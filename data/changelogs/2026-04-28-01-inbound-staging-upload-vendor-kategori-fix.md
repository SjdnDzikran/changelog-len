---
date: "2026-04-28"
title: "Inbound staging upload now matches rows by Vendor and KategoriProdukMaterial"
repo: api-wms
product:
  - backend
---

Fixed a data integrity issue in the inbound staging upload service where the `UPDATE` statement used to link staging rows to `inbound_items` did not include `Vendor` and `KategoriProdukMaterial` in its `WHERE` clause.

Previously, when two logical items shared the same `SapMaterial`, `Plant`, and `Sloc` but differed in `KategoriProdukMaterial` (for example, LINKTEL vs AVAGO), the last processed group would overwrite all matching rows. This left the first group's inbound items orphaned, with missing `Category` and `DetailLocationNo` values, causing inventory anomalies during allocation.

The fix captures the original display values of `Vendor` and `KategoriProdukMaterial` before they are overwritten with CDS codes, then includes them in the `WHERE` clause so each staging row is matched to the correct inbound item.

Detection and remediation SQL scripts are also included for identifying and fixing any affected historical data.
