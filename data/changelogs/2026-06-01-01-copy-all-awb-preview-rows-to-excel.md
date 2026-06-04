---
date: "2026-06-01"
title: "Copy all AWB preview rows to Excel across all pages"
repo: ui-wms
additions: 93
deletions: 18
product:
  - web
---

BL Outbound AWB preview now copies every matching row to the clipboard, not just the ones visible on the current page.

- **Full dataset capture:** The copy-to-Excel action now fetches every page of AWB preview results and combines them into a single clipboard entry, so nothing is missed even when there are hundreds of items spread across multiple pages
- **Row count confirmation:** A success message shows exactly how many rows were copied, so the user can verify the complete dataset was captured before pasting into the template
