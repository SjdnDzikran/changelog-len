---
date: "2026-09-14"
title: "Show the correct item status for each warehouse in monitoring"
repo: api-wms
product:
  - backend
additions: 12
deletions: 2
---

Inventory monitoring pages now resolve item statuses against the item's own warehouse, fixing wrong or mismatched status information in multi-warehouse setups.

- **Warehouse-specific statuses:** When two warehouses use the same status code with different meanings, each item now shows the status label defined by its own warehouse instead of whichever one happened to match first
- **Accurate monitoring views:** Both the detailed and summarized tested-inventory monitoring pages now report consistent, correct statuses across all warehouses
