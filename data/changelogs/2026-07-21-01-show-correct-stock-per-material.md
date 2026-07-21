---
date: "2026-07-21"
title: "Show correct stock quantity on Per Material inventory report"
repo: api-wms
product:
  - backend
additions: 18
deletions: 2
---

The "Jumlah" (total quantity) column on the Per Material tested inventory report now includes items sitting in Quality Inspection and Blocked status, instead of only counting regular Quantity stock.

- **Accurate totals for Recorded items:** Materials in "Recorded" status previously showed 0 because their stock was held in Quality Inspection, not the Quantity bucket. The column now sums all three stock sources for a correct total
- **Consistent with Rekap report:** This mirrors the same fix already applied to the Rekap (summary) view, so both pages now report identical figures