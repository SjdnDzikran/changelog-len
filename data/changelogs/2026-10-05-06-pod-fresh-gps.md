---
date: "2026-10-05"
title: "Proof of delivery now records the exact GPS position of each stop"
repo: len-app
product:
  - mobile
additions: 571
deletions: 23
---

Delivery confirmation locations are now captured precisely, which makes the GPS evidence on each POD trustworthy.

- **Fresh GPS at every submit:** Each delivery confirmation takes a new GPS reading at the moment of submission instead of reusing a position cached from the previous stop, so two nearby deliveries no longer report the same coordinates
- **Location source is recorded:** Every POD now carries a marker showing the coordinates came from the device GPS, so back-office staff can trust the location evidence when reviewing deliveries or customer disputes
- **Clearer GPS problems:** When location is unavailable, the app now distinguishes GPS being switched off, permission denied, and timeouts, each with its own specific guidance for the driver
