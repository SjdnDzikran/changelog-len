---
date: "2026-07-15"
title: "Fix AWB print weight showing blank when item weights are zero"
repo: erp-len-api
product:
  - backend
additions: 42
deletions: 26
---

AWB labels and manifests now display the correct weight even when individual item rows have zero weights.

- **Correct weight priority on AWB print:** The printed weight now uses the AWB-level total (the user-approved shipment weight) as the primary source, falling back to item-level calculations only when the total is empty. Previously the system always recalculated from items, so AWBs with a valid summary weight but zero item weights printed with a blank weight field
- **Consistent manifest totals:** The same fallback logic applies to manifest prints, so historical AWBs with valid summary weights contribute correct values to the manifest's actual and chargeable weight columns instead of showing zero
