---
date: "2026-10-03"
title: "Pin area locations manually on the map data"
repo: erp-len-api
product:
  - backend
additions: 39
deletions: 4
---

Administrators can now set exact coordinates for an area (kelurahan) directly in the area master data, instead of relying only on automatic geocoding.

- **Manual coordinates:** Latitude and longitude can be entered when creating or editing an area, and exports include them for review
- **Respects manual fixes:** A manually entered coordinate is marked as authoritative, so the automated pin-placement process will not overwrite it later; edits that leave the coordinates blank keep the existing values
