---
date: "2026-09-27"
title: "New Live Monitoring page with tracking maps, position reporting and photo evidence"
repo: erp-len-ui
product:
  - web
additions: 7237
deletions: 69
---

The web panel gets the front end of live monitoring: a single page to watch all moving shipments, plus the tools to report positions and attach evidence.

- **Live Monitoring page:** Four tabs (Pickups, Trips, Deliveries, and Awaiting Delivery) show what is moving right now, with auto-refreshing positions, vehicle icons for courier, truck, plane or ship, and attention highlights so staff can spot stalled pickups, late vendor cargo or overdue parcels at a glance
- **Live tracking map:** Bookings, shipments, manifests and courier runs each get a map card showing the route travelled, the remaining route, the latest reported position, and a progress bar with estimated time and distance to the destination. The map refreshes automatically while the shipment is active
- **Report position dialog:** Staff can report where a pickup, trip or delivery run is with a couple of taps: GPS or a map point is required, while a place name, note and up to 5 photos are optional. The dialog adapts its wording to the mode of transport (road, air cargo, sea cargo, vendor)
- **Photo and location evidence:** Approve, inbound and status-confirm dialogs now accept optional photos (with previews and a 5-photo limit) and a map pin, and the tracking timeline shows that evidence with thumbnails and the location source (device GPS or picked on the map)
- **Recipient pin dialog:** Staff can set or adjust the exact delivery point for a shipment, a saved customer address, or a pickup point, starting from the current estimate, with a clear explanation of how precise the existing pin is
- **Quick POD entry:** The bulk POD input table now has a per-row map point column, so back-office staff can record an exact delivery location for each parcel
