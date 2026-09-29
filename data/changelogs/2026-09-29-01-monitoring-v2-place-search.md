---
date: "2026-09-29"
title: "Overhaul Live Monitoring with clickable routes and map place search"
repo: erp-len-ui
product:
  - web
additions: 2045
deletions: 286
---

The Live Monitoring page was rebuilt so dispatchers get a real operational picture instead of a static list:

- **Click any row to see its route:** Selecting a pickup, trip, or delivery run now draws its full route on the map, with origin, destination, and each parcel's drop point. Other vehicles dim, a "back to all data" button restores the overview, and a "Lacak detail" shortcut opens the full tracking timeline.
- **Vehicles without a position report still appear:** Items that have never reported a position now show at their last known point, such as the pickup location or the branch a trip left from, drawn as a dashed badge so staff can tell estimates from confirmed reports at a glance.
- **Place search in the map picker:** When placing a delivery pin, staff can now search for a building, company, street, or area by name. The picker even searches the recipient's name and address automatically and flies to the best match inside the address area, so pinning a destination usually takes one click instead of hunting on the map.
- **Clearer loading and clustered badges:** Skeleton loaders, per-tab spinners, and a thin progress bar replace blank flashes. Vehicles parked at the same spot (several trips from one branch) now share a single badge with a count instead of piling up.
- **Status history pin labels:** The map legend and popups now distinguish device GPS, courier GPS at handover, staff-placed points, and area estimates, so everyone reading the map knows how trustworthy each point is.
