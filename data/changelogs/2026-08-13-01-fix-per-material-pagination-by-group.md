---
date: "2026-08-13"
title: "Fix Per Material inventory pagination to keep split materials together on one page"
repo: api-wms
product:
  - backend
additions: 146
deletions: 4
---

When a material is carved into multiple rows by hidden metadata (Site, WBS, Tower), those rows look identical in the monitoring table but are stored separately. The old pagination treated each row independently, which could split a group across two pages. The result: operators saw partial totals on one page and incomplete serial number data when opening a dialog.

- **Group-based pagination:** The server now counts and pages by material group instead of individual rows, so every carved variant of the same material always lands on the same page
- **Accurate totals:** Page counts and the "last page" now reflect the actual number of material groups, not the raw row count, preventing empty or missing pages
- **No data changes:** The rows returned per page are exactly the same fields as before. Only the page boundaries shifted to respect group boundaries
