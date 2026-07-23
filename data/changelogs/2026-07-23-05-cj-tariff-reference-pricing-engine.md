---
date: "2026-07-23"
title: "Add CJ reference pricing calculator for normal and charter shipments"
repo: len-approval-api
product:
  - backend
additions: 6583
deletions: 1
---

- **Price calculation:** A new pricing endpoint calculates the reference cost for any origin-destination pair across three transport modes (Darat, Laut, Udara) using per-kg rates, with volumetric weight conversion and minimum weight rules.
- **Charter flat rates:** For charter shipments, the calculator returns a flat rate based on vehicle type (CDE, CDD, Fuso, Wingbox) instead of a per-kg price.
- **Transparent breakdown:** Every calculation returns the actual weight, volumetric weight, chargeable weight, and the formula used, so the pricing logic is always visible.
- **Bulk import:** Admins can refresh all tariff data at once from CSV price sheets, replacing the entire reference table in a single transaction.
