---
date: "2026-06-22"
title: "Fix WMS dashboard inventory card links and combined pagination"
repo: ui-wms
product:
  - web
additions: 467
deletions: 244
---

Dashboard inventory summary cards now correctly navigate to the inventory channel page with the right filters applied, and combined material group views paginate properly without showing duplicate or missing rows.

- **Dashboard cards link with correct filters:** Clicking "Total SP" opens the inventory page showing both XL and AXIS SP products. "Total Voucher" shows both XL WG and AIGO vouchers. "Total SIMCARD" shows both AXIS and XL SIM cards. Previously, some cards had broken or incomplete filter links.
- **Combined inventory pagination fixed:** When viewing combined material groups (e.g., SIMCARD AXIS + SIMCARD XL), pagination now fetches all matching records from both sources first, merges them, sorts them, and then slices for the current page. Before this fix, each source was paginated independently, causing rows to be duplicated or skipped when changing pages.
- **Card labels corrected:** Dashboard card labels were updated from "XL WIP" and "AXIS WIP" to "SIMCARD XL" and "SIMCARD AXIS" to accurately reflect the inventory categories they represent.
- **Week date range alignment fixed:** All monitoring pages now use a shared date-range parser that adds one day to the week end date, matching the backend SQL `BETWEEN` behavior. Previously, reports for a given week could miss the last day of data.
