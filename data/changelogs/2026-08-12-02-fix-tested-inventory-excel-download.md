---
date: "2026-08-12"
title: "Fix Tested Inventory Excel export crash"
repo: api-wms
product:
  - backend
additions: 27
deletions: 19
---

The Tested Inventory per-serial-number Excel download previously crashed with an ambiguous column error when the search filter was used. This has been resolved by qualifying all column references in the download query.

- **Search filter now works in exports:** Operators can use the search bar to filter by serial number, product code, vendor, location, or other fields, then download the filtered results to Excel without errors
- **No data changes required:** The fix is purely in the export query; all existing data and reports remain unaffected
