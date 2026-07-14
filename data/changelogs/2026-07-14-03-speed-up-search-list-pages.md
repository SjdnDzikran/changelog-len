---
date: "2026-07-14"
title: "Speed up search across all major list pages"
repo: erp-len-api
product:
  - backend
additions: 1237
deletions: 507
---

- **Faster AWB search on Manage AWB and Shipment Status:** Searches now filter the shipment database directly before joining 18 related tables, so results appear noticeably faster, especially when filtering by status, date range, or customer.
- **Faster Booking, Manifest, and DRS list pages:** The same filter-first approach has been applied to booking, manifest, and delivery run sheet pages. Dropdown filters (status, date range, driver, vehicle, branch) now narrow down the base data before the system assembles the full row details.
- **Faster Warehouse searches:** Inventory, Inventory Documents, and Inventory Movements all benefit from the same optimization. Status history, which previously required a separate database query for every row, is now loaded in a single batch, cutting response times on pages with many entries.
- **New database indexes:** Supporting indexes have been created on all key search columns across AWB, Booking, Manifest, DRS, Inventory, Inventory Documents, and Inventory Movements to keep response times fast as data grows.
