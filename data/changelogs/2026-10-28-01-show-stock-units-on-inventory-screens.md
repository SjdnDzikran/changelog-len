---
date: "2026-10-28"
title: "Show stock units on serial and inventory screens"
repo: ui-wms
product:
  - web
additions: 62
deletions: 37
---

- **Unit labels everywhere:** Every serial number, stock line, and available balance now shows its recorded unit (PCS, EA, SET, metres, and others) right beside the number, across the Network, XL Home, BNPB, and BL inventory pages as well as the Tested Inventory per-serial list
- **No more forced "PCS":** Column headers and stock chips no longer assume every item is counted in pieces; the chips now simply read "received" and "issued" without a wrong unit baked into the label
- **Clear when data is missing:** If a unit was never recorded for an item, the screen shows "Belum tercatat" instead of silently displaying an incorrect unit
- **Guidance for warehouse staff:** A short note on each inventory page reminds the team to use the same unit when picking stock or filling in the outbound Excel form
