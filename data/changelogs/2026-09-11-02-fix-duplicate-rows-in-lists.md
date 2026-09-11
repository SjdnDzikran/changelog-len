---
date: "2026-09-11"
title: "Fix duplicate rows in warehouse and outbound item lists"
repo: api-wms
product:
  - backend
additions: 147
deletions: 49
---

Several list and report pages could show the same warehouse or outbound item more than once when different warehouses shared the same reference codes. Three fixes merged the same morning eliminate those duplicates and make status labels reflect each item's own warehouse.

- **Warehouse lists show each warehouse once:** Warehouse and warehouse user listings duplicated rows whenever a shared reference code existed under more than one warehouse. Every warehouse now appears exactly once, and page totals are accurate again.
- **Outbound item listings show each item once:** The outbound item pages and reports could repeat items under the same conditions. Each item now appears a single time.
- **Status labels come from the right warehouse:** An outbound item's status is now always read from its own warehouse's reference data, so items from one warehouse no longer display a status name that belongs to another warehouse.
- **Guarded against coming back:** Automated checks were added for every affected listing, so a future update cannot silently reintroduce duplicate rows.
