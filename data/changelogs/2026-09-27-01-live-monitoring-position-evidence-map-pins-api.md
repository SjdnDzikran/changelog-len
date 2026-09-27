---
date: "2026-09-27"
title: "Live shipment monitoring with position reports, map pins and photo evidence"
repo: erp-len-api
product:
  - backend
additions: 7604
deletions: 34
---

The system can now show where every shipment actually is, in real time, instead of only listing status changes.

- **Live Monitoring dashboard:** A new monitoring view shows all active pickups, line-haul trips (own trucks, air cargo, sea cargo, and vendor handovers) and courier delivery runs in one place, with summary counts, the latest reported position of each vehicle, and flags for items that need attention (for example a pickup running late or a parcel waiting too long)
- **Position reports with evidence:** Drivers and couriers can report where the goods are right now from the field, with an optional location note and up to 5 photos. One report updates every shipment on that vehicle at once, so a truck checkpoint or a courier stop appears on all the AWBs being carried
- **Automatic map pins:** Every shipment gets a destination pin automatically: the exact point already known for that customer address, otherwise the centre of the destination kelurahan shown as an area circle. Staff or couriers then place the exact point, and the system remembers it so future shipments to the same address start accurate. Pickup points work the same way for sender addresses
- **Real road routes on the tracking map:** Tracking maps draw the actual road route between checkpoints, with estimated distance and travel time for the remaining trip, instead of a straight line. Flights and sea voyages are shown as direct lines between reported points
- **Fast lookup:** Typing any booking, AWB, manifest or DRS number finds where that shipment is right now and opens it on the right monitoring list
- **Fix:** An "ALL CUSTOMERS" assignment now correctly takes priority over an outdated customer claim when scoping bookings and shipments for TMS operators
