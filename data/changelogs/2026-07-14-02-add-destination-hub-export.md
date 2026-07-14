---
date: "2026-07-14"
title: "Add destination hub to shipment status export"
repo: erp-len-api
product:
  - backend
additions: 43
deletions: 24
---

- **New "Hub" column in the bulk Excel export:** The shipment status download now includes a Hub column right next to the destination field, showing the destination city or regency in clean title case. This makes it easier to identify the destination hub at a glance without parsing the full destination address.
