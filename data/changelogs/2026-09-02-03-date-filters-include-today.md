---
date: "2026-09-02"
title: "Stop date filters from dropping today's records"
repo: erp-len-ui
product:
  - web
additions: 61
deletions: 36
---

Date filters on list pages were hiding the current day's records because of a timezone mismatch between the browser and the server. The Today shortcut returned no results at all, and wider periods silently excluded everything recorded today.

- **Today works again:** Selecting Today now shows the current day's shipments, bookings, and transactions as expected
- **No more missing rows:** This week and this month shortcuts include everything recorded today, not just up to yesterday
- **Fixed across the system:** Shipment, booking, manifest, delivery running sheet, petty cash, and audit log pages all use the corrected filters
- **Lists match exports:** On-screen results and downloaded files now always cover the same date range
