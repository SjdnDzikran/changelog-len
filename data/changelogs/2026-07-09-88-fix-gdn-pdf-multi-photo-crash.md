---
date: "2026-07-09"
title: "Fix delivery note PDF crashing when shipment has many photos"
repo: api-wms
product:
  - backend
additions: 37
deletions: 42
---

- **Crash eliminated:** PDF generation for Goods Delivery Notes no longer fails when a shipment has four or more photos attached, so operations staff can reliably print or download delivery documents for any shipment
- **One page per photo pair:** Photos are now placed two per page, with each pair rendered as its own independent page, preventing the document generator from getting stuck in an infinite measurement loop
- **Improved image rendering:** Updated the photo rendering method to handle image sizing more reliably across different photo resolutions
