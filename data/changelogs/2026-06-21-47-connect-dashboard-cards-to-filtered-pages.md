---
date: "2026-06-21"
title: "Connect dashboard cards to filtered inventory and monitoring pages"
repo: ui-wms
product:
  - web
additions: 51
deletions: 12
---

- **Dashboard SIMCARD card now navigates:** Clicking the SIMCARD summary card on the dashboard opens the inventory channel page, automatically filtered to show only SIMCARD materials. Previously the card displayed counts but had no link to the underlying data.
- **Pre-filtered landing pages:** When arriving from a dashboard card, the inventory page reads the URL parameter and selects the correct material group filter without the user having to choose it manually.
- **Fixed multi-parameter navigation:** Dashboard cards that pass multiple filters (such as a material code plus a date range) now parse all parameters correctly. Previously, only the first parameter was recognized, causing the rest to be ignored.
- **Date range shortcuts for outbound monitoring:** The outbound monitoring page can now accept `week` or `range` parameters in the URL, allowing dashboard cards to jump directly to a specific week or today's data with the date picker pre-filled.
