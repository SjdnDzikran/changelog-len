---
date: "2026-10-03"
title: "Make the TMS dashboard easier to filter and read at a glance"
repo: erp-len-ui
product:
  - web
additions: 1158
deletions: 255
---

Filtering and exploring the TMS dashboard is smoother, and the map now shows where shipments are heading.

- **Searchable filters:** The customer, branch, province and service filters are now type-to-search dropdowns instead of plain lists, so picking from hundreds of customers takes seconds
- **Routes come alive:** Selecting a destination city draws arrows and a travelling dot along each route feeding it, making direction of flow obvious at a glance
- **Clear feedback while loading:** A spinner pill appears near the top of the page with a specific message such as "Memuat data Jakarta", the selected ranking row shows its own spinner ring, and picking a city previews it on the map immediately instead of waiting for numbers
- **No more scroll jump:** Changing a filter no longer snaps the page back to the top, and the selected city is named on the map itself with a one-click way to clear it
