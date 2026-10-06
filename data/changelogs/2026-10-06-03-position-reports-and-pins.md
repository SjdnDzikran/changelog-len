---
date: "2026-10-06"
title: "Couriers can report their position and save exact location pins"
repo: len-app
product:
  - mobile
additions: 3105
deletions: 232
---

Couriers on the road can now report where they are directly from the mobile app, and can save a precise GPS pin for a recipient or pickup address so future deliveries navigate to the right door.

- **Position reports from the field:** On an active delivery run, manifest, or pickup, couriers see a "Laporkan posisi" action that captures their current GPS, attaches an optional note and up to five photos, and posts the report straight to the shipment's timeline and Live Monitoring
- **Save exact recipient and pickup pins:** A "Simpan titik lokasi ini" action lets the courier record a door-level GPS point for the address they are standing at; future shipments to that address can navigate straight to the pin
- **Quality safeguards:** Pins are only accepted when GPS accuracy is 50 meters or better, the phone must be within Indonesia's bounds, and replacing an existing exact pin requires an explicit confirmation, keeping stored locations trustworthy
- **Reports are confirmed before sending:** Each position report shows the coordinates for a final check, and if the connection drops mid-send the courier is warned to verify the timeline before resending, avoiding duplicate reports
- **No background tracking:** Location is only captured at the moment the courier taps the action; nothing is tracked or reported continuously
