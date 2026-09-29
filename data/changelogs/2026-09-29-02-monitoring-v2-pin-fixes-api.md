---
date: "2026-09-29"
title: "Overhaul Live Monitoring with clickable routes and map place search"
repo: erp-len-api
product:
  - backend
additions: 1183
deletions: 91
---

Backend support for the Live Monitoring overhaul, plus two fixes for location data quality:

- **Last-known locations on the map:** Pickups, trips, and courier runs that have not reported a position are now placed at their last known point: the pickup location, the branch a trip departed from, or the courier's home branch. Vendor trips also show the destination area of the parcels they carry.
- **Place search for the location picker:** A new search service returns suggestions for businesses, streets, and areas across Indonesia as staff type in the map picker, sorted nearest first. Search results only guide the user; the point actually saved is always the one they click on the map.
- **Pin precision fix:** A calculation error was storing automatic delivery pins and area coordinates rounded to two decimal places, putting them up to about a kilometer off. New pins are stored at full precision, and a repair script re-computes the affected existing pins (about 1,900 shipments).
- **Pins follow destination edits:** When a shipment's destination village or address is changed, through any editing path including approved edit requests, its old pin is cleared so the map immediately reflects the new destination instead of pointing at the previous address.
