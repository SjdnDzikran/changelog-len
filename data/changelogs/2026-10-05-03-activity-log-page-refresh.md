---
date: "2026-10-05"
title: "Refreshed activity log page with faster loading and clearer filters"
repo: erp-len-ui
product:
  - web
additions: 378
deletions: 242
---

The activity log page gets a cleaner toolbar and no longer freezes while it loads.

- **Non-blocking refreshes:** The table stays visible behind a small loading spinner when filters change or more entries load, instead of the whole page going blank on every search
- **Clear filter toolbar:** Search, from/to date pickers, and the "search in old/new values" options sit in one tidy bar, styled consistently with the rest of the TMS and WMS pages
- **Detail while you wait:** Opening an entry shows a loading state inside the detail card until its full change record arrives, and shows a clear note when an action has no stored values
