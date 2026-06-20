---
date: "2026-06-20"
title: "Add category filtering to XLHome Data WMS report and export"
repo: api-wms
product:
  - backend
additions: 55
deletions: 15
---

- **Filter by inventory type:** The Data WMS report now accepts category filters (WMS, Non-SAP, SP) so users can narrow down results to specific inventory classifications
- **Export respects active filters:** Downloading the report to Excel applies the same category filters, ensuring the exported data matches what is displayed on screen
