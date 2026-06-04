---
date: "2026-05-31"
title: "Consolidate Pickup Domestic into a single unified form"
repo: len-approval-api
additions: 1299
deletions: 2650
product:
  - backend
  - web
---

**One form instead of two:** Pickup Domestic Inbound and Pickup Domestic Outbound have been merged into a single "Pickup Domestic Delivery" form. Users no longer need to choose between two separate form types when creating a domestic pickup request.

**Combined item fields:** The unified form now includes all relevant fields from both previous forms in a single item table, including BL Number, Material Doc, AWB, transport mode (Moda), origin branch, dimensions (Weight, Length, Height, Width), and packing cost.

**ERP integration preserved:** AWB numbers from Pickup Domestic Delivery forms are still automatically created in the TMS system after the data entry approval step, keeping the downstream workflow intact.
