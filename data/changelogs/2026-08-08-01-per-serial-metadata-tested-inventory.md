---
date: "2026-08-08"
title: "Per-serial metadata mode for Tested Inventory quality inspection"
repo: api-wms
product:
  - backend
additions: 1231
deletions: 2
---

Each serial number in a new Inbound QI group can now carry its own vendor, material category, and product type instead of sharing one set of metadata across the entire group. This means a single shipment containing mixed suppliers or product types can be recorded accurately at the individual serial level.

- **Individual serial metadata:** Operators assign vendor, material category, product type, WBS element, tower ID, site, and site ID to each serial number during the Tested Inventory workflow, instead of filling one shared form for the whole group
- **Automatic breakdown finalization:** Once all serials are identified and their metadata is complete, the system splits the single provisional parent into separate records for each distinct metadata combination, recalculating stock quantities and monetary values atomically so totals never drift
- **Mandatory for new groups:** Fresh Inbound QI groups that have not yet identified any serial must use the new per-serial mode, preventing data inconsistencies from the old single-metadata approach
