---
date: "2026-10-18"
title: "Open stock detail dialogs for all warehouse inventories"
repo: api-wms
product:
  - backend
additions: 525
deletions: 2
---

The warehouse system now has a single, reliable way to look inside any inventory, covering Network, BNPB, and XL Home stock plus status history for all seven Channel products.

- **One detail view everywhere:** Clicking an inventory row opens the same detail experience for stock items, status history, and serial numbers, so staff no longer learn a different screen per warehouse type
- **Filter and search inside the dialog:** Narrow results by location, unit, vendor, status, or user, with searchable suggestions so large warehouses stay fast to browse
- **Nothing goes missing:** Items with zero stock and serial numbers with an unknown status still appear, so counts always match what is physically on the shelves
- **Faster pages:** Stock lists load page by page and serial numbers only load when opened, keeping the dialog responsive even with hundreds of rows
- **Warehouse safety:** Every read is automatically scoped to the signed-in user's warehouse, so one branch can never see another branch's stock
