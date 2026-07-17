---
date: "2026-07-17"
title: "Redesign Send QI to Test Bin confirmation dialog"
repo: ui-wms
product:
  - web
additions: 149
deletions: 10
---

**Cleaner item summary card:** The confirmation dialog for sending a Quality Inspection item to the test bin now shows a styled summary card instead of a plain text block. The material number and description are displayed prominently at the top, with the quantity shown in a green badge.

**Source location chips:** The origin location is displayed as labeled chips showing "SLOC" and "Bin" with an arrow between them, making it easy to verify the item is being moved from the correct location before confirming.

**Warning icon for missing test bins:** When no test bins are registered for the warehouse, the warning message now includes an alert icon for better visibility.
