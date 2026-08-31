---
date: "2026-08-31"
title: "Fix page navigation in reference data table"
repo: len-approval-ui
product:
  - web
additions: 150
deletions: 86
---

- **Pagination now works correctly:** Clicking "next page" in the reference data table (materials and storage locations) properly loads the next set of records from the server instead of staying on the current page
- **Status filter fixed:** Toggling the active/inactive dropdown now correctly applies the filter to the server query
- **No more loading flicker:** The table uses built-in lazy loading instead of a separate loading overlay, so page transitions feel smoother with the spinner appearing directly inside the table
