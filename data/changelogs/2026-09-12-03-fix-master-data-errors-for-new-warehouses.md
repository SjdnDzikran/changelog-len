---
date: "2026-09-12"
title: "Fix master data errors for new warehouses"
repo: api-wms
product:
  - backend
additions: 220
deletions: 9
---

Setting up a new warehouse no longer runs into dead ends on the master data screens.

- **New warehouse setup fixed:** The Referensi page previously failed with a "Terjadi Kesalahan" error on any warehouse that had no storage locations (SLOC) entered yet, including on the very screen used to add the first ones. It now shows an empty list as it should. Three warehouses were hitting this error in production, observed live two minutes before their first location was created.
- **Mobile transfer dropdowns fixed:** The SLOC and BIN pickers in the mobile Transfer wizard now show an empty list for warehouses without locations instead of raising an error.
- **Accurate error messages:** When a record genuinely does not exist, apps now display the real reason instead of a generic message blaming a missing address, making problems easier to understand and report.
