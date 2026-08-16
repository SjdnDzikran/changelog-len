---
date: "2026-08-16"
title: "Support combined status filters and fix date handling in list searches"
repo: erp-len-api
product:
  - backend
additions: 92
deletions: 56
---

- **Multi-status filtering:** Booking, AWB, Manifest, and DRS list searches now accept comma-separated status values, so a dashboard card that counts items across two statuses (e.g., "CREATED" and "READY FOR MANIFEST") can pass the exact same filter to the list and show matching results
- **Accurate end dates:** Search end dates are now handled consistently on the server. Previously, a timestamp-bearing client request could push the search window into the following day, causing records from the wrong day to appear
- **Consistent customer visibility:** Booking search now uses the same customer scope resolver as the rest of TMS, so operators and shipment status viewers see the same data on the dashboard and in the booking list
