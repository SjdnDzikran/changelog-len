---
date: "2026-08-27"
title: "Fix date range filters to include the selected end date"
repo: erp-len-api
product:
  - backend
additions: 27
deletions: 10
---

**Inclusive end dates:** Date range filters across delivery reports, inventory documents, inventory movements, forecasted inventory, POD statistics, and notifications now correctly include records that fall on the selected end date. Previously, selecting "August 1 to August 27" would miss any record on August 27 itself.

**Consistent behavior:** All six affected filters (search and export) have been updated to use the same boundary logic, so reports and on-screen results always match.
