---
date: "2026-10-06"
title: "Courier navigation now uses confirmed location pins"
repo: len-app
product:
  - mobile
additions: 755
deletions: 98
---

When a courier taps Google Maps on a shipment, the app now checks first whether an exact door location is already on record and navigates to that pin instead of searching the address text.

- **Exact pins take priority:** If a confirmed pin exists (set by an operator, captured from a courier's GPS, or recorded at a previous delivery), Maps opens directly at that door position rather than a generic address search
- **Area estimates are clearly labelled:** When only a rough neighborhood-level area is known, the app explains it is an estimate (with its approximate radius) and asks for confirmation before opening Maps, so couriers know not to trust it as a door position
- **Why it matters:** Drivers are directed to the actual recipient door instead of a street-level search result, cutting wasted trips and calls for hard-to-find addresses
- **Graceful fallback:** If the pin lookup fails or the courier lacks access, the app quietly falls back to the normal address search so navigation always works
