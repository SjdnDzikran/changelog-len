---
date: "2026-08-16"
title: "Make dashboard counts match their destination lists"
repo: erp-len-ui
product:
  - web
additions: 70
deletions: 85
---

- **Dashboard cards show matching data:** Every clickable dashboard count (Total Booking, Total AWB, Total Manifest, Total DRS) now carries the correct status filter to the destination list, so the number on the card and the rows shown in the list always agree
- **Action items use combined statuses:** The "AWB Perlu Manifest" card now opens the AWB list filtered to both "CREATED" and "READY FOR MANIFEST", and "Manifest Sedang Berjalan" opens with "ON PROGRESS" and "DEPARTED" combined, matching exactly what the card counts
- **Date filters no longer skip the last day:** The list pages previously doubled up on end-of-day logic, causing records from the final day of a date range to be excluded. This is fixed so the selected period returns complete results
- **Partner dashboard links directly to documents:** Recent manifest and DRS rows on the partner dashboard now open the specific document detail page instead of the full list
- **Completion cards filtered to completed status:** Partner dashboard cards for "Manifest Selesai" and "DRS Selesai" now open their lists pre-filtered to "COMPLETED" status
- **Cleaner status distribution:** Status breakdowns now show the five largest statuses only, removing the catch-all "Lainnya" row that mixed unrelated statuses
