---
date: "2026-08-06"
title: "Correct tested-item counts on Inventory Under Restriction reports"
repo: api-wms
product:
  - backend
additions: 22
deletions: 12
---

- **Accurate Tested/Available/Blocked counts:** The restriction report previously pulled test status from copied fields that could be stale when stock was moved between bins. Now it reads directly from actual test records, so the progress numbers match reality.
- **Per-row status reflects real test outcomes:** Each serial number under restriction now shows the correct Tested/Pending and Available/Blocked status based on genuine quality inspection results, not inherited metadata from the source bin.
