---
date: "2026-08-05"
title: "Add search to product metadata dropdowns in test form"
repo: ui-wms
product:
  - web
additions: 257
deletions: 30
---

- **Live search on all three metadata fields:** Vendor, Kategori Produk Material, and Type Product dropdowns in the Tested Inventory Per Material dialog now support typing to filter results, instead of requiring operators to scroll through the entire list
- **Alphabetical ordering:** All options across the three dropdowns are sorted A to Z by display name, making it faster to locate entries regardless of how many items the list contains
- **Consistent search control:** The existing typeahead control (already used elsewhere in WMS) replaces the plain select boxes, giving operators a familiar search-as-you-type experience
