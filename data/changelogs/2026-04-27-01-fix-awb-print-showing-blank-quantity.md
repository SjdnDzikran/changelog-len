---
date: "2026-04-27"
title: "Fix AWB Print Showing Blank Quantity"
repo: erp-len-api
product:
  - backend
---

AWB print was displaying a blank quantity value. The root cause was `SanitizePublicTrackingMetrics` incorrectly setting `entity.Quantity = null` for all callers including the print function. The fix removes that line so the actual shipment quantity is preserved during printing.
