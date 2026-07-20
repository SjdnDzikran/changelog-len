---
date: "2026-07-20"
title: "Correct Tested Inventory quantity counters for quality inspection records"
repo: api-wms
product:
  - backend
additions: 54
deletions: 2
---

The Recorded, Verified, and Tested quantity counters on the Tested Inventory report now include all relevant stock amounts for items that passed through Quality Inspection.

- **Accurate quantity totals:** Each counter now sums the item's base Quantity, Quality Inspection amount, and Blocked amount, then groups it by the latest inspection status, so items that were sent through QI show the correct recorded quantity instead of a zero or partial value
