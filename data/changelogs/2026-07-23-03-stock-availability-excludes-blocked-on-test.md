---
date: "2026-07-23"
title: "Stop blocked and on-test stock from being outbounded"
repo: api-wms
product:
  - backend
additions: 20
deletions: 9
---

- **Accurate available quantity:** The outbound availability check now correctly subtracts Blocked and Quality Inspection quantities from the total, preventing items that are under test or restricted from being allocated to outbound orders.
- **Consistent across all flows:** The same formula (received minus in-transit, issued, blocked, and on-test) is applied to meter-based serial checks, standard outbound item entry, and the material stock query used by transfer and adjustment pickers.
