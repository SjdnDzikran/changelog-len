---
date: "2026-06-20"
title: "Prevent duplicate serial number entries from simultaneous saves"
repo: api-wms
product:
  - backend
additions: 14
deletions: 3
---

Serial number saves now use database row-level locking to ensure that two operators submitting serial numbers for the same item at the exact same time cannot both pass the available quantity check. This prevents over-allocation of stock that could occur during concurrent use.
