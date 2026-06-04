---
date: "2026-06-01"
title: "Search and filter personal activity logs by keyword and date"
repo: erp-len-api
additions: 72
deletions: 19
product:
  - backend
---

The personal activity log page now supports keyword search, date range filtering, and server-side pagination.

- **Keyword search:** Users can type a keyword to filter logs by table name and change type. Optionally, the search can also look inside old and new values to find specific field changes
- **Date range filters:** A start and end date narrows results to a specific period, making it easy to find changes from a particular day or week
- **Server-side pagination:** Logs load page by page instead of all at once, keeping the page responsive regardless of how many entries exist
