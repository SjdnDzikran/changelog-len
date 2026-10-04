---
date: "2026-10-04"
title: "Exact recipient pins now drive delivery maps"
repo: erp-len-api
product:
  - backend
additions: 561
deletions: 47
---

Exact recipient locations are now used for delivery tracking whenever a parcel only had an approximate area estimate, both on tracking pages and on courier trip maps.

- **Backfilled 10,028 parcels:** A one-time repair filled in missing or approximate recipient pins for 10,028 AWBs in the production WMS database, 9,520 of which had no exact pin at all. Every updated record was verified afterwards with zero mismatches, and an encrypted backup was saved for rollback.
- **Exact beats estimate:** When a shipment has no exact pin, the system now looks up a saved recipient address that matches the same customer, destination village, and full address text, and uses that saved pin instead of falling back to the village-wide estimate.
- **Ambiguous matches are refused:** If the saved addresses for the same address text point to different coordinates, the match is skipped rather than guessing, so tracking never shows a pin for the wrong house.
- **Faster trip maps:** Vendor and DRS trip maps now resolve saved pins in batches of up to 500 parcels instead of one lookup per parcel, keeping large delivery runs responsive.
- **Safety rails:** The repair tool previews before applying, enforces a row cap, takes an encrypted backup before committing, and the village estimate remains as a fallback when no reliable exact pin exists.
