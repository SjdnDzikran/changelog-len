---
date: "2026-06-20"
title: "Fix blank Excel download for Non-SAP inventory data"
repo: api-wms
product:
  - backend
additions: 13
deletions: 5
---

The Excel export for the Data WMS report now correctly includes Non-SAP inventory items when a category filter is active. Previously, downloading the report produced an empty spreadsheet because the export query did not use the updated Non-SAP storage location mapping. The downloaded data now matches exactly what users see on screen.
