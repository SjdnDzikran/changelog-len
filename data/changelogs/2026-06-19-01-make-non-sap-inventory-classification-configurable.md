---
date: "2026-06-19"
title: "Make Non-SAP inventory classification configurable instead of hardcoded"
repo: api-wms
product:
  - backend
additions: 111
deletions: 12
---

- **Dynamic SLOC mapping:** Inventory is no longer classified as "Non SAP" based on a single hardcoded value. The system now reads from a configurable mapping table (CgNo 22), so new Non-SAP storage locations can be added by admins without requiring any code changes.
- **Accurate dashboard totals:** The SAP, ZEQP, ZNWS, and Non-SAP inventory counts on the warehouse dashboard now reflect the current mapping configuration instead of a fixed filter, ensuring totals stay correct as new Non-SAP locations are added.
- **Flexible reporting:** Network Data WMS reports use the same dynamic mapping, so inventory classification in reports automatically stays in sync with admin-defined SLOC mappings.
