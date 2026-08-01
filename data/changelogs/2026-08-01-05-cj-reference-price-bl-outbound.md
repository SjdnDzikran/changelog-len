---
date: "2026-08-01"
title: "Show CJ reference price on BL Outbound items"
repo: len-approval-ui
product:
  - web
additions: 376
deletions: 8
---

- **"Hitung Harga Referensi CJ" button:** A new button on the BL Outbound form calculates the CJ reference price for each item on demand. Prices are calculated only when the operator requests them, not on page load, to keep the experience responsive.

- **Per-item price column:** Each item row now has a "Harga Referensi" column showing the calculated reference price in Rupiah. Hovering over the price reveals the full breakdown: actual weight, volumetric weight, billed weight, rate per kg, and lead time.

- **Clear error states:** Items that cannot be priced show a specific reason rather than a blank cell. "Data kurang" means the row is missing required fields (origin, destination, mode, or weight) that the operator can fix. "Tarif belum ada" means the route is genuinely absent from the CJ tariff master.

- **Summary bar:** A total reference price across all priced items is shown above the table, alongside a count of items that could not be calculated.