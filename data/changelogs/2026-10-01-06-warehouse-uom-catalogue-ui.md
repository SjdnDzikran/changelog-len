---
date: "2026-10-01"
title: "Unit dropdowns and filters now follow each warehouse's catalogue"
repo: ui-wms
product:
  - web
additions: 354
deletions: 508
---

The WMS web pages previously showed the same hardcoded unit list everywhere, regardless of warehouse. Dropdowns and filters on all inventory pages now load each warehouse's own unit catalogue, matching what the system actually accepts.

- **Correct options per warehouse:** Unit dropdowns on inbound, outbound, adjustment, transfer, serial number and tested inventory pages show exactly the units configured for the signed-in operator's warehouse
- **Filters follow too:** The unit filter chips on inventory pages come from the same catalogue, so users are never offered a filter that matches nothing
- **Guided administration:** The reference panel shows a clear warning on the unit catalogue explaining that codes cannot be deleted or renamed and why new measured units need review first
- **Clear failures:** If the catalogue cannot be loaded, pages show a retryable error message rather than quietly falling back to the old fixed list
