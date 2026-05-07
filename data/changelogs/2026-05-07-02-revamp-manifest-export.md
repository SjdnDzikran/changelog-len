---
date: "2026-05-07"
title: "Split manifest export into organized multi-sheet workbook"
repo: erp-len-api
product:
  - backend
---

Manifest exports now generate a single Excel workbook with **three dedicated sheets** instead of one flat table:

- **Data Manifest** — summary of each manifest with driver, vehicle, branches, vendor cost, transport category, and dispatch/inbound dates.
- **Detail AWB** — per-package breakdown linked to each manifest, including sender, recipient, weight, volume, item count, and value.
- **Biaya Perjalanan** — travel cost items with sequence, description, and amount for each manifest.

Raw internal IDs have been removed from the export. Each manifest row now also shows the **name of the user who last modified** the record, making it easier to track changes across teams.
