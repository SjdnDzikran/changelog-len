---
date: "2026-08-26"
title: "Add testing position report for warehouse inventory quality"
repo: api-wms
product:
  - backend
  - web
additions: 764
deletions: 5
---

- **New "Testing Report" page:** A dedicated report now sits alongside the existing Data WMS report in the Reporting menu, showing tested inventory grouped by warehouse location and material instead of listing each serial number individually
- **Quality at a glance:** Each row displays Good, Broken, and Faulty counts with Total Tested as the sum, so the warehouse team can immediately see the condition distribution of tested stock at every position
- **Snapshot view:** Like Data WMS, this is a point-in-time report with no date range filter, making it ideal for daily stock quality reviews
- **Search and export:** Filter by any column (location, material, vendor, category), browse with server-side pagination, and download the full result set to Excel with a progress indicator
