---
date: "2026-09-02"
title: "Count the full end date in reports, balances, and exports"
repo: erp-len-api
product:
  - backend
additions: 44
deletions: 11
---

Date-range filters were quietly cutting off the last day of any selected period. A report for August 1 to August 31 left out everything recorded on August 31, so balances and statistics looked lower than they really were.

- **Accurate period totals:** Petty cash income and expense balances now include every transaction recorded on the end date, so period figures match reality
- **Complete statistics:** Shipment and booking statistics, customer performance rankings, daily trend charts, and service performance reports all count the full final day of the chosen range
- **Correct exports:** Downloaded shipment status and proof-of-delivery files follow the same full-day range, so exported files no longer miss the last day's records
- **Manifest lists included:** Manifest lookups by date range also cover the entire end date, keeping on-screen lists consistent with exports
