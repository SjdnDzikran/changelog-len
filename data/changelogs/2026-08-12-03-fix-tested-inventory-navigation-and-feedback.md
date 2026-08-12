---
date: "2026-08-12"
title: "Fix Tested Inventory navigation errors and show resolve feedback"
repo: ui-wms
product:
  - web
additions: 118
deletions: 38
---

Two navigation fixes and a feedback improvement for the Tested Inventory module. Clicking into a record from the Rekap or Per Material tabs previously showed a 404 page due to a routing issue from an earlier update. This has been corrected.

- **Detail pages load correctly again:** Clicking on an existing Tested Inventory record or creating a new one from the Rekap and Per Material tabs now navigates to the correct detail page
- **Clearer resolve feedback:** When resolving serial numbers, operators now see exactly how many were newly resolved and how many were skipped because they had already been tested, instead of a generic success message
