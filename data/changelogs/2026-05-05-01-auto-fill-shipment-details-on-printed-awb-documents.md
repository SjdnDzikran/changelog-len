---
date: "2026-05-05"
title: "Auto-fill shipment weight and dimensions on printed AWB documents"
repo: erp-len-api
product:
  - backend
---

Printed AWB (Air Waybill) documents now display shipment weight, koli count, and volume directly from the system when those values are available. Previously, these fields were always left blank on the printed document, requiring staff to fill them in by hand for every shipment.

- **Weight (Kilo)**, **package count (Koli)**, and **volume** are printed automatically when the shipment data has been recorded in the system
- Fields that have no data remain blank for manual entry, so the existing workflow is preserved for incomplete shipments
- This applies across all AWB document types: the main AWB, the AWB label, and the colly document
