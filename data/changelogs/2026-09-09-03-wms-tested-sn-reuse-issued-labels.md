---
date: "2026-09-09"
title: "Reuse serial number labels from issued records on tested inventory"
repo: api-wms
product:
  - backend
additions: 18
deletions: 4
---

Replacing the label on tested inventory no longer fails when history gets in the way.

- **Fewer false duplicate errors:** Staff relabeling tested inventory can now reuse a serial number even if the same label already exists on issued, already shipped records
- **Active stock still protected:** The duplicate check now looks only at live stock in the warehouse, so two items currently on the racks can never end up sharing one serial number
